import React from 'react'
import { useSwiper } from 'swiper/react'
import Prev from '../assets/left.png'; 
import Next from '../assets/right.png';  


const SwiperButtons = () => {

    const swiper = useSwiper(); 

  return (
    <div className='paginationHook'>
        <a className='prev' onClick={ () => swiper.slidePrev() }>
             <img className='prevImg' src={Prev} width={50} />
        </a>
        <a className='next' onClick={ () => swiper.slideNext() }>
            <img className='nextImg' src={Next} width={50} />
        </a>
    </div>
  )
}

export default SwiperButtons