import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useInput } from '../hooks/input'
import { useCookies } from 'react-cookie';

const LoginForm = (props) => {
    const data = useStaticQuery(graphql`
        query APIURLQuery {
            site {
                siteMetadata {
                    apiUrl,
                    cookieDomain
                }
            }
        }
    `)
    const username= useInput('');
    const password = useInput('');
    const [auth, setAuth] = useState({
        loading: false,
        failure: false,
        isAuthenticated: false
    });
    const [cookies, setCookie, removeCookie] = useCookies([
        'token', 'token_expires'
    ]);

    const onSubmit = (e) => {
        e.preventDefault();

        removeCookie('token', {
            domain: data.site.siteMetadata.cookieDomain,
            path: '/'
        })
        removeCookie('token_expires', {
            domain: data.site.siteMetadata.cookieDomain,
            path: '/'
        })
        removeCookie('token', {
            domain: 'preapprovedrenter.com',
            path: '/'
        })
        removeCookie('token_expires', {
            domain: 'preapprovedrenter.com',
            path: '/'
        })

        const state = {...auth, loading: true, failure: false};
        setAuth(state);

        const url = `${data.site.siteMetadata.apiUrl}/auth/token`;
        const formData = new FormData();

        formData.append('username', username.value.toLowerCase());
        formData.append('password', password.value);
        formData.append('client_id', 'default');
        formData.append('grant_type', 'password');

        fetch(url, {method: 'POST', body: formData})
            .then(response => response.json())
            .then(response => {
                const state = {...auth, loading: false};
                state.failure = !!response.error;

                if (!state.failure) {
                    const expires_in = 
                        (new Date()).getTime() + (response.expires_in * 1000);

                    setCookie('token', response.access_token, {
                        domain: data.site.siteMetadata.cookieDomain,
                        path: '/'
                    })

                    setCookie('token_expires', expires_in, {
                        domain: data.site.siteMetadata.cookieDomain,
                        path: '/'
                    })
        
                    if (props.onLogin) {
                        props.onLogin();
                    }
                } else {
                    setAuth(state);
                }
            });
    }

    return (
        <form className="mt-5" onSubmit={onSubmit}>
            {auth.failure ? <div className="row justify-content-center">
                <div className="col-12 d-flex align-items-center justify-content-center">
                    <div className="alert alert-danger w-100 fmxw-500" role="alert">
                        Invalid credentials given. Please check your username and password and try again.
                    </div>
                </div>
            </div> : null}

            <fieldset disabled={auth.loading}>
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"><i className="far fa-user"></i></span>
                        </div>
                        <input type="text" name="username"
                            className="form-control" placeholder="Enter email"
                            required {...username.bind} />
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"><i className="fas fa-unlock-alt"></i></span>
                        </div>
                        <input type="password" name="password"
                            className="form-control" placeholder="Password" 
                            required {...password.bind} />
                    </div>
                    <div className="d-block d-sm-flex justify-content-between align-items-right mt-2">
                        <div className="d-none form-group form-check mt-3">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label form-check-sign-white" htmlFor="exampleCheck1">Remember me</label>
                        </div>
                        <div><a href="/passwords/forgot/" className="small text-right">Lost password?</a></div>
                    </div>
                </div>
                <div className="mt-3">
                    {auth.loading ?
                        <button className="btn btn-primary btn-block"
                            type="button" disabled>
                            <span className="spinner-border spinner-border-sm"
                                role="status" aria-hidden="true"></span>
                            &nbsp;Loading...
                        </button> :
                        <button type="submit"
                            className="btn btn-block btn-primary">
                            Sign in
                        </button>
                    }
                </div>
            </fieldset>
        </form>
    );
};

export default LoginForm;