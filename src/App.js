import { useState,useRef } from "react";
import "./App.css";
// import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'
import { Auth } from "./Components/Auth";
import Cookies from "universal-cookie";
import { Chat } from "./Components/Chat";
import File from "./Components/File"
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";
const cookies = new Cookies();

function App() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [room, setRoom] = useState(null);
  const roomInputRef=useRef(null)

  const signUserOut=async ()=>{
   await signOut(auth)
   cookies.remove("auth-token")
   setIsAuth(false)
   setRoom(null)
  }

  // const handleAbout=()=>{
  //   <File/>
  // }


  if (!isAuth) {
    return (
      <div>
        <Auth setIsAuth={setIsAuth}/>
      </div>
    );
  }
  return (
    <div className="main-container">
      {room ? (
        <Chat room={room}/>
      ) : (
        <div className="room">
          <h1 className="main-header"> create the same room name with whome you want to chat</h1>
          {/* <h4>Create a room name</h4> */}
          <input ref={roomInputRef} placeholder="enter room name"/>
          <button onClick={()=>{setRoom(roomInputRef.current.value)}}>enter chat</button>
        </div>
      )}
      {/* <div className="Aboutpage">
       <button onClick={handleAbout()}>about</button>
      </div> */}
      <div className="sign-out">
        <p>if you want to  <button onClick={signUserOut}> sign out </button> ?</p>
      </div>
      <File/>
    </div>
  );
}

export default App;
