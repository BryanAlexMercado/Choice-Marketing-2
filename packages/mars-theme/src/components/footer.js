import { connect, styled } from "frontity";
import React from "react";

const footer = {
  left: [
    {
      title: "About ChoiceOMG Inc.",
      icon:
        "https://www1.choice.marketing/wp-content/uploads/2020/11/information.svg",
    },
    {
      title: "Web Design Portfolio",
      icon:
        "https://www1.choice.marketing/wp-content/uploads/2020/11/insert-picture-icon.svg",
    },
    {
      title: "Graphic Design Portfolio",
      icon:
        "https://www2.choice.marketing/wp-content/uploads/2020/11/web-design.svg",
    },
  ],
  between: [
    {
      title: "(780) 628-2798",
      icon: "https://www2.choice.marketing/wp-content/uploads/2020/11/call.svg",
    },
    {
      title: "(877) 930-0955",
      icon:
        "https://www1.choice.marketing/wp-content/uploads/2020/11/speech-bubble.svg",
    },
    {
      title: "Choice Hosting",
      icon:
        "https://www2.choice.marketing/wp-content/uploads/2020/11/settings.svg ",
    },
    {
      title: "Send Large Files",
      icon:
        "https://www2.choice.marketing/wp-content/uploads/2020/11/cloud-storage-uploading-option.svg",
    },
    {
      title: "My Account",
      icon: "https://www2.choice.marketing/wp-content/uploads/2020/11/user.svg",
    },
  ],
  right: [
    {
      title: "Choice Jobs",
      icon:
        "https://www1.choice.marketing/wp-content/uploads/2020/11/portfolio.svg",
    },
    {
      title: "Search Console",
      icon:
        "https://www1.choice.marketing/wp-content/uploads/2020/11/loupe.svg",
    },
    {
      title: "Google Analytics",
      icon:
        "https://www2.choice.marketing/wp-content/uploads/2020/11/line-chart.svg",
    },
    {
      title: "Community",
      icon:
        "https://www1.choice.marketing/wp-content/uploads/2020/11/chatting.svg",
    },
    {
      title: "Forums Blog",
      icon:
        "https://www1.choice.marketing/wp-content/uploads/2020/11/blogging.svg",
    },
  ],
};

const Footer = ({ state }) => {
  return (
    <>
      <Container>
        <div className="footer-above">
          <input type="text" placeholder="Enter email to subscribe..." />
          <p>
            Subscribe to our newsletter and we will send you occasional articles
            on digital marketing <br></br> topics. You can unsubscribe at any
            time.
          </p>
        </div>
        <div className="footer-below">
          <span className="footer-content-top">
            We Get Your Phone Ringing™ November 23, 2020 3:15 am
          </span>
          <div className="footer-content-between">
            <div className="_footer-left">
              <div
                className="__footer-left-img"
                style={{ width: 150 + "px", marginRight: `${30}px` }}
              >
                <img
                  src="https://www.choice.marketing/media/2018/10/made-in-canada.png"
                  width="100%"
                ></img>
              </div>
              <div>
                {footer.left.map((itemLeft, indexLeft) => {
                  return (
                    <div key={indexLeft}>
                      <h3 style={{ fontWeight: 500, display: "flex" }}>
                        <img src={itemLeft.icon} width="16px" />
                        &emsp;
                        {itemLeft.title}
                      </h3>
                    </div>
                  );
                })}
              </div>
              <div className="" style={{ width: 150 + "px" }}>
                <img
                  src="https://www.choice.marketing/media/2018/10/BuyAchetonsVeteranCA_white-01-768x213.png"
                  width="100%"
                ></img>
              </div>
            </div>
            <div className="_footer-between">
              <p>CUSTOMER SERVICE</p>
              <div>
                {footer.between.map((itemBetween, indexBetween) => {
                  return (
                    <div key={indexBetween}>
                      <p style={{ fontSize: `${14}px`, display: "flex" }}>
                        <img src={itemBetween.icon} width="16px" />
                        &emsp;
                        {itemBetween.title}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="_footer-right">
              <p>WEB MARKETING RESOURCES</p>
              <div>
                {footer.right.map((itemRight, indexRight) => {
                  return (
                    <div key={indexRight}>
                      <p style={{ fontSize: `${14}px`, display: "flex" }}>
                        {" "}
                        <img src={itemRight.icon} width="16px" />
                        &emsp;{itemRight.title}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="footer-content-below">
            <span style={{ fontSize: `${15}px` }}>
              © 2020 ChoiceOMG Inc. All rights reserved. 6806 78 Ave NW,
              Edmonton, AB T6B 2J5 <br></br>
              <span style={{ fontSize: `${14}px` }}>Privacy</span>&nbsp;|&nbsp;
              <span style={{ fontSize: `${14}px` }}>Terms of Use</span>
              &nbsp;|&nbsp;
              <span style={{ fontSize: `${14}px` }}>Legal</span>
            </span>
            <div className="___icon-footer">
              <img
                src="https://www2.choice.marketing/wp-content/uploads/2020/11/twitter.svg"
                width="40px"
              />
              <img
                src="https://www1.choice.marketing/wp-content/uploads/2020/11/facebook.svg"
                width="40px"
              />
              <img
                src="https://www2.choice.marketing/wp-content/uploads/2020/11/youtube.svg"
                width="40px"
              />
              <img
                src="https://www1.choice.marketing/wp-content/uploads/2020/11/linkedin.svg"
                width="40px"
              />
              <img
                src="https://www2.choice.marketing/wp-content/uploads/2020/11/github-1.svg"
                width="40px"
              />
              <img
                src="https://www2.choice.marketing/wp-content/uploads/2020/11/instagram.svg"
                width="40px"
              />
            </div>
            <div>
              <img src="https://www.choice.marketing/media/2018/10/choice-1.png"></img>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Footer);

const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  color: #fff;

  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 99;

    //#region 
  & > .footer-above{
    height: 120px;
    display: flex;
    flex-direction: column;

    justify-content: center;
    text-align: center;
    align-items: center;

    background-image: linear-gradient(#ff0093, #ff0040);
    padding: 24px 50px;
    input{
        width: 50%;
        padding: 15px 20px;
        border: 0;
        outline: 0;
        border-radius: 25px 25px 2px 25px;
    
    }
    p{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        width: 100%;
    }
  }
  //#endregion
  //#region 
  & > .footer-below{
    background-color: #272a40;
    padding: 16px 50px;
    
    .footer-content-top{
        margin-bottom: 20px;
        display: block;
    }
    .footer-content-between{
        height: 300px;
        display: flex;

        ._footer-left{
            display: flex;
            flex-wrap: wrap;
            flex: 2;
            align-items: center
           
        }

        ._footer-between{
            flex: 1;
            padding: 0 20px;
            margin: auto;
            & > p:first-of-type{
                border-bottom: 1px solid;
                padding-bottom: 10px;
            }
        }

        ._footer-right{
            flex: 1;
            padding: 0 20px;
            margin: auto;
            & > p:first-of-type{
                border-bottom: 1px solid;
                padding-bottom: 10px;
            }
        }

    }

    .footer-content-below{
        display: flex;
        justify-content: start;
        align-items: center;

        margin-top: 35px;

        & > div:first-of-type{
            margin: 0 auto 0 20px;
        }
        & > div:last-of-type{
           width:100px;
           img{
               width: 100%;
           }
        }
        .___icon-footer{
          img{
            margin: 0 7px;
          }
        }
    }
    //#endregion

    
  }
  //#region 
    @media (max-width: 739px) {
    
    }

    /* ( min-width: 740px = 46.25em) and (max-width: 1023px = 63.9375em) */
    @media (min-width: 740px) and (max-width: 1023px) {
      /* tablet : width >= 740px and : width < 1024px*/
    }

    /* ( min-width: 1024px = 64em) */
    @media (min-width: 1024px) {
      /* PC : width >= 1024px*/
    }
  }
  //#endregion
`;
