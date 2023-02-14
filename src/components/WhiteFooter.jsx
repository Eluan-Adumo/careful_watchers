import React from 'react';

const WhiteFooter = () =>{
    return(
        <>
            <footer className = 'white-footer'>
                <section className = 'white-footer-content'>
                        <div className = 'white-footer-up'>
                            <div className ='w-f-u-left'>
                                <h1>CAREFUL WATCHERS</h1>
                                <p className = 'secondary-colored'>
                                    SUBSCRIBE TO OUR NEWSLETTER
                                </p>    
                                <br />
                                <div class = 'sub-form-box'>
                                    <input type = 'text' placeholder = 'Enter your email' className = 'n-l-text'/>
                                    <input type = 'button' value = 'Subscribe Now' className = 'n-l-btn' />
                                </div>
                            </div> 

                            <div className = 'w-f-u-right'>
                                <ul className = 'w-f-u-r-ul1'>
                                        
                                            <h2 className = 'ul-titl'>
                                                Services
                                            </h2><br />
                                            <ul>
                                                <li>
                                                Marketing
                                                </li>

                                                <li>
                                                Web Development
                                                </li>

                                                <li>
                                                App Design
                                                </li>

                                                <li>
                                                Product Branding
                                                </li>

                                                <li>
                                                Content Writing
                                                </li>

                                            </ul>

                                       
                                </ul>

                                <ul className = 'w-f-u-r-ul1'>
                                       
                                            <h2 className = 'ul-titl'>
                                                Quick Links
                                            </h2><br />
                                            <ul>
                                                <li>
                                                Home
                                                </li>

                                                <li>
                                                About Us
                                                </li>

                                                <li>
                                                Case Studies
                                                </li>

                                                <li>
                                                Our News
                                                </li>

                                                <li>
                                                Contact Us
                                                </li>

                                            </ul>

                                        
                                </ul>



                                <ul className = 'w-f-u-r-ul1'>
                                       
                                            <h2 className = 'ul-titl'>
                                                Contact Info
                                            </h2><br />
                                            <ul>

                                                <li>
                                                Address: 35 Menlo Park CA USA
                                                </li>

                                                <li>
                                                Email: hello@carefulwatchers.globe
                                                </li>

                                                <li>
                                                Phone: +44 587 154756
                                                </li>

                                                <li>
                                                Fax: +55 58715 4756
                                                </li>

                                            </ul>

                                        
                                </ul>
                                
                            </div>
                        </div>
                        <div className = 'white-footer-bottom'>
                            <div class = 'w-f-b-left'>
                                &copy; <b>Creful Watchers</b> 2023
                            </div>
                            <div className = 'w-f-b-right'>
                                Privacy Policy &mdash; Terms & Conditions
                            </div>
                        </div>
                </section>
            </footer>
        </>
    );
}

export default WhiteFooter;