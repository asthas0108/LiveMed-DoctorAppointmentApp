import React from 'react'
import NavBar from '../components/Dashboard/NavBar'
import Sidebar from '../components/Dashboard/SideBar'

export default function layout({children}) {
  return (
    <div>
        <NavBar/>
        <div className='flex'>
          <Sidebar/>
          <div className='p-8'>
            {children}
          </div>
        </div>
    </div>
  )
}
