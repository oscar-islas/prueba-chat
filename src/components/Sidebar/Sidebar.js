import React, { useState,useEffect } from "react";
import "./Sidebar.css";
import ChatIcon from "@material-ui/icons/Chat";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { IconButton, Avatar } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import SidebarChatt from "../SidebarChat/SidebarChat_";
import MenuProfile from "../menuProfile";
import {useSelector} from "react-redux"



const Sidebar = (props) => {
 // const dispatch = useDispatch();
  let [showm, setshowprofile] = useState("false");
  //let [closem, setCloseprofile] = useState("false");
  const user = useSelector((state) => state.auth);
  const [conversations,setConversations]= useState([]);

  const showMenu = () => {
    setshowprofile(!showm);
  };

  useEffect(()=>{

    const getConversations = async() => {
      try {
        const res = await fetch('https://academlo-whats.herokuapp.com/api/v1/users/1/conversations')
        const response = await res.json();
        //console.log(idToSearch);
        const activeConversations= await response.filter(element=>{
          
            return(
              element.members[0]===props.id||element.members[1]===props.id
            )
            // if(element.members[0]===props.id||element.members[1]===props.id){
            //     //console.log(element);
            //     return(element);
            // }
            
        })
        //console.log(activeConversations);
        setConversations(activeConversations);
      } 
      catch (error) {
        console.log(error)
      }
    }
    getConversations();

  },[props.id]);
  //setCloseprofile (props.closeM);

  return ( 
    
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src={`${user.user.photoURL}`} />
        <h4>{`${user.user.displayName}`}</h4>
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton onClick={props.newchat}>
            <ChatIcon />
          </IconButton>
          <div>
            <MoreVertIcon onClick={showMenu}/>
          </div>
          {showm ? null : <MenuProfile />}
          {/*closem || showm ? null: (<MenuProfile />, setCloseprofile (props.closeM))*/}
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input placeholder="Busca o inicia un nuevo chat" type="text" />
        </div>
      </div>
      <div className="sidebar__chats">
        {
            conversations.map((element,index)=>{
              return(
                <SidebarChatt key={index} name={element.membersObj[0].username}  photo={element.membersObj[0].photoUrl} conversation={element} selectConversation={props.selectConversation} />
              )
          })
        }
        
        {/* <SidebarChat />
        <SidebarChat /> */}
      </div>
    </div>

    
  );
};

export default Sidebar;