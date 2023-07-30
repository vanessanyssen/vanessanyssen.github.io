"use strict";(self.webpackChunkrobin=self.webpackChunkrobin||[]).push([["src_app_pages_robin_allowance_allowance-from-reduction_page_ts"],{1594:(P,u,n)=>{n.r(u),n.d(u,{default:()=>E});var a=n(7691),c=n(4006),f=n(4045),i=n(9333),h=n(4522),F=n(3383),y=n(3714),A=n(7060),g=n(7174),o=n(4650),m=n(2778),d=n(1203),s=n(3597),w=n(7718),v=n(3416),C=n(5158);let Z=(()=>{class e{constructor(){(0,a.Z)(this,"formGroupDirective",(0,o.f3M)(c.sg)),(0,a.Z)(this,"currencyMask",m.Pu),(0,a.Z)(this,"medicalCategoryOptions",d.Z$),(0,a.Z)(this,"monthMask",m.Cy),(0,a.Z)(this,"mpMinDate",d.pw),(0,a.Z)(this,"t",(0,o.f3M)(w.OS)),(0,a.Z)(this,"ctrls",void 0)}ngOnInit(){this.ctrls=this.formGroupDirective.form.controls}}return(0,a.Z)(e,"\u0275fac",function(t){return new(t||e)}),(0,a.Z)(e,"\u0275cmp",o.Xpm({type:e,selectors:[["app-allowance-from-reduction-form-inline"]],standalone:!0,features:[o._Bn([],[{provide:c.gN,useExisting:c.sg}]),o.jDz],decls:21,vars:24,consts:[["vwFormResetObserver","",1,"row","g-2"],[1,"col-lg-3","col-md-6","mb-5"],["labelClass","form-label",3,"label"],["appFormControlErrorsContainer","",1,"input-group"],["type","text",1,"form-control",3,"formControl","placeholder","inputMask","overriddenMessages"],[1,"input-group-text"],[1,"fa-regular","fa-calendar-check"],["vw-form-select-options","",1,"form-select",3,"formControl","placeholder","options","selectedOption"],["vwResetValueIfEmpty","","type","text",1,"form-control",3,"formControl","inputMask","placeholder"],[1,"fa-solid","fa-euro-sign"]],template:function(t,l){1&t&&(o.TgZ(0,"div",0)(1,"div",1)(2,"vw-form-field",2),o.ALo(3,"translate"),o.TgZ(4,"div",3),o._UZ(5,"input",4),o.ALo(6,"translate"),o.TgZ(7,"span",5),o._UZ(8,"i",6),o.qZA()()()(),o.TgZ(9,"div",1)(10,"vw-form-field",2),o.ALo(11,"translate"),o._UZ(12,"select",7),o.ALo(13,"translate"),o.qZA()(),o.TgZ(14,"div",1)(15,"vw-form-field",2),o.ALo(16,"translate"),o.TgZ(17,"div",3),o._UZ(18,"input",8),o.TgZ(19,"span",5),o._UZ(20,"i",9),o.qZA()()()()()),2&t&&(o.xp6(2),o.s9C("label",o.lcZ(3,14,l.t.ALLOWANCE.month)),o.xp6(3),o.s9C("placeholder",o.lcZ(6,16,l.t.FORM.MONTH_FORMAT)),o.Q6J("formControl",l.ctrls.month)("inputMask",l.monthMask.options)("overriddenMessages",l.monthMask.errorMessage),o.xp6(5),o.s9C("label",o.lcZ(11,18,l.t.ALLOWANCE.medicalCategory)),o.xp6(2),o.s9C("placeholder",o.lcZ(13,20,l.t.FORM.CHOOSE)),o.Q6J("formControl",l.ctrls.medicalCategory)("options",l.medicalCategoryOptions)("selectedOption",l.ctrls.medicalCategory.value),o.xp6(3),o.s9C("label",o.lcZ(16,22,l.t.ALLOWANCE.reduction)),o.xp6(3),o.s9C("placeholder",l.currencyMask.inputPlaceholder),o.Q6J("formControl",l.ctrls.reduction)("inputMask",l.currencyMask.options))},dependencies:[c.UX,c.Fj,c.EJ,c.JJ,c.oH,v.aw,v.X$,i.Zg,i.tS,i._c,s.hg,s.LW,s.vA,s.IQ,s.Og,C.zz,C.J6,m.t4],encapsulation:2,changeDetection:0})),e})();var R=n(3823),O=n(5359);let T=(()=>{class e{constructor(){(0,a.Z)(this,"api",(0,o.f3M)(O._y))}getResult(t){return this.api.post(this.api.endpoints.allowanceFromReduction,t)}}return(0,a.Z)(e,"\u0275fac",function(t){return new(t||e)}),(0,a.Z)(e,"\u0275prov",o.Yz7({token:e,factory:e.\u0275fac})),e})();var L=n(4111),p=n(7244);const D=e=>({startDate:(0,p.Vn)(e.month),medicalCategory:(0,L.F)(e.medicalCategory),reduction:(0,p.W_)(e.reduction)}),U=e=>({form:{month:{data:e.month},medicalCategory:{data:e.medicalCategory},reduction:{data:(0,p.R3)(e.reduction,"\xa0\u20ac")}}}),J=({reduction:e,allowance:r})=>({reduction:{reduction:{data:e.reduction,pipe:"number"}},allowance:{category:{data:r.category,pipe:"enum"},maximum:{data:r.maximum,pipe:"number"},yearly:{data:r.yearly,pipe:"number"},majoration:{data:!!r.majoration},monthly:{data:r.monthly,pipe:"currency"}}});function I(e,r){if(1&e&&o._UZ(0,"app-allowance-response",2),2&e){const t=r.$implicit;o.Q6J("reduction",t.reduction.reduction)("allowance",t.allowance)}}let N=(()=>{class e{constructor(){(0,a.Z)(this,"form",function M(){const e=(0,o.f3M)(c.qu);return e.group({month:e.nonNullable.control("",{validators:[c.kI.required,R.D0.min(d.pw)],updateOn:"blur"}),medicalCategory:e.control(null,c.kI.required),reduction:e.nonNullable.control("",c.kI.required)})}()),(0,a.Z)(this,"AllowanceFromReductionView",void 0)}}return(0,a.Z)(e,"\u0275fac",function(t){return new(t||e)}),(0,a.Z)(e,"\u0275cmp",o.Xpm({type:e,selectors:[["app-allowance-from-reduction-container"]],standalone:!0,features:[o._Bn([],[(0,h.Po)(T),(0,F.N)(U),(0,y.s)(D),(0,A.n)(J)]),o.jDz],decls:3,vars:2,consts:[[3,"formGroup"],[3,"typeOf"],[3,"reduction","allowance"]],template:function(t,l){1&t&&(o.TgZ(0,"app-base-form-container",0),o._UZ(1,"app-allowance-from-reduction-form-inline"),o.YNc(2,I,1,2,"ng-template",1),o.qZA()),2&t&&(o.Q6J("formGroup",l.form),o.xp6(2),o.Q6J("typeOf",l.AllowanceFromReductionView))},dependencies:[c.UX,c.JL,c.sg,i.wM,Z,f.b,g.Co],encapsulation:2,changeDetection:0})),e})(),E=(()=>{class e{}return(0,a.Z)(e,"\u0275fac",function(t){return new(t||e)}),(0,a.Z)(e,"\u0275cmp",o.Xpm({type:e,selectors:[["page-allowance-from-reduction"]],standalone:!0,features:[o.jDz],decls:1,vars:0,template:function(t,l){1&t&&o._UZ(0,"app-allowance-from-reduction-container")},dependencies:[N],encapsulation:2,changeDetection:0})),e})()}}]);