import Switch from "@frontity/components/switch";
import { connect, css, Global, Head, styled } from "frontity";
import React from "react";
import Header from "./header";
import Footer from "./footer";
import List from "./list";
import Loading from "./loading";
import PageError from "./page-error";
import Post from "./post";
import Title from "./title";
import "@fortawesome/fontawesome-free/css/all.min.css";

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);

  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
      </Head>
      {/* Add some global styles for the whole site, like body or a's. 
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={globalStyles} />
      {/* Add the header of the site. */}
      <HeadContainer>
        <Header />
      </HeadContainer>
      {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}
      <Main>
        <Switch>
          <Loading when={data.isFetching} />
          <List when={data.isArchive} />
          <Post when={data.isPostType} />
          <PageError when={data.isError} />
        </Switch>
      </Main>

      <Footer />
    </>
  );
};

export default connect(Theme);

const globalStyles = css`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
  .elementor-icon-box-title {
    font-size: 25px;
    font-weight: 400;
  }
  .elementor-109
    .elementor-element.elementor-element-9c3cf05
    .elementor-heading-title {
    font-family: "LibreBaskerville", Sans-serif;
    font-size: 8rem;
    font-weight: 600;
    text-transform: none;
    font-style: normal;
    text-decoration: none;
    line-height: 1.2em;
    letter-spacing: 0px;
  }
  .elementor-109 .elementor-element {
    text-align: center;
    z-index: 0;
  }
  .elementor-109 .elementor-element > .elementor-widget-container {
    padding: 1em 1em 1em 1em;
  }
  .elementor-widget-wrap > .elementor-element {
    width: 100%;
  }
  .elementor-section .elementor-container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-right: auto;
    margin-left: auto;
    position: relative;
  }
  @media (min-width: 768px) .elementor-column.elementor-col-33,
    .elementor-column[data-col="33"] {
    width: 33.333%;
  }
  .elementor-109
    .elementor-element.elementor-element-c87ec64
    > .elementor-element-populated {
    padding: 45px 45px 45px 45px;
  }
`;

const HeadContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #272a40;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  background-image: linear-gradient(
    180deg,
    rgba(66, 174, 228, 0.1),
    rgba(66, 174, 228, 0)
  );
`;
