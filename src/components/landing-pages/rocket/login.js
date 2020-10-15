import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useInput } from './hooks/input'

const LoginPage = () => {
    const data = useStaticQuery(graphql`
        query APIURLQuery {
            site {
                siteMetadata {
                    apiUrl
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

    const onSubmit = (e) => {
        e.preventDefault();

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

                setAuth(state);
            });
    }

    return (
        <section className="vh-100 bg-soft d-flex align-items-center">
            <div className="container">
                {auth.failure ? <div className="row justify-content-center">
                    <div className="col-12 d-flex align-items-center justify-content-center">
                        <div className="alert alert-danger w-100 fmxw-500" role="alert">
                            Invalid credentials given. Please check your username and password and try again.
                        </div>
                    </div>
                </div> : null}

                <div className="row justify-content-center">
                    <div className="col-12 d-flex align-items-center justify-content-center">
                        <div className="signin-inner mt-3 mt-lg-0 bg-white shadow-soft border border-light rounded p-4 p-lg-5 w-100 fmxw-500">
                            <div className="text-center text-md-center mb-4 mt-md-0">
                                <h1 className="mb-3 h3">Sign in to our platform</h1>
                                <p className="text-gray">Use your credentials to access your account.</p>
                            </div>
                            <form className="mt-5" onSubmit={onSubmit}>
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
                                            <div><a href="./forgot-password.html" className="small text-right">Lost password?</a></div>
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
                            <div className="d-block d-sm-flex justify-content-center align-items-center mt-4">
                                <span className="font-weight-normal">
                                    Not registered?&nbsp;
                                    <a href="./sign-up-illustration.html" className="font-weight-bold">Create account</a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoginPage;