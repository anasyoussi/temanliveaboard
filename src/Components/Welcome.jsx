import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
 

const Welcome = () => {
  return (
    <section className='welcome'>
        <div className="container">
            <div className="row">
                <div className="section-one col-md-12">
                    <h2>Welcome</h2>
                    <h4>
                        Arrange an unforgettable adventure.
                    </h4>
                    <p>
                        Indulging in the sheer joy of leisure with your loved ones during your travels is an experience like no other. Elevate your moments by securing a spot on one of our meticulously crafted tours, where the benefits extend beyond mere enjoyment to substantial savings exceeding $200 per participant. Immerse yourself in the convenience of our comprehensive travel solutions, which not only guarantee unforgettable memories but also prioritize your peace of mind. Our offerings encompass a spectrum of advantages, including comprehensive insurance coverage, meticulously guided and escorted tour vacations, deluxe accommodations in the finest hotels, and the added luxury of tailoring your experience with custom features that cater to your unique preferences. Embark on a journey that transcends the ordinary, where every detail is curated to ensure your travel experience is nothing short of extraordinary.
                    </p>
                </div>
                {/* <div class="section-two col-md-4 col-xs-6 col-md-preffix-1">
                    <ul class="marked-list">
                        <li><a href="#">&#8212; Raja Ampat</a></li>
                        <li><a href="#">&#8212; Komodo National Park</a></li>
                        <li><a href="#">&#8212; Banda Sea</a></li>
                        <li><a href="#">&#8212; Triton Bay</a></li>
                        <li><a href="#">&#8212; Sulawesi</a></li>
                        <li><a href="#">&#8212; Halmahera</a></li> 
                    </ul>
                </div> */}
            </div>
            <div className="row">
            <Accordion defaultActiveKey="0" className='accordion'>
                <Accordion.Item eventKey="0">
                    <Accordion.Header className="accor-head">
                      <div>&#8212; Raja Ampat</div>
                    </Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                 
                <Accordion.Item eventKey="1">
                    <Accordion.Header className="accor-head">
                      <div>&#8212; Komodo National Park</div>
                    </Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                 
                <Accordion.Item eventKey="2">
                    <Accordion.Header className="accor-head">
                      <div>&#8212; Banda Sea</div>
                    </Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                 
                <Accordion.Item eventKey="3">
                    <Accordion.Header className="accor-head">
                      <div>&#8212; Triton Bay</div>
                    </Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                 
                <Accordion.Item eventKey="4">
                    <Accordion.Header className="accor-head">
                      <div>&#8212; Sulawesi</div>
                    </Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                 
                <Accordion.Item eventKey="5">
                    <Accordion.Header className="accor-head">
                      <div>&#8212; Halmahera</div>
                    </Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                 
            </Accordion>
            </div>
        </div>
    </section>
  )
}

export default Welcome