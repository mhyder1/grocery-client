import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Hyph } from '../Utils/Utils'
import TokenService from '../../services/token-service'
import IdleService from '../../services/idle-service'
import "./Header.css"

class Header extends React.Component {

    renderLogoutLink() {
        return (
          <div className='Header__logged-in'>
            <Link
              onClick={this.handleLogoutClick}
              to='/'>
              Logout
            </Link>
          </div>
        )
      }
    
      renderLoginLink() {
        return (
          <div className='Header__not-logged-in'>
            <Link
              to='/register'>
              Register
            </Link>
            <Hyph />
            <Link
              to='/login'>
              Login
            </Link>
          </div>
        )
      }

    render() {
            return (
        <nav className='Header'>
            <h1>
            <Link to='/'>
                {' '}
                Blogful Client
            </Link>
            </h1>
            {TokenService.hasAuthToken()
            ? this.renderLogoutLink()
            : this.renderLoginLink()}
        </nav>
        )
    }
}


export default Header;