import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CreateIcon from "@mui/icons-material/Create";
import InsertCommentIcon from "@mui/icons-material/InsertCommentOutlined";
import SidebarOptions from './SidebarOptions/SidebarOptions';
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts"; 
import BookmarkBorderIcon from "@mui/icons-material/Bookmark";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AppsIcon from "@mui/icons-material/Apps";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import DB from '../../fireabse';

function Sidebar() {

    // useEffect(() => {
    //   console.log("Fetching channels...");
    //   DB.collection('rooms').onSnapshot(snapshot => {
    //     console.log("Snapshot received:", snapshot);
    //     setChannels(
    //       snapshot.docs.map(doc => ({
    //         id: doc.id,
    //         name: doc.data().name
    //       }))
    //     );
    //   }); 
    // }, []); 
    const [channels, setChannels] = useState([]);

    useEffect(() => {
      console.log("Fetching channels...");
    
      // Add a check for DB to avoid null/undefined errors
      if (DB) {
        const unsubscribe = DB.collection('rooms').onSnapshot(
          snapshot => {
            console.log("Snapshot received:", snapshot);
        
            setChannels(
              snapshot.docs.map(doc => ({
                id: doc.id,
                name: doc.data().name
              }))
            );
          },
          error => {
            console.error("Error fetching channels:", error);
          }
        );
        
    
        // Cleanup the listener when the component unmounts
        return () => unsubscribe();
      } else {
        console.error("DB object is null or undefined.");
      }
    }, []);
    
    console.log("DB object:", DB);


  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <div className="sidebar_info">
          <h2>Full stack programmer</h2>
          <h3>
            <FiberManualRecordIcon />
            Nitin Kumawat
          </h3>
        </div>
        <CreateIcon />
      </div>

      <SidebarOptions Icon={InsertCommentIcon} title="Threads" />
      <SidebarOptions Icon={InboxIcon} title="Mentions and reactions" />
      <SidebarOptions Icon={DraftsIcon} title="Saved items" />
      <SidebarOptions Icon={BookmarkBorderIcon} title="Channel browser" />
      <SidebarOptions Icon={PeopleAltIcon} title="People & user groups" />
      <SidebarOptions Icon={AppsIcon} title="Apps" />
      <SidebarOptions Icon={FileCopyIcon} title="File browser" />
      <SidebarOptions Icon={ExpandLessIcon} title="Show less" />

      <hr />

      <SidebarOptions Icon={ExpandMoreIcon} title="Channels" />

      <hr />

      <SidebarOptions Icon={AddIcon} title="Add channels" />

      {channels.map(channel => (
        <SidebarOptions title={channel.name} id={channel.id} />
      ))}
    </div>
  );
}

export default Sidebar;
