(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0673":function(t,e,n){"use strict";var r=n("7d37"),i=n.n(r);i.a},"16aa":function(t,e,n){"use strict";var r=n("3e96"),i=n.n(r);i.a},"1b9c":function(t,e,n){"use strict";(function(e){var r=n("e6e0"),i=n("ffc9"),s={"Content-Type":"application/x-www-form-urlencoded"};function o(t,e){!r.isUndefined(t)&&r.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}function a(){var t;return("undefined"!==typeof XMLHttpRequest||"undefined"!==typeof e&&"[object process]"===Object.prototype.toString.call(e))&&(t=n("5dc1")),t}var c={adapter:a(),transformRequest:[function(t,e){return i(e,"Accept"),i(e,"Content-Type"),r.isFormData(t)||r.isArrayBuffer(t)||r.isBuffer(t)||r.isStream(t)||r.isFile(t)||r.isBlob(t)?t:r.isArrayBufferView(t)?t.buffer:r.isURLSearchParams(t)?(o(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):r.isObject(t)?(o(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"===typeof t)try{t=JSON.parse(t)}catch(e){}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(t){c.headers[t]={}})),r.forEach(["post","put","patch"],(function(t){c.headers[t]=r.merge(s)})),t.exports=c}).call(this,n("4362"))},"20ce":function(t,e,n){"use strict";var r=n("68ea");t.exports=function(t,e,n,i,s){var o=new Error(t);return r(o,e,n,i,s)}},"234e":function(t,e,n){"use strict";var r=n("ebb0"),i=n.n(r);i.a},"295c":function(t,e,n){"use strict";var r=n("e6e0"),i=n("963e"),s=n("9c5c"),o=n("8f17"),a=n("b9ec");function c(t){this.defaults=t,this.interceptors={request:new s,response:new s}}c.prototype.request=function(t){"string"===typeof t?(t=arguments[1]||{},t.url=arguments[0]):t=t||{},t=a(this.defaults,t),t.method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var e=[o,void 0],n=Promise.resolve(t);this.interceptors.request.forEach((function(t){e.unshift(t.fulfilled,t.rejected)})),this.interceptors.response.forEach((function(t){e.push(t.fulfilled,t.rejected)}));while(e.length)n=n.then(e.shift(),e.shift());return n},c.prototype.getUri=function(t){return t=a(this.defaults,t),i(t.url,t.params,t.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(t){c.prototype[t]=function(e,n){return this.request(r.merge(n||{},{method:t,url:e}))}})),r.forEach(["post","put","patch"],(function(t){c.prototype[t]=function(e,n,i){return this.request(r.merge(i||{},{method:t,url:e,data:n}))}})),t.exports=c},"308c":function(t,e,n){"use strict";var r=n("20ce");t.exports=function(t,e,n){var i=n.config.validateStatus;!i||i(n.status)?t(n):e(r("Request failed with status code "+n.status,n.config,null,n.request,n))}},"3e96":function(t,e,n){},4362:function(t,e,n){e.nextTick=function(t){var e=Array.prototype.slice.call(arguments);e.shift(),setTimeout((function(){t.apply(null,e)}),0)},e.platform=e.arch=e.execPath=e.title="browser",e.pid=1,e.browser=!0,e.env={},e.argv=[],e.binding=function(t){throw new Error("No such module. (Possibly not yet loaded)")},function(){var t,r="/";e.cwd=function(){return r},e.chdir=function(e){t||(t=n("df7c")),r=t.resolve(e,r)}}(),e.exit=e.kill=e.umask=e.dlopen=e.uptime=e.memoryUsage=e.uvCounters=function(){},e.features={}},"48a6":function(t,e,n){"use strict";function r(t){this._conn=t}r.prototype={retrieve:function(t,e){return this._conn.get("feeds/"+t+"/",e)}},t.exports=r},5545:function(t,e,n){"use strict";var r=n("e6e0");t.exports=r.isStandardBrowserEnv()?function(){var t,e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function i(t){var r=t;return e&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return t=i(window.location.href),function(e){var n=r.isString(e)?i(e):e;return n.protocol===t.protocol&&n.host===t.host}}():function(){return function(){return!0}}()},"58f3":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"clients"}},[n("div",{staticClass:"section"},[n("div",{staticClass:"container"},[n("h1",{staticClass:"title is-1"},[t._v("Clients")]),n("div",{staticClass:"field"},[n("label",{staticClass:"label"},[t._v("Email")]),n("div",{staticClass:"control"},[n("input",{staticClass:"input",attrs:{type:"text",placeholder:"Email"}})]),n("a",{attrs:{href:"#"}},[t._v("Not registered yet?")])]),n("div",{staticClass:"field"},[n("label",{staticClass:"label"},[t._v("Password")]),n("div",{staticClass:"control"},[n("input",{staticClass:"input",attrs:{type:"password",placeholder:"Password"}})]),n("a",{attrs:{href:"#"}},[t._v("Forgot password?")])]),n("button",{staticClass:"button"},[t._v("LOG IN")])])])])}],s=(n("7677"),n("2877")),o={},a=Object(s["a"])(o,r,i,!1,null,null,null);e["default"]=a.exports},"5b40":function(t,e,n){"use strict";function r(t){this._conn=t}r.prototype={list:function(t,e){return this._conn.get("pages/"+t+"/",e)},retrieve:function(t,e,n){return this._conn.get("pages/"+t+"/"+e+"/",n)}},t.exports=r},"5da6":function(t,e,n){"use strict";var r=n("e6e0");t.exports=function(t,e,n){return r.forEach(n,(function(n){t=n(t,e)})),t}},"5dc1":function(t,e,n){"use strict";var r=n("e6e0"),i=n("308c"),s=n("963e"),o=n("cf35"),a=n("ea73"),c=n("5545"),u=n("20ce");t.exports=function(t){return new Promise((function(e,l){var f=t.data,d=t.headers;r.isFormData(f)&&delete d["Content-Type"];var h=new XMLHttpRequest;if(t.auth){var p=t.auth.username||"",v=t.auth.password||"";d.Authorization="Basic "+btoa(p+":"+v)}var m=o(t.baseURL,t.url);if(h.open(t.method.toUpperCase(),s(m,t.params,t.paramsSerializer),!0),h.timeout=t.timeout,h.onreadystatechange=function(){if(h&&4===h.readyState&&(0!==h.status||h.responseURL&&0===h.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in h?a(h.getAllResponseHeaders()):null,r=t.responseType&&"text"!==t.responseType?h.response:h.responseText,s={data:r,status:h.status,statusText:h.statusText,headers:n,config:t,request:h};i(e,l,s),h=null}},h.onabort=function(){h&&(l(u("Request aborted",t,"ECONNABORTED",h)),h=null)},h.onerror=function(){l(u("Network Error",t,null,h)),h=null},h.ontimeout=function(){var e="timeout of "+t.timeout+"ms exceeded";t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),l(u(e,t,"ECONNABORTED",h)),h=null},r.isStandardBrowserEnv()){var g=n("a87b"),b=(t.withCredentials||c(m))&&t.xsrfCookieName?g.read(t.xsrfCookieName):void 0;b&&(d[t.xsrfHeaderName]=b)}if("setRequestHeader"in h&&r.forEach(d,(function(t,e){"undefined"===typeof f&&"content-type"===e.toLowerCase()?delete d[e]:h.setRequestHeader(e,t)})),r.isUndefined(t.withCredentials)||(h.withCredentials=!!t.withCredentials),t.responseType)try{h.responseType=t.responseType}catch(y){if("json"!==t.responseType)throw y}"function"===typeof t.onDownloadProgress&&h.addEventListener("progress",t.onDownloadProgress),"function"===typeof t.onUploadProgress&&h.upload&&h.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then((function(t){h&&(h.abort(),l(t),h=null)})),void 0===f&&(f=null),h.send(f)}))}},"68ea":function(t,e,n){"use strict";t.exports=function(t,e,n,r,i){return t.config=e,n&&(t.code=n),t.request=r,t.response=i,t.isAxiosError=!0,t.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},t}},"6b0f":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"blog"}},[n("div",{staticClass:"section foreach"},[n("div",{staticClass:"container"},[n("h1",{},[t._v(t._s(t.post.title))]),n("div",{staticClass:"blog"},[n("div",{staticClass:"content"},[n("p",{staticClass:"author"},[t._v("By "+t._s(t.post.author.first_name)+" "+t._s(t.post.author.last_name)),n("br"),t._v(t._s(t.post.published.substring(0,10)))]),n("p",{staticClass:"body",domProps:{innerHTML:t._s(t.post.body)}})]),n("div",{staticClass:"archive"},[n("h1",{staticClass:"title"},[t._v("Archive")]),n("ul",t._l(t.categories,(function(e){return n("li",{key:e.slug},[n("router-link",{attrs:{to:"/intelligence/"}},[t._v(" "+t._s(e.name)+" ")])],1)})),0)])]),n("div",{staticClass:"comments"},[n("Disqus",{attrs:{shortname:"hume-works",pageConfig:t.pageConfig}})],1)])]),n("AddThis",{attrs:{publicId:"ra-5fe10eeb4e8f4f7b"}})],1)},i=[],s=n("b396"),o=n.n(s),a="Disqus shortname is required. (To resolve this, go to: https://ktquez.github.io/vue-disqus/setup.html#installation)",c=["api_key","author_s3","category_id","identifier","integration","language","remote_auth_s3","slug","title","url"],u=["name","button","icon","url","logout","width","height"],l=["afterRender","onInit","onIdentify","beforeComment","onNewComment","onPaginate","onReady","preData","preInit","preReset"],f=function(t){return requestAnimationFrame((function(){return requestAnimationFrame(t)}))};function d(t,e,n,r,i,s,o,a,c,u){"boolean"!=typeof o&&(c=a,a=o,o=!1);var l,f="function"==typeof n?n.options:n;if(t&&t.render&&(f.render=t.render,f.staticRenderFns=t.staticRenderFns,f._compiled=!0,i&&(f.functional=!0)),r&&(f._scopeId=r),s?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,c(t)),t&&t._registeredComponents&&t._registeredComponents.add(s)},f._ssrRegister=l):e&&(l=o?function(t){e.call(this,u(t,this.$root.$options.shadowRoot))}:function(t){e.call(this,a(t))}),l)if(f.functional){var d=f.render;f.render=function(t,e){return l.call(e),d(t,e)}}else{var h=f.beforeCreate;f.beforeCreate=h?[].concat(h,l):[l]}return n}var h=d({render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticStyle:{"min-height":"200px"},attrs:{id:"disqus_thread"}})},staticRenderFns:[]},void 0,{name:"Disqus",props:{shortname:String,pageConfig:{type:Object,validator:function(t){return Object.keys(t).every((function(t){return c.includes(t)}))}},ssoConfig:{type:Object,validator:function(t){return Object.keys(t).every((function(t){return u.includes(t)}))}},lang:{type:String,default:"en"},lazy:{type:Boolean,default:!0},lazyConfig:{type:Object,default:function(){return{root:null,rootMargin:"300px",threshold:.5}}}},data:function(){return{observer:null}},computed:{getShortname:function(){var t=this.shortname?this.shortname:this.$disqus?this.$disqus.shortname:null;if(!t)throw new Error(a);return t}},watch:{lang:function(){this.reset()}},mounted:function(){if(this.lazy)return this.observerDisqus();this.init()},methods:{init:function(){var t=this;if(this.$disqus&&(this.$disqus.reset=this.reset),window.DISQUS)return this.reset();var e=this.setBaseConfig;window.disqus_config=function(){e(this)},this.loadEmbedScript(),this.$route&&this.$watch("$route.path",(function(){return t.reset()}))},reset:function(t){void 0===t&&(t=window.DISQUS);var e=this.setBaseConfig;t.reset({reload:!0,config:function(){e(this)}})},observerDisqus:function(){if("IntersectionObserver"in window)return this.observer=new IntersectionObserver(this.handleObserver,this.lazyConfig),this.observer.observe(this.$el);this.init()},handleObserver:function(t){var e=this;t.forEach((function(t){t.isIntersecting&&(e.observer.disconnect(),e.init())}))},loadEmbedScript:function(){var t=document,e=t.createElement("script");e.setAttribute("id","embed-disqus"),e.setAttribute("data-timestamp",+new Date),e.type="text/javascript",e.async=!0,e.src="//"+this.getShortname+".disqus.com/embed.js",(t.head||t.body).appendChild(e)},setBaseConfig:function(t){this.setPageConfig(t),this.cbDisqus(t),this.ssoConfig&&Object.keys(this.ssoConfig).length&&Object.assign(t.sso,this.ssoConfig),t.language=this.lang},setPageConfig:function(t){var e={url:document.baseURI,identifier:this.$route?this.$route.path:window.location.pathname};Object.assign(t.page,e),this.pageConfig&&Object.keys(this.pageConfig).length&&Object.assign(t.page,this.pageConfig)},cbDisqus:function(t){var e=this;l.forEach((function(n){t.callbacks[n]=[function(t){e.$emit(n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().replace("on-",""),t)}]}))}}},void 0,!1,void 0,!1,void 0,void 0,void 0),p=d({render:function(){var t=this.$createElement;return(this._self._c||t)(this.tag,{tag:"component",staticClass:"disqus-comment-count",attrs:{href:this.getHref,"data-disqus-url":this.getUrl,"data-disqus-identifier":this.identifier}})},staticRenderFns:[]},void 0,{name:"DisqusCount",inheritAttrs:!1,props:{url:String,shortname:String,identifier:{type:String,required:!0},tag:{type:String,default:"span"}},mounted:function(){this.init()},computed:{getHref:function(){return"a"===this.tag?this.url+"#disqus_thread":null},getUrl:function(){return"span"===this.tag?this.url:null},getShortname:function(){var t=this.shortname?this.shortname:this.$disqus?this.$disqus.shortname:null;if(!t)throw new Error(a);return t}},methods:{init:function(){var t=this;if("DISQUSWIDGETS"in window)return f((function(){return t.reset()}));this.loadCountScript(),this.$route&&this.$watch("$route.path",(function(){return f((function(){return t.reset()}))}))},reset:function(t){void 0===t&&(t=window.DISQUSWIDGETS),t.getCount({reset:!0})},loadCountScript:function(){if(!document.getElementById("dsq-count-scr")){var t=document,e=t.createElement("script");e.async=!0,e.id="dsq-count-scr",e.src="//"+this.getShortname+".disqus.com/count.js",(t.head||t.body).appendChild(e)}}}},void 0,!1,void 0,!1,void 0,void 0,void 0);function v(t,e){void 0===e&&(e={}),t.component("Disqus",h),t.component("DisqusCount",p),t.prototype.$disqus={shortname:e.shortname||null,reset:null}}"undefined"!=typeof window&&void 0!==window.Vue&&window.Vue.use(v);var m=n("91c5"),g=n.n(m),b=o()("2072fdd812123a2dd1a3f11b79c99b9b24c5faf5"),y={name:"BlogPost",data:function(){return{post:Object,categories:Object,pageConfig:{url:window.location.href,identifier:this.$route.params.slug}}},components:{Disqus:h,AddThis:g.a},created:function(){this.getPost(),this.getCategories()},methods:{getPost:function(){var t=this;b.post.retrieve(this.$route.params.slug).then((function(e){t.post=e.data.data}))},getCategories:function(){var t=this;b.category.list().then((function(e){t.categories=e.data.data}))}}},_=y,C=(n("16aa"),n("2877")),w=Object(C["a"])(_,r,i,!1,null,null,null);e["default"]=w.exports},"6b34":function(t,e,n){"use strict";var r=n("e6e0"),i=n("b326"),s=n("295c"),o=n("b9ec"),a=n("1b9c");function c(t){var e=new s(t),n=i(s.prototype.request,e);return r.extend(n,s.prototype,e),r.extend(n,e),n}var u=c(a);u.Axios=s,u.create=function(t){return c(o(u.defaults,t))},u.Cancel=n("cc3f"),u.CancelToken=n("e14b"),u.isCancel=n("871d"),u.all=function(t){return Promise.all(t)},u.spread=n("9788"),t.exports=u,t.exports.default=u},"71b6":function(t,e,n){"use strict";function r(t){this._conn=t}r.prototype={list:function(t){return this._conn.get("categories/",t)},retrieve:function(t,e){return this._conn.get("categories/"+t+"/",e)}},t.exports=r},7677:function(t,e,n){"use strict";var r=n("8bb9"),i=n.n(r);i.a},"7d37":function(t,e,n){},8020:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"intelligence"}},[n("div",{staticClass:"section foreach"},[n("div",{staticClass:"container"},[n("h1",{staticClass:"title is-1"},[t._v("Intelligence")]),n("div",{staticClass:"blog"},[n("div",{staticClass:"postlist"},t._l(t.posts,(function(e){return n("div",{key:e.slug,staticClass:"post"},[n("router-link",{attrs:{to:"/intelligence/"+e.slug}},[n("h1",{staticClass:"title"},[t._v(" "+t._s(e.title)+" ")])]),n("p",{staticClass:"info"},[t._v(" By "+t._s(e.author.first_name)+" "+t._s(e.author.last_name)+" "+t._s(e.published.substring(0,10))+" ")]),n("div",{staticClass:"categories"},t._l(e.categories,(function(e){return n("p",{key:e.slug},[t._v(" "+t._s(e.name)+" ")])})),0)],1)})),0),n("div",{staticClass:"archive"},[n("h1",{staticClass:"title"},[t._v("Archive")]),n("ul",t._l(t.categories,(function(e){return n("li",{key:e.slug},[n("router-link",{attrs:{to:"/intelligence/"}},[t._v(" "+t._s(e.name)+" ")])],1)})),0)])])])])])},i=[],s=n("b396"),o=n.n(s),a=o()("2072fdd812123a2dd1a3f11b79c99b9b24c5faf5"),c={name:"Intelligence",data:function(){return{posts:Array,categories:Array}},mounted:function(){this.getPosts(),this.getCategories()},methods:{getPosts:function(){var t=this;a.post.list().then((function(e){t.posts=e.data.data}))},getCategories:function(){var t=this;a.category.list().then((function(e){t.categories=e.data.data}))}}},u=c,l=(n("234e"),n("2877")),f=Object(l["a"])(u,r,i,!1,null,null,null);e["default"]=f.exports},8247:function(t,e,n){"use strict";var r=n("eba7"),i=n.n(r);i.a},"871d":function(t,e,n){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},"8b49":function(t,e,n){"use strict";function r(t){this._conn=t}r.prototype={list:function(t){return this._conn.get("posts/",t)},retrieve:function(t,e){return this._conn.get("posts/"+t+"/",e)},search:function(t,e){e=e||{};return e.query=t||"",this._conn.get("search/",e)}},t.exports=r},"8bb9":function(t,e,n){},"8cc2":function(t,e,n){"use strict";function r(t){this._conn=t}r.prototype={list:function(t){return this._conn.get("authors/",t)},retrieve:function(t,e){return this._conn.get("authors/"+t+"/",e)}},t.exports=r},"8f17":function(t,e,n){"use strict";var r=n("e6e0"),i=n("5da6"),s=n("871d"),o=n("1b9c");function a(t){t.cancelToken&&t.cancelToken.throwIfRequested()}t.exports=function(t){a(t),t.headers=t.headers||{},t.data=i(t.data,t.headers,t.transformRequest),t.headers=r.merge(t.headers.common||{},t.headers[t.method]||{},t.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(e){delete t.headers[e]}));var e=t.adapter||o.adapter;return e(t).then((function(e){return a(t),e.data=i(e.data,e.headers,t.transformResponse),e}),(function(e){return s(e)||(a(t),e&&e.response&&(e.response.data=i(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)}))}},"91c5":function(t,e){t.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(t,e,n){"use strict";(function(t){e.a={name:"AddThis",props:{publicId:{type:String,required:!0},cdn:{type:String,default:"//s7.addthis.com/js/300/addthis_widget.js"},async:{type:Boolean,required:!1}},mounted(){if(t.browser){if(null!==document.getElementById("addthis-share"))return window.addthis&&window.addthis.layers&&window.addthis.layers.refresh();const t=document.createElement("script");t.setAttribute("id","addthis-share"),t.setAttribute("src",`${this.cdn}#pubid=${this.publicId}`),this.async&&t.setAttribute("async",!0),document.body.appendChild(t)}}}}).call(this,n(1))},function(t,e){var n,r,i=t.exports={};function s(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(t){if(n===setTimeout)return setTimeout(t,0);if((n===s||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:s}catch(t){n=s}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(t){r=o}}();var c,u=[],l=!1,f=-1;function d(){l&&c&&(l=!1,c.length?u=c.concat(u):f=-1,u.length&&h())}function h(){if(!l){var t=a(d);l=!0;for(var e=u.length;e;){for(c=u,u=[];++f<e;)c&&c[f].run();f=-1,e=u.length}c=null,l=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function p(t,e){this.fun=t,this.array=e}function v(){}i.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];u.push(new p(t,e)),1!==u.length||l||a(h)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=v,i.addListener=v,i.once=v,i.off=v,i.removeListener=v,i.removeAllListeners=v,i.emit=v,i.prependListener=v,i.prependOnceListener=v,i.listeners=function(t){return[]},i.binding=function(t){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(t){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(t,e,n){"use strict";n.r(e);var r=function(){var t=this.$createElement;return(this._self._c||t)("div",this._b({staticClass:"addthis_inline_share_toolbox"},"div",this.$attrs,!1))};r._withStripped=!0;var i=function(t,e,n,r,i,s,o,a){var c,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),s&&(u._scopeId="data-v-"+s),o?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},u._ssrRegister=c):i&&(c=a?function(){i.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:i),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(t,e){return c.call(e),l(t,e)}}else{var f=u.beforeCreate;u.beforeCreate=f?[].concat(f,c):[c]}return{exports:t,options:u}}(n(0).a,r,[],!1,null,null,null);i.options.__file="src/AddThis.vue";var s=i.exports;e.default=s}])},"963e":function(t,e,n){"use strict";var r=n("e6e0");function i(t){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}t.exports=function(t,e,n){if(!e)return t;var s;if(n)s=n(e);else if(r.isURLSearchParams(e))s=e.toString();else{var o=[];r.forEach(e,(function(t,e){null!==t&&"undefined"!==typeof t&&(r.isArray(t)?e+="[]":t=[t],r.forEach(t,(function(t){r.isDate(t)?t=t.toISOString():r.isObject(t)&&(t=JSON.stringify(t)),o.push(i(e)+"="+i(t))})))})),s=o.join("&")}if(s){var a=t.indexOf("#");-1!==a&&(t=t.slice(0,a)),t+=(-1===t.indexOf("?")?"?":"&")+s}return t}},9788:function(t,e,n){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},"9c5c":function(t,e,n){"use strict";var r=n("e6e0");function i(){this.handlers=[]}i.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},i.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},i.prototype.forEach=function(t){r.forEach(this.handlers,(function(e){null!==e&&t(e)}))},t.exports=i},a87b:function(t,e,n){"use strict";var r=n("e6e0");t.exports=r.isStandardBrowserEnv()?function(){return{write:function(t,e,n,i,s,o){var a=[];a.push(t+"="+encodeURIComponent(e)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(i)&&a.push("path="+i),r.isString(s)&&a.push("domain="+s),!0===o&&a.push("secure"),document.cookie=a.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},b17f:function(t,e,n){"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},b326:function(t,e,n){"use strict";t.exports=function(t,e){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return t.apply(e,n)}}},b396:function(t,e,n){"use strict";var r="1.1.3",i=n("e6df"),s={Post:n("8b49"),Category:n("71b6"),Tag:n("e080"),Author:n("8cc2"),Feed:n("48a6"),Content:n("b499"),Page:n("5b40")};function o(t,e,n,r){if(!(this instanceof o))return new o(t,e,n,r);if(!t)throw"ButterCMS API token not set";e=e||!1,n=n||3e3;var i=this._prepMethods(t,e,n,r);this._prepResources(i)}o.prototype={_prepResources:function(t){for(var e in s)this[e[0].toLowerCase()+e.substring(1)]=new s[e](t)},_prepMethods:function(t,e,n,s){return{get:function(o,a){var c=i.create({baseURL:"https://api.buttercms.com/v2",timeout:n,headers:{"X-Butter-Client":"JS/"+r}});s&&s(c);a=a||{};return a.auth_token=t,e&&(a.test=1,a.preview=1),c.get(o,{params:a})}}}},t.exports=o},b499:function(t,e,n){"use strict";function r(t){this._conn=t}r.prototype={retrieve:function(t,e){t=t||[],e=e||{};var n=Object.assign({keys:t.join()},e);return this._conn.get("content/",n)}},t.exports=r},b8fa:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"contact"}},[n("div",{staticClass:"section"},[n("div",{staticClass:"container"},[n("div",{staticClass:"content has-text-centered"},[n("h1",{staticClass:"title"},[t._v("The Hume Team")]),n("p",[n("span",{staticClass:"subhead"},[t._v("Leaders in trust-based design.")]),n("br"),t._v("Grounded in superb data storytelling, we co-create the human intelligence and media you need to:")]),n("p",[t._v("Identify emerging markets "),n("br"),t._v("Refine product/market fit and fundraising/community action initiatives "),n("br"),t._v("Grow media networks/audience dialogue "),n("br"),t._v("Design compelling, actionable UX and augmented reality experiences "),n("br"),t._v("Hone real-time network activation intelligence at scale "),n("br"),t._v("Generate iterative strategic scenarios "),n("br"),t._v("Align company culture ")])]),n("div",{staticClass:"columns is-multiline"},[n("div",{staticClass:"column is-half-tablet is-one-quarter-widescreen"},[n("div",{staticClass:"card has-text-centered"},[n("div",{staticClass:"card-content"},[n("p",{staticClass:"title"},[t._v(" Pamela"),n("br"),t._v("Divinsky PhD ")]),n("p",[t._v(" Founder, Strategy & Foresight Lead ")])]),n("footer",{staticClass:"card-footer"},[n("a",{staticClass:"card-footer-item",attrs:{href:"mailto: pameladivinsky@hume.works"}},[t._v("Email")]),n("a",{staticClass:"card-footer-item",attrs:{href:"tel: 4165626414"}},[t._v("Phone")])])])]),n("div",{staticClass:"column is-half-tablet is-one-quarter-widescreen"},[n("div",{staticClass:"card has-text-centered"},[n("div",{staticClass:"card-content"},[n("p",{staticClass:"title"},[t._v(" Brendan"),n("br"),t._v("Howley ")]),n("p",[t._v("Founder, Technology & Innovation Lead")])]),n("footer",{staticClass:"card-footer"},[n("a",{staticClass:"card-footer-item",attrs:{href:"mailto: brendanhowley@hume.works"}},[t._v("Email")]),n("a",{staticClass:"card-footer-item",attrs:{href:"tel: 2268801449"}},[t._v("Phone")])])])]),n("div",{staticClass:"column is-half-tablet is-one-quarter-widescreen"},[n("div",{staticClass:"card has-text-centered"},[n("div",{staticClass:"card-content"},[n("p",{staticClass:"title"},[t._v(" Rami"),n("br"),t._v("Lippa ")]),n("p",[t._v("Founder, Creative & Design Solutions Lead")])]),n("footer",{staticClass:"card-footer"},[n("a",{staticClass:"card-footer-item",attrs:{href:"mailto: ramilippa@hume.works"}},[t._v("Email")]),n("a",{staticClass:"card-footer-item",attrs:{href:"tel: 6475282417"}},[t._v("Phone")])])])]),n("div",{staticClass:"column is-half-tablet is-one-quarter-widescreen"},[n("div",{staticClass:"card has-text-centered"},[n("div",{staticClass:"card-content"},[n("p",{staticClass:"title"},[t._v(" Nikolai"),n("br"),t._v("Howley ")]),n("p",[t._v("UX & Software Development Lead")])]),n("footer",{staticClass:"card-footer"},[n("a",{staticClass:"card-footer-item",attrs:{href:"mailto: nikolaihowley@hume.works"}},[t._v("Email")]),n("a",{staticClass:"card-footer-item",attrs:{href:"tel: 2268801479"}},[t._v("Phone")])])])])])])])])}],s={name:"Contact",components:{},methods:{copy:function(t){navigator.clipboard.writeText(t).then((function(){alert("Phone number copied to clipboard!")}))}}},o=s,a=(n("0673"),n("2877")),c=Object(a["a"])(o,r,i,!1,null,null,null);e["default"]=c.exports},b9ec:function(t,e,n){"use strict";var r=n("e6e0");t.exports=function(t,e){e=e||{};var n={},i=["url","method","params","data"],s=["headers","auth","proxy"],o=["baseURL","url","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"];r.forEach(i,(function(t){"undefined"!==typeof e[t]&&(n[t]=e[t])})),r.forEach(s,(function(i){r.isObject(e[i])?n[i]=r.deepMerge(t[i],e[i]):"undefined"!==typeof e[i]?n[i]=e[i]:r.isObject(t[i])?n[i]=r.deepMerge(t[i]):"undefined"!==typeof t[i]&&(n[i]=t[i])})),r.forEach(o,(function(r){"undefined"!==typeof e[r]?n[r]=e[r]:"undefined"!==typeof t[r]&&(n[r]=t[r])}));var a=i.concat(s).concat(o),c=Object.keys(e).filter((function(t){return-1===a.indexOf(t)}));return r.forEach(c,(function(r){"undefined"!==typeof e[r]?n[r]=e[r]:"undefined"!==typeof t[r]&&(n[r]=t[r])})),n}},cc3f:function(t,e,n){"use strict";function r(t){this.message=t}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,t.exports=r},cf35:function(t,e,n){"use strict";var r=n("b17f"),i=n("eca7");t.exports=function(t,e){return t&&!r(e)?i(t,e):e}},df7c:function(t,e,n){(function(t){function n(t,e){for(var n=0,r=t.length-1;r>=0;r--){var i=t[r];"."===i?t.splice(r,1):".."===i?(t.splice(r,1),n++):n&&(t.splice(r,1),n--)}if(e)for(;n--;n)t.unshift("..");return t}function r(t){"string"!==typeof t&&(t+="");var e,n=0,r=-1,i=!0;for(e=t.length-1;e>=0;--e)if(47===t.charCodeAt(e)){if(!i){n=e+1;break}}else-1===r&&(i=!1,r=e+1);return-1===r?"":t.slice(n,r)}function i(t,e){if(t.filter)return t.filter(e);for(var n=[],r=0;r<t.length;r++)e(t[r],r,t)&&n.push(t[r]);return n}e.resolve=function(){for(var e="",r=!1,s=arguments.length-1;s>=-1&&!r;s--){var o=s>=0?arguments[s]:t.cwd();if("string"!==typeof o)throw new TypeError("Arguments to path.resolve must be strings");o&&(e=o+"/"+e,r="/"===o.charAt(0))}return e=n(i(e.split("/"),(function(t){return!!t})),!r).join("/"),(r?"/":"")+e||"."},e.normalize=function(t){var r=e.isAbsolute(t),o="/"===s(t,-1);return t=n(i(t.split("/"),(function(t){return!!t})),!r).join("/"),t||r||(t="."),t&&o&&(t+="/"),(r?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(i(t,(function(t,e){if("string"!==typeof t)throw new TypeError("Arguments to path.join must be strings");return t})).join("/"))},e.relative=function(t,n){function r(t){for(var e=0;e<t.length;e++)if(""!==t[e])break;for(var n=t.length-1;n>=0;n--)if(""!==t[n])break;return e>n?[]:t.slice(e,n-e+1)}t=e.resolve(t).substr(1),n=e.resolve(n).substr(1);for(var i=r(t.split("/")),s=r(n.split("/")),o=Math.min(i.length,s.length),a=o,c=0;c<o;c++)if(i[c]!==s[c]){a=c;break}var u=[];for(c=a;c<i.length;c++)u.push("..");return u=u.concat(s.slice(a)),u.join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){if("string"!==typeof t&&(t+=""),0===t.length)return".";for(var e=t.charCodeAt(0),n=47===e,r=-1,i=!0,s=t.length-1;s>=1;--s)if(e=t.charCodeAt(s),47===e){if(!i){r=s;break}}else i=!1;return-1===r?n?"/":".":n&&1===r?"/":t.slice(0,r)},e.basename=function(t,e){var n=r(t);return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},e.extname=function(t){"string"!==typeof t&&(t+="");for(var e=-1,n=0,r=-1,i=!0,s=0,o=t.length-1;o>=0;--o){var a=t.charCodeAt(o);if(47!==a)-1===r&&(i=!1,r=o+1),46===a?-1===e?e=o:1!==s&&(s=1):-1!==e&&(s=-1);else if(!i){n=o+1;break}}return-1===e||-1===r||0===s||1===s&&e===r-1&&e===n+1?"":t.slice(e,r)};var s="b"==="ab".substr(-1)?function(t,e,n){return t.substr(e,n)}:function(t,e,n){return e<0&&(e=t.length+e),t.substr(e,n)}}).call(this,n("4362"))},e080:function(t,e,n){"use strict";function r(t){this._conn=t}r.prototype={list:function(t){return this._conn.get("tags/",t)},retrieve:function(t,e){return this._conn.get("tags/"+t+"/",e)}},t.exports=r},e14b:function(t,e,n){"use strict";var r=n("cc3f");function i(t){if("function"!==typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise((function(t){e=t}));var n=this;t((function(t){n.reason||(n.reason=new r(t),e(n.reason))}))}i.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},i.source=function(){var t,e=new i((function(e){t=e}));return{token:e,cancel:t}},t.exports=i},e6dc:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"products"}},[n("div",{staticClass:"modal",class:{"is-active":t.modal}},[n("div",{staticClass:"modal-background",on:{click:t.closeModal}}),n("div",{staticClass:"modal-card"},[n("header",{staticClass:"modal-card-head"},[n("p",{staticClass:"modal-card-title"},[t._v("Request a live demo")]),n("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:t.closeModal}})]),t._m(0)])]),n("section",{staticClass:"cta"},[n("div",{staticClass:"container"},[n("div",{staticClass:"content has-text-centered"},[n("button",{staticClass:"button is-large",on:{click:t.toggleModal}},[t._v("REQUEST A LIVE DEMO")]),n("p",{staticClass:"or"},[t._v("or")]),n("h1",{staticClass:"title"},[t._v("View Case Study Demo:")]),n("p",{staticClass:"blurb"},[t._v(" We asked credit card specialists at a big North American bank, charged with rolling out a new credit card product, to tell us a story: ")]),n("p",{staticClass:"blurb"},[t._v("Why do you do what you do?")]),n("p",{staticClass:"blurb"},[t._v("In their own words, three brief extracts:")]),n("div",{staticClass:"iframe-frame"},[t._m(1),n("router-link",{attrs:{to:"/contact"}},[n("button",{staticClass:"button is-large products-button"},[t._v("GET IN TOUCH")])])],1)])])]),t._m(2)])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"modal-card-body"},[n("p",[t._v(" Get in touch with Brendan Howley directly by "),n("a",{attrs:{href:"mailto: brendan@hume.works"}},[t._v("email")]),t._v(" or "),n("a",{attrs:{href:"tel: 2268801449"}},[t._v("phone")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"iframe-container"},[n("iframe",{staticClass:"responsive-iframe",attrs:{src:"https://player.vimeo.com/video/471795270",frameborder:"0",allow:"autoplay; fullscreen",allowfullscreen:""}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("div",{staticClass:"container"},[n("div",{staticClass:"content"},[t._v(" Photos with thanks to Alex Moiseev on Unsplash; BBH Singapore on Unsplash; Harris Memovic on Unsplash; Jakayla Toney on Unsplash; Jurica Koletic on Unsplash; Jörge Graphiste on Pexels. ")])])])}],s={name:"Products",data:function(){return{modal:!1}},methods:{toggleModal:function(){this.modal=!this.modal},closeModal:function(){this.modal=!1}}},o=s,a=(n("8247"),n("2877")),c=Object(a["a"])(o,r,i,!1,null,null,null);e["default"]=c.exports},e6df:function(t,e,n){t.exports=n("6b34")},e6e0:function(t,e,n){"use strict";var r=n("b326"),i=Object.prototype.toString;function s(t){return"[object Array]"===i.call(t)}function o(t){return"undefined"===typeof t}function a(t){return null!==t&&!o(t)&&null!==t.constructor&&!o(t.constructor)&&"function"===typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}function c(t){return"[object ArrayBuffer]"===i.call(t)}function u(t){return"undefined"!==typeof FormData&&t instanceof FormData}function l(t){var e;return e="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer,e}function f(t){return"string"===typeof t}function d(t){return"number"===typeof t}function h(t){return null!==t&&"object"===typeof t}function p(t){return"[object Date]"===i.call(t)}function v(t){return"[object File]"===i.call(t)}function m(t){return"[object Blob]"===i.call(t)}function g(t){return"[object Function]"===i.call(t)}function b(t){return h(t)&&g(t.pipe)}function y(t){return"undefined"!==typeof URLSearchParams&&t instanceof URLSearchParams}function _(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")}function C(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)}function w(t,e){if(null!==t&&"undefined"!==typeof t)if("object"!==typeof t&&(t=[t]),s(t))for(var n=0,r=t.length;n<r;n++)e.call(null,t[n],n,t);else for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.call(null,t[i],i,t)}function x(){var t={};function e(e,n){"object"===typeof t[n]&&"object"===typeof e?t[n]=x(t[n],e):t[n]=e}for(var n=0,r=arguments.length;n<r;n++)w(arguments[n],e);return t}function E(){var t={};function e(e,n){"object"===typeof t[n]&&"object"===typeof e?t[n]=E(t[n],e):t[n]="object"===typeof e?E({},e):e}for(var n=0,r=arguments.length;n<r;n++)w(arguments[n],e);return t}function S(t,e,n){return w(e,(function(e,i){t[i]=n&&"function"===typeof e?r(e,n):e})),t}t.exports={isArray:s,isArrayBuffer:c,isBuffer:a,isFormData:u,isArrayBufferView:l,isString:f,isNumber:d,isObject:h,isUndefined:o,isDate:p,isFile:v,isBlob:m,isFunction:g,isStream:b,isURLSearchParams:y,isStandardBrowserEnv:C,forEach:w,merge:x,deepMerge:E,extend:S,trim:_}},ea73:function(t,e,n){"use strict";var r=n("e6e0"),i=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];t.exports=function(t){var e,n,s,o={};return t?(r.forEach(t.split("\n"),(function(t){if(s=t.indexOf(":"),e=r.trim(t.substr(0,s)).toLowerCase(),n=r.trim(t.substr(s+1)),e){if(o[e]&&i.indexOf(e)>=0)return;o[e]="set-cookie"===e?(o[e]?o[e]:[]).concat([n]):o[e]?o[e]+", "+n:n}})),o):o}},eba7:function(t,e,n){},ebb0:function(t,e,n){},eca7:function(t,e,n){"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},ffc9:function(t,e,n){"use strict";var r=n("e6e0");t.exports=function(t,e){r.forEach(t,(function(n,r){r!==e&&r.toUpperCase()===e.toUpperCase()&&(t[e]=n,delete t[r])}))}}}]);
//# sourceMappingURL=about.fcc54bb9.js.map