import React, {useEffect, useState, useRef} from 'react';
import { Router, useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import WhiteFooter from '../components/WhiteFooter';
import Spinner from '../components/spinner';
import axios from "axios";


const Messages = ()=>{

const [userName, userNameSetter] = useState("");
const [userEmail, userEmailSetter] = useState("");

const [artTitle, setArtTitle] = useState("");
const [artContent, setArtContent] = useState("");

const [imagePreview, setPreview] = useState(undefined);
const [imageToSend, setImageToSend] = useState(undefined);
const [showLoader, showLoaderSetter] = useState(false);

const nav = useNavigate();


const fileUploadRef = useRef(null);


const fetchAllMessages = async()=>{
    const url = "http://localhost:1337/api/fetch-messages";
    await axios.get(url).then((resp)=>{
        let destr = JSON.parse(JSON.stringify(resp));
        let SenderNameTest = destr.data[0].message_sender_name;
        if(SenderNameTest != undefined){
            let allMes = `
            
                <input type = 'text' class= 'search-msg' placeholder = 'Search Messages' />
            <table class = 'message-table'>
            <tr>
            <th>
                    SENDER
            </th>
            <th>
                TITLE
            </th>
            <th>
                DATE
            </th>
            <th>
                VIEW
            </th>
            </tr>
            
            `;
            for(let i = 0; i < destr.data.length; i++){
                let SenderName = destr.data[i].message_sender_name;
                let message_subject = destr.data[i].message_title;
                let message_date = destr.data[i].mesage_send_date;
                let message_status = destr.data[i].message_status;
                let id = destr.data[i]._id;

                if(message_status == "NEW"){
                        
                allMes += `
                <tr class = 'new-msg'>
                    <td>
                        ${SenderName}
                    </td>
                    <td>
                        ${message_subject}
                    </td>
                    <td>
                        ${message_date}
                    </td>
                    <td>
                        <center>
                        <a href = '/read-messages/${id}'>
                        <input type = 'button' value = 'Read' class = 'dead-btn-2 secondary-bg-colored' />
                        
                        </a></center>
                    </td>
                </tr>
            `;
                }else if(message_status == "READ"){
                        
                allMes += `
                <tr class = 'read-msg'>
                    <td>
                        ${SenderName}
                    </td>
                    <td>
                        ${message_subject}
                    </td>
                    <td>
                        ${message_date}
                    </td>
                    <td>
                    <a href = '/read-messages/${id}'>
                    <input type = 'button' value = 'Read' class = 'dead-btn-2 secondary-bg-colored' />
                    
                    </a>                   
                     </td>
                </tr>
            `;
                }else{
                        
                allMes += `
                <tr class = 'REPLIED'>
                    <td>
                        ${SenderName}
                    </td>
                    <td>
                        ${message_subject}
                    </td>
                    <td>
                        ${message_date}
                    </td>
                    <td>
                    <a href = '/read-messages/${id}'>
                    <input type = 'button' value = 'Read' class = 'dead-btn-2 secondary-bg-colored' />
                    
                    </a> 
                 </td>
                </tr>
            `;
                }

            }
            document.querySelector(".output-div").innerHTML = allMes;
    
        }
        else{
            document.querySelector(".output-div").innerHTML = `<center>
                <h2>
                    Network Error, please 
                    <a href = '/Messages'>
                        <input value = 'Refresh' className = 'act-name secondary-bg-colored' />
                    </a>
                </h2>
            </center>`;
        }


        
    });
};




useEffect(()=>{
    let emailAdd = localStorage.getItem("email");
    let uName = localStorage.getItem("name");

    if(emailAdd === null){
        nav("/");
    }else{
        userNameSetter(uName);
        userEmailSetter(emailAdd);
    }
    


// Fetch messages here.
fetchAllMessages();
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

    <cente><Spinner /></cente>
</section>
}

<section className = 'dashboard-wrapper'>
<section className = 'dashboard-left'>
    <center><h2> ADMIN DASHBOARD</h2></center>
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
    
    <div className = 'output-div'>

        <center><Spinner /></center>

    </div>
    {/*  */}
</section>
</section>
<WhiteFooter />
</>
);

}
export default Messages;
