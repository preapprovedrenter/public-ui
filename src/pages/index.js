import React from "react"

import Page from "../components/landing-pages/rocket/landing"
import Layout from "../components/layout"
import SEO from "../components/seo"
//import VendorsHeader from "../components/landing-pages/rocket/vendors"
import Header from "../components/header"

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <Header/>
        <Page/>
    </Layout>
)

export default IndexPage
