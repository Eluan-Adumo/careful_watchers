import React from 'react';
// import '../css/index.css';
import {motion} from 'framer-motion';
const Hero = ()=>{
    return(
        <>
        <section className = 'hero'>
            <section className = 'hero-content'>
                <motion.div className = 'left-hero'  initial={{
                    opacity: 0, scale: 0.5
                }} animate = {{opacity: 1, scale: 1}} transition= {{ease: "linear", duration: 1}}exit = {{}}>
                        <p className = 'light-text secondary-colored first-text'>
                            Best security world over
                        </p><br />
                        <p className = 'heavy-text  primary-colored'>
                            Your Applications and data stays as safe as a Lion's cub with us.
                        </p><br />
                        <p className = 'light-text dulled-colored block-text first-text-lighter'>
                        Donec sollicitudin molestie malesuada. Vivamus magna justo lacinia eget 
                        consectetur sed convallis at tellus. Donec rutrum congue leo eget malesuada.
                        </p>
                        <br />
                        <button   className = 'act-btn secondary-bg-colored'>
                        Learn More &nbsp; &nbsp;&nbsp;&nbsp;<i class="ri-arrow-right-s-fill"></i>
                        </button>
                </motion.div>

                <div className = 'right-hero'>

                </div>
            </section>
        </section>
        </>
    );
}


export default Hero