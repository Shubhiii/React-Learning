import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <>
        <footer className="primary-footer">
          <div className="container">
            <div className="row">
              <div className="col-sm-3">
                <h3>Product</h3>
                <ul>
                  <li>
                    <a href="/">What is push</a>
                  </li>
                  <li>
                    <a href="/">Web Push</a>
                  </li>
                  <li>
                    <a href="/">Mobile push</a>
                  </li>
                  <li>
                    <a href="/">In-App</a>
                  </li>
                  <li>
                    <a href="/">Engagement Marketing</a>
                  </li>
                  <li>
                    <a href="/">Pricing</a>
                  </li>
                </ul>
              </div>

              <div className="col-sm-3">
                <h3>Resources</h3>
                <ul>
                  <li>
                    <a href="/">Features</a>
                  </li>
                  <li>
                    <a href="/">Blogs</a>
                  </li>
                  <li>
                    <a href="/">Case studies</a>
                  </li>
                  <li>
                    <a href="/">Support</a>
                  </li>
                </ul>
              </div>

              <div className="col-sm-3">
                <h3>Company</h3>
                <ul>
                  <li>
                    <a href="/">About Us</a>
                  </li>
                  <li>
                    <a href="/">Contact Us</a>
                  </li>
                  <li>
                    <a href="/">Become Partner</a>
                  </li>
                </ul>
              </div>

              <div className="col-sm-3">
                <h3>Safety &amp; Security</h3>
                <ul>
                  <li>
                    <a href="/">Terms of use</a>
                  </li>
                  <li>
                    <a href="/">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="/">GDPR</a>
                  </li>
                  <li>
                    <a href="/">Security &amp; Compliance</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
        <div className="handcrafted">
          <i>Handcrafted with</i>
          <span role="img" aria-label="heart">
            ❤️️
          </span>
          <i>in India</i>
        </div>
      </>
    );
  }
}

export default Footer;
