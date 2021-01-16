import React, { useState } from "react";
import "./Home.css";
import Sidebar from "../Sidebar/Sidebar";
import Chat from "../Chat/Chat";


function Home() {
  const [messages, setMessages] = useState([]);
  let [closem, setCloseprofile] = useState(true);
  
  const closeMenu = () => {
    setCloseprofile(true);
  }

  const showMenu = () => {
    setCloseprofile(!closem);
  };

  //onClick={closeMenu}

  return (
    //user ? <chat /> : <gif />
    <div className="app">
      <div className="app__body">
        <Sidebar closeM={closem} showMenu={showMenu} closeMenu={closeMenu}/>
        <Chat messages={messages} />
      </div>
    </div>
  );
}

export default Home;