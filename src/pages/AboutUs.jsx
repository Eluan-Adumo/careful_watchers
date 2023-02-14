import React from 'react'
import {AboutPageHeader} from '../components/aboutpage-components/AboutPageHeader'
import {AboutPageP2} from '../components/aboutpage-components/AboutPageP2'
import { HeaderHero } from '../components/aboutpage-components/AboutPageHeader'

const AboutUs = () =>{
    return (
        <>
        <AboutPageHeader />
        <HeaderHero title = "About Us"/>
        {/* All other components are in about us P2 */}
        <AboutPageP2 />
    </>
    );
}


export default AboutUs