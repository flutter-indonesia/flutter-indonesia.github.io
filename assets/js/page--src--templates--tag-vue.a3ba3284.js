(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{220:function(t,s,e){"use strict";var a={name:"Footer"},r=e(92),n=Object(r.a)(a,function(){var t=this.$createElement,s=this._self._c||t;return s("footer",{staticClass:"text-gray-700 text-sm leading-normal flex flex-wrap justify-between mx-auto max-w-3xl px-6 sm:px-12"},[this._m(0),s("div",{staticClass:"w-full sm:w-1/2"},[s("nav",[s("ul",{staticClass:"flex sm:justify-end -mx-2"},[s("li",{staticClass:"px-2"},[s("g-link",{staticClass:"border-b border-transparent hover:border-gray-400 transition-border-color",attrs:{to:"/"}},[this._v("Home")])],1),s("li",{staticClass:"px-2"},[s("g-link",{staticClass:"border-b border-transparent hover:border-gray-400 transition-border-color",attrs:{to:"/about/"}},[this._v("About")])],1),this._m(1),this._m(2)])])])])},[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"w-full sm:w-1/2 mb-4 sm:mb-0"},[e("p",[e("a",{staticClass:"border-b border-transparent hover:border-gray-400 transition-border-color",attrs:{href:"https://github.com/cossssmin/gridsome-starter-bleda"}},[t._v("Bleda")]),t._v(" by "),e("a",{staticClass:"border-b border-transparent hover:border-gray-400 transition-border-color",attrs:{href:"https://twitter.com/cossssmin"}},[t._v("@cossssmin")])]),e("p",[t._v("Built with "),e("a",{staticClass:"border-b border-transparent hover:border-gray-400 transition-border-color",attrs:{href:"https://gridsome.org"}},[t._v("Gridsome")]),t._v(" & "),e("a",{staticClass:"border-b border-transparent hover:border-gray-400 transition-border-color",attrs:{href:"https://tailwindcss.com/"}},[t._v("Tailwind CSS")]),t._v(".")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",{staticClass:"px-2"},[s("a",{staticClass:"border-b border-transparent hover:border-gray-400 transition-border-color",attrs:{href:"/sitemap.xml"}},[this._v("Sitemap")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",{staticClass:"px-2"},[s("a",{staticClass:"border-b border-transparent hover:border-gray-400 transition-border-color",attrs:{href:"/feed.xml"}},[this._v("RSS Feed")])])}],!1,null,null,null);s.a=n.exports},348:function(t,s,e){"use strict";var a=e(1),r=e(95)(!0);a(a.P,"Array",{includes:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),e(144)("includes")},349:function(t,s,e){"use strict";var a=e(1),r=e(96);a(a.P+a.F*e(97)("includes"),"String",{includes:function(t){return!!~r(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},350:function(t,s,e){"use strict";e(348),e(349);var a={props:["base","info"],methods:{previousPage:function(t){return[0,1].includes(t-1)?"".concat(this.basePath,"/"):"".concat(this.basePath,"/").concat(t-1,"/")},nextPage:function(t,s){return s>t?"".concat(this.basePath,"/").concat(t+1,"/"):"".concat(this.basePath,"/").concat(t,"/")}},computed:{basePath:function(){return this.base||""}}},r=e(92),n=Object(r.a)(a,function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",{staticClass:"border-b border-gray-300 mx-auto max-w-3xl px-6 md:px-8 py-16"},[e("nav",{attrs:{role:"navigation","aria-label":"pagination"}},[e("ul",{staticClass:"flex items-center justify-between sm:text-lg lg:text-xl"},[e("li",{staticClass:"lg:w-1/5"},[e("g-link",{staticClass:"text-gray-700 hover:text-black px-4 py-2 transition-color",class:{"pointer-events-none opacity-0":1==t.info.currentPage},attrs:{to:t.previousPage(t.info.currentPage),rel:1==t.info.currentPage?"nofollow":"prev"}},[t._v("\n          ← Previous\n        ")])],1),e("li",{staticClass:"hidden md:flex w-auto text-center text-gray-600 text-base"},[t._v("Page "+t._s(t.info.currentPage)+" of "+t._s(t.info.totalPages))]),e("li",{staticClass:"lg:w-1/5 text-right"},[e("g-link",{staticClass:"text-gray-700 hover:text-black px-4 py-2 transition-color",class:{"pointer-events-none opacity-0":t.info.currentPage==t.info.totalPages},attrs:{to:t.nextPage(t.info.currentPage,t.info.totalPages),rel:t.info.currentPage==t.info.totalPages?"nofollow":"next"}},[t._v("\n          Next →\n        ")])],1)])])])},[],!1,null,null,null);s.a=n.exports},351:function(t,s,e){"use strict";e(93),e(143),e(94);var a=e(219),r=e.n(a),n={props:["post"],computed:{formattedPublishDate:function(){return r()(this.post.datetime).format("DD MMMM, YYYY")}},methods:{formatPublishDate:function(t){return r()(t).format("DD MMMM, YYYY")},excerpt:function(t,s,e){if(t.excerpt)return t.excerpt;s=s||280,e=e||" ...";var a=t.content.replace(/<pre(.|\n)*?<\/pre>/gm,"").replace(/<[^>]+>/gm,"");return a.length>s?"".concat(a.slice(0,s)).concat(e):a},titleCase:function(t){return t.replace("-"," ").split(" ").map(function(t){return t.charAt(0).toUpperCase()+t.substring(1)}).join(" ")}}},o=e(92),i=Object(o.a)(n,function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("article",[e("div",{staticClass:"mx-auto max-w-3xl px-6"},[e("div",{staticClass:"py-8 sm:py-20 border-b border-gray-300"},[e("header",{staticClass:"text-center mb-8"},[e("time",{staticClass:"text-gray-700 text-xs mb-2 uppercase",attrs:{datetime:t.post.datetime}},[t._v(t._s(t.formatPublishDate(t.post.datetime)))]),e("h2",{staticClass:"text-3xl sm:text-4xl leading-tight font-sans mb-1 sm:mb-2"},[e("g-link",{staticClass:"text-black font-bold",attrs:{to:t.post.path+"/"}},[t._v(t._s(t.post.title))])],1),e("p",{staticClass:"text-gray-700 leading-normal text-sm sm:text-base"},[t.post.author?e("span",[t._v("by "),t.post.author?e("g-link",{staticClass:"text-gray-700 capitalize border-b border-transparent hover:border-gray-400 transition-border-color",attrs:{to:t.post.author.path+"/"}},[t._v(t._s(t.titleCase(t.post.author.title)))]):t._e()],1):t._e(),t.post.tags&&t.post.tags.length>0?e("span",[t._v(" in "),e("g-link",{staticClass:"text-gray-700 capitalize border-b border-transparent hover:border-gray-400 transition-border-color",attrs:{to:t.post.tags[0].path+"/"}},[t._v(t._s(t.titleCase(t.post.tags[0].title)))])],1):t._e()])]),e("p",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"leading-normal text-gray-700 text-lg px-2 sm:px-4 md:px-10",domProps:{innerHTML:t._s(t.excerpt(t.post,280," ..."))}})])])])},[],!1,null,null,null);s.a=i.exports},352:function(t,s,e){var a={"./af":221,"./af.js":221,"./ar":222,"./ar-dz":223,"./ar-dz.js":223,"./ar-kw":224,"./ar-kw.js":224,"./ar-ly":225,"./ar-ly.js":225,"./ar-ma":226,"./ar-ma.js":226,"./ar-sa":227,"./ar-sa.js":227,"./ar-tn":228,"./ar-tn.js":228,"./ar.js":222,"./az":229,"./az.js":229,"./be":230,"./be.js":230,"./bg":231,"./bg.js":231,"./bm":232,"./bm.js":232,"./bn":233,"./bn.js":233,"./bo":234,"./bo.js":234,"./br":235,"./br.js":235,"./bs":236,"./bs.js":236,"./ca":237,"./ca.js":237,"./cs":238,"./cs.js":238,"./cv":239,"./cv.js":239,"./cy":240,"./cy.js":240,"./da":241,"./da.js":241,"./de":242,"./de-at":243,"./de-at.js":243,"./de-ch":244,"./de-ch.js":244,"./de.js":242,"./dv":245,"./dv.js":245,"./el":246,"./el.js":246,"./en-SG":247,"./en-SG.js":247,"./en-au":248,"./en-au.js":248,"./en-ca":249,"./en-ca.js":249,"./en-gb":250,"./en-gb.js":250,"./en-ie":251,"./en-ie.js":251,"./en-il":252,"./en-il.js":252,"./en-nz":253,"./en-nz.js":253,"./eo":254,"./eo.js":254,"./es":255,"./es-do":256,"./es-do.js":256,"./es-us":257,"./es-us.js":257,"./es.js":255,"./et":258,"./et.js":258,"./eu":259,"./eu.js":259,"./fa":260,"./fa.js":260,"./fi":261,"./fi.js":261,"./fo":262,"./fo.js":262,"./fr":263,"./fr-ca":264,"./fr-ca.js":264,"./fr-ch":265,"./fr-ch.js":265,"./fr.js":263,"./fy":266,"./fy.js":266,"./ga":267,"./ga.js":267,"./gd":268,"./gd.js":268,"./gl":269,"./gl.js":269,"./gom-latn":270,"./gom-latn.js":270,"./gu":271,"./gu.js":271,"./he":272,"./he.js":272,"./hi":273,"./hi.js":273,"./hr":274,"./hr.js":274,"./hu":275,"./hu.js":275,"./hy-am":276,"./hy-am.js":276,"./id":277,"./id.js":277,"./is":278,"./is.js":278,"./it":279,"./it-ch":280,"./it-ch.js":280,"./it.js":279,"./ja":281,"./ja.js":281,"./jv":282,"./jv.js":282,"./ka":283,"./ka.js":283,"./kk":284,"./kk.js":284,"./km":285,"./km.js":285,"./kn":286,"./kn.js":286,"./ko":287,"./ko.js":287,"./ku":288,"./ku.js":288,"./ky":289,"./ky.js":289,"./lb":290,"./lb.js":290,"./lo":291,"./lo.js":291,"./lt":292,"./lt.js":292,"./lv":293,"./lv.js":293,"./me":294,"./me.js":294,"./mi":295,"./mi.js":295,"./mk":296,"./mk.js":296,"./ml":297,"./ml.js":297,"./mn":298,"./mn.js":298,"./mr":299,"./mr.js":299,"./ms":300,"./ms-my":301,"./ms-my.js":301,"./ms.js":300,"./mt":302,"./mt.js":302,"./my":303,"./my.js":303,"./nb":304,"./nb.js":304,"./ne":305,"./ne.js":305,"./nl":306,"./nl-be":307,"./nl-be.js":307,"./nl.js":306,"./nn":308,"./nn.js":308,"./pa-in":309,"./pa-in.js":309,"./pl":310,"./pl.js":310,"./pt":311,"./pt-br":312,"./pt-br.js":312,"./pt.js":311,"./ro":313,"./ro.js":313,"./ru":314,"./ru.js":314,"./sd":315,"./sd.js":315,"./se":316,"./se.js":316,"./si":317,"./si.js":317,"./sk":318,"./sk.js":318,"./sl":319,"./sl.js":319,"./sq":320,"./sq.js":320,"./sr":321,"./sr-cyrl":322,"./sr-cyrl.js":322,"./sr.js":321,"./ss":323,"./ss.js":323,"./sv":324,"./sv.js":324,"./sw":325,"./sw.js":325,"./ta":326,"./ta.js":326,"./te":327,"./te.js":327,"./tet":328,"./tet.js":328,"./tg":329,"./tg.js":329,"./th":330,"./th.js":330,"./tl-ph":331,"./tl-ph.js":331,"./tlh":332,"./tlh.js":332,"./tr":333,"./tr.js":333,"./tzl":334,"./tzl.js":334,"./tzm":335,"./tzm-latn":336,"./tzm-latn.js":336,"./tzm.js":335,"./ug-cn":337,"./ug-cn.js":337,"./uk":338,"./uk.js":338,"./ur":339,"./ur.js":339,"./uz":340,"./uz-latn":341,"./uz-latn.js":341,"./uz.js":340,"./vi":342,"./vi.js":342,"./x-pseudo":343,"./x-pseudo.js":343,"./yo":344,"./yo.js":344,"./zh-cn":345,"./zh-cn.js":345,"./zh-hk":346,"./zh-hk.js":346,"./zh-tw":347,"./zh-tw.js":347};function r(t){var s=n(t);return e(s)}function n(t){if(!e.o(a,t)){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}return a[t]}r.keys=function(){return Object.keys(a)},r.resolve=n,t.exports=r,r.id=352},356:function(t,s){},367:function(t,s,e){"use strict";var a=e(356),r=e.n(a);s.default=r.a},371:function(t){t.exports=JSON.parse('{"/tag/development":[1,"9d773136"],"/tag/markdown":[1,"3fe960dc"],"/tag/design":[1,"0c48c728"],"/tag/getting-started":[1,"06ea541a"],"/tag/content":[1,"b133580a"],"/tag/literature":[1,"7007be26"],"/tag/dummy":[1,"83c26cc4"],"/tag/dummy/2":[1,"6d0f991c"],"/tag/wiki":[1,"1dda5ef4"],"/tag/art":[1,"68932bd0"],"/tag/space":[1,"3198a0d0"],"/tag/tools":[1,"93821a3c"],"/tag/food":[1,"51f63ba8"]}')},375:function(t,s,e){"use strict";e.r(s);e(94),e(93),e(143),e(219);var a=e(10),r=e(351),n=e(220),o=e(350),i={components:{PostItem:r.a,Pagination:o.a,SiteFooter:n.a},metaInfo:function(){return{title:'Posts tagged "'.concat(this.titleCase(this.$page.tag.title),'"'),meta:[{key:"description",name:"description",content:'Browse posts tagged "'.concat(this.titleCase(this.$page.tag.title),'"')},{property:"og:type",content:"website"},{property:"og:title",content:'Posts tagged "'.concat(this.titleCase(this.$page.tag.title),'"')},{property:"og:description",content:'Browse posts tagged "'.concat(this.titleCase(this.$page.tag.title),'"')},{property:"og:url",content:"".concat(this.config.siteUrl,"/").concat(this.$page.tag.path,"/")},{property:"og:image",content:this.ogImageUrl},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:title",content:'Posts tagged "'.concat(this.titleCase(this.$page.tag.title),'"')},{name:"twitter:description",content:'Browse posts tagged "'.concat(this.titleCase(this.$page.tag.title),'"')},{name:"twitter:site",content:"@cossssmin"},{name:"twitter:creator",content:"@cossssmin"},{name:"twitter:image",content:this.ogImageUrl}]}},methods:{titleCase:function(t){return t.replace("-"," ").split(" ").map(function(t){return t.charAt(0).toUpperCase()+t.substring(1)}).join(" ")}},computed:{config:function(){return a.a},ogImageUrl:function(){return"".concat(this.config.siteUrl,"/images/bleda-card.png")}}},l=e(92),c=e(367),g=Object(l.a)(i,function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("Layout",[e("main",[e("header",[e("div",{staticClass:"max-w-xl md:max-w-3xl xl:max-w-4xl flex flex-col-reverse mx-auto text-center px-6 pt-24 pb-10 md:py-32 border-b border-gray-300"},[e("p",{staticClass:"text-gray-700 leading-normal"},[t._v(t._s(t.$page.tag.belongsTo.totalCount)+" posts in total")]),e("h1",{staticClass:"text-4xl sm:text-5xl md:text-6xl font-sans font-bold mb-2 capitalize"},[t._v(t._s(t.titleCase(t.$page.tag.title)))]),e("svg",{staticClass:"w-5 sm:w-6 fill-current text-gray-500 mx-auto mb-1",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",role:"img","aria-labelledby":"tagIcon"}},[e("title",{attrs:{id:"tagIcon"}},[t._v("Posts tagged")]),e("path",{attrs:{d:"M0 10V2l2-2h8l10 10-10 10L0 10zm4.5-4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"}})])]),e("nav",{staticClass:"absolute top-0 left-0 z-20 mt-6 ml-6"},[e("g-link",{staticClass:"text-sm border text-gray-900 border-gray-400 opacity-75 hover:opacity-100 rounded-full px-4 py-2 transition-opacity",attrs:{to:"/"}},[t._v("← Home")])],1)]),e("section",t._l(t.$page.tag.belongsTo.edges,function(t){return e("post-item",{key:t.node.id,attrs:{post:t.node}})}),1),t.$page.tag.belongsTo.pageInfo.totalPages>1?e("pagination",{attrs:{base:""+t.$page.tag.path,info:t.$page.tag.belongsTo.pageInfo}}):t._e(),e("site-footer",{staticClass:"py-8 sm:py-16"})],1)])},[],!1,null,null,null);"function"==typeof c.default&&Object(c.default)(g);s.default=g.exports}}]);