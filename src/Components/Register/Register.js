import React from "react";
import "./Register.css"

class Register extends React.Component {
    state = {
        error: null,
    };


    render() {
        return(
            <div className = "register-user">
                <form
                className="register-form"
                aria-label="register-form"
                >
                    <h2>Register an Account</h2>
                    <label className="register-name" htmlFor="register-name">Name
                    </label>
                    <input type="text" name="rName" />
                    <label className="register-username" name="username">
                        Username

                    </label>
                     <input type="text" name="username" />
                     <label className="register-password">Password</label>
                     <input type="password" name="password" />
                     <label className="confirm-password">Confirm Password</label>
                     <input type="password" name="confirmPassword" />
                    <button className="register-submit" type="submit">
                        Submit
                    </button>
                    
                    

                </form>

            </div>
        )
    }
}


export default Register;