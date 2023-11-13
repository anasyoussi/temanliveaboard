import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
// Images : 
import Raja from '../Imgs/raja-ampat-destination-temanboat.jpg';
import komodo from '../Imgs/komodo-destination-temanboat.jpg';
import Triton from '../Imgs/triton-bay-destination-temanboat.jpg';
import Banda from '../Imgs/banda-sea-destination-temanboat.jpg';
import Sulawesi from '../Imgs/sulawesi-destination-temanboat.jpg';
import Halmahera from '../Imgs/halmahera-destination-temanboat.jpg'; 
import SwiperButtons from './SwiperButtons';

const Main = () => {

    const NavigationOptions = {
        nextEl: ".image-swiper-button-next",
        prevEl: ".image-swiper-button-prev", 
    }

  return (
    <section className='main' style={{ height: '120vh' }}>
        <Swiper  
          // install Swiper modules
          modules={[Navigation, Pagination, A11y]} 
          slidesPerView={1}
        //   navigation
          parallax= {true}
          loop= {true}
          // pagination={{ clickable: true }} 
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log('slide change')}
          style={{ height: '120vh' }}
        >
          <SwiperSlide className='slide-1' >  
            <div className="bg-image position-relative">     
              <img className='swiperImg' src={Raja} alt="raja ampat destination temanboat" style={{ filter: 'brightness(35%)' }} />  
            </div>   
            <div className="swiper-slide-caption position-absolute text-white">
                <div class="container">
                    <div class="row text-center text-lg-left">
                        <div class="section-one col-lg-4 col-md-12 preffix-1">
                            <h2 class="text-bold">01/</h2>
                            <h2 class="text-bold">Raja Ampat</h2>
                            <p>
                                6-7 nights, airfare,<br />
                                3-5 star hotels
                            </p>
                            <h4>
                                THE FOUR KINGS OF RAJA AMPAT
                            </h4>
                        </div>
                        <div class="section-two col-lg-6 col-md-12 offset-1 display_none">
                            <p> 
                                We handpicked hundreds of the most spectacular destinations on all 
                                continents. Relax your body and 
                                soul in the most remote corners <br />
                                of the world. 
                            </p>
                            <h3 class="text-bold">from $899</h3>
                        </div>
                    </div>
                </div> 
            </div>
          </SwiperSlide>

          <SwiperSlide className='slide-2'> 
            <div className="bg-image drk position-relative">    
              <img className='swiperImg' src={komodo} alt="raja ampat destination temanboat" style={{ filter: 'brightness(35%)' }} />
            </div>  
            <div className="swiper-slide-caption position-absolute text-white">
                <div class="container">
                    <div class="row text-center text-lg-left">
                        <div class="section-one col-lg-4 col-md-12 preffix-1">
                            <h2 class="text-bold">02/</h2>
                            <h2 class="text-bold">Raja Ampat</h2>
                            <p>
                                6-7 nights, airfare,<br />
                                3-5 star hotels
                            </p>
                            <h4>
                                THE FOUR KINGS OF RAJA AMPAT
                            </h4>
                        </div>
                        <div class="section-two col-lg-6 col-md-12 offset-1 display_none">
                            <p> 
                                We handpicked hundreds of the most spectacular destinations on all 
                                continents. Relax your body and 
                                soul in the most remote corners <br />
                                of the world. 
                            </p>
                            <h3 class="text-bold">from $899</h3>
                        </div>
                    </div>
                </div> 
            </div>
          </SwiperSlide>

          <SwiperSlide className='slide-3'> 
            <div className="bg-image drk position-relative">    
              <img className='swiperImg' src={Triton} alt="raja ampat destination temanboat" style={{ filter: 'brightness(35%)' }} />
            </div>  
            <div className="swiper-slide-caption position-absolute text-white">
                <div class="container">
                    <div class="row text-center text-lg-left">
                        <div class="section-one col-lg-4 col-md-12 preffix-1">
                            <h2 class="text-bold">03/</h2>
                            <h2 class="text-bold">Raja Ampat</h2>
                            <p>
                                6-7 nights, airfare,<br />
                                3-5 star hotels
                            </p>
                            <h4>
                                THE FOUR KINGS OF RAJA AMPAT
                            </h4>
                        </div>
                        <div class="section-two col-lg-6 col-md-12 offset-1 display_none">
                            <p> 
                                We handpicked hundreds of the most spectacular destinations on all 
                                continents. Relax your body and 
                                soul in the most remote corners <br />
                                of the world. 
                            </p>
                            <h3 class="text-bold">from $899</h3>
                        </div>
                    </div>
                </div> 
            </div>
          </SwiperSlide>

          <SwiperSlide className='slide-4'> 
            <div className="bg-image drk position-relative">    
              <img className='swiperImg' src={Banda} alt="raja ampat destination temanboat" style={{ filter: 'brightness(35%)' }} />
            </div>  
            <div className="swiper-slide-caption position-absolute text-white">
                <div class="container">
                    <div class="row text-center text-lg-left">
                        <div class="section-one col-lg-4 col-md-12 preffix-1">
                            <h2 class="text-bold">04/</h2>
                            <h2 class="text-bold">Raja Ampat</h2>
                            <p>
                                6-7 nights, airfare,<br />
                                3-5 star hotels
                            </p>
                            <h4>
                                THE FOUR KINGS OF RAJA AMPAT
                            </h4>
                        </div>
                        <div class="section-two col-lg-6 col-md-12 offset-1 display_none">
                            <p> 
                                We handpicked hundreds of the most spectacular destinations on all 
                                continents. Relax your body and 
                                soul in the most remote corners <br />
                                of the world. 
                            </p>
                            <h3 class="text-bold">from $899</h3>
                        </div>
                    </div>
                </div> 
            </div>
          </SwiperSlide>

          <SwiperSlide className='slide-5'> 
            <div className="bg-image drk position-relative">    
              <img className='swiperImg' src={Sulawesi} alt="raja ampat destination temanboat" style={{ filter: 'brightness(35%)' }} />
            </div> 
            <div className="swiper-slide-caption position-absolute text-white">
                <div class="container">
                    <div class="row text-center text-lg-left">
                        <div class="section-one col-lg-4 col-md-12 preffix-1">
                            <h2 class="text-bold">05/</h2>
                            <h2 class="text-bold">Raja Ampat</h2>
                            <p>
                                6-7 nights, airfare,<br />
                                3-5 star hotels
                            </p>
                            <h4>
                                THE FOUR KINGS OF RAJA AMPAT
                            </h4>
                        </div>
                        <div class="section-two col-lg-6 col-md-12 offset-1 display_none">
                            <p> 
                                We handpicked hundreds of the most spectacular destinations on all 
                                continents. Relax your body and 
                                soul in the most remote corners <br />
                                of the world. 
                            </p>
                            <h3 class="text-bold">from $899</h3>
                        </div>
                    </div>
                </div> 
            </div> 
          </SwiperSlide>

          <SwiperSlide className='slide-6'> 
            <div className="bg-image drk position-relative">    
              <img className='swiperImg' src={Halmahera} alt="raja ampat destination temanboat" style={{ filter: 'brightness(35%)' }} />
            </div>  
            <div className="swiper-slide-caption position-absolute text-white">
                <div class="container">
                    <div class="row text-center text-lg-left">
                        <div class="section-one col-lg-4 col-md-12 preffix-1">
                            <h2 class="text-bold">06/</h2>
                            <h2 class="text-bold">Raja Ampat</h2>
                            <p>
                                6-7 nights, airfare,<br />
                                3-5 star hotels
                            </p>
                            <h4>
                                THE FOUR KINGS OF RAJA AMPAT
                            </h4>
                        </div>
                        <div class="section-two col-lg-6 col-md-12 offset-1 display_none">
                            <p> 
                                We handpicked hundreds of the most spectacular destinations on all 
                                continents. Relax your body and 
                                soul in the most remote corners <br />
                                of the world. 
                            </p>
                            <h3 class="text-bold">from $899</h3>
                        </div>
                    </div>
                </div> 
            </div>
          </SwiperSlide>  
  
          <SwiperButtons />
  
        </Swiper> 

        {/* <div className="image-swiper-button-next"></div>
        <div className="image-swiper-button-prev"></div> */}
         
         <div className="titleContainer">
            <h4 className='title'>SCROLL DOWN</h4>
         </div>
         <div className="mouseContainer"> 
            {/* <div class="mouse"></div> */} 
            <div className="arrow"></div>
          </div>

    </section>
  )
}

export default Main