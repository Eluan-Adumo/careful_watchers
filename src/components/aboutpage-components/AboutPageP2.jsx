import React from 'react'
import aIcon1 from '../../css/assets/images/icon4.png';
import aIcon2 from '../../css/assets/images/icon5.png';
import aIcon3 from '../../css/assets/images/icon6.png';
import aIcon4 from '../../css/assets/images/icon7.png';

import aServ1 from '../../css/assets/images/icon14.png';
import aServ2 from '../../css/assets/images/icon15.png';
import aServ3 from '../../css/assets/images/icon16.png';
import blobImage from '../../css/assets/images/about.jpg';
import user1 from '../../css/assets/images/user1.jpg'
import user2 from '../../css/assets/images/user2.jpg';
import user3 from '../../css/assets/images/user3.jpg';
import user4 from '../../css/assets/images/user4.jpg';
import guy from '../../css/assets/images/man.png';
import WhiteFooter from '../../components/WhiteFooter';

const AboutPageP2 = ()=>{
    return (
        <>
            <section className = 'about-page-p2'>
                
                <div className = 'about-page-p2-content'>
                <div className = 'about-page-p2-left'>
                        <div className = 'morphed-box'>
                                <img src = {blobImage} />
                        </div>
                </div>
                <div className = 'about-page-p2-right'>
                    <input type = 'button' value = 'ABOUT US' id = 'about-btn' /><br /><br />
                    <h1 className='title-text-3 primary-colored'>
                    We Are Award Winning Digital Marketing Company
                    </h1><br />
                    <p id = 'block-text-about' className = 'dull-colored'>
                    Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit,
                     sed do eiusmod tempor incididunt 
                     ut labore et dolore magna aliqua.
                    </p>
                    <br />
                    <ul id = 'about-ul'>
                        <li>
                            <span className  = 'icon-image'>
                                <img src = {aIcon1} />
                             </span>
                             <span className = 'icon-text'>
                                Brand Strategy
                             </span>
                        </li>


                        <li>
                            <span className  = 'icon-image'>
                                <img src = {aIcon2} />
                             </span>
                             <span className = 'icon-text'>
                                Expert Team
                             </span>
                        </li>


                        <li>
                            <span className  = 'icon-image'>
                                <img src = {aIcon3} />
                             </span>
                             <span className = 'icon-text'>
                                Fast Delivery
                             </span>
                        </li>


                        <li>
                            <span className  = 'icon-image'>
                                <img src = {aIcon4} />
                             </span>
                             <span className = 'icon-text'>
                                Ongoing Report
                             </span>
                        </li>
                    </ul>
                </div>

                </div>
            </section>

            <AboutPageP3 />
            <AboutPageTest />
            <AboutPageTeam />
            <TalkDiv />
            <WhiteFooter />
        </>
    );
}


const AboutPageP3 = () =>{
    return (
        <>
        <section className = "about-page-p3">
            
            <section id = "about-page-p3-content">
                    <div id = "about-p3-left">
                        <input type = "button" value = "OUR PARTNERS" className = "dead-btn" /><br />
                        <h1>A Trusted Partner For Ambitious Brands</h1>
                    </div>
                    <div id = 'about-p3-right'><br /><br />
                    It is a long established fact that a reader will be distracted by the readable 
                    content of a page when looking at its layout. The point of using Lorem Ipsum is that
                    it has a more-or-less normal distribution of letters. 
                    It is a long established fact that a reader will be distracted by the.
                    </div>
                    <div id = 'about-p3-floor'>
                        {/* Put Carousel here */}
                    </div>

                    <div className = 'about-p3-other'>
                        <div className = 'p3-content'>
                            
                        <div className = 'about-p3-each'>
                            <div className = 'about-p3-img'>
                                    <img src = {aServ1} />
                            </div>
                            <div className = "about-p4-title">
                                Select Your service
                            </div>
                            <div className='about-p3-desd'>
                            Lorem ipsum dolor sit amet, consectetur 
                            adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                            </div>
                        </div>


                        <div className = 'about-p3-each'>
                            <div className = 'about-p3-img'>
                                    <img src = {aServ2} />
                            </div>
                            <div className = "about-p4-title">
                                Select Your service
                            </div>
                            <div className='about-p3-desd'>
                            Lorem ipsum dolor sit amet, consectetur 
                            adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                            </div>
                        </div>   



                        <div className = 'about-p3-each'>
                            <div className = 'about-p3-img'>
                                    <img src = {aServ3} />
                            </div>
                            <div className = "about-p4-title">
                                Select Your service
                            </div>
                            <div className='about-p3-desd'>
                            Lorem ipsum dolor sit amet, consectetur 
                            adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                            </div>
                        </div>    
                        </div>                                                
                    </div>
            </section>
        </section>
        </>
    );
}


const AboutPageTest = () =>{
    return(
        <>
            <section className = "about-page-test">
                <section className = "about-page-test-content">
                            <center>
                                <input type = 'button' value = 'CLIENT&apos;S FEEDBACK' className = 'dead-btn-2' />
                                <h1>What Our Client&apos;s Say</h1>
                            </center>
                            <ul>
                                <li>
                                    <div className = "each-testimony">
                                            <div className = 'test-stars'>
                                                *****
                                            </div>
                                            <div className = 'test-texts'>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                            Quis ipsum suspendisse ultrices gravida. 
                                            Risus commodo viverra maecenas accumsan lacus vel facilisis.
                                            </div>
                                            <div className = 'test-handle'>
                                                <div className = 'test-handle-avater-n-name'>
                                                    <img src = {user1} />
                                                        <div className = 'text-handle-name'>
                                                            <h3>John Smith</h3>
                                                            <p>Web Developer</p>
                                                        </div>
                                                </div>
                                                <div className = 'test-quot'>&bdquo;</div>
                                            </div>
                                    </div>
                                </li>
                                <li>
                                    <div className = "each-testimony">
                                            <div className = 'test-stars'>
                                                *****
                                            </div>
                                            <div className = 'test-texts'>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                            Quis ipsum suspendisse ultrices gravida. 
                                            Risus commodo viverra maecenas accumsan lacus vel facilisis.
                                            </div>
                                            <div className = 'test-handle'>
                                                <div className = 'test-handle-avater-n-name'>
                                                    <img src = {user1} />
                                                        <div className = 'text-handle-name'>
                                                            <h3>John Smith</h3>
                                                            <p>Web Developer</p>
                                                        </div>
                                                </div>
                                                <div className = 'test-quot'>&bdquo;</div>
                                            </div>
                                    </div>
                                </li>

                                <li>
                                    <div className = "each-testimony">
                                            <div className = 'test-stars'>
                                                *****
                                            </div>
                                            <div className = 'test-texts'>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                            Quis ipsum suspendisse ultrices gravida. 
                                            Risus commodo viverra maecenas accumsan lacus vel facilisis.
                                            </div>
                                            <div className = 'test-handle'>
                                                <div className = 'test-handle-avater-n-name'>
                                                    <img src = {user1} />
                                                        <div className = 'text-handle-name'>
                                                            <h3>John Smith</h3>
                                                            <p>Web Developer</p>
                                                        </div>
                                                </div>
                                                <div className = 'test-quot'>&bdquo;</div>
                                            </div>
                                    </div>
                                </li>

                                <li>
                                    <div className = "each-testimony">
                                            <div className = 'test-stars'>
                                                *****
                                            </div>
                                            <div className = 'test-texts'>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                            Quis ipsum suspendisse ultrices gravida. 
                                            Risus commodo viverra maecenas accumsan lacus vel facilisis.
                                            </div>
                                            <div className = 'test-handle'>
                                                <div className = 'test-handle-avater-n-name'>
                                                    <img src = {user1} />
                                                        <div className = 'text-handle-name'>
                                                            <h3>John Smith</h3>
                                                            <p>Web Developer</p>
                                                        </div>
                                                </div>
                                                <div className = 'test-quot'>&bdquo;</div>
                                            </div>
                                    </div>
                                </li>                                                                

                            </ul>

                </section>
            </section>
        </>
    );
};

const AboutPageTeam = ()=>{
    return(
        <>
            <section className = 'about-team'>
                <div className = 'about-team-content'>
                <div className = 'about-team-left'>
                    <input type = 'button' id = 'exp'className = 'dead-btn' value = 'OUR EXPERTS' />
                    <br />
                    <h1>
                        Meet Our Leadership Preparing For Your
                        Success
                    </h1>
                </div>
                <div className = 'about-team-right'>
                It is a long established fact that a reader will be distracted by the readable 
                content of a page when looking at its layout. 
                The point of using Lorem Ipsum is that it has a more-or-less normal 
                distribution of letters. 
                It is a long established fact that a reader will be distracted by the.
                </div>
                <div className = 'about-team-people'>
                    <div className = 'each-team-memb'>
                        <div className = 'team-v-box'>
                            <div className = 'teamImage' id = 'teamImage1'>

                            </div>

                        </div>

                        <div className = 'teamName'>
                                <p className = 'nameMain'>
                                    Sarah Taylor
                                </p>
                                <p className = 'teamPos'>
                                    Marketing Lead
                                </p>
                            </div>
                    </div>

                    <div className = 'each-team-memb'>
                        <div className = 'team-v-box'>
                            <div className = 'teamImage' id = 'teamImage1'>
                                
                            </div>

                        </div>

                        
                        <div className = 'teamName'>
                                <p className = 'nameMain'>
                                    Sarah Taylor
                                </p>
                                <p className = 'teamPos'>
                                    Marketing Lead
                                </p>
                            </div>
                    </div>

                    <div className = 'each-team-memb'>
                        <div className = 'team-v-box'>
                            <div className = 'teamImage' id = 'teamImage1'>
                                
                            </div>


                        </div>

                        <div className = 'teamName'>
                                <p className = 'nameMain'>
                                    Sarah Taylor
                                </p>
                                <p className = 'teamPos'>
                                    Marketing Lead
                                </p>
                            </div>
                    </div>

                    <div className = 'each-team-memb'>
                        <div className = 'team-v-box'>
                            <div className = 'teamImage' id = 'teamImage1'>
                                
                            </div>


                        </div>

                        <div className = 'teamName'>
                                <p className = 'nameMain'>
                                    Sarah Taylor
                                </p>
                                <p className = 'teamPos'>
                                    Marketing Lead
                                </p>
                            </div>
                    </div>

                    <div className = 'each-team-memb'>
                        <div className = 'team-v-box'>
                            <div className = 'teamImage' id = 'teamImage1'>
                                
                            </div>

                        </div>

                        <div className = 'teamName'>
                                <p className = 'nameMain'>
                                    Sarah Taylor
                                </p>
                                <p className = 'teamPos'>
                                    Marketing Lead
                                </p>
                            </div>
                    </div>
                </div>

                </div>

            </section>
        </>
    )
}


const TalkDiv = () =>{
    return(
        <>
            <section className = 'talk-div'>
                <section className = 'talk-div-content'>
                    <div className = 'talk-div-left'>
                        <div className = 'talk-div-blob'>
                            <img src = {guy} />
                        </div>
                    </div>
                    <div className = 'talk-div-right'>
                        <input type  ='button' value = 'READY TO START?' className = 'dead-btn' /><br />
                        <h1>Let&apos;s Talk Something Amazing together</h1><br />

                        <p className = 'block-text'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut 
                        labore et dolore magna aliqua. Ut enim ad minim veniam.
                        </p><br />
                        <input type = 'button' value = "Get Started Now&nbsp;&nbsp;&rarr;" class = 'act-btn secondary-bg-colored'/> 
                    </div>


                        <div className = 'talk-div-blob-mobile'>
                            <img src = {guy} />
                        </div>
                </section>
            </section>
        </>
    );
}
export  {AboutPageP2, TalkDiv};