import React from 'react'

export default function DoctorDetails() {
  return (
    <div className=''>
        <div className='flex items-center justify-between'>
            <button className='py-4 w-full px-8 bg-blue-600 text-white'>Service Details</button>
            <button className='border border-gray-200 bg-slate-100 py-4 w-full px-8 text-slate-800'>Availability</button>
        </div>

        <div>
            Service Details Components
        </div>
        <div>
            Availability Components
        </div>
    </div>
  )
}
