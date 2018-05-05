import React, { Component } from 'react'
import Link from 'gatsby-link'

import { Input, Menu, Segment } from 'semantic-ui-react'


class MainMenu extends Component {

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { siteTitle } = this.props

    console.log(JSON.stringify(this.props))
    const location = (typeof window !== 'undefined' && window.location) || { pathname: '' }
    console.log(location)
    let path = location.pathname.split('/').filter(it => it.trim().length > 0)
    console.log(path)
    let activeItem = path[path.length-1] || 'home'

    return (
      <div>
        <Menu pointing>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} as={Link} to="/">
            Home
          </Menu.Item>
          <Menu.Item name='page-2' active={activeItem === 'page-2'} onClick={this.handleItemClick} as={Link} to="/page-2/">
            Page 2
          </Menu.Item>
          <Menu.Item name='my-files' active={activeItem === 'my-files'} onClick={this.handleItemClick} as={Link} to="/my-files/">
            My Files
          </Menu.Item>
          <Menu.Item name='my-markdown' active={activeItem === 'my-markdown'} onClick={this.handleItemClick} as={Link} to="/my-markdown/">
            My Markdown
          </Menu.Item>
          <Menu.Item name='about' active={activeItem === 'about'} onClick={this.handleItemClick} as={Link} to="/about/">
            About
          </Menu.Item>
          <Menu.Item name='contact' active={activeItem === 'contact'} onClick={this.handleItemClick} as={Link} to="/contact/">
            Contact
          </Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search' placeholder='Search...' />
            </Menu.Item>
            <Menu.Item name='home' as={Link} to="/" onClick={this.handleItemClick} style={{ color: 'black', textDecoration: 'none', }}>
              {siteTitle}
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'rebeccapurple',
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
        <MainMenu siteTitle={siteTitle}/>
      </h1>
    </div>
  </div>
)

export default Header
