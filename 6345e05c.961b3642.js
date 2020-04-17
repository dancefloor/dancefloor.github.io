(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{116:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(1),a=n(6),i=(n(0),n(149)),s={id:"payment",title:"Payment Module"},o={id:"modules/payment",title:"Payment Module",description:"- [ ] A user can view all courses he or she needs to pay or has paid",source:"@site/docs/modules/payment.md",permalink:"https://github.com/dancefloor/dancefloor.github.io/docs/modules/payment",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/modules/payment.md"},c=[{value:"Payment method :",id:"payment-method-",children:[]},{value:"Relationships",id:"relationships",children:[]}],l={rightToc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("ul",{className:"contains-task-list"},Object(i.b)("li",Object(r.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(r.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","A user can view all courses he or she needs to pay or has paid"),Object(i.b)("li",Object(r.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(r.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","A user pay one or many courses (through registration status: pending) "),Object(i.b)("li",Object(r.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(r.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","List of registered courses "),Object(i.b)("li",Object(r.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(r.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Propose new courses at the end of the session "),Object(i.b)("li",Object(r.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(r.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Payment reminders from a specific time"),Object(i.b)("li",Object(r.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(r.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Users can add promo codes (coupons) to get discounts")),Object(i.b)("h2",{id:"payment-method-"},"Payment method :"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Carte bancaire (normal)"),Object(i.b)("li",{parentName:"ul"},"Revolut (Small Bonus)"),Object(i.b)("li",{parentName:"ul"},"Virement Bancaire (normal)"),Object(i.b)("li",{parentName:"ul"},"Cash (Malus)"),Object(i.b)("li",{parentName:"ul"},"Credit card")),Object(i.b)("h2",{id:"relationships"},"Relationships"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"payment_registration"),Object(i.b)("li",{parentName:"ul"},"payment_user")),Object(i.b)("p",null,"semaines avant la fin de la session, on propose \xe0 l\u2019\xe9l\xe8ve de se r\xe9inscrire aux prochaines sessions des cours qu\u2019il fait. M\xeame syst\xe8me; avec possibilit\xe9 de modifier sa liste de cours (supprimer ou ajouter nouveaux cours)"),Object(i.b)("p",null,"Comme sur les sites classiques de ecommerce, panier avec tous les achats que le client souhaite faire et possibilit\xe9 d\u2019augmenter les quantit\xe9s sur les soir\xe9es, boissons et Tshirts et possibilit\xe9 de retirer des articles."),Object(i.b)("p",null,"Syst\xe8me de relance du client s\u2019il n\u2019a pas achev\xe9 la transaction le lendemain"),Object(i.b)("p",null,"Au moment des paiements, pouvoir faire des propositions d\u2019achats compl\xe9mentaires - proposer des stages \xe0 venir - proposer des cours qui ont du mal \xe0 se remplir \xe0 des prix r\xe9duits - proposer une promotion sur des produits d\xe9riv\xe9s en fin de stock"),Object(i.b)("p",null,"porte-monnaie \xe9lectronique ( que l\u2019utilisateur puisse charger un compte en ligne pour faire les achats chez Dancefloor)\nconfirmation de paiement et informations cours"),Object(i.b)("p",null,"Le client re\xe7oit un mail de f\xe9licitations pour son acquisition et le d\xe9tail de tous les cours auxquels il a souscrits.\nenvoyer notification \xe0 (prof, admin)"),Object(i.b)("p",null,"L\u2019admin et le prof re\xe7oive un mail disant qu\u2019un nouvel \xe9l\xe8ve s\u2019est inscrit \xe0 tel cours\nmettre \xe0 jour paiement sur le compte de l\u2019\xe9l\xe8ve et dans sa fiche de cours."))}u.isMDXComponent=!0},149:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,d=p["".concat(s,".").concat(b)]||p[b]||m[b]||i;return n?a.a.createElement(d,o({ref:t},l,{components:n})):a.a.createElement(d,o({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=b;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);