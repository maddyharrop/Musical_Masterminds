import React from "react";
import IdleTimerContainer from "../IdleTimerComponent/IdleTimerComponent";
import "./Faq.css";

const Faq = () => {
  document.title = "FAQ | Musical Masterminds";
  return (
    <div className="faq-background">
      <IdleTimerContainer />
      <div className="faq-wrapper">
        <div className="faq-header">Frequently Asked Questions</div>
        <div className="faq-content">
          <div className="faq-question">
            <input id="q0" type="checkbox" className="panel" />
            <div className="plus">🎶</div>
            <label htmlFor="q0" className="panel-title">
              What is this site?
              </label>
            <div className="panel-content">
              <p>This is a MERN (MongoDB, Express, React and Node) stack website created by Joe Bentley, Joshua Rainbow and Madeline Harrop as a project for Code Nation. The site allows you to create a profile and take musical theatre-based quizzes with different difficulties. You can also view the leader boards which display users who have the latest top 10 scores per difficulty.  </p>
            </div>
          </div>
        </div>
        <div className="faq-content">
          <div className="faq-question">
            <input id="q1" type="checkbox" className="panel" />
            <div className="plus">🤔</div>
            <label htmlFor="q1" className="panel-title">
              What are the difficulties?
            </label>
            <div className="panel-content">
              <p>You can choose between:</p>
              <ul>
                <li>Easy</li>
                <li>Medium</li>
                <li>Hard</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="faq-content">
          <div className="faq-question">
            <input id="q2" type="checkbox" className="panel" />
            <div className="plus">✖</div>
            <label htmlFor="q2" className="panel-title">
              How many questions are there?
            </label>
            <div className="panel-content">
              <p>You can set the amount of questions you answer. The default is 5.</p>
            </div>
          </div>
        </div>
        <div className="faq-content">
          <div className="faq-question">
            <input id="q3" type="checkbox" className="panel" />
            <div className="plus">🏆</div>
            <label htmlFor="q3" className="panel-title">
              How does the leaderboard work?
            </label>
            <div className="panel-content">
              <p>The leaderboard displays the user with the most correct answers and what date they took the quiz. You can view top 10 over all or top 10 in each difficulty.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
