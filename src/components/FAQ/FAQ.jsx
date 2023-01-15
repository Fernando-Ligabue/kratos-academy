import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

import "./FAQ.css";

const FAQ = ({ question, answer }) => {
  const [isAnswerShow, setIsAnswerShow] = useState(false);

  return (
    <article className="faq">
      <div>
        <h4>{question}</h4>
        <button
          className="faq__icon"
          onClick={() => setIsAnswerShow((prev) => !prev)}
        >
          {!isAnswerShow ? <AiOutlinePlus /> : <AiOutlineMinus /> }
        </button>
      </div>
      {isAnswerShow && <p>{answer}</p>}
    </article>
  );
};

export default FAQ;
