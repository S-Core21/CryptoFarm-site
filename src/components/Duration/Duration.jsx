import React from 'react'
import './Duration.css'

const Duration = () => {
  return (
    <article className='duration'>
        <header>
            <h1>
                CryptoCurrency Class:  10-Day Webinar
            </h1>
        </header>
        <main>
            <div>
                <h3><a href="#register">Register Today</a></h3>
            </div>
            <div>
            <ul>
                <li>
                    <span>Date</span>
                    <p>October 27, 2023</p>
                </li>
                <li>
                    <span>Time</span>
                    <p>7:30 PM - 9:30 PM</p>
                </li>
            </ul>
            <ul>
                <li>
                    <span>Length</span>
                    <p>10 consecutive days</p>
                </li>
                <li>
                    <span>Format</span>
                    <p>On Campus</p>
                </li>
            </ul>
            <ul className='cost'>
                <li>
                    <span>Cost</span>
                    <p><strong style={{textDecoration:'line-through'}}>  $350 </strong>  <strong style={{textDecoration:'none !important', marginLeft: '.5rem'}}> free</strong> </p>
                </li>
                <li>
                    <span>Access fee</span>
                    <p>$11 or N11,000</p>
                </li>
            </ul>
            <ul>
                <li>
                    <span>Registration Deadline</span>
                    <p>November 6, 2023</p>
                </li>
            </ul>
            </div>
           
        </main>
    </article>
  )
}

export default Duration