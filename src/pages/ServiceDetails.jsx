import React from 'react';
import { AboutPageHeader, HeaderHero } from '../components/aboutpage-components/AboutPageHeader';
import WhiteFooter from '../components/WhiteFooter';
import { TalkDiv } from '../components/aboutpage-components/AboutPageP2';
import serv from '../css/assets/images/services2.jpg';

const ServiceDetails = ()=>{

    return(
        <>
        <AboutPageHeader />
        <HeaderHero title = "Service Details" />
        <ServiceDescription />
        <TalkDiv />
        <WhiteFooter />
        </>
    )
}


const ServiceDescription = ()=>{
    return(
        <>
            <section className = 'service-desccription'>
                <section className='item-content'>
                    <div className = 'serv-left'>
                        <img src ={serv} />
                        <br />
                        <h1>Partnership Ecosytem</h1>
                        <p className = 'block-text'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>

                        <p className = 'block-text'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>

                        <h1>Analysis of Business</h1>
                        <p className = "block-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <ul>
                            <li>Cost of supplies and equipment point</li>
                            <li>Change the volume of expected of contact</li>
                            <li>Bibend auctor nisi elit volume are so beguiled</li>
                            <li>Quickly maximize timely deliverables</li>
                        </ul>



                        <h1>Benefits of Services</h1>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <ul>
                            <li>Objectively innovate empowered manufactured</li>
                            <li>Holisticly predominate extensible</li>
                            <li>Procedures for reliable supply chains</li>
                            <li>Quickly maximize timely deliverables</li>
                        </ul>
                        <p className = 'block-text'>
                        But I must explain to you how all this mistaken idea of 
                        denouncing pleasure and praising pain was born and I will give you a complete
                        account of the system, and expound the actual teachings of the great explorer of the truth, 
                        the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, 
                        because it is pleasure, but because those who do not know how to 
                        pursue pleasure rationally encounter consequences that are extremely painful.
                        </p>
                    </div>
                    <div className = 'serv-right'>
                        <div className = 'serv-box'>
                            <div className = 'item-content'>
                                <h1>Service List</h1>
                                <ul>
                                    <li>Branding &nbsp; &nbsp; &nbsp; &nbsp; &rarr;</li>
                                    <li>Design &nbsp; &nbsp; &nbsp; &nbsp; &rarr;</li>
                                    <li>Content &nbsp; &nbsp; &nbsp; &nbsp; &rarr;</li>
                                    <li>Strategy &nbsp; &nbsp; &nbsp; &nbsp; &rarr;</li>
                                    <li>Marketing &nbsp; &nbsp; &nbsp; &nbsp; &rarr;</li>
                                    <li>Technology &nbsp; &nbsp; &nbsp; &nbsp; &rarr;</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}

export default ServiceDetails;