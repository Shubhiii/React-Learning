import React, { Component } from "react";
import Logo from "../../Assets/Svg/Common/logo-blue.svg";
import Hide from "../../Assets/Svg/Common/hide.svg";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
  };
  handleChange = (e, name) => {
    console.log(name, e.target.value);
    this.setState({
      [name]: e.target.value,
    });
  };
  render() {
    return (
      <section className="user-structure">
        <div className="user-content">
          <div className="wrap">
            <h1>Trusted By Thousands</h1>
            <p>
              EngageAsap makes for a really powerful platform that takes care of
              all our conversion optimization requirements.
            </p>
          </div>
        </div>
        <div className="user-form">
          <div className="form-wrapper">
            <a href="/">
              <img src={Logo} className="mx-auto d-block" alt="Logo" />
            </a>

            <form onSubmit={(e) => this.handleSubmit(e)}>
              <div className="form-group">
                <label>Email ID</label>
                <input
                  type="text"
                  name="email"
                  onChange={(e) => this.handleChange(e, "email")}
                  className="form-control"
                  placeholder="Enter Email..."
                />
              </div>
              <div className="form-group">
                <div className="input-with-icon right-icon">
                  <label>Password</label>
                  <div className="position-relative">
                    <input
                      type="text"
                      name="password"
                      className="form-control"
                      onChange={(e) => this.handleChange(e, "password")}
                      placeholder="Enter Password..."
                    />
                    <img
                      src={Hide}
                      className="cursor-pointer"
                      alt="Password_Visibility"
                      width="25"
                    />
                  </div>
                </div>
              </div>

              <div className="d-flex align-items-center justify-content-between m-t-25">
                <div className="custom-checkbox">
                  <label>
                    <input type="checkbox" />
                    <span>Keep Me Logged in</span>
                  </label>
                </div>
                <a href="/" className="hover-effect">
                  Forget Password?
                </a>
              </div>
              <button type="submit" className="button button-primary btn-block">
                LOGIN
              </button>
              {/* <button
                type="button"
                onClick={(e) => this.handleSubmit(e)}
                className="button button-primary btn-block"
              >
                LOGIN
              </button> */}
              <p>
                Don’t have an account yet?{" "}
                <a href="/" className="hover-effect">
                  {" "}
                  Register Now
                </a>
              </p>
            </form>
          </div>
        </div>
      </section>
    );
  }
}
