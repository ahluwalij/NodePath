(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{3685:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(3381)}])},3381:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return re}});var n=r(5666),a=r.n(n),s=r(5893),l=r(7294),i=r(9008),o=r(1664),c=r(9362),u=r(1373),d=r(5792),f=r.n(d),x=r(5640);function h(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var m=function(e){var t=e.layerIndex,r=e.destructor,n=e.count,a=e.onUpdate,i=e.editable,o=(0,l.useState)(n),c=o[0],u=o[1],d=function(e){if(""!==e){var r=Number.parseInt(e);Number.isInteger(r)&&r<=1e3&&r>0&&(u(r),a(t,r))}else u(0)};return(0,s.jsxs)("div",{className:"flex flex-col w-16 border-teal-500 border-2 h-full rounded-xl overflow-hidden mr-3",children:[i&&(0,s.jsx)("div",{className:"flex h-1/4 border-b-teal-500 border-b-2 text-white items-center justify-center cursor-pointer hover:bg-red-500",onClick:function(){return r(t)},children:(0,s.jsx)("p",{className:"text-center",children:"\u2014"})}),!i&&(0,s.jsx)("div",{className:"flex h-1/4 border-b-teal-500 border-b-2 text-white items-center justify-center cursor-not-allowed",title:"Cannot remove layers during training",children:(0,s.jsx)("p",{className:"text-center",children:"\u2014"})}),(0,s.jsx)("div",{className:"flex h-full text-white w-full",children:(0,s.jsx)("input",{type:"text",className:"bg-transparent text-center w-full outline-none ".concat(i?"":"cursor-not-allowed"),defaultValue:c,maxLength:4,onBlur:function(e){return d(e.target.value)},onKeyDown:function(e){return function(e){13===e.keyCode&&i&&d(e.target.value)}(e)},disabled:!i,title:i?"":"Cannot change layers during training"})})]})},p=function(e){var t=e.onAdd;return e.editable?(0,s.jsx)("button",{className:"flex w-12 h-3/4 border-teal-500 border-2 rounded-xl mr-3 text-white items-center justify-center hover:bg-teal-500 cursor-pointer hover:text-teal-900",onClick:function(){return t()},children:(0,s.jsx)("p",{className:"text-center text-3xl h-full items-center justify-center m-auto border-2 border-transparent w-full",children:"+"})}):(0,s.jsx)("button",{className:"flex w-12 h-3/4 border-teal-500 border-2 rounded-xl mr-3 text-white items-center justify-center cursor-not-allowed",title:"Cannot add new layers during training",children:(0,s.jsx)("p",{className:"text-center text-3xl h-full items-center justify-center m-auto border-2 border-transparent w-full",children:"+"})})},g=function(e){var t=e.inputs,r=e.outputs,n=e.layers,a=e.onLayersSet,i=e.editable,o=(0,l.useState)(t),c=o[0],u=o[1],d=(0,l.useState)(r),f=d[0],x=d[1],g=(0,l.useState)(n),v=g[0],b=g[1],w=(0,l.useState)(!0),j=w[0],y=w[1],N=(0,l.useRef)(0);(0,l.useEffect)((function(){a([c].concat(h(v),[f]))}),[v,f,c,a]);var S=function(e){b(v.filter((function(t,r){return r!=e}))),v.length<=8&&y(!0)},k=function(e,t){var r=Array.from(v);r[e]=t,b(h(r))};return(0,s.jsxs)("div",{className:"flex flex-row w-full justify-start",children:[(0,s.jsxs)("div",{className:"flex flex-row w-1/6 border-2 border-teal-700 rounded-xl items-center overflow-hidden mr-4 shrink",children:[(0,s.jsx)("div",{className:"flex w-3/5 bg-teal-700 text-gray-300 justify-center border-r-2 border-teal-700 h-full items-center text-sm",children:(0,s.jsx)("p",{className:"w-full text-center items-center justify-center break-all",children:"Inputs"})}),(0,s.jsx)("div",{className:"flex flex-col w-2/5 h-full",children:(0,s.jsx)("div",{className:"flex h-full",children:(0,s.jsx)("input",{type:"text",className:"flex w-full bg-transparent text-white shadow-none outline-none text-center text-xl ".concat(i?"":"cursor-not-allowed"),maxLength:4,value:c,onChange:function(e){!function(e){if(""!==e){var t=Number.parseInt(e);Number.isInteger(t)&&t<=1e3&&t>0&&u(t)}else u(0)}(e.target.value)},onBlur:function(e){var t;((t=e.target.value)<1||t>1e3)&&u(1)},disabled:!i,title:i?"":"Cannot change layers during training"})})})]}),(0,s.jsxs)("div",{className:"layersBox flex flex-row border-red-400 w-2/3 items-center shrink",children:[v.map((function(e,t){return(0,s.jsx)(m,{layerIndex:t,destructor:S,count:e,onUpdate:k,editable:i},N.current++)})),j&&(0,s.jsx)(p,{onAdd:function(){b(h(v).concat([1])),v.length>=7&&y(!1)},editable:i})]}),(0,s.jsxs)("div",{className:"flex flex-row w-1/6 border-2 border-teal-700 rounded-xl items-center overflow-hidden ml-auto shrink",children:[(0,s.jsx)("div",{className:"flex flex-shrink-0 w-3/5 bg-teal-700 text-gray-300 justify-center border-r-2 border-teal-700 h-full items-center text-sm",children:(0,s.jsx)("p",{className:"w-full justify-center items-center text-center break-all",children:"Outputs"})}),(0,s.jsx)("div",{className:"flex flex-col w-2/5 h-full",children:(0,s.jsx)("div",{className:"flex h-full",children:(0,s.jsx)("input",{type:"text",className:"flex w-full bg-transparent text-white shadow-none outline-none text-center text-xl ".concat(i?"":"cursor-not-allowed"),maxLength:4,value:f,onChange:function(e){!function(e){if(""!==e){var t=Number.parseInt(e);Number.isInteger(t)&&t<=1e3&&t>0&&x(t)}else x(0)}(e.target.value)},onBlur:function(e){var t;((t=e.target.value)<1||t>1e3)&&x(1)},disabled:!i,title:i?"":"Cannot change layers during training"})})})]})]})},v=function(e){var t=e.id;return(0,s.jsxs)("div",{className:"flex flex-col w-12 h-12 bg-gray-800 border-red-600 border-2 rounded-3xl items-center justify-center cursor-default nodrag ",onClick:function(){return console.log("hello!")},children:[(0,s.jsx)("p",{className:"text-white text-center items-center justify-center",children:t}),(0,s.jsx)(c.HH,{type:"source",position:"right",id:"a",isConnectable:"false"})]})},b=function(e){var t=e.id;return(0,s.jsx)(o.default,{href:"/about#bias",children:(0,s.jsx)("a",{target:"_blank",children:(0,s.jsxs)("div",{className:"flex flex-col w-12 h-12 bg-gray-800 border-yellow-400 border-2 rounded-3xl items-center justify-center cursor-pointer nodrag",children:[(0,s.jsx)("p",{className:"text-white text-center items-center justify-center",children:t}),(0,s.jsx)(c.HH,{type:"source",position:"right",id:"a"})]})})})},w=function(e){var t=e.id;return(0,s.jsxs)("div",{className:"flex flex-col w-12 h-12 bg-gray-800 border-green-400 border-2 rounded-3xl items-center justify-center cursor-default nodrag ",onClick:function(){return console.log("hello!")},children:[(0,s.jsx)(c.HH,{type:"target",position:"left"}),(0,s.jsx)("p",{className:"text-white text-center items-center justify-center",children:t})]})},j=function(e){var t=e.id;return(0,s.jsxs)("div",{className:"flex flex-col w-12 h-12 bg-gray-800 border-blue-700 border-2 rounded-3xl items-center justify-center cursor-default nodrag ",onClick:function(){return console.log("hello!")},children:[(0,s.jsx)(c.HH,{type:"target",position:"left",id:"targetHandle"}),(0,s.jsx)("p",{className:"text-white text-center items-center justify-center",children:t}),(0,s.jsx)(c.HH,{type:"source",position:"right"})]})},y=r(7571),N=0,S=1,k=2,C=3,I=4,A=5,O=6,M=7,T=8,E=9,z=10,R=11,Z=12,_=13,L=14,H=15,P=16,D=17,F=0,U=1,B=2,J=3,V=4,W=5,X=6,q=function(e){var t=e.open,r=e.onClose,n=e.error,a=(0,l.useState)(),i=a[0],o=a[1],c=(0,l.useState)(),u=c[0],d=c[1];return(0,l.useEffect)((function(){switch(n){case A:return o("Missing training data"),void d("Please upload training data for the model.");case M:return o("Input size error"),void d("Input layer size does not match uploaded training input size.");case O:return o("Layer error"),void d("An layer issue occurred.");case T:return o("Output size error"),void d("Output layer size does not match uploaded training output size.");case S:return o("Training file format error"),void d("The uploaded training data file is not in the correct format.");case Z:return o("Input file format error"),void d("The uploaded input file is not in the correct format.");case k:return o("Training pair size error"),void d("Training data has pair size mismatch; one or more pairs are incorrect size.");case C:return o("Training pair entry error"),void d("Training data has pair entry issue; one or more pairs have invalid entries.");case _:return o("Invalid input file JSON format"),void d("Input file JSON is not in the correct format.");case L:return o("Input file entry size mismatch"),void d("Input file has an entry size mismatch; one or more inputs are not the correct size.");case H:return o("Input file entry data error"),void d("Input file has entry data issue; one or more entries has invalid values");default:return o("Unknown error"),void d("An unknown error occurred. Please try again or report this issue on GitHub.")}}),[n]),(0,s.jsx)(y.Z,{open:t,onClose:r,children:(0,s.jsxs)("div",{className:"flex flex-col absolute left-0 right-0 top-0 bottom-0 m-auto w-1/3 h-1/4 text-white bg-gray-900 rounded-3xl border-2 border-teal-500 text-center items-center",children:[(0,s.jsx)("h1",{className:"mt-4 text-4xl h-1/4",children:i}),(0,s.jsx)("div",{className:"flex flex-col h-1/2 w-5/6 items-center justify-center break-words mt-2",children:(0,s.jsx)("h2",{className:"text-xl items-center w-full justify-center",children:u})})]})})};function G(e,t,r,n,a,s,l){try{var i=e[s](l),o=i.value}catch(c){return void r(c)}i.done?t(o):Promise.resolve(o).then(n,a)}function K(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var s=e.apply(t,r);function l(e){G(s,n,a,l,i,"next",e)}function i(e){G(s,n,a,l,i,"throw",e)}l(void 0)}))}}function Q(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,a=!1,s=void 0;try{for(var l,i=e[Symbol.iterator]();!(n=(l=i.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(o){a=!0,s=o}finally{try{n||null==i.return||i.return()}finally{if(a)throw s}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function Y(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var $=[.01,.5],ee=[1,1e5],te=f().scale(["#f00","#0f0"]);function re(){var e=(0,l.useState)(.1),t=e[0],r=e[1],n=(0,l.useState)(1e5),d=n[0],f=n[1],h=(0,l.useState)([3,2,5,3,1]),m=h[0],p=h[1],y=(0,l.useState)(),k=y[0],C=y[1],A=(0,l.useState)(0),O=A[0],M=A[1],T=(0,l.useState)(0),G=T[0],re=T[1],ne=(0,l.useState)(!1),ae=ne[0],se=ne[1],le=(0,l.useState)(),ie=le[0],oe=le[1],ce=(0,l.useState)(!1),ue=ce[0],de=ce[1],fe=(0,l.useState)(!1),xe=fe[0],he=fe[1],me=(0,l.useState)(),pe=me[0],ge=me[1],ve=(0,l.useState)(),be=ve[0],we=ve[1],je=(0,l.useState)(!1),ye=je[0],Ne=je[1],Se=(0,l.useState)(!1),ke=Se[0],Ce=Se[1],Ie=(0,l.useRef)(),Ae=(0,l.useRef)(),Oe=(0,l.useRef)(),Me=(0,l.useRef)(),Te=(0,l.useRef)(null);(0,l.useEffect)((function(){Te.current=new Worker("".concat(x.Z,"/worker.js")),Te.current.addEventListener("message",(function(e){switch(e.data.code){case N:return Te.current.postMessage({code:J,layers:m}),void Te.current.postMessage({code:V,learningRate:t,trainingSpeed:d});case E:return Ce(!0),void Ne(!0);case z:if(e.data.weights){Ee(e.data.weights,!1);var r={weights:e.data.weights},n=new Blob([JSON.stringify(r,null,4)],{type:"application/json"});we(URL.createObjectURL(n))}return void Ce(!1);case R:return void(e.data.weights&&(M(e.data.epochs),re(e.data.error),Ee(e.data.weights,!0)));case P:return void de(!0);case I:return;case D:he(!0);var a=new Blob([JSON.stringify(e.data.outputs,null,4)],{type:"application/json"});return void ge(URL.createObjectURL(a));case _:case L:case Z:case H:de(!1);default:return oe(e.data.code),void se(!0)}}))}),[]),(0,l.useEffect)((function(){var e;if(!m.includes(0)){var t=[m[0]+1].concat(Y(m.slice(1))),r=(e=Math).max.apply(e,Y(t)),n=[],a=[],s=[],l=100,i=Math.min(Math.max(250,40*r),600),o=1,d=!0,f=!1,x=void 0;try{for(var h,p=t.entries()[Symbol.iterator]();!(d=(h=p.next()).done);d=!0){var g=Q(h.value,2),v=g[0],b=g[1];if(a.push([]),0==v){for(var w=(0,u.Z)(0,100*r,b+2),j=1;j<w.length-2;j++)n.push({id:o.toString(),type:"inputNode",draggable:!1,position:{x:l,y:w[j]}}),a[a.length-1].push(o++);n.push({id:o.toString(),type:"biasNode",draggable:!1,position:{x:l,y:w[w.length-2]}}),a[a.length-1].push(o++),l+=i}else if(v!=m.length-1){for(var y=(0,u.Z)(0,100*r,b+2),N=1;N<y.length-1;N++)n.push({id:o.toString(),type:"layerNode",draggable:!1,position:{x:l,y:y[N]}}),a[a.length-1].push(o++);l+=i}else for(var S=(0,u.Z)(0,100*r,b+2),k=1;k<S.length-1;k++)n.push({id:o.toString(),type:"outputNode",draggable:!1,position:{x:l,y:S[k]}}),a[a.length-1].push(o++)}}catch(T){f=!0,x=T}finally{try{d||null==p.return||p.return()}finally{if(f)throw x}}for(var I=0,A=0;A<a.length-1;A++)for(var O=0;O<a[A].length;O++)for(var M=0;M<a[A+1].length;M++)s=(0,c.Z_)({id:I.toString(),type:"straight",source:a[A][O].toString(),target:a[A+1][M].toString(),style:{stroke:"#fff"}},s),I++;Ae.current=a,Ie.current=n,C(Y(n).concat(Y(s))),Te.current.postMessage({code:J,layers:m})}}),[m]),(0,l.useEffect)((function(){Te.current.postMessage({code:V,learningRate:t,trainingSpeed:d})}),[t,d,t]);var Ee=function(e,t){for(var r,n,a=e.flat(1/0),s=(r=Math).max.apply(r,Y(a)),l=(n=Math).min.apply(n,Y(a)),i=s-l,o=[],u=0,d=0;d<e.length;d++)for(var f=0;f<e[d].length;f++)for(var x=0;x<e[d][f].length;x++)o=(0,c.Z_)({id:u.toString(),type:"straight",animated:t,source:Ae.current[d][x].toString(),target:Ae.current[d+1][f].toString(),style:{stroke:te((e[d][f][x]-l)/i).toString()}},o),u++;C(Y(Ie.current).concat(Y(o)))},ze=K(a().mark((function e(t){var r,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("application/json"===(r=t[t.length-1]).type){e.next=5;break}return oe(S),se(!0),e.abrupt("return");case 5:(n=new FileReader).readAsText(r),n.addEventListener("load",K(a().mark((function e(t){var r,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===(n=JSON.parse(t.target.result))||void 0===n||null===(r=n.data)||void 0===r?void 0:r.length){e.next=6;break}return oe(S),se(!0),e.abrupt("return");case 6:Te.current.postMessage({code:B,file:n});case 7:case"end":return e.stop()}}),e)}))));case 8:case"end":return e.stop()}}),e)}))),Re=K(a().mark((function e(t){var r,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(he(!1),"application/json"===(r=t[0]).type){e.next=7;break}return de(!1),oe(Z),se(!0),e.abrupt("return");case 7:(n=new FileReader).readAsText(r),n.addEventListener("load",K(a().mark((function e(t){var r,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===(n=JSON.parse(t.target.result))||void 0===n||null===(r=n.inputs)||void 0===r?void 0:r.length){e.next=7;break}return de(!1),oe(_),se(!0),e.abrupt("return");case 7:Te.current.postMessage({code:W,file:n});case 8:case"end":return e.stop()}}),e)}))));case 10:case"end":return e.stop()}}),e)})));return(0,s.jsxs)("div",{className:"site flex flex-col h-screen w-screen font-vietnam",children:[(0,s.jsxs)(i.default,{children:[(0,s.jsx)("link",{rel:"shortcut icon",href:"".concat(x.Z,"/images/favicon.ico")}),(0,s.jsx)("title",{children:"NViz | Home"})]}),(0,s.jsx)(q,{open:ae,onClose:function(){se(!1)},error:ie}),(0,s.jsxs)("div",{className:"flex flex-row w-full bg-gray-900 h-1/10 items-center",children:[(0,s.jsx)("div",{className:"ml-6 mr-6",children:(0,s.jsx)(o.default,{href:"/",children:(0,s.jsxs)("a",{className:"flex flex-row text-white text-2xl items-center hover:text-white",children:[(0,s.jsx)("img",{src:"".concat(x.Z,"/images/favicon.ico"),className:"h-10 mr-4"}),"NViz"]})})}),(0,s.jsxs)("div",{className:"justify-center items-center w-1/3",children:[(0,s.jsx)(o.default,{href:"/about",children:(0,s.jsx)("a",{className:"text-white text-base hover:text-teal-400 hover:cursor-pointer mr-4 align-text-top",children:"About"})}),(0,s.jsx)(o.default,{href:"/format",children:(0,s.jsx)("a",{className:"text-white text-base hover:text-teal-400 hover:cursor-pointer align-text-top",children:"File Format"})})]}),(0,s.jsx)("div",{className:"flex flex-row ml-auto w-1/4 h-full items-center justify-end",children:(0,s.jsx)("div",{className:"flex flex-row w-1/2 h-1/3 justify-end mr-4",children:(0,s.jsxs)("a",{className:"flex flex-row justify-end",target:"_blank",href:"https://github.com/ahluwalij/NViz",children:[(0,s.jsx)("p",{className:"flex text-center items-center justify-center mr-4 text-gray-500 cursor-default",children:"Made by Jasdeep Ahluwalia"}),(0,s.jsx)("img",{className:"h-full cursor-pointer",src:"".concat(x.Z,"/images/github.svg"),onMouseOver:function(e){return e.target.src="".concat(x.Z,"/images/github-color.svg")},onMouseOut:function(e){return e.target.src="".concat(x.Z,"/images/github.svg")}})]})})})]}),(0,s.jsxs)("div",{className:"flex flex-row w-full bg-gray-900 h-1/6 items- border-y-2 border-teal-900",children:[(0,s.jsxs)("div",{className:"w-1/6 flex flex-col shrink",children:[(0,s.jsx)("label",{className:"uppercase text-teal-600 text-sm ml-6 mt-2 h-1/6",children:"Training Data"}),(0,s.jsx)("input",{type:"file",className:"ml-6 my-2 h-full text-white hover:cursor-pointer",onChange:function(e){return ze(e.target.files)},accept:"application/json",disabled:ke})]}),(0,s.jsxs)("div",{className:"w-1/2 flex flex-col shrink",children:[(0,s.jsx)("p",{className:"flex uppercase text-teal-600 text-sm mt-2",children:"Layers"}),(0,s.jsx)("div",{className:"flex flex-row h-1/2 mt-1",children:(0,s.jsx)(g,{className:"flex flex-row",inputs:m[0],outputs:m[m.length-1],layers:m.slice(1,m.length-1),onLayersSet:p,editable:!ke})})]}),(0,s.jsx)("div",{className:"flex w-1/6 h-full justify-center shrink",children:(0,s.jsxs)("div",{className:"flex flex-col h-full justify-center w-5/6 text-white mt-1",children:[(0,s.jsx)("label",{className:"uppercase text-teal-600 text-sm mb-1",children:"Learning Rate"}),(0,s.jsxs)("div",{className:"flex flex-row mb-1",children:[(0,s.jsx)("input",{type:"range",className:"range range-accent w-5/6",max:$[1],min:$[0],onChange:function(e){return t=e.target.value,r(Number.parseFloat(t)),void(Oe.current.value=t);var t},step:.001,value:t}),(0,s.jsx)("input",{type:"text",className:" ml-4 w-1/3 bg-transparent text-xs",defaultValue:t,ref:Oe,onBlur:function(e){return function(e){var n=Number.parseFloat(e);Number.isFinite(n)&&n<=$[1]&&n>=$[0]?(r(n),Oe.current.value=n):Oe.current.value=t}(e.target.value)}})]}),(0,s.jsx)("label",{className:"uppercase text-teal-600 text-sm mb-1",children:"Training Speed"}),(0,s.jsxs)("div",{className:"flex flex-row mb-1",children:[(0,s.jsx)("input",{type:"range",className:"range range-accent w-3/5",max:ee[1],min:ee[0],onChange:function(e){return t=e.target.value,f(Number.parseInt(t)),void(Me.current.value=t);var t},value:d}),(0,s.jsx)("input",{type:"text",className:" ml-4 w-2/5 bg-transparent text-xs",defaultValue:d,ref:Me,onBlur:function(e){return function(e){var t=Number.parseFloat(e);Number.isInteger(t)&&t<=ee[1]&&t>=ee[0]?(f(t),Me.current.value=t):Me.current.value=d}(e.target.value)}})]})]})}),(0,s.jsxs)("div",{className:"flex w-1/6 items-center justify-center shrink",children:[!ke&&(0,s.jsx)("button",{className:"w-2/3 h-3/5 border-teal-500 border-2 rounded-2xl text-center text-white hover:bg-teal-500 hover:text-gray-800 cursor-pointer",onClick:function(){Te.current.postMessage({code:U})},children:(0,s.jsx)("p",{className:"flex text-center h-full items-center justify-center text-2xl",children:"TRAIN"})}),ke&&(0,s.jsx)("button",{className:"w-2/3 h-3/5 border-red-500 border-2 rounded-2xl text-center text-white hover:bg-red-500 cursor-pointer",onClick:function(){Te.current.postMessage({code:F})},children:(0,s.jsx)("p",{className:"flex text-center h-full items-center justify-center text-2xl",children:"STOP"})})]})]}),(0,s.jsxs)("div",{className:"flex flex-row h-full relative",children:[(0,s.jsx)("div",{className:"w-5/6 h-full",children:(0,s.jsxs)(c.ZP,{className:"flex bg-gray-900 h-full w-full",elements:k,minZoom:.1,nodeTypes:{inputNode:v,biasNode:b,outputNode:w,layerNode:j},children:[(0,s.jsx)(c.Aq,{color:"#fff"}),(0,s.jsx)(c.ZX,{})]})}),(0,s.jsxs)("div",{className:"w-1/6 border-2 border-teal-900 h-full bg-gray-900 border-t-0 flex flex-col text-white",children:[(0,s.jsx)("div",{className:"flex flex-col h-1/3 border-b-2 border-teal-700",children:(0,s.jsxs)("div",{className:"flex flex-col mt-4 ml-4 h-1/4 text-xl",children:[(0,s.jsxs)("p",{className:"mb-4",children:["Epochs: ",O]}),(0,s.jsxs)("p",{className:"",children:["Error: ",(0,s.jsx)("span",{className:"text-sm",children:G})]})]})}),(0,s.jsxs)("div",{className:"flex flex-col h-full text-sm",children:[(0,s.jsxs)("div",{className:"flex flex-col mt-4 ml-4 text-white h-1/5",children:[(0,s.jsx)("p",{className:"mb-2 uppercase text-teal-600",children:"Input File"}),(0,s.jsx)("input",{type:"file",className:"h-full hover:cursor-pointer",onChange:function(e){return Re(e.target.files)},accept:"application/json"})]}),(0,s.jsxs)("div",{className:"flex w-full h-1/6 items-center justify-center flex-col",children:[!ke&&ue&&(0,s.jsx)("button",{className:"h-1/2 w-3/4 border-teal-500 border-2 rounded-xl uppercase hover:bg-teal-500 hover:text-gray-800",onClick:function(){Te.current.postMessage({code:X})},children:"Predict"}),(ke||!ue)&&(0,s.jsx)("button",{className:"h-1/2 w-3/4 border-teal-500 border-2 rounded-xl uppercase cursor-not-allowed",title:ue?"Cannot run during training":"Upload input file to make predictions",children:"Predict"}),(0,s.jsx)("p",{className:"text-green-500 mt-1 text-sm break-words",hidden:!xe,children:"Success. Download outputs below."})]}),!ke&&(0,s.jsxs)("div",{className:"flex flex-col h-1/2 w-full items-center justify-center",children:[xe&&(0,s.jsx)("a",{className:"flex h-1/5 w-5/6 mb-8 cursor-pointer",href:pe,download:!0,children:(0,s.jsx)("div",{className:"flex h-full w-full border-teal-500 border-2 rounded-xl uppercase mb-8 hover:bg-teal-500 hover:text-gray-800 items-center justify-center",children:(0,s.jsx)("p",{className:"text-center",children:"Download Outputs"})})}),!xe&&(0,s.jsx)("button",{className:"h-1/5 w-5/6 border-teal-500 border-2 rounded-xl uppercase mb-8 cursor-not-allowed",title:"Upload input file and run prediction to download",children:"Download Outputs"}),ye&&(0,s.jsx)("a",{className:"flex h-1/5 w-5/6 cursor-pointer",href:be,download:!0,children:(0,s.jsx)("div",{className:"flex h-full w-full border-teal-500 border-2 rounded-xl uppercase mb-8 hover:bg-teal-500 hover:text-gray-800 items-center justify-center",children:(0,s.jsx)("p",{className:"text-center",children:"Download Model Weights"})})}),!ye&&(0,s.jsx)("button",{className:"h-3/10 w-5/6 border-teal-500 border-2 rounded-xl uppercase cursor-not-allowed whitespace-normal",title:"Cannot download before training",children:"Download Model Weights"})]}),ke&&(0,s.jsxs)("div",{className:"flex flex-col h-1/2 w-full items-center justify-center",children:[(0,s.jsx)("button",{className:"h-1/5 w-5/6 border-teal-500 border-2 rounded-xl uppercase mb-8 cursor-not-allowed",title:"Cannot download during training",children:"Download Outputs"}),(0,s.jsx)("button",{className:"h-1/5 w-5/6 border-teal-500 border-2 rounded-xl uppercase cursor-not-allowed whitespace-normal",title:"Cannot download during training",children:"Download Model Weights"})]})]})]})]})]})}},5640:function(e,t){"use strict";t.Z="/NViz"}},function(e){e.O(0,[1740,1721,9774,2888,179],(function(){return t=3685,e(e.s=t);var t}));var t=e.O();_N_E=t}]);