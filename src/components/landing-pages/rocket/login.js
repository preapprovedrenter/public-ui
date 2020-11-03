import React from "react"
import LoginForm from './forms/login'
import { Link } from "gatsby"

const LoginPage = () => {
    const onLogin = () => {
        window.location.href = "/app/";
    }

    return (
        <section className="vh-100 bg-soft d-flex align-items-center">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 d-flex align-items-center justify-content-center">
                        <div className="signin-inner mt-3 mt-lg-0 bg-white shadow-soft border border-light rounded p-4 p-lg-5 w-100 fmxw-500">
                            <div className="text-center text-md-center mb-4 mt-md-0">
                                <h1 className="mb-3 h3">Sign in to our platform</h1>
                                <p className="text-gray">Use your credentials to access your account.</p>
                            </div>
                            <LoginForm onLogin={onLogin} />
                            <div className="d-block d-sm-flex justify-content-center align-items-center mt-4">
                                <span className="font-weight-normal">
                                    Not registered?&nbsp;
                                    <Link to="/signup" className="font-weight-bold">
                                        Create account
                                    </Link>
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