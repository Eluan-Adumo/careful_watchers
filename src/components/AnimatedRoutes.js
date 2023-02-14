import React from 'react'
import {Route, Routes, useLocation, useParams} from 'react-router-dom';

import Home from '../pages/Home'

import AboutUs from '../pages/AboutUs';
import Services from '../pages/Services';
import ServiceDetails from '../pages/ServiceDetails';
import Team from '../pages/Team';
import Contact from '../pages/Contact';
import Account from '../pages/account';
import Dashboard from '../pages/dashboard';
import {AnimatePresence} from 'framer-motion';
import Articles from '../pages/articles';
import AllArticles from '../pages/AllArticles';
import ReadArticle from '../pages/ReadArticle';
import Messages from '../pages/Messages';
const AnimatedRoutes = ()=>{
    const location = useLocation();
    return(
        <AnimatePresence>
            <Routes location = {location} key = {location.pathname}>
                <Route path = '/'  element = {<Home />} />
                <Route path = '/About' element = {<AboutUs />} />
                <Route path = '/Service' element = {<Services />} />
                <Route path = '/service-details' element = {<ServiceDetails />} />
                <Route path = '/team' element = {<Team />} />
                <Route path = '/contact' element = {<Contact />} />
                <Route path = '/accounts' element = {<Account />} />
                <Route path = '/dashboard' element = {<Dashboard />} />
                <Route path = '/articles' element = {<Articles />} />
                <Route path = '/allarticles' element = {<AllArticles />} />
                <Route path = '/read-article/:id' element = {<ReadArticle />} />
                <Route path = '/Messages' element = {<Messages />} />
                 
            </Routes>
      </AnimatePresence>
    );
    
}

export default AnimatedRoutes;