(this.webpackJsonpgovernable=this.webpackJsonpgovernable||[]).push([[0],{187:function(e,t,a){e.exports=a(323)},192:function(e,t,a){},195:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},196:function(e,t,a){},323:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(20),o=a.n(l),i=(a(192),a(23)),c=a(122),s=(a(195),a(196),a(402)),u=a(355),m=a(354),d=a(167),p=a.n(d),g=a(55),f=a(56);function v(){var e=Object(g.a)(["\n  box-sizing: border-box;\n  margin: 0 auto;\n  max-width: 1800px;\n  width: 100%;\n  padding: 0 24px;\n"]);return v=function(){return e},e}var h=f.a.div(v()),E=function(e){var t=e.children;return r.a.createElement(h,null,t)},b=a(405),y=a(172),x=a.n(y),w=a(171),j=a.n(w);function O(){var e=Object(g.a)(["\n  align-items: center;\n  color: #FFF;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  position: relative;\n"]);return O=function(){return e},e}function k(){var e=Object(g.a)(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: center;\n"]);return k=function(){return e},e}function F(){var e=Object(g.a)(["\n  background: #000;\n  display: flex;\n  margin-top: -80px;\n  min-height: calc(50vh - 80px);\n  position: relative;\n  touch-action: none;\n"]);return F=function(){return e},e}var C=f.a.div(F()),N=f.a.div(k()),_=f.a.div(O()),S=function(e){var t=e.proposal,a=t.id,l=t.title,o=Object(n.useContext)(me),i=o.UpdateVoters,c=o.proposals;return r.a.createElement(C,{id:"hero"},r.a.createElement(_,null,r.a.createElement(N,null,r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("h2",{style:{margin:0,padding:0,fontSize:"2vmax",fontWeight:500,textShadow:"0px 4px 4px black"}},"A House Divided")),r.a.createElement("div",{style:{display:"flex"}},a>1?r.a.createElement(b.a,{style:{float:"left",height:"20px"},onClick:function(){return a>1?i(a-1):null}},r.a.createElement(j.a,{style:{color:"#FFF",fontSize:24}})):null,r.a.createElement("h2",{style:{margin:0,padding:0,fontSize:"1vmax",fontWeight:500,textShadow:"0px 4px 4px black",display:"flex"}},r.a.createElement("div",null,r.a.createElement("a",{style:{color:"grey"}},("00"+a).slice(-3)),"  ",l)),a<c.length?r.a.createElement(b.a,{style:{float:"right",height:"20px"},onClick:function(){return a<c.length?i(a+1):null}},r.a.createElement(x.a,{style:{color:"#FFF",fontSize:24}})):null)),r.a.createElement("div",{style:{position:"relative",top:-80}})))},A=a(180),R=a(403),I=Object(m.a)((function(e){return{tokenIcon:{alignItems:"center",backgroundColor:e.palette.grey[400],borderRadius:48,display:"flex",height:44,width:44}}})),W=function(e){var t=e.src,a=I();return r.a.createElement("img",{className:a.tokenIcon,src:t})},B=Object(m.a)((function(e){return{progressBar:{height:"30px",width:"100%"},bar:{position:"absolute",height:10,borderRadius:5}}})),D=function(e){var t=e.side,a=e.percentage,n=e.color,l=B();return r.a.createElement(R.a,{className:l.progressBar},r.a.createElement("div",{style:{width:"100%",height:"30px"}},r.a.createElement("h3",{style:{float:"left"}},t),r.a.createElement("h3",{style:{float:"right"}},a,"%")),r.a.createElement("div",{style:{position:"relative",marginTop:20}},r.a.createElement("div",{className:l.bar,style:{width:"100%",background:"lightgrey",right:0}}),r.a.createElement("div",{className:l.bar,style:{width:"".concat(a,"%"),background:n}})))},z=Object(m.a)((function(e){return{headerRow:{alignItems:"center",borderBottom:"1px solid ".concat(e.palette.grey[100]),height:80,paddingLeft:24,paddingRight:24,"&:hover":{}}}})),T=function(e){var t=e.children,a=z();return r.a.createElement(R.a,{className:a.headerRow},t)},V=Object(m.a)((function(e){return{row:{alignItems:"center",borderBottom:"1px solid ".concat(e.palette.grey[100]),display:"flex",height:50,paddingLeft:24,paddingRight:24,"&:hover":{}}}})),L=function(e){var t=e.children,a=V();return r.a.createElement(R.a,{className:a.row},t)},M=Object(m.a)((function(e){return{name:{marginLeft:e.spacing(2)},tokenCell:{alignItems:"center",display:"flex",flex:1}}})),P=function(e){var t=e.name,a=e.tokenIcon,n=M();return r.a.createElement(R.a,{className:n.tokenCell},a,r.a.createElement("span",{className:n.name},t))},H=Object(m.a)((function(e){return{tflCell:{fontWeight:300}}})),U=function(e){var t=e.time,a=H();return r.a.createElement(R.a,{className:a.tflCell},t)},J=Object(m.a)((function(e){return{tflCell:{fontWeight:500,width:140}}})),Y=function(e){var t=e.amount,a=J();return r.a.createElement(R.a,{className:a.tflCell},t.toString().split(".")[0].replace(/\B(?=(\d{3})+(?!\d))/g,","))},$=function(e){var t=e.side,a=e.percentage,l=e.color,o=Object(n.useContext)(me),i=o.voters,c=o.setModal,s=i.filter((function(e){return"For"===t?!0===e.support:!1===e.support})).sort((function(e,t){return t.votes-e.votes}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(T,{key:"Votes"},r.a.createElement(D,{side:t,percentage:a,color:l})),r.a.createElement(L,{key:"Header"},r.a.createElement(P,{name:"Address"}),r.a.createElement(Y,{amount:"Votes"}),r.a.createElement(U,{time:"Time"})),s.slice(0,4).map((function(e,t){var a=e.display_name?e.display_name:e.address.slice(0,10);return r.a.createElement(L,{key:e.address},r.a.createElement(P,{name:a,tokenIcon:r.a.createElement(W,{src:e.image_url})}),r.a.createElement(Y,{amount:e.votes}),r.a.createElement(U,{time:e.time}))})),s.length>4?r.a.createElement(L,{key:"Expand"},r.a.createElement(R.a,{style:{margin:"0 auto",fontWeight:500},onClick:function(e){return c(t)}},"Show More")):"")},q={paper:{padding:20,textAlign:"center",fontFamily:"Roboto"},stick:{position:"sticky",top:"20px"}},G=function(e){var t=e.tweets,a=e.side,n=e.percentage,l=e.color;return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{className:q.paper,elevation:3},r.a.createElement($,{side:a,percentage:n,color:l})),r.a.createElement("br",null),r.a.createElement("div",null,'Latest "',a,'" Tweets (',t.length,")"),t.map((function(e,a){return r.a.createElement("div",{key:a,style:a===t.length-1?q.stick:{}},r.a.createElement(A.a,{tweetId:e}))})))},K=a(69),Q=a(173),X=function(){var e=Object(n.useContext)(me).voters,t={address:"All Votes",color:"#ffe0c7",children:[{address:"Pro",color:"#04D394",children:e.filter((function(e){return!0===e.support})).map((function(e){return Object(K.a)(Object(K.a)({},e),{},{color:"yellow"})}))},{address:"Neg",color:"#DE5F67",children:e.filter((function(e){return!1===e.support})).map((function(e){return Object(K.a)(Object(K.a)({},e),{},{color:"#DE5F67"})}))}]},a=e.reduce((function(e,t){return e+(!0===t.support?t.votes:0)}),0),l=e.reduce((function(e,t){return e+(!1===t.support?t.votes:0)}),0);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{height:"500px"}},r.a.createElement(Q.a,{root:t,margin:{top:20,right:20,bottom:20,left:20},identity:"address",value:"votes",colors:function(e){return e.color},padding:6,label:function(t){var a=e.find((function(e){return e.address===t.id}));return a&&null!=a.display_name?a.display_name:t.id.slice(0,5)},labelTextColor:"black",borderWidth:2,borderColor:{from:"color"},defs:[{id:"lines",type:"patternLines",background:"none",color:"inherit",rotation:-45,lineWidth:5,spacing:8}],fill:[{match:{depth:1},id:"lines"}],animate:!1,tooltip:function(e){var t=-1===["All Votes","Pro","Neg"].indexOf(e.id),n=e.value/(e.data.support?a:l)*100;t||(n=e.value/(a+l)*100);var o=e.value.toString().split(".")[0].replace(/\B(?=(\d{3})+(?!\d))/g,",");return r.a.createElement("div",{style:{display:"inline-flex"}},t?r.a.createElement(W,{src:e.data.image_url,style:{float:"left"}}):"",r.a.createElement("div",{style:{textAlign:"left"}},r.a.createElement("strong",null,e.label||e.id,":"),r.a.createElement("div",null,o," (",n.toFixed(2),"%)"),t?r.a.createElement("div",null,"date",": ",e.data.time):""))}})))},Z=a(404),ee=a(397),te=a(401),ae=a(400),ne=a(396),re=a(398),le=a(399),oe=Object(m.a)((function(e){return{table:{padding:20},headerRow:{fontWeight:700},tableContainer:{maxHeight:"calc(100% - 200px)",margin:"100px",background:"white",overflowY:"auto"}}})),ie=function(e){var t=e.row,a=t.address,n=t.display_name,l=t.votes,o=t.time,i=l.toString().split(".")[0].replace(/\B(?=(\d{3})+(?!\d))/g,",");return r.a.createElement(le.a,{key:a},r.a.createElement(ae.a,{component:"th",scope:"row"},n||a),r.a.createElement(ae.a,{align:"right"},a),r.a.createElement(ae.a,{align:"right"},i),r.a.createElement(ae.a,{align:"right"},o))},ce=function(){var e=Object(n.useContext)(me),t=e.modal,a=e.setModal,l=e.voters,o="For"===t||"Against"===t,i=l.filter((function(e){return"For"===t?!0===e.support:!1===e.support})).sort((function(e,t){return t.votes-e.votes})),c=oe();return r.a.createElement(Z.a,{open:o,onClose:function(){a(!1)},"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description"},r.a.createElement("div",{className:c.tableContainer},r.a.createElement(ne.a,{component:u.a},r.a.createElement(ee.a,{className:c.table,"aria-label":"simple table"},r.a.createElement(re.a,null,r.a.createElement(le.a,null,r.a.createElement(ae.a,{className:c.headerRow},"Name"),r.a.createElement(ae.a,{className:c.headerRow,align:"right"},"Address"),r.a.createElement(ae.a,{className:c.headerRow,align:"right"},"Votes"),r.a.createElement(ae.a,{className:c.headerRow,align:"right"},"Date"))),r.a.createElement(te.a,null,i.map((function(e){return r.a.createElement(ie,{row:e})})))))))},se=Object(m.a)((function(e){return{paper:{padding:20,textAlign:"center",fontFamily:"Roboto"}}})),ue=function(){var e=Object(n.useContext)(me),t=e.tweets,a=e.proposals,l=e.currentProposal,o=a.find((function(e){return e.id===l}))||{},i=t.find((function(e){return e.id===l}))||{},c=function(e){return(parseFloat(e)/(parseFloat(o.for_votes)+parseFloat(o.against_votes))*100).toFixed(2)},m=new p.a.Converter;return r.a.createElement(r.a.Fragment,null,r.a.createElement(S,{proposal:o}),r.a.createElement(ce,null),r.a.createElement(E,null,r.a.createElement("div",{style:{marginTop:-68,position:"relative"}},r.a.createElement(s.a,{container:!0,spacing:3},r.a.createElement(s.a,{item:!0,xs:3},r.a.createElement(G,{side:"For",percentage:c(o.for_votes),color:"#04D394",tweets:i.pro||[]})),r.a.createElement(s.a,{item:!0,xs:6},r.a.createElement("div",{style:{position:"sticky",top:20}},r.a.createElement(u.a,{className:se.paper,elevation:3},r.a.createElement(X,null)),r.a.createElement(s.a,{item:!0,xs:7},r.a.createElement(u.a,{className:se.paper,elevation:3,style:{marginTop:"20px"}},r.a.createElement("div",{style:{height:"100%",textAlign:"left",padding:"1em"}},r.a.createElement("h3",null,"Details"),o.description&&o.description.split("\n\n").map((function(e){var t=m.makeHtml(e).replace("<img","<img style='width:100%'");return r.a.createElement("p",{dangerouslySetInnerHTML:{__html:t}})}))))))),r.a.createElement(s.a,{item:!0,xs:3},r.a.createElement(G,{side:"Against",percentage:c(o.against_votes),color:"#DE5F67",tweets:i.neg||[]}))))))},me=r.a.createContext({}),de=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)([]),s=Object(i.a)(o,2),u=s[0],m=s[1],d=Object(n.useState)([]),p=Object(i.a)(d,2),g=p[0],f=p[1],v=Object(n.useState)(1),h=Object(i.a)(v,2),E=h[0],b=h[1],y=Object(n.useState)(void 0),x=Object(i.a)(y,2),w=x[0],j=x[1];c.a.initialize("UA-169309883-1"),c.a.pageview(window.location.pathname+window.location.search);var O=function(e){fetch("https://api.compound.finance/api/v2/governance/proposal_vote_receipts?proposal_id=".concat(e,"&page_size=100")).then((function(e){return e.json()})).then((function(t){b(e);var a=t.proposal_vote_receipts.map((function(e){var t=e.support,a=e.votes,n=e.voter;return{support:t,address:n.address,display_name:n.display_name,image_url:n.image_url,votes:parseFloat(a),time:"4/27 - 12:00"}}));m(a)}),(function(e){console.log(e)}))},k=[{id:1,pro:["1254846366506905601","1254899993443471360","1256090650170327041"],neg:["1254669301308506113","1255235435447685120","1255181493279707136","1255609457519652864"]},{id:2,pro:[],neg:["1255609457519652864"],abstrain:["1256313098723569664"]},{id:3,pro:["1260986319972429824"],neg:[]},{id:4,pro:[],neg:[]},{id:7,pro:["1270905785149583360"],neg:[]}];return Object(n.useEffect)((function(){l(k),fetch("https://api.compound.finance/api/v2/governance/proposals").then((function(e){return e.json()})).then((function(e){f(e.proposals),O(e.proposals.length)}),(function(e){console.log(e)})),O(1)}),[]),r.a.createElement(me.Provider,{value:{tweets:a,proposals:g,currentProposal:E,setCurrentProposal:b,voters:u,UpdateVoters:O,modal:w,setModal:j}},r.a.createElement("div",{className:"App"},r.a.createElement(ue,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(de,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[187,1,2]]]);
//# sourceMappingURL=main.31bbe982.chunk.js.map