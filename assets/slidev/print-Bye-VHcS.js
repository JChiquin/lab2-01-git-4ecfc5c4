import{C as e,Ct as t,E as n,S as r,U as i,V as a,m as o,v as s,w as c,x as l,y as u,yt as d}from"../modules/shiki-BSMVgmiL.js";import{Ct as f,b as p}from"../index-ZaFVa-Vm.js";import{S as m}from"../modules/vue-X_MrbhsX.js";import{c as h}from"./env-BtjxMayX.js";import{t as g}from"./NoteDisplay-De_wHxvG.js";var _={id:`page-root`},v={class:`m-4`},y={class:`mb-10`},b={class:`text-4xl font-bold mt-2`},x={class:`opacity-50`},S={class:`text-lg`},C={class:`font-bold flex gap-2`},w={class:`opacity-50`},T={key:0,class:`border-main mb-8`},E=n({__name:`print`,setup(n){let{slides:E,total:D}=p();m(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),f({title:`Notes - ${h.title}`});let O=s(()=>E.value.map(e=>e.meta?.slide).filter(e=>e!==void 0&&e.noteHTML!==``));return(n,s)=>(a(),r(`div`,_,[u(`div`,v,[u(`div`,y,[u(`h1`,b,t(d(h).title),1),u(`div`,x,t(new Date().toLocaleString()),1)]),(a(!0),r(o,null,i(O.value,(n,i)=>(a(),r(`div`,{key:i,class:`flex flex-col gap-4 break-inside-avoid-page`},[u(`div`,null,[u(`h2`,S,[u(`div`,C,[u(`div`,w,t(n?.no)+`/`+t(d(D)),1),e(` `+t(n?.title)+` `,1),s[0]||=u(`div`,{class:`flex-auto`},null,-1)])]),c(g,{"note-html":n.noteHTML,class:`max-w-full`},null,8,[`note-html`])]),i<O.value.length-1?(a(),r(`hr`,T)):l(`v-if`,!0)]))),128))])]))}});export{E as default};