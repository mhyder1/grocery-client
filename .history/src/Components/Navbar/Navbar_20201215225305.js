import React from "react"
import { Link } from "react-router-dom";
import Context from "../../Context/Context"
import "./Navbar.css"

class Navbar extends React.Component {
    static contextType = Context

    render() {
        return (
            <nav>
                <div className="logo-section">
                    <h1>
                        <Link to="/grocery-list-categories">Create Grocery list</Link>
                    </h1>

                </div>

                <div className="nav-links">
                    <Link to="/grocery-list-categories">Home
                    </Link>

                    <button 
                    type="submit"
                    className="logout-button"
                    >
                        Logout

                    
                    </button>
                    <Link to ="/register">
                        <button
                        className="register-button" type="submit"
                        > Register

                        </button></Link>
                        <Link to ="/login">
                            <button type="submit" className="login-button">
                                Login

                            </button>
                        </Link>

                </div>

                
            </nav>
        );
    }


}

export default Navbar;