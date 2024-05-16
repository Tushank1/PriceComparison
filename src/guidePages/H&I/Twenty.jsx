import React from "react";
import "./Twenty.css";
import { useNavigate } from "react-router-dom";
import { TbSlash } from "react-icons/tb";

function Twenty() {
  const navigate = useNavigate();

  return (
    <div className="twenty">
      <div className="guidetop_twenty">
        <span onClick={() => navigate("/")}>Start</span>
        <TbSlash className="icon_twenty" />
        <span onClick={() => navigate("/guide")}>Guides</span>
      </div>
      <div className="guideUpdate_twenty">
        <span>Updated 20 January 2022</span>
      </div>
      <div className="thirdContext_twenty">
        <h1>How to not lose your mind when working from home</h1>
        <div className="guideAuthor_twenty">
          <div className="authorImage_twenty">
            <img
              src="https://www.pricerunner.com/user/avatar/prod/profile_6183686403436003830.jpg?d=40x40"
              alt=""
            />
          </div>
          <div className="authorName_twenty">
            <span>Kaelan Robinson</span>
          </div>
        </div>
        <div className="guideDesc_twenty">
          <p>
            Just how does one work effectively from home you might wonder?
            Here's a list of our 10 top pieces of advice to do just that!
          </p>
        </div>
        <div className="thirdImage_twenty">
          <img
            src="https://www.pricerunner.com/images/site-gui/list/Tech/remote_work.jpg?d=896x504"
            alt=""
          />
        </div>
        <p>
          At the moment of writing this, there hasn't been any official mandate
          by local health authorities in the UK to avoid public spaces in the
          wake of the spread of the COVID-19 coronavirus (be sure to routinely
          check the NHS website for updates). As a precautionary measure, more
          and more businesses are going a step further to protect their
          employees by asking them to work from home during this lessen the
          likelihood of transmitting the virus in the workplace.
        </p>
        <p>
          Even if working from home isn't an entirely new idea, it's still quite
          a new proposition for many. The home environment might not be
          something one associates with work and it can take some getting used
          to initially. However, with the right preparations and mindset,
          working from home can be an absolute breeze.
        </p>
        <h3>Preparations</h3>
        <p>
          To start with, you need to ensure you have all the equipment you need
          to work from home. Many nowadays use laptops, so of course taking that
          home with you is vital (sometimes you can even use your personal
          computer to do this, depending on your employer's attitude towards
          this). It's therefore also important to make sure you take home things
          like chargers, computer mouses etc.
        </p>
        <p>
          Also make sure that you keep communication up and open. Assumedly you
          already use some form of communication network at work like Skype,
          Slack or something else, but in the event you don't use these tools,
          agreeing with your colleagues on a channel of communication to be used
          for work-related matters is key. Sometimes you might need to access
          specific internal platforms or systems that require a VPN to access.
          It's therefore important to make sure you know how to do this in the
          event you need those platforms for your daily work.
        </p>
        <h3>10 tips for working effectively from home.</h3>
        <ol>
          <li>Identify the tasks that you need to get done</li>
          <p>
            Make a list at the end of every workday of a few tasks that should
            get done tomorrow. This should be a shortlist of 1 to 3 things. Get
            it done as soon as you start your workday. Everything else that you
            get done is a bonus.
          </p>
          <li>Get into the work mindset</li>
          <p>
            Get ready for work, as usual, every morning. Have breakfast and get
            dressed. Your pyjamas and bathrobe are the biggest threats to your
            productivity and creativity.
          </p>
          <li>Identify your distractions and eliminate them</li>
          <p>
            Distractions are one click away on a computer and a phone and they
            are consuming your productivity, for example, Instagram, games,
            Youtube, news sites, newspapers, Facebook, Twitter or Discord chats.
            Accept that you will need to erase some apps and block some sites.
            Do it now before they have the opportunity to impede your focus and
            productivity.
          </p>
          <li>Get your own space</li>
          <p>
            You need a dedicated area to work; preferably not your bedroom or
            living room. If you live in a small apartment a clean and empty
            kitchen table is a good alternative. If other family members are
            home you need to stay away from them.
          </p>
          <li>Do not accept visitors from friends and family</li>
          <p>
            During work hours your home should be considered a no-go-zone for
            friends and family. You might need to be very frank with them to
            accept that so that you don't have any unnecessary distractions
          </p>
          <li>Get online and be available to your colleagues</li>
          <p>
            Turn on your work communication platform, check your email every
            hour. Turn on the sound on your phone (but mute all distracting
            notifications).
          </p>
          <li>Take a walk</li>
          <p>
            It's very easy to get completely absorbed in your work when working
            from home. Make sure to cut out some time and walk for 30 minutes
            every day to add some exercise to your routine and keep your mind
            fresh.
          </p>
          <li>Plan lunch ahead</li>
          <p>
            Do not let lunch surprise you every day. Make sure you have food at
            home, preferably leftovers from the day before or something you can
            fix up very quickly without much time or effort.
          </p>
          <li>Postpone household work</li>
          <p>
            Laundry, dishes, vacuum cleaning, etc should be done after work
            hours. You might need to be very frank with your partner for them to
            accept that.
          </p>
          <li>Celebrate on Friday afternoons</li>
          <p>
            On Friday afternoons you are allowed to reward yourself. Eat
            cookies, drink Coca Cola, make popcorn, listen to loud music.
          </p>
        </ol>
        <h3>More tips and advice on how to protect yourself from illness</h3>
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

export default Twenty;
