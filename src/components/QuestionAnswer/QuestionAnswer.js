import React from "react";
import "./QuestionAnswer.css";

const QuestionAnswer = () => {
  return (
    <div className="question-answer-container">
      <h1 className="ques-ans-title">Question and Answer</h1>
      <hr />
      <div className="ques-ans">
        <h3>How React Works?</h3>
        <p>
          <b>Answer: </b>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae,
          error!
        </p>
      </div>
      <div className="ques-ans">
        <h3>Difference between Props vs State.</h3>
        <p>
          <b>Answer: </b>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae,
          error!
        </p>
      </div>
    </div>
  );
};

export default QuestionAnswer;
