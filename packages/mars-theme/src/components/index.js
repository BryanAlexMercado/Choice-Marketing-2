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
import Homepage from "./hompage";
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
          <Homepage when={data.isHomePage} />
        </Switch>
      </Main>

      <Footer />
    </>
  );
};

export default connect(Theme);

const globalStyles = css`
  //#region
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
  //#endregion
  //#region
  .css-di06a-Container.emgezev0 {
    h1,
    h2 {
      color: #090033;
    }

    & > div:first-of-type {
      h1 {
        margin: 0 0 26px 0;
        font-size: 45px;
      }
    }
    //#region css page web desgin
    .elementor-posts-container.elementor-posts.elementor-posts--skin-cards.elementor-grid {
      width: 57%;
      display: flex;
      flex-wrap: wrap;

      justify-content: space-between;
      // margin: 20px 0;

      .website {
        width: 222px;
        background-color: #fff;
        border-radius: 26px;

        margin: 16px 0;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.15);

        .frontity-lazy-image.attachment-medium_large.size-medium_large {
          border-radius: 26px 26px 0 0;
          height: 110px;
          background-image: linear-gradient(#fff, #a4a4a4);
        }
        .elementor-post__card {
          position: relative;
        }

        .elementor-post__thumbnail {
          span {
            padding-bottom: 0;
            height: 100px;
          }
        }

        .elementor-post__title {
          text-align: center;
          padding: 0 10px;
          font-weight: 700;

          a {
            text-decoration: unset;
            color: #090033;
          }
        }
        .elementor-post__badge {
          position: absolute;
          top: 0;
          margin-top: 10px;

          margin-left: 10px;
          font-weight: 600;
          line-height: 1em;

          letter-spacing: 1.5px;
          background-color: #272a40b5;
          padding: 5px 10px;

          border-radius: 25px;
          color: #fff;
        }
      }
    }

    .elementor-column.elementor-col-100.elementor-top-column.elementor-element.elementor-element-b180053 {
      width: 57%;
      a {
        color: #f09;
        text-decoration: none;
      }
      .elementor-widget-container {
        h2 {
          font-size: 32px;
        }
      }
      .elementor-text-editor.elementor-clearfix {
        p {
          font-size: 17px;
          color: #090033;
          margin-bottom: 40px;
        }
      }
      .elementor-image {
        width: 365px;
        img {
          object-fit: unset;
        }
      }
    }
    .elementor-element.elementor-element-c6de2f8.elementor-align-center.elementor-widget.elementor-widget-button {
      text-align: center;
      margin-top: 30px;
      margin-bottom: 50px;
      .elementor-button-text {
        padding: 17px 27px;
        background-color: #272a40;
        font-size: 20px;

        color: #fff;
        border-radius: 30px;
        &:hover {
          background-color: #f09;
        }
      }
    }
    .elementor-element.elementor-element-702e640.elementor-widget__width-initial.elementor-widget.elementor-widget-image {
      width: 200px;
      display: inline-block;
    }
    .elementor-element.elementor-element-65fd125.elementor-widget__width-initial.elementor-widget.elementor-widget-text-editor {
      display: inline-block;
      width: 40%;
      padding: 0 30px;
      position: absolute;
    }
    //#endregion

    //#region css page graphic
    .elementor-posts-container.elementor-posts.elementor-posts--skin-cards.elementor-grid {
      .graphics {
        width: 222px;
        background-color: #fff;
        border-radius: 26px;

        margin: 16px 0;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.15);

        .frontity-lazy-image.attachment-medium_large.size-medium_large {
          border-radius: 26px 26px 0 0;
          height: 110px;
          background-image: linear-gradient(#fff, #a4a4a4);
          position: unset;
        }
        .elementor-post__card {
          position: relative;
        }
        .elementor-post__thumbnail {
          span {
            padding-bottom: 0;
            height: 100px;
          }
        }

        .elementor-post__title {
          text-align: center;
          padding: 0 10px;
          font-weight: 700;

          a {
            text-decoration: unset;
            color: #090033;
          }
        }
        .elementor-post__badge {
          position: absolute;
          top: 0;
          margin-top: 10px;

          margin-left: 10px;
          font-weight: 600;
          line-height: 1em;

          letter-spacing: 1.5px;
          background-color: #272a40b5;
          padding: 5px 10px;

          border-radius: 25px;
          color: #fff;
        }
      }
    }
    .elementor-element.elementor-element-7a79b1c.elementor-widget.elementor-widget-text-editor {
      width: 70%;
      text-align: start;
      p {
        font-size: 17px;
        color: #090033;
        margin-bottom: 40px;
      }
    }
    .elementor-element.elementor-element-9c3cf05.elementor-widget-tablet__width-initial.elementor-widget-mobile__width-initial.elementor-widget.elementor-widget-heading {
      width: 70%;
      color: #090033;
    }
    .elementor-element.elementor-element-679fecb.elementor-widget.elementor-widget-image {
      text-align: start;
      span {
        padding: 0;
      }
      img {
        position: unset;
        width: 70%;
      }
    }
    .elementor-element.elementor-element-b64f5aa.elementor-widget.elementor-widget-text-editor {
      width: 70%;
      text-align: start;
      p {
        font-size: 17px;
        color: #090033;
        margin-bottom: 40px;
      }
    }
    .elementor-section.elementor-inner-section.elementor-element.elementor-element-5e3ee3b.elementor-section-full_width.elementor-section-height-default.elementor-section-height-default {
      width: 80%;
      span {
        color: #090033;
        font-weight: 500;
      }
      p {
        font-size: 17px;
        color: #090033;
        margin-bottom: 40px;
      }
      .elementor-widget-wrap.elementor-element-populated {
        padding: 0;
      }
    }
    .elementor-section.elementor-inner-section.elementor-element.elementor-element-1c37de7.elementor-section-full_width.elementor-section-height-default.elementor-section-height-default {
      width: 80%;
      span {
        color: #090033;
        font-weight: 500;
      }
      p {
        font-size: 17px;
        color: #090033;
        margin-bottom: 40px;
      }
    }
    .elementor-section.elementor-inner-section.elementor-element.elementor-element-da7fa12.elementor-section-full_width.elementor-section-height-default.elementor-section-height-default {
      width: 80%;
      span {
        color: #090033;
        font-weight: 500;
      }
      p {
        font-size: 17px;
        color: #090033;
        margin-bottom: 40px;
      }
    }
    .elementor-section.elementor-inner-section.elementor-element.elementor-element-5d2d404.elementor-section-full_width.elementor-section-height-default.elementor-section-height-default {
      width: 80%;
      span {
        color: #090033;
        font-weight: 500;
      }
      p {
        font-size: 17px;
        color: #090033;
        margin-bottom: 40px;
      }
    }
    .elementor-element.elementor-element-7688199.elementor-widget.elementor-widget-image {
      text-align: start;
      span {
        padding: 0;
      }
      img {
        position: unset;
        width: 70%;
      }
    }
    .elementor-widget-container {
      padding: 1em 40px;
    }
    //#endregion page graphic
  }
  //#endregion
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
  position: relative;
`;
