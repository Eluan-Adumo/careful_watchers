import React from 'react';
import '../css/index.css';
import {Header} from '../components/Header';
import Hero from '../components/Hero';
import Smalldiv from '../components/Smalldiv';
import BusinessSection  from '../components/BusinessSection';
import Footer from '../components/Footer';


const Home = () =>{
    return (
        <>
        <Header />
        <Hero />
        <Smalldiv />
        <BusinessSection />
        <Footer />
        </>
      );
}


export default Home;