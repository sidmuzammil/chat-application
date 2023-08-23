import React, { useEffect, useState } from "react";
import "../Chat.css";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import { auth, db } from "../firebase-config";

export const Chat = (props) => {
  const { room } = props;
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const messageRef = collection(db, "messages");

  useEffect(() => {
    const querymessages = query(
      messageRef,
      where("room", "==", room),
      orderBy("createAt")
    );
    const unsuscribe = onSnapshot(querymessages, (snapshot) => {
      let messages = [];
      snapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsuscribe();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newMessage === "") return;

    await addDoc(messageRef, {
      text: newMessage,
      createAt: serverTimestamp(),
      user: auth.currentUser.displayName,
      room,
    });
    setNewMessage("");
  };

  return (
    <div className="chat-app">
      <div className="header">
        <h1>
          welcome to chatroom: <span className="chatroomName"> {room}</span>
        </h1>
      </div>
      <div className="messages">
        {messages.map((message) => (
          <div className="message" key={message.id}>
            <span className="user"> {message.user} : </span>
            {message.text}
          </div>
        ))}
      </div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="send message"
          className="new-message-form"
          onChange={(e) => setNewMessage(e.target.value)}
          value={newMessage}
        />
        <button type="submit" className="send-button">
          send
        </button>
      </form>
    </div>
  );
};
