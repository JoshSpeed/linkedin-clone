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
      {newsArticle(
        "It's going to be a dry British Summer",
        'Fake news - 1146 readers'
      )}
      {newsArticle('Elon Musk buys Twitter', 'Top news - 2134 readers')}
      {newsArticle("I don't know what else to write", 'Top news - 1 reader')}
    </div>
  )
}

export default Widgets
