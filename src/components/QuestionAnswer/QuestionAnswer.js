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
          <b>Answer: </b>A very popular javascript library for building user
          interfaces whose name is React. React basically creates a virtual DOM
          (Document Object Model). When need to read or write browser DOM then
          virtual DOM represents a virtual representation. Then virtual DOM
          tries to most efficient and fastest way to update the browser DOM. And
          thus React works.
        </p>
      </div>
      <div className="ques-ans">
        <h3>Difference between Props vs State.</h3>
        <p>
          <b>Answer: </b>
          In React, the two most fundamental parts are props and state. The main
          difference between props and stats is Props have passed data from one
          component to another. It is read-only which means cannot be modified
          and is immutable. On the other side, State has passed data within the
          component only. The state is mutable it's can be modified and both
          read and written.
        </p>
      </div>
    </div>
  );
};

export default QuestionAnswer;
