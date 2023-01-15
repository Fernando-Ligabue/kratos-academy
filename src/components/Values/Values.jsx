import React from 'react';

import { values } from '../../data';
import Image from '../../images/values.jpg';
import SectionHead from '../SectionHead/SectionHead';
import Card from '../../UI/Card/Card';
import { GiCutDiamond } from 'react-icons/gi';

import './values.css';

const Values = () => {
  return (
    <section className='values'>
        <div className="container__values container">
            <div className="values__left">
                <div className="values__image">
                    <img src={Image} aria-hidden alt="Values Image" />
                </div>
            </div>
            <div className="values__right">
                <SectionHead className="values" icon={<GiCutDiamond />} title="Values"/>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit magni blanditiis assumenda ipsam possimus similique!</p>
                <div className="values__wrapper">
                {
                    values.map(({id, icon, title, desc}) => {
                        return(
                            <Card className="values__value" key={id}>
                                <span>{icon}</span>
                                <h4>{title}</h4>
                                <small>{desc}</small>
                            </Card>
                        )
                    })
                }
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default Values;