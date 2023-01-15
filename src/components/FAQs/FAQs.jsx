import React from 'react';
import SectionHead from '../SectionHead/SectionHead';
import FAQ from '../FAQ/FAQ';
import { FaQuestion } from 'react-icons/fa';
import { faqs } from '../../data';

import './FAQs.css';

const FAQs = () => {
  return (
    <section className='faqs'>
        <div className="container faqs__container">
            <SectionHead className="" icon={<FaQuestion />} title="FAQ's"/>
            <div className="faqs__wrapper">
                {
                    faqs.map(({id, question, answer}) => {
                        return (
                            <FAQ key={id} question={question} answer={answer}/>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default FAQs;