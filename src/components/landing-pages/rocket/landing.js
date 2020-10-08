import React from "react"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const LandingPage = ({ data }) => (
    <StaticQuery
        query={graphql`
            query {
                webapp4: file(relativePath: {glob: "illustrations/webapp4.jpg"}) {
                    childImageSharp {
                        fixed {
                            ...GatsbyImageSharpFixed
                        }
                    }
                },
                webapp5: file(relativePath: {glob: "illustrations/webapp5.jpg"}) {
                    childImageSharp {
                        fixed {
                            ...GatsbyImageSharpFixed
                        }
                    }
                },
                creditReport: file(relativePath: {glob: "illustrations/credit-report.jpg"}) {
                    childImageSharp {
                        fixed {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        `}
        render={data =>
            <>
                <section className="section-header pb-7 pb-lg-11 bg-primary text-white">
                    <div className="container">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-12 col-lg-6">
                                <h2 className="h4 font-weight-normal text-muted">Customize Your Rental Application</h2>
                                <h1 className="display-1 mb-4">Screen Tenants Instantly</h1>
                                <p className="lead mb-3 mb-lg-5"><strong>Completely FREE for Brokers & Property Managers.</strong></p>
                                <a className="btn btn-secondary animate-up-2 mb-5 mb-lg-0" href="https://themesberg.com/docs/rocket/getting-started/overview/"><i className="fas fa-file-alt mr-2"></i>View Demo</a>
                                <Link to="/login" className="btn btn-outline-white animate-up-2 mb-5 mb-lg-0 ml-3">
                                    <i className="fas fa-sign-in-alt mr-2"></i> Login
                                </Link>
                            </div>
                            <div className="col-12 col-lg-5">
                                <div className="card shadow-sm text-dark p-4">
                                    <div className="card-body p-2">
                                        <form action="#">
                                            <div className="form-group mb-4">
                                                <label className="h6 text-dark" htmlFor="account-type">Account Type</label>
                                                <div className="position-relative">
                                                    <select className="custom-select" id="account-type" required defaultValue="">
                                                        <option value="" disabled hidden>Please choose one</option>
                                                        <option value="agent">I'm a Real Estate Agent</option>
                                                        <option value="manager">I'm a Property Manager</option>
                                                        <option value="landlord">I'm a Landlord</option>
                                                        <option value="applicant">I'm an Applicant</option>
                                                        <option value="guarantor">I'm a Guarantor</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group mb-4">
                                                <label className="h6 text-dark" htmlFor="email">Email Address</label>
                                                <input id="email" name="contact-email" type="email" className="form-control" placeholder="james@example.com" required />
                                            </div>
                                            <div className="form-group mb-4">
                                                <label className="h6 text-dark" htmlFor="password">Password</label>
                                                <input id="password" name="password" type="password" className="form-control" placeholder="" required />
                                            </div>

                                            <div className="form-group mb-4">
                                                <div className="checkbox signup-checkboxes-white-bg">
                                                    <label>
                                                        <input type="checkbox" name="tos" ng-model="data.tos" required />&nbsp;
                                                        <span>
                                                            By signing up I agree to&nbsp;
                                                            <a href="https://preapprovedrenter.com/tos/customers/" className="text-action">
                                                                customer terms of use
                                                            </a> or&nbsp;
                                                            <a href="https://preapprovedrenter.com/tos/applicant/" >
                                                                user terms of use
                                                            </a> along with the Transunion&nbsp;
                                                            <a href="https://preapprovedrenter.com/sm/end-user-agreement/" >
                                                                end user agreement
                                                            </a> or&nbsp;
                                                            <a href="https://preapprovedrenter.com/sm/consumer-agreement/" >
                                                                consumer agreement
                                                            </a>.
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                            <button className="btn btn-primary btn-block btn-loading" type="submit">Sign up</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pattern bottom"></div>
                </section>

                <div className="clients section section-sm py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-gray text-center">
                                <div className="icon icon-xl mr-2 mr-sm-5">
                                    <img src="/img/clients/keller-williams-realty.svg" alt="icon" />
                                </div>
                                <div className="icon icon-xl mr-2 mr-sm-5">
                                    <img src="/img/clients/coldwell-banker-reliable.svg" alt="icon" />
                                </div>
                                <div className="icon icon-xl mr-2 mr-sm-5">
                                    <img src="/img/clients/the-corcoran-group.svg" alt="icon" />
                                </div>
                                <div className="icon icon-xl mr-2 mr-sm-5">
                                    <img src="/img/clients/eXp-realty.svg" alt="icon" />
                                </div>
                                <div className="icon icon-xl mr-2 mr-sm-5">
                                    <img src="/img/clients/halstead.svg" alt="icon" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="section section-lg pt-6">
                    <div className="container">
                        <div className="row justify-content-center mb-5 mb-lg-6">
                            <div className="col-12 col-md-8 text-center">
                                <h2 className="h1 font-weight-bolder mb-4">Who is PreApproved Renter for?</h2>
                                <p className="lead">
                                    PreApproved Renter is for Real Estate
                                    Professionals looking for an easy to use
                                    rental application form that can run
                                    credit and background checks.
                                    <br/>
                                    Here’s how it works:
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="d-flex col-12 col-md-6 col-lg-3 mb-5 mb-lg-0 text-center">      
                                <div className="card border-light p-4">
                                    <div className="card-header pb-0">
                                        <div className="image-md">
                                            <img src="/img/icons/envelope.svg" alt="icon" />
                                        </div>
                                        <h2 className="h4 mt-3">You send a link</h2>
                                        <p className="mb-0">
                                            Sign up and get a unique link to
                                            your application. We also have
                                            links to 100s of standard
                                            applications.<br/>
                                            Simply send your applicant a link
                                            and they'll fill out an online
                                            application form.
                                        </p>
                                    </div>
                                    <div className="card-body">
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex col-12 col-md-6 col-lg-3 mb-5 mb-lg-0 text-center">      
                                <div className="card border-light p-4">
                                    <div className="card-header pb-0">
                                        <div className="image-md">
                                            <img src="/img/icons/user.svg" alt="icon" />
                                        </div>
                                        <h2 className="h4 mt-3">Applicant Applies</h2>
                                        <p className="mb-0">The applicant applies online through any internet connected device. Once they submit their application. We'll email you.
        </p>
                                    </div>
                                    <div className="card-body">
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex col-12 col-md-6 col-lg-3 mb-5 mb-lg-0 text-center">      
                                <div className="card border-light p-4">
                                    <div className="card-header pb-0">
                                        <div className="image-md">
                                            <img src="/img/icons/form.svg" alt="icon" />
                                        </div>
                                        <h2 className="h4 mt-3">You get the application</h2>
                                        <p className="mb-0">Log on to see their application, paperwork and background checks immediately</p>
                                    </div>
                                    <div className="card-body">
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex col-12 col-md-6 col-lg-3 mb-5 mb-lg-0 text-center">      
                                <div className="card border-light p-4">
                                    <div className="card-header pb-0">
                                        <div className="image-md">
                                            <img src="/img/icons/deal.svg" alt="icon" />
                                        </div>
                                        <h2 className="h4 mt-3">Generate Leases</h2>
                                        <p className="mb-0">Autogenerate leases with tenants application for e-signature</p>
                                    </div>
                                    <div className="card-body">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section section-lg bg-white pt-0">
                    <div className="container">
                        <div className="row row-grid align-items-center mb-7">
                            <div className="col-12 col-lg-5 order-lg-2">
                                <h2 className="font-weight-bolder mb-4">Customize Your Application</h2>
                                <p>We understand you may request specific information on your application.</p>
                                <p>If you don't like our default form you can easily customize your own application using our drag-and-drop form builder.</p>
                                <a href="./dashboard/traffic-sources.html" className="btn btn-primary mt-3 animate-up-2">
                                    Sample Application Form
                                    <span className="icon icon-xs ml-2">
                                        <i className="fas fa-external-link-alt"></i>
                                    </span>
                                </a>
                            </div>
                            <div className="col-12 col-lg-6 mr-lg-auto">
                                <Img fixed={data.webapp4.childImageSharp.fixed} className="img-thumbnail" alt="Form Builder Screenshot" />
                            </div>
                        </div>
                        <div className="row row-grid align-items-center mb-7">
                            <div className="col-12 col-lg-5">
                                <h2 className="font-weight-bolder mb-4">Screen Tenants Instantly</h2>
                                <p>Our application is able to instantly produce background checks including credit reports, criminal background and landlord tenant history.</p>
                                <p>Payments are made through our secure online system. This take out the need to collect application fees via cash or check (unless you want to).  Our system also allows landlords, property managers, and brokers to collect processing fees.</p>
                                <a href="./dashboard/app-analysis.html" className="btn btn-primary mt-3 animate-up-2">
                                    Sample Report
                                    <span className="icon icon-xs ml-2">
                                        <i className="fas fa-external-link-alt"></i>
                                    </span>
                                </a>
                            </div>
                            <div className="col-12 col-lg-6 ml-lg-auto text-right">
                                <Img fixed={data.creditReport.childImageSharp.fixed} className="img-thumbnail" alt="Sample Credit Report Screenshot" />
                            </div>
                        </div>
                        <div className="row row-grid align-items-center">
                            <div className="col-12 col-lg-5 order-lg-2">
                                <h2 className="font-weight-bolder mb-4">Autogenerate Leases with Dotloop</h2>
                                <p>Our application is able to automatically generate leases, riders, disclosure forms and similar documents.</p>
                                <p>We have partnered with dotloop - the leading real estate transaction management system - to help facilitate this.</p>
                            </div>
                            <div className="col-12 col-lg-6 mr-lg-auto">
                                <Img fixed={data.webapp5.childImageSharp.fixed} className="img-thumbnail" alt="Sample Lease Screenshot" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section section-lg py-7 py-lg-10 bg-primary">
                    <div className="pattern top"></div>
                    <div className="container">
                        <div className="container">
                            <div className="row text-white">
                                <div className="col-md-6 col-lg-8 text-center mx-auto">
                                    <h2 className="h1 mb-4">PreApproved Renter perks</h2>
                                    <p className="lead">
                                        Learn more about some of the benefits
                                        of using our service
                                    </p>
                                </div>
                            </div>
                            <div className="row mt-6">
                                <div className="d-flex col-sm-12 col-md-12 col-lg-6">

                                    <div className="card border-light text-primary mb-4">
                                        <div className="card-body">
                                            <div className="d-flex p-3">
                                                <div>
                                                    <div className="icon icon-primary">
                                                        <span className="fas fa-headset"></span>
                                                    </div>
                                                </div>
                                                <div className="pl-4">
                                                    <h5 className="mb-3">Custom Support 7 Days a Week</h5>
                                                    <p className="icon-box-text">Have a question, concern or feedback for us? Our support team is a quick chat or email away.</p>
                                                    <a href="mailto:support@preapprovedrenter.com" className="btn btn-sm btn-primary">
                                                        Email Us
                                                        <i className="fas fa-envelope ml-1"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="d-flex col-sm-12 col-md-12 col-lg-6">

                                    <div className="card border-light text-primary mb-4">
                                        <div className="card-body">
                                            <div className="d-flex p-3">
                                                <div>
                                                    <div className="icon icon-primary">
                                                        <span className="fas fa-lock"></span>
                                                    </div>
                                                </div>
                                                <div className="pl-4">
                                                    <h5 className="icon-box-title">
                                                        Highest Industry Standard for Security
                                                    </h5>
                                                    <p className="icon-box-text">
                                                        PreApprovedRenter uses
                                                        the industries highest
                                                        standards for security.
                                                        <br/>
                                                        Get a full copy of our
                                                        ISO/IEC 27001 Report.
                                                    </p>
                                                    <a href="./support-topic.html" className="btn btn-sm btn-primary">
                                                        Learn more
                                                        <i className="fas fa-link ml-1"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="d-flex col-sm-12 col-md-12 col-lg-6">

                                    <div className="card border-light text-primary mb-4">
                                        <div className="card-body">
                                            <div className="d-flex p-3">
                                                <div>
                                                    <div className="icon icon-primary">
                                                        <span className="fas fa-book-reader"></span>
                                                    </div>
                                                </div>
                                                <div className="pl-4">
                                                    <h5 className="icon-box-title">Learning materials</h5>
                                                    <p className="icon-box-text">The marketing tutorials on our blog and YouTube channel, often feature our tools.</p>
                                                    <a href="./support-topic.html" className="btn btn-sm btn-primary">
                                                        Visit Our Blog
                                                        <i className="fas fa-bookmark ml-1"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="d-flex col-sm-12 col-md-12 col-lg-6">

                                    <div className="card border-light text-primary mb-4">
                                        <div className="card-body">
                                            <div className="d-flex p-3">
                                                <div>
                                                    <div className="icon icon-primary">
                                                        <span className="fas fa-rocket"></span>
                                                    </div>
                                                </div>
                                                <div className="pl-4">
                                                    <h5 className="icon-box-title">Features released regularly</h5>
                                                    <p className="icon-box-text">We frequently update existing tools and release new features — many of which are heavily influenced by requests from our customers.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pattern bottom"></div>
                </section>

                <section className="section">
                    <div className="container">
                        <div className="row justify-content-center mb-5 mb-lg-7">
                            <div className="col-12 col-md-8 text-center">
                                <h1 className="h1 mb-4">Recommended by leading experts in Real Estate</h1>
                                <p className="lead">Our products are loved by Real Estate professionals across the US</p>
                            </div>
                        </div>
                        <div className="row mb-lg-5">
                            <div className="col-12 col-lg-6">
                                <div className="customer-testimonial d-flex mb-5">
                                    <img src="/img/users/moshe-kanarfogel.jpg" className="image image-sm mr-3 rounded-circle shadow" alt="" />
                                    <div className="content-wrapper bg-soft shadow-soft border border-light rounded position-relative p-4">
                                        <div className="d-flex mb-4">
                                            <span className="text-warning mr-2"><i className="star fas fa-star"></i></span>
                                            <span className="text-warning mr-2"><i className="star fas fa-star"></i></span>
                                            <span className="text-warning mr-2"><i className="star fas fa-star"></i></span>
                                            <span className="text-warning mr-2"><i className="star fas fa-star"></i></span>
                                            <span className="text-warning mr-2"><i className="star fas fa-star"></i></span>
                                        </div>
                                        <p className="mt-2">"I was one of the first users of PreApprovedRenter when they launched in May 2017 and I still use them to this day. I am able to quickly process rental applications and run background checks for the landlords I work with. It has immensely improved the efficiency of my rental process. I use this service everyday and highly recommend it."</p>
                                        <span className="h6">- Moshe Kanarfogel <small className="ml-0 ml-md-2">Associate Broker - Compass</small></span>
                                    </div>
                                </div>
                                <div className="customer-testimonial d-flex mb-5">
                                    <img src="/img/users/michael-apfelbaum.jpg" className="image image-sm mr-3 rounded-circle shadow" alt="" />
                                    <div className="content-wrapper bg-soft shadow-soft border border-light rounded position-relative p-4">
                                        <div className="d-flex mb-4">
                                            <span className="text-warning mr-2"><i className="star fas fa-star"></i></span>
                                            <span className="text-warning mr-2"><i className="star fas fa-star"></i></span>
                                            <span className="text-warning mr-2"><i className="star fas fa-star"></i></span>
                                            <span className="text-warning mr-2"><i className="star fas fa-star"></i></span>
                                            <span className="text-warning mr-2"><i className="star fas fa-star"></i></span>
                                        </div>
                                        <p className="mt-2">"We use PreApproved mainly for its ease of use, and it’s immensely simplified our leasing process. We use the service both to run transunion credit checks as well as for auto generating leases."</p>
                                        <span className="h6">- Mike Apfelbaum <small className="ml-0 ml-md-2">Private Landlord</small></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6">
                                <div className="customer-testimonial d-flex mb-5">
                                    <img src="/img/users/dylan-pichulik.jpg" className="image image-sm mr-3 rounded-circle shadow" alt="" />
                                    <div className="content-wrapper bg-soft shadow-soft border border-light rounded position-relative p-4">
                                        <div className="d-flex mb-4">
                                            <span className="text-warning mr-2"><i className="star fas fa-star"></i></span>
                                            <span className="text-warning mr-2"><i className="star fas fa-star"></i></span>
                                            <span className="text-warning mr-2"><i className="star fas fa-star"></i></span>
                                            <span className="text-warning mr-2"><i className="star fas fa-star"></i></span>
                                            <span className="text-warning mr-2"><i className="star fas fa-star"></i></span>
                                        </div>
                                        <p className="mt-2">"We process our tenant screening through PreApprovedRenter. We have found the data and background checks to be reliable which has helped keep our evictions at low levels. The platform is user friendly and simple to use."</p>
                                        <span className="h6">- Dylan Pichulik <small className="ml-0 ml-md-2">CEO - XL Real Property Management</small></span>
                                    </div>
                                </div>
                                <div className="customer-testimonial d-flex mb-5">
                                    <img src="/img/users/maria-goris.jpg" className="image image-sm mr-3 rounded-circle shadow" alt="" />
                                    <div className="content-wrapper bg-soft shadow-soft border border-light rounded position-relative p-4">
                                        <div className="d-flex mb-4">
                                            <span className="text-warning mr-2"><i className="star fas fa-star"></i></span>
                                            <span className="text-warning mr-2"><i className="star fas fa-star"></i></span>
                                            <span className="text-warning mr-2"><i className="star fas fa-star"></i></span>
                                            <span className="text-warning mr-2"><i className="star fas fa-star"></i></span>
                                            <span className="text-warning mr-2"><i className="star fas fa-star"></i></span>
                                        </div>
                                        <p className="mt-2">"PreApproved Renter has been one of the most powerful tools we use in our office. Every agent in our office has their own unique link to our firm's rental application. This allows them to seamlessly collect a clients paperwork and process rental applications on behalf of our owners. We have the service integrated with Dotloop to quickly process leases which saves us time. The best part of their platform is their customer service which is fast to respond to any issues or questions we have."</p>
                                        <span className="h6">- Maria Goris <small className="ml-0 ml-md-2">Founder / Real Estate Broker - CitySites</small></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col text-center">
                                <a href="./testimonials.html" className="btn btn-primary animate-up-2"><span className="mr-2"><i className="fas fa-book-open"></i></span> See our reviews on Trust Pilot</a>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section section-lg pb-5 bg-soft">
                    <div className="container">
                        <div className="row"> 
                            <div className="col-12 text-center mb-5">
                                <h2 className="mb-4">Tenant Screening Starts with PreApproved Renter</h2>
                                <p className="lead mb-5">As featured in the</p>
                                <img width="300" src="/img/icons/the-new-york-times.svg" alt="The New York Times logo" />
                            </div>
                        </div> 
                    </div>    
                </section>

                <footer className="footer section pt-6 pt-md-8 pt-lg-10 pb-3 bg-primary text-white overflow-hidden">
                    <div className="pattern top pattern-soft"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 mb-6 text-center" style={{fontSize: "2em"}}>
                                Try it! It's Completely FREE for brokers, landlords & property managers...
                                <div className="mt-4">
                                    <a href="https://themes.getbootstrap.com/product/rocket/" className="btn btn-secondary btn-pricing-plan animate-up-2 mr-3">SIGN UP</a>
                                    <Link to="/login" className="btn btn-outline-white animate-up-2">
                                        <i className="fas fa-sign-in-alt mr-2"></i> LOG IN
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-4 mb-4 mb-lg-0">
                                <a className="footer-brand mr-lg-5 d-flex align-items-center" href="../index.html">
                                    <img src="/img/brand/logo.svg" alt="Footer logo" />
                                </a>
                                <p className="my-4"></p>
                            </div>
                            <div className="col-6 col-sm-6 col-lg-4 mb-4 mb-lg-0">
                                <ul className="links-vertical">
                                <li><a href="https://themesberg.com/products">Sign up</a></li>
                                    <li><a href="https://themesberg.com/blog">Blog</a></li>
                                    <li><a href="https://themesberg.com/contact">Contact Us</a></li>
                                </ul>
                            </div>
                            <div className="col-6 col-sm-6 col-lg-4 mb-4 mb-lg-0">
                                <ul className="links-vertical">
                                    <li><a href="../pages/about.html">Privacy Policy</a></li>
                                    <li><a href="../pages/contact.html">My Payments Terms and Conditions</a></li>
                                    <li><a href="https://themesberg.com/docs/rocket/getting-started/overview/">User Terms of Use</a></li>
                                    <li><a href="../pages/pricing.html">Customer Terms &amp; Conditions</a></li>
                                </ul>
                            </div>
                        </div>
                        <hr className="my-4 my-lg-5" />
                        <div className="row">
                            <div className="col pb-4 mb-md-0">
                                <div className="d-flex text-center justify-content-center align-items-center">
                                    <p className="font-weight-normal font-small mb-0">Copyright © Atomic Innovation LLC <span className="current-year">2020</span>. All rights reserved.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </>
        }
    />
)

export default LandingPage
