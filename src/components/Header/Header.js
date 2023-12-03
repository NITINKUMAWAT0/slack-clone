import React from 'react';
import './Header.css';
import {Avatar} from "@mui/material";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'

const Header = () => {
  return (
    <div className="Header">
        <div className="Header_left">
            <Avatar className='Header_avatar'
            alt='Nitin Kumawat' src=''
            />
            <AccessTimeIcon/>
        </div>
        <div className="Header_search">
            <SearchIcon/>
            <input type="text" placeholder='Search Programmers' />
        </div>
        <div className="Header_right">
            <HelpOutlineIcon/>
        </div>

    </div>
  )
}

export default Header