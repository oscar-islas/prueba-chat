import React, { useState,useEffect } from "react";
import "./Home.css";
import Sidebar from "../Sidebar/Sidebar";
import Chat from "../Chat/Chat";

import NewSidebar from "../Sidebar/newChat"
import {changeUser} from "../../usersDucks"
import {useDispatch,useSelector} from "react-redux"



const Home=()=> {
  const dispatch = useDispatch();
 // const [messages, setMessages] = useState([]);
  let [closem, setCloseprofile] = useState("false");
  const [searchChat,setSearchChat]=useState(false);
  const [activeConversation,setActiveConversation]=useState({})
  const [conversationSelected,setConversationSelected]=useState(false);
  const firebaseUser=useSelector(store=>store.auth.user);

  const updateConversations=(conversation)=>{
    console.log(conversation);
    setActiveConversation(conversation);
    setConversationSelected(true);
  }

  const closeMenu = () => {
    setCloseprofile(false);
    
  }

  const newchat=()=>{
    setSearchChat(true);
    
  }

  const closeNewchat=()=>{
    setSearchChat(false);
  }
 // dispatch(changeUser(firebaseUser));
  useEffect(()=>{

  const getActiveUser =  () => {
    dispatch(changeUser(firebaseUser));
  }

  getActiveUser();
},[dispatch,firebaseUser]);

const activeUser=useSelector(store=>store.users.activeUser)
//console.log(activeUser)

  return (
    
    //user ? <chat /> : <gif />
   
        <div className="app" onClick={closeMenu}>
      <div className="app__body">
        {
          searchChat?(
          <NewSidebar close={closeNewchat} id={activeUser._id} />):(
          <Sidebar closeM={closem} newchat={newchat} id={activeUser._id} selectConversation={updateConversations} />)
        }
        {
          conversationSelected?<Chat  conversation={activeConversation} id={activeUser._id} />:null
        }
        
      </div>
    </div>

  
  );
}

export default Home;