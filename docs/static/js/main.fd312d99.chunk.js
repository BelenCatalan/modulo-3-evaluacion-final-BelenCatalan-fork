(this.webpackJsonprick=this.webpackJsonprick||[]).push([[0],{16:function(e,a,t){e.exports=t.p+"static/media/Rick_and_Morty.75509f2e.png"},19:function(e,a,t){e.exports=t.p+"static/media/nave.624910a2.png"},20:function(e,a,t){e.exports=t(32)},25:function(e,a,t){},26:function(e,a,t){},32:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(15),l=t.n(r),s=(t(25),t(12)),i=(t(26),t(16)),o=t.n(i),m=t(6),u=function(e){return c.a.createElement("li",{className:"card__container"},c.a.createElement(m.b,{className:"link__decoration",to:"/character/".concat(e.character.id)},c.a.createElement("img",{className:"card__image",src:e.character.image,alt:"character_name"}),c.a.createElement("h4",{className:"card__text--color card__h4"},e.character.name),c.a.createElement("p",{className:"card__text--color card__p"},e.character.species)))};var d=function(e){return 0===e.characters.length?c.a.createElement("div",null,c.a.createElement("p",{className:"text__advise"},"No hay ning\xfan personaje que coincida con: ",e.charactersFilter)):c.a.createElement("section",{className:"section__grid"},c.a.createElement("ul",{className:"wrapper card__ul"},e.characters.map((function(e){return c.a.createElement(u,{key:e.id,character:e})}))))};var h=function(e){return c.a.createElement("section",{className:"input__style"},c.a.createElement("form",{onSubmit:function(e){e.preventDefault()},className:"input__style"},c.a.createElement("label",{className:"input__style",htmlFor:"name"}),c.a.createElement("input",{className:"input__label",type:"text",name:"character",id:"name",placeholder:"Character name",onChange:function(a){a.preventDefault(),console.log(a.target.value),e.handleFilterText({value:a.target.value,name:a.target.name})},value:e.charactersFilter})))},_=t(19),p=t.n(_);var E=function(e){return c.a.createElement("div",{className:"card__content"},c.a.createElement("div",null,c.a.createElement("span",{className:"card__text"}," "),c.a.createElement(m.b,{to:"/"},c.a.createElement("img",{className:"ship__link",src:p.a,alt:"nave Rick and Morty"})),c.a.createElement("div",{className:"content card__div"},c.a.createElement("header",null,c.a.createElement("img",{className:"detail__image",src:e.character.image,alt:e.character.name})),c.a.createElement("section",null,c.a.createElement("ul",{className:"detail__ul card__text"},c.a.createElement("li",{className:"card__title"},e.character.name),c.a.createElement("li",{className:"card__text"},"Status: ",e.character.status),c.a.createElement("li",null,"Species:",e.character.species),c.a.createElement("li",null,"Origin: ",e.character.origin),c.a.createElement("li",null,"Episodes:",e.character.episodes))))))},f=function(){return fetch("https://rickandmortyapi.com/api/character/").then((function(e){return e.json()})).then((function(e){return e.results.map((function(e){return{id:e.id,name:e.name,status:e.status,species:e.species,origin:e.origin.name,image:e.image,episodes:e.episode.length}}))}))},g=t(5);var v=function(){var e=Object(n.useState)([]),a=Object(s.a)(e,2),t=a[0],r=a[1],l=Object(n.useState)(""),i=Object(s.a)(l,2),m=i[0],u=i[1];Object(n.useEffect)((function(){f().then((function(e){r(e)}))}),[]),t.sort((function(e,a){return e.name<a.name?-1:e.name>a.name?1:0}));var _=t.filter((function(e){return console.log(e.name),e.name.toLowerCase().includes(m.toLowerCase())}));return c.a.createElement("div",null,c.a.createElement("header",null,c.a.createElement("img",{className:"header__name",src:o.a,alt:"Rick and Morty"})),c.a.createElement(g.c,null,c.a.createElement(g.a,{exact:!0,path:"/"},c.a.createElement(h,{handleFilterText:function(e){u(e.value)},charactersFilter:m}),c.a.createElement(d,{characters:_,charactersFilter:m})),c.a.createElement(g.a,{path:"/character/:characterId",render:function(e){console.log(e),console.log(e.match.params.characterId);var a=parseInt(e.match.params.characterId);console.log(a);var n=t.find((function(e){return e.id===a}));return console.log(n),void 0!==n?c.a.createElement(E,{character:n}):c.a.createElement("p",{className:"text__advise"},"El personaje que buscas no existe")}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(m.a,null,c.a.createElement(v,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.fd312d99.chunk.js.map