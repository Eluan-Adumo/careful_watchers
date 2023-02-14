import React from  'react';
import fearures1 from '../css/assets/images/features-1.png';
import fearures2 from '../css/assets/images/features-2.png';
import fearures3 from '../css/assets/images/features-3.png';

const Smalldiv = () =>{
    return(
            <>
            <section className = 'small-div'>
                <ul className = 'card-holders'>

                    <li>   
                        <div className = 'cards'>
                            <center>
                                <img src = {fearures1} />
                            </center><br />
                                <div className = 'title-text'>
                                    Some heading
                                </div><br /><br />
                                <div className = 'description-text dulled-colored'>
                                Vivamus magna justo lacinia eget consectetur sed convallis at tellus. 
                                Donec rutrum congue leo eget malesuada. 
                                Quisque velit nisi pretium ut lacinia in elementum id enim.
                                </div>
                        </div>
                    </li>


                    <li>
                        <div className = 'cards'>
                                <center>
                                    <img src = {fearures2} />
                                </center><br />
                                <div className = 'title-text'>
                                    Some heading
                                </div><br /><br />
                                <div className = 'description-text dulled-colored'>
                                Vivamus magna justo lacinia eget consectetur sed convallis at tellus. 
                                Donec rutrum congue leo eget malesuada. 
                                Quisque velit nisi pretium ut lacinia in elementum id enim.
                                </div>                            
                        </div>
                        
                    </li>

                    <li>
                    <div className = 'cards'>
                                <center>
                                    <img src = {fearures3} />
                                </center><br />
                                <div className = 'title-text'>
                                    Some heading
                                </div><br /><br />
                                <div className = 'description-text dulled-colored'>
                                Vivamus magna justo lacinia eget consectetur sed convallis at tellus. 
                                Donec rutrum congue leo eget malesuada. 
                                Quisque velit nisi pretium ut lacinia in elementum id enim.
                                </div>
                    </div>
                        
                    </li>
                </ul>

            </section>
            </>
    )

};

export default Smalldiv;