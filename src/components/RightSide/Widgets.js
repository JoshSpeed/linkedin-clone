import React from 'react'
import './Widgets.css'

import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import InfoIcon from '@mui/icons-material/Info'

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className='widgets__article'>
      <div className='widgets__articleLeft'>
        <FiberManualRecordIcon />
      </div>
      <div className='widgets__articleRight'>
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  )

  return (
    <div className='widgets'>
      <div className='widgets__header'>
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle('War in Ukraine', 'Top news - 10000 readers')}
      {newsArticle('Crazy petrol prices', 'Top news - 2513 readers')}
      {newsArticle("I can't afford to heat my home", 'Top news - 2146 readers')}
    </div>
  )
}

export default Widgets
