import React from "react"
import { Link } from "gatsby"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Header = ({ siteTitle }) => (
  <header style={{ marginBottom: `1.5rem` }}>
    <Link to="/">
      <h3 style={{ display: inline }}>Blog</h3>
    </Link>
    <ul style={{ listStyle: `none`, float: `right` }}>
      <ListLink to="/">Home</ListLink>
    </ul>
  </header>
)

export default Header