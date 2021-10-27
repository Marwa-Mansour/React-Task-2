import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <div>
             
<nav className="navbar navbar-light bg-light">
  <a className="navbar-brand" href="/">
    <img src="imgs/logo.png" width="30" height="30" className="d-inline-block align-top" alt="" />
    Our Employees
  </a>
</nav>
            </div>
        )
    }
}

export default Header
