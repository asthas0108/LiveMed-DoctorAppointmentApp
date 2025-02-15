import React from 'react'
import ServiceCard from './ServiceCard'

export default function ServiceList({data}) {
  return (
    <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        
        {
          data.map((service, i) => {
            return (
              <ServiceCard key={i} service={service}/>
            )
          })
        }
        
    </div>
  )
}
