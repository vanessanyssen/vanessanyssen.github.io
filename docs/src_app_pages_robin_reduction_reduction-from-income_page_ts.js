"use strict";(self.webpackChunkrobin=self.webpackChunkrobin||[]).push([["src_app_pages_robin_reduction_reduction-from-income_page_ts"],{5466:(w,C,a)=>{a.r(C),a.d(C,{default:()=>D});var r=a(7691),f=a(7244);const F=e=>({startDate:(0,f.Vn)(e.month),income:(0,f.W_)(e.income),householdCategory:e.householdCategory,..."DUO"===e.householdCategory&&{duoThab:e.bothEntitled}}),I=e=>({form:{month:{data:e.month},householdCategory:{data:e.householdCategory,pipe:"enum"},bothEntitled:{data:e.bothEntitled,class:"MONO"===e.householdCategory?"d-none":"",pipe:"enum"},income:{data:(0,f.R3)(e.income,"\xa0\u20ac")}}}),R=({reduction:e,allowance:c})=>({reduction:{income:{data:e.income,pipe:"number"},exoneration:{data:e.exoneration,pipe:"number"},category:{data:e.category,pipe:"enum"},exonerated:{data:e.exonerated,pipe:"number"},correctionFactor:{data:e.correctionFactor},reduction:{data:e.reduction,pipe:"currency"}},allowance:c.map(n=>({category:{data:n.category,pipe:"enum"},maximum:{data:n.maximum,pipe:"number"},yearly:{data:n.yearly,pipe:"number"},majoration:{data:!!n.majoration},monthly:{data:n.monthly,pipe:"number"}}))});var Z=a(6895),o=a(4650),i=a(4006),s=a(4045),l=a(9333),p=a(7174),h=a(7718),d=a(2778),g=a(1203),m=a(3597),u=a(3416),y=a(5158);let v=(()=>{class e{constructor(){(0,r.Z)(this,"formGroupDirective",(0,o.f3M)(i.sg)),(0,r.Z)(this,"currencyMask",d.Pu),(0,r.Z)(this,"HouseholdCategory",g.XH),(0,r.Z)(this,"householdCategoryOptions",g.k0),(0,r.Z)(this,"monthMask",d.Cy),(0,r.Z)(this,"t",(0,o.f3M)(h.OS)),(0,r.Z)(this,"ctrls",void 0)}ngOnInit(){this.ctrls=this.formGroupDirective.form.controls}}return(0,r.Z)(e,"\u0275fac",function(n){return new(n||e)}),(0,r.Z)(e,"\u0275cmp",o.Xpm({type:e,selectors:[["app-reduction-from-income-form-inline"]],standalone:!0,features:[o._Bn([],[{provide:i.gN,useExisting:i.sg}]),o.jDz],decls:25,vars:30,consts:[["vwFormResetObserver","",1,"row","g-2"],[1,"col-lg-3","col-md-6","mb-5"],["labelClass","form-label",3,"label"],["appFormControlErrorsContainer","",1,"input-group"],["type","text",1,"form-control",3,"formControl","inputMask","placeholder","overriddenMessages"],[1,"input-group-text"],[1,"fa-regular","fa-calendar-check"],[1,"col-lg-3","col-md-6","mb-3"],["vw-form-select-options","",1,"form-select",3,"formControl","placeholder","options","selectedOption","change"],[1,"mt-2",3,"vwVisibleIf"],["labelClass","form-check-label",1,"form-check",3,"label"],["type","checkbox",1,"form-check-input",3,"formControl"],["vwResetValueIfEmpty","","type","text",1,"form-control",3,"formControl","inputMask","placeholder"],[1,"fa-solid","fa-euro-sign"]],template:function(n,t){1&n&&(o.TgZ(0,"div",0)(1,"div",1)(2,"vw-form-field",2),o.ALo(3,"translate"),o.TgZ(4,"div",3),o._UZ(5,"input",4),o.ALo(6,"translate"),o.TgZ(7,"span",5),o._UZ(8,"i",6),o.qZA()()()(),o.TgZ(9,"div",7)(10,"vw-form-field",2),o.ALo(11,"translate"),o.TgZ(12,"select",8),o.NdJ("change",function(){return t.ctrls.bothEntitled.reset()}),o.ALo(13,"translate"),o.qZA()(),o.TgZ(14,"div",9)(15,"vw-form-field",10),o.ALo(16,"translate"),o._UZ(17,"input",11),o.qZA()()(),o.TgZ(18,"div",1)(19,"vw-form-field",2),o.ALo(20,"translate"),o.TgZ(21,"div",3),o._UZ(22,"input",12),o.TgZ(23,"span",5),o._UZ(24,"i",13),o.qZA()()()()()),2&n&&(o.xp6(2),o.s9C("label",o.lcZ(3,18,t.t.REDUCTION.month)),o.xp6(3),o.s9C("placeholder",o.lcZ(6,20,t.t.FORM.MONTH_FORMAT)),o.Q6J("formControl",t.ctrls.month)("inputMask",t.monthMask.options)("overriddenMessages",t.monthMask.errorMessage),o.xp6(5),o.s9C("label",o.lcZ(11,22,t.t.REDUCTION.householdCategory)),o.xp6(2),o.s9C("placeholder",o.lcZ(13,24,t.t.FORM.CHOOSE)),o.Q6J("formControl",t.ctrls.householdCategory)("options",t.householdCategoryOptions)("selectedOption",t.ctrls.householdCategory.value),o.xp6(2),o.Q6J("vwVisibleIf",t.ctrls.householdCategory.value===t.HouseholdCategory.Duo),o.xp6(1),o.s9C("label",o.lcZ(16,26,t.t.REDUCTION.bothEntitled)),o.xp6(2),o.Q6J("formControl",t.ctrls.bothEntitled),o.uIk("aria-checked",t.ctrls.bothEntitled.value),o.xp6(2),o.s9C("label",o.lcZ(20,28,t.t.REDUCTION.income)),o.xp6(3),o.s9C("placeholder",t.currencyMask.inputPlaceholder),o.Q6J("formControl",t.ctrls.income)("inputMask",t.currencyMask.options))},dependencies:[i.UX,i.Fj,i.Wl,i.EJ,i.JJ,i.oH,u.aw,u.X$,l.Zg,l.tS,l._c,m.hg,m.LW,m.vA,m.IQ,m.Og,y.zz,y.J6,d.t4,p.zm],encapsulation:2,changeDetection:0})),e})();var b=a(3823),M=a(5359);let T=(()=>{class e{constructor(){(0,r.Z)(this,"api",(0,o.f3M)(M._y))}getResult(n){return this.api.post(this.api.endpoints.reductionFromIncome,n)}}return(0,r.Z)(e,"\u0275fac",function(n){return new(n||e)}),(0,r.Z)(e,"\u0275prov",o.Yz7({token:e,factory:e.\u0275fac})),e})();function A(e,c){if(1&e&&(o.ynx(0),o._UZ(1,"app-allowance-response",6),o.BQk()),2&e){const n=c.$implicit,t=o.oxw().$implicit;o.xp6(1),o.Q6J("reduction",t.reduction.reduction)("allowance",n)("isSerie",!0)}}function E(e,c){if(1&e&&(o._UZ(0,"app-reduction-response",2),o.TgZ(1,"h6",3),o._uU(2),o.ALo(3,"translate"),o.qZA(),o.TgZ(4,"div",4),o.YNc(5,A,2,3,"ng-container",5),o.qZA()),2&e){const n=c.$implicit,t=o.oxw();o.Q6J("reduction",n.reduction)("isResult",!0),o.xp6(2),o.Oqu(o.lcZ(3,4,t.t.ALLOWANCE.ALLOWANCE)),o.xp6(3),o.Q6J("ngForOf",n.allowance)}}let U=(()=>{class e{constructor(){(0,r.Z)(this,"form",function O(){const e=(0,o.f3M)(i.qu);return e.group({month:e.nonNullable.control("",{validators:[i.kI.required,b.D0.min(g.pw)],updateOn:"blur"}),householdCategory:e.control(null,i.kI.required),bothEntitled:e.nonNullable.control(!1),income:e.nonNullable.control("",i.kI.required)})}()),(0,r.Z)(this,"t",(0,o.f3M)(h.OS)),(0,r.Z)(this,"ReductionFromIncomeView",void 0)}}return(0,r.Z)(e,"\u0275fac",function(n){return new(n||e)}),(0,r.Z)(e,"\u0275cmp",o.Xpm({type:e,selectors:[["app-reduction-from-income-container"]],standalone:!0,features:[o._Bn([],[(0,l.Po)(T),(0,l.N3)(I),(0,l.sj)(F),(0,l.nx)(R)]),o.jDz],decls:3,vars:2,consts:[[3,"formGroup"],[3,"typeOf"],[3,"reduction","isResult"],[1,"card-subtitle","mb-3"],[1,"d-flex","flex-wrap","mb-3"],[4,"ngFor","ngForOf"],[3,"reduction","allowance","isSerie"]],template:function(n,t){1&n&&(o.TgZ(0,"app-base-form-container",0),o._UZ(1,"app-reduction-from-income-form-inline"),o.YNc(2,E,6,6,"ng-template",1),o.qZA()),2&n&&(o.Q6J("formGroup",t.form),o.xp6(2),o.Q6J("typeOf",t.ReductionFromIncomeView))},dependencies:[i.UX,i.JL,i.sg,u.aw,u.X$,l.wM,v,s.b,s.E,Z.ax,p.Co],encapsulation:2,changeDetection:0})),e})(),D=(()=>{class e{}return(0,r.Z)(e,"\u0275fac",function(n){return new(n||e)}),(0,r.Z)(e,"\u0275cmp",o.Xpm({type:e,selectors:[["page-reduction-from-income"]],standalone:!0,features:[o.jDz],decls:1,vars:0,template:function(n,t){1&n&&o._UZ(0,"app-reduction-from-income-container")},dependencies:[U],encapsulation:2,changeDetection:0})),e})()}}]);