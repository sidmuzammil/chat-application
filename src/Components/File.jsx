import React, { useState } from "react";
import Watsapp from "../assets/whatsapp.png"
import "./file.css";

const File = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        About the App
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>About </h2>
            <p>
              try to make your Roomname very tricky before creating your <br />{" "}
              room (ex:-#45#) because anyone who created a room name same as
              you, they can enter in your chat
            </p>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
            <div className="Contact">
              <h2>Contact Me</h2>
              <p>if you have any problem with this app contact me</p>
              <a href="https://wa.me/+917306792972"><img src={Watsapp} alt="" /></a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default File;
