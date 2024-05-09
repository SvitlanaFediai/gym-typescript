import React, { useEffect, useState } from 'react'
import Header from './components/header/Header'
import { SelectedPage } from 'types/types'
import Home from 'components/home/Home'
import Benefits from 'components/benefits/Benefits'
import Classes from 'components/classes/Classes'
import Contact from 'components/contact/Contact'
import Footer from 'components/footer/Footer'
import Testimonials from 'components/testimonial/Testimonials'

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY === 0) {
        setIsTopOfPage(true)
        setSelectedPage(SelectedPage.Home)
      }

      if(window.scrollY !== 0) setIsTopOfPage(false)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div>
      <Header isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage}/>
      <Classes setSelectedPage={setSelectedPage}/>
      <Testimonials setSelectedPage={setSelectedPage} />
      <Contact setSelectedPage={setSelectedPage}/>
      <Footer />
    </div>
  )
}

export default App;
