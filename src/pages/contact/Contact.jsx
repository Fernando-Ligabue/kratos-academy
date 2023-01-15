import React from 'react';
import HeaderSection from '../../components/HeaderSection/HeaderSection';
import HeaderImage from '../../images/header_bg_2.jpg';
import { MdEmail } from 'react-icons/md';
import { BsMessenger } from 'react-icons/bs';
import { IoLogoWhatsapp } from 'react-icons/io';


import './contact.css';

const Contact = () => {
  return (
    <>
    <HeaderSection title="Contactos" image={HeaderImage}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus facilis modi dolorum maxime quam libero, officia numquam, ipsum praesentium, dolorem ullam velit consequatur magni natus!
    </HeaderSection>
    <section className="contact">
      <div className="container contact__container">
        <div className="contact__wrapper">
          <a href="mailto:suporte.kratosacademia@gmail.com" target="_blank" rel="noopener noreferrer"><MdEmail /></a>
          <a href="https://m.me" target="_blank" rel="noopener noreferrer"><BsMessenger /></a>
          <a href="https://wa.me" target="_blank" rel="noopener noreferrer"><IoLogoWhatsapp /></a>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact;