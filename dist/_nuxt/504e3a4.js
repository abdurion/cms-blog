(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{237:function(t,e,r){var content=r(240);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(35).default)("1b7833da",content,!0,{sourceMap:!1})},239:function(t,e,r){"use strict";r(237)},240:function(t,e,r){(e=r(34)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;700;900&display=swap);"]),e.push([t.i,'html{font-size:100%;line-height:1.3;height:100%}*,:after,:before{margin:0;padding:0;box-sizing:border-box}body{font-family:"Tajawal",sans-serif}body,ul{height:100%}ul{list-style-type:none;width:100%}li{background-color:hsla(0,0%,100%,.7);border-radius:15px;margin-bottom:15px;padding:1rem;width:21.875em}.thumbnail{display:block;margin:auto;width:18.75em;padding-bottom:.5rem}.entry{transition:all .2s ease-in-out}.entry:hover{transform:scale(1.01)}',""]),t.exports=e},256:function(t,e,r){"use strict";r.r(e);r(33);var n=r(6),o={layout:"layout",asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.params,e.next=3,r("articles",n.slug).only(["title","description","img","slug","updatedAt"]).sortBy("createdAt","asc").fetch();case 3:return o=e.sent,e.abrupt("return",{articles:o});case 5:case"end":return e.stop()}}),e)})))()}},l=(r(239),r(15)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container",attrs:{dir:"rtl"}},[r("ul",t._l(t.articles,(function(article){return r("li",{key:article.slug,staticClass:"entry"},[r("NuxtLink",{staticClass:"nuxtlinks",attrs:{to:article.slug}},[r("img",{staticClass:"thumbnail",attrs:{src:article.img}}),t._v(" "),r("div",[r("h2",[t._v(t._s(article.title))]),t._v(" "),r("p",{staticClass:"date"},[t._v(t._s(t.formatDate(article.updatedAt)))]),t._v(" "),r("p",[t._v(t._s(article.description))])])])],1)})),0)])}),[],!1,null,null,null);e.default=component.exports}}]);