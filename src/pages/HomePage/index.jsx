import React, { useEffect, useState } from 'react'
import Herosection from './Herosection'
import ServiceSection from './ServiceSection'
import AboutusSection from './AboutusSection'
import WorkSection from './WorkSection'
import ReviewSection from './ReviewSection'
import ContactusSection from './ContactusSection'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Navbar'
import Loader from '../../components/Loader/Loader'
function HomePage() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    // Wait for 3 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      {
        isLoading ?
        <Loader />
        :
        <>
        <Header />
        <Herosection />
        <ServiceSection />
        <AboutusSection />
        <WorkSection />
        <ReviewSection />
        <ContactusSection />
        <Footer />
        </>
      }
      
    </>
  )
}

export default HomePage