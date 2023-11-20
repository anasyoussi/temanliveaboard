import React from 'react' 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import SwiperOfferBtns from './SwiperOfferBtns';

import Raja from '../assets/second-1.jpg'
import Komodo from '../assets/second-3.jpg' 

const Offers = () => {
  
  return (
    <section className='offers'>
        <div className="container section-one">
            <div className="row">
                <div className="section-one col-md-10">
                    <h2 className='title'>Spacial Packages & Offers</h2>
                    <h4 className='subTitle'>an offers to a cruise of adventure and comfort</h4>
                </div>
                <div className="col-md-12">
                    <Swiper   
                        modules={[ Navigation, Pagination, A11y ]} 
                        slidesPerView={1}
                        // navigation
                        parallax= {true}
                        loop= {true}  
                    >  
                        <SwiperSlide className='slide-1' >  
                            <div className="bg-image position-relative">     
                            <img className='swiperImg' src={Raja} alt="raja ampat destination temanboat" style={{ filter: 'brightness(67%)' }} />  
                            </div>   
                            <div className="swiper-slide-caption position-absolute text-white">
                                <div class="container">
                                    <div class="row">
                                        <div className="offer-specification">
                                            <div className="offer-heading">
                                                <h2 className="offer-title">Cruising Komodo</h2>
                                                <h4 className="offer-subtitle">Experience&nbsp;the&nbsp;friendliest&nbsp;cruises&nbsp;in&nbsp;indonesia</h4> 
                                                <a href='#leads' className='cta-btn'>&#8212; Discover More</a>
                                            </div>
                                            <div className="offer-list">
                                                <ul>
                                                    <li><i class="fa-regular fa-circle-check"></i> hike in padar</li>
                                                    <li><i class="fa-regular fa-circle-check"></i> visite bat island</li>
                                                    <li><i class="fa-regular fa-circle-check"></i> see manta rays</li>
                                                    <li><i class="fa-regular fa-circle-check"></i> komodo dragons</li>
                                                    <li><i class="fa-regular fa-circle-check"></i> snorkeling & diving</li>
                                                    <li><i class="fa-regular fa-circle-check"></i> many more suprises</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className='slide-2' >  
                            <div className="bg-image position-relative">     
                            <img className='swiperImg' src={Komodo} alt="raja ampat destination temanboat" style={{ filter: 'brightness(67%)' }} />  
                            </div>   
                            <div className="swiper-slide-caption position-absolute text-white">
                                <div class="container">
                                    <div class="row">
                                        <div className="offer-specification">
                                            <div className="offer-heading">
                                                <h2 className="offer-title">The Ring Of Fire</h2>
                                                <div className="offer-subtitle">Discover the most welcoming cruise journeys in Indonesia</div>
                                                <a href='#leads' className='cta-btn'>&#8212; Discover More</a> 
                                            </div>
                                            <div className="offer-list">
                                                <ul>
                                                    <li><i class="fa-regular fa-circle-check"></i> volcanic deserted islets</li>
                                                    <li><i class="fa-regular fa-circle-check"></i> breathtaking viewpoints</li>
                                                    <li><i class="fa-regular fa-circle-check"></i> visit local villages</li>
                                                    <li><i class="fa-regular fa-circle-check"></i> spices plantation</li>
                                                    <li><i class="fa-regular fa-circle-check"></i> hundrerds of hammerheads sharks</li>
                                                    <li><i class="fa-regular fa-circle-check"></i> stargazing and shooting stars</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </SwiperSlide>
                        

                    <SwiperOfferBtns />
                        

                    </Swiper>
                </div>
            </div>
            
        </div>
        
    </section>
  )
}

export default Offers