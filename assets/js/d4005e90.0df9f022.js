"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3832],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(r),g=a,h=c["".concat(s,".").concat(g)]||c[g]||u[g]||o;return r?n.createElement(h,i(i({ref:t},d),{},{components:r})):n.createElement(h,i({ref:t},d))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},3717:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(3117),a=(r(7294),r(3905));const o={title:"Trigger a pattern from the start",id:"startpattern"},i=void 0,l={unversionedId:"patternlib/howtos/startpattern",id:"patternlib/howtos/startpattern",title:"Trigger a pattern from the start",description:"The Tidal Cycles cycles clock is always ticking. Sometimes, you will need to start your pattern from the beginning, in a deterministic way. There are many ways to do so.",source:"@site/docs/patternlib/howtos/startpattern.md",sourceDirName:"patternlib/howtos",slug:"/patternlib/howtos/startpattern",permalink:"/docs/patternlib/howtos/startpattern",draft:!1,editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/patternlib/howtos/startpattern.md",tags:[],version:"current",lastUpdatedAt:1688017208,formattedLastUpdatedAt:"Jun 29, 2023",frontMatter:{title:"Trigger a pattern from the start",id:"startpattern"},sidebar:"docs",previous:{title:"Play chords",permalink:"/docs/patternlib/howtos/playchords"},next:{title:"Typing fast and well",permalink:"/docs/around_tidal/typing_fast_and_well"}},s={},p=[{value:"nudge",id:"nudge",level:2},{value:"qtrigger and trigger",id:"qtrigger-and-trigger",level:2},{value:"resetCycles",id:"resetcycles",level:2}],d={toc:p};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"Tidal Cycles")," cycles clock is always ticking. Sometimes, you will need to start your pattern from the beginning, in a deterministic way. There are ",(0,a.kt)("a",{parentName:"p",href:"https://club.tidalcycles.org/t/how-to-trigger-a-pattern-reliably-from-the-start/3058/11"},"many ways to do so"),"."),(0,a.kt)("h2",{id:"nudge"},"nudge"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"nudge")," is a function originally implemented to play around with the timing of audio sample playback. You can use it to get a nice ",(0,a.kt)("inlineCode",{parentName:"p"},"swing")," effect. You can also use it to deal with various timing problems."),(0,a.kt)("p",null,"You can set a nudge value on individual patterns to get them to ",(0,a.kt)("inlineCode",{parentName:"p"},"shift")," in time:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ s "bd*4" # nudge 0.9 -- here I\'m setting the nudge for this pattern\n')),(0,a.kt)("p",null,"If you need to affect all of the patterns, you can also use ",(0,a.kt)("inlineCode",{parentName:"p"},"nudge")," on every pattern using ",(0,a.kt)("inlineCode",{parentName:"p"},"all"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ s "bd*4" # nudge 0.9 -- nudge for this pattern\nd2 $ fast 2 $ s "~ sn" # nudge 0.4 -- different value\n\nall $ (|+ nudge 0.2) -- adding 0.2 to the nudge param.\n-- that would result in # nudge 1.1 for d1 and 0.6 for d2\nnudgeAll 0.2 -- alternative shorthand version\n')),(0,a.kt)("h2",{id:"qtrigger-and-trigger"},"qtrigger and trigger"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-haskell"},'d2 $ sound "bd hh hh hh"\nd2 $ qtrigger $ sound "bd hh hh hh"\nd2 $ trigger $ sound "bd hh hh hh"\n')),(0,a.kt)("h2",{id:"resetcycles"},"resetCycles"),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"resetCycles")," to... reset the cycle count:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-haskell"},'do\n  resetCycles\n  d1 $\xa0s "bd*4"\n  d2 $ s "~ hh ~ hh*2"\n')))}c.isMDXComponent=!0}}]);