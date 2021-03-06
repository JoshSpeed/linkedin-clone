import React from 'react'
import './Header.css'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from '../../firebase'
import { signOut } from 'firebase/auth'
import { logout, selectUser } from '../../features/userSlice'

import SearchIcon from '@mui/icons-material/Search'
import HomeIcon from '@mui/icons-material/Home'
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'
import ChatIcon from '@mui/icons-material/Chat'
import NotificationsIcon from '@mui/icons-material/Notifications'

import linkedInLogo from '../../imgs/linkedin.png'
import theRock from '../../imgs/therock.webp'

import HeaderOption from './HeaderOption'

function Header() {
  const dispatch = useDispatch()

  const logoutOfApp = () => {
    dispatch(logout())
    signOut(auth)
      .then(() => {
        console.log('Signout successful')
      })
      .catch((err) => {
        console.error(err)
      })
  }

  return (
    <div className='header'>
      <div className='header__left'>
        <img src={linkedInLogo} alt='' />
        <div className='header__search'>
          <SearchIcon />
          <input type='text' placeholder='Search' />
        </div>
      </div>

      <div className='header__right'>
        <HeaderOption Icon={HomeIcon} title='Home' />
        <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
        <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
        <HeaderOption Icon={ChatIcon} title='Messaging' />
        <HeaderOption Icon={NotificationsIcon} title='Notifications' />
        <HeaderOption onClick={logoutOfApp} title='Me' avatar={true} />
      </div>
    </div>
  )
}

export default Header
