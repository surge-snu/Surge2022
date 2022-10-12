import React from "react";
import "./Faqs.scss";

export default function Faqs() {
  return (
    <div className="Faqs">
      <div className="Faqs__heading">
        <div className="Faqs__heading--title">FAQs</div>
        <hr />
      </div>
      <div className="Faqs__content">
        <div className="Faqs__content--top">
          <div className="Faqs__content--top__team">
            <div className="Faqs__content--top__team--data">Team Size</div>
            <div className="Faqs__content--top__team--value">2 - 5</div>
          </div>
          <div className="Faqs__content--top__cost">
            <div className="Faqs__content--top__cost--data">
              Registration Cost
            </div>
            <div className="Faqs__content--top__cost--value">Rs. 250</div>
          </div>
        </div>
        <div className="Faqs__content--bottom">
          <div className="Faqs__content--bottom__question">
            <div className="Faqs__content--bottom__question--text">
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.
            </div>
            <img
              alt="Down arrow"
              className="Faqs__content--bottom__question--image"
              src="Img/arrow_down.svg"
            />
          </div>
          <div className="Faqs__content--bottom__question">
            <div className="Faqs__content--bottom__question--text">
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.
            </div>
            <img
              alt="Down arrow"
              className="Faqs__content--bottom__question--image"
              src="Img/arrow_down.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
