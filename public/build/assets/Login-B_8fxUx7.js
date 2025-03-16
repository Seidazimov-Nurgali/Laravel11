import{T as _,o as m,x as n,w as i,a as o,u as t,Z as b,c as y,t as x,d,b as a,i as k,e as u,n as V,f as v}from"./app-B_e1RL1z.js";import{_ as B}from"./Checkbox-BZBuEeaO.js";import{_ as P}from"./GuestLayout-t7neE9CU.js";import{_ as c}from"./InputError-DW-aRdld.js";import{_ as f,a as p}from"./TextInput-Bh8WgkZE.js";import{P as $}from"./PrimaryButton-srNZse5Q.js";import"./ApplicationLogo-GDIphOUC.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const N={key:0,class:"mb-4 text-sm font-medium text-green-600"},h={class:"mt-4"},q={class:"mt-4 block"},C={class:"flex items-center"},L={class:"mt-4 flex items-center justify-end"},D={__name:"Login",props:{canResetPassword:{type:Boolean},status:{type:String}},setup(l){const e=_({email:"",password:"",remember:!1}),g=()=>{e.post(route("login"),{onFinish:()=>e.reset("password")})};return(w,s)=>(m(),n(P,null,{default:i(()=>[o(t(b),{title:"Log in"}),l.status?(m(),y("div",N,x(l.status),1)):d("",!0),a("form",{onSubmit:v(g,["prevent"])},[a("div",null,[o(f,{for:"email",value:"Email"}),o(p,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:t(e).email,"onUpdate:modelValue":s[0]||(s[0]=r=>t(e).email=r),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),o(c,{class:"mt-2",message:t(e).errors.email},null,8,["message"])]),a("div",h,[o(f,{for:"password",value:"Password"}),o(p,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:t(e).password,"onUpdate:modelValue":s[1]||(s[1]=r=>t(e).password=r),required:"",autocomplete:"current-password"},null,8,["modelValue"]),o(c,{class:"mt-2",message:t(e).errors.password},null,8,["message"])]),a("div",q,[a("label",C,[o(B,{name:"remember",checked:t(e).remember,"onUpdate:checked":s[2]||(s[2]=r=>t(e).remember=r)},null,8,["checked"]),s[3]||(s[3]=a("span",{class:"ms-2 text-sm text-gray-600"},"Remember me",-1))])]),a("div",L,[l.canResetPassword?(m(),n(t(k),{key:0,href:w.route("password.request"),class:"rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"},{default:i(()=>s[4]||(s[4]=[u(" Forgot your password? ")])),_:1},8,["href"])):d("",!0),o($,{class:V(["ms-4",{"opacity-25":t(e).processing}]),disabled:t(e).processing},{default:i(()=>s[5]||(s[5]=[u(" Log in ")])),_:1},8,["class","disabled"])])],32)]),_:1}))}};export{D as default};
