import React from 'react'
import LogoTemanboat from '../assets/logo-temanboat.png'; 
 

const Footer = () => { 

  return (
    <footer style={{ backgroundColor: "#060E19" }}>
        <div className="container">
            <div className="row">
            <div class="col-lg-6 col-xs-12 about-company text-white">
                <h2>Temanliveaboard</h2>
                <p class="pr-5 text-white-50">Teman Liveaboard is an Indonesian cruising company dedicated to delivering world-class leisure and diving trips around the archipelago.</p>
                {/* <p><a href="#"><i class="fa fa-facebook-square mr-1"></i></a><a href="#"><i class="fa fa-linkedin-square"></i></a></p> */}
                </div> 
                <div class="col-lg-6 col-xs-12 location text-white">
                <h4 class="mt-lg-0 mt-sm-4">Location</h4>
                <p>Jl. Himalaya II No.n° 7, Pemecutan Kaja, Kec. Denpasar Utara, Kota Denpasar, Bali 80111, Indonesia</p>
                <p class="mb-0"><i class="fa fa-phone mr-3"></i>+62 821-4566-3903</p>
                <p><i class="fa fa-envelope-o mr-3"></i>info@temanliveaboard.com</p>
                </div>
            </div>
            <div class="row mt-5">
                <div class="col copyright">
                <p class=""><small class="text-white-50">© 2023. All Rights Reserved.</small></p>
                </div>
            </div>
                {/* <div className="col-md-3">
                    <div className="col-logo">
                        <a href="#" className="brand-name primary-color">
                            <img src={LogoTemanboat} alt="Logo Teman boat" height={100} />   
                        </a>
                        {/* <div className="description">
                            Teman Liveaboard is an Indonesian cruising company 
                            dedicated to delivering world-class
                            leisure and diving trips around the archipelago.
                        </div>  
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="contact-info"> 
                        <div><span>E-mail:</span>  <a href="mailto:#">info@temanliveaboard.com</a></div>
                        {/* <div><span>Phone:</span>   <a href="https://wa.me/6282145663903">(+62)<span>821-4566-3903</span></a></div> 
                    </div>
                </div>  
                  <div className="col-md-3 col-wrapper">
                    <ul className="contact-us">
                        <li>
                            <a href='https://www.facebook.com/temancruises/'><i className="fa-brands fa-whatsapp"></i></a>
                        </li>
                        <li>
                            <a href='https://www.instagram.com/temanliveaboard/'><i className="fa-brands fa-instagram"></i></a>
                        </li>
                        <li>
                            <a href='https://wa.me/6282145663903'><i className="fa-brands fa-facebook"></i></a>
                        </li> 
                    </ul>
                </div>   
            </div>*/}
        </div>
    </footer>
  )
}

export default Footer