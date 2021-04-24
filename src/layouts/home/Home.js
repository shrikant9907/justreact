import './Home.scss';
import { Component } from 'react';
import Banner from '../../components/banner/Banner';
import Carousel from '../../components/carousel/Carousel'; 

export default class Home extends Component {
  render() {
    return (
      <>
        <div className="page-title">Home</div>
        <Banner />
        <div className="seperator s50"></div>
        <Carousel />
      </>
    )
  } 
}
