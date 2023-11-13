import React from 'react' 
import { Container } from 'react-bootstrap'
import LogoTemanboat from '../Imgs/logo-temanboat.png'; 

const Header = () => {
  return (
    <>
        <header class="page-header">
            <Container> 
                <div class="tb-navbar-brand">
                    <a href="" class="brand-name primary-color">
                        <img src={LogoTemanboat} alt="Logo Teman boat" height={100} />   
                    </a>
                </div> 
            </Container>
        </header>
    </>
  )
}

export default Header