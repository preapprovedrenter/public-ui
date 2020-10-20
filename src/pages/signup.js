import React from "react"

import Layout from "../components/layout"
import SignupForm from "../components/landing-pages/rocket/forms/signup"
import Header from "../components/header"
import SEO from "../components/seo"

const Page = () => (
    <Layout>
        <SEO title="Sign up" />
        <Header/>
        <section className="d-flex align-items-center pt-8 mb-4">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-3 d-none d-xl-flex d-lg-flex align-items-center justify-content-center">
                        <div className="form-bg-image"
                            dataBackground="/img/illustrations/signup-agent.svg"
                            style={{
                                backgroundImage: 'url("/img/illustrations/signup-agent.svg")',
                                width: "235px",
                                height: "575px"
                            }}>
                        </div>
                    </div>
                    <div className="col-lg-5 col-xl-5 col-md-12 col-sm-12 col-xs-12 d-flex align-items-center justify-content-center">
                        <div className="signin-inner mt-3 mt-lg-0 bg-white shadow-soft border border-light rounded p-4 p-lg-5 w-100 fmxw-500">
                            <div className="text-center text-md-center mb-4 mt-md-0">
                                <h1 className="mb-3 h3">Create an account</h1>
                            </div>
                            <SignupForm />
                        </div>
                    </div>
                    <div className="col-4 d-none d-xl-flex d-lg-flex align-items-center justify-content-center">
                        <div className="form-bg-image"
                            dataBackground="/img/illustrations/signup-tenant.svg"
                            style={{
                                backgroundImage: 'url("/img/illustrations/signup-tenant.svg")',
                                width: "350px",
                                height: "575px"
                            }}>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Layout>
)

export default Page
