import React from "react";
// import { Link } from "react-router-dom"; se quisermos que o link dos planos va para algum lugar importat link do react-router dom
import HeaderSection from "../../components/HeaderSection/HeaderSection";
import HeaderImage from "../../images/header_bg_4.jpg";
import Card from "../../UI/Card/Card";
import { plans } from "../../data";

import "./plans.css";

const Plans = () => {
  return (
    <>
      <HeaderSection title="Planos ClubMember" image={HeaderImage}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad sapiente
        laboriosam ipsa amet nesciunt ullam enim similique maiores dolore saepe?
      </HeaderSection>
      <section className="plans">
        <div className="container plans__container">
          {plans.map(({ id, name, desc, price, features }) => {
            return (
              <Card key={id} className="plan">
                <h3>{name}</h3>
                <small>{desc}</small>
                <h1>{`R$${price}`}</h1>
                <h2>/mês</h2>
                <h4>Modalidades</h4>
                {features.map(({feature, available}, index) => {
                  return (
                    <p key={index} className={!available ? "disabled" : ""}>
                      {feature}
                    </p>
                  );
                })}
                <button className="btn lg">Aderir Plano</button>
              </Card>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Plans;
