"use strict";(self.webpackChunkfauziweb=self.webpackChunkfauziweb||[]).push([[5453],{722:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>l,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var o=t(4848),s=t(8453);const r={},a="Practice Exam Questions",i={id:"questions from dummy",title:"Practice Exam Questions",description:"Q1",source:"@site/docs/questions from dummy.md",sourceDirName:".",slug:"/questions from dummy",permalink:"/fauziweb/docs/questions from dummy",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/questions from dummy.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Tutorial Intro",permalink:"/fauziweb/docs/1234/xintro"}},d={},u=[{value:"Q1",id:"q1",level:2},{value:"explanation",id:"explanation",level:3}];function c(e){const n={h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"practice-exam-questions",children:"Practice Exam Questions"})}),"\n",(0,o.jsx)(n.h2,{id:"q1",children:"Q1"}),"\n",(0,o.jsx)(n.p,{children:"From what range are 16-bit private AS numbers selected?\na. 64496 \u2013 64511\nb. 1 \u2013 56319\nc. 64512 \u2013 65534\nd. 64513 \u2013 65535\ne. There are no defined private AS numbers; there are only private IP addresses."}),"\n",(0,o.jsx)(n.p,{children:"In most cases, private AS numbers from 64512 to 65534 should be used within a confederation."}),"\n",(0,o.jsx)(n.h3,{id:"explanation",children:"explanation"}),"\n",(0,o.jsx)(n.p,{children:"page-36\nAutonomous Systems in BGP (16-bit AS\u2019s)\n1). Public Autonomous Systems:\n\u2022 16-bit AS numbers are fully allocated to the RIRs by ICANN/IANA\n\u2022 Assigned by ARIN, RIPE NCC, LACNIC, AfrNIC, and APNIC\n\u2022 Must be used when connecting to another AS on the global Internet (see RFC1930)\n\u2022 Range from 1 to 56319"}),"\n",(0,o.jsx)(n.p,{children:"2). Reserved AS numbers:\n\u2022 AS 0 \u2013 can be used for non-routed networks\n\u2022 AS 23456 \u2013 used for 4-byte AS number backward compatibility (known as AS_TRANS)\n\u2022 AS 56320 to AS 64495 \u2013 reserved by IANA\n\u2022 AS 64496 to AS 64511 \u2013 16 ASs reserved for documentation, books, and so on\n\u2022 AS 65535 \u2013 reserved by IANA"}),"\n",(0,o.jsx)(n.p,{children:"3). Private Autonomous Systems:\n\u2022 Assigned by ISPs (for some clients) and local administrators for private networks, such as internal enterprise networks and labs that do not directly connect to the global Internet\n\u2022 Should not be advertised to other ISPs or on the Internet\n\u2022 Range from 64512 to 65534"})]})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>i});var o=t(6540);const s={},r=o.createContext(s);function a(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);