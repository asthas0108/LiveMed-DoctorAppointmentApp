"use client";
import React, { useState } from 'react'

export default function DoctorDetails() {

  const [isActive, setIsActive] = useState("availability");

  return (
    <div className=''>
        <div className='flex items-center justify-between '>
            <button
              onClick={() => setIsActive("availability")}
              className={isActive == "details" ? 'py-4 w-full px-8 bg-blue-600 text-white uppercase tracking-widest font-bold': 'border border-gray-200 font-bold bg-slate-100 py-4 w-full px-8 text-slate-800 uppercase tracking-widest'}>
                Service Details
            </button>

            <button 
              onClick={() => setIsActive("availability")}
              className={isActive == "availability" ? 'py-4 w-full px-8 bg-blue-600 text-white uppercase tracking-widest font-bold': 'border border-gray-200 bg-slate-100 py-4 w-full px-8 text-slate-800 uppercase tracking-widest font-bold'}>
                Availability
            </button>
        </div>

        <div className='py-8 px-6'>
          {
            isActive == "availability" ?
            (
              <div>
                Availability Components
              </div>
            )
            :
            (
              <div>
                Service Details Components
              </div>
            )
          }
        </div>
    </div>
  )
}
