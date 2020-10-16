import { Link } from "gatsby"
import React from "react"

const Header = () => (
    <header className="header-global bg-primary">
        <nav id="navbar-main" className="navbar navbar-main navbar-expand-lg navbar-dark navbar-theme-primary py-lg-2 px-lg-6">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    <div className="d-flex align-items-left">
                        <img className="navbar-brand-dark rotate-logo" src="/img/brand/logo.svg" alt="Logo" width="300" height="86" />
                    </div>
                </Link>
                <div className="navbar-collapse collapse" id="navbar_global">
                    <div className="navbar-collapse-header">
                        <div className="row">
                            <div className="col-6 collapse-close">
                                <a href="#navbar_global" className="fas fa-times" data-toggle="collapse"
                                data-target="#navbar_global" aria-controls="navbar_global" aria-expanded="false"
                                aria-label="Toggle navigation">
                                    <span className="sr-only">Toggle navigation</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <ul className="navbar-nav navbar-nav-hover justify-content-center">
                    </ul>
                </div>
                <div className="d-none d-lg-block">
                </div>
                <div className="d-none d-lg-none align-items-center ml-auto">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar_global"
                    aria-controls="navbar_global" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </div>
        </nav>
    </header>
)

export default Header
