import React from 'react';
import './Sidebar.css';
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CreateIcon from "@mui/icons-material/Create";

const Sidebar = () => {
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
                <SidebarOption  title="Threads"/>
                <SidebarOption/>
                <SidebarOption/>
                <SidebarOption/>
                <SidebarOption/>
                <SidebarOption/>
                <SidebarOption/>
                <SidebarOption/>
                <SidebarOption/>
                <SidebarOption/>
                <SidebarOption/>
            </div>
        </div>
    )
}

export default Sidebar