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
                        spaceBetween={10}
                        slidesPerView={2}
                        loop={true} 
                        autoplay={{
                            "delay": 3000,
                            "disableOnInteraction": false
                        }}
                        navigation={{
                            nextEl: ".image-swiper-button-next",
                            prevEl: ".image-swiper-button-prev",
                            disabledClass: "swiper-button-disabled"
                        }}
                        breakpoints={{
                            // when window width is >= 320px
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 20
                            },
                            // when window width is >= 480px
                            480: {
                                slidesPerView: 1,
                                spaceBetween: 30
                            },
                            // when window width is >= 640px
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 40
                            }
                        }}  
                        >
                        <SwiperSlide className='test-slide-1' >   
                            <div className="swiper-slide-caption">
                                <div class="container">
                                    {/* <!--TESTIMONIAL 1 --> */}
                                    <div class="item">
                                        <div class="box" style={{ maxHeight: '100%', height: '470px' }}>
                                            <img class="img-circle" src="https://i.ibb.co/rwjtfmQ/test3.jpg" alt="" /><br />
                                            <svg width="79px" height="16px" viewBox="0 0 79 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                              <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                  <path d="M8,0 L10.1640796,6.10199526 L16,6.10199526 L11.2461199,9.68514392 L12.9312641,15.9822618 L8,12.2039912 L3.06873586,15.9822618 L4.75388012,9.68514392 L0,6.10199526 L5.83592042,6.10199526 L8,0 Z M24,0 L26.1640796,6.10199526 L32,6.10199526 L27.2461199,9.68514392 L28.9312641,15.9822618 L24,12.2039912 L19.0687359,15.9822618 L20.7538801,9.68514392 L16,6.10199526 L21.8359204,6.10199526 L24,0 Z M40,0 L42.1640796,6.10199526 L48,6.10199526 L43.2461199,9.68514392 L44.9312641,15.9822618 L40,12.2039912 L35.0687359,15.9822618 L36.7538801,9.68514392 L32,6.10199526 L37.8359204,6.10199526 L40,0 Z M68.8359204,6.10199526 L71,0 L73.1640796,6.10199526 L79,6.10199526 L74.2461199,9.68514392 L75.9312641,15.9822618 L71,12.2039912 L66.0687359,15.9822618 L67.7538801,9.68514392 L63.5,6.478 L59.2461199,9.68514392 L60.9312641,15.9822618 L56,12.2039912 L51.0687359,15.9822618 L52.7538801,9.68514392 L48,6.10199526 L53.8359204,6.10199526 L56,0 L58.1640796,6.10199526 L68.8359204,6.10199526 Z" id="Combined-Shape" fill="#D4AF37" fill-rule="nonzero"></path>
                                              </g>
						                                </svg>
                                            <p>Temanliveaboard provided an exceptional experience! Their staff crafted a perfect itinerary tailored to my preferences. From flights to accommodations, their attention to detail made my trip worry-free. I highly recommend them for a seamless, enjoyable journey.</p>
                                        </div>
                                        <div class="testimonial-name">Janice Higgins</div>
                                    </div>
                                    {/* <!--END OF TESTIMONIAL 1 --> */}
                                </div>
                            </div>
                        </SwiperSlide> 

                        <SwiperSlide className='test-slide-2' >   
                            <div className="swiper-slide-caption">
                                <div class="container">
                                     {/* <!--TESTIMONIAL 1 --> */}
                                     <div class="item">
                                        <div class="box" style={{ maxHeight: '100%', height: '470px' }}>
                                            <img class="img-circle" src="https://i.ibb.co/8d0sq4N/testi1.png" alt="" /><br />
                                            <svg width="79px" height="16px" viewBox="0 0 79 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                              <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                  <path d="M8,0 L10.1640796,6.10199526 L16,6.10199526 L11.2461199,9.68514392 L12.9312641,15.9822618 L8,12.2039912 L3.06873586,15.9822618 L4.75388012,9.68514392 L0,6.10199526 L5.83592042,6.10199526 L8,0 Z M24,0 L26.1640796,6.10199526 L32,6.10199526 L27.2461199,9.68514392 L28.9312641,15.9822618 L24,12.2039912 L19.0687359,15.9822618 L20.7538801,9.68514392 L16,6.10199526 L21.8359204,6.10199526 L24,0 Z M40,0 L42.1640796,6.10199526 L48,6.10199526 L43.2461199,9.68514392 L44.9312641,15.9822618 L40,12.2039912 L35.0687359,15.9822618 L36.7538801,9.68514392 L32,6.10199526 L37.8359204,6.10199526 L40,0 Z M68.8359204,6.10199526 L71,0 L73.1640796,6.10199526 L79,6.10199526 L74.2461199,9.68514392 L75.9312641,15.9822618 L71,12.2039912 L66.0687359,15.9822618 L67.7538801,9.68514392 L63.5,6.478 L59.2461199,9.68514392 L60.9312641,15.9822618 L56,12.2039912 L51.0687359,15.9822618 L52.7538801,9.68514392 L48,6.10199526 L53.8359204,6.10199526 L56,0 L58.1640796,6.10199526 L68.8359204,6.10199526 Z" id="Combined-Shape" fill="#D4AF37" fill-rule="nonzero"></path>
                                              </g>
						                                </svg>
                                            <p>I had an amazing experience with Temanliveabroad. Their impeccable service, knowledgeable staff, and attention to detail made my trip smooth and worry-free. I highly recommend them for a seamless and enjoyable travel experience.</p>
                                        </div>
                                        <div class="testimonial-name">Marion Silva</div>
                                     </div>
                                    {/* <!--END OF TESTIMONIAL 1 --> */}
                                </div>
                            </div>
                        </SwiperSlide> 

                        <SwiperSlide className='test-slide-2' >   
                            <div className="swiper-slide-caption">
                                <div class="container">
                                     {/* <!--TESTIMONIAL 1 --> */}
                                     <div class="item">
                                        <div class="box" style={{ maxHeight: '100%', height: '470px' }}>
                                            <img class="img-circle" src="https://i.ibb.co/kq1CbT6/edward-cisneros.jpg" alt="" /><br />
                                            <svg width="79px" height="16px" viewBox="0 0 79 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                              <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                  <path d="M8,0 L10.1640796,6.10199526 L16,6.10199526 L11.2461199,9.68514392 L12.9312641,15.9822618 L8,12.2039912 L3.06873586,15.9822618 L4.75388012,9.68514392 L0,6.10199526 L5.83592042,6.10199526 L8,0 Z M24,0 L26.1640796,6.10199526 L32,6.10199526 L27.2461199,9.68514392 L28.9312641,15.9822618 L24,12.2039912 L19.0687359,15.9822618 L20.7538801,9.68514392 L16,6.10199526 L21.8359204,6.10199526 L24,0 Z M40,0 L42.1640796,6.10199526 L48,6.10199526 L43.2461199,9.68514392 L44.9312641,15.9822618 L40,12.2039912 L35.0687359,15.9822618 L36.7538801,9.68514392 L32,6.10199526 L37.8359204,6.10199526 L40,0 Z M68.8359204,6.10199526 L71,0 L73.1640796,6.10199526 L79,6.10199526 L74.2461199,9.68514392 L75.9312641,15.9822618 L71,12.2039912 L66.0687359,15.9822618 L67.7538801,9.68514392 L63.5,6.478 L59.2461199,9.68514392 L60.9312641,15.9822618 L56,12.2039912 L51.0687359,15.9822618 L52.7538801,9.68514392 L48,6.10199526 L53.8359204,6.10199526 L56,0 L58.1640796,6.10199526 L68.8359204,6.10199526 Z" id="Combined-Shape" fill="#D4AF37" fill-rule="nonzero"></path>
                                              </g>
						                                </svg>
                                            <p>Provided impeccable service, tailoring a perfect itinerary to my preferences. Their attention to detail covered every aspect of my trip, ensuring a smooth and worry-free experience. I highly recommend them for a seamless and enjoyable journey</p>
                                        </div>
                                        <div class="testimonial-name">Emiliano Aquilani</div>
                                     </div>
                                    {/* <!--END OF TESTIMONIAL 1 --> */}
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