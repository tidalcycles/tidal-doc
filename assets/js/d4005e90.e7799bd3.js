"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3832],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),g=a,h=d["".concat(s,".").concat(g)]||d[g]||u[g]||o;return n?r.createElement(h,l(l({ref:t},p),{},{components:n})):r.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},3717:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(3117),a=(n(7294),n(3905));const o={title:"Trigger a pattern from the start",id:"startpattern"},l=void 0,i={unversionedId:"patternlib/howtos/startpattern",id:"patternlib/howtos/startpattern",title:"Trigger a pattern from the start",description:"The Tidal Cycles cycles clock is always ticking. Sometimes, you will need to start your pattern from the beginning, in a deterministic way. There are many ways to do so.",source:"@site/docs/patternlib/howtos/startpattern.md",sourceDirName:"patternlib/howtos",slug:"/patternlib/howtos/startpattern",permalink:"/docs/patternlib/howtos/startpattern",draft:!1,editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/patternlib/howtos/startpattern.md",tags:[],version:"current",lastUpdatedAt:1736394972,formattedLastUpdatedAt:"Jan 9, 2025",frontMatter:{title:"Trigger a pattern from the start",id:"startpattern"},sidebar:"docs",previous:{title:"Play chords",permalink:"/docs/patternlib/howtos/playchords"},next:{title:"Typing fast and well",permalink:"/docs/around_tidal/typing_fast_and_well"}},s={},c=[{value:"nudge",id:"nudge",level:2},{value:"qtrigger and trigger",id:"qtrigger-and-trigger",level:2},{value:"resetCycles",id:"resetcycles",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"Tidal Cycles")," cycles clock is always ticking. Sometimes, you will need to start your pattern from the beginning, in a deterministic way. There are ",(0,a.kt)("a",{parentName:"p",href:"https://club.tidalcycles.org/t/how-to-trigger-a-pattern-reliably-from-the-start/3058/11"},"many ways to do so"),"."),(0,a.kt)("h2",{id:"nudge"},"nudge"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"nudge")," is a function originally implemented to play around with the timing of audio sample playback. You can use it to get a nice ",(0,a.kt)("inlineCode",{parentName:"p"},"swing")," effect. You can also use it to deal with various timing problems."),(0,a.kt)("p",null,"You can set a nudge value on individual patterns to get them to ",(0,a.kt)("inlineCode",{parentName:"p"},"shift")," in time:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ s "bd*4" # nudge 0.9 -- here I\'m setting the nudge for this pattern\n')),(0,a.kt)("p",null,"If you need to affect all of the patterns, you can also use ",(0,a.kt)("inlineCode",{parentName:"p"},"nudge")," on every pattern using ",(0,a.kt)("inlineCode",{parentName:"p"},"all"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ s "bd*4" # nudge 0.9 -- nudge for this pattern\nd2 $ fast 2 $ s "~ sn" # nudge 0.4 -- different value\n\nall $ (|+ nudge 0.2) -- adding 0.2 to the nudge param.\n-- that would result in # nudge 1.1 for d1 and 0.6 for d2\nnudgeAll 0.2 -- alternative shorthand version\n')),(0,a.kt)("h2",{id:"qtrigger-and-trigger"},"qtrigger and trigger"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-haskell"},'d2 $ sound "bd hh hh hh"\nd2 $ qtrigger $ sound "bd hh hh hh"\nd2 $ trigger $ sound "bd hh hh hh"\n')),(0,a.kt)("h2",{id:"resetcycles"},"resetCycles"),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"resetCycles")," to... reset the cycle count. This will reset the cycle count as soon as you run it, not at the end of the current cycle:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-haskell"},'do\n  resetCycles\n  d1 $\xa0s "bd*4"\n  d2 $ s "~ hh ~ hh*2"\n')))}d.isMDXComponent=!0}}]);