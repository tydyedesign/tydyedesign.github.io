(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{3162:function(t,e,r){"use strict";r.r(e);r(14),r(12),r(38),r(9),r(10);var o=r(0),c=(r(8),r(15),r(2)),n=r(46);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(source,!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(source).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function d(t,e,r){var o=e.name[e.lang]||e.name["en-US"],c="free-icons"===e.code,n="";return r?(c&&(n+="".concat(t.$t("WEB_APP.SEO.CATEGORY_PACKS.".concat(e.code,".LABEL"),o)," ")),r.shape&&(n+="".concat(t.$t("WEB_APP.SEO.FILTERS.".concat(r.shape.toUpperCase()),"")," ")),r.color&&(n+="".concat(t.$t("WEB_APP.SEO.FILTERS.".concat(r.color.toUpperCase()),"")," ")),c||(n+="".concat(t.$t("WEB_APP.SEO.CATEGORY_PACKS.".concat(e.code,".LABEL"),o)," ")),r.format&&(n+="".concat(t.$t("WEB_APP.SEO.FILTERS.".concat(r.format.toUpperCase()),"PNG")," ")),n.trim()):name}function f(t){var e=t.that,r=t.category,o=t.meta,meta=void 0!==o&&o,c=t.params,n=void 0===c?{}:c,l=function(t,e){var r=e.shape,o=e.color,c=e.format;return r||o||c?!r||o||c?r||!o||c?r||o||!c?"much":"format":"color":"shape":"none"}(0,n),m=meta?"_META":"",d=["free-icons","alphabet","animals","arrows","astrology","baby","beauty","business","characters","cinema","city","clothing","computer-hardware"].some((function(t){return t===r.code})),f=r.name[r.lang]||r.name["en-US"],h=d?".".concat(r.code):"";if("format"===l){var v=n.format.toUpperCase(),C=e.$t("WEB_APP.SEO.CATEGORY_PACKS".concat(h,".DESCRIPTION_").concat(v).concat(m),{category:f.toLowerCase()});return meta||(C+="<br/>".concat(function(t,e,r){var o=t.$t("WEB_APP.SEO.FILTERS.VECTOR"),c="".concat(t.$t("WEB_APP.SEO.CATEGORY_PACKS.".concat(e.code,".LABEL"),e.name[e.lang])),path="/icons/pack/".concat(e.code);return path+="png"===r?"--vector":"--png",t.$t("WEB_APP.SEO.CATEGORY_PACKS.GET_ALSO_FORMAT",{url:path,category:c.toLowerCase(),format:"png"===r?o.toLowerCase():"PNG"})}(e,r,n.format))),C}if("much"===l||"color"===l){var P="free-icons"===r.code?".".concat(r.code):"",E="";return n.shape&&(E+="".concat(e.$t("WEB_APP.SEO.FILTERS.".concat(n.shape.toUpperCase()),"")," ")),n.color&&(E+="".concat(e.$t("WEB_APP.SEO.FILTERS.".concat(n.color.toUpperCase()),"")," ")),n.format&&(E+="".concat(e.$t("WEB_APP.SEO.FILTERS.".concat(n.format.toUpperCase()),"PNG")," ")),P?e.$t("WEB_APP.SEO.CATEGORY_PACKS".concat(P,".DESCRIPTION_FILTERS").concat(m),{filters:E.trim().toLowerCase(),filter_category:"".concat(f.toLowerCase()," ").concat(E.trim().toLowerCase())},"Get free popular icons for user interface and graphic design projects. "):e.$t("WEB_APP.SEO.CATEGORY_PACKS.DESCRIPTION_FILTERS".concat(m),{filters:E.trim().toLowerCase(),category:f.toLowerCase()},"")}return e.$t("WEB_APP.SEO.CATEGORY_PACKS".concat(h,".DESCRIPTION").concat(m),{category:f})}var h={name:"IconsPackPage",layout:"app",scrollToTop:!0,data:function(){return{category:void 0,isLoading:!1,allIconsLoaded:!1,activeGrid:void 0,fetchComplete:!1,parsedParams:void 0,popularPlatforms:{ios7:!0,ios11:!0,androidL:!0,color:!0,win10:!0,Dusk_Wired:!0,p1em:!0}}},computed:m({},Object(c.e)({seo:function(t){return t.seo.data},platform:function(t){return t.platform.apiCode},platforms:function(t){return t.appInfo.platforms},pack:function(t){return t.pack},lang:function(t){return t.i18n.locale},colors:function(t){return t.filters.colorsList},filters:function(t){return t.filters}}),{platformIcons:function(){var t=this,e={};if(this.platforms)return Object.keys(this.platforms).filter((function(t){return"all"!==t})).map((function(r){if(t.pack.mainPreviews){e[r]=[];var o=t.pack.mainPreviews.find((function(t){return t.styleApiCode===r}));o&&o.previews.map((function(t){e[r].length<8&&e[r].push({commonName:t,platform:r})}))}})),Object.keys(e).length?e:null},getColorIcon:function(){return this.colors?this.colors[this.parsedParams.color||"black"].value:"000000"}}),asyncData:function(t){t.app;var e=t.params;t.store,t.redirect;if(e.pack)return{parsedParams:Object(n.a)(e.pack),error:void 0}},mounted:function(){this.$route.params.pack||this.$nuxt.error({statusCode:404,message:"Page not found"}),this.category||this.error||this.fetchData(this.$route.params),this.category&&this.$route.params.pack!==this.category.code&&(this.category=void 0,this.fetchData(this.$route.params))},methods:{getCurrentLink:function(t){return this.parsedParams&&(this.parsedParams.format&&(t+="--".concat(this.parsedParams.format)),this.parsedParams.color&&(t+="--".concat(this.parsedParams.color)),this.parsedParams.shape&&(t+="--".concat(this.parsedParams.shape))),t},platformTitle:function(t){return"office40"===t?"Office M":this.$t("PLATFORMS.".concat(t,".SHORT_TITLE"),this.platforms[t]?this.platforms[t].title:t)||(this.platforms[t]?this.platforms[t].title:t)},platformSeoCode:function(t){return this.platforms[t]?this.platforms[t].seoCode:t},fetchData:function(t){var e=this;return new Promise((function(r){e.isLoading=!0,function(t){var e=t.app,r=t.params,o=t.store,c=Object(n.a)(r.pack);return new Promise((function(t){o.dispatch("setPlatform","all"),o.dispatch("setPack",c.$rootPath);var n=o.state,l=n.i18n.locale,h=o.getters.hostUrl||"https://icons8.com",v=e.$t("WEB_APP.SEO.TITLE",{title:d(e,m({},n.pack,{lang:l}),c)});n.pack.free&&n.auth.user.isGuest&&(v+='<span class="badge is-big">Free SVG</span>');var C=f({that:e,category:m({},n.pack,{lang:l}),params:c});"free-icons"!==n.pack.code&&(C+="<br/>".concat(e.$t("WEB_APP.SEO.CATEGORY_PACKS.DESCRIPTION_ADDITION")));var P=f({that:e,category:m({},n.pack,{lang:l}),meta:!0,params:c});o.dispatch("updateSEO",{titlePage:v,descriptionPage:C,title:v,description:P,canonical:"".concat(h,"/icon/pack/").concat(r.pack),image:n.pack.sharePreview}),t({fetchComplete:!0,parsedParams:c})}))}({app:e,store:e.$store,params:t}).then((function(t){e.isLoading=!1,e.category=t.category,e.fetchComplete=t.fetchComplete,r()})).catch((function(t){e.isLoading=!1,console.error("error",t),e.checkError(t),r()}))}))},checkError:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.error;t&&(console.log("this.error",this.error),this.error=void 0)}}},v=(r(943),r(1)),component=Object(v.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"icons-pack-page"},[!t.platformIcons&&t.pack.code?[r("div",{staticClass:"app-page-section custom-padding"},[r("icon-placeholder",{attrs:{type:"description"}})],1)]:[r("div",{staticClass:"app-page-section custom-padding"},[r("app-header")],1)],!t.platformIcons&&t.pack.code?[r("div",{staticClass:"app-page-section custom-padding"},[r("icon-placeholder",{attrs:{count:12,type:"card"}})],1)]:[t.platformIcons?r("div",{staticClass:"app-page-section custom-padding"},[r("h6",{staticClass:"app-page-section-title"},[t._v(t._s(t.$t("ICON.ICONS.PACK.POPULAR_STYLES")))]),r("div",{staticClass:"preview-grid"},[t._l(t.popularPlatforms,(function(e,o){return t.platformIcons[o]&&t.platformIcons[o].length?r("nuxt-link",{key:o,staticClass:"preview-grid-item",class:{"is-white":"white"===t.filters.color},attrs:{to:t.getCurrentLink("/icon/pack/"+t.pack.code+"/"+t.platformSeoCode(o))}},[r("div",{staticClass:"preview-icons-grid"},[t._l(t.platformIcons[o],(function(e){return r("div",{key:e.id,staticClass:"preview-icons-item"},[r("app-icon",{attrs:{icon:e,color:t.getColorIcon}})],1)})),r("div",{staticClass:"preview-icons-item is-empty"}),r("div",{staticClass:"preview-icons-item is-empty"}),r("div",{staticClass:"preview-icons-item is-empty"})],2),r("div",{staticClass:"preview-grid-title"},[t._v(t._s(t.platformTitle(o)))])]):t._e()})),r("div",{staticClass:"preview-grid-item is-empty"}),r("div",{staticClass:"preview-grid-item is-empty"}),r("div",{staticClass:"preview-grid-item is-empty"}),r("div",{staticClass:"preview-grid-item is-empty"})],2),r("h6",{staticClass:"app-page-section-title"},[t._v(t._s(t.$t("ICON.ICONS.PACK.OTHER_STYLES")))]),t.platformIcons?r("div",{staticClass:"preview-grid"},[t._l(t.platformIcons,(function(e,o){return!t.popularPlatforms[o]&&t.platformIcons[o]&&t.platformIcons[o].length?r("nuxt-link",{key:o,staticClass:"preview-grid-item",class:{"is-white":"white"===t.filters.color},attrs:{to:t.getCurrentLink("/icon/pack/"+t.pack.code+"/"+t.platformSeoCode(o))}},[r("div",{staticClass:"preview-icons-grid"},[t._l(t.platformIcons[o],(function(e){return r("div",{key:e.id,staticClass:"preview-icons-item"},[r("app-icon",{attrs:{icon:e,color:t.getColorIcon}})],1)})),r("div",{staticClass:"preview-icons-item is-empty"}),r("div",{staticClass:"preview-icons-item is-empty"}),r("div",{staticClass:"preview-icons-item is-empty"})],2),r("div",{staticClass:"preview-grid-title"},[t._v(t._s(t.platformTitle(o)))])]):t._e()})),r("div",{staticClass:"preview-grid-item is-empty"}),r("div",{staticClass:"preview-grid-item is-empty"}),r("div",{staticClass:"preview-grid-item is-empty"}),r("div",{staticClass:"preview-grid-item is-empty"})],2):t._e()]):t._e()]],2)}),[],!1,null,"8def9722",null);e.default=component.exports},811:function(t,e,r){var content=r(944);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(7).default)("2388d596",content,!0,{sourceMap:!1})},943:function(t,e,r){"use strict";var o=r(811);r.n(o).a},944:function(t,e,r){(t.exports=r(6)(!1)).push([t.i,".icons-pack-page .nothing-found[data-v-8def9722]{padding:2rem;text-align:center}.icons-pack-page .nothing-found .nothing-found-title[data-v-8def9722]{font-size:2rem}.icons-pack-page .preview-grid-item.is-white[data-v-8def9722]{background:rgba(26,26,26,.15)}",""])}}]);