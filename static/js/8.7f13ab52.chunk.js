(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[8],{134:function(e,t,n){},135:function(e,t,n){},163:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.r(t);var i=n(34),s=n(0),c=n.n(s),l=(n(134),n(135),function(e){var t=e.shouldSmile;return c.a.createElement("div",{className:"face"},c.a.createElement("span",{className:"hair"}),c.a.createElement("span",{className:"ears ".concat(t?"ears-smiling":"")}),c.a.createElement("div",{className:"face__front"},c.a.createElement("span",{className:"eyes ".concat(t?"eyes-smiling":"")}),c.a.createElement("span",{className:"nose"}),c.a.createElement("span",{className:"blush ".concat(t?"blush-smiling":"")}),c.a.createElement("span",{className:"mouth ".concat(t?"mouth-smiling":"")})))}),u=n(33),m=n(38),f=n(35),d=n(39),_=Object(s.memo)((function(){var e=Object(s.useState)(!1),t=Object(i.a)(e,2),n=t[0],r=t[1],a=Object(s.useRef)({show:null});return Object(s.useEffect)((function(){return function e(t){Object(f.f)()?r(!0):a.current.show=setTimeout((function(){return e(t)}),1e3)}(!0),function(){clearTimeout(a.current.show)}}),[]),c.a.createElement("ul",{className:"card__wr1"},function(e){return u.a.card__info.map((function(t,n){var r=m.a.card_fill__delay;return c.a.createElement("li",{key:n,className:"card__string"},c.a.createElement("span",{className:"card__label"},t.card__label),c.a.createElement("div",{className:"card__fill"},c.a.createElement(d.a,{text:t.card__content,className:"card__typing",startDelay:n*r,shouldShow:e})))}))}(n))})),p=n(11),h=function(e){var t=e.onMouseOver,n=e.onMouseLeave;return c.a.createElement("ul",{className:"card__wr2"},c.a.createElement("li",{className:"card__item"},c.a.createElement(p.b,{onMouseOver:t,onMouseLeave:n,className:"card__link link",to:"/offer"},"Offer me")," a job or mentoring"),c.a.createElement("li",{className:"card__item"},"Learn about ",c.a.createElement(p.b,{onMouseOver:t,onMouseLeave:n,className:"card__link link",to:"/apps"},"my apps")),c.a.createElement("li",{className:"card__item"},"Or read ",c.a.createElement(p.b,{onMouseOver:t,onMouseLeave:n,className:"card__link link",to:"/posts"},"articles")," I write"))};t.default=function(){var e=Object(s.useState)(!1),t=Object(i.a)(e,2),n=t[0],r=t[1],a=Object(s.useState)(!1),p=Object(i.a)(a,2),y=p[0],b=p[1],g=Object(s.useState)(Object(f.c)(9)),w=Object(i.a)(g,1)[0],v=Object(s.useState)({show:!1,text:u.a.card__typings[0],pos:Object(f.c)(9)}),k=Object(i.a)(v,2),O=k[0],j=k[1],E=Object(s.useRef)({hide:null,show:null,nonVis:null,nextTyp:null,startAnim:null});Object(s.useEffect)((function(){return document.title=u.a.titles.card,I(!0),function(){clearTimeout(E.current.show),clearTimeout(E.current.hide),clearTimeout(E.current.nonVis),clearTimeout(E.current.nextTyp),clearTimeout(E.current.startAnim)}}),[]);var I=function e(t){Object(f.f)()?(b(!0),E.current.nonVis=setTimeout((function(){b(!1),function e(t){if(Object(f.f)()){var n=t+1,r={text:u.a.card__typings[t],pos:Object(f.c)(9),show:!0};j(r),u.a.card__typings[t]&&(E.current.hide=setTimeout((function(){j(o(o({},r),{},{show:!1}))}),m.a.card__typings__hide_time),E.current.show=setTimeout((function(){e(n)}),m.a.card__typings__show_time))}else E.current.nextTyp=setTimeout((function(){return e(t)}),1e3)}(0)}),m.a.card__typing__hide_time)):E.current.startAnim=setTimeout((function(){return e(t)}),500)};return c.a.createElement("section",{className:"main"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card__cap"},c.a.createElement("h1",{className:"card__title"},u.a.card__title)),c.a.createElement("div",{className:"card__body"},c.a.createElement("div",{className:"card__photo"},c.a.createElement(l,{shouldSmile:n})),c.a.createElement("div",{className:"card__info"},c.a.createElement(_,null),c.a.createElement(h,{onMouseOver:function(){return r(!0)},onMouseLeave:function(){return r(!1)}})))),c.a.createElement(d.a,{text:u.a.card__typing,className:"card__typing card__out_typing card__out_typing-".concat(w),startDelay:m.a.card__typing__show_time,shouldShow:y}),c.a.createElement(d.a,{text:O.text,className:"card__typing card__out_typing card__out_typing-".concat(O.pos),shouldShow:O.show}))}},33:function(e,t,n){"use strict";t.a={card__title:"Contact Me",card__info:[{card__label:"name: ",card__content:"Roman Smunyov"},{card__label:"pseudonym: ",card__content:"RomanistHere"},{card__label:"location: ",card__content:"Minsk, Belarus"},{card__label:"profession: ",card__content:"JavaScript developer"}],card__typing:"There is not a single tracker here. Enjoy yourself :)",card__typings:["Aren't you going to press some links on card and go?","You do really like it here, don't you?","I am pleased :)","There are probably few more pages on this site","Some of them could be even prettier than this one","Okay, all right, let's just watch this page","This nice blue was picked by my lovely wife","Try to point your cursor to a link in the card...","Go press it!","Oh, boy, you don't really have much to do, don't you?","Have you ever seen a website sing? Would you like to?","I'm a little bit shy, you don't often sing here","Okay, all right, Let's sing!","Nah, I'm joking","I just can't *pronounces with british accent*","Are you even there? I don't think I can see you","Fine!","There is a house in New Orleans","They call the Rising Sun","And it's been the ruin of many a poor boy","And God, I know I'm one","My mother was a tailor","She sewed my new blue jeans","The end.","It really is.","Bye-bye then","","","My father was a gamblin' man","Down in New Orleans","Now the only thing a gambler needs","Is a suitcase and trunk","And the only time he's satisfied","Is when he's all drunk","","Oh mother tell your children","Not to do what I have done","Spend your lives in sin and misery","In the House of the Rising Sun","Thank you. Write hello to me and have a nice day!"],form__info:[{isInput:!0,form__lbl:"Position",placeholder:"Front-end developer",form__mess:" unlikely:("},{isInput:!0,form__lbl:"Where",placeholder:"Norway, Oslo. Onsite",form__mess:" \u043c\u0430\u043b\u043e\u0432\u0435\u0440\u043e\u044f\u0442\u043d\u043e)"},{isInput:!0,form__lbl:"Salary",placeholder:"5 000 - 7 000 USD Gross monthly",form__mess:"that's too low:("},{isInput:!1,form__lbl:"Project",placeholder:"Web app in the sphere of healthcare. Team is 30 person big..."},{isInput:!1,form__lbl:"Stack",placeholder:"React + Redux, TypeScript..."},{isInput:!1,form__lbl:"Responsibilities",placeholder:"Writing some code..."},{isInput:!1,form__lbl:"Contacts",placeholder:"Contact me back via email: example@gmal.com or LinkedIn..."}],form__mess:" This field is almost empty",mehWords:{Where:["belarus","russia","ukraine","\u0431\u0435\u043b\u0430","\u0440\u043e\u0441\u0441\u0438\u044f","\u0443\u043a\u0440\u0430","minsk","\u043c\u0438\u043d\u0441\u043a"],Position:["back","\u0431\u044d\u043a","full","\u0444\u0443\u043b"],Salary:["1000","2000","1500","2500"]},formAction:"https://formspree.io/xdowzzgv",form__typings:["Best way to fill would be like in example","You can jump to the next field by pressing tab","And return by pressing shift + tab","It works for every website, just don't forget to fill in all the fields!","You can pull and stretch it here to expand :)","Usually I reply within a day, so write to me again if there is no answer for a week:)","Thank you, I'm going to contact you soon. Have a great day!"],offer__title:"Summary",offer__list:[{offer__low_title:"Who am I",offer__text:'I\'m <span class="offer__word">a front-end developer</span> with over <span class="offer__word">4.5 years of experience and bachelor\'s in math</span>. In case this text is not up-to-date there is a link for my CV below.'},{offer__low_title:"What am I good at",offer__text:'I like things to be beautiful. And I think I have a feeling of it. This site and all of my projects were designed by me both for how-it-looks and how-it-works parts.\n\t\t\t\t<br>\n\t\t\t\t</br>\n\t\t\t\tFrom the technical side, I do really like <span class="offer__word">JavaScript</span>. There are a lot of good frameworks I am good with, like <span class="offer__word">Angular or React</span>, but I like plain JS most. I had a lot of projects with <span class="offer__word">WebGL and Three.js - browser, mobile and desktop apps, games</span>. My <span class="offer__word">CSS3 and HTML5</span> are strong. I still care about <span class="offer__word">semantics, cross-browser compatibility and accessibility</span> - you can always check it in <a href="https://github.com/Romanisthere" rel="noreferrer" target="_blank" class="link">my Git</a>. I\'ve got a feeling about <span class="offer__word">Web Components and functional programming</span> - I learn it in my spare time. Most complete stack of technologies I know how to use is in the CV.'},{offer__low_title:"What do I do now",offer__text:'I learn functional programming using <span class="offer__word">JS and Elm</span>, design, develop and promote <span class="offer__word">my products and contribute</span> to some other projects.'},{offer__low_title:"What am I seeking for",offer__text:'I would like to apply and improve my knowledge in <span class="offer__word">functional programming</span>, so I\'d join the place where it matters. I also <span class="offer__word">plan to relocate</span> to an English speaking country in near future. So I am actively considering <span class="offer__word">onsite or remote positions</span> with the opportunity to relocate.'},{offer__low_title:"How to reach me",offer__text:'If you want to show me some good-looking positions, the best way would be to fill <span class="offer__word">the special form</span> just below. Otherwise try this: <a href="https://www.linkedin.com/in/romanist/"  rel="noreferrer" target="_blank" class="link">LinkedIn</a>, <a href="mailto:smilemoon@yandex.ru"  rel="noreferrer" target="_blank" class="link">Email</a>, <a href="https://join.skype.com/invite/o2l5a5Qb2YWn"  rel="noreferrer" target="_blank" class="link">Skype</a>.'}],offer__nav:[{text:"Back",link:"/",comp:"Back"},{text:"Open CV",link:"",comp:"CV"},{text:"Try the form",link:"/form",comp:"Form"},{text:"See the projects",link:"/apps",comp:"Projects"}],offer__typing:"You can disable highlighting of keywords here \u2193",apps_page:{1:{name:"PopUpOFF",tilt_desc:"Unique browser extension",apps__desc:{Description:"Browser extension that eliminates all sort of popups, layouts, overlays and notifications from your screen.",Status:"- Comfortable and ready for everyday use; <br/>\n\t\t  \t\t\t\t\t- Some of the features are still in development;",Details:"- Open source; <br/>\n\t\t  \t\t\t\t\t- Non-commercial. No pay content; <br/>\n\t\t  \t\t\t\t\t- MutationObserver API;",Platforms:"Chrome, Firefox, Edge","My thanks to":"Igor Denisevich, Polina Kasterava, Whatatay T, Oleg Matveenko, Elizabeth Portman"}},2:{name:"Stylify",tilt_desc:"Unique browser extension",apps__desc:{Description:"Browser extension that fixes ugly-looking websites. Makes content readable.",Status:"- Works fine but not comfortable for everyday use; <br/>\n\t\t\t\t\t\t\t- Needs redesign; <br/>\n\t\t  \t\t\t\t\t- In development;",Details:"- Open source; <br/>\n\t\t  \t\t\t\t\t- Non-commercial. No pay content;",Platforms:"Chrome. Soon Firefox and Edge"}},3:{name:"PLAS",tilt_desc:"Unique browser extension",apps__desc:{Description:"Browser extension that adds search field to YouTube. Search within the playlist.",Status:"- Works fine but not comfortable for everyday use; <br/>\n\t\t\t\t\t\t\t- Needs redesign; <br/>\n\t\t  \t\t\t\t\t- In development;",Details:"- Open source; <br/>\n\t\t  \t\t\t\t\t- Non-commercial. No pay content;",Platforms:"Chrome. Soon Firefox and Edge"}}},apps_page__links:{1:{0:"https://github.com/RomanistHere/PopUpOFF",1:"https://chrome.google.com/webstore/detail/popupoff-popup-blocker/ifnkdbpmgkdbfklnbfidaackdenlmhgh",2:"https://addons.mozilla.org/en-US/firefox/addon/popupoff/",3:"https://microsoftedge.microsoft.com/addons/detail/elacdkdmimelpnkbccdanmnabhajdccm"},2:{0:"https://github.com/RomanistHere/StyLIFy",1:"https://chrome.google.com/webstore/detail/stylify-unuglify/knnnacgjjmlljheglipemamhdlckpfjc"},3:{0:"https://github.com/RomanistHere/YouTube-PLAS-Website",1:"https://chrome.google.com/webstore/detail/plas-playlist-search/khnbkjjlffefikjilbngeoffaiojpboc"}},titles:{apps:"Products I develop",card:"You are welcome here",offer:"Let's see who I am",form:"Make me an offer",posts:"Articles I write"},link_back:"To main page",no_page__text:"404"}},34:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(37);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(c){a=!0,o=c}finally{try{r||null==s.return||s.return()}finally{if(a)throw o}}return n}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},35:function(e,t,n){"use strict";n.d(t,"g",(function(){return o})),n.d(t,"a",(function(){return s})),n.d(t,"i",(function(){return c})),n.d(t,"d",(function(){return u})),n.d(t,"h",(function(){return i})),n.d(t,"k",(function(){return l})),n.d(t,"j",(function(){return m})),n.d(t,"l",(function(){return f})),n.d(t,"m",(function(){return d})),n.d(t,"c",(function(){return _})),n.d(t,"b",(function(){return p})),n.d(t,"e",(function(){return y})),n.d(t,"f",(function(){return h}));var r=n(34),a=n(0),o=function(e){return document.querySelector(".".concat(null===e||void 0===e?void 0:e.toLowerCase()))},i=function(e){return document.querySelectorAll(".".concat(e))},s=function(e,t){return null===e||void 0===e?void 0:e.classList.add(t)},c=function(e,t){return null===e||void 0===e?void 0:e.classList.remove(t)},l=function(e,t){return null===e||void 0===e?void 0:e.classList.toggle(t)},u=function(e,t){return t.some((function(t){return e.toLowerCase().includes(t)}))},m=function(e,t){return e.filter((function(e){return e!==t}))},f=function(e,t){var n=Object(a.useRef)(),r=Object(a.useRef)(e);return Object(a.useEffect)((function(){r.current=e}),[e]),Object(a.useEffect)((function(){if("number"===typeof t)return n.current=window.setTimeout((function(){return r.current()}),t),function(){return window.clearTimeout(n.current)}}),[t]),n},d=function(){var e=Object(a.useState)(window.innerWidth),t=Object(r.a)(e,2),n=t[0],o=t[1],i=Object(a.useState)(window.innerHeight),s=Object(r.a)(i,2),c=s[0],l=s[1];return Object(a.useEffect)((function(){var e=function(){o(window.innerWidth),l(window.innerHeight)};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),{width:n,height:c}},_=function(e){return Math.floor(Math.random()*e)+1},p=function(e,t){return e.find((function(e){return e.slug===t}))},h=function(){return document.hasFocus()},y=function(e){var t={};return e.keys().map((function(n,r){t[n.replace("./","")]=e(n)})),t}},36:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,"a",(function(){return r}))},37:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(36);function a(e,t){if(e){if("string"===typeof e)return Object(r.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(e,t):void 0}}},38:function(e,t,n){"use strict";t.a={offer_switcher__hide_time:15e3,offer_switcher__show_time:2e3,card_fill__delay:1700,form__typing_1__show_time:2e3,form__typing_2__show_time:0,form__typing_3__show_time:0,form__typing_5__hide_time:1e4,forbidShow_time:5e3,card__typing__show_time:1e4,card__typing__hide_time:3e4,card__typings__show_time:12e3,card__typings__hide_time:9e3,apps__typing:2e3,browsers:{1:[0,1,2,3],2:[0,1],3:[0,1]}}},39:function(e,t,n){"use strict";var r=n(34),a=n(0),o=n.n(a);n(41);t.a=function(e){var t=e.text,n=e.className,i=e.startDelay,s=void 0===i?0:i,c=e.shouldShow,l=Object(a.useState)(!1),u=Object(r.a)(l,2),m=u[0],f=u[1],d=Object(a.useRef)(!1);return Object(a.useEffect)((function(){return c&&(d.current=setTimeout((function(){return f(!0)}),s)),function(){return clearTimeout(d.current)}}),[c,s]),o.a.createElement("div",{className:"typing ".concat(n," ").concat(m&&c?"typing-active":"")},o.a.createElement("p",{className:"typing__text"},t),o.a.createElement("div",{className:"typing__wrap"},o.a.createElement("p",{className:"typing__hide"},"\xa0"),o.a.createElement("p",{className:"typing__hide"},"\xa0"),o.a.createElement("p",{className:"typing__hide"},"\xa0"),o.a.createElement("p",{className:"typing__hide"},"\xa0"),o.a.createElement("p",{className:"typing__hide"},"\xa0"),o.a.createElement("p",{className:"typing__hide"},"\xa0"),o.a.createElement("p",{className:"typing__hide"},"\xa0"),o.a.createElement("p",{className:"typing__hide"},"\xa0")))}},41:function(e,t,n){}}]);
//# sourceMappingURL=8.7f13ab52.chunk.js.map