import React from "react";
import "./Guide.css";
import { useNavigate } from "react-router-dom";

function G_K_F() {
  const navigate = useNavigate();

  return (
    <div className="guide_H_I">
      <h2>Kids & Family</h2>
      <div className="guide_cart">
        <div className="guide_H_I_content" onClick={() => navigate("/k_first")}>
          <img
            src="https://www.pricerunner.com/images/assets/content/bit/guide/guide_badge_template-41.jpg?d=410x230"
            alt=""
          />
          <h3>Dressy maternity clothes</h3>
          <span>
            By <span>Sara Assadi</span>
          </span>
          <p>
            Dressing for maternity doesn’t have to mean wearing clothes that
            look like sacks. On the contrary...
          </p>
        </div>
        <div className="guide_H_I_content" onClick={() => navigate("/third")}>
          <img
            src="https://www.pricerunner.com/images/assets/content/bit/guide/guide_badge_template-38.jpg?d=410x230"
            alt=""
          />
          <h3>Stylish coat hooks</h3>
          <span>
            By <span>Sara Assadi</span>
          </span>
          <p>
            Hanging things up is an easy way to freshen up a room and bring some
            order to it. Check out...
          </p>
        </div>
        <div
          className="guide_H_I_content"
          onClick={() => navigate("/k_second")}
        >
          <img
            src="https://www.pricerunner.com/images/assets/content/bit/guide/guide_badge_template-40.jpg?d=410x230"
            alt=""
          />
          <h3>Stylish changing bags</h3>
          <span>
            By <span>Zara Andrén</span>
          </span>
          <p>
            Remembering everything a baby may need isn’t always the easiest
            thing to do and something often...
          </p>
        </div>
        <div className="guide_H_I_content" onClick={() => navigate("/k_third")}>
          <img
            src="https://www.pricerunner.com/images/assets/content/bit/guide/giftguide-baby.jpg?d=410x230"
            alt=""
          />
          <h3>Top list: Best presents for a new baby</h3>
          <span>
            By <span>Jhanella Coderis</span>
          </span>
          <p>
            Has your friend just had a new addition to the family? Or perhaps
            one of your siblings has...
          </p>
        </div>
        <div
          className="guide_H_I_content"
          onClick={() => navigate("/k_fourth")}
        >
          <img
            src="https://www.pricerunner.com/images/assets/content/bit/guide/guide_badge_template-9.jpg?d=410x230"
            alt=""
          />
          <h3>Great bedding for kids</h3>
          <span>
            By <span>Sara Assadi</span>
          </span>
          <p>
            Are you looking for a cosy bedding set for your child or some
            seasonal Christmas bedding? We’ve...
          </p>
        </div>
        <div className="guide_H_I_content" onClick={() => navigate("/k_five")}>
          <img
            src="https://www.pricerunner.com/images/site-gui/list/Outdoor-lifestyle/natur_SE.jpg?d=410x230"
            alt=""
          />
          <h3>Spring has come – get out into nature!</h3>
          <span>
            By <span>PriceCompare</span>
          </span>
          <p>
            We're finally past those really tedious first two months of the
            year, and why not celebrate...
          </p>
        </div>
      </div>
    </div>
  );
}

export default G_K_F;
