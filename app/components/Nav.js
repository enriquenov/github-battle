var React = require('react');

// var Link = require('react-router-dom').Link;
// NavLink is better than just Link when an active class for 
// an element is needed (like for menus/navbars).

var NavLink = require('react-router-dom').NavLink;

function Nav() {
  return (
    <ul className="nav">
      <li>
        <NavLink exact activeClassName="active" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/battle">
          Battle
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/popular">
          Popular
        </NavLink>
      </li>
    </ul>
  )
}

module.exports = Nav;
