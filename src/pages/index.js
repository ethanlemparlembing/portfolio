import React from 'react'
import { Link } from 'gatsby'
import Header from '../components/header'
import Footer from '../components/footer'

const indexPages = () => {
  return (
    <div>
      <Header/>
      <h1>Hello,</h1>
      <h2>I'm reza, not a programmer and living in awesome Bandung.</h2>
      <Link to='/contacts'>contact</Link>
      <Footer/>
    </div>
  )
}

export default indexPages
