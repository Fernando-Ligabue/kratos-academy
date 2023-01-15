import React from "react";
import { Link } from "react-router-dom";
import "./mainHeader.css";

import Image from "../../images/main_header.png";

const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>#100DiasparaseuWorkout</h4>
          <h1>Junte-se aos melhores Trainers da cidade</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            explicabo facilis earum assumenda hic voluptatem.
          </p>
          <Link to="/plans" className="btn lg">
            Começar!
          </Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={Image} alt="Treinamento" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
