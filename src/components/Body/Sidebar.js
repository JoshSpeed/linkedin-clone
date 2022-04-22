import React from 'react'

import './Sidebar.css'
import { Avatar } from '@mui/material'
import theRock from '../../imgs/therock.webp'

function Sidebar() {
  // (render jsx from functions)
  const recentItem = (topic) => (
    <div className='sidebar__recentItem'>
      <span className='sidebar__hash'>#</span>
      <p>{topic}</p>
    </div>
  )

  return (
    <div className='sidebar'>
      <div className='sidebar__top'>
        <img
          src='https://images.unsplash.com/photo-1648869190057-4a2e50d0395b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80'
          alt=''
        />
        <Avatar className='sidebar__avatar' src={theRock} />
        <h2>Josh Speed</h2>
        <h4>joshuabspeed@hotmail.co.uk</h4>
      </div>

      <div className='sidebar__stats'>
        <div className='sidebar__stat'>
          <p>Who viewed you</p>
          <p className='sidebar__statNumber'>1,554</p>
        </div>
        <div className='sidebar__stat'>
          <p>Views on post</p>
          <p className='sidebar__statNumber'>4,457</p>
        </div>
      </div>

      <div className='sidebar__bottom'>
        <p>Recent</p>
        {recentItem('reactJs')}
        {recentItem('programming')}
        {recentItem('softwaredevelopment')}
        {recentItem('web design')}
      </div>
    </div>
  )
}

export default Sidebar
