import React from 'react'
import { useSwiper } from 'swiper/react'
import Prev from '../Imgs/Arrows/left.png'; 
import Next from '../Imgs/Arrows/right.png';  


const SwiperOfferBtns = () => {

    const swiper = useSwiper(); 
    
  return (
    <div className='SwiperOfferBtns'>
        <a className='prev' onClick={ () => swiper.slidePrev() }>
             <img className='offerPrevImg' src={Prev} width={50} /> 
        </a>
        <a className='next' onClick={ () => swiper.slideNext() }>
            <img className='offerNextImg' src={Next} width={50} /> 
        </a>
    </div>
  )
}

export default SwiperOfferBtns