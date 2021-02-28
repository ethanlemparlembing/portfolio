import React from "react"
import { Link } from 'gatsby'
import Header from '../components/header'
import Footer from '../components/footer'

const aboutPages = () => {
  return (
    <div>
      <Header/>
      <h1>About Me!</h1>
      <p>im fell in love with coding.😜</p>
      <Link to="/contacts">Contact</Link>
      <Footer/>
    </div>
  )
}

export default aboutPages
