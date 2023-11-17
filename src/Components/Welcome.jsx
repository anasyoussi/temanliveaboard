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
                        All cruises include airport transfers, non-alcoholic drinks, three daily meals with snacks, an 
                        English and/or French-speaking Cruise Director, snorkeling gear, towels, bed sheets, water 
                        sports, and beach activities. Diving cruises feature a maximum of three guided dives daily, 
                        with English-speaking local dive guides, full 12L dive tanks, weight belts, and weights
                    </Accordion.Body>
                </Accordion.Item>
                 
                <Accordion.Item eventKey="1">
                    <Accordion.Header className="accor-head">
                      <div>&#8212; Komodo National Park</div>
                    </Accordion.Header>
                    <Accordion.Body>
                        All cruises include airport transfers, non-alcoholic drinks, three daily meals with snacks, an 
                        English and/or French-speaking Cruise Director, snorkeling equipment, towels, bed sheets, 
                        water sports, and beach activities. Diving cruises feature a maximum of three daily guided 
                        dives with English-speaking local dive guides, full 12L dive tanks, weight belts, and weights
                    </Accordion.Body>
                </Accordion.Item>
                 
                <Accordion.Item eventKey="2">
                    <Accordion.Header className="accor-head">
                      <div>&#8212; Banda Sea</div>
                    </Accordion.Header>
                    <Accordion.Body>
                        All cruises provide airport transfers, non-alcoholic drinks, three daily meals with snacks, an 
                        English and/or French-speaking Cruise Director, snorkeling equipment, towels, bed sheets, 
                        water sports, and beach activities. Diving cruises offer a maximum of three daily guided dives 
                        with English-speaking local dive guides, accompanied by full 12L dive tanks, weight belts, and 
                        weights 
                    </Accordion.Body>
                </Accordion.Item>
                 
                <Accordion.Item eventKey="3">
                    <Accordion.Header className="accor-head">
                      <div>&#8212; Triton Bay</div>
                    </Accordion.Header>
                    <Accordion.Body>
                        Triton Bay is located in the most Southern part of West Papua, which truly makes you feel you 
                        are away from civilization. There are plenty of smaller islands dotted around with some 
                        fantastic hidden treasures. You will discover impressive landscapes and vertiginous cliffs
                    </Accordion.Body>
                </Accordion.Item>
                 
                <Accordion.Item eventKey="4">
                    <Accordion.Header className="accor-head">
                      <div>&#8212; Sulawesi</div>
                    </Accordion.Header>
                    <Accordion.Body>
                        Dive into Sulawesi, situated in the heart of the Coral Triangle, the world's most biodiverse 
                        marine ecosystem. Experience pristine and untouched dive sites with the chance to witness a 
                        variety of marine life and impressive coral reefs. All cruises include airport transfers, nonalcoholic drinks, three daily meals with snacks, an English/French-speaking Cruise Director, 
                        snorkeling gear, towels, bed sheets, water sports equipment, and beach activities. Diving 
                        cruises feature a maximum of three guided dives per day with English-speaking local dive 
                        guides and full dive equipment
                    </Accordion.Body>
                </Accordion.Item>
                 
                <Accordion.Item eventKey="5">
                    <Accordion.Header className="accor-head">
                      <div>&#8212; Halmahera</div>
                    </Accordion.Header>
                    <Accordion.Body>
                        Halmahera Island Destination beckons diving enthusiasts to a true paradise, boasting 
                        world-class spots like the underwater volcano Batu Angus, the exotic species-rich 
                        Weda Bay, and the captivating islands of Bacan and Morotai. From historic 
                        shipwrecks to encounters with manta rays and sea turtles, divers can explore these 
                        treasures against the backdrop of Halmahera's lush rainforests and pristine beaches. 
                        All cruises include airport transfers, non-alcoholic drinks, three daily meals with 
                        snacks, an English/French-speaking Cruise Director, snorkeling gear, towels, bed 
                        sheets, water sports equipment, and beach activities. Diving cruises offer a maximum 
                        of three guided dives per day, led by English-speaking local dive guides, and include 
                        full 12L dive tanks, weight belts, and weights
                    </Accordion.Body>
                </Accordion.Item>
                 
            </Accordion>
            </div>
        </div>
    </section>
  )
}

export default Welcome