import {React, useEffect} from 'react'
import {AboutPageHeader} from '../components/aboutpage-components/AboutPageHeader'
import WhiteFooter from '../components/WhiteFooter'
import { HeaderHero } from '../components/aboutpage-components/AboutPageHeader'
import axios from 'axios'
import { BrowserRouter as Router, Route, Link, Switch, Redirect, useParams } from "react-router-dom";
import Spinner from '../components/spinner'


const ReadArticle = () =>{
    const {id} = useParams();

    const fetchArticles = async(itemId)=>{
        let url = `http://localhost:1337/api/fetch-single-record/${itemId}`;
        
        await axios.get(url).then((response)=>{
           

            let newsFeed = "<ul class = 'news-feed-ul-large'>";

            let mainData = JSON.parse(JSON.stringify(response.data));
            console.log(mainData);
            
                let image = mainData.articlePhoto;
                newsFeed += `<li>
                <div class = 'image-side' style = 'background-image: url("${image}");'>


                </div>
                <div class = 'text-side'>
                <h1>${mainData.articleTitle}</h1>
                    <p>${mainData.dateUploaded}</p>
                    
                    <p>
                        ${mainData.articleContent}
                    </p>
                </div>
                
                
                </li>`;
            

            newsFeed +=`</ul><br />`;
            document.querySelector(".item-content-2").innerHTML = newsFeed;
            
        });
    }


    useEffect(()=>{
        fetchArticles(id);
    })
    return (
        <>
        <AboutPageHeader />
        <HeaderHero title = "Article"/>
 
        <section className = 'item-content-2'>
            {/* ARTICLES ARE LOADED HERE */}
            <Spinner />
        </section>

        <WhiteFooter />
    </>
    
    );
}


export default ReadArticle