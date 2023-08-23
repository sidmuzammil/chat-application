import React from 'react'
import "./Auth.css"
import {auth, provider} from "../firebase-config"
import { signInWithPopup } from 'firebase/auth'
import Cookies from "universal-cookie"
import googleIcon from "../assets/icons8-google-48.png"
const cookies=new Cookies()

export const Auth = (props) => {
    const {setIsAuth}=props;
    const signInWithGoogle=async()=>{
        try{
            const result=await signInWithPopup(auth,provider)
        cookies.set("auth-token", result.user.refreshToken)
        setIsAuth(true)
        }catch(err){
            console.error(err)
        }
    }
  return (
    <div className='auth'>
        <p>signin with google</p>
        <button onClick={signInWithGoogle}> <img src={googleIcon} alt="google-icon" className='google-icon'/> sign with google</button>
    </div>
  )
}

