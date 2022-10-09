"use strict";(self.webpackChunkpixiu_quant_page=self.webpackChunkpixiu_quant_page||[]).push([[859],{3905:(A,e,t)=>{t.d(e,{Zo:()=>c,kt:()=>d});var n=t(7294);function a(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function r(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(A);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,n)}return t}function o(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){a(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function s(A,e){if(null==A)return{};var t,n,a=function(A,e){if(null==A)return{};var t,n,a={},r=Object.keys(A);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||(a[t]=A[t]);return a}(A,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(A);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(a[t]=A[t])}return a}var l=n.createContext({}),i=function(A){var e=n.useContext(l),t=e;return A&&(t="function"==typeof A?A(e):o(o({},e),A)),t},c=function(A){var e=i(A.components);return n.createElement(l.Provider,{value:e},A.children)},u={inlineCode:"code",wrapper:function(A){var e=A.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(A,e){var t=A.components,a=A.mdxType,r=A.originalType,l=A.parentName,c=s(A,["components","mdxType","originalType","parentName"]),p=i(t),d=a,m=p["".concat(l,".").concat(d)]||p[d]||u[d]||r;return t?n.createElement(m,o(o({ref:e},c),{},{components:t})):n.createElement(m,o({ref:e},c))}));function d(A,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof A||a){var r=t.length,o=new Array(r);o[0]=p;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=A,s.mdxType="string"==typeof A?A:a,o[1]=s;for(var i=2;i<r;i++)o[i]=t[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},3494:(A,e,t)=>{t.r(e),t.d(e,{Highlight:()=>c,assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>i});var n=t(7462),a=(t(7294),t(3905));const r={sidebar_position:4},o="Markdown Features",s={unversionedId:"tutorial-basics/markdown-features",id:"tutorial-basics/markdown-features",title:"Markdown Features",description:"Docusaurus supports Markdown and a few additional features.",source:"@site/docs/tutorial-basics/markdown-features.mdx",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/markdown-features",permalink:"/pixiu/docs/tutorial-basics/markdown-features",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Create a Blog Post",permalink:"/pixiu/docs/tutorial-basics/create-a-blog-post"},next:{title:"Deploy your site",permalink:"/pixiu/docs/tutorial-basics/deploy-your-site"}},l={},i=[{value:"Front Matter",id:"front-matter",level:2},{value:"Links",id:"links",level:2},{value:"Images",id:"images",level:2},{value:"Code Blocks",id:"code-blocks",level:2},{value:"Admonitions",id:"admonitions",level:2},{value:"MDX and React Components",id:"mdx-and-react-components",level:2}],c=A=>{let{children:e,color:t}=A;return(0,a.kt)("span",{style:{backgroundColor:t,borderRadius:"20px",color:"#fff",padding:"10px",cursor:"pointer"},onClick:()=>{alert(`You clicked the color ${t} with label ${e}`)}},e)},u={toc:i,Highlight:c};function p(A){let{components:e,...r}=A;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"markdown-features"},"Markdown Features"),(0,a.kt)("p",null,"Docusaurus supports ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://daringfireball.net/projects/markdown/syntax"},"Markdown"))," and a few ",(0,a.kt)("strong",{parentName:"p"},"additional features"),"."),(0,a.kt)("h2",{id:"front-matter"},"Front Matter"),(0,a.kt)("p",null,"Markdown documents have metadata at the top called ",(0,a.kt)("a",{parentName:"p",href:"https://jekyllrb.com/docs/front-matter/"},"Front Matter"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="my-doc.md"',title:'"my-doc.md"'},"// highlight-start\n---\nid: my-doc-id\ntitle: My document title\ndescription: My document description\nslug: /my-custom-url\n---\n// highlight-end\n\n## Markdown heading\n\nMarkdown text with [links](./hello.md)\n")),(0,a.kt)("h2",{id:"links"},"Links"),(0,a.kt)("p",null,"Regular Markdown links are supported, using url paths or relative file paths."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md"},"Let's see how to [Create a page](/create-a-page).\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md"},"Let's see how to [Create a page](./create-a-page.md).\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result:")," Let's see how to ",(0,a.kt)("a",{parentName:"p",href:"/pixiu/docs/tutorial-basics/create-a-page"},"Create a page"),"."),(0,a.kt)("h2",{id:"images"},"Images"),(0,a.kt)("p",null,"Regular Markdown images are supported."),(0,a.kt)("p",null,"You can use absolute paths to reference images in the static directory (",(0,a.kt)("inlineCode",{parentName:"p"},"static/img/docusaurus.png"),"):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md"},"![Docusaurus logo](/img/docusaurus.png)\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Docusaurus logo",src:t(6084).Z,width:"256",height:"256"})),(0,a.kt)("p",null,"You can reference images relative to the current file as well, as shown in ",(0,a.kt)("a",{parentName:"p",href:"/pixiu/docs/tutorial-extras/manage-docs-versions"},"the extra guides"),"."),(0,a.kt)("h2",{id:"code-blocks"},"Code Blocks"),(0,a.kt)("p",null,"Markdown code blocks are supported with Syntax highlighting."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'```jsx title="src/components/HelloDocusaurus.js"\nfunction HelloDocusaurus() {\n    return (\n        <h1>Hello, Docusaurus!</h1>\n    )\n}\n```\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/components/HelloDocusaurus.js"',title:'"src/components/HelloDocusaurus.js"'},"function HelloDocusaurus() {\n  return <h1>Hello, Docusaurus!</h1>;\n}\n")),(0,a.kt)("h2",{id:"admonitions"},"Admonitions"),(0,a.kt)("p",null,"Docusaurus has a special syntax to create admonitions and callouts:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},":::tip My tip\n\nUse this awesome feature option\n\n:::\n\n:::danger Take care\n\nThis action is dangerous\n\n:::\n")),(0,a.kt)("admonition",{title:"My tip",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Use this awesome feature option")),(0,a.kt)("admonition",{title:"Take care",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"This action is dangerous")),(0,a.kt)("h2",{id:"mdx-and-react-components"},"MDX and React Components"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://mdxjs.com/"},"MDX")," can make your documentation more ",(0,a.kt)("strong",{parentName:"p"},"interactive")," and allows using any ",(0,a.kt)("strong",{parentName:"p"},"React components inside Markdown"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"export const Highlight = ({children, color}) => (\n  <span\n    style={{\n      backgroundColor: color,\n      borderRadius: '20px',\n      color: '#fff',\n      padding: '10px',\n      cursor: 'pointer',\n    }}\n    onClick={() => {\n      alert(`You clicked the color ${color} with label ${children}`)\n    }}>\n    {children}\n  </span>\n);\n\nThis is <Highlight color=\"#25c2a0\">Docusaurus green</Highlight> !\n\nThis is <Highlight color=\"#1877F2\">Facebook blue</Highlight> !\n")),(0,a.kt)("p",null,"This is ",(0,a.kt)(c,{color:"#25c2a0",mdxType:"Highlight"},"Docusaurus green")," !"),(0,a.kt)("p",null,"This is ",(0,a.kt)(c,{color:"#1877F2",mdxType:"Highlight"},"Facebook blue")," !"))}p.isMDXComponent=!0},6084:(A,e,t)=>{t.d(e,{Z:()=>n});const n="data:image/png;base64,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"}}]);