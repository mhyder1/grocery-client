import React from "react";
import { Link } from "react-router-dom";
import Context from "../../Context/Context";
import { Hyph } from "../Utils/Utils";
import TokenService from "../../services/token-service";
import IdleService from "../../services/idle-service";
import "./Navbar.css";

class Navbar extends React.Component {
  static contextType = Context;

  handleLogoutClick = () => {
    TokenService.clearAuthToken();
    /* when logging out, clear the callbacks to the refresh api and idle auto logout */
    TokenService.clearCallbackBeforeExpiry();
    IdleService.unRegisterIdleResets();
  };

  renderLogoutLink() {
    return (
      <div className="nav-links">
        <Link to='/grocery-lists/'>
          Create list
        </Link>
        <Link onClick={this.handleLogoutClick} to="/">
          Logout
        </Link>
      </div>
    );
  }

  renderLoginLink() {
    return (
    //   <div className="Header__not-logged-in">
    //     <Link to="/register">Register</Link>
    //     <Hyph />
    //     <Link to="/login">Log in</Link>
    //   </div>
    <div className="nav-links">
        <Link to="/register" className="register-button">
              {" "}
              Register
          </Link>
          <Link to="/login" className="login-button">
              Login
          </Link>
    </div>
    );
  }

  render() {
    return (
    //   <nav>
    //     <div className="logo-section">
    //       <h1>
    //         <Link to="/grocery-list-categories">Create Grocery list</Link>
    //       </h1>
    //     </div>

    //     <div className="nav-links">
    //       <Link to="/grocery-list-categories">Home</Link>

    //       <button type="submit" className="logout-button">
    //         Logout
    //       </button>



    //       {/* <Link to="/register">
    //         <button className="register-button" type="submit">
    //           {" "}
    //           Register
    //         </button>
    //       </Link>
    //       <Link to="/login">
    //         <button type="submit" className="login-button">
    //           Login
    //         </button>
    //       </Link> */}



    //     </div>
    //   </nav>
        <nav>
        <div className="logo-section">
            <h1>
                <Link to='/'>
                {' '}
                Grocery list
                </Link>
            </h1>
        </div>
        {TokenService.hasAuthToken()
            ? this.renderLogoutLink()
            : this.renderLoginLink()}
        </nav>
    );
  }
}

export default Navbar;
