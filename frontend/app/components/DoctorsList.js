import React from 'react'
import SectionHeading from './SectionHeading'
import ToggleButton from './ToggleButton'
import Link from 'next/link'
import DoctorCard from './DoctorCard'
import { Map } from 'lucide-react'
import DoctorsListCarousel from './DoctorsListCarousel'

export default function DoctorsList({
  title  = "Telehealth", 
  isInPerson = false,
  className = "bg-pink-100 mb-10 py-8 lg:py-18"
}) {

  const doctors = [
    {
      name: "Dr. John Doe",
      specialization: "Cardiologist",
      address: "123 Health St, NY",
      fee: 2000,
      // image: "/doctor1.jpg",
    },
    {
      name: "Dr. Benny Smith",
      specialization: "Neurologist",
      address: "456 Brain Ave, LA",
      fee: 1800,
      // image: "/doctor2.jpg",
    },
    {
      name: "Dr. John Doe",
      specialization: "Cardiologist",
      address: "123 Health St, NY",
      fee: 2000,
      // image: "/doctor1.jpg",
    },
    {
      name: "Dr. Benny Smith",
      specialization: "Neurologist",
      address: "456 Brain Ave, LA",
      fee: 1800,
      // image: "/doctor2.jpg",
    },
    {
      name: "Dr. John Doe",
      specialization: "Cardiologist",
      address: "123 Health St, NY",
      fee: 2000,
      // image: "/doctor1.jpg",
    },
    {
      name: "Dr. Benny Smith",
      specialization: "Neurologist",
      address: "456 Brain Ave, LA",
      fee: 1800,
      // image: "/doctor2.jpg",
    },
    {
      name: "Dr. John Doe",
      specialization: "Cardiologist",
      address: "123 Health St, NY",
      fee: 2000,
      // image: "/doctor1.jpg",
    },
    {
      name: "Dr. Benny Smith",
      specialization: "Neurologist",
      address: "456 Brain Ave, LA",
      fee: 1800,
      // image: "/doctor2.jpg",
    },
    {
      name: "Dr. John Doe",
      specialization: "Cardiologist",
      address: "123 Health St, NY",
      fee: 2000,
      // image: "/doctor1.jpg",
    },
    {
      name: "Dr. Benny Smith",
      specialization: "Neurologist",
      address: "456 Brain Ave, LA",
      fee: 1800,
      // image: "/doctor2.jpg",
    },
    {
      name: "Dr. John Doe",
      specialization: "Cardiologist",
      address: "123 Health St, NY",
      fee: 2000,
      // image: "/doctor1.jpg",
    },
    {
      name: "Dr. Benny Smith",
      specialization: "Neurologist",
      address: "456 Brain Ave, LA",
      fee: 1800,
      // image: "/doctor2.jpg",
    },
  ];
  

  return (
    <div className={className}>
        <div className='max-w-6xl mx-auto'>
            <SectionHeading title={title}/>
            
            <div className='py-4 flex items-center justify-between'>
                {
                  isInPerson ? (
                    <Link href="#" className='text-sm flex items-center text-blue-600 font-semibold'>
                      <Map className='mr-2 flex-shrink-0 w-4 h-4'/>
                      <span>Map View</span>
                    </Link>
                  )
                  :
                  (<ToggleButton/>)
                }
                <Link className='py-3 px-6 border border-blue-600 text-blue-900 font-bold' href="#">See All</Link>
            </div>

            <div className='py-6'>
                <DoctorsListCarousel doctors={doctors} isInPerson={isInPerson}/>
            </div>
        </div>
    </div>
  )
}
