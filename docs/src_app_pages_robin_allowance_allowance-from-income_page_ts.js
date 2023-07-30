"use strict";(self.webpackChunkrobin=self.webpackChunkrobin||[]).push([["src_app_pages_robin_allowance_allowance-from-income_page_ts"],{3062:(J,h,r)=>{r.r(h),r.d(h,{default:()=>T});var a=r(7691),l=r(4006),p=r(4045),m=r(9333),d=r(7174),o=r(4650),u=r(2778),s=r(1203),i=r(3597),Z=r(7718),g=r(3416),C=r(5158);let y=(()=>{class e{constructor(){(0,a.Z)(this,"formGroupDirective",(0,o.f3M)(l.sg)),(0,a.Z)(this,"HouseholdCategory",s.XH),(0,a.Z)(this,"currencyMask",u.Pu),(0,a.Z)(this,"householdCategoryOptions",s.k0),(0,a.Z)(this,"medicalCategoryOptions",s.Z$),(0,a.Z)(this,"monthMask",u.Cy),(0,a.Z)(this,"t",(0,o.f3M)(Z.OS)),(0,a.Z)(this,"ctrls",void 0)}ngOnInit(){this.ctrls=this.formGroupDirective.form.controls}}return(0,a.Z)(e,"\u0275fac",function(t){return new(t||e)}),(0,a.Z)(e,"\u0275cmp",o.Xpm({type:e,selectors:[["app-allowance-from-income-form-inline"]],standalone:!0,features:[o._Bn([],[{provide:l.gN,useExisting:l.sg}]),o.jDz],decls:30,vars:40,consts:[["vwFormResetObserver","",1,"row","g-2"],[1,"col-lg-3","col-md-6","mb-5"],["labelClass","form-label",3,"label"],["appFormControlErrorsContainer","",1,"input-group"],["type","text",1,"form-control",3,"formControl","placeholder","inputMask","overriddenMessages"],[1,"input-group-text"],[1,"fa-regular","fa-calendar-check"],["vw-form-select-options","",1,"form-select",3,"formControl","placeholder","selectPlaceholder","options","selectedOption"],[1,"col-lg-3","col-md-6","mb-3"],["vw-form-select-options","",1,"form-select",3,"formControl","placeholder","options","selectedOption","change"],[1,"mt-2",3,"vwVisibleIf"],["labelClass","form-check-label",1,"form-check",3,"label"],["type","checkbox",1,"form-check-input",3,"formControl"],["vwResetValueIfEmpty","","type","text",1,"form-control",3,"formControl","inputMask","placeholder"],[1,"fa-solid","fa-euro-sign"]],template:function(t,n){1&t&&(o.TgZ(0,"div",0)(1,"div",1)(2,"vw-form-field",2),o.ALo(3,"translate"),o.TgZ(4,"div",3),o._UZ(5,"input",4),o.ALo(6,"translate"),o.TgZ(7,"span",5),o._UZ(8,"i",6),o.qZA()()()(),o.TgZ(9,"div",1)(10,"vw-form-field",2),o.ALo(11,"translate"),o._UZ(12,"select",7),o.ALo(13,"translate"),o.qZA()(),o.TgZ(14,"div",8)(15,"vw-form-field",2),o.ALo(16,"translate"),o.TgZ(17,"select",9),o.NdJ("change",function(){return n.ctrls.bothEntitled.reset()}),o.ALo(18,"translate"),o.qZA()(),o.TgZ(19,"div",10)(20,"vw-form-field",11),o.ALo(21,"translate"),o._UZ(22,"input",12),o.qZA()()(),o.TgZ(23,"div",1)(24,"vw-form-field",2),o.ALo(25,"translate"),o.TgZ(26,"div",3),o._UZ(27,"input",13),o.TgZ(28,"span",5),o._UZ(29,"i",14),o.qZA()()()()()),2&t&&(o.xp6(2),o.s9C("label",o.lcZ(3,24,n.t.ALLOWANCE.month)),o.xp6(3),o.s9C("placeholder",o.lcZ(6,26,n.t.FORM.MONTH_FORMAT)),o.Q6J("formControl",n.ctrls.month)("inputMask",n.monthMask.options)("overriddenMessages",n.monthMask.errorMessage),o.xp6(5),o.s9C("label",o.lcZ(11,28,n.t.ALLOWANCE.medicalCategory)),o.xp6(2),o.s9C("placeholder",o.lcZ(13,30,n.t.FORM.CHOOSE)),o.Q6J("formControl",n.ctrls.medicalCategory)("selectPlaceholder",!1)("options",n.medicalCategoryOptions)("selectedOption",n.ctrls.medicalCategory.value),o.xp6(3),o.s9C("label",o.lcZ(16,32,n.t.ALLOWANCE.householdCategory)),o.xp6(2),o.s9C("placeholder",o.lcZ(18,34,n.t.FORM.CHOOSE)),o.Q6J("formControl",n.ctrls.householdCategory)("options",n.householdCategoryOptions)("selectedOption",n.ctrls.householdCategory.value),o.xp6(2),o.Q6J("vwVisibleIf",n.ctrls.householdCategory.value===n.HouseholdCategory.Duo),o.xp6(1),o.s9C("label",o.lcZ(21,36,n.t.ALLOWANCE.bothEntitled)),o.xp6(2),o.Q6J("formControl",n.ctrls.bothEntitled),o.uIk("aria-checked",n.ctrls.bothEntitled.value),o.xp6(2),o.s9C("label",o.lcZ(25,38,n.t.ALLOWANCE.income)),o.xp6(3),o.s9C("placeholder",n.currencyMask.inputPlaceholder),o.Q6J("formControl",n.ctrls.income)("inputMask",n.currencyMask.options))},dependencies:[l.UX,l.Fj,l.Wl,l.EJ,l.JJ,l.oH,g.aw,g.X$,m.Zg,m.tS,m._c,i.hg,i.LW,i.vA,i.IQ,i.Og,C.zz,C.J6,u.t4,d.zm],encapsulation:2,changeDetection:0})),e})();var A=r(3823),F=r(5359);let w=(()=>{class e{constructor(){(0,a.Z)(this,"api",(0,o.f3M)(F._y))}getResult(t){return this.api.post(this.api.endpoints.allowanceFromIncome,t)}}return(0,a.Z)(e,"\u0275fac",function(t){return new(t||e)}),(0,a.Z)(e,"\u0275prov",o.Yz7({token:e,factory:e.\u0275fac})),e})();var I=r(4111),f=r(7244);const O=e=>({startDate:(0,f.Vn)(e.month),medicalCategory:(0,I.F)(e.medicalCategory),income:(0,f.W_)(e.income),householdCategory:e.householdCategory,...e.householdCategory===s.XH.Duo&&{duoThab:e.bothEntitled}}),b=e=>({form:{month:{data:e.month},medicalCategory:{data:e.medicalCategory},householdCategory:{data:e.householdCategory,pipe:"enum"},bothEntitled:{data:e.bothEntitled,class:e.householdCategory===s.XH.Mono?"d-none":"",pipe:"enum"},income:{data:(0,f.R3)(e.income,"\xa0\u20ac")}}}),M=({reduction:e,allowance:c})=>({reduction:{income:{data:e.income,pipe:"number"},exoneration:{data:e.exoneration,pipe:"number"},category:{data:e.category,pipe:"enum"},exonerated:{data:e.exonerated,pipe:"number"},correctionFactor:{data:e.correctionFactor},reduction:{data:e.reduction,pipe:"number"}},allowance:{category:{data:c.category,pipe:"enum"},maximum:{data:c.maximum,pipe:"number"},yearly:{data:c.yearly,pipe:"number"},majoration:{data:!!c.majoration},monthly:{data:c.monthly,pipe:"currency"}}});function E(e,c){if(1&e&&o._UZ(0,"app-reduction-response",2)(1,"app-allowance-response",3),2&e){const t=c.$implicit;o.Q6J("reduction",t.reduction),o.xp6(1),o.Q6J("reduction",t.reduction.reduction)("allowance",t.allowance)}}let L=(()=>{class e{constructor(){(0,a.Z)(this,"form",function v(){const e=(0,o.f3M)(l.qu);return e.group({month:e.nonNullable.control("",{validators:[l.kI.required,A.D0.min(s.pw)],updateOn:"blur"}),medicalCategory:e.control(null,l.kI.required),householdCategory:e.control(null,l.kI.required),bothEntitled:e.nonNullable.control(!1),income:e.nonNullable.control("",l.kI.required)})}()),(0,a.Z)(this,"AllowanceFromIncomeView",void 0)}}return(0,a.Z)(e,"\u0275fac",function(t){return new(t||e)}),(0,a.Z)(e,"\u0275cmp",o.Xpm({type:e,selectors:[["app-allowance-from-income-container"]],standalone:!0,features:[o._Bn([],[(0,m.Po)(w),(0,m.N3)(b),(0,m.sj)(O),(0,m.nx)(M)]),o.jDz],decls:3,vars:2,consts:[[3,"formGroup"],[3,"typeOf"],[3,"reduction"],[3,"reduction","allowance"]],template:function(t,n){1&t&&(o.TgZ(0,"app-base-form-container",0),o._UZ(1,"app-allowance-from-income-form-inline"),o.YNc(2,E,2,3,"ng-template",1),o.qZA()),2&t&&(o.Q6J("formGroup",n.form),o.xp6(2),o.Q6J("typeOf",n.AllowanceFromIncomeView))},dependencies:[l.UX,l.JL,l.sg,m.wM,y,p.b,p.E,d.Co],encapsulation:2,changeDetection:0})),e})(),T=(()=>{class e{}return(0,a.Z)(e,"\u0275fac",function(t){return new(t||e)}),(0,a.Z)(e,"\u0275cmp",o.Xpm({type:e,selectors:[["page-allowance-from-income"]],standalone:!0,features:[o.jDz],decls:1,vars:0,template:function(t,n){1&t&&o._UZ(0,"app-allowance-from-income-container")},dependencies:[L],encapsulation:2,changeDetection:0})),e})()}}]);