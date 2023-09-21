"use strict";(self.webpackChunkrobin=self.webpackChunkrobin||[]).push([["src_app_pages_info_info_page_ts"],{1915:(C,u,s)=>{s.r(u),s.d(u,{default:()=>A});var o=s(7691),r=s(6895),n=s(4650),c=s(5079),p=s(9377),l=s(2860);let d=(()=>{class t{constructor(){(0,o.Z)(this,"backendApi",(0,n.f3M)(l.uA)),(0,o.Z)(this,"nestApi",(0,n.f3M)(l._y))}getInfoApis(){return[{name:"robin-backend",url:this.backendApi.resolveUrl(),status$:this.backendApi.healthCheck(this.backendApi.endpoints.healthCheck)},{name:"robin-nest",url:this.nestApi.resolveUrl(),status$:this.nestApi.healthCheck(this.nestApi.endpoints.healthCheck)}]}}return(0,o.Z)(t,"\u0275fac",function(e){return new(e||t)}),(0,o.Z)(t,"\u0275prov",n.Yz7({token:t,factory:t.\u0275fac})),t})();function g(t,a){if(1&t&&(n.ynx(0),n.TgZ(1,"div",2)(2,"vw-card",3),n.ALo(3,"t9n"),n.TgZ(4,"table",4)(5,"tbody")(6,"tr")(7,"th",5),n._uU(8),n.ALo(9,"t9n"),n.qZA(),n.TgZ(10,"td"),n._uU(11),n.qZA()(),n.TgZ(12,"tr")(13,"th",6),n._uU(14),n.ALo(15,"t9n"),n.qZA(),n.TgZ(16,"td")(17,"a",7),n._uU(18),n.qZA()()(),n.TgZ(19,"tr")(20,"th",6),n._uU(21),n.ALo(22,"t9n"),n.qZA(),n.TgZ(23,"td")(24,"code"),n._uU(25),n.ALo(26,"async"),n.qZA()()()()()()(),n.BQk()),2&t){const e=a.$implicit,i=a.index,f=n.oxw();n.xp6(2),n.hYB("header","",n.lcZ(3,9,f.t.INFO.SERVICE)," #",i+1,""),n.xp6(6),n.Oqu(n.lcZ(9,11,f.t.INFO.NAME)),n.xp6(3),n.Oqu(e.name),n.xp6(3),n.Oqu(n.lcZ(15,13,f.t.INFO.URL)),n.xp6(3),n.s9C("href",e.url,n.LSH),n.xp6(1),n.Oqu(e.url),n.xp6(3),n.Oqu(n.lcZ(22,15,f.t.INFO.STATUS)),n.xp6(4),n.Oqu(n.lcZ(26,17,e.status$))}}let m=(()=>{class t{constructor(){(0,o.Z)(this,"infos",(0,n.f3M)(d).getInfoApis()),(0,o.Z)(this,"t",(0,n.f3M)(p.OS))}}return(0,o.Z)(t,"\u0275fac",function(e){return new(e||t)}),(0,o.Z)(t,"\u0275cmp",n.Xpm({type:t,selectors:[["app-info-apis"]],standalone:!0,features:[n._Bn([d]),n.jDz],decls:2,vars:1,consts:[[1,"row"],[4,"ngFor","ngForOf"],[1,"col-lg-6","col-12"],["color","primary",3,"header"],[1,"table","table-sm"],["scope","row",1,"text-end","w-25"],["scope","row",1,"text-end"],["target","_blank",3,"href"]],template:function(e,i){1&e&&(n.TgZ(0,"div",0),n.YNc(1,g,27,19,"ng-container",1),n.qZA()),2&e&&(n.xp6(1),n.Q6J("ngForOf",i.infos))},dependencies:[r.ax,r.Ov,p.Oj,c.Ak],encapsulation:2,changeDetection:0})),t})(),Z=(()=>{class t{constructor(){(0,o.Z)(this,"appConfigService",(0,n.f3M)(l._Z)),(0,o.Z)(this,"t",(0,n.f3M)(p.OS))}}return(0,o.Z)(t,"\u0275fac",function(e){return new(e||t)}),(0,o.Z)(t,"\u0275cmp",n.Xpm({type:t,selectors:[["app-info-config"]],standalone:!0,features:[n.jDz],decls:5,vars:4,consts:[[1,"row"],[1,"col-lg-6","col-12"],["color","primary",3,"header"],["layout","data-list",3,"data"]],template:function(e,i){1&e&&(n.TgZ(0,"div",0)(1,"div",1)(2,"vw-card",2),n.ALo(3,"t9n"),n._UZ(4,"vw-display-json",3),n.qZA()()()),2&e&&(n.xp6(2),n.s9C("header",n.lcZ(3,2,i.t.INFO.CONFIGURATION)),n.xp6(2),n.Q6J("data",i.appConfigService))},dependencies:[p.Oj,c.Ak,c.xB],encapsulation:2,changeDetection:0})),t})(),h=(()=>{class t{}return(0,o.Z)(t,"\u0275fac",function(e){return new(e||t)}),(0,o.Z)(t,"\u0275cmp",n.Xpm({type:t,selectors:[["app-info-container"]],standalone:!0,features:[n.jDz],decls:3,vars:0,consts:[[1,"bg-light","rounded-3","p-4"]],template:function(e,i){1&e&&(n.TgZ(0,"div",0),n._UZ(1,"app-info-config")(2,"app-info-apis"),n.qZA())},dependencies:[Z,m],encapsulation:2,changeDetection:0})),t})(),A=(()=>{class t{}return(0,o.Z)(t,"\u0275fac",function(e){return new(e||t)}),(0,o.Z)(t,"\u0275cmp",n.Xpm({type:t,selectors:[["page-info"]],standalone:!0,features:[n.jDz],decls:1,vars:0,template:function(e,i){1&e&&n._UZ(0,"app-info-container")},dependencies:[h],encapsulation:2,changeDetection:0})),t})()}}]);