import React from 'react';
import './SidebarOptions.css';

function SidebarOptions({ Icon, title }) {
    return <div className="SidebarOptions">
        {Icon && <Icon className="SidebarOptions_icons" />}
        {Icon ? (
            <h3>{title}</h3>
        ) : (
            <h3 className='SidebarOptions_channel'>
                <span className='SidebarOption_hash'>#{title}</span>
            </h3>
        )}
    </div>
}

export default SidebarOptions