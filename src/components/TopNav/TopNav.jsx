import React from 'react'
import './TopNav.css'
import { Link } from 'react-router-dom'

const TopNav = () => {
  return (
    <nav>
        <h1>
            <img src="/images/logo.png" alt="" />
            CryptoFarm
        </h1>
        <button>
          <a href='#overview'>
          Learn More
          </a>       
        </button>
    </nav>
  )
}

export default TopNav