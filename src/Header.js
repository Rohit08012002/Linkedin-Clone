import React from 'react'
import './Header.css'
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';

function Header() {

  
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout())
    auth.signOut()
  };

  return (
    <div className='header'>
   

    <div className='header_left'>

        <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" alt=""/>

        <div className='header_search'>
            <ManageSearchIcon/>
            <input placeholder='Search' type="text"/>

        </div>


    </div>
    <div className='header_right'>
         <HeaderOption Icon={HomeIcon} title="Home"/>
         <HeaderOption Icon={SupervisorAccountIcon} title="MyNetwork"/>
          <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
          <HeaderOption Icon={ChatIcon} title="Messaging"/>
          <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
          <HeaderOption avatar={true}
           title="me"
           onClick={logoutOfApp}/>
    </div>

    </div>
  )
}

export default Header
