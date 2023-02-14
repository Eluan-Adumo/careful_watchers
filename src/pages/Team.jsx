import React from 'react';
import { AboutPageHeader, HeaderHero } from '../components/aboutpage-components/AboutPageHeader';
import WhiteFooter from '../components/WhiteFooter';
import { TalkDiv } from '../components/aboutpage-components/AboutPageP2';

const Team = () =>{
return(
    <>
        <AboutPageHeader />
        <HeaderHero title = "Leadership Team"/>
        <TeamImages />
        <TalkDiv />
        <WhiteFooter />
    </>
);

}



const TeamImages = ()=>{
    return(
        <>
            <section className = 'about-team' id = 'l-team'>
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
    );
}

export default Team;