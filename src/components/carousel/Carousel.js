import React, { Component } from 'react';

import Swiper from 'react-id-swiper';
import 'swiper/swiper.scss';
import './Carousel.scss';
import { Card } from 'react-bootstrap';  

import imgSrc from "../../_assets/images/banner/banner.jpg";

export default class Carousel extends Component {
    render() {
      const params = {
        spaceBetween: 10,
        effect: 'fade',
        autoplay: {
          delay: 500,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        breakpoints: {
          1366: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          640: {
            slidesPerView: 2,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 0
          }
        }
      }
      return (
        <>
            <Swiper {...params}>
                <Card>
                  <div className="card-img-box">
                    <Card.Img variant="top" src={imgSrc} />
                  </div>
                  <Card.Body>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk
                      of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card>
                  <div className="card-img-box">
                    <Card.Img variant="top" src={imgSrc} />
                  </div>
                  <Card.Body>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk
                      of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card>
                  <div className="card-img-box">
                    <Card.Img variant="top" src={imgSrc} />
                  </div>
                  <Card.Body>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk
                      of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card>
                  <div className="card-img-box">
                    <Card.Img variant="top" src={imgSrc} />
                  </div>
                  <Card.Body>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk
                      of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card>
                  <div className="card-img-box">
                    <Card.Img variant="top" src={imgSrc} />
                  </div>
                  <Card.Body>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk
                      of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card>
                  <div className="card-img-box">
                    <Card.Img variant="top" src={imgSrc} />
                  </div>
                  <Card.Body>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk
                      of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Swiper>
        </>
      )
    }
}
