"use strict";(self.webpackChunkrobin=self.webpackChunkrobin||[]).push([["src_app_pages_robin_reduction_reduction-from-amount_page_ts"],{1558:(L,y,a)=>{a.r(y),a.d(y,{default:()=>E});var n=a(7691),v=a(4111),f=a(7244);const h=t=>({startDate:(0,f.Vn)(t.month),medicalCategory:(0,v.F)(t.medicalCategory),yearlyAmount:(0,f.W_)(t.yearlyAmount)}),F=t=>({form:{month:{data:t.month},medicalCategory:{data:t.medicalCategory},yearlyAmount:{data:(0,f.R3)(t.yearlyAmount,"\xa0\u20ac")}}}),R=({reduction:t,allowance:r})=>({reduction:{reduction:{data:t.reduction,pipe:"currency"}},allowance:{category:{data:r.category,pipe:"enum"},maximum:{data:r.maximum,pipe:"number"},yearly:{data:r.yearly,pipe:"number"}}});var m=a(4006),i=a(9333),c=a(7174),o=a(4650),p=a(2778),Z=a(1203),u=a(3597),g=a(7718),d=a(3416),A=a(5158);let C=(()=>{class t{constructor(){(0,n.Z)(this,"formGroupDirective",(0,o.f3M)(m.sg)),(0,n.Z)(this,"currencyMask",p.Pu),(0,n.Z)(this,"medicalCategoryOptions",Z.Z$),(0,n.Z)(this,"monthMask",p.Cy),(0,n.Z)(this,"t",(0,o.f3M)(g.OS)),(0,n.Z)(this,"ctrls",void 0)}ngOnInit(){this.ctrls=this.formGroupDirective.form.controls}}return(0,n.Z)(t,"\u0275fac",function(e){return new(e||t)}),(0,n.Z)(t,"\u0275cmp",o.Xpm({type:t,selectors:[["app-reduction-from-amount-form-inline"]],standalone:!0,features:[o._Bn([],[{provide:m.gN,useExisting:m.sg}]),o.jDz],decls:21,vars:24,consts:[["vwFormResetObserver","",1,"row","g-2"],[1,"col-lg-3","col-md-6","mb-5"],["labelClass","form-label",3,"label"],["appFormControlErrorsContainer","",1,"input-group"],["type","text",1,"form-control",3,"formControl","inputMask","placeholder","overriddenMessages"],[1,"input-group-text"],[1,"fa-regular","fa-calendar-check"],["vw-form-select-options","",1,"form-select",3,"formControl","placeholder","options","selectedOption"],["vwResetValueIfEmpty","","type","text",1,"form-control",3,"formControl","inputMask","placeholder"],[1,"fa-solid","fa-euro-sign"]],template:function(e,s){1&e&&(o.TgZ(0,"div",0)(1,"div",1)(2,"vw-form-field",2),o.ALo(3,"translate"),o.TgZ(4,"div",3),o._UZ(5,"input",4),o.ALo(6,"translate"),o.TgZ(7,"span",5),o._UZ(8,"i",6),o.qZA()()()(),o.TgZ(9,"div",1)(10,"vw-form-field",2),o.ALo(11,"translate"),o._UZ(12,"select",7),o.ALo(13,"translate"),o.qZA()(),o.TgZ(14,"div",1)(15,"vw-form-field",2),o.ALo(16,"translate"),o.TgZ(17,"div",3),o._UZ(18,"input",8),o.TgZ(19,"span",5),o._UZ(20,"i",9),o.qZA()()()()()),2&e&&(o.xp6(2),o.s9C("label",o.lcZ(3,14,s.t.REDUCTION.month)),o.xp6(3),o.s9C("placeholder",o.lcZ(6,16,s.t.FORM.MONTH_FORMAT)),o.Q6J("formControl",s.ctrls.month)("inputMask",s.monthMask.options)("overriddenMessages",s.monthMask.errorMessage),o.xp6(5),o.s9C("label",o.lcZ(11,18,s.t.REDUCTION.medicalCategory)),o.xp6(2),o.s9C("placeholder",o.lcZ(13,20,s.t.FORM.CHOOSE)),o.Q6J("formControl",s.ctrls.medicalCategory)("options",s.medicalCategoryOptions)("selectedOption",s.ctrls.medicalCategory.value),o.xp6(3),o.s9C("label",o.lcZ(16,22,s.t.REDUCTION.yearlyAmount)),o.xp6(3),o.s9C("placeholder",s.currencyMask.inputPlaceholder),o.Q6J("formControl",s.ctrls.yearlyAmount)("inputMask",s.currencyMask.options))},dependencies:[m.UX,m.Fj,m.EJ,m.JJ,m.oH,d.aw,d.X$,i.Zg,i.tS,i._c,u.hg,u.LW,u.vA,u.IQ,u.Og,A.zz,A.J6,p.t4],encapsulation:2,changeDetection:0})),t})();var T=a(3823),U=a(7582);a(6895);class l{constructor(){(0,n.Z)(this,"t",(0,o.f3M)(g.OS)),(0,n.Z)(this,"result",void 0)}}(0,n.Z)(l,"\u0275fac",function(r){return new(r||l)}),(0,n.Z)(l,"\u0275cmp",o.Xpm({type:l,selectors:[["app-reduction-from-amount-response"]],inputs:{result:"result"},standalone:!0,features:[o.jDz],decls:32,vars:35,consts:[[1,"mb-3"],[1,"card-subtitle","mb-3"],[1,"table-responsive"],[1,"table","table-sm","table-borderless","w-auto","align-self-start","border","rounded","mb-3"],["scope","row","colspan","2",1,"pe-4"],[1,"text-end","px-4"],["scope","row"],[1,"text-end","ps-4"],[1,"text-end","px-4","border-bottom"],[1,"result"]],template:function(r,e){1&r&&(o.TgZ(0,"div",0)(1,"h6",1),o._uU(2),o.ALo(3,"translate"),o.qZA(),o.TgZ(4,"div",2)(5,"table",3)(6,"tbody")(7,"tr")(8,"th",4),o._uU(9),o.ALo(10,"translate"),o.ALo(11,"translate"),o.ALo(12,"dynamicPipe"),o.qZA(),o.TgZ(13,"td",5),o._uU(14),o.ALo(15,"dynamicPipe"),o.qZA()(),o.TgZ(16,"tr")(17,"th",6),o._uU(18),o.ALo(19,"translate"),o.qZA(),o.TgZ(20,"td",7),o._uU(21,"-"),o.qZA(),o.TgZ(22,"td",8),o._uU(23),o.ALo(24,"dynamicPipe"),o.qZA()(),o.TgZ(25,"tr",9)(26,"th",4),o._uU(27),o.ALo(28,"translate"),o.qZA(),o.TgZ(29,"td",5),o._uU(30),o.ALo(31,"dynamicPipe"),o.qZA()()()()()()),2&r&&(o.xp6(2),o.Oqu(o.lcZ(3,9,e.t.REDUCTION.REDUCTION)),o.xp6(7),o.lnq("",o.lcZ(10,11,e.t.REDUCTION.MAXIMUM)," (",o.lcZ(11,13,e.t.REDUCTION.CATEGORY)," ",o.Dn7(12,15,e.result.allowance.category.data,e.result.allowance.category.pipe,e.result.allowance.category.args),")"),o.xp6(5),o.hij(" ",o.Dn7(15,19,e.result.allowance.maximum.data,e.result.allowance.maximum.pipe,e.result.allowance.maximum.args),""),o.xp6(4),o.Oqu(o.lcZ(19,23,e.t.REDUCTION.yearlyAmount)),o.xp6(5),o.hij(" ",o.Dn7(24,25,e.result.allowance.yearly.data,e.result.allowance.yearly.pipe,e.result.allowance.yearly.args),""),o.xp6(4),o.Oqu(o.lcZ(28,29,e.t.REDUCTION.REDUCTION)),o.xp6(3),o.hij(" ",o.Dn7(31,31,e.result.reduction.reduction.data,e.result.reduction.reduction.pipe,e.result.reduction.reduction.args),""))},dependencies:[d.aw,d.X$,c.e8],encapsulation:2,changeDetection:0})),(0,U.gn)([c.aH],l.prototype,"result",void 0);var M=a(5359);let I=(()=>{class t{constructor(){(0,n.Z)(this,"api",(0,o.f3M)(M._y))}getResult(e){return this.api.post(this.api.endpoints.reductionFromAmount,e)}}return(0,n.Z)(t,"\u0275fac",function(e){return new(e||t)}),(0,n.Z)(t,"\u0275prov",o.Yz7({token:t,factory:t.\u0275fac})),t})();function b(t,r){1&t&&o._UZ(0,"app-reduction-from-amount-response",2),2&t&&o.Q6J("result",r.$implicit)}let w=(()=>{class t{constructor(){(0,n.Z)(this,"form",function O(){const t=(0,o.f3M)(m.qu);return t.group({month:t.nonNullable.control("",{validators:[m.kI.required,T.D0.min(Z.pw)],updateOn:"blur"}),medicalCategory:t.control(null,m.kI.required),yearlyAmount:t.nonNullable.control("",m.kI.required)})}()),(0,n.Z)(this,"ReductionFromAmountView",void 0)}}return(0,n.Z)(t,"\u0275fac",function(e){return new(e||t)}),(0,n.Z)(t,"\u0275cmp",o.Xpm({type:t,selectors:[["app-reduction-from-amount-container"]],standalone:!0,features:[o._Bn([],[(0,i.Po)(I),(0,i.N3)(F),(0,i.sj)(h),(0,i.nx)(R)]),o.jDz],decls:3,vars:2,consts:[[3,"formGroup"],[3,"typeOf"],[3,"result"]],template:function(e,s){1&e&&(o.TgZ(0,"app-base-form-container",0),o._UZ(1,"app-reduction-from-amount-form-inline"),o.YNc(2,b,1,1,"ng-template",1),o.qZA()),2&e&&(o.Q6J("formGroup",s.form),o.xp6(2),o.Q6J("typeOf",s.ReductionFromAmountView))},dependencies:[m.UX,m.JL,m.sg,i.wM,C,l,c.Co],encapsulation:2,changeDetection:0})),t})(),E=(()=>{class t{}return(0,n.Z)(t,"\u0275fac",function(e){return new(e||t)}),(0,n.Z)(t,"\u0275cmp",o.Xpm({type:t,selectors:[["page-reduction-from-amount"]],standalone:!0,features:[o.jDz],decls:1,vars:0,template:function(e,s){1&e&&o._UZ(0,"app-reduction-from-amount-container")},dependencies:[w],encapsulation:2,changeDetection:0})),t})()}}]);