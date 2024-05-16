import React from "react";
import "./Eleven.css";
import { useNavigate } from "react-router-dom";
import { TbSlash } from "react-icons/tb";

function Eleven() {
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
        <h1>All about vacuum cleaners</h1>
        <div className="guideAuthor">
          <div className="authorImage">
            <img
              src="https://www.pricerunner.com/user/avatar/prod/profile_6120154852246700868.jpg?d=40x40"
              alt=""
            />
          </div>
          <div className="authorName">
            <span>Elina Blom</span>
          </div>
        </div>
        <div className="guideDesc">
          <p>
            Having a clean and attractive home is something everyone can
            appreciate, but which vacuum cleaner should you pick? We have
            gathered everything you need to know as well as some popular vacuum
            cleaner brands such as Dyson and Shark, to help you find the best
            one for you.
          </p>
        </div>
        <div className="thirdImage">
          <img
            src="https://www.pricerunner.com/images/assets/content/bit/guide/Electrolux-stovsugere.jpg?d=896x504"
            alt=""
          />
        </div>
        <h2>What is a vacuum cleaner, and how does it work?</h2>
        <p>
          Vacuum cleaners work by sucking up dust and other dirt through a hose
          equipped with a nozzle. The dust is then collected in a bag or dust
          container, and you empty it when it gets full.
        </p>
        <p>
          Vacuum cleaners are usually mains powered – they have a power cord
          that you plug into the wall outlet. But there are also more and more
          vacuum cleaners that run on battery power. What different types of
          vacuum cleaner are there and what distinguishes them from each other?
          Today, there are many different types of vacuum cleaners, so it's not
          always easy to know which one is right for you. The type of vacuum
          cleaner you should buy also depends very much on your budget, where
          you’ll use it, the battery life, noise level and many other factors.
          We continuously test new vacuum cleaners and name a best in test to
          help you know which one is right for you.
        </p>
        <p>
          The most common type today is still the traditional vacuum cleaner.
          However, several new types have been developed. Below we list the
          different types of vacuum cleaner and describe them in more detail.
        </p>
        <ul>
          <li>
            <span>Traditional cylinder vacuum cleaner:</span> The type of vacuum
            cleaner you'll find in most homes. It’s mains powered, often has a
            dust bag (there are also models without a bag) and has a machine
            body that you pull around on the floor as you vacuum.
          </li>
          <li>
            <span>Stick vacuum cleaner:</span> The stick vacuum cleaner is
            usually battery-powered and bagless and is used both for cleaning
            floors and as a handheld vacuum cleaner for worktops and other
            surfaces. You simply remove the extension tube and connect the
            nozzle directly to the machine body instead.
          </li>
          <li>
            <span>Hand-held vacuum cleaners:</span> Like a stick vacuum cleaner
            but without an extension tube. In other words, it’s battery-powered
            and bagless, but is intended for use on worktops and so on. Some
            models have only one type of nozzle, while on others it’s possible
            to change the nozzle.
          </li>
          <li>
            <span>
              Multi-purpose vacuum cleaner (sometimes also called workshop
              vacuum cleaner):
            </span>{" "}
            A vacuum cleaner – often with a conical machine body – built to
            vacuum up tough dirt such as sanding dust, sawdust, wastewater and
            so on. It’s used in the same way as a traditional floor vacuum
            cleaner. In other words, the body rolls over the floor while you
            vacuum.
          </li>
          <li>
            <span>Robotic vacuum cleaner:</span> A self-propelled vacuum cleaner
            that uses sensors, lasers and algorithms to navigate through your
            home and vacuum it for you.
          </li>
        </ul>
        <img
          src="https://www.pricerunner.com/images/assets/content/bit/guide/Electrolux.jpg"
          alt=""
        />
        <h2>Cylinder vacuum cleaner:</h2>
        <p>
          Nothing beats a really good traditional vacuum cleaner fingers when it
          comes to good cleaning results, provided you’ve bought a high
          performance model. A cylinder vacuum cleaner may be a bit bulky to use
          and store, but they are very competent and strong.
        </p>
        <p>
          For example, if you have pets, a traditional vacuum cleaner is
          essential. Pets shed a lot of hair, and getting it up again is a tough
          job for a vacuum cleaner. The traditional vacuum cleaners with the
          strongest suction power are usually the most suitable for tackling dog
          and cat hair.
        </p>
        <p>
          Cylinder vacuum cleaners consist of a handle attached to a hose
          connected to the machine body on one end and a nozzle on the other.
          The nozzle is passed over the floor and sucks up the dust, which is
          transported via the hose into a bag (or dust container) in the machine
          body. Most vacuum cleaners have a control on the nozzle that controls
          whether or not the nozzle uses small brushes.
        </p>
        <img
          src="https://www.pricerunner.com/images/assets/content/bit/guide/Dyson.jpg"
          alt=""
        />
        <h2>Stick vacuum cleaners</h2>
        <p>
          There are also stick vacuum cleaners and handheld vacuum cleaners,
          both of which are bagless and cordless. Stick vacuum cleaners are more
          versatile, allowing you to use them for both floors and worktops.
        </p>
        <p>
          Stick vacuum cleaners have grown in popularity in the last few years
          as their battery life and performance has improved. A really good
          stick vacuum cleaner is now almost on a par with a good cylinder
          vacuum cleaner. For simple conditions, they’re more than sufficient.
        </p>
        <p>
          They usually come with different types of nozzles and extensions. For
          example, you can fit a narrow nozzle to reach into inaccessible areas,
          or a motorised brush nozzle designed to remove animal hair and the
          like from fabric-covered furniture.
        </p>
        <p>
          There are also stick vacuum cleaners with a mop function. Not only is
          it incredibly convenient and time-saving to have a vacuum cleaner and
          mop in one, but it also saves a lot of space in the cleaning cabinet.
          However, it’s important that the vacuum cleaner has good performance,
          because our tests show that otherwise it won’t get dust up when you
          move it across the floor. Instead the dust gets stuck in the mop cloth
          and gets wet, which in turn means that you’re just wiping dirt all
          over the floor.
        </p>
        <img
          src="https://www.pricerunner.com/images/assets/content/bit/guide/handstovsuger.jpg"
          alt=""
        />
        <h2>Hand-held vacuum cleaner:</h2>
        <p>
          A hand-held vacuum cleaner is similar to a stick vacuum cleaner, but
          it’s smaller and comes with fewer functions.
        </p>
        <p>
          Hand-held vacuum cleaners are very useful to have as a supplementary
          tool, so you can quickly clean chairs, stairs or worktops. You can
          walk around and use it anywhere, but they aren’t usually as powerful
          as the other types of vacuum.
        </p>
        <p>
          A hand-held vacuum cleaner is great for small homes or simply to
          complement a larger vacuum cleaner for a quick clean. They’re also
          convenient as in-car vacuum cleaners.
        </p>
        <p>
          Some hand-held vacuum cleaners include nozzles that you can change,
          while others have a permanent, fixed nozzle.
        </p>
        <img
          src="https://www.pricerunner.com/images/assets/content/bit/guide/robotstovsuger.jpg"
          alt=""
        />
        <h2>Robotic vacuum cleaner</h2>
        <p>
          Nowadays there are also vacuum cleaners that take convenience to
          another level – robotic vacuum cleaners, which are becoming more and
          more popular. These vacuum cleaners are also cordless, but instead of
          having to do the vacuuming yourself, they go around your home cleaning
          it on their own.
        </p>
        <p>
          A robotic vacuum cleaner is a very helpful assistant. It keeps the
          worst of the dirt down and means you need to vacuum much less often.
          If you leave the robotic vacuum cleaner running 3-5 days a week, you
          may only need to vacuum once a month in a normal home.
        </p>
        <p>
          Many models are round and so not very practical in corners. And some
          get stuck when crossing a threshold between rooms. They may also
          sometimes have difficulties with deep-pile rugs. Make sure you buy a
          robotic vacuum cleaner that can cope with your home’s challenges: the
          size of your home, the height of the thresholds, the amount of dirt
          (are you single, do you have pets or toddlers?) the complexity of the
          layout, the free floor height of the furniture and the amount of items
          left on the floor. For example, a robotic vacuum cleaner that has a
          camera and AI can avoid wires, socks, Lego and other obstacles. There
          are also robotic vacuum cleaners that are especially good on mats, dog
          hair etc. With the right model in the right place, you get an
          excellent everyday cleaner.
        </p>
        <h2>What functions can a normal vacuum cleaner have?</h2>
        <p>
          Today you can buy traditional vacuum cleaners with or without a bag.
          Bagless vacuum cleaners have become very popular. Instead of using a
          dust bag, they have a removable transparent plastic dust container,
          which you can empty when it’s full (instead of changing to a new bag).
          This means you don’t have to think about buying new bags, which is
          very practical from an economic and environmental point of view, and
          eliminates the hassle of changing it when the bag gets full. In
          addition, these vacuums maintain the same suction power throughout the
          whole vacuum cycle. In other words, the power doesn’t reduce as it
          gets full.
        </p>
        <p>
          Of course, a vacuum cleaner with a bag has advantages too. They are
          more hygienic and easier to keep clean. Because you discard the entire
          bag, there isn’t the same risk of coming into contact with the dust as
          when you empty a bagless vacuum cleaner. So vacuum cleaners with bags
          can be a better option for people with allergies.
        </p>
        <p>
          The size of the dust bag varies between different vacuum cleaners. How
          quickly it gets full will depend on how big it is. This is important
          to bear in mind if you have pets, for example. Cat and dog hair will
          affect how quickly the bag fills up, so it might be worth buying a
          vacuum cleaner with larger bags so you don’t have to change it too
          often.
        </p>
        <p>
          It’s also important to make sure the operating radius of the vacuum
          cleaner is big enough – in other words, that the power cord is long
          enough. You don’t want to have to change the power outlet too many
          times during a vacuuming session. Today, many vacuum cleaners have up
          to 12 metres’ operating radius.
        </p>
        <p>
          The start button on the vacuum cleaner can also now be located in
          different places. Some vacuum cleaners can still only be started with
          a button on the machine body, while others have a built-in remote
          control on the handle. A start button on the handle makes it easier if
          you need to move something while you’re vacuuming, for example. The
          remote control also often includes the possibility to adjust the
          suction power.
        </p>
        <h2>What are the parts of a vacuum cleaner?</h2>
        <p>A normal vacuum cleaner consists of many different parts.</p>
        <p>
          <span>Filters –</span> There are several types of filters in a vacuum
          cleaner that perform different functions. A motor filter protects the
          motor in case a dust bag bursts inside the vacuum cleaner. The exhaust
          filter captures microscopic particles. Having a good exhaust filter is
          extremely important, as vacuuming can otherwise cause allergy and
          asthma. HEPA filters pick up even smaller particles than the exhaust
          filter, so these are more effective and better for allergy sufferers
          and asthmatics, for example. HEPA filters aren’t found on all vacuum
          cleaners, but can contribute to better air quality in your home. The
          final vacuum cleaner filter is the charcoal filter which helps reduce
          bad smells.
        </p>
        <p>
          <span>Handle –</span> The handle is pretty self-explanatory. It’s the
          bit you hold while using the vacuum. A good handle is ergonomic and
          makes the vacuum cleaner easier to use.
        </p>
        <p>
          <span>Motor –</span> The motor sits inside the machine body and is
          what makes the vacuum cleaner able to suck up dust – it’s the part
          that generates suction power.
        </p>
        <p>
          <span>Nozzle –</span> Different nozzles perform different functions.
          There are several types of floor nozzle to suit different floor
          surfaces, carpets and so on. Many floor nozzles are combination
          nozzles suitable for both hard surfaces and carpets. They usually work
          by you pressing a button on the nozzle itself, which extends or
          retracts small brushes
        </p>
        <p>
          <span>Furniture nozzle –</span> Nozzles come in many different shapes
          and for use in many different places. For example, some are created to
          work better for upholstery or fabrics objects. Others are designed to
          reach into narrow areas, for example between the armrest and the sofa
          cushion. Bags and bag holders – Bags are available in different
          qualities and sizes to fit your vacuum cleaner and bag holder.
        </p>
        <p>
          <span>Vacuum cleaner tube and hoses –</span> These are available in
          different models and sizes. A tube can be extendable (telescopic),
          which makes it easier to adjust to get the right length for you.
        </p>
        <p>
          <span>Scent beads –</span> You can buy these to make your home smell
          nice. You can either suck up the beads or pour them directly into the
          vacuum cleaner bag.
        </p>
        <p>
          <span>Wheels and cable winder –</span> The vacuum cleaner needs these
          to get around your home. Larger wheels make it easier for the vacuum
          cleaner to move over obstacles. And a longer cable eliminates the need
          to switch wall sockets so often.
        </p>
        <h4>
          Check list: What should I think about when buying a vacuum cleaner?
        </h4>
        <ul>
          <li>
            <span>The price –</span> Is the vacuum cleaner good value for money
            given its functions, durability and power? A cheap vacuum cleaner
            rarely performs as well as an expensive one.
          </li>
          <li>
            <span>Loudness –</span> Do you live in an apartment with sensitive
            neighbours and like to vacuum late at night? This may require a
            quieter vacuum cleaner. On the other hand, if you live in the
            countryside and have no neighbours, the noise level of your vacuum
            cleaner probably won’t be as important.
          </li>
          <li>
            <span>Tough job or minor dirt –</span> Are you going to be vacuuming
            tough dirt such as dog hair and dried in mud from a country walk, or
            is it only to pick up the odd crumb from your small flat in town?
          </li>
          <li>
            <span>Functions –</span> Do you want a vacuum cleaner that does
            everything? Several nozzles and maybe even a mop? Or is a
            traditional vacuum cleaner enough?
          </li>
          <li>
            <span>Crodless –</span> Do you want a battery-powered vacuum
            cleaner? How long does the battery need to last? Can you clean the
            entire apartment, or every room in your house? Can you change the
            battery so you can always have one recharging?
          </li>
          <li>
            <span>Size –</span> Will the vacuum cleaner fit in your cleaning
            cupboard? Is it small enough to move easily? If you have lots of
            stairs in your home, perhaps a lighter vacuum cleaner would be
            better?
          </li>
          <li>
            <span>Bag or bagless –</span> A vacuum cleaner that uses bags can be
            seen as the more hygienic option, as less dirt escapes during
            emptying. It’s also important that the bag is easy to change.
            However, a bagless vacuum cleaner can be economically advantageous,
            as you don't have to spend money on new bags. It’s also better for
            the environment and easier to find that bit of Lego you accidentally
            vacuumed up.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Eleven;
