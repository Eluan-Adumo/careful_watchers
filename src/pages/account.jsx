import React, {useEffect, useState} from 'react';
import { Router, useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import WhiteFooter from '../components/WhiteFooter';
import axios from "axios";
import Spinner from '../components/spinner';
const Account = () =>{



    /**
     * 
     * PUBLIC STATIC VOID MAIN(STRING[] ARGS)
     * {
     * 
     * 
     * }
     */
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    const[signupEmail, setSignupEmail] = useState('');
    const[signupName, setSignupName] = useState('');
    const [signupPassword, setSignupPass] = useState('');
    const [showSignup, showSignupSetter] = useState(true);
    const [showLogin, showLoginSetter] = useState(false);
    const [showLoader, setShowLoader] = useState(false);
    const navigate = useNavigate();
    async function loginUser (event){
        event.preventDefault();
        let url = "http://localhost:1337/api/login-user";

        

        if(email.length < 3 || password.length < 6){
            console.log("Your values are invalid, please re-enter them");
        }else{

            let data = {
                emailField: email,
                passwordField: password
            };
            axios.post(url, {data}).then((response)=>{
                // console.log(response);
                let resData = response.data;
                if(resData!=="null"){
                    let userName = resData.name;
                    let userEmail = resData.email;
 
                    localStorage.setItem("email", userEmail);
                    localStorage.setItem("name", userName);
                    navigate("/dashboard");
                }else{
                    console.log("Your values do not match any users, please try again or signup");
                }
            }).catch((err)=>{
                console.log(err);
            });
            // if(!response){
            //     console.log("Your details do not correspond, please try again with other details, or recheck the ones you sent");
            // }else{
            //     setLoggedIn(true);
            //     navigate("/dashboard");
            // }

            // console.log(response);
        }
    }


    async function registerUser(e){
        
        e.preventDefault();


           const data = {
                signupEmail : signupEmail,
                signupName : signupName,
                signupPassword : signupPassword
            };


        const req = await axios.post("http://localhost:1337/api/register",{data});

        await axios.post("http://localhost:1337/api/register", {data}).then((req)=>{
            // FIX THIS FUNCTION LATER
            setShowLoader(true);
        });
        
        console.log(req);

        localStorage.setItem("email", signupEmail);
        localStorage.setItem("name", signupName);


        setLoggedIn(true);
    }

    useEffect(()=>{
        if(loggedIn===true){
            navigate("/dashboard");
        }
    });

    return(

        <>
            <Header />
            {
                showLoader
                &&
                <Spinner />
            }
                <section className = 'body-sect'>
                    {
                        showLogin
                        &&
                        <form className = 'item-content-2' >  
                        <h2>Login</h2>
                        <div className = 'item-form'>
                            <input type = 'text' placeholder = 'Your email address' id = 'email-field' className = 'email-field' name = 'email-field' onChange={(e)=>{
                                setEmail(e.target.value);
                            }} required/>

                            <input type ='password' placeholder = 'Your Password'  id = 'password-field' className = 'password-field' name = 'password-field' 
                            onChange = {(e)=>{
                                setPassword(e.target.value);
                            }} required/>
                            <input type = 'submit' value = 'Login' className = 'act-btn secondary-bg-colored' onClick = {loginUser}/>
                        </div>
                        <center>Dont already own an account? <input type = 'button' value = 'Signup here' onClick = {()=>{
                            showSignupSetter(true);
                            showLoginSetter(false);
                        }} className = 'dead-btn-2 act-btn'/></center>
                    </form>
                    }
                    <br />

                    {
                        showSignup
                        &&

                        <form className = 'item-content-2' onSubmit={registerUser}>
                        <h2>Register</h2>
                        <div className = 'item-form'>
                            <input type = 'text' placeholder = 'Your User name' className = 'user-name' id = 'user-name' name = 'user-name' required onChange = {(e)=>{
                                    setSignupName(e.target.value);
                            }}/>
                            <input type = 'email' placeholder='Your email address' className = 'user-email' id = 'user-email' name = 'user-email' required onChange = {(e)=>{
                                    setSignupEmail(e.target.value);
                            }}/>
                            <input type = 'password' placeholder='Your Password' className = '' id = 'user-password' name = 'user-password' required onChange = {(e)=>{
                                    setSignupPass(e.target.value);
                            }}/>
                            <input type = 'submit' value = 'CREATE'  className = 'act-btn secondary-bg-colored' />
                        </div><br />
                        <center>Already own an account, <input type = 'button' value = 'login here' className = 'dead-btn-2 act-btn' onClick = {()=>{
                            showSignupSetter(false);
                            showLoginSetter(true);
                        }}/></center>
                    </form>
                    }
                    
                </section>

            <WhiteFooter />
        </>
    );

}


export default Account;