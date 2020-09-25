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
                                    <img className="navbar-brand-dark rotate-logo" src="/img/brand/light.svg" alt="Logo light" />
                                    <img className="navbar-brand-light rotate-logo" src="/img/brand/dark.svg" alt="Logo dark" />
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
                                <h2 className="h4 font-weight-normal text-muted">Market Intelligence Solutions to</h2>
                                <h1 className="display-1 mb-4">Win your market</h1>
                                <p className="lead mb-3 mb-lg-5">Powerful analytics tools for your business. See the exact keywords for which your competitors rank in organic search and the amount of traffic driven by each of them.</p>
                                <a className="btn btn-secondary animate-up-2 mb-5 mb-lg-0" target="_blank" href="https://themesberg.com/docs/rocket/getting-started/overview/"><i className="fas fa-file-alt mr-2"></i>Our Documentation</a>
                            </div>
                            <div className="col-12 col-lg-5">
                                <div className="card shadow-sm text-dark p-4">
                                    <div className="card-body p-2">
                                        <form action="#">
                                            <div className="form-group mb-4">
                                                <label className="h6 text-dark" htmlFor="full-name">Full Name</label>
                                                <input id="full-name" name="contact-name" type="text" className="form-control" placeholder="Ex. James Curran" required />
                                            </div>
                                            <div className="form-group mb-4">
                                                <label className="h6 text-dark" htmlFor="email">Email Address</label>
                                                <input id="email" name="contact-email" type="email" className="form-control" placeholder="james@company.com" required />
                                            </div>
                                            <div className="form-group mb-4">
                                                <label className="h6 text-dark" htmlFor="company-size">Company Size</label>
                                                <div className="position-relative">
                                                    <select className="custom-select" id="company-size" required="" defaultValue="">
                                                        <option value="">Select an option</option>
                                                        <option value="1-50">1-50</option>
                                                        <option value="50-500">50-500</option>
                                                        <option value="500+">500+</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <button className="btn btn-primary btn-block btn-loading" type="submit">Request Demo</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pattern bottom"></div>
                </section>

                <section className="section section-lg pt-6">
                    <div className="container">
                        <div className="row justify-content-center mb-5 mb-lg-6">
                            <div className="col-12 col-md-8 text-center">
                                <h2 className="h1 font-weight-bolder mb-4">Who is Rocket for?</h2>
                                <p className="lead">Self-Service Analytics or ad hoc reporting gives users the ability to develop rapid reports, empowering users to analyze their data.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-6 col-lg-4 mb-5 mb-lg-0 text-center">      
                                <div className="card border-light p-4">
                                    <div className="card-header pb-0">
                                        <div className="image-md">
                                            <img src="/img/icons/marketing.svg" alt="icon" />
                                        </div>
                                        <h2 className="h4 mt-3">Marketing</h2>
                                        <p className="mb-0">Reveal best strategies from the market and your competitors</p>
                                    </div>
                                    <div className="card-body">
                                        <ul className="list-group">
                                            <li className="list-group-item d-flex text-left pl-0">
                                                <span className="list-icon"><i className="fas fa-check-circle text-success"></i></span>
                                                <div>Uncover the best SEO and content strategies</div>    
                                            </li>
                                            <li className="list-group-item d-flex text-left pl-0">
                                                <span className="list-icon"><i className="fas fa-check-circle text-success"></i></span>
                                                <div>Build & grow your affiliate and media partnerships</div>    
                                            </li>
                                            <li className="list-group-item d-flex text-left pl-0">
                                                <span className="list-icon"><i className="fas fa-check-circle text-success"></i></span>
                                                <div>Enhance your display and paid search strategies</div> 
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="card-footer pt-0">
                                        <a href="./about.html" className="btn btn-block btn-primary">Learn more<span className="icon icon-xs ml-2"><i className="fas fa-arrow-right"></i></span></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 mb-5 mb-lg-0 text-center">      
                                <div className="card border-light p-4">
                                    <div className="card-header pb-0">
                                        <div className="image-md">
                                            <img src="/img/icons/research.svg" alt="icon" />
                                        </div>
                                        <h2 className="h4 mt-3">Research</h2>
                                        <p className="mb-0">Understand your market, your competitors and your customers</p>
                                    </div>
                                    <div className="card-body">
                                        <ul className="list-group">
                                            <li className="list-group-item d-flex text-left pl-0">
                                                <span className="list-icon"><i className="fas fa-check-circle text-success"></i></span>
                                                <div>Benchmark your market and find ways to grow</div>    
                                            </li>
                                            <li className="list-group-item d-flex text-left pl-0">
                                                <span className="list-icon"><i className="fas fa-check-circle text-success"></i></span>
                                                <div>Analyze trends, competitors' strategy and audience</div>    
                                            </li>
                                            <li className="list-group-item d-flex text-left pl-0">
                                                <span className="list-icon"><i className="fas fa-check-circle text-success"></i></span>
                                                <div>Understand the shopper’s journey for best decisions</div> 
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="card-footer pt-0">
                                        <a href="./about.html" className="btn btn-block btn-primary">Learn more<span className="icon icon-xs ml-2"><i className="fas fa-arrow-right"></i></span></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 mb-5 mb-lg-0 text-center">      
                                <div className="card border-light p-4">
                                    <div className="card-header pb-0">
                                        <div className="image-md">
                                            <img src="/img/icons/sales.svg" alt="icon" />
                                        </div>
                                        <h2 className="h4 mt-3">Sales</h2>
                                        <p className="mb-0">Enhance performance throughout your sales funnel</p>
                                    </div>
                                    <div className="card-body">
                                        <ul className="list-group">
                                            <li className="list-group-item d-flex text-left pl-0">
                                                <span className="list-icon"><i className="fas fa-check-circle text-success"></i></span>
                                                <div>Find, enrich and qualify leads to increase sales</div>    
                                            </li>
                                            <li className="list-group-item d-flex text-left pl-0">
                                                <span className="list-icon"><i className="fas fa-check-circle text-success"></i></span>
                                                <div>Generate the insights you need to perfect your pitch</div>    
                                            </li>
                                            <li className="list-group-item d-flex text-left pl-0">
                                                <span className="list-icon"><i className="fas fa-check-circle text-success"></i></span>
                                                <div>Monitor website traffic statistics to boost retention</div> 
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="card-footer pt-0">
                                        <a href="./about.html" className="btn btn-block btn-primary">Learn more<span className="icon icon-xs ml-2"><i className="fas fa-arrow-right"></i></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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

                <section className="section section-lg bg-white">
                    <div className="container">
                        <div className="row row-grid align-items-center mb-7">
                            <div className="col-12 col-lg-5">
                                <h2 className="font-weight-bolder mb-4">Content Explorer</h2>
                                <p>Put any keyword into this tool to see which content has performed best in terms of social buzz, number of backlinks and organic search traffic.</p>
                                <p>Find all articles that mentioned your target keyword and use the "Highlight unlinked domains" feature to see which of these websites have never linked to you.</p>
                                <a href="./dashboard/app-analysis.html" className="btn btn-primary mt-3 animate-up-2">
                                    Content Explorer Tool
                                    <span className="icon icon-xs ml-2">
                                        <i className="fas fa-external-link-alt"></i>
                                    </span>
                                </a>
                            </div>
                            <div className="col-12 col-lg-6 ml-lg-auto">
                                <img src="/img/homepage-feature-2.png" alt="image" />
                            </div>
                        </div>
                        <div className="row row-grid align-items-center">
                            <div className="col-12 col-lg-5 order-lg-2">
                                <h2 className="font-weight-bolder mb-4">Rank Tracker</h2>
                                <p>We track your desktop and mobile keyword rankings from any location and plot your full ranking history on a handy graph.</p>
                                <p>You can set up automated ranking reports to be sent to your email address, so you’ll never forget to check your ranking progress.</p>
                                <a href="./dashboard/traffic-sources.html" className="btn btn-primary mt-3 animate-up-2">
                                    Rank Tracker Tool
                                    <span className="icon icon-xs ml-2">
                                        <i className="fas fa-external-link-alt"></i>
                                    </span>
                                </a>
                            </div>
                            <div className="col-12 col-lg-6 mr-lg-auto">
                                <img src="/img/homepage-feature-1.png" alt="image" />
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
                                <h1 className="h1 mb-4">Recommended by leading experts in marketing and SEO</h1>
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
                                <a href="./testimonials.html" className="btn btn-primary animate-up-2"><span className="mr-2"><i className="fas fa-book-open"></i></span> See all stories</a>
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
                            <div className="col-lg-4 mb-4 mb-lg-0">
                                <a className="footer-brand mr-lg-5 d-flex" href="../index.html">
                                    <img src="/img/brand/light.svg" className="mr-3" alt="Footer logo" />
                                    <h4>Rocket</h4>
                                </a>
                                <p className="my-4">Create, prototype, collaborate and turn your ideas into incredible products with the definitive platform for digital design.</p>
                                <div className="dropdown mb-4 mb-lg-0">
                                    <a id="langsDropdown" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle footer-language-link pb-2">
                                        <img src="/img/flags/united-states-of-america.svg" alt="USA Flag" className="language-flag" /> United States
                                        <i className="fas fa-chevron-down ml-1"></i>
                                    </a>
                                    <div aria-labelledby="langsDropdown" className="dropdown-menu dropdown-menu-center mt-0">
                                        <a href="#" className="dropdown-item text-gray text-sm"><img src="/img/flags/germany.svg" alt="Germany Flag" className="language-flag" /> German</a>
                                        <a href="#" className="dropdown-item text-gray text-sm"><img src="/img/flags/spain.svg" alt="Spain Flag" className="language-flag" /> Spanish</a>
                                        <a href="#" className="dropdown-item text-gray text-sm"><img src="/img/flags/france.svg" alt="France Flag" className="language-flag" /> French</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-sm-3 col-lg-2 mb-4 mb-lg-0">
                                <h5>Themesberg</h5>
                                <ul className="links-vertical">
                                    <li><a target="_blank" href="https://themesberg.com/blog">Blog</a></li>
                                    <li><a target="_blank" href="https://themesberg.com/products">Products</a></li>
                                    <li><a target="_blank" href="https://themesberg.com/contact">Contact Us</a></li>
                                </ul>
                            </div>
                            <div className="col-6 col-sm-3 col-lg-2 mb-4 mb-lg-0">
                                <h5>Rocket</h5>
                                <ul className="links-vertical">
                                    <li><a href="../pages/about.html">About</a></li>
                                    <li><a href="../pages/pricing.html">Pricing</a></li>
                                    <li><a href="https://themesberg.com/docs/rocket/getting-started/overview/">Documentation</a></li>
                                    <li><a href="../pages/contact.html">Contact</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-4">
                                <h5>Subscribe</h5>
                                <p className="font-small">The latest Rocket news, articles, and resources, sent straight to your inbox every month.</p>
                                <form action="#">
                                    <div className="form-row">
                                        <div className="col-8">
                                            <input type="email" className="form-control mb-2" placeholder="Email Address" name="email" required />
                                        </div>
                                        <div className="col-4">
                                            <button type="submit" className="btn btn-secondary"><span>Subscribe</span></button>
                                        </div>
                                    </div>
                                </form>
                                <small className="mt-2 form-text">We’ll never share your details. See our <a href="../pages/terms.html" className="font-weight-bold text-underline">Privacy Policy</a></small>
                            </div>
                        </div>
                        <hr className="my-4 my-lg-5" />
                        <div className="row">
                            <div className="col pb-4 mb-md-0">
                                <a href="https://themesberg.com" target="_blank" className="d-flex justify-content-center">
                                    <img src="/img/themesberg.svg" height="25" width="25" className="mb-3" alt="Themesberg Logo" />
                                </a>
                                <div className="d-flex text-center justify-content-center align-items-center">
                                    <p className="font-weight-normal font-small mb-0">Copyright © <a href="https://themesberg.com" target="_blank">Themesberg</a> <span className="current-year"></span>. All rights reserved.</p>
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
