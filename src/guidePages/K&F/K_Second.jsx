import React from "react";
import "../H&I/Third.css";
import { useNavigate } from "react-router-dom";
import { TbSlash } from "react-icons/tb";

function K_Second() {
  const navigate = useNavigate();

  return (
    <div className="third">
      <div className="guidetop">
        <span onClick={() => navigate("/")}>Start</span>
        <TbSlash className="icon" />
        <span onClick={() => navigate("/guide")}>Guides</span>
      </div>
      <div className="guideUpdate">
        <span>Updated 20 January 2022</span>
      </div>
      <div className="thirdContext">
        <h1>Stylish baby changing bags – several popular models</h1>
        <div className="guideAuthor">
          <div className="authorImage">
            <img
              src="https://www.pricerunner.com/user/avatar/prod/profile_741059819045405428.jpg?d=40x40"
              alt=""
            />
          </div>
          <div className="authorName">
            <span>Sara Assadi</span>
          </div>
        </div>
        <div className="guideDesc">
          <p>
            Remembering everything a baby may need isn’t always the easiest
            thing to do and something often gets forgotten at home. But with a
            practical baby changing bag, the chances of having all you need
            increases – and it doesn’t hurt if the bag looks really nice too.
          </p>
        </div>
        <div className="thirdImage">
          <img
            src="https://www.pricerunner.com/images/assets/content/bit/guide/guide_badge_template-40.jpg?d=896x504"
            alt=""
          />
        </div>
        <p>
          Having a baby means having a lot of stuff. Nappies, dummies, extra
          clothes, milk, wet wipes – everything you can think of and a bit more
          besides are needed to keep a baby full, dry and clean when you’re away
          from home.
        </p>
        <p>
          A substantial changing bag makes it all easier, because you can
          collect everything together in one place. In recent years, changing
          bags have also become increasingly fashion conscious and some top
          design brands now make bags which also work as an accessory. Here are
          seven stylish changing bags that also do their job.
        </p>
        <div className="thirdContainer1">
          <div className="container1Img">
            <img
              src="https://www.pricerunner.com/product/168x168/1593125501/Skip-Hop-Duo-Signature.jpg?ph=true&fmt=avif"
              alt=""
            />
          </div>
          <div className="container1Content">
            <h2>1. Skip Hop Duo Signature Changing Bag</h2>
            <p>
              Skip Hop’s popular and playful designs have long been found on the
              shelves in children's stores, and their Duo Signature changing bag
              is no exception. This model is a slightly straighter variant and
              the people who designed it clearly thought a little bit extra
              about every parent’s favourite details – the pockets.
            </p>
            <p>
              The Duo Signature is easy to pack well, and it can be carried in
              the hand, over the shoulder or even attached to a stroller. The
              bag comes in several different colours and patterns, which makes
              it easier to find a favourite.
            </p>
            <div className="price1">
              <div className="containerCompare1">
                <span>Compare all prices</span>
              </div>
            </div>
            <div className="container1button">
              <div className="button4">
                <span>Best price at Olivers Baby Care</span>
              </div>
            </div>
          </div>
        </div>
        <div className="thirdContainer1">
          <div className="container1Img">
            <img
              src="https://www.pricerunner.com/product/168x168/3011912036/Done-By-Deer-Changing-Backpack.jpg?ph=true&fmt=avif"
              alt=""
            />
          </div>
          <div className="container1Content">
            <h2>2. Done By Deer Changing Bag/Backpack</h2>
            <p>
              A stylish backpack changing bag that’s both practical and easy to
              carry around. The bag is made from recycled PET bottles and
              completely waterproof, which keeps everything inside nice and dry.
            </p>
            <p>
              You can organise everything thanks to the seven inner
              compartments, and the clever fasteners make it easy to hook on a
              stroller. A soft changing mat for a nappy change is also included.
              A really great bag!
            </p>
            <div className="price1">
              <div className="containerCompare1">
                <span>Compare all prices</span>
              </div>
            </div>
            <div className="container1button">
              <div className="button1">
                <span>Best price at MAMALICIOUS</span>
              </div>
            </div>
          </div>
        </div>
        <h3>3 tips for buying a changing bag</h3>
        <ol>
          <li>
            Think practical. Is the opening big enough to be able to see
            everything in the bag? Are there enough compartments so you don’t
            have to rummage around? Does it hang well on a stroller so that you
            can access everything?
          </li>
          <li>
            Think long term. With all the extra things you need to have on hand,
            having a baby is a pretty expensive business. So spending an extra
            few pounds on a bag you can use for many years to come makes real
            sense.
          </li>
          <li>
            Listen to the experts. If this is your first child and you don’t
            know what’s really needed and what you can ignore, check out our
            large test of changing bags.
          </li>
        </ol>
      </div>
    </div>
  );
}

export default K_Second;
