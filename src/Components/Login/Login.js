import React from "react";
import { Link } from "react-router-dom"
import "./Login.css"

class Login extends React.Component {
    state = {
        error:null,
    }

    render() {
        return (
            <div className="login">
                <form>
                    <h1>
                        Log in to your Account
                    </h1>
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
                <div     className="create-account">
                <Link to="/register">Create an account</Link>
                </div>

            </div>
        )
    }
}


export default Login;