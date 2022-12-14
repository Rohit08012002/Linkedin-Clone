import React from 'react'
import './Widget.css'
import InfoIcon from '@mui/icons-material/Info';
import { FiberManualRecord } from '@mui/icons-material';

function Widgets() {

  const newsArticle=(heading,subtitle) => (
    <div className='widgets_article'>
      <div className='widgets_articleLeft'>
        <FiberManualRecord/>
      </div>
      <div className='widgets_articleRight'>
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  )

  return (
    <div className='widgets' >
      <div className='widgets_header'>
        <h2>Linkedin News</h2>
        <InfoIcon/>
      </div>
      {newsArticle("papa react","top news")}
      {newsArticle("mama react","top news")}
      {newsArticle("brother react","top news")}
      {newsArticle("sister react","top news")}
    </div>
    
  )
}

export default Widgets
