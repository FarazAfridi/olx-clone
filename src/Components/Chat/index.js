import React, { useEffect, useState } from "react";
import "./styles.css";
import SendIcon from "@material-ui/icons/Send";
import CloseIcon from "@material-ui/icons/Close";
import TextsmsIcon from "@material-ui/icons/Textsms";
import PhoneIcon from "@material-ui/icons/Phone";
import FlagIcon from "@material-ui/icons/Flag";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { db } from "../Firebase/firebase";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Chat = () => {
  const [messages, setMessages] = useState("");
  const [data, setData] = useState([]);
  const { message } = useParams();
  const user = useSelector((state) => state.currentUser);

  const handleChange = (e) => {
    setMessages(e.target.value);
  };

  useEffect(() => {
    const ref = db.ref(`rooms/${message}/messages`);
    ref.on("value", (snap) => {
      setData(snap.val());

      return () => {
        ref.off()
      }
    });
  }, [message]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(messages){
        db.ref(`rooms/${message}/messages`).push({
            uid: user.uid,
            name: user.displayName,
            message: messages,
          });
          setMessages("");
    }  
  };

  return (
    <div className="chat">
      <div className="chat_left">
        <div>
          <span>INBOX</span>
        </div>
        <div>
          <span>All your chats will show up here</span>
        </div>
      </div>
      <div className="chat_right">
        <div>
          <AccountCircleIcon className="Profile_icons_left" />
          <CloseIcon className="Profile_icons_right right" />
          <TextsmsIcon className="Profile_icons_right" />
          <PhoneIcon className="Profile_icons_right" />
          <FlagIcon className="Profile_icons_right" />
        </div>
        <div className="chat_messages">
          {data && Object.entries(data).map((d, index) => (
            <p key={index} className={`chat_message ${d[1].name === user.displayName && "chat_reciever"}`}>
              <span style={{color: 'black'}} className="chat_name">{d[1].name}</span>
              {d[1].message}
            </p>
          ))}
        </div>
        <div className="chat_input">
            <div>
              <input
                onChange={(e) => handleChange(e)}
                value={messages}
                type="text"
                placeholder="Type a message"
              />
            </div>
            <SendIcon onClick={handleSubmit} className="send_message" />
        </div>
      </div>
    </div>
  );
};

export default Chat;
