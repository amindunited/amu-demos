import React from "react"
import { Link } from "gatsby"

import htmTest from '../htm-test';

import Footer from "../components/Footer/";
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

// <Link to="/page-2/">Go to page 2</Link>
const IndexPage = () => {
  return (
    <div className="App container">
      <brand-header></brand-header>
      <ListPage></ListPage>
      <brand-footer></brand-footer>
    </div>
  );
}

export default IndexPage
