import './Footer.scss';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

export default class Footer extends Component {
  render() {
    return (
        <div className="card app-sidebar">
          <nav className="navbar navbar-expand-lg">
            <NavLink className="navbar-brand" to="/">
              IQ-React
            </NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/features">
                    Features
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/pricing">
                    Pricing
                  </NavLink>
                </li>
              </ul>
              <NavLink className="btn btn-outline-info" to="/login">
                Login
              </NavLink>
              <NavLink className="btn btn-outline-info" to="/register">
                Register
              </NavLink>
            </div>
          </nav>
        </div>
    )
  }
}
