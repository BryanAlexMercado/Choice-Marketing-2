import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";

/**
 * Navigation Component
 *
 * It renders the navigation links
 */
const Nav = ({ state }) => (
  <NavContainer>
    {state.theme.menu.map(([name, link]) => {
      // Check if the link matched the current page url
      const isCurrentPage = state.router.link === link;

      return (
        <NavItem key={name}>
          {/* If link url is the current page, add `aria-current` for a11y */}
          <Link link={link} aria-current={isCurrentPage ? "page" : undefined}>
            {name === "CHOICE" ? (
              <img src="https://www.choice.marketing/media/2018/10/choice.svg"></img>
            ) : (
              name
            )}
          </Link>
        </NavItem>
      );
    })}
  </NavContainer>
);

export default connect(Nav);

const NavContainer = styled.nav`
  list-style: none;
  display: flex;
  width: 100%;

  max-width: 100%;
  box-sizing: border-box;
  padding: 10px 30px;

  margin: 0;
  overflow-x: hidden;
  align-items: center;

  @media screen and (max-width: 560px) {
    display: none;
  }
`;

const NavItem = styled.div`
  padding: 0;
  margin: 0 16px;
  color: #fff;

  font-size: 0.9em;
  box-sizing: border-box;
  flex-shrink: 0;

  & > a {
    line-height: 2em;
    border-bottom: 2px solid;
    font-size: 16px;
    border-bottom-color: transparent;

    /* Use for semantic approach to style the current link */
    &[aria-current="page"] {
      border-bottom-color: #fff;
    }
  }

  &:first-of-type {
    margin-left: 0;
    margin-top: 7px;
    a {
      img {
        width: 126px;
      }
      border-bottom: 0;
    }
  }

  &:last-of-type {
    margin-right: 0;

    &:after {
      content: "";
      display: inline-block;
      width: 24px;
    }
  }
`;
