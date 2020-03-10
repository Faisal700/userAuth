import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import './style.css'
export default class Navbar extends Component {
    render() {
        return (
            <div>
                <div className="nav">
  <input type="checkbox" id="nav-check" />
  <div className="nav-header">
    <div className="nav-title">
      <NavLink activeStyle={{color:"white"}} to=''>User Authentication System</NavLink>
    </div>
  </div>
  <div className="nav-btn">
    <label htmlFor="nav-check">
      <span />
      <span />
      <span />
    </label>
  </div>
  <div className="nav-links">
  <NavLink activeStyle={{color:"white"}} to='/login'> Back to Login</NavLink>
    <NavLink activeStyle={{color:"white"}} to='/createProfile'>Create Profile</NavLink>
  </div>
</div>

            </div>
        )
    }
}
