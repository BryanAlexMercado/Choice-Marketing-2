import { connect, styled } from "frontity";
import React from "react";

const footer = {
  left: [
    {
      title: "About ChoiceOMG Inc.",
      icon: "",
    },
    {
      title: "Web Design Portfolio",
      icon: "",
    },
    {
      title: "Graphic Design Portfolio",
      icon: "",
    },
  ],
  between: [
    {
      title: "(780) 628-2798",
      icon: "",
    },
    {
      title: "(877) 930-0955",
      icon: "",
    },
    {
      title: "Choice Hosting",
      icon: "",
    },
    {
      title: "Send Large Files",
      icon: "",
    },
    {
      title: "My Account",
      icon: "",
    },
  ],
  right: [
    {
      title: "Choice Jobs",
      icon: "",
    },
    {
      title: "Search Console",
      icon: "",
    },
    {
      title: "Google Analytics",
      icon: "",
    },
    {
      title: "Community",
      icon: "",
    },
    {
      title: "Forums Blog",
      icon: "",
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
                    <div>
                      <i className="fas fa-info"></i>
                      <p style={{ fontWeight: 500 }}>{itemLeft.title}</p>
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
                    <div>
                      <i className="fas fa-info"></i>
                      <p style={{ fontSize: `${14}px` }}>{itemBetween.title}</p>
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
                    <div>
                      <i className="fas fa-info"></i>
                      <p style={{ fontSize: `${14}px` }}>{itemRight.title}</p>
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
            <div>
              icon twitter, icon facebook,...(issue: can't add fontawesome for
              fontity)
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
