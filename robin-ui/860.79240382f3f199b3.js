"use strict";(self.webpackChunkrobin=self.webpackChunkrobin||[]).push([[860],{7860:(I,l,a)=>{a.r(l),a.d(l,{InfoPage:()=>C});var r=a(6895),n=a(4650),c=a(7508),i=a(167);let u=(()=>{class t{constructor(){this.backendApi=(0,n.f3M)(c.Io),this.nestApi=(0,n.f3M)(c.SZ)}getInfoApis(){return[{name:"robin-backend",url:this.backendApi.resolveUrl(),status$:this.backendApi.healthCheck(this.backendApi.endpoints.healthCheck)},{name:"robin-nest",url:this.nestApi.resolveUrl(),status$:this.nestApi.healthCheck(this.nestApi.endpoints.healthCheck)}]}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac}),t})();var p=a(3416);function g(t,o){if(1&t&&(n.ynx(0),n.TgZ(1,"div",2)(2,"vw-card",3),n.ALo(3,"translate"),n.TgZ(4,"table",4)(5,"tbody")(6,"tr")(7,"th",5),n._uU(8),n.ALo(9,"translate"),n.qZA(),n.TgZ(10,"td"),n._uU(11),n.qZA()(),n.TgZ(12,"tr")(13,"th",6),n._uU(14),n.ALo(15,"translate"),n.qZA(),n.TgZ(16,"td")(17,"a",7),n._uU(18),n.qZA()()(),n.TgZ(19,"tr")(20,"th",6),n._uU(21),n.ALo(22,"translate"),n.qZA(),n.TgZ(23,"td")(24,"code"),n._uU(25),n.ALo(26,"async"),n.qZA()()()()()()(),n.BQk()),2&t){const e=o.$implicit,s=o.index,f=n.oxw();n.xp6(2),n.hYB("header","",n.lcZ(3,10,f.t.INFO.SERVICE)," #",s+1,""),n.Q6J("color","primary"),n.xp6(6),n.Oqu(n.lcZ(9,12,f.t.INFO.NAME)),n.xp6(3),n.Oqu(e.name),n.xp6(3),n.Oqu(n.lcZ(15,14,f.t.INFO.URL)),n.xp6(3),n.s9C("href",e.url,n.LSH),n.xp6(1),n.Oqu(e.url),n.xp6(3),n.Oqu(n.lcZ(22,16,f.t.INFO.STATUS)),n.xp6(4),n.Oqu(n.lcZ(26,18,e.status$))}}let d=(()=>{class t{constructor(){this.infos=(0,n.f3M)(u).getInfoApis(),this.t=(0,n.f3M)(c.$z)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-info-apis"]],standalone:!0,features:[n._Bn([u]),n.jDz],decls:2,vars:1,consts:[[1,"row"],[4,"ngFor","ngForOf"],[1,"col-lg-6","col-12"],[3,"header","color"],[1,"table","table-sm"],["scope","row",1,"text-end","w-25"],["scope","row",1,"text-end"],["target","_blank",3,"href"]],template:function(e,s){1&e&&(n.TgZ(0,"div",0),n.YNc(1,g,27,20,"ng-container",1),n.qZA()),2&e&&(n.xp6(1),n.Q6J("ngForOf",s.infos))},dependencies:[r.ax,r.Ov,p.aw,p.X$,i.Ak],encapsulation:2,changeDetection:0}),t})();var h=a(8490);let m=(()=>{class t{constructor(){this.appConfigService=(0,n.f3M)(h._Z),this.t=(0,n.f3M)(c.$z)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-info-config"]],standalone:!0,features:[n.jDz],decls:5,vars:6,consts:[[1,"row"],[1,"col-lg-6","col-12"],[3,"header","color"],[3,"data","layout"]],template:function(e,s){1&e&&(n.TgZ(0,"div",0)(1,"div",1)(2,"vw-card",2),n.ALo(3,"translate"),n._UZ(4,"vw-display-json",3),n.qZA()()()),2&e&&(n.xp6(2),n.Q6J("header",n.lcZ(3,4,s.t.INFO.CONFIGURATION))("color","primary"),n.xp6(2),n.Q6J("data",s.appConfigService)("layout","data-list"))},dependencies:[p.aw,p.X$,i.Ak,i.xB],encapsulation:2,changeDetection:0}),t})(),A=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-info-container"]],standalone:!0,features:[n.jDz],decls:3,vars:0,consts:[[1,"bg-light","rounded-3","p-4"]],template:function(e,s){1&e&&(n.TgZ(0,"div",0),n._UZ(1,"app-info-config")(2,"app-info-apis"),n.qZA())},dependencies:[m,d],encapsulation:2,changeDetection:0}),t})(),C=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["page-info"]],standalone:!0,features:[n.jDz],decls:1,vars:0,template:function(e,s){1&e&&n._UZ(0,"app-info-container")},dependencies:[A],encapsulation:2,changeDetection:0}),t})()}}]);