import React, { useEffect, useState } from "react";
import { connect, styled, decode } from "frontity";
import { Global, css } from "frontity";

const Homepage = ({ state }) => {
  // Get the data of the current list.
  const [scroll, setScroll] = useState(false);
  const data = state.source.get(state.router.link);
  const onClick = (value) => {
    const elmnt = document.getElementById(value);
    elmnt.scrollIntoView({ behavior: "smooth" });
  };
  let scrolling = (s) => {
    let sc = s.target.scrollingElement.scrollTop;

    if (sc >= 1700) setScroll(true);
    else setScroll(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", scrolling);
    return () => {
      window.removeEventListener("scroll", scrolling);
    };
  }, []);

  return (
    <Container>
      {data.isTaxonomy && (
        <Header onScroll={() => scrolling($event)}>
          {data.taxonomy}:{" "}
          <b>{decode(state.source[data.taxonomy][data.id].name)}</b>
        </Header>
      )}
      <div>
        <GetOnFreeContainer>
          <p>
            Get one free month of SEO with the light website package (offer ends
            Dec 15th). <br /> Call 1-877-930-0955 for details.
          </p>
        </GetOnFreeContainer>
        <WebstieDesign>
          <h2>Website Design and Development Service From $1999 CAD</h2>
          <p>
            We offer hassle-free online marketing services and can increase the
            quality and volume of leads from the web. Our services include web
            <br />
            design, campaign management, and e-commerce software development.
            Hire Canadians and pay in CAD and save huge.
          </p>
          <div className="__button-web">
            <span>Login</span>
            <button className="___button-w">Website Packages</button>
            <button className="___button-c">CHOICE Web Design</button>
          </div>
        </WebstieDesign>
        <ContentPageHome>
          <div className="content-left">
            <div>
              <img
                src="https://www.choice.marketing/media/elementor/thumbs/mobile-mockups-big-nxyuiw0qohs53d23gdxj4jzjegvbelhsujavw8d4y8.jpg"
                width="100%"
              />
            </div>
            <p className="__content-intro">
              Choice OMG is a boutique, creative web design and development
              company. We <br /> specialized in fast, low-cost websites used
              with web advertising.
              <br />
              <br />
              <br />
              Are you an Edmonton web design agency? Consider adding Choice to
              your web <br /> service bundle. Our service is advanced, and we
              continue to partner with more <br /> and more agencies every
              month. Our primary function is advertising, and for <br /> many
              partner agencies, we form a valuable part of their bundled service
              <br />
              offering.
              <b>We are now almost wholly an agency partner company.</b> We do
              provide
              <br /> white label services if desired, and this comes with the
              same level of results you <br /> and your clients demand. We like
              doing white label projects with skilled <br />
              agencies that specialize in sales and customer service. When we
              don’t need to <br /> worry about negotiating with clients or
              answering basic questions, our <br /> resources are focused solely
              on campaign performance. And we love that.
              <br />
              <br />
              <br />
              Our work is ideal for {""}
              <b>Google Ads, Facebook Ads, and Microsoft Ads.</b>
              If you or <br /> your client are launching a marketing campaign or
              if you need someone to <br /> maintain and repair a website,
              ChoiceOMG could be your partner agency. <br />{" "}
              <span>Learn more about CHOICE.</span>
            </p>
            <div className="__online-marketing" id="online">
              <h2>Online marketing achieves the incredible</h2>
              <p>
                We focus on the web advertising aspects and the creative ad
                design aspects of <br /> digital [online] marketing. We also
                maintain secondary specializations in data <br /> analysis and
                website development as required and can do a better job than{" "}
                <br /> most, but we are not the best in the world. However, when
                it comes to creative <br /> advertising online, we are – or will
                be – the best in the world. Web advertising is <br /> our jam,
                our dream, and the domain in which we love to dance.
                <br />
                <br />
                Canadian professionals are phenomenal. Use Canadian advertising
                agencies and <br /> pay in CAD. We have a multi-cultural society
                and make a great partner in any <br /> multi-domestic worldwide
                strategy with first-generation Canadian citizens from <br />{" "}
                across the globe.
              </p>
            </div>
            <div className="__learn-the-most" id="learn">
              <h2>
                Learn the most effective tactics behind every successful <br />{" "}
                digital marketing campaign.​
              </h2>
              <p>
                <img
                  src="https://www2.choice.marketing/wp-content/uploads/2020/11/arrow_Right-Active@2x.png"
                  width="13px"
                  height="13px"
                />{" "}
                &nbsp;<b>Web Advertising</b> - Ad media placed across Google
                Ads, Microsoft Ads, and Facebook Advertising.
              </p>
              <p>
                <img
                  src="https://www2.choice.marketing/wp-content/uploads/2020/11/arrow_Right-Active@2x.png"
                  width="13px"
                  height="13px"
                />{" "}
                &nbsp;<b>Search Optimization</b> - Careful monitoring of search
                signals to ensure the right audience finds you when searching
                for your products and services.
              </p>
              <p>
                <img
                  src="https://www2.choice.marketing/wp-content/uploads/2020/11/arrow_Right-Active@2x.png"
                  width="13px"
                  height="13px"
                />{" "}
                &nbsp;<b>Creative Ad Design</b> - Designing media so that the
                right audience engages with it in predictable ways.
              </p>
              <p>
                <img
                  src="https://www2.choice.marketing/wp-content/uploads/2020/11/arrow_Right-Active@2x.png"
                  width="13px"
                  height="13px"
                />{" "}
                &nbsp;<b>Ecommerce</b> - Be ready to monetize online. Close the
                loop and conduct the full circle of your business process and
                admin functions online.
              </p>
            </div>
            <div className="__featured-website" id="featured">
              <h2>Featured Website Projects</h2>
              <div className="__featured-website-bl">
                <div className="___right">
                  <div>
                    <img
                      src="https://www.choice.marketing/media/2018/11/aufitness-768x512.jpg"
                      width="325px"
                      style={{ borderRadius: "12px" }}
                    />
                  </div>
                  <div>
                    <h2>Personal Trainer</h2>
                    <p>
                      While working for the Master Automotive franchises, we
                      developed an Ecommerce website for one of their product
                      lines that they brought into Canada for truck-bed-liners.
                    </p>
                    <i>05/21/2019</i>
                  </div>
                </div>
                <div className="___left">
                  <div>
                    <img
                      src="https://www.choice.marketing/media/2018/11/aufitness-768x512.jpg"
                      width="325px"
                      style={{ borderRadius: "12px" }}
                    />
                  </div>
                  <div>
                    <h2>Personal Trainer</h2>
                    <p>
                      While working for the Master Automotive franchises, we
                      developed an Ecommerce website for one of their product
                      lines that they brought into Canada for truck-bed-liners.
                    </p>
                    <i>05/21/2019</i>
                  </div>
                </div>
              </div>
            </div>
            <div className="__recent-web" id="recent">
              <h2>Recent Website Projects</h2>
              <div className="___recent-web-content">
                <div>
                  <a>International Vacation Properties in Spain</a> <br />
                  <i>Alysa Shuman ● 10/17/2020 ● No Comments</i> <br />
                  <p>
                    Vita VIP brought us into this project for the front-end web
                    design component. Although the project was in its infancy
                    stage, we built out the core pages; we also incorporated
                    enhanced custom post types for properties and built deep
                    level property sorting features and attributes.
                  </p>
                </div>
                <div>
                  <a>Winnipeg Accountant Professional</a> <br />
                  <i>Alysa Shuman ● 10/12/2020 ● 7 Comments </i> <br />
                  <p>
                    Accountant website build on WordPress with our Plesk hosting
                    platform in Montreal (on AWS). The site is very lean and
                    ultra fast on mobile. It doesn’t use a traditional WordPress
                    theme, we put in the new Elementor plugin.
                  </p>
                </div>
                <div>
                  <a>New York Hair Salon</a> <br />
                  <i>Alysa Shuman ● 09/12/2020 ● No Comments</i> <br />
                  <p>
                    In 2017, when we first worked with this New York hair salon,
                  </p>
                </div>
                <div>
                  <a>Badass Hair Salon</a> <br />
                  <i>Katherine Pollock ● 04/11/2020 ● 5 Comments</i> <br />
                  <p>
                    Our hair salon website project is an ever-evolving
                    combination of helping visitors find them on search (to book
                    appointments, of course) and, more recently, to help them
                    sell the products online.
                  </p>
                </div>
              </div>
            </div>
            <div className="__choice-online" id="choice">
              <h2>Choice Online Marketing Group Inc.</h2>
              <b>
                <i>
                  <span>We Get Your Phone Ringing™</span>
                </i>
              </b>
              <br />
              <p>
                We’re a bunch of cool Canadians from The North. Or cold
                Canadians. We live in snow for most of the year, we say “eh?,”
                and we have two official languages, English and French. Our core
                values are Trust, Effect, and Client Success. Our mission is to
                “be the slingshot.” If you want to{" "}
                <span>learn more about Choice OMG Inc., click here</span> or{" "}
                <span>message us on Facebook</span>.
              </p>
            </div>
            <div className="__creative-service" id="creative">
              <h1>Creative Service Details</h1>
              <h2>Graphic Design and Printing Services</h2>
              <p>
                <img
                  src="https://www2.choice.marketing/wp-content/uploads/2020/11/arrow_Right-Active@2x.png"
                  width="13px"
                  height="13px"
                />{" "}
                &nbsp;Product packaging and labels
              </p>
              <p>
                <img
                  src="https://www2.choice.marketing/wp-content/uploads/2020/11/arrow_Right-Active@2x.png"
                  width="13px"
                  height="13px"
                />{" "}
                &nbsp;Logo design
              </p>
              <p>
                <img
                  src="https://www2.choice.marketing/wp-content/uploads/2020/11/arrow_Right-Active@2x.png"
                  width="13px"
                  height="13px"
                />{" "}
                &nbsp;Social media ads and posts
              </p>
              <p>
                <img
                  src="https://www2.choice.marketing/wp-content/uploads/2020/11/arrow_Right-Active@2x.png"
                  width="13px"
                  height="13px"
                />{" "}
                &nbsp;Website banner ads
              </p>
              <p>
                <img
                  src="https://www2.choice.marketing/wp-content/uploads/2020/11/arrow_Right-Active@2x.png"
                  width="13px"
                  height="13px"
                />{" "}
                &nbsp;Fleet decals and signs
              </p>
            </div>
            <div className="__websites-creatives" id="websites">
              <h2>Websites Creatives and Landing Pages</h2>
              <p>
                Yes, you can definitely find cheaper or even free websites and
                logo designs on <br /> the internet, but the part that separates
                us from them is value. Much like a <br /> large branding firm in
                Toronto or an online marketing agency in Vancouver, our <br />{" "}
                little Edmonton internet company provides{" "}
                <b>big agency skills</b> with the exception <br /> that our
                rates are affordable. The only thing cheap about our digital
                marketing <br /> service is the price.
              </p>
              <p>
                <img
                  src="https://www2.choice.marketing/wp-content/uploads/2020/11/arrow_Right-Active@2x.png"
                  width="13px"
                  height="13px"
                />{" "}
                &nbsp;Microsites with a few pages of content to inform just
                enough to get the sale or the conversion
              </p>
              <p>
                <img
                  src="https://www2.choice.marketing/wp-content/uploads/2020/11/arrow_Right-Active@2x.png"
                  width="13px"
                  height="13px"
                />{" "}
                &nbsp;Small practice websites to centralize announcements for
                patients and to facilitate online appointments and bookings
              </p>
              <p>
                <img
                  src="https://www2.choice.marketing/wp-content/uploads/2020/11/arrow_Right-Active@2x.png"
                  width="13px"
                  height="13px"
                />{" "}
                &nbsp;Small e-commerce stores to sell across a single country
                without complicated shipping or logistical requirements.
              </p>
              <p>
                <img
                  src="https://www2.choice.marketing/wp-content/uploads/2020/11/arrow_Right-Active@2x.png"
                  width="13px"
                  height="13px"
                />{" "}
                &nbsp;Front end UX/UI design for headless CMS systems or other
                design mockups and templating systems
              </p>
              <p>
                <img
                  src="https://www2.choice.marketing/wp-content/uploads/2020/11/arrow_Right-Active@2x.png"
                  width="13px"
                  height="13px"
                />{" "}
                &nbsp;Website rebuilds or clones to migrate or overhaul
                management frameworks
              </p>
            </div>
            <div className="__edmonton-web" id="edmonton">
              <h2>Edmonton Web Design Service</h2>
              <p>
                We offer affordable web design at one of our locations in
                Western Canada; <br /> Choice OMG Edmonton has highly
                experienced graphic designers and a creative <br /> team that
                can help translate your purpose into colours, shapes, and
                ultimately a <br />
                beautiful website. We can do more than WordPress, but if you are
                looking for a <br /> simple WordPress website with some great
                SEO then definitely get a quote <br /> from us. Also, be sure to
                check out our Google Ads and Facebook Advertising <br />{" "}
                services.
              </p>
            </div>
            <button type="button">Edmonton Web Desgin</button>&emsp;&emsp;
            <span>Web Design Pricing</span>
          </div>
          <div className="content-right">
            <div>
              <img
                src="https://www.choice.marketing/media/2020/10/creative-web-designAsset-1.svg"
                width="100%"
              />
            </div>
            <div className="__content-ads">
              <div className="___box-div">
                <img src="https://www1.choice.marketing/wp-content/uploads/2018/10/choice-adwordsAsset-1.svg" />{" "}
                <br /> <p>Google Ads</p>
              </div>
              <div className="___box-div">
                <img src="https://www2.choice.marketing/wp-content/uploads/2018/10/seoAsset-4.svg" />{" "}
                <br /> <p>Traffic</p>
              </div>
              <div className="___box-div">
                <img src="https://www1.choice.marketing/wp-content/uploads/2018/10/landing-pagesAsset-5.svg" />{" "}
                <br /> <p>Landing Pages</p>
              </div>
              <div className="___box-div">
                <img src="https://www2.choice.marketing/wp-content/uploads/2018/10/crocro.svg" />{" "}
                <br /> <p>Lead Gen</p>
              </div>
              <div className="___box-div">
                <img src="https://www2.choice.marketing/wp-content/uploads/2018/10/printingprinting.svg" />{" "}
                <br /> <p>Vinyl Graphics</p>
              </div>
              <div className="___box-div">
                <img src="https://www2.choice.marketing/wp-content/uploads/2018/10/logo.svg" />{" "}
                <br /> <p>Logo Design</p>
              </div>
            </div>
            <div className="__scroll-element">
              <div className={scroll && "___active-scroll"}>
                <a role="button" onClick={() => onClick("online")}>
                  Online marketing achieves the incredible
                </a>{" "}
                <br />
                <br />
                <a role="button" onClick={() => onClick("learn")}>
                  Learn the most effective tactics behind...
                </a>
                <br />
                <br />
                <a role="button" onClick={() => onClick("featured")}>
                  Featured Website Projects
                </a>
                <br />
                <br />
                <a role="button" onClick={() => onClick("recent")}>
                  Recent Website Projects
                </a>
                <br />
                <br />
                <a role="button" onClick={() => onClick("choice")}>
                  Choice Online Marketing Group Inc.
                </a>
                <br />
                <br />
                <a role="button" onClick={() => onClick("creative")}>
                  Creative Service Details
                </a>
                <br />
                <br />
                <a role="button" onClick={() => onClick("websites")}>
                  Websites Creatives and Landing Pages
                </a>
                <br />
                <br />
                <a role="button" onClick={() => onClick("edmonton")}>
                  Edmonton Web Design Service
                </a>
              </div>
            </div>
          </div>
        </ContentPageHome>
      </div>
    </Container>
  );
};

export default connect(Homepage);
//#region
const Container = styled.div`
  width: 100%;
  list-style: none;
  h1,
  h2,
  p {
    color: #090033;
  }
  a {
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
  button {
    cursor: pointer;
  }
  i {
    font-size: 13px;
  }
`;

const Header = styled.h3`
  font-weight: 300;
  text-transform: capitalize;
  color: rgba(12, 17, 43, 0.9);
`;

const GetOnFreeContainer = styled.div`
  text-align: center;
  font-size: 27px;
  background-color: #a5a1d0;

  p {
    color: #090033;
    margin: 0;
    padding: 30px 0;
  }
`;

const WebstieDesign = styled.div`
  text-align: center;
  // padding: 15px 0 30px;
  p {
    font-size: 15px;
  }

  .__button-web {
    margin: 30px 0;
    color: #090033;
    button {
      padding: 17px 26px;
      border-radius: 40px;
      border: 2.5px solid #f09;
      background-color: #f09;
      font-weight: 600;
    }
    .___button-w {
      margin: 0 30px;
      border: 2.5px solid #090033;
      background-color: unset;
      color: #0900033;
    }
    .___button-c {
      color: #fff;
    }
  }
`;
//#endregion
const ContentPageHome = styled.div`
  //#region
  display: flex;
  flex-wrap: wrap;
  padding: 50px 10vw;

  background-color: #f7f7f7;
  p {
    font-size: 15px;
    letter-spacing: 1px;
    line-height: 1.7;
  }
  span {
    font-size: 15px;
    color: #f09;
  }
  //#endregion
  .content-left {
    flex: 2;
    button {
      padding: 17px 26px;
      border-radius: 40px;
      border: 2.5px solid #f09;
      font-weight: 600;
      color: #090033;

      &:hover {
        background-color: #f09;
        color: #fff;
      }
    }
    .__content-intro {
    }
    .__online-marketing {
    }
    .__featured-website {
      .__featured-website-bl {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .___right {
          width: 325px;
          background-color: #fff;
          border-radius: 12px;
          box-shadow: 5px 10px 20px 10px rgba(0, 0, 0, 0.1);
          margin-bottom: 30px;
          & > div:last-of-type {
            padding: 10px 20px;
          }
        }
        .___left {
          width: 325px;
          background-color: #fff;
          border-radius: 12px;
          box-shadow: 5px 10px 20px 10px rgba(0, 0, 0, 0.1);
          margin-bottom: 30px;
          & > div:last-of-type {
            padding: 10px 20px;
          }
        }
      }
    }
    .__recent-web {
      .___recent-web-content {
        background-color: #fff;
        border-radius: 12px;
        box-shadow: 5px 10px 20px 10px rgba(0, 0, 0, 0.1);
        padding: 16px 20px;
      }
    }
  }

  .content-right {
    flex: 1;
    padding: 0 0 0 100px;
    & > div:first-of-type {
      padding: 30px;
      background-color: #fff;
      border-radius: 12px;
      box-shadow: 5px 10px 20px 10px rgba(0, 0, 0, 0.1);
    }

    .__content-ads {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      .___box-div {
        box-shadow: 5px 10px 20px 10px rgba(0, 0, 0, 0.1);
        border-radius: 15px;
        background-color: #fff;
        padding: 10px 12px;
        height: fit-content;
        text-align: center;
        margin: 30px 0 0 0;
        p {
          margin: 0;
          font-size: 14px;
        }
      }
      img {
        width: 70px;
        // height: 70px;
      }
    }
    .__scroll-element {
      margin: 30px 0 0 0;
      position: relative;
      .___active-scroll {
        position: fixed;
        top: 0;
        margin-top: 30px;
        z-index: 1;
      }
    }
  }
`;
