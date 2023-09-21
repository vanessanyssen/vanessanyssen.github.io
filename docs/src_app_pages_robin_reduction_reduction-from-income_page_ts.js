"use strict";(self.webpackChunkrobin=self.webpackChunkrobin||[]).push([["src_app_pages_robin_reduction_reduction-from-income_page_ts"],{5466:(U,g,i)=>{i.r(g),i.d(g,{default:()=>N});var r=i(7691),u=i(7244);const F=e=>({startDate:(0,u.Vn)(e.month),income:(0,u.W_)(e.income),householdCategory:e.householdCategory,..."DUO"===e.householdCategory&&{duoThab:e.bothEntitled}}),v=e=>({form:{month:{data:e.month},householdCategory:{data:e.householdCategory,pipe:"t9nEnum"},bothEntitled:{data:e.bothEntitled,class:"MONO"===e.householdCategory?"d-none":"",pipe:"t9nEnum"},income:{data:(0,u.R3)(e.income,"\xa0\u20ac")}}}),I=({reduction:e,allowance:c})=>({reduction:{income:{data:e.income,pipe:"beNumber"},exoneration:{data:e.exoneration,pipe:"beNumber"},category:{data:e.category,pipe:"t9nEnum"},exonerated:{data:e.exonerated,pipe:"beNumber"},correctionFactor:{data:e.correctionFactor},reduction:{data:e.reduction,pipe:"beNumber"}},allowance:c.map(t=>({category:{data:t.category,pipe:"t9nEnum"},maximum:{data:t.maximum,pipe:"beNumber"},yearly:{data:t.yearly,pipe:"beNumber"},majoration:{data:!!t.majoration},monthly:{data:t.monthly,pipe:"beNumber"}}))});var C=i(6895),o=i(4650),a=i(4006),d=i(4045),l=i(6076),m=i(1117),s=i(9377),f=i(2778),h=i(9492),p=i(5079),Z=i(5158);let y=(()=>{class e{constructor(){(0,r.Z)(this,"formGroupDirective",(0,o.f3M)(a.sg)),(0,r.Z)(this,"currencyMask",f.Pu),(0,r.Z)(this,"HouseholdCategory",h.XH),(0,r.Z)(this,"householdCategoryOptions",(0,u.s0)(h.XH)),(0,r.Z)(this,"monthMask",f.Cy),(0,r.Z)(this,"t",(0,o.f3M)(s.OS)),(0,r.Z)(this,"ctrls",void 0)}ngOnInit(){this.ctrls=this.formGroupDirective.form.controls}}return(0,r.Z)(e,"\u0275fac",function(t){return new(t||e)}),(0,r.Z)(e,"\u0275cmp",o.Xpm({type:e,selectors:[["app-reduction-from-income-form-inline"]],standalone:!0,features:[o._Bn([],[{provide:a.gN,useExisting:a.sg}]),o.jDz],decls:26,vars:34,consts:[["vwFormResetObserver","",1,"row","g-2"],[1,"col-lg-3","col-md-6","mb-5"],["labelClass","form-label",3,"label"],["appFormControlErrorsContainer","",1,"input-group"],["type","text",1,"form-control",3,"formControl","inputMask","placeholder","overriddenMessages"],[1,"input-group-text"],[1,"fa-regular","fa-calendar-check"],[1,"col-lg-3","col-md-6","mb-3"],[1,"form-select",3,"formControl","placeholder","options","texts","selectedOption","change"],[1,"mt-2",3,"vwVisibleIf"],["labelClass","form-check-label",1,"form-check",3,"label"],["type","checkbox",1,"form-check-input",3,"formControl"],["vwResetValueIfEmpty","","type","text",1,"form-control",3,"formControl","inputMask","placeholder"],[1,"fa-solid","fa-euro-sign"]],template:function(t,n){1&t&&(o.TgZ(0,"div",0)(1,"div",1)(2,"vw-form-field",2),o.ALo(3,"t9n"),o.TgZ(4,"div",3),o._UZ(5,"input",4),o.ALo(6,"t9n"),o.TgZ(7,"span",5),o._UZ(8,"i",6),o.qZA()()()(),o.TgZ(9,"div",7)(10,"vw-form-field",2),o.ALo(11,"t9n"),o.TgZ(12,"select",8),o.NdJ("change",function(){return n.ctrls.bothEntitled.reset()}),o.ALo(13,"t9n"),o.ALo(14,"map"),o.qZA()(),o.TgZ(15,"div",9)(16,"vw-form-field",10),o.ALo(17,"t9n"),o._UZ(18,"input",11),o.qZA()()(),o.TgZ(19,"div",1)(20,"vw-form-field",2),o.ALo(21,"t9n"),o.TgZ(22,"div",3),o._UZ(23,"input",12),o.TgZ(24,"span",5),o._UZ(25,"i",13),o.qZA()()()()()),2&t&&(o.xp6(2),o.s9C("label",o.lcZ(3,19,n.t.REDUCTION.month)),o.xp6(3),o.s9C("placeholder",o.lcZ(6,21,n.t.FORM.MONTH_FORMAT)),o.Q6J("formControl",n.ctrls.month)("inputMask",n.monthMask.options)("overriddenMessages",n.monthMask.errorMessage),o.xp6(5),o.s9C("label",o.lcZ(11,23,n.t.REDUCTION.householdCategory)),o.xp6(2),o.s9C("placeholder",o.lcZ(13,25,n.t.FORM.CHOOSE)),o.Q6J("formControl",n.ctrls.householdCategory)("options",n.householdCategoryOptions)("texts",o.xi3(14,27,n.householdCategoryOptions,"t9nEnum"))("selectedOption",n.ctrls.householdCategory.value),o.xp6(3),o.Q6J("vwVisibleIf",n.ctrls.householdCategory.value===n.HouseholdCategory.Duo),o.xp6(1),o.s9C("label",o.lcZ(17,30,n.t.REDUCTION.bothEntitled)),o.xp6(2),o.Q6J("formControl",n.ctrls.bothEntitled),o.uIk("aria-checked",n.ctrls.bothEntitled.value),o.xp6(2),o.s9C("label",o.lcZ(21,32,n.t.REDUCTION.income)),o.xp6(3),o.s9C("placeholder",n.currencyMask.inputPlaceholder),o.Q6J("formControl",n.ctrls.income)("inputMask",n.currencyMask.options))},dependencies:[a.UX,a.Fj,a.Wl,a.EJ,a.JJ,a.oH,l.Zg,l.tS,p.hg,p.LW,p.vA,p.go,p.IQ,Z.zz,Z.J6,f.t4,m.zm,l._c,s.Oj,m.bP],encapsulation:2,changeDetection:0})),e})();var b=i(3823),R=i(2860);let E=(()=>{class e{constructor(){(0,r.Z)(this,"api",(0,o.f3M)(R._y))}getResult(t){return this.api.post(this.api.endpoints.reductionFromIncome,t)}}return(0,r.Z)(e,"\u0275fac",function(t){return new(t||e)}),(0,r.Z)(e,"\u0275prov",o.Yz7({token:e,factory:e.\u0275fac})),e})();function T(e,c){if(1&e&&(o.ynx(0),o._UZ(1,"app-allowance-response",6),o.BQk()),2&e){const t=c.$implicit,n=o.oxw().$implicit;o.xp6(1),o.Q6J("reduction",n.reduction.reduction)("allowance",t)("isSerie",!0)}}function M(e,c){if(1&e&&(o._UZ(0,"app-reduction-response",2),o.TgZ(1,"h6",3),o._uU(2),o.ALo(3,"t9n"),o.qZA(),o.TgZ(4,"div",4),o.YNc(5,T,2,3,"ng-container",5),o.qZA()),2&e){const t=c.$implicit,n=o.oxw();o.Q6J("reduction",t.reduction)("isResult",!0),o.xp6(2),o.Oqu(o.lcZ(3,4,n.t.ALLOWANCE.ALLOWANCE)),o.xp6(3),o.Q6J("ngForOf",t.allowance)}}let A=(()=>{class e{constructor(){(0,r.Z)(this,"form",function O(){const e=(0,o.f3M)(a.qu);return e.group({month:e.nonNullable.control("",{validators:[a.kI.required,b.D0.min(h.pw)],updateOn:"blur"}),householdCategory:e.control(null,a.kI.required),bothEntitled:e.nonNullable.control(!1),income:e.nonNullable.control("",a.kI.required)})}()),(0,r.Z)(this,"t",(0,o.f3M)(s.OS)),(0,r.Z)(this,"ReductionFromIncomeView",void 0)}}return(0,r.Z)(e,"\u0275fac",function(t){return new(t||e)}),(0,r.Z)(e,"\u0275cmp",o.Xpm({type:e,selectors:[["app-reduction-from-income-container"]],standalone:!0,features:[o._Bn([],[(0,l.Po)(E),(0,l.N3)(v),(0,l.sj)(F),(0,l.nx)(I)]),o.jDz],decls:3,vars:2,consts:[[3,"formGroup"],[3,"typeOf"],[3,"reduction","isResult"],[1,"card-subtitle","mb-3"],[1,"d-flex","flex-wrap","mb-3"],[4,"ngFor","ngForOf"],[3,"reduction","allowance","isSerie"]],template:function(t,n){1&t&&(o.TgZ(0,"app-base-form-container",0),o._UZ(1,"app-reduction-from-income-form-inline"),o.YNc(2,M,6,6,"ng-template",1),o.qZA()),2&t&&(o.Q6J("formGroup",n.form),o.xp6(2),o.Q6J("typeOf",n.ReductionFromIncomeView))},dependencies:[a.UX,a.JL,a.sg,s.Oj,l.wM,y,d.b,d.E,C.ax,m.Co],encapsulation:2,changeDetection:0})),e})(),N=(()=>{class e{}return(0,r.Z)(e,"\u0275fac",function(t){return new(t||e)}),(0,r.Z)(e,"\u0275cmp",o.Xpm({type:e,selectors:[["page-reduction-from-income"]],standalone:!0,features:[o.jDz],decls:1,vars:0,template:function(t,n){1&t&&o._UZ(0,"app-reduction-from-income-container")},dependencies:[A],encapsulation:2,changeDetection:0})),e})()}}]);