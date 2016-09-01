import React from 'react'
import { RouteHandler, Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'
import SiteNav from '../SiteNav'
import SiteLinks from '../SiteLinks'
import './style.css'

const profilePic = 'https://avatars2.githubusercontent.com/u/10928312?v=3&s=460'

class SiteSidebar extends React.Component {
  render () {
    const { location } = this.props
    const isHome = location.pathname === prefixLink('/')

    const header = (
      <header>
        <a style={{ textDecoration: 'none', borderBottom: 'none', outline: 'none' }} href="https://github.com/koleok">
          <img alt="profilePic" src={profilePic} width="75" height="75" />
        </a>
        { isHome ?
          <h1>
            <Link
              style={{ textDecoration: 'none', borderBottom: 'none', color: 'inherit' }}
              to={prefixLink('/')}
            > { config.siteAuthor }
            </Link>
          </h1>
        : <h2>
            <Link
              style={{ textDecoration: 'none', borderBottom: 'none', color: 'inherit' }}
              to={prefixLink('/')}
            > { config.siteAuthor }
            </Link>
          </h2>
        }
        <p> { config.siteDescr } </p>
      </header>
    )

    return (
      <div className="sidebar">
        <div className="sidebar-inner">
          <div className="blog-details">
            <header>
              { header }
            </header>
          </div>
          <div className="blog-options">
            <SiteNav {...this.props} />
            <footer>
              <SiteLinks {...this.props} />
              <p className="copyright"> &copy; All rights reserved. </p>
            </footer>
          </div>
        </div>
      </div>
      )
  }
}

SiteSidebar.propTypes = {
  children: React.PropTypes.any,
  location: React.PropTypes.object,
}

export default SiteSidebar
