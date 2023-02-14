import React, {useState, useEffect} from 'react';
import  HeaderMenu  from '../HeaderList';
import {Link} from "react-router-dom";
import shape1 from '../../css/assets/images/shape1.png';
import shape2 from '../../css/assets/images/shape2.png';
import { MobileHeader } from '../Header';
import {motion} from 'framer-motion';
const AboutPageHeader = () =>{

    const [displayCheck, setDisplayCheck] = useState("false");
    const [mobBool, setMobool] = useState(false);
    const toggleDisplayCheck = function(){
    }

    

const toggleMobileMenu = () =>{
    let bar1 = document.querySelector(".bar1");
    let bar2 = document.querySelector(".bar2");
    let bar3 = document.querySelector(".bar3");
        
        if(!mobBool){
            document.querySelector(".bar").style.transition= "all 0.5s ease";
            bar1.style.transform = "rotate(0deg)";
            bar3.style.transform = "rotate(0deg)";
            bar1.style.marginTop = "0px";
            bar3.style.marginTop = "0px";
            bar2.style.visibility = "visible";

            
        }else{
            document.querySelector(".bar").style.transition= "all 0.5s ease";
            bar1.style.transform = "rotate(45deg)";
            bar2.style.visibility = "hidden";
            bar3.style.transform = "rotate(-45deg)";

            bar1.style.marginTop = "17px";
            bar3.style.marginTop = "-23px";
        }

        setMobool(!mobBool);
};

    return(
        <>
            <header className = 'about-page-header'>
                <div className = 'about-page-header-top'>
                    <div className = 'about-page-header-top-left'>
                        Careful Watchers
                    </div>
                    <div className = 'about-page-header-search-area'>
                        <input type = 'text' placeholder = 'Search Here'  className = 'search-main' />
                    </div>
                    <div className = 'about-page-header-right'>
                        <div className = 'phone-icon'>
                        <span className = 'pi'><i class="ri-phone-line"></i></span> &nbsp;+234 8(0)234 674 &nbsp;
                        |
                        </div>
                        
                        <div className = 'soc-icons'>
                            <ul>
                                <li>
                                <i class="ri-facebook-box-fill"></i>
                                </li>

                                <li>
                                <i class="ri-twitter-fill"></i>
                                </li>

                                <li>
                                <i class="ri-linkedin-box-fill"></i>
                                </li>

                                <li>
                                <i class="ri-instagram-fill"></i>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
                <div className = 'about-page-header-bottom'>
                        <ul className = 'about-nav-link'>
                                <li><Link to = '/'>Home</Link></li>
                                <li><Link to = '/About' className = 'secondary-colored'>About Us</Link>
                                   
                                </li>
                                <li><Link to = "/Service">Service</Link>

                                </li>
                                <li>Team</li>
                                <li>Contact</li>
                            </ul>
                            <div className = 'site-title-mobile'>Careful Watchers</div>
                    <input type = 'button' value = 'Get A Free Quote' className = 'get-btn' />

                        <BurgerMenu display = {false}/>
                </div>
            </header>


            <HiddenHeader elemState = {false}/>
           
        </>
    );

}



// WHY DO WE NEED THIS HERE
const BurgerMenu = (props)=>{
    const [mobBool, setMobool] = useState(false);





    const toggleMobileMenu = () =>{
        let d = document;
        let bar1 = document.querySelector(".bar1");
        let bar2 = document.querySelector(".bar2");
        let bar3 = document.querySelector(".bar3");
        let mainBtn = d.querySelector(".burger-menu-button");
            if(mobBool){
                document.querySelector(".bar").style.transition= "all 0.5s ease";
                bar1.style.transform = "rotate(0deg)";
                bar3.style.transform = "rotate(0deg)";
                bar1.style.marginTop = "0px";
                bar3.style.marginTop = "0px";
                bar2.style.visibility = "visible";
                mainBtn.style.marginTop = "0px";
                
            }else{
                document.querySelector(".bar").style.transition= "all 0.5s ease";
                bar1.style.transform = "rotate(45deg)";
                bar2.style.visibility = "hidden";
                bar3.style.transform = "rotate(-45deg)";
    
                bar1.style.marginTop = "20px";
                bar3.style.marginTop = "-20px";
                mainBtn.style.marginTop = "-5px";
            }
    
            setMobool(!mobBool);
    };




    return(
        <>
                <button className = 'burger-menu-button' type = 'button' onClick = {toggleMobileMenu}>
                        <span className = 'bar bar1'></span>
                        <span className = 'bar bar2'></span>
                        <span className = 'bar bar3'></span>
                    </button>

            {
            mobBool &&
                <MobileHeader />
            }
        </>
    )
}

const HiddenHeader = (props)=>{

    const [isVisible, setVisibility] = useState(props.elemState);
    const [height, setHeight] = useState(0);

    useEffect(()=>{
        window.addEventListener("scroll", listenToScroll);
        return () =>
            window.removeEventListener("scroll", listenToScroll);
    }, []);

    const listenToScroll = ()=>{
        let heightToHideFrom = 500;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        setHeight(winScroll);

        if(winScroll > heightToHideFrom){
            setVisibility(true);
        }else{
            
            !isVisible && setVisibility(false);
        }
    };



    return (
        <>
               {
            isVisible
            &&
                <motion.header className = 'app-header-2'   initial={{
                    display: "none", opacity: 1
                }} animate = {{display: "block", opacity: 1}} transition= {{ease: "linear", duration: 0.4}}exit = {{}}>
                <div className = 'app-header-content'>
                    <div className = 'app-header-left'>
                        Careful Watchers
                    </div>
                    <HeaderMenu />
                    <div className = 'app-header-last'>
                        <button type = 'button'
                         className = 'act-btn secondary-bg-colored' id = 'dive-btn-2'>
                                    Dive in&nbsp;<i class="ri-arrow-right-s-fill"></i>
                            </button> 
                        
                    </div>
                    <BurgerMenu display = {false}/>
                </div>
            </motion.header>
            }
    
        </>
        
    );
}


const HeaderHero = (props) =>{
    return(
        <>
            <section className = "about-hero">
                <div className = "about-hero-content">
                    <img src = {shape1} id = 'floating-wallet'/>
                    <img src = {shape2} id = 'floating-sponge'/>
                    <div className = 'h-hero-title'>
                    <h1 className = 'title-text' id = 'abt-title'>{props.title}</h1>
                    <p><span className="secondary-colored"><b>Home</b></span> <i class="ri-arrow-right-s-line"></i> {props.title}</p>
                    </div>
                   
                </div>
            </section>
        </>
    );
}


export {AboutPageHeader, HeaderHero, HiddenHeader}