import React, { Component } from 'react';
import './Carousel.scss';

export default class Carousel extends Component {
    render() {
      return (
        <>
          <div className="carousel-card">
            <div className="card-body">
              <h1 className="card-title">Learn React JS</h1>
              <p className="card-text">Some quick example text Some quick example text Some quick example text Some quick example text</p>
            </div>
          </div>
        </>
      )
    }
}
