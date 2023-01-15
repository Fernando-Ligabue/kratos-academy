import React from 'react';
import HeaderSecttion from '../../components/HeaderSection/HeaderSection';
import HeaderImage from '../../images/header_bg_5.jpg';
import Trainer from '../../components/Trainer/Trainer';
import { trainers } from '../../data';
import {AiOutlineTwitter, AiFillInstagram} from 'react-icons/ai';
import {FaFacebookF, FaLinkedinIn} from 'react-icons/fa';
import './trainers.css';

const Trainers = () => {
  return (
    <>
      <HeaderSecttion title="Nossos Trainners" image={HeaderImage}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi eligendi enim eum cumque quos voluptate consequuntur nihil laboriosam facere consectetur?
      </HeaderSecttion>
      <section className="trainers">
        <div className="container trainers__container">
          {
            trainers.map(({id, image, name, job, socials})=> {
              return(
                  <Trainer key={id} image={image} name={name} job={job} socials={[
                    {icon: <FaLinkedinIn/>, link: socials[0]},
                    {icon: <FaFacebookF/>, link: socials[1]},
                    {icon: <AiOutlineTwitter/>, link: socials[2]},
                    {icon: <AiFillInstagram/>, link: socials[3]}
                  ]}>
                  </Trainer>
              )
            })
          }
        </div>
      </section>
    </>
  )
}

export default Trainers;