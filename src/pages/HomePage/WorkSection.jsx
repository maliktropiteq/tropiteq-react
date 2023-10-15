import React from 'react'
import { Container } from 'react-bootstrap'
import Slider from 'react-slick';
import spiralband from '../../assets/spiral-design.png'
import img from '../../assets/desktop1.png'
import img1 from '../../assets/Rectangle 16.png'
import img2 from '../../assets/Rectangle 21.png'
import img3 from '../../assets/Rectangle 20.png'
// import spiralbandMobile from '../../assets/spiral-design-mobile.png'
function WorkSection() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "200px",
    slidesToShow: 1,
    speed: 500,
    dots: true,
    customPaging: (i) => (
      <div
        style={{
          borderRadius: "5px",
        }}
      ></div>
    ),
    autoplay: true,
    autoplaySpeed: 2500,
  };
  const slides = [{ img: img }, { img: img }, { img: img },]
  return (
    <section id='work-section' className='bg-primaryLight'>
      <div className='extralarge-heading text-center'>
        OUR WORK
      </div>
      <Container>
        <div className="sub-heading text-primarDark">
          Enjoy Our Latest <span className='text-primaryBlue bg-secondaryBlue bg-highlight'>Case Studies</span>
        </div>
        <div className='slider-section' >
          <Slider {...settings}>
            {
              slides.map((slides, index) => (
                <div key={'item-' + index} >
                  <div className='slide-parent image-container'>
                    <img className="hover-shadow" src={slides.img} alt="case study" />
                    <div className="overlay-text">
              <div>
                <h3>
                Silkennco
                </h3>
              <p>Silkennco is an indie skincare brand in New York seeking to rebrand and expand product inventory.Our Approach with Silkennco was to highlight the strategy of the key competitors and use that to help create a new branding strategy. We also provided an inventory of the top selling products in the Skincare category on Amazon in the US to aid in what to stock in inventory. This led to a more than 100% in website traffic and 98% conversion rate in a month.</p>

              </div>
            </div>
                  </div>

                </div>
              ))
            }
          </Slider>
        </div>
        <div className='mobile-slider-section'>
          <div className="image-container">
            <img className="hover-shadow" src={img1} alt="case study" />
            <div className="overlay-text">
              <div>
                <h3>
                Silkennco
                </h3>
                <p>Silkennco is an indie skincare brand in New York seeking to rebrand and expand product inventory.Our Approach with Silkennco was to highlight the strategy of the key competitors and use that to help create a new branding strategy. We also provided an inventory of the top selling products in the Skincare category on Amazon in the US to aid in what to stock in inventory. This led to a more than 100% in website traffic and 98% conversion rate in a month.</p>

          </div>
            </div>
          </div>
          <div className="image-container">
            <img className="hover-shadow" src={img2} alt="case study" />
            <div className="overlay-text">
             <div>
                <h3>
                Jagad Mobile App
                </h3>
              <p>Our Approach with Jagad Mobile App was to highlight the strategy of the key competitors and use that to help create out go-to-market strategy. This led to a more than 100% in website traffic and 150% conversion rate</p>

              </div>
            </div>
          </div>
          <div className="image-container">
            <img className="hover-shadow" src={img3} alt="case study" />
            <div className="overlay-text">
             <div>
             <h3>
                Silkennco
                </h3>
                <p>Silkennco is an indie skincare brand in New York seeking to rebrand and expand product inventory.Our Approach with Silkennco was to highlight the strategy of the key competitors and use that to help create a new branding strategy. We also provided an inventory of the top selling products in the Skincare category on Amazon in the US to aid in what to stock in inventory. This led to a more than 100% in website traffic and 98% conversion rate in a month.</p>
            </div>
            </div>
          </div>
        </div>
      </Container>
      <div>
        <div id='blue-band' className='bg-primaryBlue'>
          <div className='container  d-flex h-100 justify-content-between align-items-center'>
            <div className='achivement'>
              <div className='number'>55</div>
              <div className='text'>CLIENT
                SATISFACTION</div>
            </div>
            <div className='achivement'>
              <div className='number'>58</div>
              <div className='text'>PROJECTS
                COMPLETED</div>
            </div>
            <div className='achivement'>
              <div className='number'>15</div>
              <div className='text'>PARTNERS
                SATISFACTION</div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default WorkSection