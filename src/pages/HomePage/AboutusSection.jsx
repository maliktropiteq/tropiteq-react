import React, { useEffect, useState } from 'react'
import fiveyear from '../../assets/5-year.png'
// import whyus from '../../assets/why-us.png'
import meta from '../../assets/Meta_Business_Partners.png'
import shopify from '../../assets/shopifylogo.png'
import semrush from '../../assets/SEM_partner.png'
import bigcommerce from '../../assets/bigcommerce-Certified-Wordmark.png'
import googleanalytic from '../../assets/google_partner.png'
import googlepartner from '../../assets/prem_google_partner.png'
import { Container } from 'react-bootstrap'

function AboutusSection() {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      setIsMobile(true)
    }
  }, [])

  return (
    <>
      <section id='aboutus-section' className='bg-primaryLight'>
        <Container>
          <div className="row">
            <div className="col-md-6">

              <img className='five-img' src={fiveyear} alt="5 years" />
            </div>
            <div className="col-md-6">
              <div className='d-flex flex-column gap-4'>
                <div className='sub-heading text-primaryDark'>
                  WE WILL GIVE YOU
                  <br />
                  THE BLUEPRINT TO SUCCESS
                </div>
                <div>
                  <div className='dash-heading'>
                    - Our Mission-
                  </div>
                  <p className='para-text text-primaryDark'>
                  To empower businesses and strategists with data-insights that delivers outstanding growth and gives them a competitive edge.
                  </p>
                </div>
                <div>
                  <div className='dash-heading'>
                    - Our Vision-
                  </div>
                  <p className='para-text text-primaryDark'>
                  To be a global leader in market research, setting the standard for innovation and results-driven strategies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>

      </section>
      <section id='whyus-section' className='bg-primaryLight'>
        <div className='extralarge-heading position-absolute right-0'>
          WHY US
        </div>
        <Container>
          <div>
            <div className='dash-heading pt-50'>
              - ABOUT US-
            </div>
            <div className="sub-heading text-primarDark">
              Why reinvent the wheel 
              when you can have the <span className='text-primaryBlue bg-secondaryBlue bg-highlight'>Blueprint</span>
            </div>
            <div className='about-bg'>
              {/* <img src={whyus} alt="why us" /> */}
              <div className='yellow-box'>
                <div className='line-1'>5+</div>
                <div className='line-2'>Years
                <br/>
                  Experience</div>
              </div>
              <div className='purple-box'>
                <div className='line-1'>What We Do</div>
                <div className='line-2'>
                 We give you the edge to succeed using insights from data analysis
                </div>
              </div>
            </div>
            <div className='salient-feature flex-column d-flex gap-5'>
              <div>
                <div className='title-blue'>
                  Outstanding Reputation & Track Record:
                </div>
                <p className='para-text text-primaryDrak'>
                  We have an impeccable reputation and a proven track record to deliver invaluable insights that has helped businesses scale their operations.
                </p>
              </div>
              <div>
                <div className='title-blue'>
                  Deep Expertise:
                </div>
                <p className='para-text text-primaryDrak'>
                  We posses more than five years of expertise in market research which allows us to provide our clients with impeccable services that guarantees outstanding results.
                </p>
              </div>
              <div>
                <div className='title-blue'>
                  Effective Communication & Collaboration:
                </div>
                <p className='para-text text-primaryDrak'>
                  Clear and open communication with our distinguished clients is at the core of our Approach. The client goals are our ultimate guide and we work with it closely at heart.
                </p>
              </div>
            </div>
          </div>

        </Container>
        <div className='our-partners'>
          <div className=' parent-conatiner'>

            <p className={`para-text text-primaryBlue d-flex align-items-center ${!isMobile && 'position-absolute'}`}>
              We work with Global tech giants to deliver unparalleled results
            </p>
            <div className='item-conatiner'>
              <div className={!isMobile && 'animated-item'}>
                <img src={meta} alt="meta" />
              </div>
              <div className={!isMobile && 'animated-item'}>
                <img src={shopify} alt="shopify" />
              </div>
              <div className={!isMobile && 'animated-item'}>
                <img src={semrush} alt="semrush" />
              </div>
              <div className={!isMobile && 'animated-item'}>
                <img src={bigcommerce} alt="bigcommerce" />
              </div>
              {/* <div className='animated-item'>
                <img src={googleanalytic} alt="google analytic" />
              </div> */}
              {/* <div className='animated-item'>
                <img src={googlepartner} alt="google partner" />
              </div> */}
            </div>
          </div>
        </div>
        <div className='our-partners-mobile'>
          <div className='container parent-conatiner flex-column'>

            <p className='para-text text-primaryBlue '>
            We work with Global tech titans to deliver unparalleled results
            </p>
            <div className='item-conatiner'>
              <div>
                <img src={meta} alt="meta" />
              </div>
              <div>
                <img src={shopify} alt="shopify" />
              </div>
              <div>
                <img src={semrush} alt="semrush" />
              </div>


            </div>
            <div className='item-conatiner'>
              <div>
                <img src={bigcommerce} alt="bigcommerce" />
              </div>
              <div>
                <img src={googleanalytic} alt="google analytic" />
              </div>
              <div>
                <img src={googlepartner} alt="google partner" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>

  )
}

export default AboutusSection