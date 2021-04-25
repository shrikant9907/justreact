import React, { Component } from 'react';
import { Card } from 'react-bootstrap';  

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/swiper.scss';

import './Carousel.scss';

import imgSrc from "../../_assets/images/banner/banner.jpg";

export default class Carousel extends Component {
    render() {

      SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

      const params = {
        spaceBetween: 10,
        slidesPerGroup:1,
        effect: 'fade',
        observer:true,
        observeParents:true,
        autoplay: {
          delay: 3000,
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
            <SwiperSlide>
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
            </SwiperSlide>
            <SwiperSlide>
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
            </SwiperSlide>
            <SwiperSlide>
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
            </SwiperSlide>
            <SwiperSlide>
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
            </SwiperSlide>
            <SwiperSlide>
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
            </SwiperSlide>
            <SwiperSlide>
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
            </SwiperSlide>
            <SwiperSlide>
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
            </SwiperSlide>
          </Swiper>
        </>
      )
    }
}
