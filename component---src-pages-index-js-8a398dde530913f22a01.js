(self.webpackChunkriko_logwirno=self.webpackChunkriko_logwirno||[]).push([[678],{2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,c){if(e===c)return!0;if(e&&c&&"object"==typeof e&&"object"==typeof c){if(e.constructor!==c.constructor)return!1;var o,l,s,u;if(Array.isArray(e)){if((o=e.length)!=c.length)return!1;for(l=o;0!=l--;)if(!i(e[l],c[l]))return!1;return!0}if(n&&e instanceof Map&&c instanceof Map){if(e.size!==c.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!c.has(l.value[0]))return!1;for(u=e.entries();!(l=u.next()).done;)if(!i(l.value[1],c.get(l.value[0])))return!1;return!0}if(r&&e instanceof Set&&c instanceof Set){if(e.size!==c.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!c.has(l.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(c)){if((o=e.length)!=c.length)return!1;for(l=o;0!=l--;)if(e[l]!==c[l])return!1;return!0}if(e.constructor===RegExp)return e.source===c.source&&e.flags===c.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===c.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===c.toString();if((o=(s=Object.keys(e)).length)!==Object.keys(c).length)return!1;for(l=o;0!=l--;)if(!Object.prototype.hasOwnProperty.call(c,s[l]))return!1;if(t&&e instanceof Element)return!1;for(l=o;0!=l--;)if(("_owner"!==s[l]&&"__v"!==s[l]&&"__o"!==s[l]||!e.$$typeof)&&!i(e[s[l]],c[s[l]]))return!1;return!0}return e!=e&&c!=c}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(e,t,n){"use strict";var r,a=n(7294),i=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,s=[];function u(){l=e(s.map((function(e){return e.props}))),p.canUseDOM?t(l):n&&(l=n(l))}var p=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return l},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,s=[],e};var c=a.prototype;return c.UNSAFE_componentWillMount=function(){s.push(this),u()},c.componentDidUpdate=function(){u()},c.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),u()},c.render=function(){return i.createElement(r,this.props)},a}(a.PureComponent);return c(p,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),c(p,"canUseDOM",o),p}}},7549:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Re}});var r,a,i,c,o=n(7294),l=n(5697),s=n.n(l),u=n(4839),p=n.n(u),f=n(2993),d=n.n(f),m=n(6494),g=n.n(m),b="bodyAttributes",h="htmlAttributes",y="titleAttributes",v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},E=(Object.keys(v).map((function(e){return v[e]})),"charset"),w="cssText",T="href",A="http-equiv",S="innerHTML",O="itemprop",N="name",k="property",C="rel",x="src",I="target",R={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},Z="defaultTitle",L="defer",j="encodeSpecialCharacters",P="onChangeClientState",M="titleTemplate",D=Object.keys(R).reduce((function(e,t){return e[R[t]]=t,e}),{}),_=[v.NOSCRIPT,v.SCRIPT,v.STYLE],H="data-react-helmet",B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},U=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},F=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Y=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},K=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},G=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},J=function(e){var t=Q(e,v.TITLE),n=Q(e,M);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=Q(e,Z);return t||r||void 0},z=function(e){return Q(e,P)||function(){}},V=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return W({},e,t)}),{})},q=function(e,t){return t.filter((function(e){return void 0!==e[v.BASE]})).map((function(e){return e[v.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var i=r[a].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},X=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+B(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),c=0;c<i.length;c++){var o=i[c],l=o.toLowerCase();-1===t.indexOf(l)||n===C&&"canonical"===e[n].toLowerCase()||l===C&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(o)||o!==S&&o!==w&&o!==O||(n=o)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][s]&&(a[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(a),c=0;c<i.length;c++){var o=i[c],l=g()({},r[o],a[o]);r[o]=l}return e}),[]).reverse()},Q=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},$=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:n.g.requestAnimationFrame||$,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,ie=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,i=e.linkTags,c=e.metaTags,o=e.noscriptTags,l=e.onChangeClientState,s=e.scriptTags,u=e.styleTags,p=e.title,f=e.titleAttributes;le(v.BODY,r),le(v.HTML,a),oe(p,f);var d={baseTag:se(v.BASE,n),linkTags:se(v.LINK,i),metaTags:se(v.META,c),noscriptTags:se(v.NOSCRIPT,o),scriptTags:se(v.SCRIPT,s),styleTags:se(v.STYLE,u)},m={},g={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(g[e]=d[e].oldTags)})),t&&t(),l(e,m,g)},ce=function(e){return Array.isArray(e)?e.join(""):e},oe=function(e,t){void 0!==e&&document.title!==e&&(document.title=ce(e)),le(v.TITLE,t)},le=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(H),a=r?r.split(","):[],i=[].concat(a),c=Object.keys(t),o=0;o<c.length;o++){var l=c[o],s=t[l]||"";n.getAttribute(l)!==s&&n.setAttribute(l,s),-1===a.indexOf(l)&&a.push(l);var u=i.indexOf(l);-1!==u&&i.splice(u,1)}for(var p=i.length-1;p>=0;p--)n.removeAttribute(i[p]);a.length===i.length?n.removeAttribute(H):n.getAttribute(H)!==c.join(",")&&n.setAttribute(H,c.join(","))}},se=function(e,t){var n=document.head||document.querySelector(v.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),a=Array.prototype.slice.call(r),i=[],c=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===S)n.innerHTML=t.innerHTML;else if(r===w)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var o=void 0===t[r]?"":t[r];n.setAttribute(r,o)}n.setAttribute(H,"true"),a.some((function(e,t){return c=t,n.isEqualNode(e)}))?a.splice(c,1):i.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:i}},ue=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},pe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[R[n]||n]=e[n],t}),t)},fe=function(e,t,n){switch(e){case v.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[H]=!0,a=pe(n,r),[o.createElement(v.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=ue(n),i=ce(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+G(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+G(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case b:case h:return{toComponent:function(){return pe(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})[H]=!0,r);return Object.keys(t).forEach((function(e){var n=R[e]||e;if(n===S||n===w){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),o.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===S||e===w)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+G(r[t],n)+'"';return e?e+" "+a:a}),""),i=r.innerHTML||r.cssText||"",c=-1===_.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(c?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},de=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,i=e.linkTags,c=e.metaTags,o=e.noscriptTags,l=e.scriptTags,s=e.styleTags,u=e.title,p=void 0===u?"":u,f=e.titleAttributes;return{base:fe(v.BASE,t,r),bodyAttributes:fe(b,n,r),htmlAttributes:fe(h,a,r),link:fe(v.LINK,i,r),meta:fe(v.META,c,r),noscript:fe(v.NOSCRIPT,o,r),script:fe(v.SCRIPT,l,r),style:fe(v.STYLE,s,r),title:fe(v.TITLE,{title:p,titleAttributes:f},r)}},me=p()((function(e){return{baseTag:q([T,I],e),bodyAttributes:V(b,e),defer:Q(e,L),encode:Q(e,j),htmlAttributes:V(h,e),linkTags:X(v.LINK,[C,T],e),metaTags:X(v.META,[N,E,A,k,O],e),noscriptTags:X(v.NOSCRIPT,[S],e),onChangeClientState:z(e),scriptTags:X(v.SCRIPT,[x,S],e),styleTags:X(v.STYLE,[w],e),title:J(e),titleAttributes:V(y,e)}}),(function(e){ae&&ne(ae),e.defer?ae=te((function(){ie(e,(function(){ae=null}))})):(ie(e),ae=null)}),de)((function(){return null})),ge=(a=me,c=i=function(e){function t(){return U(this,t),K(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!d()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:t};case v.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,i=e.nestedChildren;return W({},r,((t={})[n.type]=[].concat(r[n.type]||[],[W({},a,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,i=e.newChildProps,c=e.nestedChildren;switch(r.type){case v.TITLE:return W({},a,((t={})[r.type]=c,t.titleAttributes=W({},i),t));case v.BODY:return W({},a,{bodyAttributes:W({},i)});case v.HTML:return W({},a,{htmlAttributes:W({},i)})}return W({},a,((n={})[r.type]=W({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=W({},t);return Object.keys(e).forEach((function(t){var r;n=W({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return o.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,i=a.children,c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[D[n]||n]=e[n],t}),t)}(Y(a,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:c,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:c,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=Y(e,["children"]),r=W({},n);return t&&(r=this.mapChildrenToProps(t,r)),o.createElement(a,r)},F(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(o.Component),i.propTypes={base:s().object,bodyAttributes:s().object,children:s().oneOfType([s().arrayOf(s().node),s().node]),defaultTitle:s().string,defer:s().bool,encodeSpecialCharacters:s().bool,htmlAttributes:s().object,link:s().arrayOf(s().object),meta:s().arrayOf(s().object),noscript:s().arrayOf(s().object),onChangeClientState:s().func,script:s().arrayOf(s().object),style:s().arrayOf(s().object),title:s().string,titleAttributes:s().object,titleTemplate:s().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=a.peek,i.rewind=function(){var e=a.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},c);ge.renderStatic=ge.rewind;var be={experience:[{title:"FRONT-END DEVELOPER",company_name:"M+ SOFTWARE",year:"Aug 2019 - Jul 2021",desc:"Front-End Engineer at Mplus Software focusing on ReactJS, React Native, PHP Laravel, Odoo and Django"},{title:"WEB AND MOBILE DEVELOPER",company_name:"REDBUZZ MEDIATAMA",year:"Mar 2015 - Apr 2019",desc:"Web and Mobile developer for a substantial amount of time, build and/or support various projects ranging from simple to complex project while in the company"},{title:"WEB DEVELOPER",company_name:"TRI ARMADA UTAMA",year:"Oct 2013 - Jan 2015",desc:"Web developer and server maintainer focusing on optimizing a sport news portal SEO, feature, and page speed"}],education:[{name:"STT TELEMATIKA CAKRAWALA, BACHELOR DEGREE IN COMPUTER SCIENCE",year:"2010 - 2014",major:"Teknik Informatika (Information Technique)"},{name:"SMK NUSANTARA, VOCATIONAL HIGHSCHOOL",year:"2007 - 2010",major:"Teknik Informatika (Information Technique)"}],skills:[{text:"React Native",rating:90},{text:"React JS",rating:85},{text:"Expo.io",rating:85},{text:"Redux",rating:80},{text:"Express JS",rating:65},{text:"NodeJS",rating:80},{text:"Gatsby JS",rating:80},{text:"NextJS",rating:70},{text:"GraphQL",rating:50},{text:"JavaScript",rating:90},{text:"TypeScript",rating:80},{text:"ThreeJS",rating:70},{text:"SASS/SCSS",rating:90},{text:"CSS3",rating:95},{text:"Bootstrap CSS",rating:90},{text:"Tailwind CSS",rating:80},{text:"LAMP Stack",rating:70},{text:"PHP Native",rating:80},{text:"PHP Laravel",rating:90},{text:"PHP CodeIgniter",rating:60},{text:"MySQL",rating:80},{text:"Linux System Administration",rating:60},{text:"Git",rating:80},{text:"Figma",rating:80},{text:"Adobe XD",rating:80}],contacts:[{text:"logwirno.work@gmail.com",link:"mailto:logwirno.work@gmail.com",icon:"https://mail.google.com/favicon.ico"},{text:"LinkedIn",link:"https://www.linkedin.com/in/riko-logwirno/",icon:"https://www.linkedin.com/favicon.ico"},{text:"Upwork",link:"https://www.upwork.com/freelancers/~0147f44c7e6ee15d2d",icon:"https://www.upwork.com/favicon.ico"},{text:"Github",link:"https://github.com/RikoLogwirno/",icon:"https://github.com/favicon.ico"},{text:"Rempoa, South Tangerang, Indonesia",link:"#",icon:"https://reactjs.org/favicon.ico"}],bio:[{label:"Full Name",value:"Riko Logwirno"},{label:"Nationality",value:"Indonesian"},{label:"Place of Birth",value:"Kediri, East Java"},{label:"Date of Birth",value:"24 May 1992"},{label:"Height",value:"180cm"},{label:"Languages",value:"English, Indonesian"}],project_gallery:[{name:"Compass, Level and Flashlight sensor tools",role:"React Native Developer",year:"2021",desc:"An app to detect device sensor (Accelerometer and Magnetometer) and then visualize it to the user, plus a flashlight",url:"https://play.google.com/store/apps/details?id=com.sensorhelper",img:[n(8365).Z,n(1229).Z,n(3955).Z,n(9421).Z]},{name:"PROTCLIM",role:"Magento 2 Developer",year:"2021",desc:"E-commerce based in France build using Magento 2, main task is to continue working adding features and style fixing",url:"https://shop.protclim.com/",img:[n(4462).Z,n(3040).Z]},{name:"TRUK-IN DRIVER",role:"React Native Developer",year:"2020",desc:"App for Operators/Drivers to take order, doing shipment and sending confirmation",url:"https://play.google.com/store/apps/details?id=com.adhimix_driver",img:[n(21).Z,n(9700).Z,n(6534).Z,n(8441).Z]},{name:"TRUK-IN SHIPPER",role:"React Native Developer",year:"2020",desc:"App for TRUK-IN Customer to order or rent a truck for delivering cement and other Industrial product",url:"https://play.google.com/store/apps/details?id=com.adhimixshipper",img:[n(441).Z,n(5481).Z,n(1370).Z,n(8898).Z]},{name:"TIGARAKSA SATRIA COMPANY PROFILE",role:"Web Developer",year:"2019",desc:"A Web Profile for a well known distribution comapany in Indonesia",url:"https://www.tigaraksa.co.id/",img:[n(2332).Z,n(1329).Z,n(5169).Z,n(1560).Z]},{name:"ALLOVISITE",role:"React Native Developer",year:"2019",desc:"An App to collaborate, manage and finish given task for technician",url:"https://play.google.com/store/apps/details?id=fr.allovisite.app",img:[n(3113).Z,n(222).Z,n(5961).Z,n(2002).Z]},{name:"JOBS2GO",role:"React Native Developer",year:"2019",desc:"An App to collaborate, manage and finish given task for technician",url:"https://play.google.com/store/apps/details?id=com.jobs2go.app",img:[n(2977).Z,n(4940).Z,n(2638).Z,n(8780).Z,n(8473).Z]},{name:"eGOV",role:"React Native Developer Support for PDF Reader",year:"2019",desc:"App for managing law in New Caledonia",url:"",img:[n(660).Z,n(4831).Z,n(388).Z]},{name:"MATMUT",role:"CSS and HTML Style Fix and Improvement",year:"2020",desc:"An Insurance company that need to fix their website styling",url:"https://www.matmut.fr",img:[n(9649).Z]},{name:"TDA LUXURY TOYS",role:"React Native Developer Support Team",year:"2020",desc:"TDA Luxury Toys is a Luxury car dealership located in South Jakarta",url:"https://play.google.com/store/apps/details?id=id.co.tda",img:[n(8625).Z,n(747).Z,n(8493).Z,n(7324).Z,n(2395).Z]}]},he=function(e){var t=e.children,n=(0,o.useState)(!1),r=n[0],a=n[1],i=r?"active":"";return o.createElement("div",{className:"gallery-item"},o.createElement("div",{className:"gallery-img"},o.createElement("img",{src:t.img[0],alt:t.name}),t.img.length>1&&o.createElement("div",{className:"see-more",onClick:function(){return a(!0)},onKeyDown:function(){return a(!0)},role:"button",tabIndex:0},o.createElement("p",null,"CLICK TO SEE MORE"))),o.createElement("div",{className:"gallery-img-all "+i},o.createElement("div",{className:"gallery-img-all-scroller",onClick:function(){return a(!1)},onKeyDown:function(){return a(!1)},role:"button",tabIndex:0},t.img.map((function(e,n){return o.createElement("div",{className:"gallery-img-all-item",key:n},o.createElement("img",{src:e,alt:t.name+"-"+n}))})))),o.createElement("div",{className:"gallery-detail"},o.createElement("div",{className:"gallery-name"},o.createElement("p",{className:"label"},"Project Name: "),o.createElement("p",{className:"value"},t.name)),o.createElement("div",{className:"gallery-role"},o.createElement("p",{className:"label"},"Role: "),o.createElement("p",{className:"value"},t.role)),o.createElement("div",{className:"gallery-year"},o.createElement("p",{className:"label"},"Year: "),o.createElement("p",{className:"value"},t.year)),o.createElement("div",{className:"gallery-desc"},o.createElement("p",{className:"label"},"Description: "),o.createElement("p",{className:"value"},t.desc)),o.createElement("div",{className:"gallery-url"},o.createElement("p",{className:"label"},"Url: "),o.createElement("a",{className:"value",rel:"noreferrer",href:t.url||"#",target:"_blank"},o.createElement("p",null,""!==t.url?"See App/Website":"App/Website is unavailble")))))},ye=function(e){return e.project_gallery.map((function(e,t){return o.createElement(he,{key:t},e)}))},ve=be.experience,Ee=be.education,we=be.skills,Te=be.contacts,Ae=be.bio,Se=be.project_gallery,Oe=function(e){var t;return o.createElement("hr",{className:["small-line",null!==(t=e.white)&&void 0!==t?t:""].join(" ")})},Ne=function(e){var t,n;return o.createElement("div",{className:"pane-title "+(null!==(t=e.white)&&void 0!==t?t:"")},o.createElement("h3",null,e.children),o.createElement(Oe,{white:null!==(n=e.white)&&void 0!==n?n:""}))},ke=function(e){return e.contacts.map((function(e,t){return o.createElement("div",{key:t,className:"contact-item"},o.createElement("a",{href:e.link},o.createElement("p",null,e.text),o.createElement("img",{src:e.icon,alt:"contact-"+e.text})))}))},Ce=function(e){return e.bio.map((function(e,t){return o.createElement("div",{key:t,className:"bio-item"},o.createElement("p",null,e.label),o.createElement("p",null,e.value))}))},xe=function(e){return e.experience.map((function(e,t){return o.createElement("div",{key:t,className:"work-placement-item-cont"},o.createElement("div",{className:"work-placement-item-bullet"},o.createElement("div",{className:"dot"})),o.createElement("div",{className:"work-placement-item"},o.createElement("div",{className:"work-placement-title"},o.createElement("p",{className:"job-title"},e.title),o.createElement("p",{className:"year-range"},e.year)),o.createElement("p",{className:"company-name"},e.company_name),o.createElement("div",{className:"description"},o.createElement("p",null,e.desc))))}))},Ie=function(e){return e.education.map((function(e,t){return o.createElement("div",{key:t,className:"work-placement-item-cont"},o.createElement("div",{className:"work-placement-item-bullet"},o.createElement("div",{className:"dot"})),o.createElement("div",{className:"work-placement-item"},o.createElement("div",{className:"work-placement-title"},o.createElement("p",{className:"job-title"},e.name),o.createElement("p",{className:"year-range"},e.year)),o.createElement("div",{className:"description"},o.createElement("p",null,e.major))))}))},Re=function(){return o.createElement("main",null,o.createElement(ge,null,o.createElement("title",null,"Riko Logwirno"),o.createElement("link",{rel:"icon",class:"js-site-favicon",type:"image/svg+xml",href:"https://github.githubassets.com/favicons/favicon.svg"}),o.createElement("meta",{name:"description",content:"Welcome to Riko Logwirno personal CV"}),o.createElement("meta",{property:"og:title",content:"Riko Logwirno CV and Portofolio"}),o.createElement("meta",{property:"og:type",content:"website"}),o.createElement("meta",{property:"og:url",content:"https://rikologwirno.github.io/"}),o.createElement("meta",{property:"og:image",content:"https://media-exp1.licdn.com/dms/image/C5603AQGGiHCAjZFEzA/profile-displayphoto-shrink_800_800/0/1627034760732?e=1632355200&v=beta&t=8_Z2VIplSkOG4yeaf61r1Y0Uf1OHttXzXsijyRYxpZM"})),o.createElement("div",{id:"top-title"},o.createElement("div",{className:"left"},o.createElement("h1",null,"RIKO LOGWIRNO"),o.createElement("h2",null,"WEB AND MOBILE DEVELOPER"),o.createElement(Oe,{white:"white"})),o.createElement("div",{className:"right contact-list"},o.createElement(ke,{contacts:Te}))),o.createElement("div",{id:"desc-pic"},o.createElement("div",{id:"desc"},o.createElement("div",null,o.createElement(Ne,null,"PROFILE"),o.createElement("div",{id:"profile",className:"panel-content"},o.createElement("p",null,"A proven Web and Mobile Development, with a various projects that has been done before. With a lot of essential skill I have for Web and Mobile Development I am confident that I can provide solution to start and finish your projects."),o.createElement("p",null,"7 Years of experience in Web development with LAMP Stack, CodeIgniter, Laravel, ExpressJS, and ReactJS."),o.createElement("p",null,"5 Years of Mobile development with React Native.")))),o.createElement("div",{id:"pic"},o.createElement("img",{src:"https://media-exp1.licdn.com/dms/image/C5603AQGGiHCAjZFEzA/profile-displayphoto-shrink_800_800/0/1627034760732?e=1632355200&v=beta&t=8_Z2VIplSkOG4yeaf61r1Y0Uf1OHttXzXsijyRYxpZM",alt:"my-profile-graph"}))),o.createElement("div",{id:"experience"},o.createElement("div",{id:"work-placement"},o.createElement("div",{className:"exp"},o.createElement(Ne,null,"WORKING EXPERIENCE"),o.createElement("div",{className:"panel-content"},o.createElement(xe,{experience:ve}))),o.createElement("div",{className:"exp"},o.createElement(Ne,null,"EDUCATION"),o.createElement("div",{className:"panel-content"},o.createElement(Ie,{education:Ee})))),o.createElement("div",{id:"bio"},o.createElement(Ne,null,"BIO"),o.createElement("div",{className:"panel-content right"},o.createElement(Ce,{bio:Ae})))),o.createElement("div",{id:"skills"},o.createElement(Ne,{white:"white"},"SKILLS"),o.createElement("div",{className:"skill-list"},we.map((function(e,t){return o.createElement("div",{key:t,style:{fontSize:e.rating/100*5*10}},e.text)})))),o.createElement("div",{id:"project-gallery"},o.createElement(Ne,null,"PROJECT GALLERY"),o.createElement("div",{className:"panel-content"},o.createElement(ye,{project_gallery:Se}))),o.createElement("div",{id:"main-footer"},o.createElement("div",{className:"left-panel"},"Build with Gatsby and ReactJS"),o.createElement("div",{className:"right-panel"},"© RIKO LOGWIRNO")))}},2002:function(e,t,n){"use strict";t.Z=n.p+"static/App Config-3332db29260fc3b38b1d73458b1e3c48.png"},5961:function(e,t,n){"use strict";t.Z=n.p+"static/Detail Screen-9296a6b5be73f9fc1ef90ad3b3064f7a.png"},3113:function(e,t,n){"use strict";t.Z=n.p+"static/Map Screen-0c218039b718bf0654e4f0e4463b6a6b.png"},222:function(e,t,n){"use strict";t.Z=n.p+"static/Planning Screen-7c406a6efaab8e23cf86d1eb1a0ea872.png"},8780:function(e,t,n){"use strict";t.Z=n.p+"static/Detail planning screen-1c69c7cb462aecacbaef5897bac1e079.jpg"},8473:function(e,t,n){"use strict";t.Z=n.p+"static/Edit planning screen-rez-a41be40824c007ec242db3c12a3f5433.jpg"},2977:function(e,t,n){"use strict";t.Z=n.p+"static/Login-ff214331024f5667f11172482b710131.jpg"},2638:function(e,t,n){"use strict";t.Z=n.p+"static/Map2-82303c2b4d55752eaded6d01e22e36fd.jpg"},4940:function(e,t,n){"use strict";t.Z=n.p+"static/Planning Screen-9f2efba64d3a04b3b761373db8b23c52.jpg"},9700:function(e,t,n){"use strict";t.Z=n.p+"static/1-4c478d2f48f0fb50f3691523c6b632a0.png"},6534:function(e,t,n){"use strict";t.Z=n.p+"static/2-1cb3b9b7f08559dbd194d2e7d69daeb4.png"},8441:function(e,t,n){"use strict";t.Z=n.p+"static/3-5863dc2f1eaf347e7a188dbcb8c5a33c.png"},21:function(e,t,n){"use strict";t.Z=n.p+"static/first-4dd7f524bd55abb7f0951364c660c573.png"},5481:function(e,t,n){"use strict";t.Z=n.p+"static/1-33a653b964bfc10ca466af39efa1cb26.png"},1370:function(e,t,n){"use strict";t.Z=n.p+"static/2-296aea69bf116a139d6f07f23d93579c.png"},8898:function(e,t,n){"use strict";t.Z=n.p+"static/3-ec7567bd33f0afb5959b22961ee0a7e2.png"},441:function(e,t,n){"use strict";t.Z=n.p+"static/first-4c95bd4c930bedd648821d0b586c45b7.png"},4831:function(e,t,n){"use strict";t.Z=n.p+"static/1-17d25a7bb961df550e6ad7c56c802cb2.png"},388:function(e,t,n){"use strict";t.Z=n.p+"static/2-9f11c4df37e3a1e0db18b7f7c4489cb7.png"},660:function(e,t,n){"use strict";t.Z=n.p+"static/first-9a98871839e7651d27a980f8d392e5b8.png"},9649:function(e,t,n){"use strict";t.Z=n.p+"static/first-res-78df9d714e929fac47e4eda93043a976.png"},4462:function(e,t,n){"use strict";t.Z=n.p+"static/homepage-resized-b126d667ac527535cc8a61dfd96fd41d.png"},3040:function(e,t,n){"use strict";t.Z=n.p+"static/product-list-resized-ae6c11dc0f96e0dc70fa8a1dcc6de14f.png"},1229:function(e,t,n){"use strict";t.Z=n.p+"static/Screenshot_20210602-012418366-e75d7b0270b3fa570e3be142707161ce.png"},3955:function(e,t,n){"use strict";t.Z=n.p+"static/Screenshot_20210602-012619767-8575702f4979e76a1fe5f295c593d14f.png"},9421:function(e,t,n){"use strict";t.Z=n.p+"static/Screenshot_20210714-231747022-bb9be5f385d2c2fd3dba153e2ec4fcd1.png"},8365:function(e,t,n){"use strict";t.Z=n.p+"static/main menu 2-e3dca0076f76623d68d521fa18bafc0c.png"},8493:function(e,t,n){"use strict";t.Z=n.p+"static/1-6c442dba0aea53dc41ae6bb412a876a8.png"},7324:function(e,t,n){"use strict";t.Z=n.p+"static/2-b5228f0614628e34acd356a3ec15da9a.png"},2395:function(e,t,n){"use strict";t.Z=n.p+"static/3-f8018ec4d0acc0cce71361007541d897.png"},8625:function(e,t,n){"use strict";t.Z=n.p+"static/first-476c5faa3330e9954d4af2230d3f96ca.png"},747:function(e,t,n){"use strict";t.Z=n.p+"static/first2-4ef8ae400ce005e234a8a2d0d6662e21.png"},2332:function(e,t,n){"use strict";t.Z=n.p+"static/1-7bbba7985ad2d905378d58798ecc5281.png"},5169:function(e,t,n){"use strict";t.Z=n.p+"static/2-202f39d747d987ce6dd77fe3c0ad97e8.png"},1560:function(e,t,n){"use strict";t.Z=n.p+"static/3-ecc3ffb41b3fe84ee6a86ce700ca26b4.png"},1329:function(e,t,n){"use strict";t.Z=n.p+"static/first-6a8bd375f165290b4d7d83b68f0b085a.png"}}]);
//# sourceMappingURL=component---src-pages-index-js-8a398dde530913f22a01.js.map