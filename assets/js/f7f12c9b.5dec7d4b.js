"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5528],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>k});var n=t(7294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=n.createContext({}),o=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},c=function(e){var a=o(e.components);return n.createElement(p.Provider,{value:a},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=o(t),m=l,k=d["".concat(p,".").concat(m)]||d[m]||u[m]||r;return t?n.createElement(k,s(s({ref:a},c),{},{components:t})):n.createElement(k,s({ref:a},c))}));function k(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=t.length,s=new Array(r);s[0]=m;var i={};for(var p in a)hasOwnProperty.call(a,p)&&(i[p]=a[p]);i.originalType=e,i[d]="string"==typeof e?e:l,s[1]=i;for(var o=2;o<r;o++)s[o]=t[o];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5389:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>o});var n=t(3117),l=(t(7294),t(3905));const r={title:"Concatenation",id:"concatenation"},s=void 0,i={unversionedId:"reference/concatenation",id:"reference/concatenation",title:"Concatenation",description:"This page will present you all the functions that can be used to concatenate (e.g. add) things together in various ways. Each function will be presented following the same model:",source:"@site/docs/reference/concatenation.md",sourceDirName:"reference",slug:"/reference/concatenation",permalink:"/docs/reference/concatenation",draft:!1,editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/reference/concatenation.md",tags:[],version:"current",lastUpdatedAt:1695053235,formattedLastUpdatedAt:"Sep 18, 2023",frontMatter:{title:"Concatenation",id:"concatenation"},sidebar:"reference",previous:{title:"Even more",permalink:"/docs/reference/even-more"},next:{title:"Accumulation",permalink:"/docs/reference/accumulation"}},p={},o=[{value:"Many cats",id:"many-cats",level:2},{value:"cat",id:"cat",level:3},{value:"fastcat",id:"fastcat",level:3},{value:"timeCat",id:"timecat",level:3},{value:"randcat",id:"randcat",level:3},{value:"wrandcat",id:"wrandcat",level:3},{value:"Append family",id:"append-family",level:2},{value:"append",id:"append",level:3},{value:"fastAppend",id:"fastappend",level:3},{value:"wedge",id:"wedge",level:2},{value:"brak",id:"brak",level:2},{value:"listToPat",id:"listtopat",level:2},{value:"fromList",id:"fromlist",level:2},{value:"fromMaybes",id:"frommaybes",level:2},{value:"flatpat",id:"flatpat",level:2},{value:"run",id:"run",level:2},{value:"scan",id:"scan",level:2}],c={toc:o};function d(e){let{components:a,...t}=e;return(0,l.kt)("wrapper",(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This page will present you all the functions that can be used to concatenate (e.g. add) things together in various ways. Each function will be presented following the same model:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Type signature"),": how the function is declared on the ",(0,l.kt)("strong",{parentName:"li"},"Haskell")," side."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Description"),": verbal description of the function."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Examples"),": a small list of examples that you can copy/paste in your editor.")),(0,l.kt)("h2",{id:"many-cats"},"Many cats"),(0,l.kt)("h3",{id:"cat"},"cat"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: cat :: [Pattern a] -> Pattern a\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"cat"),", (also known as ",(0,l.kt)("inlineCode",{parentName:"p"},"slowcat"),", to match with ",(0,l.kt)("inlineCode",{parentName:"p"},"fastcat")," defined below) concatenates a list of patterns into a new pattern; each pattern in the list will maintain its original duration. For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ cat [sound "bd*2 sn", sound "arpy jvbass*2"]\n\nd1 $ cat [sound "bd*2 sn", sound "arpy jvbass*2", sound "drum*2"]\n\nd1 $ cat [sound "bd*2 sn", sound "jvbass*3", sound "drum*2", sound "ht mt"]\n')),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"There is also a ",(0,l.kt)("inlineCode",{parentName:"p"},"slowcat")," function, perfectly similar to ",(0,l.kt)("inlineCode",{parentName:"p"},"cat"),". This function exists as a mirror of ",(0,l.kt)("inlineCode",{parentName:"p"},"fastcat"),".")),(0,l.kt)("h3",{id:"fastcat"},"fastcat"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: fastcat :: [Pattern a] -> Pattern a\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"fastcat")," works like cat above, but squashes all the patterns to fit a single cycle."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ fastcat [sound "bd*2 sn", sound "arpy jvbass*2"]\n\nd1 $ fastcat [sound "bd*2 sn", sound "arpy jvbass*2", sound "drum*2"]\n\nd1 $ fastcat [sound "bd*2 sn", sound "jvbass*3", sound "drum*2", sound "ht mt"]\n')),(0,l.kt)("h3",{id:"timecat"},"timeCat"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: timeCat :: [(Time, Pattern a)] -> Pattern a\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"timeCat")," is like ",(0,l.kt)("inlineCode",{parentName:"p"},"fastcat")," except that you provide proportionate sizes of the patterns to each other for when they're concatenated into one cycle. The larger the value in the list, the larger relative size the pattern takes in the final loop. If all values are equal then this is equivalent to ",(0,l.kt)("inlineCode",{parentName:"p"},"fastcat")," (e.g. the following two code fragments are equivalent)."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ fastcat [s "bd*4", s "hh27*8", s "superpiano" # n 0]\n\nd1 $ timeCat [(1, s "bd*4"),\n              (1, s "hh27*8"),\n              (1, s "superpiano" # n 0)]\n')),(0,l.kt)("h3",{id:"randcat"},"randcat"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: randcat :: [Pattern a] -> Pattern a\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"randcat")," is similar to ",(0,l.kt)("inlineCode",{parentName:"p"},"cat"),", but rather than playing the given patterns in order, it picks them at random. For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ randcat [sound "bd*2 sn", sound "jvbass*3", sound "drum*2", sound "ht mt"]\n')),(0,l.kt)("p",null,"Or the more compact, equivalent, version:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound (randcat ["bd*2 sn", "jvbass*3", "drum*2", "ht mt"])\n')),(0,l.kt)("h3",{id:"wrandcat"},"wrandcat"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: wrandcat :: [(Pattern a, Double)] -> Pattern a\n")),(0,l.kt)("p",null,"This is a variation of ",(0,l.kt)("inlineCode",{parentName:"p"},"randcat")," where you can give each pattern in the list a relative probability:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound (\n      wrandcat [\n        ("bd*2 sn", 5), ("jvbass*3", 2), ("drum*2", 2), ("ht mt", 1)\n      ]\n    )\n')),(0,l.kt)("p",null,"Here, the first pattern is the most likely and will play about half the times, and the last pattern is the less likely, with only a ",(0,l.kt)("inlineCode",{parentName:"p"},"10%")," probability."),(0,l.kt)("h2",{id:"append-family"},"Append family"),(0,l.kt)("h3",{id:"append"},"append"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: append :: Pattern a -> Pattern a -> Pattern a\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"append")," combines two patterns into a new pattern, where cycles alternate between the first and second pattern:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ append (sound "bd*2 sn") (sound "arpy jvbass*2")\n')),(0,l.kt)("p",null,"It has the alias ",(0,l.kt)("inlineCode",{parentName:"p"},"slowAppend"),", in sympathy with ",(0,l.kt)("inlineCode",{parentName:"p"},"fastAppend"),", described below."),(0,l.kt)("h3",{id:"fastappend"},"fastAppend"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: fastAppend :: Pattern a -> Pattern a -> Pattern a\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"fastAppend")," works like append described above, but each pair of cycles from the two patterns are squashed to fit a single cycle."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ fastAppend (sound "bd*2 sn") (sound "arpy jvbass*2")\n')),(0,l.kt)("h2",{id:"wedge"},"wedge"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: wedge :: Time -> Pattern a -> Pattern a -> Pattern a\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"wedge")," combines two patterns by squashing them into a single cycle. It takes a ratio as the first argument. The ratio determines what percentage of the pattern cycle is taken up by the first pattern. The second pattern fills in the remainder of the pattern cycle. For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ wedge (1/4) (sound "bd*2 arpy*3 cp sn*2") (sound "odx [feel future]*2 hh hh")\n')),(0,l.kt)("h2",{id:"brak"},"brak"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: brak :: Pattern a -> Pattern a\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"brak")," makes a pattern sound a bit like a breakbeat. It does this by every other cycle, squashing the pattern to fit half a cycle, and offsetting it by a quarter of a cycle."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ brak $ sound "[feel feel:3, hc:3 hc:2 hc:4 ho:1]"\n')),(0,l.kt)("h2",{id:"listtopat"},"listToPat"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: listToPat :: [a] -> Pattern a\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"listToPat")," takes a list of things and turns them into a pattern where each item in the list becomes an event all happening in the same cycle, looping upon subsequent cycles. Can also be called as ",(0,l.kt)("inlineCode",{parentName:"p"},"fastFromList")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ n (listToPat [0, 1, 2]) # s "superpiano"\n')),(0,l.kt)("p",null,"is equivalent to"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ n "[0 1 2]" # s "superpiano"\n')),(0,l.kt)("h2",{id:"fromlist"},"fromList"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"fromList")," takes a list of things and turns them into a pattern where each item in the list has a duration of one cycle, looping back around at the end of the list."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ n (fromList [0, 1, 2]) # s "superpiano"\n')),(0,l.kt)("p",null,"is equivalent to"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskel"},'d1 $ n "<0 1 2>" # s "superpiano"\n')),(0,l.kt)("h2",{id:"frommaybes"},"fromMaybes"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskel"},"Type: fromMaybes :: [Maybe a] -> Pattern a\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"fromMaybes")," is much like ",(0,l.kt)("inlineCode",{parentName:"p"},"listToPat")," but when it encounters a Nothing it puts a gap in the pattern and when it encounters Just x puts x in the pattern."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskel"},'d1 $ n (fromMaybes [Just 0, Nothing, Just 2]) # s "superpiano"\n')),(0,l.kt)("p",null,"is equivalent to"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskel"},'d1 $ n "0 ~ 2" # s "superpiano"\n')),(0,l.kt)("h2",{id:"flatpat"},"flatpat"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: flatpat :: Pattern [a] -> Pattern a\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"flatpat")," takes a pattern of lists and flattens it into a pattern where all the events in each list happen simultaneously. For example, the following code uses flatpat in combination with listToPat to create an alternating pattern of chords."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ n (flatpat $ listToPat [[0,4,7],[(-12),(-8),(-5)]]) # s "superpiano" # sustain 2\n')),(0,l.kt)("p",null,"This code is equivalent to:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ n ("[0,4,7] [-12,-8,-5]") # s "superpiano" # sustain 2\n')),(0,l.kt)("h2",{id:"run"},"run"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: run :: (Num a, Enum a) => Pattern a -> Pattern a\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"run")," function generates a pattern representing a cycle of numbers from ",(0,l.kt)("inlineCode",{parentName:"p"},"0")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"n-1")," inclusive. Notably used to ",(0,l.kt)("inlineCode",{parentName:"p"},"run")," through a folder of samples in order:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ n (run 8) # sound "amencutup"\n')),(0,l.kt)("p",null,"The first parameter to run can be given as a pattern:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ n (run "<4 8 4 6>") # sound "amencutup"\n')),(0,l.kt)("h2",{id:"scan"},"scan"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: scan :: (Num a, Enum a) => Pattern a -> Pattern a\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"scan")," is similar to ",(0,l.kt)("inlineCode",{parentName:"p"},"run"),", but starts at 1 for the first cycle, adding an additional number each cycle until it reaches ",(0,l.kt)("inlineCode",{parentName:"p"},"n"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ n (scan 8) # sound "amencutup"\n')))}d.isMDXComponent=!0}}]);