import React from "react"
import { Link, withPrefix } from "gatsby"

import { Helmet } from "react-helmet"

import Layout from "../../layout"
import SEO from "../../seo"

import './theme.scss'
import '../../../../static/vendor/@fortawesome/fontawesome-free/css/all.min.css'

const SecondPage = () => (
    <>
        <Helmet>
            <script src={withPrefix('vendor/popper.js/dist/umd/popper.min.js')} type="text/javascript" defer />
            <script src={withPrefix('vendor/bootstrap/dist/js/bootstrap.min.js')} type="text/javascript" defer />
            <script src={withPrefix('vendor/headroom.js/dist/headroom.min.js')} type="text/javascript" defer />

            <script src={withPrefix('vendor/countup.js/dist/countUp.min.js')} type="text/javascript" defer />
            <script src={withPrefix('vendor/jquery-countdown/dist/jquery.countdown.min.js')} type="text/javascript" defer />
            <script src={withPrefix('vendor/smooth-scroll/dist/smooth-scroll.polyfills.min.js')} type="text/javascript" defer />
            <script src={withPrefix('vendor/prismjs/prism.js')} type="text/javascript" defer />

            <script src={withPrefix('vendor/jqvmap/dist/jquery.vmap.min.js')} type="text/javascript" defer />
            <script src={withPrefix('vendor/jqvmap/dist/maps/jquery.vmap.world.js')} type="text/javascript" defer />

            <script src={withPrefix('js/rocket.js')} type="text/javascript" defer />
        </Helmet>
        <Layout>
            <SEO title="Page two" />
               <header className="header-global">
                    <nav id="navbar-main" className="navbar navbar-main navbar-expand-lg navbar-dark navbar-theme-primary headroom py-lg-2 px-lg-6">
                        <div className="container">
                            <a className="navbar-brand" href="../index.html">
                                <div className="d-flex align-items-center">
                                    <img className="navbar-brand-dark rotate-logo" src="/img/brand/logo-xl.png" alt="Logo" />
                               </div>
                            </a>
                            <div className="navbar-collapse collapse" id="navbar_global">
                                <div className="navbar-collapse-header">
                                    <div className="row">
                                        <div className="col-6 collapse-brand">
                                            <a className="d-flex align-items-center" href="../index.html">
                                                <img src="/img/brand/dark.svg" alt="Logo dark" />
                                            </a>
                                        </div>
                                    <div className="col-6 collapse-close">
                                        <a href="#navbar_global" className="fas fa-times" data-toggle="collapse"
                                        data-target="#navbar_global" aria-controls="navbar_global" aria-expanded="false"
                                        aria-label="Toggle navigation"></a>
                                    </div>
                                </div>
                            </div>
                            <ul className="navbar-nav navbar-nav-hover justify-content-center">
                                <li className="nav-item">
                                    <a href="../index.html" className="nav-link">Overview</a>
                                </li>
                            </ul>
                        </div>
                        <div className="d-none d-lg-block">
                            <a href="https://themes.getbootstrap.com/product/rocket/" target="_blank" className="btn btn-secondary btn-pricing-plan animate-up-2 mr-3"><i className="fas fa-shopping-cart mr-2"></i> Buy now</a>
                            <a href="https://themesberg.com/docs/rocket/getting-started/overview/" target="_blank" className="btn btn-outline-white btn-docs animate-up-2"><i className="fas fa-book mr-2"></i> Docs v2.0</a>
                        </div>
                        <div className="d-flex d-lg-none align-items-center ml-auto">
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar_global"
                            aria-controls="navbar_global" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>
                    </div>
                </nav>
            </header>
            <main>
                <div className="preloader bg-soft flex-column justify-content-center align-items-center">
                    <img className="loader-element" src="/img/brand/dark.svg" height="50" alt="Rocket logo" />
                </div>
                <section className="section-header pb-7 pb-lg-11 bg-primary text-white">
                    <div className="container">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-12 col-lg-6">
                                <h2 className="h4 font-weight-normal text-muted">Real Estate Solutions to</h2>
                                <h1 className="display-1 mb-4">Rent Applications</h1>
                                <p className="lead mb-3 mb-lg-5">Customize your rental applications and screen tenants instantly. <strong>Completely FREE for Brokers & Property Managers.</strong></p>
                                <a className="btn btn-secondary animate-up-2 mb-5 mb-lg-0" target="_blank" href="https://themesberg.com/docs/rocket/getting-started/overview/"><i className="fas fa-file-alt mr-2"></i>View Demo</a>
                            </div>
                            <div className="col-12 col-lg-5">
                                <div className="card shadow-sm text-dark p-4">
                                    <div className="card-body p-2">
                                        <form action="#">
                                            <div className="form-group mb-4">
                                                <label className="h6 text-dark" htmlFor="account-type">Account Type</label>
                                                <div className="position-relative">
                                                    <select className="custom-select" id="account-type" required="" defaultValue="agent">
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
                                                            <a href="https://preapprovedrenter.com/tos/customers/" target="_blank" className="text-action">
                                                                customer terms of use
                                                            </a> or&nbsp;
                                                            <a href="https://preapprovedrenter.com/tos/applicant/" target="_blank">
                                                                user terms of use
                                                            </a> along with the Transunion&nbsp;
                                                            <a href="https://preapprovedrenter.com/sm/end-user-agreement/" target="_blank">
                                                                end user agreement
                                                            </a> or&nbsp;
                                                            <a href="https://preapprovedrenter.com/sm/consumer-agreement/" target="_blank">
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

                <div className="section section-sm py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-gray text-center">
                                <div className="icon icon-xl mr-2 mr-sm-5">
                                    <span className="fab fa-stripe"></span>
                                </div>
                                <div className="icon icon-xl mr-2 mr-sm-5">
                                    <span className="fab fa-digg"></span>
                                </div>
                                <div className="icon icon-xl mr-2 mr-sm-5">
                                    <span className="fab fa-fedex"></span>
                                </div>
                                <div className="icon icon-xl mr-2 mr-sm-5">
                                    <span className="fab fa-ember"></span>
                                </div>
                                <div className="icon icon-xl mr-2 mr-sm-5">
                                    <span className="fab fa-d-and-d-beyond"></span>
                                </div>
                                <div className="icon icon-xl">
                                    <span className="fab fa-angrycreative"></span>
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
                                <p className="lead">Self-Service Analytics or ad hoc reporting gives users the ability to develop rapid reports, empowering users to analyze their data.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-6 col-lg-3 mb-5 mb-lg-0 text-center">      
                                <div className="card border-light p-4">
                                    <div className="card-header pb-0">
                                        <div className="image-md">
                                            <img src="/img/icons/envelope.svg" alt="icon" />
                                        </div>
                                        <h2 className="h4 mt-3">You send a link</h2>
                                        <p className="mb-0">Sign up and get a unique link to your application. We also have links to 100s of other landlord applications. Simply send your applicant a link and they'll fill out an online application form.
</p>
                                    </div>
                                    <div className="card-body">
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-3 mb-5 mb-lg-0 text-center">      
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
                            <div className="col-12 col-md-6 col-lg-3 mb-5 mb-lg-0 text-center">      
                                <div className="card border-light p-4">
                                    <div className="card-header pb-0">
                                        <div className="image-md">
                                            <img src="/img/icons/form.svg" alt="icon" />
                                        </div>
                                        <h2 className="h4 mt-3">You get the application</h2>
                                        <p className="mb-0">Log on to see their application, paperwork and background checks immediately
</p>
                                    </div>
                                    <div className="card-body">
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-3 mb-5 mb-lg-0 text-center">      
                                <div className="card border-light p-4">
                                    <div className="card-header pb-0">
                                        <div className="image-md">
                                            <img src="/img/icons/deal.svg" alt="icon" />
                                        </div>
                                        <h2 className="h4 mt-3">Generate Leases</h2>
                                        <p className="mb-0">Autogenerate leases with tenants application for e-signature
</p>
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
                                <img src="https://preapprovedrenter.com/app/img/webapp4.png" className="img-thumbnail" alt="image" />
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
                            <div className="col-12 col-lg-6 ml-lg-auto">
                                <img src="https://preapprovedrenter.com/app/img/webapp3.png" className="img-thumbnail" alt="image" />
                            </div>
                        </div>
                        <div className="row row-grid align-items-center">
                            <div className="col-12 col-lg-5 order-lg-2">
                                <h2 className="font-weight-bolder mb-4">Autogenerate Leases with Dotloop</h2>
                                <p>Our application is able to automatically generate leases, riders, disclosure forms and similar documents.</p>
                                <p>We have partnered with dotloop - the leading real estate transaction management system - to help facilitate this.</p>
                                <a href="./dashboard/app-analysis.html" className="btn btn-primary mt-3 animate-up-2">
                                    Sample Lease
                                    <span className="icon icon-xs ml-2">
                                        <i className="fas fa-external-link-alt"></i>
                                    </span>
                                </a>
                            </div>
                            <div className="col-12 col-lg-6 mr-lg-auto">
                                <img src="https://preapprovedrenter.com/app/img/webapp3.png" className="img-thumbnail" alt="image" />
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
                                    <h2 className="h1 mb-4">More Rocket perks</h2>
                                    <p className="lead">The best and most complete data in the industry powers Rocket's tools
                                    </p>
                                </div>
                            </div>
                            <div className="row mt-6">
                                <div className="col-sm-12 col-md-12 col-lg-6">

                                    <div className="card border-light text-primary mb-4">
                                        <div className="card-body">
                                            <div className="d-flex p-3">
                                                <div>
                                                    <div className="icon icon-primary">
                                                        <span className="fas fa-headset"></span>
                                                    </div>
                                                </div>
                                                <div className="pl-4">
                                                    <h5 className="mb-3">24/5 customer support</h5>
                                                    <p className="icon-box-text">Have a question, concern or feedback for us? Our support team is a quick chat or email away — 24 hours a day, Monday to Friday.</p>
                                                    <a href="./support-topic.html" className="btn btn-sm btn-primary">
                                                        Read more
                                                        <i className="fas fa-link ml-1"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-sm-12 col-md-12 col-lg-6">

                                    <div className="card border-light text-primary mb-4">
                                        <div className="card-body">
                                            <div className="d-flex p-3">
                                                <div>
                                                    <div className="icon icon-primary">
                                                        <span className="fas fa-users"></span>
                                                    </div>
                                                </div>
                                                <div className="pl-4">
                                                    <h5 className="icon-box-title">Private community</h5>
                                                    <p className="icon-box-text">Take full advantage of insights from highly-accomplished SEO specialists and digital marketers in our customers-only community.</p>
                                                    <a href="./support-topic.html" className="btn btn-sm btn-primary">
                                                        Read more
                                                        <i className="fas fa-link ml-1"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-sm-12 col-md-12 col-lg-6">

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
                                                    <p className="icon-box-text">The marketing tutorials on our blog and YouTube channel, and in the Rocket Academy, often feature our tools.</p>
                                                    <a href="./support-topic.html" className="btn btn-sm btn-primary">
                                                        Read more
                                                        <i className="fas fa-link ml-1"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-sm-12 col-md-12 col-lg-6">

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
                                                    <a href="./support-topic.html" className="btn btn-sm btn-primary">
                                                        Read more
                                                        <i className="fas fa-link ml-1"></i>
                                                    </a>
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
                                <p className="lead">Our products are loved by users worldwide</p>
                            </div>
                        </div>
                        <div className="row mb-lg-5">
                            <div className="col-12 col-lg-6">
                                <div className="customer-testimonial d-flex mb-5">
                                    <img src="/img/team/profile-picture-1.jpg" className="image image-sm mr-3 rounded-circle shadow" alt="" />
                                    <div className="content-wrapper bg-soft shadow-soft border border-light rounded position-relative p-4">
                                        <div className="d-flex mb-4">
                                            <span className="text-warning mr-2"><i className="star fas fa-star"></i></span>
                                            <span className="text-warning mr-2"><i className="star fas fa-star"></i></span>
                                            <span className="text-warning mr-2"><i className="star fas fa-star"></i></span>
                                            <span className="text-warning mr-2"><i className="star fas fa-star"></i></span>
                                            <span className="text-warning mr-2"><i className="star fas fa-star"></i></span>
                                        </div>
                                        <p className="mt-2">"We use Rocket mainly for its site explorer, and it’s immensely improved how we find link targets. We use it both for getting quick analysis of a site, as well as utilizing its extensive index when we want to dive deep."</p>
                                        <span className="h6">- James Curran <small className="ml-0 ml-md-2">General Manager Spotify</small></span>
                                    </div>
                                </div>
                                <div className="customer-testimonial d-flex mb-5">
                                    <img src="/img/team/profile-picture-2.jpg" className="image image-sm mr-3 rounded-circle shadow" alt="" />
                                    <div className="content-wrapper bg-soft shadow-soft border border-light rounded position-relative p-4">
                                        <div className="d-flex mb-4">
                                            <span className="text-warning mr-2"><i className="star fas fa-star"></i></span>
                                            <span className="text-warning mr-2"><i className="star fas fa-star"></i></span>
                                            <span className="text-warning mr-2"><i className="star fas fa-star"></i></span>
                                            <span className="text-warning mr-2"><i className="star fas fa-star"></i></span>
                                            <span className="text-warning mr-2"><i className="star fas fa-star"></i></span>
                                        </div>
                                        <p className="mt-2">"We use Rocket mainly for its site explorer, and it’s immensely improved how we find link targets. We use it both for getting quick analysis of a site, as well as utilizing its extensive index when we want to dive deep."</p>
                                        <span className="h6">- Richard Thomas <small className="ml-0 ml-md-2">Front-end developer Oracle</small></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 pt-lg-6">
                                <div className="customer-testimonial d-flex mb-5">
                                    <img src="/img/team/profile-picture-4.jpg" className="image image-sm mr-3 rounded-circle shadow" alt="" />
                                    <div className="content-wrapper bg-soft shadow-soft border border-light rounded position-relative p-4">
                                        <div className="d-flex mb-4">
                                            <span className="text-warning mr-2"><i className="star fas fa-star"></i></span>
                                            <span className="text-warning mr-2"><i className="star fas fa-star"></i></span>
                                            <span className="text-warning mr-2"><i className="star fas fa-star"></i></span>
                                            <span className="text-warning mr-2"><i className="star fas fa-star"></i></span>
                                            <span className="text-warning mr-2"><i className="star fas fa-star"></i></span>
                                        </div>
                                        <p className="mt-2">"We use Rocket mainly for its site explorer, and it’s immensely improved how we find link targets. We use it both for getting quick analysis of a site, as well as utilizing its extensive index when we want to dive deep."</p>
                                        <span className="h6">- Jose Evans <small className="ml-0 ml-md-2">Chief Engineer Apple</small></span>
                                    </div>
                                </div>
                                <div className="customer-testimonial d-flex mb-5">
                                    <img src="/img/team/profile-picture-6.jpg" className="image image-sm mr-3 rounded-circle shadow" alt="" />
                                    <div className="content-wrapper bg-soft shadow-soft border border-light rounded position-relative p-4">
                                        <div className="d-flex mb-4">
                                            <span className="text-warning mr-2"><i className="star fas fa-star"></i></span>
                                            <span className="text-warning mr-2"><i className="star fas fa-star"></i></span>
                                            <span className="text-warning mr-2"><i className="star fas fa-star"></i></span>
                                            <span className="text-warning mr-2"><i className="star fas fa-star"></i></span>
                                            <span className="text-warning mr-2"><i className="star fas fa-star"></i></span>
                                        </div>
                                        <p className="mt-2">"We use Rocket mainly for its site explorer, and it’s immensely improved how we find link targets. We use it both for getting quick analysis of a site, as well as utilizing its extensive index when we want to dive deep."</p>
                                        <span className="h6">- Richard Thomas <small className="ml-0 ml-md-2">Designer Google</small></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col text-center">
                                <a href="./testimonials.html" className="btn btn-primary animate-up-2"><span className="mr-2"><i className="fas fa-book-open"></i></span> See what people have to say on Trust Pilot</a>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section section-lg pb-5 bg-soft">
                    <div className="container">
                        <div className="row"> 
                            <div className="col-12 text-center mb-5">
                                <h2 className="mb-4">Faster growth starts with Rocket</h2>
                                <p className="lead mb-5">Join over <span className="font-weight-bolder">300,000+</span> users</p>
                                <a href="#" className="icon icon-lg text-gray mr-3">
                                    <span className="fab fa-mailchimp"></span>
                                </a>
                                <a href="#" className="icon icon-lg text-gray mr-3">
                                    <span className="fab fa-cpanel"></span>
                                </a>
                                <a href="#" className="icon icon-lg text-gray mr-3">
                                    <span className="fab fa-dhl"></span>
                                </a>
                                <a href="#" className="icon icon-lg text-gray mr-3 ">
                                    <span className="fab fa-github-alt"></span>
                                </a>
                                <a href="#" className="icon icon-lg text-gray mr-3">
                                    <span className="fab fa-aws"></span>
                                </a>
                                <a href="#" className="icon icon-lg text-gray">
                                    <span className="fab fa-node"></span>
                                </a>
                            </div>
                            <div className="col-12 text-center">
                                <button type="button" className="btn btn-secondary animate-up-2" data-toggle="modal" data-target=".pricing-modal"><span className="mr-2"><i className="fas fa-hand-pointer"></i></span>Start 30-days trial</button>
                            </div>
                        </div> 
                    </div>    
                </section>

                <div id="pricing-modal" className="modal fade pricing-modal" tabIndex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                        <div className="modal-content py-4">
                            <div className="px-3">
                                <div className="col-12 d-flex justify-content-end d-lg-none">
                                    <i className="fas fa-times" data-dismiss="modal" aria-label="Close"></i>
                                </div>
                            </div>
                            <div className="modal-header text-center text-black">
                                <div className="col-12">
                                    <h4 className="px-lg-6">Our 30-days trial gives you full access to all tools and features of your chosen plan.</h4>
                                </div>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-12 col-lg-6 text-left">
                                        <div className="form-check card border-light p-3">
                                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                            <label className="form-check-label" htmlFor="exampleRadios1">
                                                <span className="h6 text-black d-block">Free</span>
                                                <span className="small text-gray">30 days for free, then $99/mo</span> 
                                                <span className="text-gray mt-3 d-block p">Suits freelance marketers and solopreneurs. Get full access to Ahrefs' core tools and features with enough data to do SEO for your personal projects.</span> 
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-6 text-left">
                                        <div className="form-check  card border-light p-3">
                                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" checked />
                                            <label className="form-check-label" htmlFor="exampleRadios2">
                                                <span className="h6 text-black d-block">Premium</span>
                                                <span className="small text-gray">200$/mo</span> 
                                                <span className="text-gray mt-3 d-block p">Perfect for SEO consultants and in-house marketers. Get everything in Lite with more features and increased data limits to research a large number of websites.</span> 
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer border-0 text-center">
                                <div className="col text-gray">
                                    <a href="../pages/checkout.html" className="btn btn-primary mb-4">Continue</a>
                                    <p className="small mb-0">You can upgrade, downgrade, or cancel your subscription anytime.<br/>No contracts, no hidden charges.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <footer className="footer section pt-6 pt-md-8 pt-lg-10 pb-3 bg-primary text-white overflow-hidden">
                    <div className="pattern top pattern-soft"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 mb-6 text-center" style={{fontSize: "2em"}}>
                                Try it! It's Completely FREE for brokers, landlords & property managers...
                                <div className="mt-4">
                                    <a href="https://themes.getbootstrap.com/product/rocket/" target="_blank" className="btn btn-secondary btn-pricing-plan animate-up-2 mr-3">SIGN UP</a>
                                    <a href="https://themesberg.com/docs/rocket/getting-started/overview/" target="_blank" className="btn btn-outline-white btn-docs animate-up-2"><i className="fas fa-sign-in mr-2"></i> LOG IN</a>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-4 mb-4 mb-lg-0">
                                <a className="footer-brand mr-lg-5 d-flex" href="../index.html">
                                    <div style={{backgroundColor: "#ffffff", width: "40px", height: "fit-content"}}>
                                        <img src="/img/brand/icon.svg" className="mr-3" alt="Footer logo" />
                                    </div>
                                    <h4 className="mt-1">PreApproved Renter</h4>
                                </a>
                                <p className="my-4"></p>
                            </div>
                            <div className="col-6 col-sm-6 col-lg-4 mb-4 mb-lg-0">
                                <ul className="links-vertical">
                                <li><a target="_blank" href="https://themesberg.com/products">Sign up</a></li>
                                    <li><a target="_blank" href="https://themesberg.com/blog">Blog</a></li>
                                    <li><a target="_blank" href="https://themesberg.com/contact">Contact Us</a></li>
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

            </main>
        </Layout>
    </>
)

export default SecondPage
