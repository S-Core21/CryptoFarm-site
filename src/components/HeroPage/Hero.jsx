import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
   <article className='hero'>
        <header>
            <h1>
                Discover the Secrets of Digital Currency and Unlock its Potential!
            </h1>
            <p>
                Explore the world of Crptocurrency and Blockchain
            </p>
            <br/>
            <button>
                Register Now
            </button>
        </header>
        <main>
            <img src="/images/hero1.jpg" alt="" />
        </main>
   </article>
  )
}

export default Hero