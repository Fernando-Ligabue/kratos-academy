import React from "react";
import HeaderSection from "../../components/HeaderSection/HeaderSection";
import HeaderImage from "../../images/header_bg_1.jpg";
import StoryImage from '../../images/about1.jpg';
import VisionImage from '../../images/about2.jpg';
import MissionImage from '../../images/about3.jpg';

import "./about.css";

const About = () => {
  return (
    <>
      <HeaderSection title="Sobre Nós" image={HeaderImage}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos totam illum quidem similique. Molestiae tempore officia sapiente asperiores sint autem.
      </HeaderSection>

      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} aria-hidden alt="Our Story Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae nemo ducimus nihil, ad inventore alias reiciendis? Culpa, voluptatibus veniam, similique ratione tempore ea, illo dolorum quidem quod id officia quasi reprehenderit expedita ducimus repellendus labore obcaecati! Reiciendis rem iste cum accusamus perferendis, reprehenderit harum excepturi quibusdam id aliquid et eos!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam officiis, natus exercitationem distinctio cupiditate reiciendis dolores voluptas dolorum iste corporis, quae soluta atque explicabo quam dolorem veniam totam, cumque labore aut harum nihil a. Atque accusantium hic assumenda sed nemo.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita ratione quo ut magnam et nam tempora consequuntur facere incidunt veritatis voluptatibus culpa, consequatur delectus quia dicta numquam error enim! Voluptas.</p>
          </div>
        </div>
      </section>

      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae nemo ducimus nihil, ad inventore alias reiciendis? Culpa, voluptatibus veniam, similique ratione tempore ea, illo dolorum quidem quod id officia quasi reprehenderit expedita ducimus repellendus labore obcaecati! Reiciendis rem iste cum accusamus perferendis, reprehenderit harum excepturi quibusdam id aliquid et eos!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam officiis, natus exercitationem distinctio cupiditate reiciendis dolores voluptas dolorum iste corporis, quae soluta atque explicabo quam dolorem veniam totam, cumque labore aut harum nihil a. Atque accusantium hic assumenda sed nemo.</p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} aria-hidden alt="Our Vision Image" />
          </div>
        </div>
      </section>

      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} aria-hidden alt="Our mission Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae nemo ducimus nihil, ad inventore alias reiciendis? Culpa, voluptatibus veniam, similique ratione tempore ea, illo dolorum quidem quod id officia quasi reprehenderit expedita ducimus repellendus labore obcaecati! Reiciendis rem iste cum accusamus perferendis, reprehenderit harum excepturi quibusdam id aliquid et eos!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam officiis, natus exercitationem distinctio cupiditate reiciendis dolores voluptas dolorum iste corporis, quae soluta atque explicabo quam dolorem veniam totam, cumque labore aut harum nihil a. Atque accusantium hic assumenda sed nemo.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita ratione quo ut magnam et nam tempora consequuntur facere incidunt veritatis voluptatibus culpa, consequatur delectus quia dicta numquam error enim! Voluptas.</p>
          </div>
        </div>
      </section>

    </>
  );
};

export default About;
