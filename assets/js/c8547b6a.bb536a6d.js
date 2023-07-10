"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8820],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var l=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},o=Object.keys(e);for(l=0;l<o.length;l++)a=o[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)a=o[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=l.createContext({}),c=function(e){var t=l.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=c(e.components);return l.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),d=n,h=u["".concat(i,".").concat(d)]||u[d]||m[d]||o;return a?l.createElement(h,r(r({ref:t},p),{},{components:a})):l.createElement(h,r({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:n,r[1]=s;for(var c=2;c<o;c++)r[c]=a[c];return l.createElement.apply(null,r)}return l.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3392:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var l=a(3117),n=(a(7294),a(3905));const o={title:"Windows Cleanup - Chocolatey",id:"windows-choco-cleanup"},r=void 0,s={unversionedId:"getting-started/windows-choco-cleanup",id:"getting-started/windows-choco-cleanup",title:"Windows Cleanup - Chocolatey",description:"(Thanks to @il_mix for creating and testing the chocolatey cleanup steps.)",source:"@site/docs/getting-started/windows-choco-cleanup.md",sourceDirName:"getting-started",slug:"/getting-started/windows-choco-cleanup",permalink:"/docs/getting-started/windows-choco-cleanup",draft:!1,editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/getting-started/windows-choco-cleanup.md",tags:[],version:"current",lastUpdatedAt:1688965639,formattedLastUpdatedAt:"Jul 10, 2023",frontMatter:{title:"Windows Cleanup - Chocolatey",id:"windows-choco-cleanup"},sidebar:"docs",previous:{title:"Start Tidal",permalink:"/docs/getting-started/tidal_start"},next:{title:"Upgrading",permalink:"/docs/getting-started/upgrading"}},i={},c=[{value:"Steps for Haskell Cleanup",id:"steps-for-haskell-cleanup",level:2},{value:"Tidal install options",id:"tidal-install-options",level:4},{value:"Steps for full wipe of Chocolatey",id:"steps-for-full-wipe-of-chocolatey",level:2},{value:"Steps for removing individual components",id:"steps-for-removing-individual-components",level:2}],p={toc:c};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,l.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"(Thanks to @il_mix for creating and testing the chocolatey cleanup steps.)")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Purpose:"),(0,n.kt)("br",{parentName:"p"}),"\n","This documentation is a reference for how to cleanup / uninstall from a Windows Chocolatey Installation. It covers multiple scenarios:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Clean up of Haskell components"),(0,n.kt)("li",{parentName:"ol"},"Full wipe of all Chocolatey component installs, then remove the choco application"),(0,n.kt)("li",{parentName:"ol"},"Removing individual components")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Background"),(0,n.kt)("br",{parentName:"p"}),"\n","Chocolatey is package management system that is used for the Tidal Cycles automated install process. It covers the complete install of all components and dependencies needed to run Tidal. It is a good solution and works without issue much of the time. But there can also be problems and there may be a need to remove components or the whole Chocolatey environment from your computer. ",(0,n.kt)("strong",{parentName:"p"},"This page is only a guide. Not all problems are covered.")),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"All steps in Powershell need to be done running Powershell as administrator."),(0,n.kt)("li",{parentName:"ul"},"You can run this command to see what components and versions are currently installed by choco:")),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-powershell"},"choco list --local-only\n"))),(0,n.kt)("h2",{id:"steps-for-haskell-cleanup"},"Steps for Haskell Cleanup"),(0,n.kt)("p",null,"If you have an older install from chocolatey, there will be older versions of Haskell components that can cause conflicts after the new Haskell components are installed. In this scenario, you need to uninstall any Haskell files before running the Chocolatey Tidal installer. Note that in some cases, a full uninstall of all Chocolatey may still be needed or desired."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Uninstall Haskell components")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-powershell"},"choco uninstall ghc\nchoco uninstall cabal\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Remove local packages - delete these directories:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-powershell"},"C:\\Users\\yourUser\\AppData\\Roaming\\ghc\nC:\\Users\\yourUser\\AppData\\Roaming\\cabal\nC:\\Users\\yourUser\\AppData\\Local\\ghc\nC:\\Users\\yourUser\\AppData\\Local\\cabal\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Remove any leftover ghc / cabal directories:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-powershell"},"C:\\tools\\ghc-\\<version\\>  for example: - C:\\tools\\ghc-8.10.0\nC:\\ProgramData\\chocolatey\\bin\\cabal.exe\n")),(0,n.kt)("h4",{id:"tidal-install-options"},"Tidal install options"),(0,n.kt)("p",null,"After you cleanup Haskell, you have two options:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Run the full automated installer again.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-powershell"},"choco install tidalcycles\n")),(0,n.kt)("p",null,"-"," OR -"),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Install just Haskell via chocolatey and manually install Tidal")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-powershell"},"choco install ghc\ncabal update\ncabal v1-install tidal\n")),(0,n.kt)("h2",{id:"steps-for-full-wipe-of-chocolatey"},"Steps for full wipe of Chocolatey"),(0,n.kt)("p",null,"This will remove everything installed by Chocolatey, then remove the choco installer itself. It cleans up environment variables and directories. Note: this will remove everything in the Tidal stack: SuperCollider/SuperDirt, Pulsar, Haskell, etc. This is recommended if:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"you want to switch to manual install"),(0,n.kt)("li",{parentName:"ul"},'you have significant install problems and want to "start fresh"')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Steps")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Uninstall chocolatey installed components")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-powershell"},"choco uninstall all -x -y\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Remove applications - delete these directories")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"C:\\tools\nC:\\ProgramData\\chocolatey\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Remove local packages - delete these directories:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"C:\\Users\\yourUser\\AppData\\Roaming\\ghc\nC:\\Users\\yourUser\\AppData\\Roaming\\cabal\nC:\\Users\\yourUser\\AppData\\Local\\ghc\nC:\\Users\\yourUser \\AppData\\Local\\cabal\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Environment variables"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"User variables:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"delete: ChocolateyLastPathUpdate, ChocolateyToolsLocation"),(0,n.kt)("li",{parentName:"ul"},"from Path, remove: C:\\tools\\ghc-yourVersionNumber\\bin"))),(0,n.kt)("li",{parentName:"ul"},"System variables:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"delete variables: ChocolateyInstall"),(0,n.kt)("li",{parentName:"ul"},"from Path, remove: C:\\ProgramData\\chocolatey\\bin"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Reboot system")))),(0,n.kt)("p",null,"Now you can proceed with the Manual install steps, or start over from scratch with the Automated installer steps."),(0,n.kt)("p",null,"Good luck!"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Sometimes the Tidal install process can be complicated and take many steps. Stick with it! The good news is that once it is working, the Tidal stack is very stable and reliable.")),(0,n.kt)("h2",{id:"steps-for-removing-individual-components"},"Steps for removing individual components"),(0,n.kt)("p",null,"Any package installed by choco can be uninstalled with basic choco commands. The challenge is that there may be other directories or files left behind that could cause conflicts or confusion later. (What is this old directory doing on my system?)"),(0,n.kt)("p",null,"What is installed by choco?"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-powershell"},"choco list --local-only\n")),(0,n.kt)("p",null,"To uninstall a component, first run the uninstall command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-powershell"},"choco uninstall <component>\n# choco uninstall sc3-plugins\n")),(0,n.kt)("p",null,"Then search your system to find out if there are any files left behind that need to be removed."))}u.isMDXComponent=!0}}]);