(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 1994:
/***/ ((module) => {

// Exports
module.exports = {
	"sectionblog": "blogpage_sectionblog__Gjng2",
	"containerblog": "blogpage_containerblog__CzCxS",
	"posts": "blogpage_posts__c_u5G",
	"post": "blogpage_post__QOnIE",
	"postname": "blogpage_postname__I0pMi",
	"more": "blogpage_more__y_3mm"
};


/***/ }),

/***/ 1115:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Blog),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "contentful"
const external_contentful_namespaceObject = require("contentful");
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./Components/Navbar.js + 1 modules
var Navbar = __webpack_require__(6284);
// EXTERNAL MODULE: ./Components/Footer.js
var Footer = __webpack_require__(558);
// EXTERNAL MODULE: ./styles/blogpage.module.scss
var blogpage_module = __webpack_require__(1994);
var blogpage_module_default = /*#__PURE__*/__webpack_require__.n(blogpage_module);
// EXTERNAL MODULE: ./Components/Layout.js
var Layout = __webpack_require__(7885);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./Components/PostCard.js



function PostCard({ blogPage  }) {
    const { title , slug , thumbnail  } = blogPage.fields;
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (blogpage_module_default()).post,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (blogpage_module_default()).blogImage,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "https:" + thumbnail.fields.file.url,
                        // width={thumbnail.fields.file.details.image.width}
                        // height={thumbnail.fields.file.details.image.height}
                        width: 424,
                        height: 248,
                        alt: "strategy"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: (blogpage_module_default()).postname,
                    children: title
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: (blogpage_module_default()).more,
                    children: "Read more"
                })
            ]
        })
    }));
};

;// CONCATENATED MODULE: ./pages/index.js






// import Link from "next/link";
// import Image from "next/image";
// import Post2 from "../public/post/Blog01.jpg";
// import Post3 from "../public/post/Blog02.jpg";
// import Post1 from "../public/post/Blog03.jpg";


async function getStaticProps() {
    const client = (0,external_contentful_namespaceObject.createClient)({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_KEY
    });
    const res = await client.getEntries({
        content_type: "blogPage"
    });
    return {
        props: {
            posts: res.items
        }
    };
}
function Blog({ posts  }) {
    console.log(posts);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Layout/* default */.Z, {
        title: "Blog - Artelle Creative",
        keywords: "posts blog Artelle creative web development",
        description: "Latest stories, insights, and ideas of Artelle Creative.",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Navbar/* Navbar */.w, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (blogpage_module_default()).sectionblog,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (blogpage_module_default()).containerblog,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                children: "Latest stories, insights and ideas"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (blogpage_module_default()).posts,
                                children: posts.map((blogPage)=>/*#__PURE__*/ jsx_runtime_.jsx(PostCard, {
                                        blogPage: blogPage
                                    }, blogPage.sys.id)
                                )
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Footer/* Footer */.$, {})
                ]
            })
        ]
    }));
};


/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,675,885,393], () => (__webpack_exec__(1115)));
module.exports = __webpack_exports__;

})();