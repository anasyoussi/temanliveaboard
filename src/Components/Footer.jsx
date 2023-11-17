import React from 'react'
import LogoTemanboat from '../assets/logo-temanboat.png'; 

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#060E19" }}>
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="col-logo">
                        <a href="#" className="brand-name primary-color">
                            <img src={LogoTemanboat} alt="Logo Teman boat" height={100} />   
                        </a>
                        <div className="description">
                            Teman Liveaboard is an Indonesian cruising company 
                            dedicated to delivering world-class
                            leisure and diving trips around the archipelago.
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="contact-info"> 
                        <div><span>E -mail:</span>   <a href="mailto:#">info@temanliveaboard.com</a></div>
                        <div><span>Phone:</span>   <a href="https://wa.me/6282145663903">(+62)<span>821-4566-3903</span></a></div>
                    </div>
                </div>
                <div className="col-md-4 col-wrapper">
                    <ul className="contact-us">
                        <li>
                            <a href=''><i className="fa-brands fa-whatsapp"></i></a>
                        </li>
                        <li>
                            <a href=''><i className="fa-brands fa-instagram"></i></a>
                        </li>
                        <li>
                            <a href=''><i className="fa-brands fa-facebook"></i></a>
                        </li>
                        <li>    
                            <a href=''><i className="fa-brands fa-youtube"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer