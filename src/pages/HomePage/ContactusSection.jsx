import React, { useState } from 'react'
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2'
import img from '../../assets/formimg.png'
import { Button } from 'react-bootstrap'
function ContactusSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    services: [],
  });
  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    
    setFormData((prevData) => ({
      ...prevData,
      [id]: type === 'checkbox' ? [...prevData[id], value] : value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceId = 'service_5yleivb'; // Replace with your actual EmailJS service ID
    const templateId = 'template_j7dd03y'; // Replace with your actual EmailJS template ID
    const userId = 'qWPfkjQ224dxsBODs'; // Replace with your actual EmailJS user ID
    emailjs.send(serviceId, templateId, formData, userId)
    .then((response) => {
      console.log('Email sent successfully:', response);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Email has been sent successfully!',
        showConfirmButton: false,
        timer: 1500
      })
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        services: [],
      });
    })
    .catch((error) => {
      console.error('Error sending email:', error);
    });
  };
  return (
    <section id='conatct-section'>
      <div className="row justify-content-center align-items-center g-2">
        <div className="col-md-6 contact-img">
          <img src={img} alt="conatct us" />
        </div>
        <div className="col-md-6">
          <div className="container d-flex justify-content-center">
            <form action="#" style={{ maxWidth: '512px' }} onSubmit={handleSubmit}>
              <div className='sub-heading text-primaryDark'>
                Let’s level up your brand, together
              </div>
              <div className='email-info'>
                You can reach us anytime via <a className='text-bg-primaryBlue' href="mailto:info@tropiteq.com">info@tropiteq.com</a>
              </div>
              <div className='d-flex flex-column w-100 form-conatiner'>
                <div className='d-flex flex-column w-100'>
                  <label htmlFor="name">Name</label>
                  <input type="text" value={formData.name}  id='name' placeholder='Your Name' required onChange={handleChange} />
                </div>
                <div className='d-flex flex-column w-100'>
                  <label htmlFor="email">Email</label>
                  <input type="email" value={formData.email} id='email' placeholder='you@company.com' required onChange={handleChange} />
                </div>
                <div className='d-flex flex-column w-100'>
                  <label htmlFor="phone">Phone number</label>
                  <input type="text" value={formData.phone} id='phone' placeholder='+1 000-0000' required onChange={handleChange}/>
                </div>
                <div className='d-flex flex-column w-100'>
                  <label htmlFor="message">How can we help?</label>
                  <textarea type="text" value={formData.message} id='message' placeholder='Tell us a little about the project...' required onChange={handleChange} />
                </div>
                <div className='d-flex flex-column w-100'>
                  <label className='mb-3' htmlFor="service">Services</label>
                    <div  className='checkbox-container'>
                      <div className='d-flex align-items-center'>
                        <input 
                         type="checkbox"
                         id="services"
                         value="SEO"
                         onChange={handleChange}
                        />
                        <label htmlFor="checkbox">SEO</label>
                      </div>
                      <div className='d-flex align-items-center'>
                        <input 
                         type="checkbox"
                         id="services"
                         value="Market Research"
                         onChange={handleChange}
                        />
                        <label htmlFor="checkbox">Market Research</label>
                      </div>
                      <div className='d-flex align-items-center'>
                        <input 
                         type="checkbox"
                         id="services"
                         value="Web Design & Development"
                         onChange={handleChange}
                        />
                        <label htmlFor="checkbox">Web Design & Development</label>
                      </div>
                    </div>
                </div>
              </div>
              <Button type='submit' className='w-100 mt-5 bg-primaryBlue hover-opacity'>Submit</Button>
            </form>
          </div>
        </div>

      </div>
    </section>
  )
}

export default ContactusSection