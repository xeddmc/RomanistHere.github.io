(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[9],{148:function(e,t,n){},164:function(e,t,n){"use strict";n.r(t);var o=n(52),r=n(34),a=n(0),i=n.n(a),s=n(11),c=(n(148),n(35)),l=n(36),f=function(e){var t=e.isInput,n=e.placeholder,o=e.inpFocused,r=e.nextLvl,a=e.name,s=function(e,t){var n=c.a.mehWords[t];!function(e,t){var n=Object(l.f)(t);e?Object(l.a)(n,"form__mess-show"):Object(l.h)(n,"form__mess-show")}(Object(l.d)(e,n),t)},f=function(e,t){var n=Object(l.f)(e);Object(l.h)(n,"form__mess-show"),t.length<=4&&function(e){var t=Object(l.f)("".concat(e,"_warn"));Object(l.a)(t,"form__mess-show")}(e)},u=function(e){var t=e.target.value,n=e.target.name;f(n,t)},m=function(e){!function(e){var t=Object(l.f)("".concat(e,"_warn")),n=Object(l.f)(e);Object(l.h)(n,"form__mess-show"),Object(l.h)(t,"form__mess-show"),o(e)}(e.target.name)},d=function(e){"Tab"===e.key&&(e.shiftKey?r(4):r(3))};return t?i.a.createElement("input",{className:"form__inp form__data",type:"text",placeholder:n,name:a,onFocus:m,onBlur:u,onKeyUp:function(e){var t=e.target.value,n=e.target.name;s(t,n)},onKeyDown:d}):i.a.createElement("textarea",{className:"form__txtarea form__data",placeholder:n,name:a,onFocus:m,onBlur:u,onKeyDown:d})},u=n(40),m=n(39);t.default=function(){Object(a.useEffect)((function(){document.title=c.a.titles.form,window.scrollTo(0,0)}),[]);var e=m.a.form__typing_5__hide_time,t=m.a.forbidShow_time,n=Object(a.useState)(1),d=Object(r.a)(n,2),_=d[0],p=d[1],h=Object(a.useState)(1),b=Object(r.a)(h,2),y=b[0],w=b[1],g=Object(a.useState)([1,3]),v=Object(r.a)(g,2),k=v[0],j=v[1],O=Object(a.useState)(!0),I=Object(r.a)(O,2),S=I[0],x=I[1],E=function(e){j(Object(o.a)(new Set(e)))},N=function n(r){if(S){var a=k;4!==r||k.includes(3)?(k.includes(r)||(2!==r&&3!==r&&4!==r&&5!==r&&6!==r||(x(!1),setTimeout((function(){return S&&x(!0)}),t)),E([].concat(Object(o.a)(a),[r])),p(r)),2!==r||k.includes(4)||E(Object(l.i)(a,3)),3===r&&k.includes(r)&&E([].concat(Object(o.a)(a),[2,4])),5!==r||k.includes(r)||setTimeout((function(){return n(0)}),e)):E([].concat(Object(o.a)(a),[3,4]))}};return i.a.createElement("section",{className:"form_section"},i.a.createElement("form",{className:"form",action:c.a.formAction,method:"POST",autoComplete:"off",onSubmit:function(e){e.preventDefault();var t=e.target,n=new FormData(t),o=new XMLHttpRequest;o.open(t.method,t.action),o.setRequestHeader("Accept","application/json"),o.onreadystatechange=function(){o.readyState===XMLHttpRequest.DONE&&200===o.status&&t.reset()},N(7),o.send(n)}},function(e){var t=e.inpFocused,n=e.nextLvl;return c.a.form__info.map((function(e,o){var r=e.form__lbl,a=e.isInput,s=e.placeholder,l=e.form__mess;return i.a.createElement("div",{key:o,className:"form__grp"},i.a.createElement("label",{className:"form__lbl"},r,":"),i.a.createElement(f,{isInput:a,placeholder:s,inpFocused:t,nextLvl:n,name:r}),i.a.createElement("span",{className:"form__focus"}),i.a.createElement("span",{className:"form__mess ".concat(r.toLowerCase())},l),i.a.createElement("span",{className:"form__mess ".concat(r.toLowerCase(),"_warn")},c.a.form__mess))}))}({inpFocused:function(e){w((function(e){return e+1})),2===y&&N(2),e===c.a.form__info[3].form__lbl&&N(5),e===c.a.form__info[6].form__lbl&&N(6)},nextLvl:N}),i.a.createElement("button",{className:"form__button"},"Submit"),function(e){return c.a.form__typings.map((function(t,n){return i.a.createElement(u.a,{key:n,text:c.a.form__typings[n],className:"form__typing form__typing_".concat(n+1),startDelay:m.a["form__typing_".concat(n+1,"__show_time")],shouldShow:e===n+1})}))}(_)),i.a.createElement(s.b,{className:"link_back form__back",to:"/"},c.a.link_back))}},34:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n(38);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],o=!0,r=!1,a=void 0;try{for(var i,s=e[Symbol.iterator]();!(o=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);o=!0);}catch(c){r=!0,a=c}finally{try{o||null==s.return||s.return()}finally{if(r)throw a}}return n}}(e,t)||Object(o.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},35:function(e,t,n){"use strict";t.a={card__title:"Contact Me",card__info:[{card__label:"name: ",card__content:"Roman Smunyov"},{card__label:"pseudonym: ",card__content:"RomanistHere"},{card__label:"location: ",card__content:"Minsk, Belarus"},{card__label:"profession: ",card__content:"JavaScript developer"}],card__typing:"There is not a single tracker here. Enjoy yourself :)",card__typings:["Aren't you going to press some links on card and go?","You do really like it here, don't you?","I am pleased :)","There are probably few more pages on this site","Some of them could be even prettier than this one","Okay, all right, let's just watch this page","This nice blue was picked by my lovely wife","Try to point your cursor to a link in the card...","Go press it!","Oh, boy, you don't really have much to do, don't you?","Have you ever seen a website sing? Would you like to?","I'm a little bit shy, you don't often sing here","Okay, all right, Let's sing!","Nah, I'm joking","I just can't *pronounces with british accent*","Are you even there? I don't think I can see you","Fine!","There is a house in New Orleans","They call the Rising Sun","And it's been the ruin of many a poor boy","And God, I know I'm one","My mother was a tailor","She sewed my new blue jeans","The end.","It really is.","Bye-bye then","","","My father was a gamblin' man","Down in New Orleans","Now the only thing a gambler needs","Is a suitcase and trunk","And the only time he's satisfied","Is when he's all drunk","","Oh mother tell your children","Not to do what I have done","Spend your lives in sin and misery","In the House of the Rising Sun","Thank you. Write hello to me and have a nice day!"],form__info:[{isInput:!0,form__lbl:"Position",placeholder:"Front-end developer",form__mess:" unlikely:("},{isInput:!0,form__lbl:"Where",placeholder:"Norway, Oslo. Onsite",form__mess:" \u043c\u0430\u043b\u043e\u0432\u0435\u0440\u043e\u044f\u0442\u043d\u043e)"},{isInput:!0,form__lbl:"Salary",placeholder:"5 000 - 7 000 USD Gross monthly",form__mess:"that's too low:("},{isInput:!1,form__lbl:"Project",placeholder:"Web app in the sphere of healthcare. Team is 30 person big..."},{isInput:!1,form__lbl:"Stack",placeholder:"React + Redux, TypeScript..."},{isInput:!1,form__lbl:"Responsibilities",placeholder:"Writing some code..."},{isInput:!1,form__lbl:"Contacts",placeholder:"Contact me back via email: example@gmal.com or LinkedIn..."}],form__mess:" This field is almost empty",mehWords:{Where:["belarus","russia","ukraine","\u0431\u0435\u043b\u0430","\u0440\u043e\u0441\u0441\u0438\u044f","\u0443\u043a\u0440\u0430","minsk","\u043c\u0438\u043d\u0441\u043a"],Position:["back","\u0431\u044d\u043a","full","\u0444\u0443\u043b"],Salary:["1000","2000","1500","2500"]},formAction:"https://formspree.io/xdowzzgv",form__typings:["Best way to fill would be like in example","You can jump to the next field by pressing tab","And return by pressing shift + tab","It works for every website, just don't forget to fill in all the fields!","You can pull and stretch it here to expand :)","Usually I reply within a day, so write to me again if there is no answer for a week:)","Thank you, I'm going to contact you soon. Have a great day!"],offer__title:"Summary",offer__list:[{offer__low_title:"Who am I",offer__text:'I\'m <span class="offer__word">a front-end developer</span> with over <span class="offer__word">4.5 years of experience and bachelor\'s in math</span>. In case this text is not up-to-date there is a link for my CV below.'},{offer__low_title:"What am I good at",offer__text:'I like things to be beautiful. And I think I have a feeling of it. This site and all of my projects were designed by me both for how-it-looks and how-it-works parts.\n\t\t\t\t<br>\n\t\t\t\t</br>\n\t\t\t\tFrom the technical side, I do really like <span class="offer__word">JavaScript</span>. There are a lot of good frameworks I am good with, like <span class="offer__word">Angular or React</span>, but I like plain JS most. I had a lot of projects with <span class="offer__word">WebGL and Three.js - browser, mobile and desktop apps, games</span>. My <span class="offer__word">CSS3 and HTML5</span> are strong. I still care about <span class="offer__word">semantics, cross-browser compatibility and accessibility</span> - you can always check it in <a href="https://github.com/Romanisthere" rel="noreferrer" target="_blank" class="link">my Git</a>. I\'ve got a feeling about <span class="offer__word">Web Components and functional programming</span> - I learn it in my spare time. Most complete stack of technologies I know how to use is in the CV.'},{offer__low_title:"What do I do now",offer__text:'I learn functional programming using <span class="offer__word">JS and Elm</span>, design, develop and promote <span class="offer__word">my products and contribute</span> to some other projects.'},{offer__low_title:"What am I seeking for",offer__text:'I would like to apply and improve my knowledge in <span class="offer__word">functional programming</span>, so I\'d join the place where it matters. I also <span class="offer__word">plan to relocate</span> to an English speaking country in near future. So I am actively considering <span class="offer__word">onsite or remote positions</span> with the opportunity to relocate.'},{offer__low_title:"How to reach me",offer__text:'If you want to show me some good-looking positions, the best way would be to fill <span class="offer__word">the special form</span> just below. Otherwise try this: <a href="https://www.linkedin.com/in/romanist/"  rel="noreferrer" target="_blank" class="link">LinkedIn</a>, <a href="mailto:smilemoon@yandex.ru"  rel="noreferrer" target="_blank" class="link">Email</a>, <a href="https://join.skype.com/invite/o2l5a5Qb2YWn"  rel="noreferrer" target="_blank" class="link">Skype</a>.'}],offer__nav:[{text:"Back",link:"/",comp:"Back"},{text:"Open CV",link:"",comp:"CV"},{text:"Try the form",link:"/form",comp:"Form"},{text:"See the projects",link:"/apps",comp:"Projects"}],offer__typing:"You can disable highlighting of keywords here \u2193",apps_page:{1:{name:"PopUpOFF",tilt_desc:"Unique browser extension",apps__desc:{Description:"Browser extension that eliminates all sort of popups, layouts, overlays and notifications from your screen.",Status:"- Comfortable and ready for everyday use; <br/>\n\t\t  \t\t\t\t\t- Some of the features are still in development;",Details:"- Open source; <br/>\n\t\t  \t\t\t\t\t- Non-commercial. No pay content; <br/>\n\t\t  \t\t\t\t\t- MutationObserver API;",Platforms:"Chrome, Firefox, Edge","My thanks to":"Igor Denisevich, Polina Kasterava, Whatatay T, Oleg Matveenko, Elizabeth Portman"}},2:{name:"Stylify",tilt_desc:"Unique browser extension",apps__desc:{Description:'Browser extension that fixes how "bad" websites look. Makes content readable.',Status:"- Works fine but not comfortable for everyday use; <br/>\n\t\t\t\t\t\t\t- Needs redesign; <br/>\n\t\t  \t\t\t\t\t- In development;",Details:"- Open source; <br/>\n\t\t  \t\t\t\t\t- Non-commercial. No pay content;",Platforms:"Chrome. Soon Firefox and Edge"}},3:{name:"PLAS",tilt_desc:"Unique browser extension",apps__desc:{Description:"Browser extension that adds search field to YouTube. Search within the playlist.",Status:"- Works fine but not comfortable for everyday use; <br/>\n\t\t\t\t\t\t\t- Needs redesign; <br/>\n\t\t  \t\t\t\t\t- In development;",Details:"- Open source; <br/>\n\t\t  \t\t\t\t\t- Non-commercial. No pay content;",Platforms:"Chrome. Soon Firefox and Edge"}}},apps_page__links:{1:{0:"https://github.com/RomanistHere/PopUpOFF",1:"https://chrome.google.com/webstore/detail/popupoff-popup-blocker/ifnkdbpmgkdbfklnbfidaackdenlmhgh",2:"https://addons.mozilla.org/en-US/firefox/addon/popupoff/",3:"https://microsoftedge.microsoft.com/addons/detail/elacdkdmimelpnkbccdanmnabhajdccm"},2:{0:"https://github.com/RomanistHere/StyLIFy",1:"https://chrome.google.com/webstore/detail/stylify-unuglify/knnnacgjjmlljheglipemamhdlckpfjc"},3:{0:"https://github.com/RomanistHere/YouTube-PLAS-Website",1:"https://chrome.google.com/webstore/detail/plas-playlist-search/khnbkjjlffefikjilbngeoffaiojpboc"}},titles:{apps:"Products I develop",card:"You are welcome here",offer:"Let's see who I am",form:"Make me an offer",posts:"Articles I write"},link_back:"To main page",no_page__text:"404"}},36:function(e,t,n){"use strict";n.d(t,"f",(function(){return a})),n.d(t,"a",(function(){return s})),n.d(t,"h",(function(){return c})),n.d(t,"d",(function(){return f})),n.d(t,"g",(function(){return i})),n.d(t,"j",(function(){return l})),n.d(t,"i",(function(){return u})),n.d(t,"k",(function(){return m})),n.d(t,"l",(function(){return d})),n.d(t,"c",(function(){return _})),n.d(t,"b",(function(){return p})),n.d(t,"e",(function(){return h}));var o=n(34),r=n(0),a=function(e){return document.querySelector(".".concat(null===e||void 0===e?void 0:e.toLowerCase()))},i=function(e){return document.querySelectorAll(".".concat(e))},s=function(e,t){return null===e||void 0===e?void 0:e.classList.add(t)},c=function(e,t){return null===e||void 0===e?void 0:e.classList.remove(t)},l=function(e,t){return null===e||void 0===e?void 0:e.classList.toggle(t)},f=function(e,t){return t.some((function(t){return e.toLowerCase().includes(t)}))},u=function(e,t){return e.filter((function(e){return e!==t}))},m=function(e,t){var n=Object(r.useRef)(),o=Object(r.useRef)(e);return Object(r.useEffect)((function(){o.current=e}),[e]),Object(r.useEffect)((function(){if("number"===typeof t)return n.current=window.setTimeout((function(){return o.current()}),t),function(){return window.clearTimeout(n.current)}}),[t]),n},d=function(){var e=Object(r.useState)(window.innerWidth),t=Object(o.a)(e,2),n=t[0],a=t[1],i=Object(r.useState)(window.innerHeight),s=Object(o.a)(i,2),c=s[0],l=s[1];return Object(r.useEffect)((function(){var e=function(){a(window.innerWidth),l(window.innerHeight)};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),{width:n,height:c}},_=function(e){return Math.floor(Math.random()*e)+1},p=function(e,t){return e.find((function(e){return e.slug===t}))},h=function(e){var t={};return e.keys().map((function(n,o){t[n.replace("./","")]=e(n)})),t}},37:function(e,t,n){"use strict";function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}n.d(t,"a",(function(){return o}))},38:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n(37);function r(e,t){if(e){if("string"===typeof e)return Object(o.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(o.a)(e,t):void 0}}},39:function(e,t,n){"use strict";t.a={offer_switcher__hide_time:15e3,offer_switcher__show_time:2e3,card_fill__delay:1700,form__typing_1__show_time:2e3,form__typing_2__show_time:0,form__typing_3__show_time:0,form__typing_5__hide_time:1e4,forbidShow_time:5e3,card__typing__show_time:1e4,card__typing__hide_time:3e4,card__typings__show_time:12e3,card__typings__hide_time:9e3,browsers:{1:[0,1,2,3],2:[0,1],3:[0,1]}}},40:function(e,t,n){"use strict";var o=n(34),r=n(0),a=n.n(r),i=n(36);n(41);t.a=function(e){var t=e.text,n=e.className,s=e.startDelay,c=void 0===s?0:s,l=e.shouldShow,f=Object(r.useState)(!1),u=Object(o.a)(f,2),m=u[0],d=u[1];return Object(i.k)((function(){return d(!0)}),c),a.a.createElement("div",{className:"typing ".concat(n," ").concat(m&&l?"typing-active":"")},a.a.createElement("p",{className:"typing__text"},t),a.a.createElement("div",{className:"typing__wrap"},a.a.createElement("p",{className:"typing__hide"},"\xa0"),a.a.createElement("p",{className:"typing__hide"},"\xa0"),a.a.createElement("p",{className:"typing__hide"},"\xa0"),a.a.createElement("p",{className:"typing__hide"},"\xa0"),a.a.createElement("p",{className:"typing__hide"},"\xa0"),a.a.createElement("p",{className:"typing__hide"},"\xa0"),a.a.createElement("p",{className:"typing__hide"},"\xa0"),a.a.createElement("p",{className:"typing__hide"},"\xa0")))}},41:function(e,t,n){},52:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var o=n(37);var r=n(38);function a(e){return function(e){if(Array.isArray(e))return Object(o.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(r.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=9.97f326b9.chunk.js.map