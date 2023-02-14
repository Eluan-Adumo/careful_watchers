import React from 'react';
import { AboutPageHeader, HeaderHero } from '../components/aboutpage-components/AboutPageHeader';
import WhiteFooter from '../components/WhiteFooter';
import { TalkDiv } from '../components/aboutpage-components/AboutPageP2';
import {motion} from 'framer-motion';


const Contact = ()=>{
return(
    <>
        <AboutPageHeader />
        <HeaderHero title = "Contact Us"/>
        <ContactBanners />
        <TalkDiv />
        <WhiteFooter />
    </>
);
}

const ContactBanners = ()=>{
    return(
        <>
            <motion.section className = 'contact-div'
            initial = {{
                    width: 0
                }}
                animate = {{
                    width: "100vw"
                }}  
                
                exit = {{

                }}
            >
                <section className = 'item-content-2'>
                    <div className = 'contact-infos'>


                        <div className = 'each-info'>
                            <div className = 'item-content'>
                            <div className = 'each-info-icon'>
                                <center><i class="ri-map-pin-2-line"></i></center>
                            </div>
                            <center><h1>Address:</h1></center>
                            <p>
                            2750 Open Space, Quadra Street Line Victoria, Canada
                            </p>
                            </div>

                        </div>


                        <div className = 'each-info'>
                            <div className = 'item-content'>
                             <div className = 'each-info-icon'>
                                <center><i class="ri-time-line"></i></center>
                            </div>
                            <center><h1>Working Hours:</h1></center>
                            <p>
                            Open Saturday to Friday
                            From 06:00 PM to 20:00 AM
                            </p> 
                            </div>

                        </div>


                        <div className = 'each-info'>
                                <div className = 'item-content'>

                                <div className = 'each-info-icon'>
                                <center><i class="ri-mail-unread-line"></i></center>
                            </div>
                            <center><h1>Email Address:</h1></center>
                            <p>
                            hello@gmail.com
                            </p>
                            <p>
                            holla@gmail.com
                            </p>
                                </div>
                        </div>      


                        <div className = 'each-info'>
                            <div className = 'item-content'>

                            <div className = 'each-info-icon'>
                                <center><i class="ri-phone-line"></i></center>
                            </div>
                            <center><h1>Toll Free:</h1></center>
                            <p>
                            hello@gmail.com
                            </p>
                            <p>
                            holla@gmail.com
                            </p>
                            </div>

                        </div>                                                

                    </div>

                    



                    {/* CONTACT FORM */}


                </section>

                    <div className = 'contact-form-white'>
                        <div className = 'item-content-2'>
                            <center><h1>Get In Touch</h1></center>
                            <center><p>Contact us with your details & ready to Start with us</p></center>

                            <div className = 'w-form-form'>
                                <div className = 'w-f-f-1'>
                                    <div className='w-f-f-1-each'>
                                        <span className = 'form-label'>Name*</span>
                                        <input type = 'text' placeholder='Eg: Sarah Blankley' />
                                    </div>

                                    <div className='w-f-f-1-each'>
                                        <span className = 'form-label'>Email*</span>
                                        <input type = 'text' placeholder = 'Eg: hello@sarah.com' />
                                    </div>

                                </div>


                                <div className = 'w-f-f-2'>
                                    <div className='w-f-f-2-each'>
                                        <span className = 'form-label'>Subject*</span>
                                        <input type = 'text' placeholder='Enter your subject' />
                                    </div>

                                    <div className='w-f-f-2-each'>
                                        <span className = 'form-label'>Phone*</span>
                                        <input type = 'text' placeholder = 'Enter your phone number' />
                                    </div>

                                </div>   

                                <div className = 'w-f-f-3'>
                                    <span className = 'form-label'>Message*</span>
                                    <textarea className = 'form-t-a'></textarea>    
                                </div>                             

                                <div className = 'w-f-f-4'>
                                    <input type = 'button' value = 'Send Message' className = 'act-btn secondary-bg-colored' /> 
                                </div>
                            </div>
                        </div>
                    </div>
            </motion.section>
        </>
    );
}
export default Contact