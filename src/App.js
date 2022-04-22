import React from 'react'
import { Counter } from './features/counter/Counter'
import './App.css'

import Header from './components/Header/Header'
import Sidebar from './components/Body/Sidebar'
import Feed from './components/Body/Feed'

function App() {
  return (
    <div className='app'>
      <Header />

      <div className='app__body'>
        <Sidebar />
        <Feed />
        {/* Widgets */}
      </div>
    </div>
  )
}

export default App
