import React, { useState } from "react";
import "./Sidebar.css";
import ChatIcon from "@material-ui/icons/Chat";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { IconButton, Avatar } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import { useSelector } from "react-redux";
import SidebarChat from "../SidebarChat/SidebarChat";
import MenuProfile from "../menuProfile";

const Sidebar = (props) => {
  let [showm, setshowprofile] = useState("false");
  //let [closem, setCloseprofile] = useState("false");
  const user = useSelector((state) => state.auth);

  const showMenu = () => {
    setshowprofile(!showm);
  };

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
          <IconButton>
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
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
};

export default Sidebar;