import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CreateIcon from "@mui/icons-material/Create";
import InsertCommentIcon from "@mui/icons-material/InsertCommentOutlined";
import SidebarOptions from './SidebarOptions/SidebarOptions';
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcons from "@mui/icons-material/Drafts";
import BookmarkBorderIcon from "@mui/icons-material/Bookmark";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AppsIcon from "@mui/icons-material/Apps";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add"
import db from '../../firebase';

function Sidebar () {

    const [channels , setChannels] = useState([]);

    useEffect(()=>{
        db.collection('rooms').onSnapShot(snapShot =>(
            setChannels(
                snapShot.docs.map(doc => ({
                    id:doc.id,
                    name:doc.data().name            
                 }))
            )
        ))
    },[])
    
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
                <CreateIcon/>
            </div>
            <SidebarOptions Icon={InsertCommentIcon} title="Threads"/>
            <SidebarOptions Icon={InboxIcon} title="Mentions and reactions"/>
            <SidebarOptions Icon={DraftsIcons} title="Saved items"/>
            <SidebarOptions Icon={BookmarkBorderIcon} title="Channel browser"/>
            <SidebarOptions Icon={PeopleAltIcon } title="People & user groups"/>
            <SidebarOptions Icon={AppsIcon} title="Apps"/>
            <SidebarOptions Icon={FileCopyIcon} title="File browser"/>
            <SidebarOptions Icon={ExpandLessIcon} title="Show less"/>
            <hr />
            <SidebarOptions Icon={ExpandMoreIcon} title="Channels"/>
            <hr />
            <SidebarOptions Icon={AddIcon} title="Add channels"/>


            
            {/* sideabar option */}
        </div>
    )
}

export default Sidebar;