import React from 'react'
import { Button, Container } from 'react-bootstrap'

function Herosection() {
  return (
    <section id='hero-section' className='position-relative'>
    <div className='bg-animation'></div>
      <Container>
        <div className='inner-container position-relative'>
          <div className='transparent-overly'></div>
          <div className='position-absolute top-0'>
            <h1 className='heading'>Leading Market <br /> Research Agency</h1>
            <p className='paragrph'>
              We Empower Strategists and Businesses With The Secrets of Their Competitors
            </p>
            
            <a href="#conatct-section" className="btn btn-outline-light button">GET IN TOUCH</a>

          </div>
        </div>
      </Container>
    </section>
  )
}

export default Herosection