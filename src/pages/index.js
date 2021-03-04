import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const indexPages = () => {
  return (
    <Layout>
      <h1>Hello,</h1>
      <h2>I'm reza, not a programmer and living in awesome Bandung.</h2>
      <Link to="/contacts">contact</Link>
    </Layout>
  )
}

export default indexPages
