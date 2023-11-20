import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import "swiper/css/navigation";

const Testimonials = () => {

    SwiperCore.use([Autoplay]);


  return (
    <section className="testimonials"  >
        <div className='container'> 
            <div className="row">
                <div className="section-one col-md-12">
                    <h2 className='title'>Testimonials</h2>
                    <h4 className='subTitle'>
                        What our customers say.
                    </h4> 
                    <Swiper  
                        modules={[Navigation, Pagination, A11y]} 
                        slidesPerView={1}
                        loop={true} 
                        autoplay={{
                            "delay": 2900,
                            "disableOnInteraction": false
                        }}
                        navigation={{
                            nextEl: ".image-swiper-button-next",
                            prevEl: ".image-swiper-button-prev",
                            disabledClass: "swiper-button-disabled"
                        }}
                    >
                        <SwiperSlide className='test-slide-1' >   
                            <div className="swiper-slide-caption">
                                <div class="container">
                                    {/* <!--TESTIMONIAL 1 --> */}
                                    <div class="item">
                                        <div class="shadow-effect">
                                            <img class="img-circle" src="http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg" alt="" />
                                            <p>Dramatically maintain clicks-and-mortar solutions without functional solutions. Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate.</p>
                                        </div>
                                        <div class="testimonial-name">EMILIANO AQUILANI</div>
                                    </div>
                                    {/* <!--END OF TESTIMONIAL 1 --> */}
                                </div>
                            </div>
                        </SwiperSlide> 

                        <SwiperSlide className='test-slide-2' >   
                            <div className="swiper-slide-caption">
                                <div class="container">
                                    <div >
                                        <h1>THE ULTIMATE GETAWAY VEHICLE</h1>
                                        <svg width="79px" height="16px" viewBox="0 0 79 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                <path d="M8,0 L10.1640796,6.10199526 L16,6.10199526 L11.2461199,9.68514392 L12.9312641,15.9822618 L8,12.2039912 L3.06873586,15.9822618 L4.75388012,9.68514392 L0,6.10199526 L5.83592042,6.10199526 L8,0 Z M24,0 L26.1640796,6.10199526 L32,6.10199526 L27.2461199,9.68514392 L28.9312641,15.9822618 L24,12.2039912 L19.0687359,15.9822618 L20.7538801,9.68514392 L16,6.10199526 L21.8359204,6.10199526 L24,0 Z M40,0 L42.1640796,6.10199526 L48,6.10199526 L43.2461199,9.68514392 L44.9312641,15.9822618 L40,12.2039912 L35.0687359,15.9822618 L36.7538801,9.68514392 L32,6.10199526 L37.8359204,6.10199526 L40,0 Z M68.8359204,6.10199526 L71,0 L73.1640796,6.10199526 L79,6.10199526 L74.2461199,9.68514392 L75.9312641,15.9822618 L71,12.2039912 L66.0687359,15.9822618 L67.7538801,9.68514392 L63.5,6.478 L59.2461199,9.68514392 L60.9312641,15.9822618 L56,12.2039912 L51.0687359,15.9822618 L52.7538801,9.68514392 L48,6.10199526 L53.8359204,6.10199526 L56,0 L58.1640796,6.10199526 L68.8359204,6.10199526 Z" id="Combined-Shape" fill="#D4AF37" fill-rule="nonzero"></path>
                                            </g>
						                </svg>
                                    </div>
                                    <p>With speed, control, and confidence on any terrain, Diverge is the most capable gravel bike ever made. Switching from Midwest gravel at Mach 5 to rutted single track with ease, nothing helps you escape faster than Diverge.</p>
                                </div> 
                            </div>
                        </SwiperSlide> 
                    </Swiper> 

                    <div className="image-swiper-button-next"></div>
                    <div className="image-swiper-button-prev"></div>
                    
                    
                </div>   
            </div>
       </div>
    </section>
  )
}

export default Testimonials