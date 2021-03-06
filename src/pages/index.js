import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to my webstie.</p>
    <p>This is a sample site for the gatsby crash course</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/about/">Go to about</Link>
    <br/>
    <Link to="/services/">Go to services</Link>
  </Layout>
)

export default IndexPage
