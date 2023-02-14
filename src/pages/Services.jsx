// import React, {useState, useRef} from 'react';
import { AboutPageHeader, HeaderHero } from '../components/aboutpage-components/AboutPageHeader';
import WhiteFooter from '../components/WhiteFooter';
import { TalkDiv } from '../components/aboutpage-components/AboutPageP2';
import icon1 from '../css/assets/images/icon8.png';
import icon2 from '../css/assets/images/icon9.png';
import icon3 from '../css/assets/images/icon10.png';
import icon4 from '../css/assets/images/icon11.png';
import icon5 from '../css/assets/images/icon12.png';
import icon6 from '../css/assets/images/icon13.png';
import c1 from '../css/assets/images/elan.png';
import c2 from '../css/assets/images/startp.png';
import c3 from '../css/assets/images/edmo.png';

import lap1 from '../css/assets/images/case-studies1.png';
import lap2 from '../css/assets/images/case-studies2.png';
import lap3 from '../css/assets/images/case-studies3.png';

import ww1 from '../css/assets/images/icon14.png';
import ww2 from '../css/assets/images/icon15.png';
import ww3 from '../css/assets/images/icon16.png';
const Services = () =>{
    return (
        <>
        <AboutPageHeader />
        <HeaderHero title = "Our Services" />
        <OfferSect />
        <TalkDiv />
        <CaseStudies />
        <WeWork />
        <ReasPricing />
        <WhiteFooter />
        
        </>
    );
};



const OfferSect = ()=>{
    //REACT HOOKS FUNCTIONS
    // const [index, setIndex] = useState(0);
    // const [letters, setLetters] = useState("James");
    // const inputRefference = useRef(null);

    // const incrementIndex = ()=>{
    //     setIndex(index + 1);
    // }
    // const handleChange = (evt)=>{
    //     let userValue = evt.target.value;
    //     setLetters(userValue);
    // }

    // END HOOKS FUNCTIONS
    return (
        <>
        <section className = 'offser-sect'>

                {/* <center>
                    <div> {index}, <button onClick = {incrementIndex}>Increment Index</button></div>
                   <br />
                
                <div>
                    <input type = 'text' placeholder='write something here' onChange = {handleChange}/>{letters}
                </div>

<div>
    <br />
    <input type = 'text' placeholder = 'Write something here...' ref = {inputRefference} /><br />
    <button onClick = {()=>{
        inputRefference.current.value = "There is smoke on the mountain";
    }}>
        Do something
    </button>
</div>
                </center>
 */}
                <section className = 'offer-sect-content'>
                <center>
                    <input type = 'button' value = 'OUR SERVICES' className = 'dead-btn' id = 'dead-btn-2' /><br />
                    <h1>
                        We Offer Professional Services For Business
                    </h1><br />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                </center><br />
                    <ul> 
                        <li>
                            <div className = 'offer-main'>
                                <div className = 'offer-main-content'>
                                    <div className = 'o-m-header'>
                                        <img src = {icon1} /><div className = 'o-m-title'>Branding</div>
                                    </div>
                                    <div className = 'o-m-body'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut 
                                    labore et dolore magna aliqua. Ut enim ad minim veniam.
                                    </div>
                                </div>
                            </div>
                        </li>


                        <li>
                            <div className = 'offer-main'>
                            <div className = 'offer-main-content'>
                                    <div className = 'o-m-header'>
                                        <img src = {icon2} /><div className = 'o-m-title'>Branding</div>
                                    </div>
                                    <div className = 'o-m-body'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut 
                                    labore et dolore magna aliqua. Ut enim ad minim veniam.
                                    </div>
                                </div>
                            </div>
                        </li>


                        <li>
                            <div className = 'offer-main'>
                            <div className = 'offer-main-content'>
                                    <div className = 'o-m-header'>
                                        <img src = {icon3} /><div className = 'o-m-title'>Branding</div>
                                    </div>
                                    <div className = 'o-m-body'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut 
                                    labore et dolore magna aliqua. Ut enim ad minim veniam.
                                    </div>
                                </div>
                            </div>
                        </li>



                        <li>
                            <div className = 'offer-main'>
                            <div className = 'offer-main-content'>
                                    <div className = 'o-m-header'>
                                        <img src = {icon4} /><div className = 'o-m-title'>Branding</div>
                                    </div>
                                    <div className = 'o-m-body'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut 
                                    labore et dolore magna aliqua. Ut enim ad minim veniam.
                                    </div>
                                </div>
                            </div>
                        </li>


                        <li>
                            <div className = 'offer-main'>
                            <div className = 'offer-main-content'>
                                    <div className = 'o-m-header'>
                                        <img src = {icon5} /><div className = 'o-m-title'>Branding</div>
                                    </div>
                                    <div className = 'o-m-body'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut 
                                    labore et dolore magna aliqua. Ut enim ad minim veniam.
                                    </div>
                                </div>
                            </div>
                        </li>


                        <li>
                            <div className = 'offer-main'>
                            <div className = 'offer-main-content'>
                                    <div className = 'o-m-header'>
                                        <img src = {icon6} /><div className = 'o-m-title'>Branding</div>
                                    </div>
                                    <div className = 'o-m-body'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut 
                                    labore et dolore magna aliqua. Ut enim ad minim veniam.
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </section>
        </section>
        </>
    )
}


const CaseStudies = () =>{
    let index = 0;
    const navRight = ()=>{
        index+=100;
        let carousel = document.querySelector(".carousel-main");
        carousel.style.marginRight = "-"+index+"%";
        carousel.style.transition = "all 0.5s ease";
        
    }

    const navLeft = () =>{
        index+=100;
        let carousel = document.querySelector(".carousel-main");
        carousel.style.marginLeft = "-"+index+"%";
        carousel.style.transition = "all 0.5s ease";
        
    }
    return(
        <>
        <section className = "case-studies">
            <section className = "case-studies-content">
            <center>
                    <input type = 'button' value = 'OUR CASE STUDIES' className = 'dead-btn' id = 'dead-btn-2' /><br />
                    <h1>
                        We Get You Higher Revenues, Not Just Higher Ranks
                    </h1><br />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                </center><br />
                <div className = 'carousel-area'>
                    <ul className = 'carousel-main'>
                        <li className = 'carousel-unit'>
                        <div className = 'c-unit-left'>
                            <img src = {c1} /><br />
                            <h1 className = 'primary-colored'>eLan Education</h1>
                            <p className = 'dull-colored b-text'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, 
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                            </p>
                            <div className = 'c-listings'>
                                <ul>
                                    <li>
                                        <h3 className = 'secondary-colored'>FRAMEWORK</h3>
                                        <h2 className = 'primary-colored'>WordPress</h2>
                                    </li>

                                    <li>
                                        
                                        <h3 className = 'secondary-colored'>CATEGORY</h3>
                                        <h2 className = 'primary-colored'>Education</h2>
                                        
                                    </li>

                                    <li>
                                        
                                        <h3 className = 'secondary-colored'>WEB LINK</h3>
                                        <h2 className = 'primary-colored'>www.elan.com</h2>
                                        
                                    </li>                                    
                                </ul>
                            </div>
                        </div>

                        <div className = 'c-unit-right'>
                            <img src = {lap1} />
                        </div>
                        </li>

                        <li className = 'carousel-unit'>
                        <div className = 'c-unit-left'>
                            <img src = {c2} /><br />
                            <p className = 'dull-colored b-text'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, 
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                            </p>
                            <div className = 'c-listings'>
                                <ul>
                                    <li>
                                        <h3 className = 'secondary-colored'>FRAMEWORK</h3>
                                        <h2 className = 'primary-colored'>WordPress</h2>
                                    </li>

                                    <li>
                                        
                                        <h3 className = 'secondary-colored'>CATEGORY</h3>
                                        <h2 className = 'primary-colored'>Education</h2>
                                        
                                    </li>

                                    <li>
                                        
                                        <h3 className = 'secondary-colored'>WEB LINK</h3>
                                        <h2 className = 'primary-colored'>www.elan.com</h2>
                                        
                                    </li>                                    
                                </ul>
                            </div>
                        </div>

                        <div className = 'c-unit-right'>
                            <img src = {lap2} />
                        </div>
                        </li>

                        <li className = 'carousel-unit'>
                        <div className = 'c-unit-left'>
                            <img src = {c3} /><br />
                            <p className = 'dull-colored b-text'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, 
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                            </p>
                            <div className = 'c-listings'>
                                <ul>
                                    <li>
                                        <h3 className = 'secondary-colored'>FRAMEWORK</h3>
                                        <h2 className = 'primary-colored'>WordPress</h2>
                                    </li>

                                    <li>
                                        
                                        <h3 className = 'secondary-colored'>CATEGORY</h3>
                                        <h2 className = 'primary-colored'>Education</h2>
                                        
                                    </li>

                                    <li>
                                        
                                        <h3 className = 'secondary-colored'>WEB LINK</h3>
                                        <h2 className = 'primary-colored'>www.elan.com</h2>
                                        
                                    </li>                                    
                                </ul>
                            </div>
                        </div>

                        <div className = 'c-unit-right'>
                            <img src = {lap3} />
                        </div>
                         </li>
                    </ul>
                </div>
                <div className = 'control-buttons'>
                    <input type = 'button' value = '<' onClick = {navLeft} />
                    <input type = 'button' value = '>' onClick = {navRight}  />
                </div>
            </section>
        </section>
        </>
    );
}

const WeWork = ()=>{
    return(
            <>
                <section className = 'we-work'>
                    <section className = 'we-work-content'>
                        <div className = 'title-button'>
                            <center><input type = 'button' value = 'OUR PROCESS' className='dead-btn' id = 'db'/></center>
                            
                            <h1 className = 'primary-colored title-text'>How We Work?</h1>
                        </div>

                        <div className = 'we-work-options'>
                                <ul className = 'w-w-o-ul'>
                                    <li>
                                        <img src = {ww1} />
                                        <br />
                                        <h2>Select Your Service</h2>
                                        <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                        sed do eiusmod tempor incididunt ut labore et dolore magna.
                                        </p>
                                    </li>
                                    <li>
                                    <img src = {ww2} />
                                        <br />
                                        <h2>Optimizations</h2>
                                        <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                        sed do eiusmod tempor incididunt ut labore et dolore magna.
                                        </p>
                                    </li>
                                    <li>
                                        
                                    <img src = {ww3} />
                                        <br />
                                        <h2>We've got your back</h2>
                                        <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                        sed do eiusmod tempor incididunt ut labore et dolore magna.
                                        </p>
                                    </li>
                                </ul>
                        </div>
                    </section>
                </section>
            </>
    );
}


const ReasPricing = () =>{
    return(
        <>
            <section className = 'reas-pricing'>
                <section className = 'reas-pricing-content'>
                        <center>
                            <input type = 'button' value = 'PRICING OPTIONS' id = 'db' className = 'dead-btn' /><br />
                            <h1 className = 'title-text'>Our Reasonable Pricing</h1>
                        </center>
                        <ul className = 'pricing-ul'>
                            <li>
                            <div className = 'each-pricing'>
                                <div className = 'item-content-2'>
                                        <h1 className = 'feat-title'>Free</h1>
                                        <p className= 'light-h-text'>Give Lofi a try for free</p>

                                        <p><span className = 'h-text'>$0</span>/month</p>
                                        <p className= 'light-h-text'>Pricing includes coverage for users</p>
                                        <input type ='button' value = 'Get Started' class = 'act-btn' id = 'started-btn' />
                                        <h2 className = 'feat-title-text'>ALL FEATURES</h2>
                                        <ul>
                                            <li><span className= 'f-r-icon'><i class = 'ri-check-line'></i></span><span className = 'feat-text'>1 seat</span></li>
                                            <li><span className= 'f-r-icon'><i class = 'ri-check-line'></i></span><span className = 'feat-text'>1 seat</span></li>
                                            <li><span className= 'f-r-icon'><i class = 'ri-check-line'></i></span><span className = 'feat-text'>1 seat</span></li>
                                            <li><span className= 'f-r-icon'><i class = 'ri-check-line'></i></span><span className = 'feat-text'>1 seat</span></li>
                                            <li><span className= 'f-r-icon'><i class = 'ri-check-line'></i></span><span className = 'feat-text'>1 seat</span></li>
                                            <li><span className= 'f-b-r-icon'><i class = 'ri-close-line'></i></span><span className = 'feat-text'>1 seat</span></li>
                                            <li><span className= 'f-b-r-icon'><i class = 'ri-close-line'></i></span><span className = 'feat-text'>1 seat</span></li>
                                            <li><span className= 'f-b-r-icon'><i class = 'ri-close-line'></i></span><span className = 'feat-text'>1 seat</span></li>
                                            <li><span className= 'f-b-r-icon'><i class = 'ri-close-line'></i></span><span className = 'feat-text'>1 seat</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>


                            <li>
                                <div className = 'each-pricing'>
                                <div className = 'item-content-2'>
                                        <h1 className = 'feat-title'>Free</h1>
                                        <p className= 'light-h-text'>Give Lofi a try for free</p>

                                        <p><span className = 'h-text'>$0</span>/month</p>
                                        <p className= 'light-h-text'>Pricing includes coverage for users</p>
                                        <input type ='button' value = 'Get Started' class = 'act-btn' id = 'started-btn' />
                                        <h2 className = 'feat-title-text'>ALL FEATURES</h2>
                                        <ul>
                                            <li><span className= 'f-r-icon'><i class = 'ri-check-line'></i></span><span className = 'feat-text'>1 seat</span></li>
                                            <li><span className= 'f-r-icon'><i class = 'ri-check-line'></i></span><span className = 'feat-text'>1 seat</span></li>
                                            <li><span className= 'f-r-icon'><i class = 'ri-check-line'></i></span><span className = 'feat-text'>1 seat</span></li>
                                            <li><span className= 'f-r-icon'><i class = 'ri-check-line'></i></span><span className = 'feat-text'>1 seat</span></li>
                                            <li><span className= 'f-r-icon'><i class = 'ri-check-line'></i></span><span className = 'feat-text'>1 seat</span></li>
                                            <li><span className= 'f-b-r-icon'><i class = 'ri-close-line'></i></span><span className = 'feat-text'>1 seat</span></li>
                                            <li><span className= 'f-b-r-icon'><i class = 'ri-close-line'></i></span><span className = 'feat-text'>1 seat</span></li>
                                            <li><span className= 'f-b-r-icon'><i class = 'ri-close-line'></i></span><span className = 'feat-text'>1 seat</span></li>
                                            <li><span className= 'f-b-r-icon'><i class = 'ri-close-line'></i></span><span className = 'feat-text'>1 seat</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>


                            <li>
                            <div className = 'each-pricing'>
                                <div className = 'item-content-2'>
                                        <h1 className = 'feat-title'>Free</h1>
                                        <p className= 'light-h-text'>Give Lofi a try for free</p>

                                        <p><span className = 'h-text'>$0</span>/month</p>
                                        <p className= 'light-h-text'>Pricing includes coverage for users</p>
                                        <input type ='button' value = 'Get Started' class = 'act-btn' id = 'started-btn' />
                                        <h2 className = 'feat-title-text'>ALL FEATURES</h2>
                                        <ul>
                                            <li><span className= 'f-r-icon'><i class = 'ri-check-line'></i></span><span className = 'feat-text'>1 seat</span></li>
                                            <li><span className= 'f-r-icon'><i class = 'ri-check-line'></i></span><span className = 'feat-text'>1 seat</span></li>
                                            <li><span className= 'f-r-icon'><i class = 'ri-check-line'></i></span><span className = 'feat-text'>1 seat</span></li>
                                            <li><span className= 'f-r-icon'><i class = 'ri-check-line'></i></span><span className = 'feat-text'>1 seat</span></li>
                                            <li><span className= 'f-r-icon'><i class = 'ri-check-line'></i></span><span className = 'feat-text'>1 seat</span></li>
                                            <li><span className= 'f-b-r-icon'><i class = 'ri-close-line'></i></span><span className = 'feat-text'>1 seat</span></li>
                                            <li><span className= 'f-b-r-icon'><i class = 'ri-close-line'></i></span><span className = 'feat-text'>1 seat</span></li>
                                            <li><span className= 'f-b-r-icon'><i class = 'ri-close-line'></i></span><span className = 'feat-text'>1 seat</span></li>
                                            <li><span className= 'f-b-r-icon'><i class = 'ri-close-line'></i></span><span className = 'feat-text'>1 seat</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>



                            <li>
                            <div className = 'each-pricing'>
                                <div className = 'item-content-2'>
                                        <h1 className = 'feat-title'>Free</h1>
                                        <p className= 'light-h-text'>Give Lofi a try for free</p>

                                        <p><span className = 'h-text'>$0</span>/month</p>
                                        <p className= 'light-h-text'>Pricing includes coverage for users</p>
                                        <input type ='button' value = 'Get Started' class = 'act-btn' id = 'started-btn' />
                                        <h2 className = 'feat-title-text'>ALL FEATURES</h2>
                                        <ul>
                                            <li><span className= 'f-r-icon'><i class = 'ri-check-line'></i></span><span className = 'feat-text'>1 seat</span></li>
                                            <li><span className= 'f-r-icon'><i class = 'ri-check-line'></i></span><span className = 'feat-text'>1 seat</span></li>
                                            <li><span className= 'f-r-icon'><i class = 'ri-check-line'></i></span><span className = 'feat-text'>1 seat</span></li>
                                            <li><span className= 'f-r-icon'><i class = 'ri-check-line'></i></span><span className = 'feat-text'>1 seat</span></li>
                                            <li><span className= 'f-r-icon'><i class = 'ri-check-line'></i></span><span className = 'feat-text'>1 seat</span></li>
                                            <li><span className= 'f-b-r-icon'><i class = 'ri-close-line'></i></span><span className = 'feat-text'>1 seat</span></li>
                                            <li><span className= 'f-b-r-icon'><i class = 'ri-close-line'></i></span><span className = 'feat-text'>1 seat</span></li>
                                            <li><span className= 'f-b-r-icon'><i class = 'ri-close-line'></i></span><span className = 'feat-text'>1 seat</span></li>
                                            <li><span className= 'f-b-r-icon'><i class = 'ri-close-line'></i></span><span className = 'feat-text'>1 seat</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                </section>
            </section>
        </>
    )
}

const FaqArea = () =>{
    
}
export default Services