import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
   <header>
    <div className='title'>
        <Link to="/">
            <h1> RepTracker </h1>
        </Link>
        <Link to='/calorie'>
            <h1> CalTracker</h1>
        </Link>
    </div>
   </header>
  )
}
