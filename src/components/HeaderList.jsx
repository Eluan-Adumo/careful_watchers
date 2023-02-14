import React from 'react';
import { useState, useEffect } from 'react';
import '../css/index.css';
import {handleMouseOver, handleMouseOut} from '../resr/EvtHandlers';
import {Link} from 'react-router-dom'
import ReactDom from "react-dom/client";
// import {HandleAboutMouseOver, HandleAboutMouseOut} from AboutEvent;


const HeaderMenu = () =>{
    const [isVisible, toggleVisible] = useState(false);
    const handleMouseOver = () =>{
        toggleVisible(true);
    }

    const handleMouseOut = () =>{
        toggleVisible(false);
    }

    return(
        <>
                            <div className = 'app-header-right'>
                            <ul>
                                <li><Link to = '/'>Home</Link></li>
                                <li><Link to = '/About'>About Us</Link>
                                   
                                </li>
                                <li onMouseOver = {handleMouseOver} onMouseOut = {handleMouseOut}>
                                    
                                    
                                    <Link to = "/Service">Service</Link>
                                    {
                                        isVisible
                                        &&

                                        <div className = 'drop-downs' id = 'service-drop-down'>
                                        <div className = 'd-d-list'>
                                            <div className = 'd-d-list-item'><Link to = '/Service'>Services</Link></div>
                                            <div className = 'd-d-list-item'><Link to = '/Service-details'>Services Details</Link></div>
                                        </div>
                                        </div>
                                    }

                                </li>
                                <li>
                                    <Link to = '/team'>Team</Link>
                                </li>
                                <li>
                                    <Link to = '/contact'>Contact</Link>
                                </li>
                            </ul>
                    </div>
        </>
    );
}


export default HeaderMenu;