import React, { useState, useRef } from "react"
import Overlay from "react-bootstrap/Overlay";
import Popover from "react-bootstrap/Popover";
import { useStaticQuery, graphql } from "gatsby"
import { useCookies } from 'react-cookie';
import { useInput } from '../hooks/input'

const SignupForm = () => {
    const data = useStaticQuery(graphql`
        query siteData {
            site {
                siteMetadata {
                    apiUrl,
                    cookieDomain
                }
            }
        }
    `)
    const [cookies, setCookie] = useCookies([
        'preappQS', 'token', 'token_expires_at'
    ]);
    const username = useInput('');
    const password = useInput('');
    const userTypeRef = useRef(null);
    const [signup, setSignup] = useState({
        processing: false,
        failure: false,
        issues: null,
        disabled: false,
        userTypeConfirmed: false,
    });

    const onUserTypeChanged = userType => {
        if (!signup.userTypeConfirmed &&
            (userType === "applicant" || userType === "guarantor")) {
            const state = {...signup, disabled: true};
            setSignup(state);
        }
    };

    const userType = useInput('', onUserTypeChanged);

    const onSubmit = (e) => {
        e.preventDefault();

        const state = {...signup, processing: true, failure: false};
        setSignup(state);

        var QS = cookies["preappQS"] || "";

        let role = 'ADMIN';
        if (userType.value === 'applicant'
            || userType.value === 'guarantor') {
            role = 'APPLICANT';
        }

        const params = {
            username: username.value.toLowerCase(),
            password: password.value,
            user_type: userType.value,
            role,
            qs: QS
        }

        fetch(`${data.site.siteMetadata.apiUrl}/api/v1/signup/`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(params)
        })
        .then(response => {
            if (response.status === 422 || response.status >= 500) {
                response.json().then(response => {
                    const issues = response._issues || null;
                    const state = {...signup, processing: false, failure: true, issues};
                    setSignup(state);
                    })
            } else {
                const formData = new FormData();

                formData.append('username', username.value.toLowerCase());
                formData.append('password', password.value);
                formData.append('client_id', 'default');
                formData.append('grant_type', 'password');

                fetch(`${data.site.siteMetadata.apiUrl}/auth/token/`, {
                    method: 'POST',
                    body: formData
                }).then(response => {
                    response.json().then(result => {
                        const expires_in = (new Date()).getTime() +
                            (result.expires_in * 1000);

                        setCookie('token', result.access_token, {
                            maxAge: result.expires_in,
                            path: '/'
                        })

                        setCookie('token_expires_at', expires_in, {
                            maxAge: result.expires_in,
                            path: '/'
                        })

                        window.location.href = "/app/?welcome";
                    });
                });
            }
        });
    }

    const onConfirmApplicantUserType = () => {
        const state = {...signup, disabled: false, userTypeConfirmed: true};
        setSignup(state);
    }

    return (
        <form onSubmit={onSubmit} className={signup.disabled ? "disabled": ""}>
            {signup.failure ? <div className="row justify-content-center mb-2">
                <div className="col-12 d-flex align-items-center justify-content-center">
                    <div className="alert alert-danger w-100 fmxw-500" role="alert">
                        There was an error processing your request, please double check the fields below and try again.
                    </div>
                </div>
            </div> : null}
            <fieldset disabled={signup.processing}>
                <div className="form-group mb-4">
                    <label className="h6 text-dark" htmlFor="account-type">
                        Account Type
                    </label>
                    <Overlay target={userTypeRef.current}
                        show={signup.disabled && !signup.userTypeConfirmed}
                        placement="bottom">
                        <Popover id="popover-contained">
                            <Popover.Title as="h3">
                                <i className="text-warning fas fa-exclamation-triangle"></i>&nbsp; Are you a Tenant?
                                <button type="button" className="close" aria-label="Close"
                                    onClick={onConfirmApplicantUserType}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </Popover.Title>
                            <Popover.Content>
                                <div className="text-justify">
                                    If you are trying to apply on an apartment please reach
                                    out to the Landlord, Property Manager or Real Estate Agent
                                    for a copy of their rental application vs. signing up here.
                                    <br/>
                                    <br/>
                                    If you are trying to sign up as a Real Estate Professional
                                    to screen tenants please select Landlord, Real Estate Agent
                                    or Property Manager from the dropdown list.
                                </div>
                            </Popover.Content>
                        </Popover>
                    </Overlay>

                    <div className="position-relative">
                        <select ref={userTypeRef} className="custom-select" id="account-type"
                            required {...userType.bind}>
                            <option value="" disabled hidden>Please choose one</option>
                            <option value="agent">I'm a Real Estate Agent</option>
                            <option value="manager">I'm a Property Manager</option>
                            <option value="landlord">I'm a Landlord</option>
                            <option value="applicant">I'm an Applicant / Tenant</option>
                            <option value="guarantor">I'm a Guarantor</option>
                        </select>
                    </div>
                </div>
                <div className="form-group mb-4">
                    <label className="h6 text-dark" htmlFor="email">
                        Email Address
                    </label>
                    <input id="email" name="contact-email" type="email"
                        className={`form-control ${(signup.issues && signup.issues.username) ? 'is-invalid' : ''}`}
                        placeholder="james@example.com" required {...username.bind} />
                    {signup.issues && signup.issues.username ? 
                        <div className="invalid-feedback">
                            This username is invalid or has already been taken
                        </div> : null
                    }
                </div>
                <div className="form-group mb-4">
                    <label className="h6 text-dark" htmlFor="password">
                        Password
                    </label>
                    <input id="password" name="password" type="password"
                        className={`form-control ${(signup.issues && signup.issues.password) ? 'is-invalid' : ''}`}
                        placeholder="" required {...password.bind} />
                    {signup.issues && signup.issues.password ? 
                        <div className="invalid-feedback">
                            Password must meet the following requirements:&nbsp;
                            at least one number, at least one lower case letter,&nbsp;
                            at least one capital letter.
                        </div> : null
                    }
                </div>

                <div className="form-group mb-4">
                    <div className="checkbox signup-checkboxes-white-bg">
                        <label>
                            <input type="checkbox" name="tos" ng-model="data.tos" required />&nbsp;
                            <span>
                                By signing up I agree to&nbsp;
                                <a href="/tos/customers/" className="text-action" target="_blank">
                                    customer terms of use
                                </a> or&nbsp;
                                <a href="/tos/applicant/" target="_blank">
                                    user terms of use
                                </a> along with the Transunion&nbsp;
                                <a href="/sm/end-user-agreement/" target="_blank">
                                    end user agreement
                                </a> or&nbsp;
                                <a href="/sm/consumer-agreement/" target="_blank">
                                    consumer agreement
                                </a>.
                            </span>
                        </label>
                    </div>
                </div>
                {signup.processing ?
                    <button className="btn btn-primary btn-block" type="button"
                        disabled>
                        <span className="spinner-border spinner-border-sm"
                            role="status" aria-hidden="true"></span>
                        &nbsp;Loading...
                    </button> :
                    <button type="submit" className="btn btn-block btn-primary">
                        Sign up
                    </button>
                }
            </fieldset>
        </form>
    );
};

export default SignupForm;