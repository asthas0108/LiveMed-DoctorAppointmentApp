import React from 'react'
import Navbar from '../components/Front/Navbar'
import MegaMenu from '../components/Front/MegaMenu'

export default function layout({children}) {
  return (
    <div className="">
        <Navbar/>
        <div className="max-w-5xl mx-auto w-full">
          <MegaMenu/>
        </div>
        {children}
    </div>
  )
}
