import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ServiceCard({service}) {
  return (
    <Link 
      href={`/services/${service.slug}`} className='rounded-md bg-slate-100 hover:bg-slate-200 duration-300 flex gap-4 overflow-hidden'>
        <Image
          src={service.image}
          height={848} 
          width={1170} alt={service.title} 
          className='w-1/3 object-cover aspect-video'
        />

        <div className='flex flex-col w-2/3 py-4'>
          <h2>{service.title}</h2>
          <p className='text-[0.6rem]'>963 Doctors available</p>
        </div>
    </Link>
  )
}
