import React from 'react' 
import { Container } from 'react-bootstrap'
import LogoTemanboat from '../assets/logo-temanboat.png'; 

const Header = () => {
  return (
    <>
        <header className="page-header">
            <Container> 
                <div className="tb-navbar-brand">
                    <a href="" className="brand-name primary-color">
                        <img src={LogoTemanboat} alt="Logo Teman boat" height={100} />   
                    </a>
                </div> 
            </Container>
        </header>
    </>
  )
}

export default Header