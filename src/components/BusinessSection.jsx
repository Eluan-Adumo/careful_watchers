import React, { useEffect, useState } from 'react'
// IMporting a useful image.
import workImage from '../css/assets/images/what-we-work.png';
import icon1 from '../css/assets/images/image-1.png';
import icon2 from '../css/assets/images/image-2.png';
import icon3 from '../css/assets/images/image-3.png';


import serv1 from '../css/assets/images/services-1.png';
import serv2 from '../css/assets/images/services-2.png';
import serv3 from '../css/assets/images/services-3.png';
import serv4 from '../css/assets/images/services-4.png';

import choose from '../css/assets/images/choose.png';


import cyber from '../css/assets/images/cyber-safety.png';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Spinner from './spinner';

const BusinessSection = () =>{
        return(
            <>
                <section className = 'business-div'>
                    <section className = 'business-div-content'>
                    <div className = 'left-biz-section'>
                        <img src = {workImage} />
                    </div>
                    <div className = 'right-biz-section'>
                        <div className = 'r-biz-title  secondary-colored'>
                            What we do
                        </div>

                        <div className = 'r-biz-big-title primary-colored'>
                            Our different options are listed below
                        </div>

                        <div className = 'r-biz-ops'>
                            <div className = 'r-biz-ops-image-area'>
                                    <center><img src = {icon1} /></center>
                            </div>
                            <div className = 'r-biz-ops-text-area'>
                                <h3 className = 'primary-colored'>
                                        Trusted Partners
                                </h3><br />
                                <p className = 'dull-colored'>
                                Nulla quis lorem ut libero malesuada feugiat. Vivamus magna justo 
                                lacinia eget consectetur sed convallis at tellus.
                                </p>    
                            </div>
                        </div>



                        <div className = 'r-biz-ops'>
                            <div className = 'r-biz-ops-image-area'>
                            <center><img src = {icon2} /></center>
                            </div>
                            <div className = 'r-biz-ops-text-area'>
                                <h3 className = 'primary-colored'>
                                       System Security
                                </h3><br />
                                <p className = 'dull-colored'>
                                Nulla quis lorem ut libero malesuada feugiat. Vivamus magna justo 
                                lacinia eget consectetur sed convallis at tellus.
                                </p>    
                            </div>
                        </div>




                        <div className = 'r-biz-ops'>
                            <div className = 'r-biz-ops-image-area'>
                            <center><img src = {icon3} /></center>
                            </div>
                            <div className = 'r-biz-ops-text-area'>
                                <h3 className = 'primary-colored'>
                                        Product Security
                                </h3><br />
                                <p className = 'dull-colored'>
                                Nulla quis lorem ut libero malesuada feugiat. Vivamus magna justo 
                                lacinia eget consectetur sed convallis at tellus.
                                </p>    
                            </div>
                        </div>
                    </div>

                    
                    <DetailsArea />

                    <SecServices />
                    
                    </section>
                </section>

                <VideoArea />
                <PostVideoArea />

            </>
            
        )
};


const DetailsArea = () =>{
    return(
        <>
            <div className = 'biz-details-frame'>
                <div className = 'biz-details-frame-content'>

                    <div className = 'biz-details-frame-item'>
                        <h1 className = 'white-colored heavy-text'>
                            5k
                        </h1>
                        <p className = 'white-colored'>
                            Data Secured
                        </p>
                    </div>


                    <div className = 'biz-details-frame-item'>
                        <h1 className = 'white-colored heavy-text'>
                        1500
                        </h1>
                        <p className = 'white-colored'>
                            Trusted Organizations
                        </p>
                    </div>

                    <div className = 'biz-details-frame-item'>
                        <h1 className = 'white-colored heavy-text'>
                        1500
                        </h1>
                        <p className = 'white-colored'>
                            Website Protection
                        </p>
                    </div>                   
                </div>
            </div>
        </>
    );
}


const SecServices = ()=>{


        return(
            <>
                <div className = 'sec-services-frame'>
                        <div className = 'sec-services-content'>
                            <center>
                                <h1 className ='primary-colored'>Cyber Security Services</h1>
                                <p className = 'dull-colored'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </center>
                            <ul className = 'cards-ul-2'>
                                <li>
                                    <div className = 'hor-card'>
                                            <div className = 'hor-card-left'>
                                                    <center><img src = {serv1} /></center>
                                            </div>
                                            <div className = 'hor-card-right'>
                                                <h3>
                                                    Phishing Attack
                                                </h3>

                                                <p className = 'dull-colored'>
                                                Nulla quis lorem ut libero malesuada feugiat. 
                                                Vivamus magna justo lacinia eget consectetur sed convallis at tellus<br />

                                                <input type = 'button' value = 'Read More' className = 'trans-btn act-btn' />
                                                </p>
                                            </div>
                                    </div>
                                </li>



                                <li>
                                    <div className = 'hor-card'>
                                            <div className = 'hor-card-left'>
                                            <center><img src = {serv2} /></center>
                                            </div>
                                            <div className = 'hor-card-right'>
                                                <h3>
                                                    Phishing Attack
                                                </h3>

                                                <p className = 'dull-colored'>
                                                Nulla quis lorem ut libero malesuada feugiat. 
                                                Vivamus magna justo lacinia eget consectetur sed convallis at tellus<br />

                                                <input type = 'button' value = 'Read More' className = 'trans-btn act-btn' />
                                                </p>
                                            </div>
                                    </div>
                                </li>



                                <li>
                                    <div className = 'hor-card'>
                                            <div className = 'hor-card-left'>
                                            <center><img src = {serv3} /></center>
                                            </div>
                                            <div className = 'hor-card-right'>
                                                <h3>
                                                    Phishing Attack
                                                </h3>

                                                <p className = 'dull-colored'>
                                                Nulla quis lorem ut libero malesuada feugiat. 
                                                Vivamus magna justo lacinia eget consectetur sed convallis at tellus<br />

                                                <input type = 'button' value = 'Read More' className = 'trans-btn act-btn' />
                                                </p>
                                            </div>
                                    </div>
                                </li>



                                <li>
                                    <div className = 'hor-card'>
                                            <div className = 'hor-card-left'>
                                            <center><img src = {serv4} /></center>
                                            </div>
                                            <div className = 'hor-card-right'>
                                                <h3>
                                                    Phishing Attack
                                                </h3>

                                                <p className = 'dull-colored'>
                                                Nulla quis lorem ut libero malesuada feugiat. 
                                                Vivamus magna justo lacinia eget consectetur sed convallis at tellus<br />

                                                <input type = 'button' value = 'Read More' className = 'trans-btn act-btn' />
                                                </p>
                                            </div>
                                    </div>
                                </li>                                


                            </ul>

                            <br /><br />
                            <center><button type = 'button' id = 'serv-btn' className = 'act-btn secondary-bg-colored'>
                            View all Services&nbsp;<i class="ri-arrow-right-s-fill"></i>
                                </button>
                            </center>
                        </div>

                </div>
            </>
        );
};




const VideoArea = ()=>{


    return(
        <>
        <section className = "video-area">
            <center>
                <button id = 'vid-btn'>
                <i class="ri-play-fill"></i>
                </button>
            </center>
        </section>
        </>
    );
}


const PostVideoArea = ()=>{
    const [userName, userNameSetter] = useState("");
    const [userEmail, userEmailSetter] = useState("");
    const [messageSubject, subjectSetter] = useState("");
    const[userPhone, userPhoneSetter] = useState("");
    const[messageMain, messageSetter] = useState("");
    const [showLoader, setShowLoader] = useState(false);

    useEffect(()=>{
        fetchAllArticles();
    })
    
    const sendMessage = async(e) =>{

        if(userName === "" 
        || userEmail === "" || messageSubject === ""
        || userPhone === "" || messageMain === ""
        ){
            console.log("Values are incomplete");
        }else{
        const data = {
            userEmail: userEmail,
            userName: userName,
            userPhone: userPhone,
            messageMain: messageMain,
            messageSubject : messageSubject
        }

        const url = "http://localhost:1337/api/send-message";
        await axios.post(url, {data}).then((res)=>{
            console.log(res);
        });
        }

    };
    const fetchAllArticles = async()=>{
        let url = "http://localhost:1337/api/fetch-records-front";

        await axios.get(url).then((response)=>{
            // document.querySelector(".newsfeed").innerHTML = response;

            let newsFeed = "<ul class = 'news-feed-ul'>";

            let mainData = JSON.parse(JSON.stringify(response.data));
            // console.log(mainData);
            for(let i = 0; i< mainData.length; i++){
                let image = mainData[i].articlePhoto;
                newsFeed += `<li>
                <div class = 'image-side' style = 'background-image: url("${image}");'>


                </div>
                <div class = 'text-side'>
                    <p>${mainData[i].dateUploaded}</p>
                    <h1><a href = '/read-article/${mainData[i]._id}'>${mainData[i].articleTitle}</a></h1>
                </div>
                
                </li>`;
            }

            newsFeed +=`</ul><br />
            
            <center><a href = '/allarticles'>
            
                <input type = 'button' value = 'All articles' class = 'act-btn secondary-bg-colored' />
            </a></center>`;
            document.querySelector(".newsfeed").innerHTML = newsFeed;
            
        });
    }
    return(
        <>

{
            showLoader

            &&
        
        
        <div className='lightbox'>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Spinner />
            </div>
        }
        
            <section className = "post-video-area">

                <section className = "post-video-area-content">
                    <div className = "post-video-area-left">
                        <p className = "secondary-colored">Why Choose Us</p>
                        <h2 className = "primary-colored second-bigger">
                        You Can Choose Us By Looking At Our Different Skills
                    </h2><br />
                    <p className = "dull-colored para-text">
                    Donec sollicitudin molestie malesuada vivamus magna justo lacinia eget consectetur sed convallis at tellus donec rutrum congue leo eget
                                malesuada quisque velit nisi pretium ut lacinia in elementum
                    </p><br />
                    <ul className = 'choose-list'>
                        <li>
                        <span class = 'thick'><i class="ri-checkbox-circle-line"></i></span><span className = 'net-text-side'>Network and system administration</span>
                        </li>
                        
                        <li>
                        <span class = 'thick'><i class="ri-checkbox-circle-line"></i></span><span className = 'net-text-side'>Operating system and virtual machine</span>
                        </li>


                        <li>
                        <span class = 'thick'><i class="ri-checkbox-circle-line"></i></span><span className = 'net-text-side'>Network security control</span>
                        </li>


                        <li>
                        <span class = 'thick'><i class="ri-checkbox-circle-line"></i></span><span className = 'net-text-side'>Coding languages</span>
                        </li>


                        <li>
                        <span class = 'thick'><i class="ri-checkbox-circle-line"></i></span><span className = 'net-text-side'>Coud Security</span>
                        </li>
                    </ul>
                        
                    </div><br />
                   <div className = 'post-video-area-right'>
                        <img src = {choose} />
                   </div>



                    <div id="frame-div">
                    <h2 className = "primary-colored title-text">Industry Partners</h2>
                        <center><p className = 'dull-colored block-text-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p></center>
                            <br /><br />
                    </div>
                            <div className = 'roller-div'>

                            </div>


{/* Put some title here */}
                            <ul className = 'card-ul-4'>
                                <li id = "card-ul-4-firstchild">
                                    <div className = 'card-3'>
                                            <div className = 'card-3-content'>
                                                <h2>Basic</h2><br />
                                                <h1>Free / Per Month</h1>


                                                <ul className = 'break-ul'>
                                                    <li><span class = 'thick'><i class="ri-checkbox-circle-line"></i></span><span className = 'net-text-side'>10 Days product testing</span></li>
                                                    <li><span class = 'thick'><i class="ri-checkbox-circle-line"></i></span><span className = 'net-text-side'>10 Days product testing</span></li>
                                                    <li><span class = 'thick'><i class="ri-checkbox-circle-line"></i></span><span className = 'net-text-side'>10 Days product testing</span></li>
                                                    <li><span class = 'thick'><i class="ri-checkbox-circle-line"></i></span><span className = 'net-text-side'>10 Days product testing</span></li>
                                                    <li><span class = 'thick'><i class="ri-checkbox-circle-line"></i></span><span className = 'net-text-side'>10 Days product testing</span></li>
                                                    <li><span class = 'thick'><i class="ri-checkbox-circle-line"></i></span><span className = 'net-text-side'>10 Days product testing</span></li>
                                                </ul>

                                                <br />
                                                <input type = 'button' value = 'Get Started' className = "act-btn" id = 'started-btn' />
                                            </div>
                                    </div>
                                </li>




                                <li>
                                    <div className = 'card-3'>
                                            <div className = 'card-3-content'>
                                                <h2>Basic</h2><br />
                                                <h1>Free / Per Month</h1>

                                                <ul className = 'break-ul'>
                                                    <li><span class = 'thick'><i class="ri-checkbox-circle-line"></i></span><span className = 'net-text-side'>10 Days product testing</span></li>
                                                    <li><span class = 'thick'><i class="ri-checkbox-circle-line"></i></span><span className = 'net-text-side'>10 Days product testing</span></li>
                                                    <li><span class = 'thick'><i class="ri-checkbox-circle-line"></i></span><span className = 'net-text-side'>10 Days product testing</span></li>
                                                    <li><span class = 'thick'><i class="ri-checkbox-circle-line"></i></span><span className = 'net-text-side'>10 Days product testing</span></li>
                                                    <li><span class = 'thick'><i class="ri-checkbox-circle-line"></i></span><span className = 'net-text-side'>10 Days product testing</span></li>
                                                    <li><span class = 'thick'><i class="ri-checkbox-circle-line"></i></span><span className = 'net-text-side'>10 Days product testing</span></li>
                                                </ul>
                                                <br />
                                                <input type = 'button' value = 'Get Started' className = "act-btn" id = 'started-btn' />

                                            </div>
                                    </div>
                                </li>




                                <li id = "card-ul-4-lastchild">
                                    <div className = 'card-3'>
                                            <div className = 'card-3-content'>
                                                <h2>Basic</h2><br />
                                                <h1>Free / Per Month</h1>

                                                <ul  className = 'break-ul'>
                                                    <li><span class = 'thick'><i class="ri-checkbox-circle-line"></i></span><span className = 'net-text-side'>10 Days product testing</span></li>
                                                    <li><span class = 'thick'><i class="ri-checkbox-circle-line"></i></span><span className = 'net-text-side'>10 Days product testing</span></li>
                                                    <li><span class = 'thick'><i class="ri-checkbox-circle-line"></i></span><span className = 'net-text-side'>10 Days product testing</span></li>
                                                    <li><span class = 'thick'><i class="ri-checkbox-circle-line"></i></span><span className = 'net-text-side'>10 Days product testing</span></li>
                                                    <li><span class = 'thick'><i class="ri-checkbox-circle-line"></i></span><span className = 'net-text-side'>10 Days product testing</span></li>
                                                    <li><span class = 'thick'><i class="ri-checkbox-circle-line"></i></span><span className = 'net-text-side'>10 Days product testing</span></li>
                                                </ul>

                                                    <br />
                                                <input type = 'button' value = 'Get Started' className = "act-btn" id = 'started-btn' />

                                            </div>
                                    </div>
                                </li>
                            </ul>


                            <div className = "contact-form">
                                <div className = "contact-form-content">
                                    <div className = 'r-1'>
                                    <div className = 'name-frame'>
                                        <span className='label'>Name</span>
                                        <input type = 'text' name = 'name' id = 'name' onChange={(e)=>{
                                            userNameSetter(e.target.value)
                                        }}/>
                                    </div>

                                    <div className = 'email-frame'>
                                        <span className='label'>Email</span>
                                        <input type = 'email' name = 'email' id = 'email' onChange={(e)=>{
                                            userEmailSetter(e.target.value)
                                        }}/>
                                    </div>
                                    
                                   <div className = 'subject-frame'>
                                        <span className='label'>Subject</span>
                                        <input type = 'text' id = 'subject' name = 'subject' 
                                        onChange={(e)=>{
                                            subjectSetter(e.target.value)
                                        }}/>
                                   </div>
                                   
                                   <div className = 'phone-frame'>
                                            <span className='label'>Phone</span>
                                            <input type = 'text' name = 'phone' id = 'phone' onChange={(e)=>{
                                            userPhoneSetter(e.target.value)
                                        }}/>
                                   </div>


                                    </div>

                                    <div className = 'r-2'>
                                    <div className = 'message-frame'>
                                            <span className='label'>Message</span>
                                            <textarea name = 'message' id = 'message'
                                            onChange={(e)=>{
                                                messageSetter(e.target.value);
                                            }}
                                            ></textarea>
                                    </div>
                                        
                                    </div>


                                    <div className = 'r-3'>


                                    <center>
                                        <input type = 'button' value = 'Send Message' id = 'send-message' className = 'act-btn secondary-bg-colored'name = 'send-message' onClick = {sendMessage}/>
                                    </center>                                        
                                    </div>                                    








                                </div>
                            </div>


                            <div className = 'team-div'><br />
                                    <center>
                                        <h1 className = 'primary-colored title-text'>Our Team Members</h1>
                                        <p className = 'dull-colored block-text-2'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </p><br /><br />

                                        <ul>
                                            <li className = "move">
                                                <div className= 'image-frame' id = 'image-1-frame'>

                                                </div>
                                                <div className = 'image-desc' id = 'image-1-desc'>
                                                        <p>
                                                        Larry Hofmann
                                                        </p>
                                                        <p>
                                                        Technology Officer
                                                        </p>
                                                </div>
                                            </li>




                                            <li className = "move">
                                                <div className= 'image-frame' id = 'image-2-frame'>

                                                </div>
                                                <div className = 'image-desc' id = 'image-2-desc'>
                                                        <p>
                                                        Gail Douthitt
                                                        </p>
                                                        <p>
                                                        Businesss Advisor
                                                        </p>
                                                </div>
                                            </li>



                                            <li className = "move">
                                                <div className= 'image-frame' id = 'image-3-frame'>

                                                </div>
                                                <div className = 'image-desc' id = 'image-3-desc'>
                                                        <p>
                                                        Patricia Conlon
                                                        </p>
                                                        <p>
                                                        Creative Director
                                                        </p>
                                                </div>
                                            </li>



                                            <li className = "Nmove">
                                                <div className= 'image-frame' id = 'image-4-frame'>

                                                </div>
                                                <div className = 'image-desc' id = 'image-4-desc'>
                                                        <p>
                                                        Danette Rushing
                                                        </p>
                                                        <p>
                                                        Executive Officer
                                                        </p>
                                                </div>
                                            </li>
                                        </ul>
                                    </center>
                            </div>

                            <div className = "cyber-div">   
                            <div className = "cyber-div-left">
                                <img src = {cyber} className = 'cyber-image'/>
                            </div>
                            <div className = "cyber-div-right">
                                <p className = "secondary-colored">Cyber Safety</p><br />
                                <h2 className = "primary-colored">Protect Your Self Against Cyberattacks</h2><br />
                                <p className = "dull-colored">
                                Donec sollicitudin molestie malesuada vivamus magna 
                                justo lacinia eget consectetur sed convallis at tellus 
                                donec rutrum congue leo eget 
                                malesuada quisque velit nisi pretium ut lacinia in elementum.
                                </p><br />
                                <ul className = 'cyber-ul'>
                                    <li>
                                        <div className = 'cyber-ul-content'>
                                           <span class = 'thick'><i class="ri-checkbox-circle-line"></i></span> Update your software
                                        </div>
                                    </li>

                                    <li>
                                        <div className = 'cyber-ul-content'>
                                        <span class = 'thick'><i class="ri-checkbox-circle-line"></i></span> Update your software
                                        </div>
                                    </li>

                                    <li>
                                        <div className = 'cyber-ul-content'>
                                             <span class = 'thick'><i class="ri-checkbox-circle-line"></i></span>Update your software
                                        </div>
                                    </li>


                                    <li>
                                        <div className = 'cyber-ul-content'>
                                            <span class = 'thick'><i class="ri-checkbox-circle-line"></i></span>Update your software
                                        </div>
                                    </li>

                                    <li>
                                        <div className = 'cyber-ul-content'>
                                             <span class = 'thick'><i class="ri-checkbox-circle-line"></i></span>Update your software
                                        </div>
                                    </li>

                                    <li>
                                        <div className = 'cyber-ul-content'>
                                             <span class = 'thick'><i class="ri-checkbox-circle-line"></i></span>Update your software
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            </div>

                            <div className = "pre-footer">
                                <center>
                                    <h1 className = "primary-colored title-text">Latest News</h1><br />
                                    <p className = "dull-colored block-text-2"> Lorem ipsum dolor sit amet, 
                                    consectetur adipiscing elit, sed do eiusmod 
                                    tempor incididunt ut labore et dolore magna aliqua.</p><br />
                                </center>
                                <div className = 'newsfeed'>
                                    {/* 
                                    INSERT THE ARTICLES 
                                    */}
                                    
                                    {/* SPINNER */}
                                        <Spinner />
                                    {/* END SPINNER */}
                                </div>
                                
                                {/* <ul className = 'pre-footer-ul'>
                                    <li>
                                        <div className = 'pre-footer-image-area' id = 'pre-footer-image-1'>
                                        </div>
                                        <div className = 'pre-footer-text-area'><br />
                                            <p className = 'hint-text dull-colored'>By AdminMarch 15, 2022</p><br />
                                            <p className = 'big-text primary-colored big-text'>Proper Guide Line Learning Strategies About Cyber Security</p>
                                        </div>
                                    </li>


                                    <li>
                                        <div className = 'pre-footer-image-area' id = 'pre-footer-image-2'>

                                        </div><br />
                                        <div className = 'pre-footer-text-area'><br />
                                        <p className = 'hint-text dull-colored'>By AdminMarch 15, 2022</p><br />
                                        <p className = 'big-text primary-colored big-text'>Proper Guide Line Learning Strategies About Cyber Security</p>
                                        </div>
                                    </li>



                                    <li>
                                        <div className = 'pre-footer-image-area' id = 'pre-footer-image-3'>

                                        </div>
                                        <div className = 'pre-footer-text-area'><br />
                                        <p className = 'hint-text dull-colored'>By AdminMarch 15, 2022</p><br />
                                        <p className = 'big-text primary-colored big-text'>Proper Guide Line Learning Strategies About Cyber Security</p>
                                        </div>
                                    </li>                                                                        
                                </ul> */}
                            </div>
                </section>
            </section>
        </>
    );
}

export default BusinessSection;