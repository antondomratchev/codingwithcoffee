import React from 'react'
import Link from 'gatsby-link'
import reactLogo from '../images/react.png'

const IndexPage = () => (
  <div>
    <h1>Hello!</h1>
    <p>I am software developer fueled by hot beverages and producing code.</p>
    <p>I write modern front-end applications using <a href="http://reactjs.com">ReactJS <img src={reactLogo} height={20} /></a></p>
    <Link to="/about/">About me</Link>
  </div>
)

export default IndexPage
