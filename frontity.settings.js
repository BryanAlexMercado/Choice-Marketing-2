const settings = {
    name: "marketingchoice",
    state: {
        frontity: {
            url: "https://test.frontity.org",
            title: "Online Marketing obsessed w/ AWESOME Ads | Edmonton Web Design",
            description: "Get a 'Choice OMG' strategy to reach more online biz. We create Edmonton web designs and manage ads, build sites, and run online marketing campaigns. ❤️ ChoiceOMG",
        },
    },
    packages: [{
            name: "@frontity/mars-theme",
            state: {
                theme: {
                    menu: [
                        ["CHOICE", "/"],
                        ["Web Design", "/web-design/"],
                        ["Graphic", "/graphic-design/"],
                        ["SEO", "/canadian-seo-agency/"],
                        ["Ads", "/web-advertising/"],
                        ["Hosting", "/hosting/"],
                        ["About", "/company/"],
                        ["Contact", "/contact/"],
                    ],
                    featured: {
                        showOnList: false,
                        showOnPost: false,
                    },
                },
            },
        },
        {
            name: "@frontity/wp-source",
            state: {
                source: {
                    url: "https://www.choice.marketing",
                    homepage: "/home",
                },
            },
        },
        "@frontity/tiny-router",
        "@frontity/html2react",
    ],
};

export default settings;