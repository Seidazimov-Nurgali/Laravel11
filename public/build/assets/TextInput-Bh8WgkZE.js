import{o as s,c as o,t as r,y as d,J as i,r as c,l as m,g as p,v as f}from"./app-B_e1RL1z.js";const _={class:"block text-sm font-medium text-gray-700"},v={key:0},g={key:1},b={__name:"InputLabel",props:{value:{type:String}},setup(e){return(a,u)=>(s(),o("label",_,[e.value?(s(),o("span",v,r(e.value),1)):(s(),o("span",g,[d(a.$slots,"default")]))]))}},h={__name:"TextInput",props:{modelValue:{required:!0},modelModifiers:{}},emits:["update:modelValue"],setup(e,{expose:a}){const u=i(e,"modelValue"),t=c(null);return m(()=>{t.value.hasAttribute("autofocus")&&t.value.focus()}),a({focus:()=>t.value.focus()}),(y,l)=>p((s(),o("input",{class:"rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500","onUpdate:modelValue":l[0]||(l[0]=n=>u.value=n),ref_key:"input",ref:t},null,512)),[[f,u.value]])}};export{b as _,h as a};
