import "./HeaderOption.css"
import React from 'react'
import { Avatar } from "@mui/material"
import { useSelector } from "react-redux"
import { selectUser } from "./features/userSlice"

function HeaderOption({avatar,Icon,title, onClick }) {

  const user = useSelector(selectUser);

  return (
    <div onClick={onClick} className='headerOption'>
      {Icon && <Icon className="headerOtion_icon"/>}
      {avatar && 
        (< Avatar className="headerOption_icon" >{user?.email[0]}</Avatar>)}
      <h3 className="headerOption_title">{title}</h3>
    </div>
  )
}

export default HeaderOption
