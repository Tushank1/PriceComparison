import React from "react";
import "./Twentyfour.css";
import { useNavigate } from "react-router-dom";
import { TbSlash } from "react-icons/tb";

function Twentyfive() {
  const navigate = useNavigate();

  return (
    <div className="twentyfour">
      <div className="guidetop_twentyfour">
        <span onClick={() => navigate("/")}>Start</span>
        <TbSlash className="icon_twentyfour" />
        <span onClick={() => navigate("/guide")}>Guides</span>
      </div>
      <div className="guideUpdate_twentyfour">
        <span>Updated 20 January 2022</span>
      </div>
      <div className="thirdContext_twentyfour">
        <h1>How to wash your hands properly</h1>
        <div className="guideAuthor_twentyfour">
          <div className="authorImage_twentyfour">
            <img
              src="https://www.pricerunner.com/user/avatar/prod/profile_6183686403436003830.jpg?d=40x40"
              alt=""
            />
          </div>
          <div className="authorName_twentyfour">
            <span>Kaelan Robinson</span>
          </div>
        </div>
        <div className="guideDesc_twentyfour">
          <p>
            Flu and virus season is well underway and the easiest way to protect
            yourself from being affected by illness is to wash your hands. But
            how do you do it properly and what soaps should you use? We have the
            answer!
          </p>
        </div>
        <div className="thirdImage_twentyfour">
          <img
            src="https://www.pricerunner.com/images/site-gui/list/Guide/guide_tvatta_handerna_ratt.jpg?d=896x504"
            alt=""
          />
        </div>
        <p>
          You can definitely go a long way with normal hand-washing. So even if
          hand sanitisers are sold out everywhere, all hope is not lost. The
          fact is that hand sanitiser is only a complimentary part of good hand
          hygiene. In other words, it's more important that you wash your hands
          properly than over-using hand sanitisers.
        </p>
        <h2>Why is it so important to wash your hands?</h2>
        <p>
          It's always vital to wash your hands, regardless of whether bugs are
          going around or not. By washing your hands you reduce the risk of
          transferring viruses to others. Bacteria and viruses can be passed on
          frequently touched surfaces like hand rails, door handles, the
          surfaces of the tube and all manner of surfaces in public areas. You
          likely touch more things on your way to work than you realise, and
          when you then touch your face, wipe your nose or rub your eyes
          afterwards, you increase the chances of letting that bacteria or virus
          in to your system.
        </p>
        <h2>How often should you wash your hands?</h2>
        <p>
          The NHS recommends you wash your hands in the following circumstances:
        </p>
        <ul>
          <li>After coming inside after being outdoors or in public spaces</li>
          <li>After using the loo</li>
          <li>When you can visibly see dirt or grime on your hands</li>
          <li>Before meal preparation and before actually eating</li>
        </ul>
        <h2>How do you wash your hands?</h2>
        <p>
          Rinse your hands with a bit of water and then dry them on your pants
          to dry them quickly? Wrong! Washing your hands properly requires a bit
          more care and time.
        </p>
        <ol>
          <li>
            Rise your hands with some water and lather them throughly with soap.
          </li>
          <li>
            Lather your hands sufficiently, making sure to cover both the tops
            and palms of your hands and also a bit of your wrists as well.
          </li>
          <li>Rinse away all the soap.</li>
          <li>
            Thoroughly dry your hands, either through the use of your own towel
            or a piece of paper towel.
          </li>
        </ol>
        <p>
          A thorough hand-washing takes around 30 seconds from start to finish.
        </p>
        <h2>What type of soap is the best?</h2>
        <p>
          Bars of soap, foamy soaps, liquid soaps or antibacterial options -
          there are loads to choose from. Which type is actually the best? The
          most important thing is that you actually use whatever soap you have
          properly when washing your hands.
        </p>
        <p>
          If you use bars of soap, be sure to rinse the bar after use and let it
          dry completely on occasion, it helps in letting your soap last longer.
          If more than one person uses the soap though, a pump-dispenser might
          be a better alternative.
        </p>
        <p>
          It's completely fine to use normal soap, so you don't need
          antibacterial soaps. The fact is that research has shown that using
          antibacterial soaps can increase risk factors for developing allergies
          and sensitivities in babies and young children under the age of 18.
        </p>
        <div className="twentyfour_container">
          <div className="twentyfour_container_top">
            <div className="twentyfour_container_top_image">
              <img
                src="https://www.pricerunner.com/product/80x80/1602367223/Weleda-Calendula-Soap-100g.jpg?ph=true&fmt=avif"
                alt=""
              />
            </div>
            <div className="twentyfour_conatiner_top_content">
              <span>A Scented Soap Bar</span>
              <p>A mild hand soap with discreet marigold scent.</p>
            </div>
          </div>
          <div className="twentyfour_container_bottom">
            <div className="twentyfour_container_bottom_find">
              <span>Find deal at:</span>
            </div>
            <div className="twentyfour_container_bottom_row">
              <div className="twentyfour_container_bottom_image">
                <img
                  src="https://www.pricerunner.com/images/logos/51398-358681445.png?d=80x24&a=center"
                  alt=""
                />
              </div>
              <div className="twentyfour_container_bottom_price">
                <span>£4.23</span>
              </div>
              <div className="twentyfour_container_bottom_button">
                <span>Go to store</span>
              </div>
            </div>
            <div className="twentyfour_container_bottom_row">
              <div className="twentyfour_container_bottom_image">
                <img
                  src="https://www.pricerunner.com/images/logos/parfumdreams.png?d=80x24&a=center"
                  alt=""
                />
              </div>
              <div className="twentyfour_container_bottom_price">
                <span>£4.37</span>
              </div>
              <div className="twentyfour_container_bottom_button">
                <span>Go to store</span>
              </div>
            </div>
            <div className="twentyfour_container_bottom_row">
              <div className="twentyfour_container_bottom_image">
                <img
                  src="https://www.pricerunner.com/images/logos/105746-436901169.png?d=80x24&a=center"
                  alt=""
                />
              </div>
              <div className="twentyfour_container_bottom_price">
                <span>£4.50</span>
              </div>
              <div className="twentyfour_container_bottom_button">
                <span>Go to store</span>
              </div>
            </div>
          </div>
        </div>
        <div className="twentyfour_container">
          <div className="twentyfour_container_top">
            <div className="twentyfour_container_top_image">
              <img
                src="https://www.pricerunner.com/product/80x80/1903360790/Rituals-The-Ritual-of-Sakura-Hand-Wash-300ml.jpg?ph=true&fmt=avif"
                alt=""
              />
            </div>
            <div className="twentyfour_conatiner_top_content">
              <span>Liquid Hand Soap with a Spa-Feeling</span>
              <p>
                Washing your hands doesn't need to be a drag - enhance the
                ritual with some liquid hand soap fit for a spa.
              </p>
            </div>
          </div>
          <div className="twentyfour_container_bottom">
            <div className="twentyfour_container_bottom_find">
              <span>Find deal at:</span>
            </div>
            <div className="twentyfour_container_bottom_row">
              <div className="twentyfour_container_bottom_image">
                <img
                  src="https://www.pricerunner.com/images/logos/luxpluslogopricerunner.png?d=80x24&a=center"
                  alt=""
                />
              </div>
              <div className="twentyfour_container_bottom_price">
                <span>£7.99</span>
              </div>
              <div className="twentyfour_container_bottom_button">
                <span>Go to store</span>
              </div>
            </div>
            <div className="twentyfour_container_bottom_row">
              <div className="twentyfour_container_bottom_image">
                <img
                  src="https://www.pricerunner.com/images/logos/amazoncouk_w.gif?d=80x24&a=center"
                  alt=""
                />
              </div>
              <div className="twentyfour_container_bottom_price">
                <span>£13.89</span>
              </div>
              <div className="twentyfour_container_bottom_button">
                <span>Go to store</span>
              </div>
            </div>
            <div className="twentyfour_container_bottom_row">
              <div className="twentyfour_container_bottom_image">
                <img
                  src="https://www.pricerunner.com/images/logos/256651-1299824134.png?d=80x24&a=center"
                  alt=""
                />
              </div>
              <div className="twentyfour_container_bottom_price">
                <span>£13.90</span>
              </div>
              <div className="twentyfour_container_bottom_button">
                <span>Go to store</span>
              </div>
            </div>
          </div>
        </div>
        <h2>More tips and advice on how to protect yourself from illness</h2>
        <p>
          In order to make it easier for you to find great content on the theme
          of protection from illnesses, we've created a collection page for all
          of the related stories and content we've made on this topic. The page
          is updated on an on-going basis and here we'll gather guides and tips
          we hope will be of use and helpful to you in these flu-ridden times.
        </p>
      </div>
    </div>
  );
}

export default Twentyfive;
