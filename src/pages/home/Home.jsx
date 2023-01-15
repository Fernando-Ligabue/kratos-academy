import React from "react";

import MainHeader from "../../components/MainHeader/MainHeader";
import Programs from "../../components/Programs/Programs";
import Values from "../../components/Values/Values";
import FAQs from "../../components/FAQs/FAQs";
import Testimonials from "../../components/Testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <MainHeader />
      <Programs />
      <Values />
      <FAQs />
      <Testimonials />
    </>
  );
};

export default Home;
