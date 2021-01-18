import React, { useState } from "react";
import "./Home.css";
import Sidebar from "../Sidebar/Sidebar";
import Chat from "../Chat/Chat";
import { useSelector } from 'react-redux';


function Home() {
  const user = useSelector(state => state.auth)
  const [messages, setMessages] = useState([]);
  let [closem, setCloseprofile] = useState(true);

  const closeMenu = () => {
    setCloseprofile(true);
  }

  const showMenu = () => {
    setCloseprofile(!closem);
  };

  return (
    user ? (<div className="app">
      <div className="app__body">
        <Sidebar closeM={closem} showMenu={showMenu} closeMenu={closeMenu} />
        <Chat messages={messages} />
      </div>
    </div>) : (<div className="loading" href='https://dribbble.com/msaling' target='_blank'><img src='https://i.postimg.cc/Y9sR6QTW/parrots.gif' border='0' alt='parrots' /></div>)

  );
}

export default Home;