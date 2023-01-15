import React from "react";
import { Link } from "react-router-dom";

import SectionHead from "../SectionHead/SectionHead";
import Card from "../../UI/Card/Card";
import { FaCrown } from "react-icons/fa";
import { AiFillCaretRight } from "react-icons/ai";
import { programs } from "../../data";

import './programs.css';

const Programs = () => {
  return (
    <section className="programs">
      <div className="programs__container container">
        <SectionHead className="programs" icon={<FaCrown />} title="Programs" />
        <div className="programs__wrapper">
          {programs.map((item) => {
            return (
              <Card className="programs__program" key={item.id}>
                <span>{item.icon}</span>
                <h4>{item.title}</h4>
                <small>{item.info}</small>
                <Link to={item.path} className="btn sm">
                  Saiba Mais <AiFillCaretRight />
                </Link>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Programs;
