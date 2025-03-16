import{j as w,k as J,l as K,m as Y,p as ee,q as P,o as c,c as u,a as p,u as te,Z as re,b as t,t as g,d as se,g as E,v as oe,s as ae,e as $,F as O,h as L,w as k}from"./app-B_e1RL1z.js";import ne from"./AdminLayout-CLqG6zTK.js";import ie from"./Store-ByIWVHkC.js";import de from"./Pagination-C2mPv9cf.js";import le from"./Update-Dz4xSl_Z.js";import{_ as N,a as ce}from"./DropdownLink-BIosfC4Q.js";import"./index-BatbrieD.js";import"./Navbar-BlCp811J.js";import"./Sidebar-D1-AK_mc.js";import"./Modal-CAbtALPf.js";import"./dropzone-DnLKvtV7.js";import"./InputError-DW-aRdld.js";import"./TextInput-Bh8WgkZE.js";import"./Checkbox-BZBuEeaO.js";function ue(e){var o=typeof e;return e!=null&&(o=="object"||o=="function")}var R=ue,fe=typeof w=="object"&&w&&w.Object===Object&&w,ge=fe,me=ge,pe=typeof self=="object"&&self&&self.Object===Object&&self,be=me||pe||Function("return this")(),W=be,ye=W,xe=function(){return ye.Date.now()},he=xe,ve=/\s/;function we(e){for(var o=e.length;o--&&ve.test(e.charAt(o)););return o}var ke=we,_e=ke,je=/^\s+/;function Te(e){return e&&e.slice(0,_e(e)+1).replace(je,"")}var $e=Te,Oe=W,Se=Oe.Symbol,U=Se,z=U,q=Object.prototype,Be=q.hasOwnProperty,Ie=q.toString,h=z?z.toStringTag:void 0;function Ce(e){var o=Be.call(e,h),n=e[h];try{e[h]=void 0;var l=!0}catch{}var a=Ie.call(e);return l&&(o?e[h]=n:delete e[h]),a}var Me=Ce,Pe=Object.prototype,Ee=Pe.toString;function Le(e){return Ee.call(e)}var Ne=Le,D=U,ze=Me,De=Ne,Ae="[object Null]",Fe="[object Undefined]",A=D?D.toStringTag:void 0;function Ve(e){return e==null?e===void 0?Fe:Ae:A&&A in Object(e)?ze(e):De(e)}var Ge=Ve;function Re(e){return e!=null&&typeof e=="object"}var We=Re,Ue=Ge,qe=We,Qe="[object Symbol]";function He(e){return typeof e=="symbol"||qe(e)&&Ue(e)==Qe}var Xe=He,Ze=$e,F=R,Je=Xe,V=NaN,Ke=/^[-+]0x[0-9a-f]+$/i,Ye=/^0b[01]+$/i,et=/^0o[0-7]+$/i,tt=parseInt;function rt(e){if(typeof e=="number")return e;if(Je(e))return V;if(F(e)){var o=typeof e.valueOf=="function"?e.valueOf():e;e=F(o)?o+"":o}if(typeof e!="string")return e===0?e:+e;e=Ze(e);var n=Ye.test(e);return n||et.test(e)?tt(e.slice(2),n?2:8):Ke.test(e)?V:+e}var st=rt,ot=R,S=he,G=st,at="Expected a function",nt=Math.max,it=Math.min;function dt(e,o,n){var l,a,r,s,d,m,b=0,B=!1,y=!1,_=!0;if(typeof e!="function")throw new TypeError(at);o=G(o)||0,ot(n)&&(B=!!n.leading,y="maxWait"in n,r=y?nt(G(n.maxWait)||0,o):r,_="trailing"in n?!!n.trailing:_);function j(i){var f=l,x=a;return l=a=void 0,b=i,s=e.apply(x,f),s}function Q(i){return b=i,d=setTimeout(v,o),B?j(i):s}function H(i){var f=i-m,x=i-b,M=o-f;return y?it(M,r-x):M}function I(i){var f=i-m,x=i-b;return m===void 0||f>=o||f<0||y&&x>=r}function v(){var i=S();if(I(i))return C(i);d=setTimeout(v,H(i))}function C(i){return d=void 0,_&&l?j(i):(l=a=void 0,s)}function X(){d!==void 0&&clearTimeout(d),b=0,l=m=a=d=void 0}function Z(){return d===void 0?s:C(S())}function T(){var i=S(),f=I(i);if(l=arguments,a=this,m=i,f){if(d===void 0)return Q(m);if(y)return clearTimeout(d),d=setTimeout(v,o),j(m)}return d===void 0&&(d=setTimeout(v,o)),s}return T.cancel=X,T.flush=Z,T}var lt=dt;const ct=J(lt),ut={class:"bg-gray-50 dark:bg-gray-900 p-3 sm:p-5"},ft={class:"mx-auto max-w-screen-xl px-4 lg:px-12"},gt={key:0,class:"text-blue-600"},mt={class:"bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden"},pt={class:"flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4"},bt={class:"w-full md:w-1/2"},yt={class:"flex items-center"},xt={class:"relative w-full"},ht={class:"w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0"},vt={class:"flex items-center space-x-3 w-full md:w-auto"},wt={id:"filterDropdown",class:"z-10 hidden w-48 p-3 bg-white rounded-lg shadow dark:bg-gray-700"},kt={class:"space-y-2 text-sm","aria-labelledby":"filterDropdownButton"},_t={class:"flex items-center"},jt=["id"],Tt=["for"],$t={class:"overflow-x-auto"},Ot={class:"w-full text-sm text-left text-gray-500 dark:text-gray-400"},St={scope:"row",class:"px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"},Bt={class:"px-4 py-3"},It={class:"px-4 py-3"},Ct={class:"px-4 py-3"},Mt={class:"px-4 py-3"},Pt={class:"px-4 py-3"},Et={key:0,class:"bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300"},Lt={key:1,class:"bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300"},Nt={class:"px-4 py-3"},zt=["onClick"],Dt=["onClick"],At={class:"px-4 py-3 flex items-center justify-end"},er=Object.assign({layout:ne},{__name:"Index",props:{products:{type:Object,required:!0},filters:Object,brands:Object,categories:Object},setup(e){const o=e;K(()=>{o.filters.sortBy==="price"&&(o.filters.sortBy=o.filters.sortOrder==="asc"?"price_asc":"price_desc")});const n=Y({sortBy:o.filters.sortBy??"title",search:o.filters.search??"",sortOrder:o.filters.sortOrder??"asc"});ee(n,ct(function(){const a={};n.search&&(a.search=n.search),n.sortBy==="price_asc"?(a.sortBy="price",a.sortOrder="asc"):n.sortBy==="price_desc"?(a.sortBy="price",a.sortOrder="desc"):(a.sortBy=n.sortBy,a.sortOrder="asc"),P.get(route("admin.products.index"),a,{replace:!0,preserveState:!0})},300));const l=(a,r)=>{P.post(route("admin.changePublish",{id:a,status:r}))};return(a,r)=>(c(),u(O,null,[p(te(re),{title:"Products"}),t("section",ut,[t("div",ft,[a.$page.props.flash.message?(c(),u("div",gt,g(a.$page.props.flash.message),1)):se("",!0),t("div",mt,[t("div",pt,[t("div",bt,[t("div",yt,[r[3]||(r[3]=t("label",{for:"simple-search",class:"sr-only"},"Search",-1)),t("div",xt,[r[2]||(r[2]=t("div",{class:"absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"},[t("svg",{"aria-hidden":"true",class:"w-5 h-5 text-gray-500 dark:text-gray-400",fill:"currentColor",viewbox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[t("path",{"fill-rule":"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z","clip-rule":"evenodd"})])],-1)),E(t("input",{"onUpdate:modelValue":r[0]||(r[0]=s=>n.search=s),type:"text",id:"simple-search",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",placeholder:"Search",required:""},null,512),[[oe,n.search]])])])]),t("div",ht,[p(ie,{brands:e.brands,categories:e.categories},null,8,["brands","categories"]),t("div",vt,[E(t("select",{"onUpdate:modelValue":r[1]||(r[1]=s=>n.sortBy=s),id:"countries",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"},r[4]||(r[4]=[t("option",{value:"title"},"Title",-1),t("option",{value:"price_asc"},"Price (asc)",-1),t("option",{value:"price_desc"},"Price (desc)",-1)]),512),[[ae,n.sortBy]]),r[6]||(r[6]=t("button",{id:"filterDropdownButton","data-dropdown-toggle":"filterDropdown",class:"w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700",type:"button"},[t("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",class:"h-4 w-4 mr-2 text-gray-400",viewbox:"0 0 20 20",fill:"currentColor"},[t("path",{"fill-rule":"evenodd",d:"M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z","clip-rule":"evenodd"})]),$(" Filter "),t("svg",{class:"-mr-1 ml-1.5 w-5 h-5",fill:"currentColor",viewbox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true"},[t("path",{"clip-rule":"evenodd","fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"})])],-1)),t("div",wt,[r[5]||(r[5]=t("h6",{class:"mb-3 text-sm font-medium text-gray-900 dark:text-white"},"Choose brand",-1)),t("ul",kt,[(c(!0),u(O,null,L(e.brands,s=>(c(),u("li",_t,[t("input",{id:`brand_${s.id}`,type:"checkbox",value:"",class:"w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"},null,8,jt),t("label",{for:`brand_${s.id}`,class:"ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"},g(s.title)+" ("+g(s.products_count)+")",9,Tt)]))),256))])])])])]),t("div",$t,[t("table",Ot,[r[10]||(r[10]=t("thead",{class:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"},[t("tr",null,[t("th",{scope:"col",class:"px-4 py-3"},"Product name"),t("th",{scope:"col",class:"px-4 py-3"},"Category"),t("th",{scope:"col",class:"px-4 py-3"},"Brand"),t("th",{scope:"col",class:"px-4 py-3"},"Quantity"),t("th",{scope:"col",class:"px-4 py-3"},"Price"),t("th",{scope:"col",class:"px-4 py-3"},"InStock"),t("th",{scope:"col",class:"px-4 py-3"},"IsPublished"),t("th",{scope:"col",class:"px-4 py-3"},[t("span",{class:"sr-only"},"Actions")])])],-1)),t("tbody",null,[(c(!0),u(O,null,L(e.products.data,s=>(c(),u("tr",{key:s.id,class:"border-b dark:border-gray-700"},[t("th",St,g(s.title),1),t("td",Bt,g(s.category.title),1),t("td",It,g(s.brand.title),1),t("td",Ct,g(s.quantity),1),t("td",Mt,"$"+g(s.price),1),t("td",Pt,[s.in_stock?(c(),u("span",Et,"In stock")):(c(),u("span",Lt,"Out of stock"))]),t("td",Nt,[s.is_public?(c(),u("button",{key:0,type:"button",onClick:d=>l(s.id,!1),class:"focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"}," Unpublish? ",8,zt)):(c(),u("button",{key:1,type:"button",onClick:d=>l(s.id,!0),class:"focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"}," Publish? ",8,Dt))]),t("td",At,[p(ce,{width:"36"},{trigger:k(()=>r[7]||(r[7]=[t("svg",{class:"w-5 h-5","aria-hidden":"true",fill:"currentColor",viewbox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"})],-1)])),content:k(()=>[p(N,{href:a.route("admin.products.show",s.id)},{default:k(()=>r[8]||(r[8]=[$(" Show ")])),_:2},1032,["href"]),p(le,{brands:e.brands,categories:e.categories,product:s},null,8,["brands","categories","product"]),p(N,{href:a.route("admin.products.destroy",s),method:"delete",as:"button"},{default:k(()=>r[9]||(r[9]=[$(" Delete ")])),_:2},1032,["href"])]),_:2},1024)])]))),128))])])]),p(de,{data:e.products.meta},null,8,["data"])])])])],64))}});export{er as default};
