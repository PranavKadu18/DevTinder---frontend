import React, { useEffect, useState } from "react";
import { IoIosArrowRoundBack, IoMdSend } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import { createSocketConnection } from "../utils/socket";
import { useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../utils/constants";

const Chat = () => {
  const [message, setmessage] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const navigate = useNavigate();
  const { targetUserId } = useParams();
  const { data } = useSelector((store) => store.user);
  const userId = data?._id;
  const senderName = data?.firstName;

  const getChats = async () => {
    const result = await axios.get(BASE_URL + "/chats/" + targetUserId, {
      withCredentials: true,
    });

    //console.log(result.data);

    const chatMessages = result.data.map((ele) => {
      return {senderId:ele.senderId._id,senderName : ele.senderId.firstName,text : ele.text,time: ele.time}
    })

    //console.log(chatMessages);
    
    
    setmessage(chatMessages);
    
  };

  useEffect(() => {
    getChats();
  },[])

  useEffect(() => {
    //now as soon as user ones chat he should join chat room so use useEffect
    const socket = createSocketConnection(); //to join chat room i.e to emmit join event first we should create a socket connection

    socket.emit("joinChat", { targetUserId, userId, senderName });

    socket.on("receiveMessage", ({ text, senderName ,time,senderId}) => {
      setmessage((prev) => [
        ...prev,
        { text, senderName, time ,senderId},
      ]);
    });

    return () => {
      socket.disconnect();
    };
  }, [senderName, userId]);

  const sendMessage = () => {
    const socket = createSocketConnection();

    socket.emit("sendMessage", {
      text: newMessage,
      senderName,
      targetUserId,
      userId,
    });
    setNewMessage("");
  };

  return (
    <div className="sm:w-[50vw] w-full h-[70vh] px-2 pb-2 rounded-md bg-[#7d1935]">
      <div className="w-[100%] h-[5%] gap-[40%] flex items-center py-3">
        <IoIosArrowRoundBack
          onClick={() => navigate(-1)}
          className="text-3xl"
        />
        <h1>Chat</h1>
      </div>
      <hr />
      <div className="h-[80%] w-[100%] mt-3 overflow-y-scroll">
        {message.map((msg, idx) => (
          <div key={idx} className={`chat ${msg.senderId?.toString() == userId?.toString() ? "chat-end" : "chat-start"}`}>
            <div className="chat-header">
              {msg.senderName}
              <time className="text-xs ml-1 opacity-50">{msg.time}</time>
            </div>
            <div className="chat-bubble">{msg.text}</div>
            <div className="chat-footer opacity-50">Seen</div>
          </div>
        ))}
      </div>
      <hr />
      <div className="h-[10%] w-[100%] flex items-center gap-2">
        <input
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="w-[88%] mt-3 p-1 rounded-md"
          type="text"
        />
        <button
          onClick={sendMessage}
          className="rounded-full p-3 bg-black mt-2"
        >
          <IoMdSend />
        </button>
      </div>
    </div>
  );
};

export default Chat;
