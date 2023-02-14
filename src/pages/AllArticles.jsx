import {React, useEffect} from 'react'
import {AboutPageHeader} from '../components/aboutpage-components/AboutPageHeader'
import WhiteFooter from '../components/WhiteFooter'
import { HeaderHero } from '../components/aboutpage-components/AboutPageHeader'
import axios from 'axios'
import Spinner from '../components/spinner'



const AllArticles = () =>{


    const fetchAllArticles = async()=>{
        let url = "http://localhost:1337/api/fetch-records";

        await axios.get(url).then((response)=>{
            // document.querySelector(".newsfeed").innerHTML = response;

            let newsFeed = "<ul class = 'news-feed-ul'>";

            let mainData = JSON.parse(JSON.stringify(response.data));
            console.log(mainData);
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

            newsFeed +=`</ul><br />`;
            document.querySelector(".item-content-2").innerHTML = newsFeed;
            
        });
    }


    useEffect(()=>{
        fetchAllArticles();
    })
    return (
        <>
        <AboutPageHeader />
        <HeaderHero title = "News"/>
 
        <section className = 'item-content-2'>
        {/* ARTICLES ARE LOADED HERE */}
        <Spinner />
        </section>

        <WhiteFooter />
    </>
    );
}


export default AllArticles