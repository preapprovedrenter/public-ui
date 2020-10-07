import React from "react"
import { withPrefix } from "gatsby"

import { Helmet } from "react-helmet"

import './theme.scss'
import '../../../../static/vendor/@fortawesome/fontawesome-free/css/all.min.css'

const VendorsHeader = () => (
    <Helmet>
        <script src={withPrefix('vendor/popper.js/dist/umd/popper.min.js')} type="text/javascript" defer />
        <script src={withPrefix('vendor/bootstrap/dist/js/bootstrap.min.js')} type="text/javascript" defer />

        <script src={withPrefix('vendor/countup.js/dist/countUp.min.js')} type="text/javascript" defer />
        <script src={withPrefix('vendor/jquery-countdown/dist/jquery.countdown.min.js')} type="text/javascript" defer />
        <script src={withPrefix('vendor/smooth-scroll/dist/smooth-scroll.polyfills.min.js')} type="text/javascript" defer />
        <script src={withPrefix('vendor/prismjs/prism.js')} type="text/javascript" defer />

        <script src={withPrefix('vendor/jqvmap/dist/jquery.vmap.min.js')} type="text/javascript" defer />
        <script src={withPrefix('vendor/jqvmap/dist/maps/jquery.vmap.world.js')} type="text/javascript" defer />

        <script src={withPrefix('js/rocket.js')} type="text/javascript" defer />
    </Helmet>
);

export default VendorsHeader;