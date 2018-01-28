var React = require('react');
// var Link = require('react-router-dom').Link;
var NavLink = require('react-router-dom').NavLink;

function Nav() {
  return (
    <ul className="nav">
      <li>
        <NavLink activeClassName="active" to="/">
          Home
        </NavLink>
      </li>
    </ul>
  )
}

module.exports = Nav;
