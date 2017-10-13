import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import footer from '../images/footer.jpg'
import './index.css'

const Header = () => (
  <div
    style={{
      background: '#4D351D',
      marginBottom: '1.45rem',

    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: '#b3dbf2',
            textDecoration: 'none',
          }}
        >
          <span style={{ '-webkit-text-stroke': '3.0px #000', fontWeight: 900 }}>Coding with coffee</span> ☕
        </Link>
      </h1>
    </div>
  </div>
)

const Footer = () => (
  <div
    style={{
      backgroundImage: `url(${footer})`,
      justifyContent: 'center',
      minHeight: 200,
      display: 'flex',
      alignContent: 'center',
      color: '#b3dbf2',
      backgroundSize: '100%'    
    }}
  >
    <p>&copy; Coding with coffee {new Date().getFullYear()}</p>
  </div>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Coding with coffee ☕"
      meta={[
        { name: 'description', content: 'Writing code with my favorite hot beverage ☕' },
        { name: 'keywords', content: 'Code coffee react reactjs reactnative native' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
