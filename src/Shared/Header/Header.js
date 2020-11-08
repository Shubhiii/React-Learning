import React, { Component } from "react";
import Logo from "../../Assets/Svg/Common/logo.svg";

class Header extends Component {
  render() {
    return (
      <header className="primary-header">
        <div className="container">
          <div className="primary-header--left">
            <a href="/">
              <img src={Logo} width="147" alt="Logo" />
            </a>
            <ul>
              <li>
                <a href="/">Product</a>
              </li>
              <li>
                <a href="/">Features</a>
              </li>
              <li>
                <a href="/">Customers</a>
              </li>
              <li>
                <a href="/">Pricing</a>
              </li>
              <li>
                <a href="/">Company</a>
              </li>
              <li>
                <a href="/">Blogs</a>
              </li>
            </ul>
          </div>
          <div className="primary-header--right">
            <ul>
              <li>
                <a href="/">Login</a>
              </li>
              <li>
                <a href="/" className="register">
                  Register
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
