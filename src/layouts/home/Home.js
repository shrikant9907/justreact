import './Home.scss';
import { Component } from 'react';
import Banner from '../../components/banner/Banner';
import Carousel from '../../components/carousel/Carousel'; 

export default class Home extends Component {
  render() {
    return (
      <>
        {/* <div className="page-title">Home</div> */}
        <div className="seperator s20"></div>
        <section className="app-section">
          <Banner />
        </section>
        <section className="app-section">
          <Carousel />
        </section>
      </>
    )
  } 
}
