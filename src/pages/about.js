import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const aboutPages = () => {
  return (
    <Layout>
      <h1>About Me!</h1>
      <p>im fell in love with coding.😜</p>
      <Link to="/contacts">Contact</Link>
    </Layout>
  )
}

export default aboutPages
