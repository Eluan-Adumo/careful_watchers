import React from 'react';
import { useRef, useState, useEffect } from 'react';
import '../css/index.css';
import {handleMouseOver, handleMouseOut} from '../resr/EvtHandlers';
import {Link} from 'react-router-dom'
import ReactDom from "react-dom/client";
import HeaderMenu from './HeaderList';
import { HiddenHeader } from './aboutpage-components/AboutPageHeader';
// import {HandleAboutMouseOver, HandleAboutMouseOut} from AboutEvent;
const Header = ()=>{

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



// const handleActions = useRef();
    return(
        <>
            <header className = 'app-header'>
                <div className = 'app-header-content'>
                    <div className = 'app-header-left'>
                        Careful Watchers
                    </div>
                    <HeaderMenu />
                    <div className = 'app-header-last'>
                        <button id = 'dive-btn' className = 'act-btn secondary-bg-colored'>
                        Dive in&nbsp;<i class="ri-arrow-right-s-fill"></i>    
                        </button> 
                    </div>
                    <button className = 'burger-menu-button' type = 'button' onClick = {toggleMobileMenu}>
                        <span className = 'bar bar1'></span>
                        <span className = 'bar bar2'></span>
                        <span className = 'bar bar3'></span>
                    </button>
                </div>
            </header>

            
        {
            mobBool &&
            <MobileHeader />
        }
            
            <HiddenHeader elemState = {false}/>
        </>

    );
}


const MobileHeader = () =>{

    return(
        <>
            <section className = 'mobile-header'>
                    <div className='mobile-header-content'>
                    <ul>
                                <li><Link to = '/'>Home</Link></li>
                                <li><Link to = '/About'>About Us</Link>
                                   
                                </li>
                                <li onMouseOver = {handleMouseOver} onMouseOut = {handleMouseOut}>
                                    
                                    
                                    <Link to = "/Service">Service</Link>
                                    {/* {
                                        isVisible
                                        &&

                                        <div className = 'drop-downs' id = 'service-drop-down'>
                                        <div className = 'd-d-list'>
                                            <div className = 'd-d-list-item'><Link to = '/Service'>Services</Link></div>
                                            <div className = 'd-d-list-item'><Link to = '/Service-details'>Services Details</Link></div>
                                        </div>
                                        </div>
                                    } */}
                                    <div className = 'drop-downs' id = 'service-drop-down'>
                                        <div className = 'd-d-list'>
                                            <div className = 'd-d-list-item'><Link to = '/Service'>Services</Link></div>
                                            <div className = 'd-d-list-item'><Link to = '/Service-details'>Services Details</Link></div>
                                        </div>
                                        </div>

                                </li>
                                <li>
                                    <Link to = '/team'>Team</Link>
                                </li>
                                <li>
                                    <Link to = '/contact'>Contact</Link>
                                </li>
                            </ul>
                    </div>
            </section>
        </>
    );
}




export   {Header, MobileHeader}