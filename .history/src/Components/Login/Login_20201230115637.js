import React from "react";
import { Link } from "react-router-dom";
import AuthApiService from "../../services/auth-api-service";
import "./Login.css";

class Login extends React.Component {

  state = {
    error: null,
  };

  handleLoginSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/'
    history.push(destination)
  }

  handleLogin = (e) => {
    e.preventDefault();
    const { username, password } = e.target;
    this.setState({ error: null });
    const user = { username: username.value, password: password.value };
    AuthApiService.postLogin(user)
      .then((loginResponse) => {
        this.props.history.push("/grocery-list-categories");
        // this.props.onLoginSuccess()
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  render() {
    return (
      <div className="login">
        <form
          onSubmit={this.handleLogin}
          className="login-form"
          aria-label="login-form"
        >
          <h1>Log in to your Account</h1>
          {this.state.error && (
            <p className="register-error">{this.state.error}</p>
          )}
          <div className="credentials-section">
            <label className="login-username">Username</label>
            <input className="login-form-input" name="username" type="text" />
            <label className="login-password">Password</label>
            <input
              className="login-form-input"
              type="password"
              name="password"
            />
            <button className="login-sign-in" type="submit">
              Sign in
            </button>
          </div>
        </form>
        <div className="create-account">
          <Link to="/register">Create an account</Link>
        </div>
      </div>
    );
  }
}

export default Login;
