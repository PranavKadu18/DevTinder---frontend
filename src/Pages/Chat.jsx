import React, { useState } from "react";
import { IoIosArrowRoundBack, IoMdSend } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Chat = () => {
  const [message, setmessage] = useState([{ text: "Hi" }]);
  const navigate = useNavigate();

  return (
    <div className="sm:w-[50vw] w-full h-[70vh] px-2 pb-2 rounded-md bg-[#7d1935]">
      <div className="w-[100%] h-[5%] gap-[40%] flex items-center py-3">
        <IoIosArrowRoundBack onClick={() => navigate(-1)} className="text-3xl" />
        <h1>Chat</h1>
      </div>
      <hr />
      <div className="h-[80%] w-[100%] mt-3 overflow-y-scroll">
        {message.map((msg, idx) => (
          <div key={idx} className="chat chat-start">
            <div className="chat-header">
              Obi-Wan Kenobi
              <time className="text-xs ml-1 opacity-50">2 hours ago</time>
            </div>
            <div className="chat-bubble">{msg.text}</div>
            <div className="chat-footer opacity-50">Seen</div>
          </div>
        ))}
      </div>
      <hr />
      <div className="h-[10%] w-[100%] flex items-center gap-2">
        <input className="w-[88%] mt-3 p-1 rounded-md" type="text" />
        <button className="rounded-full p-3 bg-black mt-2">
          <IoMdSend />
        </button>
      </div>
    </div>
  );
};

export default Chat;
