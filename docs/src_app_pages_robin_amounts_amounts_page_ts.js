"use strict";(self.webpackChunkrobin=self.webpackChunkrobin||[]).push([["src_app_pages_robin_amounts_amounts_page_ts"],{4297:(U,p,a)=>{a.r(p),a.d(p,{default:()=>$});var r=a(7691),l=a(6895),t=a(4650),u=a(4004),d=a(8502),h=a(262),A=a(9646),f=a(9333),c=a(7174),Z=a(5011),i=a(3597),y=a(7244),C=a(663),m=a(7718),S=a(5359);let v=(()=>{class e{constructor(){(0,r.Z)(this,"api",(0,t.f3M)(S._y))}getHouseholdAmountsByStartDate(){return this.api.get(this.api.endpoints.groupAmounts,{by:"startDate",filter:"household"})}getMedicalAmountsByStartDate(){return this.api.get(this.api.endpoints.groupAmounts,{by:"startDate",filter:"medical"})}}return(0,r.Z)(e,"\u0275fac",function(o){return new(o||e)}),(0,r.Z)(e,"\u0275prov",t.Yz7({token:e,factory:e.\u0275fac})),e})();var g=a(3416);function x(e,s){if(1&e&&(t.TgZ(0,"div",5)(1,"vw-expandable-table",6),t.ALo(2,"mapDynamicPipe"),t.ALo(3,"translate"),t.TgZ(4,"h5",7),t._uU(5),t.ALo(6,"translate"),t.qZA()()()),2&e){const o=s.ngIf,n=t.oxw();t.xp6(1),t.s9C("expandLabel",t.lcZ(3,7,n.t.FORM.EXPAND_ALL)),t.Q6J("data",o)("headers",t.xi3(2,4,n.headers,"translate")),t.xp6(4),t.Oqu(t.lcZ(6,9,n.t.AMOUNTS.medicalCategories))}}function D(e,s){1&e&&t._UZ(0,"app-form-response-error",8),2&e&&t.Q6J("error",s.ngIf)}function L(e,s){if(1&e&&(t.TgZ(0,"div",5)(1,"vw-expandable-table",6),t.ALo(2,"mapDynamicPipe"),t.ALo(3,"translate"),t.TgZ(4,"h5",7),t._uU(5),t.ALo(6,"translate"),t.qZA()()()),2&e){const o=s.ngIf,n=t.oxw();t.xp6(1),t.s9C("expandLabel",t.lcZ(3,7,n.t.FORM.EXPAND_ALL)),t.Q6J("data",o)("headers",t.xi3(2,4,n.headers,"translate")),t.xp6(4),t.Oqu(t.lcZ(6,9,n.t.AMOUNTS.householdCategories))}}function T(e,s){1&e&&t._UZ(0,"app-form-response-error",8),2&e&&t.Q6J("error",s.ngIf)}let M=(()=>{class e{constructor(){(0,r.Z)(this,"allowanceAmountsService",(0,t.f3M)(v)),(0,r.Z)(this,"injector",(0,t.f3M)(t.lqb)),(0,r.Z)(this,"loadingState$",(0,t.f3M)(C.vw).state$),(0,r.Z)(this,"t",(0,t.f3M)(m.OS)),(0,r.Z)(this,"errorHousehold$",void 0),(0,r.Z)(this,"errorMedical$",void 0),(0,r.Z)(this,"headers",void 0),(0,r.Z)(this,"householdAmounts$",void 0),(0,r.Z)(this,"medicalAmounts$",void 0)}ngOnInit(){this.headers=[this.t.AMOUNTS.startDate,this.t.AMOUNTS.category,this.t.AMOUNTS.amount],this.medicalAmounts$=this.allowanceAmountsService.getMedicalAmountsByStartDate().pipe((0,u.U)(o=>this.amountsByStartDateViewAdapter(o))),this.errorMedical$=this.medicalAmounts$.pipe((0,d.l)(),(0,h.K)(o=>(0,A.of)(o))),this.householdAmounts$=this.allowanceAmountsService.getHouseholdAmountsByStartDate().pipe((0,u.U)(o=>this.amountsByStartDateViewAdapter(o))),this.errorHousehold$=this.householdAmounts$.pipe((0,d.l)(),(0,h.K)(o=>(0,A.of)(o)))}amountAdapter(o){return{startDate:o.startDate?(0,y.O4)(o.startDate):"\xa0",category:o.category?this.injector.runInContext(()=>(0,m.T)(o.category,this.t.ENUMS)):"\xa0",amount:(0,Z.W)(o.amount)||"\xa0"}}amountsByStartDateViewAdapter(o){return o.map(n=>({parent:this.amountAdapter(n.parent),children:n.children.map(N=>this.amountAdapter(N))}))}}return(0,r.Z)(e,"\u0275fac",function(o){return new(o||e)}),(0,r.Z)(e,"\u0275cmp",t.Xpm({type:e,selectors:[["app-amounts-container"]],standalone:!0,features:[t._Bn([v]),t.jDz],decls:16,vars:18,consts:[[1,"row"],[1,"col-xl-6","col-12","col-print-6"],["class","table-responsive mb-3",4,"ngIf"],[3,"error",4,"ngIf"],["vwNoPrint","",1,"float-end",3,"disabled"],[1,"table-responsive","mb-3"],[3,"data","headers","expandLabel"],["slotCaption","",1,"d-inline","text-dark"],[3,"error"]],template:function(o,n){1&o&&(t.TgZ(0,"vw-card")(1,"div",0)(2,"div",1),t.YNc(3,x,7,11,"div",2),t.ALo(4,"async"),t.YNc(5,D,1,1,"app-form-response-error",3),t.ALo(6,"async"),t.qZA(),t.TgZ(7,"div",1),t.YNc(8,L,7,11,"div",2),t.ALo(9,"async"),t.YNc(10,T,1,1,"app-form-response-error",3),t.ALo(11,"async"),t.qZA()(),t.TgZ(12,"vw-print-button",4),t.ALo(13,"async"),t._uU(14),t.ALo(15,"translate"),t.qZA()()),2&o&&(t.xp6(3),t.Q6J("ngIf",t.lcZ(4,6,n.medicalAmounts$)),t.xp6(2),t.Q6J("ngIf",t.lcZ(6,8,n.errorMedical$)),t.xp6(3),t.Q6J("ngIf",t.lcZ(9,10,n.householdAmounts$)),t.xp6(2),t.Q6J("ngIf",t.lcZ(11,12,n.errorHousehold$)),t.xp6(2),t.Q6J("disabled",!!t.lcZ(13,14,n.loadingState$)),t.xp6(2),t.Oqu(t.lcZ(15,16,n.t.FORM.PRINT)))},dependencies:[l.O5,l.Ov,g.aw,g.X$,i.Ak,f.n9,i.i5,c.Hr,i.Lz,c.ZY],encapsulation:2,changeDetection:0})),e})();var O=a(1203);let $=(()=>{class e extends((0,O.Y2)()){}return(0,r.Z)(e,"\u0275fac",function(){let s;return function(n){return(s||(s=t.n5z(e)))(n||e)}}()),(0,r.Z)(e,"\u0275cmp",t.Xpm({type:e,selectors:[["page-amounts"]],standalone:!0,features:[t.qOj,t.jDz],decls:1,vars:0,template:function(o,n){1&o&&t._UZ(0,"app-amounts-container")},dependencies:[M],encapsulation:2,changeDetection:0})),e})()}}]);