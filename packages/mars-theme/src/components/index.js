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
    // padding: 1em 1em 1em 1em;
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
    padding: 0;
    h1,
    h2 {
      color: #090033;
    }

    & > div:first-of-type {
      h1 {
        margin: 10px 40px 26px;
        font-size: 45px;
      }
    }
    //#region css page web desgin
    .elementor-posts-container.elementor-posts.elementor-posts--skin-cards.elementor-grid {
      width: 60%;
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
      width: 60%;
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
        h3 {
          margin: 20.75px;
        }
        p {
          padding: 0 40px;
        }
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
        padding: 0 40px;
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
        padding: 0 40px;
      }
    }
    .elementor-section.elementor-inner-section.elementor-element.elementor-element-5d2d404.elementor-section-full_width.elementor-section-height-default.elementor-section-height-default {
      width: 80%;
      h2 {
        padding: 0 40px;
      }
      span {
        color: #090033;
        font-weight: 500;
      }
      p {
        font-size: 17px;
        color: #090033;
        margin-bottom: 40px;
        padding: 0 40px;
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
    // .elementor-widget-container {
    //   padding: 1em 40px;
    // }
    //#endregion page graphic

    //#region css page seo
    .css-1g528z2-Content.emgezev5 {
      img{
        width:100%;
      }
      p {
        font-size: 17px;
        color: #090033;
        margin-bottom: 40px;
      }
      .elementor-section.elementor-top-section.elementor-element.elementor-element-eabbd66.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default {
        width: 80%;
      }
      .elementor-section.elementor-top-section.elementor-element.elementor-element-d55bd1d.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default {
        width: 80%;
        h2 {
          font-size: 32px;
        }
      }
      .elementor-section.elementor-top-section.elementor-element.elementor-element-3b4fc0f.elementor-section-full_width.elementor-section-height-min-height.elementor-section-height-default.elementor-section-items-middle {
        width: 80%;
        display: flex;
        justify-content: center;
        background-color: #272a40;
        padding: 60px 0 30px;
        // margin: 0 40px;

        h2 {
          font-size: 32px;
          margin: 0;
        }
        h2,
        p {
          color: #fff;
        }
        a {
          color: #f09;
          text-decoration: none;
        }
        img {
          width: 200px;
          height: 235px;
        }
        span {
          padding: 0;
        }
        .elementor-element.elementor-element-2bf9430.elementor-widget__width-initial.elementor-widget-tablet__width-initial.elementor-widget-mobile__width-inherit.elementor-widget.elementor-widget-text-editor {
          width: 51%;
          display: inline-block;
          position: absolute;
        }
        .elementor-element.elementor-element-4e393b0.elementor-widget__width-initial.elementor-widget-tablet__width-initial.elementor-widget-mobile__width-inherit.elementor-widget.elementor-widget-image {
          display: inline-block;
          height: 275px;
          width: 49%;
          margin-left: 60%;
        }
      }
      .elementor-section.elementor-top-section.elementor-element.elementor-element-023e3c5.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default {
        width: 80%;
        background-color: #272a40;
        padding: 50px 0;
        // margin: 0 40px;
        display: flex;
        p,
        .elementor-heading-title.elementor-size-default {
          color: #fff;
        }
        img {
          width: 225px;
          height: 230px;
        }
        span {
          padding-bottom: 220px;
        }
        .elementor-column.elementor-col-33.elementor-top-column.elementor-element.elementor-element-9567360 {
          flex: 1;
          padding: 0 30px;
        }
        .elementor-column.elementor-col-33.elementor-top-column.elementor-element.elementor-element-d48f90d {
          flex: 1;
          padding: 0 30px;
        }
        .elementor-column.elementor-col-33.elementor-top-column.elementor-element.elementor-element-cab4b34 {
          flex: 1;
          padding: 0 30px;
        }
      }
      .elementor-section.elementor-top-section.elementor-element.elementor-element-5c505f5.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default {
        width: 80%;
        padding: 60px 0px 0;
        .elementor-column.elementor-col-50.elementor-top-column.elementor-element.elementor-element-891fb2b {
          width: 50%;
          margin-right: 50px;
          h2 {
            font-size: 32px;
            margin: 0;
          }
          p {
            font-size: 17px;
            color: #090033;
            margin-bottom: 40px;
          }
        }
        .elementor-column.elementor-col-50.elementor-top-column.elementor-element.elementor-element-073c7c4 {
          width: 50%;
          .elementor-widget-container {
            padding: 0;
          }
          .elementor-posts-container.elementor-posts.elementor-posts--skin-cards.elementor-grid {
            width: 100%;
            .post {
              border-radius: 40px;
              box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.15);
              .elementor-post__card {
                .elementor-post__thumbnail__link {
                  span {
                    img {
                      border-radius: 40px 40px 0 0;
                    }
                  }
                }
              }
              .elementor-post__badge {
                position: absolute;
                top: 20px;
                right: 25px;
                line-height: 1;
                background-color: #818a91;
                padding: 6px 12px;
                border-radius: 25px;
                color: #fff;
                text-transform: uppercase;
              }
              .elementor-post__avatar {
                position: relative;
                top: -35px;
                left: 30px;
                span {
                  padding: 0;
                  img {
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                  }
                }
              }
              .elementor-post__text {
                padding: 30px;
                border-bottom: 1px solid #7773;
                a {
                  color: #f09;
                  text-decoration: none;
                }
                p {
                  line-height: 1.5em;
                  font-size: 14px;
                  color: #777;
                }
              }
              .elementor-post__meta-data {
                line-height: 1.5em;
                font-size: 14px;
                color: #777;
                padding: 10px 30px;
              }
            }
          }
          .elementor-element.elementor-element-dc65ceb.elementor-widget__width-auto.elementor-widget-tablet__width-initial.elementor-widget-mobile__width-inherit.hide-tab.elementor-widget.elementor-widget-image {
            .css-1hwqbz6-Container.e16qyzlb0 {
              img {
                width: 62%;
                height: 70%;
              }
            }
          }
        }
      }
    }
    //#endregion

    //#region css page ads
    .css-1g528z2-Content.emgezev5 {
      margin: 0 40px;

      .elementor-section.elementor-top-section.elementor-element.elementor-element-91fcdf1.elementor-section-full_width.elementor-section-height-min-height.elementor-section-items-stretch.elementor-section-height-default.elementor-invisible {
        width: 90%;
        .elementor-shape.elementor-shape-bottom {
          display: none;
        }
        .elementor-element.elementor-element-6f2e7c4.hide-tab.hide-desktop.elementor-widget.elementor-widget-image {
          display: none;
        }
        .elementor-container.elementor-column-gap-default {
          background-image: url(https://www2.choice.marketing/wp-content/uploads/2020/10/hero3-bgArtboard-4.svg);
          background-repeat: no-repeat;
          background-size: cover;
          padding: 100px 0;

          display: flex;
          justify-content: center;
          span {
            font-size: 32px;
            color: #fff;
          }
        }
      }
      .elementor-section.elementor-top-section.elementor-element.elementor-element-4717875.elementor-section-content-middle.elementor-section-full_width.elementor-section-height-default.elementor-section-height-default {
        width: 90%;
        background-color: #fff;
        box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.5);
        .elementor-element.elementor-element-24eb8fc.elementor-widget.elementor-widget-image {
          .elementor-widget-container {
            padding: 100px 150px 0;
          }
        }
      }
      .elementor-element.elementor-element-96ce07b.elementor-widget__width-initial.elementor-widget.elementor-widget-image {
        display: inline-block;
        width: 150px;
        position: relative;
        left: 180px;
        margin-top: 10px;

        img {
          width: 140px;
        }
      }
      .elementor-element.elementor-element-3b7985d.elementor-widget__width-initial.elementor-widget.elementor-widget-image {
        display: none;
      }
      .elementor-element.elementor-element-71994b3.elementor-widget__width-initial.elementor-widget.elementor-widget-image {
        display: inline-block;
        width: 150px;
        position: absolute;
        right: 170px;
        margin-top: 40px;

        img {
          width: 120px;
        }
      }
      .elementor-element.elementor-element-42d240d.elementor-widget-mobile__width-initial.elementor-widget.elementor-widget-heading {
        text-align: center;
        h1 {
          font-size: 50px;
          font-weight: 900;
          line-height: 1.2em;
          letter-spacing: 0.6px;
          color: #272a40;
          margin: 0 0 16px;
        }
      }
      .elementor-element.elementor-element-a17ec05.elementor-widget-mobile__width-initial.subt.elementor-widget.elementor-widget-heading {
        width: 90%;
        text-align: center;
        font-size: 16px;
        font-weight: 700;
        text-transform: uppercase;
        line-height: 1.2em;
        letter-spacing: 0.6px;
        padding: 0 60px;
        span {
          color: #f09;
        }
      }
      .elementor-element.elementor-element-5780bef.no-padding.elementor-widget.elementor-widget-text-editor {
        width: 90%;
        padding: 0 50px;
        color: #090033;
        font-size: 18px;
        li {
          margin-bottom: 10px;
        }
      }
      .elementor-element.elementor-element-0c2912c.elementor-widget__width-initial.elementor-widget.elementor-widget-image,
      .elementor-element.elementor-element-ad24eeb.elementor-widget__width-initial.elementor-widget.elementor-widget-image,
      .elementor-element.elementor-element-d0b2a1f.elementor-widget__width-initial.elementor-widget.elementor-widget-image {
        display: inline-block;
        width: 250px;
        margin: 0 60px;
        span {
          padding-bottom: 270px;
          img {
            width: 250px;
            height: auto;
          }
        }
        .widget-image-caption.wp-caption-text {
          font-size: 16px;
          width: fit-content;
          display: inline-block;
          margin-left: 60px;
          font-weight: bold;
        }
      }
      .elementor-section.elementor-top-section.elementor-element.elementor-element-7792a56.elementor-section-full_width.elementor-section-height-min-height.elementor-section-height-default.elementor-section-items-middle {
        width: 90%;
        margin 0 auto;
        .elementor-column.elementor-col-50.elementor-top-column.elementor-element.elementor-element-4bbdc6f {
          width: 40%;
          padding: 50px;
          h2{
            font-size: 32px;
          }

        }
      }
      .elementor-column.elementor-col-50.elementor-top-column.elementor-element.elementor-element-4fffe25{
        display: flex;
        align-items: center;
        span{
          position: relative;
          top: 90px;
          img{
            width: 60%;
            height: 60%;
          }
        }
        .widget-image-caption.wp-caption-text{
          font-size: 16px;
          font-weight: bold;
          width: 60%;
          display: inline-block;
          text-align: center;
          position: relative;
          top: -90px;
        }
      }
      .elementor-section.elementor-top-section.elementor-element.elementor-element-72d2dff.elementor-section-full_width.elementor-section-height-min-height.elementor-section-height-default.elementor-section-items-middle{
        width: 90%;
        background-color: #090033;
        h2,
        p,
        span{
        color: #fff;
        text-decoration: none;
        }
            
        .elementor-column.elementor-col-50.elementor-top-column.elementor-element.elementor-element-9cdc42a{
          .elementor-widget-wrap.elementor-element-populated{
            padding: 100px 0 150px 160px;
            width: 50%;
            h2{
              font-size: 32px;
            }
            a{
              background-color: #f09;
              padding: 12px 52px;
              text-decoration: none;
              border-radius: 30px;
              font-weight: 600;
            }
          }
           
        }
        .elementor-column.elementor-col-50.elementor-top-column.elementor-element.elementor-element-00824cd{
          width: 100%;
          .elementor-element.elementor-element-97da6be.elementor-widget.elementor-widget-image{
            position: relative;
            right: 100px;
            top: 120px;
            width: 80%;
          }
        }
        
      }
      
      .elementor-section.elementor-top-section.elementor-element.elementor-element-c0a6373.elementor-section-full_width.elementor-section-height-min-height.elementor-section-height-default.elementor-section-items-middle{
        width: 90%;
        .elementor-column.elementor-col-50.elementor-top-column.elementor-element.elementor-element-9649d63{
          .elementor-widget-wrap.elementor-element-populated{
            padding: 100px 0 150px 160px;
            width: 50%;
            h2{
              font-size: 32px;
            }
            a{
              background-color: #f09;
              padding: 12px 52px;
              text-decoration: none;
              border-radius: 30px;
              font-weight: 600;
              color: #fff;
            }
          }
        }
        .elementor-column.elementor-col-50.elementor-top-column.elementor-element.elementor-element-30b0d0c{
          width: 100%;
          .elementor-element.elementor-element-1be0bf7.elementor-widget.elementor-widget-image{
            position: relative;
            right: 100px;
            top: 150px;
            width: 80%;
          }
        }

      }
      .elementor-section.elementor-top-section.elementor-element.elementor-element-092f5d0.elementor-section-full_width.elementor-section-height-min-height.elementor-section-height-default.elementor-section-items-middle{
        width: 90%;  
        background-color: #090033;
        h2,
        p,
        span{
        color: #fff;
        text-decoration: none;
        }
        .elementor-column.elementor-col-50.elementor-top-column.elementor-element.elementor-element-51871ea{
          .elementor-widget-wrap.elementor-element-populated{
            padding: 100px 0 150px 160px;
            width: 50%;
            h2{
              font-size: 32px;
            }
            a{
              background-color: #f09;
              padding: 12px 52px;
              text-decoration: none;
              border-radius: 30px;
              font-weight: 600;
              color: #fff;
            }
          }
        }
        .elementor-column.elementor-col-50.elementor-top-column.elementor-element.elementor-element-c78b38e{
          width: 100%;
          .elementor-element.elementor-element-23f13a4.elementor-widget.elementor-widget-image{
            position: relative;
            right: 30px;
            top: 150px;
            width: 80%;
          }
        }
      }
      .elementor-section.elementor-top-section.elementor-element.elementor-element-8f264f5.elementor-section-full_width.elementor-section-height-default.elementor-section-height-default{
        width: 90%;
        margin-bottom: 50px;
        color: #fff;
        background-image: linear-gradient( 120deg, #090033 , #f09);
        .elementor-shape.elementor-shape-top{
          display: none;
        }
        .elementor-column.elementor-col-100.elementor-top-column.elementor-element.elementor-element-c62fd54{
          width: 100%;
        }
        .elementor-section.elementor-inner-section.elementor-element.elementor-element-628d572.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default{
          width: 100%;
          .elementor-column.elementor-col-50.elementor-inner-column.elementor-element.elementor-element-b97f005{
            
            .elementor-widget-wrap.elementor-element-populated{
              width: 60%;
              padding: 0 30px;
              h4{
                font-size: 32px;
               
              }
              span{
                font-size: 17px;
               
              }
              a{
                background-color: #fff;
                padding: 12px 52px;
                text-decoration: none;
                border-radius: 30px;
                font-weight: 600;
                color: #f09;
                position: relative;
                top: 60px;
              }
            }
          }
          .elementor-column.elementor-col-50.elementor-inner-column.elementor-element.elementor-element-4ffc47c{
           
            width: 25%;
            position: relative;
            top: -100px;
            right: -200px;
            img{
              border-radius: 200px 70px 70px 70px;
            }
          }  
          
        }
        .elementor-section.elementor-inner-section.elementor-element.elementor-element-af1a7aa.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default{
          .elementor-column.elementor-col-100.elementor-inner-column.elementor-element.elementor-element-93e5b1e.footer-creds{
            position: relative;
            margin: auto;
              a{
                color: #fff;
              }
              span{
                img{
                  width: 200px;
                  position: uset;
                  position: absolute;
                  left: -120px;
                  top: 50px;
                }
              }
          }
          .elementor-element.elementor-element-d1ad903.elementor-widget__width-auto.elementor-widget-tablet__width-initial.elementor-widget-mobile__width-inherit.elementor-widget.elementor-widget-heading{
            width: 100px;
            line-height: 2;
          }
          .elementor-element.elementor-element-c83abe6.elementor-shape-circle.elementor-widget__width-auto.elementor-widget-tablet__width-inherit.elementor-widget-mobile__width-inherit.elementor-grid-0.elementor-widget.elementor-widget-social-icons{


          }
        }
       
        .elementor-section.elementor-inner-section.elementor-element.elementor-element-af1a7aa.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default{
          svg{
            display: none;  
          }

        }


      }
      .elementor-section.elementor-top-section.elementor-element.elementor-element-c805c29.elementor-section-content-middle.elementor-section-full_width.hide-desktop.elementor-section-height-default.elementor-section-height-default{
        display: none;

      }
    }
    //#endregion css page ads
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
