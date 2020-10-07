import React from "react"

import Layout from "../components/layout"
import LoginPage from "../components/landing-pages/rocket/login"
import VendorsHeader from "../components/landing-pages/rocket/vendors"
import Header from "../components/header"
import SEO from "../components/seo"

const Page = () => (
    <Layout>
        <SEO title="Log in" />
        <VendorsHeader/>
        <Header/>
        <LoginPage/>
    </Layout>
)

export default Page
