import React, {useEffect, useState, useRef} from 'react';
import { Router, useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import WhiteFooter from '../components/WhiteFooter';
import Spinner from '../components/spinner';
import axios from "axios";


const Dashboard = ()=>{

const [userName, userNameSetter] = useState("");
const [userEmail, userEmailSetter] = useState("");

const [artTitle, setArtTitle] = useState("");
const [artContent, setArtContent] = useState("");

const [imagePreview, setPreview] = useState(undefined);
const [imageToSend, setImageToSend] = useState(undefined);
const [showLoader, showLoaderSetter] = useState(false);

const nav = useNavigate();


const fileUploadRef = useRef(null);

async function makePost(e){
    e.preventDefault();
    // const fd = new FormData();
    showLoaderSetter(true);
    // fd.append("form-image", imageToSend);
    const otherData = {
        articleTitle : artTitle,
        articleContent : artContent
    }


    // const response = await axios.post("http://localhost:1337/api/multer-photo-upload", fd);
    // console.log(response);


    const fd = new FormData();
    fd.append("form-image", imageToSend);
    fd.append("articleTitle", artTitle);
    fd.append("articleContent", artContent);
    // const response = await axios.post("http://localhost:1337/api/multer-photo-upload", fd);

    await axios.post("http://localhost:1337/api/multer-photo-upload", fd).then(()=>{
        showLoaderSetter(false);
    });

}





const addPostImage =()=>{
    fileUploadRef.current.click();
}




async function uploadPostImage(e){

    if(e.target.files.length === 0){
        console.log("Please choose an image");
    }else{
        const imageMainView = URL.createObjectURL(e.target.files[0]);
        const imageMain = e.target.files[0];
        setPreview(imageMainView);
        setImageToSend(imageMain);

    }

   
}


async function performUpload(fd){
    // console.log("what");
    // console.log("upload function has been called");

    
}
useEffect(()=>{
    let emailAdd = localStorage.getItem("email");
    let uName = localStorage.getItem("name");

    if(emailAdd === null){
        nav("/");
    }else{
        userNameSetter(uName);
        userEmailSetter(emailAdd);
    }
    




});

return (
<> 
<Header />
{

showLoader

&&

<section className = 'lightbox'>
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
<br />

    <center><Spinner /></center>
</section>
}

<section className = 'dashboard-wrapper'>
<section className = 'dashboard-left'>
    <center><h1>CW ADMIN DASHBOARD</h1></center>
    <center>   
    <span className = 'u-av'>
        <i class="ri-user-fill"></i>
        </span>
        <h3>
        Welcome {userName}. <br />Your Email is {userEmail}
        <br />
        <br />

        <center><input type = 'button' className = 'dead-btn-2' value = 'All Articles' onClick ={()=>{
           
            nav("/articles");
        }} /> </center>
        <br />

        <center><input type = 'button' className = 'dead-btn-2' value = 'News Letters' onClick ={()=>{
           
           nav("/");
       }} /> </center>
       <br />
       <center><input type = 'button' className = 'dead-btn-2' value = 'Messages' onClick ={()=>{
           
           nav("/Messages");
       }} /> </center>
       <br />
        <center><input type = 'button' className = 'dead-btn-2' value = 'Logout' onClick ={()=>{
            localStorage.removeItem("name");
            localStorage.removeItem("email");
            nav("/");
        }} /> </center>
        </h3>
        
    </center>

</section>

<section className= 'dashboard-right'>
    <h3>UPLOAD AN ARTICLE</h3>
    <form action = '' name = 'upload-article-form'>
    <input type = 'text' placeholder = 'Article Title' className = 'art-title' onChange = {(e)=>{
        setArtTitle(e.target.value);
    }}/><br />
    <textarea placeholder = 'Article Content' className = 'art-content' onChange = {(e)=>{
        setArtContent(e.target.value);
    }}></textarea><br />

    <div className='image-preview'>
        {
            imagePreview && <img src = {imagePreview} style = {{maxWidth: "200px"}}/>
        }
        
    </div>

        <br />
    <input type = 'button' value = 'Add Image' className = 'act-btn secondary-bg-colored' onClick = {addPostImage}/>
    <input type = 'file'  name = 'image' id = "img-upload" className = 'img-upload' ref = {fileUploadRef}
    onChange = {uploadPostImage} />
    <br />
    <input type = 'submit' value = 'Upload' onClick = {makePost} className = 'act-btn secondary-bg-colored'/>
    </form>
</section>
</section>
<WhiteFooter />
</>
);

}
export default Dashboard;
