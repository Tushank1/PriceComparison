import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <h1>Contact us</h1>
      <h2>Members and visitors</h2>
      <p>
        Want to contact PriceCompare? The easiest way is to email us or write a
        question on our Facebook page, Twitter or Instagram.
      </p>
      <li>
        Email: <a href="infouk@pricecompare.com">infouk@pricCompare.com</a>
      </li>
      <li>
        Facebook: <a href="PriceCompare">PriceCompare</a>
      </li>
      <li>
        Twitter: <a href="PriceCompare">PriceCompare</a>
      </li>
      <li>
        Instagram: <a href="infouk@pricecompare.com">priceCompare_com</a>
      </li>
      <h2>Personal data management</h2>
      <p>
        For questions regarding PriceCompare management of personal data, please
        contact our data compliance officer, Mikael Lindahl, via email{" "}
        <a href="privacy@pricecompare.com.">privacy@pricecompare.com.</a>
      </p>
      <h2>Retailers and manufacturers</h2>
      <p>
        Are you interested in displaying your products on PriceCompare? If so
        please email us on{" "}
        <a href="listnings@pricecompare.com.">listnings@pricecompare.com.</a>
      </p>
      <h2>Advertisers</h2>
      <p>
        Are you interested in advertising on PriceCompare? If so please email us
        on <a href="listnings@pricecompare.com.">listnings@pricecompare.com.</a>
      </p>
      <h2>Media</h2>
      <p>
        Are you a journalist with questions about PriceCompare or product and
        price information? Please feel free <span>to contact us.</span>
      </p>
    </div>
  );
}

export default Contact;
