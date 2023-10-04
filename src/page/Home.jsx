import React from 'react'
import TopNav from '../components/TopNav/TopNav'
import Hero from '../components/HeroPage/Hero'
import Overview from '../components/Overview/Overview'
import Duration from '../components/Duration/Duration'
import Form from '../components/Form/Form'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <div className="App" style={{scrollBehavior: 'smooth'}}>
    <section>
    <TopNav/>
    </section>
    <section>
      <Hero/>
    </section>
    <section id='overview'>
      <Overview/>
    </section>
    <section>
      <Duration/>
    </section>
    <section id='register'>
      <Form/>
    </section>
    <section>
      <Footer/>
    </section>
  </div>
  )
}

export default Home