import React from 'react';
import {Link} from "react-router-dom";

const Footer = ()=>{
    return(
        <>
            <section id = 'footer'>
                <section id = 'footer-content'>
                    <div id = 'footer-content-left'>
                        <span className = 'footer-title'>
                            <h1>Careful Watchers</h1>
                        </span>
                        <span className = 'footer-text'>
                        Donec sollicitudin molestie malesuada 
                        vivamus magna justo lacinia eget consectetur sed 
                        convallis at tellus donec rutrum congue leo eget malesuada.
                        </span>
                    </div>
                    <div id = 'footer-content-right'>
                        <ul id = 'footer-ul'>
                                
                                    <li className='footer-li'>
                                        <span className = 'footer-title'>
                                            solution
                                        </span>
                                        <ul className = 'footer-ul-ul'>
                                            <li>Cyber Security</li>
                                            <li>Cyber Security</li>
                                            <li>Cyber Security</li>
                                            <li>Cyber Security</li>
                                            <li>Cyber Security</li>
                                            <li>Cyber Security</li>
                                            <li>Cyber Security</li>
                                        </ul>
                                    </li>


                                    <li className='footer-li'>
                                        <span className = 'footer-title'>
                                            solution
                                        </span>
                                        <ul className = 'footer-ul-ul'>
                                            <li>Cyber Security</li>
                                            <li>Cyber Security</li>
                                            <li>Cyber Security</li>
                                            <li>Cyber Security</li>
                                            <li>Cyber Security</li>
                                            <li>Cyber Security</li>
                                            <li>Cyber Security</li>
                                        </ul>
                                    </li> 


                                    <li className='footer-li'>
                                        <span className = 'footer-title'>
                                            solution
                                        </span>
                                        <ul className = 'footer-ul-ul'>
                                            <li>Cyber Security</li>
                                            <li>Cyber Security</li>
                                            <li>Cyber Security</li>
                                            <li>Cyber Security</li>
                                            <li>Cyber Security</li>
                                            <li>Cyber Security</li>
                                            <li>Cyber Security</li>
                                        </ul>
                                    </li>                                                                       
                                
                        </ul>
                    </div>
                </section>
                <div id = 'footer-footer'>
                        <center>
                            &copy; <b>Careful watchers</b> 2023 
                        </center>
                </div>
            </section>
        </>
    );
}


export default Footer