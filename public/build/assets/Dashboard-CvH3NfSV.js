import{_ as u}from"./AuthenticatedLayout-CH7v2XGA.js";import{o as a,c as s,a as i,u as g,Z as y,w as l,b as e,F as h,h as c,t as n,e as o,d,i as b}from"./app-B_e1RL1z.js";import"./ApplicationLogo-GDIphOUC.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./DropdownLink-BIosfC4Q.js";const k={class:"py-12"},w={class:"mx-auto max-w-7xl sm:px-6 lg:px-8"},f={class:"overflow-hidden bg-white shadow-sm sm:rounded-lg"},p={class:"p-6 text-gray-900"},v={class:"bg-white py-8 antialiased dark:bg-gray-900 md:py-16"},_={class:"mx-auto max-w-screen-xl px-4 2xl:px-0"},j={class:"mx-auto max-w-5xl"},C={class:"mt-6 flow-root sm:mt-8"},B={class:"divide-y divide-gray-200 dark:divide-gray-700"},D={class:"flex flex-wrap items-center gap-y-4 py-6"},V={class:"w-1/2 sm:w-1/4 lg:w-auto lg:flex-1"},M={class:"mt-1.5 text-base font-semibold text-gray-900 dark:text-white"},L={href:"#",class:"hover:underline"},N={class:"w-1/2 sm:w-1/4 lg:w-auto lg:flex-1"},P={class:"mt-1.5 text-base font-semibold text-gray-900 dark:text-white"},S={class:"w-1/2 sm:w-1/4 lg:w-auto lg:flex-1"},Z={class:"mt-1.5 text-base font-semibold text-gray-900 dark:text-white"},H={class:"w-1/2 sm:w-1/4 lg:w-auto lg:flex-1"},I={key:0,class:"me-2 mt-1.5 inline-flex items-center rounded bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300"},O={key:1,class:"me-2 mt-1.5 inline-flex items-center rounded bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"},z={key:2,class:"me-2 mt-1.5 inline-flex items-center rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300"},F={key:3,class:"me-2 mt-1.5 inline-flex items-center rounded bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900 dark:text-red-300"},$={class:"w-full grid sm:grid-cols-2 lg:flex lg:w-64 lg:items-center lg:justify-end gap-4"},A={key:0,type:"button",class:"w-full rounded-lg border border-red-700 px-3 py-2 text-center text-sm font-medium text-red-700 hover:bg-red-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-red-300 dark:border-red-500 dark:text-red-500 dark:hover:bg-red-600 dark:hover:text-white dark:focus:ring-red-900 lg:w-auto"},E={key:1,type:"button",class:"w-full rounded-lg bg-blue-700 px-3 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 lg:w-auto"},Q={__name:"Dashboard",props:{orders:Object},setup(x){return(m,t)=>(a(),s(h,null,[i(g(y),{title:"Dashboard"}),i(u,null,{header:l(()=>t[0]||(t[0]=[e("h2",{class:"text-xl font-semibold leading-tight text-gray-800"}," Dashboard ",-1)])),default:l(()=>[e("div",k,[e("div",w,[e("div",f,[e("div",p,[e("section",v,[e("div",_,[e("div",j,[t[10]||(t[10]=e("div",{class:"gap-4 sm:flex sm:items-center sm:justify-between"},[e("h2",{class:"text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl"},"My orders"),e("div",{class:"mt-6 gap-4 space-y-4 sm:mt-0 sm:flex sm:items-center sm:justify-end sm:space-y-0"},[e("div",null,[e("label",{for:"order-type",class:"sr-only mb-2 block text-sm font-medium text-gray-900 dark:text-white"},"Select order type"),e("select",{id:"order-type",class:"block w-full min-w-[8rem] rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"},[e("option",{selected:""},"All orders"),e("option",{value:"pre-order"},"Pre-order"),e("option",{value:"transit"},"In transit"),e("option",{value:"confirmed"},"Confirmed"),e("option",{value:"cancelled"},"Cancelled")])]),e("span",{class:"inline-block text-gray-500 dark:text-gray-400"}," from "),e("div",null,[e("label",{for:"duration",class:"sr-only mb-2 block text-sm font-medium text-gray-900 dark:text-white"},"Select duration"),e("select",{id:"duration",class:"block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"},[e("option",{selected:""},"this week"),e("option",{value:"this month"},"this month"),e("option",{value:"last 3 months"},"the last 3 months"),e("option",{value:"lats 6 months"},"the last 6 months"),e("option",{value:"this year"},"this year")])])])],-1)),e("div",C,[e("div",B,[(a(!0),s(h,null,c(x.orders,r=>(a(),s("div",D,[e("dl",V,[t[1]||(t[1]=e("dt",{class:"text-base font-medium text-gray-500 dark:text-gray-400"},"Order ID:",-1)),e("dd",M,[e("a",L,"#"+n(r.id),1)])]),e("dl",N,[t[2]||(t[2]=e("dt",{class:"text-base font-medium text-gray-500 dark:text-gray-400"},"Date:",-1)),e("dd",P,n(new Date(r.created_at).toLocaleDateString()),1)]),e("dl",S,[t[3]||(t[3]=e("dt",{class:"text-base font-medium text-gray-500 dark:text-gray-400"},"Price:",-1)),e("dd",Z,"$"+n(r.total_price),1)]),e("dl",H,[t[8]||(t[8]=e("dt",{class:"text-base font-medium text-gray-500 dark:text-gray-400"},"Status:",-1)),r.status==1?(a(),s("dd",I,t[4]||(t[4]=[e("svg",{class:"me-1 h-3 w-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M18.5 4h-13m13 16h-13M8 20v-3.333a2 2 0 0 1 .4-1.2L10 12.6a1 1 0 0 0 0-1.2L8.4 8.533a2 2 0 0 1-.4-1.2V4h8v3.333a2 2 0 0 1-.4 1.2L13.957 11.4a1 1 0 0 0 0 1.2l1.643 2.867a2 2 0 0 1 .4 1.2V20H8Z"})],-1),o(" Pre-order ")]))):d("",!0),r.status==2?(a(),s("dd",O,t[5]||(t[5]=[e("svg",{class:"me-1 h-3 w-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"})],-1),o(" In transit ")]))):d("",!0),r.status==3?(a(),s("dd",z,t[6]||(t[6]=[e("svg",{class:"me-1 h-3 w-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 11.917 9.724 16.5 19 7.5"})],-1),o(" Confirmed ")]))):d("",!0),r.status==0?(a(),s("dd",F,t[7]||(t[7]=[e("svg",{class:"me-1 h-3 w-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18 17.94 6M18 18 6.06 6"})],-1),o(" Cancelled ")]))):d("",!0)]),e("div",$,[["1","2"].includes(r.status)?(a(),s("button",A,"Cancel order")):(a(),s("button",E,"Order again")),i(g(b),{href:m.route("order.show",r.id),class:"w-full inline-flex justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 lg:w-auto"},{default:l(()=>t[9]||(t[9]=[o("View details")])),_:2},1032,["href"])])]))),256))])]),t[11]||(t[11]=e("nav",{class:"mt-6 flex items-center justify-center sm:mt-8","aria-label":"Page navigation example"},[e("ul",{class:"flex h-8 items-center -space-x-px text-sm"},[e("li",null,[e("a",{href:"#",class:"ms-0 flex h-8 items-center justify-center rounded-s-lg border border-e-0 border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"},[e("span",{class:"sr-only"},"Previous"),e("svg",{class:"h-4 w-4 rtl:rotate-180","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m15 19-7-7 7-7"})])])]),e("li",null,[e("a",{href:"#",class:"flex h-8 items-center justify-center border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"},"1")]),e("li",null,[e("a",{href:"#",class:"flex h-8 items-center justify-center border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"},"2")]),e("li",null,[e("a",{href:"#","aria-current":"page",class:"z-10 flex h-8 items-center justify-center border border-primary-300 bg-primary-50 px-3 leading-tight text-primary-600 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"},"3")]),e("li",null,[e("a",{href:"#",class:"flex h-8 items-center justify-center border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"},"...")]),e("li",null,[e("a",{href:"#",class:"flex h-8 items-center justify-center border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"},"100")]),e("li",null,[e("a",{href:"#",class:"flex h-8 items-center justify-center rounded-e-lg border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"},[e("span",{class:"sr-only"},"Next"),e("svg",{class:"h-4 w-4 rtl:rotate-180","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m9 5 7 7-7 7"})])])])])],-1))])])])])])])])]),_:1})],64))}};export{Q as default};
