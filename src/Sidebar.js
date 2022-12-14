import { Avatar } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import './Sidebar.css';
function Sidebar() {

    const user= useSelector(selectUser);

     const recentItem = (topic) =>(
        <div className='sidebar_recentItem'>
            <span className='sidebar_hash'>#</span>
            {topic}
        </div>
     );

  return (
    <div className='sidebar'>
        <div className='sidebar_top'>
            <img src= "https://images.unsplash.com/photo-1669748801600-6bef25f6e8a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
             alt=""/>
            <Avatar src={user.photoUrl} className='sidebar_avatar'>{user.email[0]}</Avatar>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
        </div>
        <div className='sidebar_stats'>
            <div className='sidebar_stat'>
                <p>who viewed</p>
                <p className='sidebar_statNumber'>2500</p>
            </div>
            <div className='sidebar_stat'>
                <p>views on post</p>
                <p className='sidebar_statNumber'> 2000</p>
            </div>
        </div>
        <div className='sidebar_bottom'>
            <p>Recent</p>
            {recentItem("reactJs")}
            {recentItem("programming")}
            {recentItem("HTML")}
            {recentItem("design")}
            {recentItem("developer")}
        </div>
    </div>
  )
}

export default Sidebar
