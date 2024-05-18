import React from "react";
import "./B_First.css";
import { TbSlash } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

function B_First() {
  const navigate = useNavigate();

  return (
    <div className="b_first">
      <div className="guidetop_b_first">
        <span onClick={() => navigate("/")}>Start</span>
        <TbSlash className="icon_b_first" />
        <span onClick={() => navigate("/guide")}>Guides</span>
      </div>
      <div className="guideUpdate_b_first">
        <span>Updated 20 January 2022</span>
      </div>
      <div className="thirdContext_b_first">
        <h1>Quiz: Which Self-Care Type are you?</h1>
        <div className="guideAuthor_b_first">
          <div className="authorImage_b_first">
            <img
              src="https://www.pricerunner.com/user/avatar/prod/profile_444179457825457935.jpg?d=40x40"
              alt=""
            />
          </div>
          <div className="authorName_b_first">
            <span>Laura Waliczek</span>
          </div>
        </div>
        <div className="guideDesc_b_first">
          <p>
            Do you desire some well-deserved 'me-time' and a dose of self-care,
            but you are unsure where to begin? Discover your self-care
            personality and find inspiration with our quiz.
          </p>
        </div>
        <div className="thirdImage_b_first">
          <img
            src="https://www.pricerunner.com/images/assets/content/bit/guide/pricerunner_selvpleje.jpg?d=896x504"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default B_First;
