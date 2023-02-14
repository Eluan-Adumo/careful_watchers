import React, {useEffect, useState, useRef} from 'react';
import { Router, useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import WhiteFooter from '../components/WhiteFooter';
import axios from "axios";
import Spinner from '../components/spinner';

const Articles = ()=>{
const [articles, setArticles] = useState("");
const [userName, userNameSetter] = useState("");
const [userEmail, userEmailSetter] = useState("");

const nav = useNavigate();
async function fetchAllArticles(){
    const url = "http://localhost:1337/api/fetch-records";
    const response = await axios.get(url);
    // setArticles(response);
    let tempArticles = "";
    // articles = "";
    for(let i = 0; i < response.data.length; i++){
        let finalUrl = "";
        
        finalUrl = response.data[i].articlePhoto;
        let content = response.data[i].articleContent.toLowerCase();
        
        tempArticles += `
        <div class = 'articles-holder'>

            
            <div class = 'article-image' style = '
            background-image: url("${finalUrl}");
            '>
            
            </div>
            <div class = 'article-header'>
            ${response.data[i].articleTitle} ${response.data[i].dateUploaded}
            </div>

            <div class = 'article-content'>
            ${content}
            </div>
        </div>
        `;
    }

    document.querySelector(".articles-main").innerHTML=tempArticles;
    console.log(response.data);
    // setArticles(tempArticles);
}
useEffect(()=>{
//Fetch records here
let emailAdd = localStorage.getItem("email");
let uName = localStorage.getItem("name");

userNameSetter(uName);
userEmailSetter(emailAdd);
fetchAllArticles();
});

return (
    
<> 
<Header />
<section className = 'dashboard-wrapper'>
<section className = 'dashboard-left'>
    <center><h1>CW ADMIN DASHBOARD</h1></center>
    <center>   
    <span className = 'u-av'>
        <i class="ri-user-fill"></i>
        </span>
        <h3>
        Welcome {userName}. <br />Your Email is {userEmail}
        </h3>
        <br />
        <br />

        <center><input type = 'button' className = 'dead-btn-2' value = 'Dashboard' onClick ={()=>{
           
            nav("/dashboard");
        }} /> </center>
        
    </center>

</section>

<section className= 'dashboard-right'>
    
    <section className = 'articles-main'>
        <Spinner />
    </section>

</section>
</section>
<WhiteFooter />
</>
);

}
export default Articles;
