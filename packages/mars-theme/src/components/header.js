import React, { useEffect, useState } from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import Nav from "./nav";
import MobileMenu from "./menu";

const Header = ({ state }) => {
  const [value, setValue] = useState(Boolean);
  let route;
  useEffect(() => {
    route = state.router.link;
    route == "/" ? setValue(true) : setValue(false);
  }, [state.router.link]);

  return (
    <>
      <Nav />
      <Container>
        {/* <StyledLink link="/">
          <Title>{state.frontity.title}</Title>
        </StyledLink>
        <Description>{state.frontity.description}</Description> */}
        <MobileMenu />
        {value && (
          <div className="choice-online">
            <div>
              <h1>Choice Online Marketing Group (OMG) Inc.</h1>
              <p>
                Get a ‘Choice OMG’ strategy to reach more online buyers. We
                create web designs and manage ads, build sites, and run online
                marketing campaigns. ❤️ @ChoiceOMG
              </p>
            </div>
            <div>
              <img src="https://www.choice.marketing/media/2019/02/choice-video-poster-768x433.jpg"></img>
            </div>
          </div>
        )}
      </Container>
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const Container = styled.div`
  // width: 848px;
  max-width: 100%;
  box-sizing: border-box;

  padding: 24px;
  color: #fff;
  display: flex;

  flex-direction: column;
  justify-content: space-around;

  & > .choice-online {
    width: 70%;
    display: flex;
    flex-wrap: wrap;

    margin: 0 auto;
    padding: 50px 0 100px;

    & > div:first-of-type {
      flex: 1;
      margin-right: 25px;

      h1 {
        letter-spacing: 2px;
        font-size: 37px;
        margin-top: 0;
      }
    }

    & > div:last-of-type {
      flex: 1;
      margin-left: 25px;

      img {
        width: 100%;
      }
    }

    @media (max-width: 739px) {
      /* mobile : width < 740px*/

      & > div:first-of-type {
        flex: unset;
        margin-right: 0;
      }

      & > div:last-of-type {
        flex: unset;
        margin-left: 0;

        img {
          width: 100%;
        }
      }
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
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 16px;
`;

const Description = styled.h4`
  margin: 0;
  color: rgba(255, 255, 255, 0.7);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
