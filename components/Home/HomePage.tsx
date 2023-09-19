import CurrentDate from '@/services/CurrentDate'
import Greeting from '@/services/Greeting'
import React from 'react'

function HomePage() {
  return (
    <div>
      <div className="flex">
        <Greeting/>, Salman Iyad
      </div>
      <CurrentDate/> 
    </div>
  )
}

export default HomePage