import React from "react"
import { withPrefix } from "gatsby"

import { Helmet } from "react-helmet"

import './theme.scss'
import '../../../../static/vendor/@fortawesome/fontawesome-free/css/all.min.css'

const VendorsHeader = () => (
    <Helmet>
        <script src={withPrefix('vendor/popper.js/dist/umd/popper.min.js')} type="text/javascript" defer />
        <script src={withPrefix('vendor/bootstrap/dist/js/bootstrap.min.js')} type="text/javascript" defer />

        <script src={withPrefix('js/rocket.js')} type="text/javascript" defer />
    </Helmet>
);

export default VendorsHeader;