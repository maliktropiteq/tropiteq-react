import React, { useState } from 'react'
import Slider from 'react-slick';
import avatar from '../../assets/Ellipse 3.png'
import { useEffect } from 'react';
function ReviewSection() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const slides = [1, 2, 3]
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "330px",
    slidesToShow: 1,
    speed: 500,
    // autoplay: true,
    autoplaySpeed: 2500,
    // arrows: true,

    prevArrow: (
      <button className='slick-arrow slick-prev'></button>), // Use your custom arrow components
    nextArrow: (<button className='slick-arrow slick-next'></button>),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          centerPadding: "250px",
        }
      },
      {
        breakpoint: 1050,
        settings: {
          centerPadding: "160px",
        }
      },
      {
        breakpoint: 767,
        settings: {
          centerPadding: "80px",
        }
      },
      {
        breakpoint: 575,
        settings: {
          centerPadding: "25px",
        }
      }
    ]
  };


  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    // Attach the event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section id='testimonials-section'>
      <div className="container">
        <h2>
          Testimonials
        </h2>
        <div className='sub-heading text-primaryDark'>
          What Our Customers are Saying
        </div>
      </div>
      <div className='slider-conatiner'>
        <Slider {...settings}>
          {
            slides.map((slides, index) => (
              <div key={'item-' + index} >

                <div className='slide-parent'>
                  <div className='slide-upper'>
                    <p>
                      “I used Tropiteq for SEO for my website and now my entire search engine traffic is up 200% from last month!.”
                    </p>
                  </div>
                  <div className='slide-footer'>
                    <div className='d-flex justify-content-center align-items-center' style={{ gap: '12px' }}>
                      <div className='avtar-img'>
                        <img src={avatar} alt="avatar" />
                      </div>
                      <div>
                        <div className='avatar-name'>
                          Carl Rowan
                        </div>
                        <div className='avatar-title'>
                          Aglets Inc
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            ))
          }
        </Slider>
      </div>
    </section>
  )
}

export default ReviewSection

// const CustomPrevArrow = (props) => {
//   return (
//     <div
//       className="custom-prev-arrow"
//       onClick={props.onClick}
//       style={{ ...props.style, left: "-30px" }} // Adjust the left position
//     >
//       Previous
//     </div>
//   );
// };

// const CustomNextArrow = (props) => {
//   return (
//     <div
//       className="custom-next-arrow"
//       onClick={props.onClick}
//       style={{ ...props.style, right: "-30px" }} // Adjust the right position
//     >
//       Next
//     </div>
//   );
// };