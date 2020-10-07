import React from "react"

const LoginPage = () => (
    <>
        <section className="vh-100 bg-soft d-flex align-items-center">
            <div className="container">
                <div className="row justify-content-center form-bg-image pt-8" data-background="/img/illustrations/signup.svg">
                    <div className="col-12 d-flex align-items-center justify-content-center">
                        <div className="signin-inner mt-3 mt-lg-0 bg-white shadow-soft border border-light rounded p-4 p-lg-5 w-100 fmxw-500">
                            <div className="text-center text-md-center mb-4 mt-md-0">
                                <h1 className="mb-3 h3">Sign in to our platform</h1>
                                <p className="text-gray">Use your credentials to access your account.</p>
                            </div>
                            <form className="mt-5">
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="far fa-user"></i></span>
                                        </div>
                                        <input type="email" className="form-control" id="input-email"
                                            placeholder="Enter email" required />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fas fa-unlock-alt"></i></span>
                                        </div>
                                        <input className="form-control" placeholder="Password" type="password" required />
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
                                    <button type="submit" className="btn btn-block btn-primary">Sign in</button>
                                </div>
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
    </>
);

export default LoginPage;