import React from "react";
import "./Guide.css";
import { useNavigate } from "react-router-dom";

function G_H_B() {
  const navigate = useNavigate();
  return (
    <div className="guide_H_I">
      <h2>Health & Beauty</h2>
      <div className="guide_cart">
        <div className="guide_H_I_content" onClick={() => navigate("/first")}>
          <img
            src="https://www.pricerunner.com/images/assets/content/bit/guide/pricerunner_selvpleje.jpg?d=410x230"
            alt=""
          />
          <h3>Quiz: Discover your Self-Care Type</h3>
          <span>
            By <span>Laura Waliczek</span>
          </span>
          <p>
            Do you desire some well-deserved 'me-time' and a dose of self-care,
            but you...
          </p>
        </div>
        <div className="guide_H_I_content" onClick={() => navigate("/second")}>
          <img
            src="https://www.pricerunner.com/images/assets/content/bit/guide/uk_pricerunner_best-hair-straightner_og.jpg?d=410x230"
            alt=""
          />
          <h3>Smooth Operator: Finding the Perfect Hair Straightener/</h3>
          <span>
            By <span>PriceCompare</span>
          </span>
          <p>
            A hair straightener is an essential companion in your bathroom
            cabinet...
          </p>
        </div>
        <div className="guide_H_I_content" onClick={() => navigate("/third")}>
          <img
            src="https://www.pricerunner.com/images/assets/content/bit/guide/euphoriamakeupnewcover.jpg?d=410x230"
            alt=""
          />
          <h3>Get your favourite Euphoria character's makeup look</h3>
          <span>
            By <span>Matilda Hansson</span>
          </span>
          <p>
            The hit TV show Euphoria has redefined the makeup landscape and
            sparked a viral...
          </p>
        </div>
        <div className="guide_H_I_content" onClick={() => navigate("/fourth")}>
          <img
            src="https://www.pricerunner.com/images/site-gui/list/Guide/skolbarn_hygien.jpg?d=410x230"
            alt=""
          />
          <h3>Tips for encouraging good hygiene at school with your kids</h3>
          <span>
            By <span>PriceCompare</span>
          </span>
          <p>
            The prospect of having kids go to school an preschool during an
            ongoing pandemic...
          </p>
        </div>
        <div className="guide_H_I_content" onClick={() => navigate("/five")}>
          <img
            src="https://www.pricerunner.com/images/site-gui/list/Health-and-Beauty/gor_egen_vatskeersattning.jpg?d=410x230"
            alt=""
          />
          <h3>Guide: How to make your own oral rehydration solution</h3>
          <span>
            By <span>Daniel Hessel</span>
          </span>
          <p>
            Are you sick, or just recovering from being sick? If so, you may
            have...
          </p>
        </div>
        <div className="guide_H_I_content" onClick={() => navigate("/six")}>
          <img
            src="https://pricerunner.com/images/i/bit-boards/Guide/Handkram/Handkram-5_en.jpg?d=410x230"
            alt=""
          />
          <h3>Taking care of dry hands</h3>
          <span>
            By <span>Kaelan Robinson</span>
          </span>
          <p>
            Thorough and frequent hand-washing is a great way to help reduce
            transmission...
          </p>
        </div>
        <div className="guide_H_I_content" onClick={() => navigate("/seven")}>
          <img
            src="https://www.pricerunner.com/images/site-gui/list/Guide/prepping_pantry.jpg?d=410x230"
            alt=""
          />
          <h3>All you need for isolating you and your family</h3>
          <span>
            By <span>PriceCompare</span>
          </span>
          <p>
            Do you want to prepare for self-isolating at home? We've gathered
            some top...
          </p>
        </div>
        <div className="guide_H_I_content" onClick={() => navigate("/eight")}>
          <img
            src="https://www.pricerunner.com/images/site-gui/list/Guide/guide_tvatta_handerna_ratt.jpg?d=410x230"
            alt=""
          />
          <h3>How to wash your hands properly</h3>
          <span>
            By <span>PriceCompare</span>
          </span>
          <p>
            Flu and virus season is well underway and the easiest way to protect
            yourself...
          </p>
        </div>
        <div className="guide_H_I_content" onClick={() => navigate("/nine")}>
          <img
            src="https://www.pricerunner.com/images/site-gui/list/Health-and-Beauty/handhygien_guide.jpg?d=410x230"
            alt=""
          />
          <h3>Hand-hygiene basics with a soap dispenser and hand sanitiser</h3>
          <span>
            By <span>Kaelan Robinson</span>
          </span>
          <p>
            Stomach bugs, the flu- many are the illnesses lurking about this
            spring...
          </p>
        </div>
        <div className="guide_H_I_content" onClick={() => navigate("/ten")}>
          <img
            src="https://www.pricerunner.com/images/assets/content/bit/guide/uk_pricerunner_best-perfumes-women_og.jpg?d=410x230"
            alt=""
          />
          <h3>Gift Guide: Best Perfumes for Women</h3>
          <span>
            By <span>Matilda Hansson</span>
          </span>
          <p>A perfume is a classic gift that will always be appreciated...</p>
        </div>
      </div>
    </div>
  );
}

export default G_H_B;
