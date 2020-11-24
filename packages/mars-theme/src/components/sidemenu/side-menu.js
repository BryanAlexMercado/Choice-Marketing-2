import React from "react";
import { connect, styled, decode } from "frontity";
import { Global, css } from "frontity";

const SideMenus = {
  "/graphic-design/" : [
      { id: 0, title: "Graphics", url: "/graphic-design/", children: [] },
      { id: 1, title: "Gallery", url: "/graphic-design/portfolio/", children: [] },
      { id: 2, title: "Food Label", url: "/graphic-design/labels-packaging/food-label/", children: [] },
      { id: 3, title: "Pricing", url: "/graphic-design/pricing/", children: [] },
      { id: 4, title: "Poster", url: "/graphic-design/ad-poster/", children: [] },
      { id: 5, title: "Logo Design", url: "/graphic-design/logo-design", children: [] },
      { id: 6, title: "Edmonton Vehicle Decal Printing", url: "/vehicle-wraps/", children: [] },
  ],
  "/web-design/": [
      { id: 0, title: "Web Services", url: "/web-design/", highlight: false, children: [] },
      { id: 1, title: "Packages (Pricing)", url: "/web-design/packages/", highlight: false, children: [] },
      { id: 2, title: "Copy/Rebuild", url: "/web-design/web-migration/", highlight: false, children: [] },
      { id: 3, title: "Web Services", url: "/web-design/development-process/", highlight: false, children: [
          { title: "Features", url: "/web-design/features/", children: [], highlight: false },
          { title: "Ecommerce", url: "/web-design/ecommerce/", children: [], highlight: false },
          { title: "Management Tools", url: "/web-design/website-software/", children: [], highlight: false },
      ] },
      { id: 4, title: "Web Portfolio", url: "/web-design/portfolio/", highlight: true, children: []},
  ],
  "/canadian-seo-agency/": [
      { id: 0, title: "Canadian SEO Agency Services in Winnipeg" , url: "/canadian-seo-agency/", children: []},
      { id: 1, title: "Conversion Tracking" , url: "/canadian-seo-agency/conversion-tracking/", children: []},
      { id: 2, title: "Landing Page Design" , url: "/canadian-seo-agency/landing-page-design/", children: []},
      { id: 3, title: "Analysis Tools" , url: "/canadian-seo-agency/analysis-tools/", children: []},
      { id: 4, title: "Case Studies" , url: "/canadian-seo-agency/cases/", children: []},
      { id: 5, title: "Agency Rates" , url: "/company/rates/", children: []},
  ],
  "/web-advertising/": [
      { id: 0, title: "Home" , url: "/", children: []},
      { id: 1, title: "Microsoft Advertising" , url: "/web-advertising/we-manage-microsoft-ads/", children: []},
      { id: 2, title: "Agency Rates" , url: "/company/rates/", children: []},
      { id: 3, title: "SEM" , url: "/web-advertising/search-ads/", children: [{ title: "PPC", url: "/web-advertising/ppc-cases", highlight: false },
          { title: "Internet Marketing Apps", url: "/web-advertising/ppc-marketing-service", highlight: false },]},
      { id: 4, title: "Google Ads" , url: "/web-advertising/google-ads/", children: []},
      { id: 5, title: "Facebook Ads" , url: "/web-advertising/facebook-and-instagram-ad-agency/", children: []},
      { id: 6, title: "Partners Program" , url: "/company/partners/", children: []},
  ],
  "/hosting/": [
      { id: 0, title: "Cloud", url: "/hosting/cloud/", children: [] },
      { id: 1, title: "How Does Choice Hosting Compare?", url: "/hosting/hosting-compared/", children: [] },
      { id: 2, title: "Web Application Security", url: "/hosting/security/", children: [] },
      { id: 3, title: "Web Caching Options(Pros & Cons)", url: "/hosting/smart-caching/", children: [] },
      { id: 4, title: "Geolocation Selection & Routing", url: "/hosting/geolocation/", children: [] },
      { id: 5, title: "Content Delivery Guidance & Solutions", url: "/hosting/cdn-options/", children: [] },
      { id: 6, title: "Load Balacing Services", url: "/hosting/load-balacing-services/", children: [] },
      { id: 7, title: "Hosting Pacages & Rates", url: "/hosting/managed-hosting-cost/", children: [] },
  ]
}

const SideMenu = ({ state }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);
  const sideMenu = SideMenus[state.router.link];
  return (
      <Container>
        <MenuList>
          {sideMenu ? sideMenu.map((item) => {
            const highlight = item.highlight ? 'high-light': '';
            return <MenuItem  className={highlight}><a href={item.url}>{item.title}</a>{item.children.length>0 ? <ChildrenMenu>{item.children.map((child)=>{ return <li><a href={child.url}>{child.title}</a></li>})}</ChildrenMenu> : null}</MenuItem>
          }) : null}
        </MenuList>
      </Container>
  );
};

export default connect(SideMenu);

const Container = styled.div`
    transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
    padding: 0 1rem;
    background: rgb(39, 42, 64, 1);
    color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    width: 214px;
    height: 100%;
`;

const MenuList = styled.ul`
    list-style-type: none;
    width: 100%;
    margin: 0;
    margin-block-start: 0px;
    padding-inline-start: 0px;
`;

const MenuItem = styled.li`
    display: block;
    list-style: none;
    margin: 0;
    padding: 10px 20px;
    line-height: normal;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    position: relative;
    font-size: 16px;
    transition: 0.4s;
    &:hover {
      transform: scale(1.2);
    }
    &:hover > ul {
      display: block;
      width: 218px;
      right: -195px;
      background: #272a40;
      top: 10px;
      padding-inline-start: 0;
    }

    &.high-light {
      background: #f09;
    }

    a {
      padding: 13px 20px;
      transition: .4s;
      line-height: 20px
    }

`;

const ChildrenMenu = styled.ul`
    list-style-type: none;
    position: absolute;
    display: none;
    li {
      display: block;
      list-style: none;
      margin: 0;
      padding: 10px 20px;
      line-height: normal;
      -webkit-tap-highlight-color: rgba(0,0,0,0);
      position: relative;
      font-size: 16px;
      transition: 0.4s;
    }
`;