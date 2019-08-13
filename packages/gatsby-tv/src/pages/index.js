import React from "react"
import { Link } from "gatsby"

import htmTest from '../htm-test';

import Footer from "../components/Footer/";
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

// <Link to="/page-2/">Go to page 2</Link>
const IndexPage = () => {
  try {
    customElements.define('htm-test', htmTest);
  } catch (e) {}
  return <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <htm-test></htm-test>
    <Footer></Footer>
  </Layout>
}

export default IndexPage
