"use strict";(self.webpackChunkrobin=self.webpackChunkrobin||[]).push([["default-src_app_features_transactions_index_ts"],{479:(Ce,E,d)=>{d.d(E,{mf:()=>_e,NX:()=>ye});var r=d(7691),e=d(4650),p=d(7244),i=d(4006),l=d(1203),A=d(3823),x=d(9928),v=d(7698);const N=n=>n.householdCategory.value===l.XH.Duo,B=n=>{const o=n.controls;return o.fractionOne.invalid||o.fractionTwo.invalid};let D=(()=>{class n{constructor(){(0,r.Z)(this,"injector",(0,e.f3M)(e.lqb)),(0,r.Z)(this,"ctrls",void 0),(0,r.Z)(this,"formArray",void 0),(0,r.Z)(this,"form",function V(){const n=(0,e.f3M)(i.qu);return n.group({startMonth:n.nonNullable.control("",{validators:[i.kI.required,A.D0.min(l.pw),A.D0.max((0,p.nD)())],updateOn:"blur"}),householdCategory:n.control(null,i.kI.required),beneficiaryInss:n.nonNullable.control("",{validators:[i.kI.required,v.Q.inss],updateOn:"blur"}),beneficiaryGender:n.nonNullable.control(l.Y0.Female,i.kI.required),partnerInss:n.nonNullable.control("",{updateOn:"blur"}),partnerGender:n.nonNullable.control(l.Y0.Male,i.kI.required),items:n.nonNullable.array([])})}()),(0,r.Z)(this,"newItemFactory",()=>this.injector.runInContext(()=>function P(n){const o=(0,e.f3M)(i.qu);return o.group({transferDate:o.nonNullable.control("",{validators:i.kI.required,updateOn:"blur"}),transferValue:o.nonNullable.control("",i.kI.required),fractionOne:o.nonNullable.control("",{validators:[i.kI.required,v.Q.properFraction],updateOn:"blur"}),ownershipOne:o.control(null,i.kI.required),ownerOne:o.control(null,i.kI.required),fractionTwo:o.nonNullable.control("",{validators:v.Q.properFraction,updateOn:"blur"}),ownershipTwo:o.control(null),ownerTwo:o.control(null),reduction:o.nonNullable.control({value:"",disabled:!n})},{validators:[x.h.exclusiveValue(["ownerOne","ownerTwo"],l.Ff.Common),x.h.invalidPairValues(["ownershipOne","ownershipTwo"],[l.nE.Usufruct,l.nE.BareOwnership]),x.h.distinctPairValues([["ownerOne","ownershipOne"],["ownerTwo","ownershipTwo"]]),x.h.conditionalFractionsSumMax(["fractionOne","fractionTwo"],1,B),x.h.allFilledOrNone(["fractionTwo","ownershipTwo","ownerTwo"])]})}(this.isSales))),(0,r.Z)(this,"dynMaxDate",(0,p.Lg)()),(0,r.Z)(this,"filterOwnerOption",null),(0,r.Z)(this,"ResponseView",void 0)}ngOnInit(){this.ctrls=this.form.controls,this.formArray=this.ctrls.items,this.formArray.push(this.newItemFactory()),(n=>{n.beneficiaryInss.addValidators(A.jg.validateIf(()=>N(n),A.jg.notMatchControl(n.partnerInss)))})(this.ctrls),(n=>{n.partnerInss.addValidators(A.jg.validateIf(()=>N(n),[i.kI.required,v.Q.inss,A.jg.notMatchControl(n.beneficiaryInss)]))})(this.ctrls)}resetForm(){this.dynMaxDate=(0,p.Lg)(),this.filterOwnerOption=null,this.formArray.clear(),this.formArray.push(this.newItemFactory())}}return(0,r.Z)(n,"\u0275fac",function(t){return new(t||n)}),(0,r.Z)(n,"\u0275cmp",e.Xpm({type:n,selectors:[["ng-component"]],decls:0,vars:0,template:function(t,a){},encapsulation:2,changeDetection:0})),n})();const S=n=>({startDate:(0,p.Vn)(n.startMonth),householdCategory:n.householdCategory,beneficiary:{inss:(0,p.bI)(n.beneficiaryInss),gender:n.beneficiaryGender},...n.partnerInss&&{partner:{inss:(0,p.bI)(n.partnerInss),gender:n.partnerGender}},transfers:n.items.map(o=>({transferDate:(0,p.Vn)(o.transferDate),transferValue:Math.round(100*(0,p.W_)(o.transferValue)),ownership:o.ownerTwo&&o.ownerTwo!==o.ownerOne?"F+M":`${o.ownerOne}`,...X(o),...j(o),...$(o),...o.reduction&&{reimboursmt:Math.round(100*(0,p.W_)(o.reduction))}}))}),b=(n,o)=>n.ownershipOne===o&&n?.ownershipTwo!==o,I=(n,o)=>n.ownershipOne!==o&&n?.ownershipTwo===o,F=(n,o)=>n.ownershipOne===o&&n?.ownershipTwo===o,R=n=>`${Number(n.fractionOne.split("/")[0])*Number(n.fractionTwo?.split("/")[1])+Number(n.fractionTwo?.split("/")[0])*Number(n.fractionOne.split("/")[1])}/${Number(n.fractionOne.split("/")[1])*Number(n.fractionTwo?.split("/")[1])} `,X=n=>F(n,l.nE.Freehold)?{freehold:R(n)}:b(n,l.nE.Freehold)?{freehold:n.fractionOne}:I(n,l.nE.Freehold)&&{freehold:n.fractionTwo},j=n=>F(n,l.nE.Usufruct)?{usufruct:R(n)}:b(n,l.nE.Usufruct)?{usufruct:n.fractionOne}:I(n,l.nE.Usufruct)&&{usufruct:n.fractionTwo},$=n=>F(n,l.nE.BareOwnership)?{bareOwnership:R(n)}:b(n,l.nE.BareOwnership)?{bareOwnership:n.fractionOne}:I(n,l.nE.BareOwnership)&&{bareOwnership:n.fractionTwo},q=n=>({form:{startMonth:{data:n.startMonth},householdCategory:{data:n.householdCategory,pipe:"enum"},beneficiaryInss:{data:n.beneficiaryInss},beneficiaryGender:{data:n.beneficiaryGender},partnerInss:{data:n.partnerInss,class:n.partnerInss?"text-end pe-4":"d-none"},partnerGender:{data:n.partnerGender,class:n.partnerInss?"text-end pe-4":"d-none"}},array:n.items.map(o=>({transferDate:{data:o.transferDate},transferValue:{data:(0,p.R3)(o.transferValue,"\xa0\u20ac")},fractionOne:{data:o.fractionOne,class:"text-end pe-0"},ownershipOne:{data:o.ownershipOne,pipe:"enum",class:"text-end pe-0"},ownerOne:{data:o.ownerOne,class:"text-end pe-0"},fractionTwo:{data:o.fractionTwo,class:"text-end pe-0"},ownershipTwo:{data:o.ownershipTwo,pipe:"enum",class:"text-end pe-0"},ownerTwo:{data:o.ownerTwo},reduction:{data:(0,p.R3)(o.reduction,"\xa0\u20ac"),class:o.reduction?"text-end pe-4":"d-none"}}))}),k=n=>({accountedAmount:{data:n/100,class:"result",pipe:"currency"}}),U=n=>({index:n.transferNr,amounts:{recent:{data:n.isRecentTransfer,pipe:"enum"},owner:{data:n.isRecentTransfer&&n.ownerAge?Object.keys(n.ownerAge)[0]:"",pipe:"enum"},ownerAge:{data:n.isRecentTransfer&&n.ownerAge?Object.values(n.ownerAge)[0]:"",pipe:"number",args:"0"},allocated:{data:n.isRecentTransfer&&n.accountedAmount?n.accountedAmount.result/1e4:"",pipe:"currency",args:"4"}},formulas:{allocated:n.isRecentTransfer&&n.accountedAmount?n.accountedAmount.formula:""}}),z=n=>({items:n.transfers.map(o=>U(o)),amounts:{...k(n.deductibleAmount),sum:{data:n.sumAccountedAmounts/1e4,pipe:"currency",args:"4"}}}),W=n=>({items:n.transfers.map(o=>K(o)),amounts:{...k(n.deductibleAmount),abated:{data:n.abatedAmount/1e4,pipe:"currency",args:"4"}}}),K=n=>{const o=U(n);return{index:o.index,amounts:{...o.amounts,...n.isRecentTransfer&&n.reductedAmount&&n.abatement&&{reducted:{data:n.reductedAmount.result/1e4,pipe:"currency",args:"4"},abatement:{data:n.abatement.result/1e4,pipe:"currency",args:"4"}}},formulas:{...o.formulas,...n.isRecentTransfer&&n.reductedAmount&&n.abatement&&{reducted:n.reductedAmount.formula,abatement:n.abatement.formula}}}};var c=d(9333),u=d(7174),Z=d(7582),m=d(6895),O=d(2778),f=d(3597),y=d(7718),T=d(3416),M=d(5158);function ee(n,o){if(1&n&&(e.ynx(0),e.TgZ(1,"th",3)(2,"label",13),e._uU(3),e.ALo(4,"translate"),e.qZA()(),e.BQk()),2&n){const t=e.oxw();e.xp6(3),e.Oqu(e.lcZ(4,1,t.t.TRANSACTIONS.reduction))}}function ne(n,o){if(1&n&&(e.TgZ(0,"td",16)(1,"vw-form-field")(2,"div",17),e._UZ(3,"input",33),e.TgZ(4,"span",19),e._UZ(5,"i",22),e.qZA()()()()),2&n){const t=e.oxw().$implicit,a=e.oxw();e.xp6(3),e.s9C("placeholder",a.currencyMask.inputPlaceholder),e.Q6J("formControl",t.controls.reduction)("inputMask",a.currencyMask.options)}}function te(n,o){if(1&n&&(e.TgZ(0,"tr",14)(1,"th",15),e._uU(2),e.qZA(),e.TgZ(3,"td",16)(4,"vw-form-field")(5,"div",17),e._UZ(6,"input",18),e.ALo(7,"translate"),e.TgZ(8,"span",19),e._UZ(9,"i",20),e.qZA()()()(),e.TgZ(10,"td",16)(11,"vw-form-field")(12,"div",17),e._UZ(13,"input",21),e.TgZ(14,"span",19),e._UZ(15,"i",22),e.qZA()()()(),e.TgZ(16,"td",23)(17,"vw-form-field"),e._UZ(18,"input",24),e.qZA()(),e.TgZ(19,"td",25)(20,"vw-form-field"),e._UZ(21,"select",26),e.ALo(22,"translate"),e.qZA()(),e.TgZ(23,"td",27)(24,"vw-form-field"),e._UZ(25,"select",26),e.ALo(26,"translate"),e.qZA()(),e.TgZ(27,"td",23)(28,"vw-form-field"),e._UZ(29,"input",28),e.qZA()(),e.TgZ(30,"td",25)(31,"vw-form-field"),e._UZ(32,"select",29),e.ALo(33,"translate"),e.qZA()(),e.TgZ(34,"td",27)(35,"vw-form-field"),e._UZ(36,"select",29),e.ALo(37,"translate"),e.qZA()(),e.YNc(38,ne,6,3,"td",30),e.TgZ(39,"td",31),e._UZ(40,"app-form-array-remove-row",32),e.qZA()()),2&n){const t=o.$implicit,a=o.index,s=e.oxw();e.s9C("formGroupName",a),e.xp6(2),e.Oqu(a+1),e.xp6(4),e.s9C("placeholder",e.lcZ(7,37,s.t.FORM.DATE_FORMAT)),e.Q6J("formControl",t.controls.transferDate)("inputMask",s.dateMask.options)("overriddenMessages",s.dateMask.errorMessage)("dynMaxDate",s.dynMaxDate),e.xp6(7),e.s9C("placeholder",s.currencyMask.inputPlaceholder),e.Q6J("formControl",t.controls.transferValue)("inputMask",s.currencyMask.options),e.xp6(5),e.s9C("placeholder",s.fractionMask.inputPlaceholder),e.Q6J("formControl",t.controls.fractionOne)("inputMask",s.fractionMask.options)("overriddenMessages",s.fractionMask.errorMessage),e.xp6(3),e.s9C("placeholder",e.lcZ(22,39,s.t.FORM.CHOOSE)),e.Q6J("formControl",t.controls.ownershipOne)("options",s.ownershipOptions)("selectedOption",t.value.ownershipOne),e.xp6(4),e.s9C("placeholder",e.lcZ(26,41,s.t.FORM.CHOOSE)),e.Q6J("formControl",t.controls.ownerOne)("options",s.filteredOwnerOptions)("selectedOption",t.value.ownerOne),e.xp6(4),e.s9C("placeholder",s.fractionMask.inputPlaceholder),e.Q6J("formControl",t.controls.fractionTwo)("inputMask",s.fractionMask.options)("overriddenMessages",s.fractionMask.errorMessage),e.xp6(3),e.s9C("placeholder",e.lcZ(33,43,s.t.FORM.CHOOSE)),e.Q6J("formControl",t.controls.ownershipTwo)("options",s.ownershipOptions)("selectedOption",t.value.ownershipTwo),e.xp6(4),e.s9C("placeholder",e.lcZ(37,45,s.t.FORM.CHOOSE)),e.Q6J("formControl",t.controls.ownerTwo)("options",s.filteredOwnerOptions)("selectedOption",t.value.ownerTwo),e.xp6(2),e.Q6J("ngIf",s.isSales),e.xp6(2),e.Q6J("vwVisibleIf",s.arrayFormRows.length>1)("rowIndex",a)}}class h{constructor(){(0,r.Z)(this,"formGroupDirective",(0,e.f3M)(i.sg)),(0,r.Z)(this,"currencyMask",O.Pu),(0,r.Z)(this,"dateMask",O.X8),(0,r.Z)(this,"fractionMask",O.WS),(0,r.Z)(this,"genderOptions",l.uz),(0,r.Z)(this,"overriddenMessages",{exlusiveValue:o=>({key:"EXCLUSIVE_COMMUNITY"}),distinctPairValues:o=>({key:"DISTINCT_OWNER_OWNERSHIP"}),invalidPairValues:o=>({key:"INCOMPATIBLE_OWNERSHIP"})}),(0,r.Z)(this,"ownershipOptions",(0,p._Y)((0,p.s0)(l.nE),(0,p.s0)(l.nE).map(o=>(0,y.pg)(o)))),(0,r.Z)(this,"t",(0,e.f3M)(y.OS)),(0,r.Z)(this,"arrayFormRows",void 0),(0,r.Z)(this,"filteredOwnerOptions",(0,p._Y)((0,p.s0)(l.Ff))),(0,r.Z)(this,"dynMaxDate",void 0),(0,r.Z)(this,"isSales",!1),(0,r.Z)(this,"newItemFactory",void 0)}set filterOwnerOption(o){this.filteredOwnerOptions=(0,p._Y)((0,p.s0)(o?(0,l.$X)(o):l.Ff)),o&&this.arrayFormRows.map(t=>{const a=t.controls;[a.ownerOne,a.ownerTwo].forEach(s=>{s.value&&o===s.value&&s.setValue(null)})})}ngOnInit(){this.arrayFormRows=this.formGroupDirective.form.controls.items.controls}}(0,r.Z)(h,"\u0275fac",function(o){return new(o||h)}),(0,r.Z)(h,"\u0275cmp",e.Xpm({type:h,selectors:[["app-transactions-form-array"]],inputs:{dynMaxDate:"dynMaxDate",isSales:"isSales",newItemFactory:"newItemFactory",filterOwnerOption:"filterOwnerOption"},standalone:!0,features:[e._Bn([],[{provide:i.gN,useExisting:i.sg}]),e.jDz],decls:32,vars:22,consts:[["appFormArrayErrorsContainer","",1,"table-responsive","mb-3"],["formArrayName","items",1,"table",3,"overriddenMessages"],[1,"caption-top"],["scope","col"],[1,"none"],["id","transferDate",1,"required"],["id","transferValue",1,"required"],["scope","colgroup","colspan","3"],["id","realRights_Share_1",1,"required"],["id","realRights_Share_2"],[4,"ngIf"],[3,"newItemFactory"],[3,"formGroupName",4,"ngFor","ngForOf"],["id","reduction"],[3,"formGroupName"],["scope","row",1,"mw-xs"],[1,"mw-lg"],["appFormControlErrorsContainer","",1,"input-group"],["type","text","aria-labelledby","transferDate",1,"form-control",3,"formControl","inputMask","placeholder","overriddenMessages","dynMaxDate"],[1,"input-group-text"],[1,"fa-regular","fa-calendar-check"],["vwResetValueIfEmpty","","type","text","aria-labelledby","transferValue",1,"form-control",3,"formControl","inputMask","placeholder"],[1,"fa-solid","fa-euro-sign"],[1,"pe-0","mw-sm"],["type","text","aria-labelledby","realRights_Share_1",1,"form-control",3,"formControl","inputMask","placeholder","overriddenMessages"],[1,"px-0","mw-md"],["aria-labelledby","realRights_Share_1","vw-form-select-options","",1,"form-select",3,"formControl","placeholder","options","selectedOption"],[1,"ps-0","mw-md"],["type","text","aria-labelledby","realRights_Share_2",1,"form-control",3,"formControl","inputMask","placeholder","overriddenMessages"],["aria-labelledby","realRights_Share_2","vw-form-select-options","",1,"form-select",3,"formControl","placeholder","options","selectedOption"],["class","mw-lg",4,"ngIf"],[1,"mw-xs"],[3,"vwVisibleIf","rowIndex"],["vwResetValueIfEmpty","","type","text","aria-labelledby","reduction",1,"form-control",3,"formControl","inputMask","placeholder"]],template:function(o,t){1&o&&(e.TgZ(0,"div",0)(1,"table",1)(2,"caption",2),e._uU(3),e.ALo(4,"translate"),e.qZA(),e.TgZ(5,"thead")(6,"tr")(7,"th",3)(8,"label",4),e._uU(9),e.ALo(10,"translate"),e.qZA()(),e.TgZ(11,"th",3)(12,"label",5),e._uU(13),e.ALo(14,"translate"),e.qZA()(),e.TgZ(15,"th",3)(16,"label",6),e._uU(17),e.ALo(18,"translate"),e.qZA()(),e.TgZ(19,"th",7)(20,"label",8),e._uU(21),e.ALo(22,"translate"),e.qZA()(),e.TgZ(23,"th",7)(24,"label",9),e._uU(25),e.ALo(26,"translate"),e.qZA()(),e.YNc(27,ee,5,3,"ng-container",10),e.TgZ(28,"th",3),e._UZ(29,"app-form-array-add-row",11),e.qZA()()(),e.TgZ(30,"tbody"),e.YNc(31,te,41,47,"tr",12),e.qZA()()()),2&o&&(e.xp6(1),e.Q6J("overriddenMessages",t.overriddenMessages),e.xp6(2),e.Oqu(e.lcZ(4,10,t.t.DOMAIN.TRANSACTIONS)),e.xp6(6),e.Oqu(e.lcZ(10,12,t.t.FORM.ROW_NUMBER)),e.xp6(4),e.Oqu(e.lcZ(14,14,t.t.TRANSACTIONS.date)),e.xp6(4),e.Oqu(e.lcZ(18,16,t.t.TRANSACTIONS.value)),e.xp6(4),e.hij("",e.lcZ(22,18,t.t.PROPERTIES.REALRIGHTS_SHARE)," 1"),e.xp6(4),e.hij("",e.lcZ(26,20,t.t.PROPERTIES.REALRIGHTS_SHARE)," 2"),e.xp6(2),e.Q6J("ngIf",t.isSales),e.xp6(2),e.Q6J("newItemFactory",t.newItemFactory),e.xp6(2),e.Q6J("ngForOf",t.arrayFormRows))},dependencies:[m.ax,m.O5,i.UX,i.Fj,i.EJ,i.JJ,i.JL,i.oH,i.x0,i.CE,T.aw,T.X$,c.Zg,c.tS,c.wh,c.tJ,f.hg,f.LW,f.vA,f.IQ,f.OY,f.Og,M.zz,M.J6,O.t4,u.zm,c.$9,c.Uw],encapsulation:2,changeDetection:0})),(0,Z.gn)([u.aH],h.prototype,"dynMaxDate",void 0),(0,Z.gn)([u.aH],h.prototype,"newItemFactory",void 0),(0,Z.gn)([u.aH],h.prototype,"filterOwnerOption",null);const L=function(n){return[n]};function oe(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"div",1)(1,"vw-form-field",2),e.ALo(2,"translate"),e.TgZ(3,"div",8)(4,"div",9)(5,"input",14),e.NdJ("change",function(){e.CHM(t);const s=e.oxw();return e.KtG(s.ctrls.beneficiaryInss.updateValueAndValidity())}),e.qZA(),e.TgZ(6,"span",5),e._UZ(7,"i",11),e.qZA()(),e._UZ(8,"vw-button-group",15),e.ALo(9,"translate"),e.ALo(10,"mapDynamicPipe"),e.qZA()()()}if(2&n){const t=e.oxw();e.xp6(1),e.s9C("label",e.lcZ(2,11,t.t.TRANSACTIONS.PARTNERINSSGENDER)),e.xp6(4),e.s9C("placeholder",t.inssMask.inputPlaceholder),e.Q6J("formControl",t.ctrls.partnerInss)("inputMask",t.inssMask.options)("overriddenMessages",t.overriddenMessages),e.xp6(3),e.s9C("ariaLabel",e.lcZ(9,13,t.t.TRANSACTIONS.partnerGender)),e.Q6J("fixedWidthPx",39)("options",e.VKq(18,L,t.ctrls.partnerGender.value))("values",e.xi3(10,15,e.VKq(20,L,t.ctrls.partnerGender.value),"enum"))("selectedOption",t.ctrls.partnerGender.value)("disabled",!0)}}class g{constructor(){(0,r.Z)(this,"formGroupDirective",(0,e.f3M)(i.sg)),(0,r.Z)(this,"HouseholdCategory",l.XH),(0,r.Z)(this,"genderOptions",l.uz),(0,r.Z)(this,"householdCategoryOptions",l.k0),(0,r.Z)(this,"inssMask",O.kn),(0,r.Z)(this,"monthMask",O.Cy),(0,r.Z)(this,"overriddenMessages",{...O.kn.errorMessage,notMatch:o=>({key:"INSS_DIFFERENT"})}),(0,r.Z)(this,"t",(0,e.f3M)(y.OS)),(0,r.Z)(this,"ctrls",void 0),(0,r.Z)(this,"dynMaxDate",void 0),(0,r.Z)(this,"filterOwnerOption",void 0),(0,r.Z)(this,"dynMaxDateChange",new e.vpe),(0,r.Z)(this,"filterOwnerOptionChange",new e.vpe)}ngOnInit(){this.ctrls=this.formGroupDirective.form.controls}emitMaxDateChange(o){const t=o?o.value:"";this.dynMaxDateChange.emit(t?(0,p.t3)(t):(0,p.Lg)())}resetOwnerInss(){this.ctrls.householdCategory.value===l.XH.Mono&&(this.ctrls.partnerInss.reset(),this.ctrls.partnerInss.updateValueAndValidity(),this.ctrls.beneficiaryInss.updateValueAndValidity())}resetOwnerList(){this.filterOwnerOptionChange.emit(this.ctrls.householdCategory.value===l.XH.Mono?this.ctrls.partnerGender.value:null)}setBeneficiaryGender(o){this.ctrls.beneficiaryGender.setValue(o),this.ctrls.partnerGender.setValue((0,l.pO)(o)),this.ctrls.householdCategory.value===l.XH.Mono&&this.filterOwnerOptionChange.emit((0,l.pO)(o))}}(0,r.Z)(g,"\u0275fac",function(o){return new(o||g)}),(0,r.Z)(g,"\u0275cmp",e.Xpm({type:g,selectors:[["app-transactions-form-inline"]],inputs:{dynMaxDate:"dynMaxDate",filterOwnerOption:"filterOwnerOption"},outputs:{dynMaxDateChange:"dynMaxDateChange",filterOwnerOptionChange:"filterOwnerOptionChange"},standalone:!0,features:[e._Bn([],[{provide:i.gN,useExisting:i.sg}]),e.jDz],decls:26,vars:36,consts:[[1,"row","g-2"],[1,"col-xl-3","col-md-6","mb-3"],["labelClass","form-label",3,"label"],["appFormControlErrorsContainer","",1,"input-group"],["type","text",1,"form-control",3,"formControl","inputMask","placeholder","overriddenMessages","blur"],[1,"input-group-text"],[1,"fa-regular","fa-calendar-check"],["vw-form-select-options","",1,"form-select",3,"formControl","placeholder","options","selectedOption","change"],["appFormControlErrorsContainer","",1,"d-flex","flex-col"],[1,"input-group","pe-2"],["id","beneficiaryInss","type","text",1,"form-control",3,"formControl","inputMask","placeholder","overriddenMessages","change"],[1,"fa-solid","fa-id-card"],["color","outline-primary",3,"ariaLabel","fixedWidthPx","options","values","selectedOption","selectOption"],["class","col-xl-3 col-md-6 mb-3",4,"ngIf"],["type","text",1,"form-control",3,"formControl","inputMask","placeholder","overriddenMessages","change"],["color","outline-secondary",3,"ariaLabel","fixedWidthPx","options","values","selectedOption","disabled"]],template:function(o,t){1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"vw-form-field",2),e.ALo(3,"translate"),e.TgZ(4,"div",3)(5,"input",4),e.NdJ("blur",function(s){return t.emitMaxDateChange(s.target)}),e.ALo(6,"translate"),e.qZA(),e.TgZ(7,"span",5),e._UZ(8,"i",6),e.qZA()()()(),e.TgZ(9,"div",1)(10,"vw-form-field",2),e.ALo(11,"translate"),e.TgZ(12,"select",7),e.NdJ("change",function(){return t.resetOwnerList(),t.resetOwnerInss()}),e.ALo(13,"translate"),e.qZA()()(),e.TgZ(14,"div",1)(15,"vw-form-field",2),e.ALo(16,"translate"),e.TgZ(17,"div",8)(18,"div",9)(19,"input",10),e.NdJ("change",function(){return t.ctrls.partnerInss.updateValueAndValidity()}),e.qZA(),e.TgZ(20,"span",5),e._UZ(21,"i",11),e.qZA()(),e.TgZ(22,"vw-button-group",12),e.NdJ("selectOption",function(s){return t.setBeneficiaryGender(s)}),e.ALo(23,"translate"),e.ALo(24,"mapDynamicPipe"),e.qZA()()()(),e.YNc(25,oe,11,22,"div",13),e.qZA()),2&o&&(e.xp6(2),e.s9C("label",e.lcZ(3,21,t.t.TRANSACTIONS.startMonth)),e.xp6(3),e.s9C("placeholder",e.lcZ(6,23,t.t.FORM.MONTH_FORMAT)),e.Q6J("formControl",t.ctrls.startMonth)("inputMask",t.monthMask.options)("overriddenMessages",t.monthMask.errorMessage),e.xp6(5),e.s9C("label",e.lcZ(11,25,t.t.TRANSACTIONS.householdCategory)),e.xp6(2),e.s9C("placeholder",e.lcZ(13,27,t.t.FORM.CHOOSE)),e.Q6J("formControl",t.ctrls.householdCategory)("options",t.householdCategoryOptions)("selectedOption",t.ctrls.householdCategory.value),e.xp6(3),e.s9C("label",e.lcZ(16,29,t.t.TRANSACTIONS.BENEFICIARYINSSGENDER)),e.xp6(4),e.s9C("placeholder",t.inssMask.inputPlaceholder),e.Q6J("formControl",t.ctrls.beneficiaryInss)("inputMask",t.inssMask.options)("overriddenMessages",t.overriddenMessages),e.xp6(3),e.s9C("ariaLabel",e.lcZ(23,31,t.t.TRANSACTIONS.beneficiaryGender)),e.Q6J("fixedWidthPx",39)("options",t.genderOptions)("values",e.xi3(24,33,t.genderOptions,"enum"))("selectedOption",t.ctrls.beneficiaryGender.value),e.xp6(3),e.Q6J("ngIf",t.ctrls.householdCategory.value===t.HouseholdCategory.Duo))},dependencies:[i.UX,i.Fj,i.EJ,i.JJ,i.oH,T.aw,T.X$,c.Zg,c.tS,f.hg,f.LW,f.vA,f.IQ,f.Og,M.zz,M.J6,m.O5,f.Kb,u.ZY],encapsulation:2,changeDetection:0})),(0,Z.gn)([u.aH],g.prototype,"dynMaxDate",void 0),(0,Z.gn)([u.aH],g.prototype,"filterOwnerOption",void 0);var J=d(663);function re(n,o){if(1&n&&(e.ynx(0),e.TgZ(1,"th",8),e._uU(2),e.ALo(3,"translate"),e.ALo(4,"keyOf"),e.qZA(),e.BQk()),2&n){const t=o.$implicit,a=e.oxw(2);e.xp6(1),e.Gre("text-end pe-4 ",t.value.class,""),e.xp6(1),e.hij(" ",e.lcZ(3,4,e.xi3(4,6,t.key,a.t[a.prefix])),"")}}function ae(n,o){if(1&n&&(e.ynx(0),e.TgZ(1,"td"),e._uU(2),e.ALo(3,"dynamicPipe"),e.qZA(),e.BQk()),2&n){const t=o.$implicit;e.xp6(1),e.Gre("text-end pe-4 ",t.value.class,""),e.xp6(1),e.hij(" ",e.Dn7(3,4,t.value.data,t.value.pipe,t.value.args),"")}}function se(n,o){if(1&n&&(e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.YNc(3,ae,4,8,"ng-container",7),e.ALo(4,"keyvalue"),e.qZA()),2&n){const t=o.$implicit,a=o.index,s=e.oxw(2);e.xp6(2),e.Oqu(a+1),e.xp6(1),e.Q6J("ngForOf",e.xi3(4,2,t.amounts,s.sort))}}function ie(n,o){if(1&n&&(e.TgZ(0,"div",3)(1,"table",4)(2,"caption",5),e._uU(3),e.ALo(4,"translate"),e.qZA(),e.TgZ(5,"thead")(6,"tr")(7,"th",6),e._uU(8),e.ALo(9,"translate"),e.qZA(),e.YNc(10,re,5,9,"ng-container",7),e.ALo(11,"keyvalue"),e.qZA()(),e.TgZ(12,"tbody"),e.YNc(13,se,5,5,"tr",7),e.qZA()(),e.Hsn(14),e.qZA()),2&n){const t=o.ngIf,a=e.oxw();e.xp6(3),e.Oqu(e.lcZ(4,4,a.t.DOMAIN[a.prefix])),e.xp6(5),e.Oqu(e.lcZ(9,6,a.t.FORM.ROW_NUMBER)),e.xp6(2),e.Q6J("ngForOf",e.xi3(11,8,null==t[0]?null:t[0].amounts,a.sort)),e.xp6(3),e.Q6J("ngForOf",t)}}function le(n,o){if(1&n&&(e.TgZ(0,"tr")(1,"th",10),e._uU(2),e.ALo(3,"translate"),e.ALo(4,"keyOf"),e.qZA(),e.TgZ(5,"td",11),e._uU(6),e.ALo(7,"dynamicPipe"),e.qZA()()),2&n){const t=o.$implicit,a=e.oxw(2);e.Tol(t.value.class),e.xp6(2),e.Oqu(e.lcZ(3,5,e.xi3(4,7,t.key,a.t[a.prefix]))),e.xp6(4),e.hij(" ",e.Dn7(7,10,t.value.data,t.value.pipe,t.value.args),"")}}function ce(n,o){if(1&n&&(e.TgZ(0,"div",3)(1,"table",4)(2,"tbody"),e.YNc(3,le,8,14,"tr",9),e.ALo(4,"keyvalue"),e.qZA()()()),2&n){const t=o.ngIf,a=e.oxw();e.xp6(3),e.Q6J("ngForOf",e.xi3(4,1,t,a.sort))}}class w{constructor(){(0,r.Z)(this,"prefix",(0,e.f3M)(J.pv).getValue()),(0,r.Z)(this,"sort",p.qF),(0,r.Z)(this,"t",(0,e.f3M)(y.OS)),(0,r.Z)(this,"responseView",void 0)}}function ue(n,o){if(1&n&&(e.ynx(0),e.TgZ(1,"th",9),e._uU(2),e.ALo(3,"translate"),e.ALo(4,"keyOf"),e.qZA(),e.BQk()),2&n){const t=o.$implicit,a=e.oxw(3);e.xp6(2),e.Oqu(e.lcZ(3,1,e.xi3(4,3,t.key,a.t[a.prefix])))}}function de(n,o){if(1&n&&(e.ynx(0),e.TgZ(1,"td")(2,"code"),e._uU(3),e.qZA()(),e.BQk()),2&n){const t=o.$implicit;e.xp6(3),e.Oqu(t.value)}}function fe(n,o){if(1&n&&(e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.YNc(3,de,4,1,"ng-container",8),e.ALo(4,"keyvalue"),e.qZA()),2&n){const t=o.$implicit,a=o.index,s=e.oxw(3);e.xp6(2),e.Oqu(a+1),e.xp6(1),e.Q6J("ngForOf",e.xi3(4,2,t.formulas,s.sort))}}function me(n,o){if(1&n&&(e.TgZ(0,"div",4)(1,"table",5)(2,"caption",6),e._uU(3),e.ALo(4,"translate"),e.qZA(),e.TgZ(5,"thead")(6,"tr")(7,"th",7),e._uU(8),e.ALo(9,"translate"),e.qZA(),e.YNc(10,ue,5,6,"ng-container",8),e.ALo(11,"keyvalue"),e.qZA()(),e.TgZ(12,"tbody"),e.YNc(13,fe,5,5,"tr",8),e.qZA()()()),2&n){const t=e.oxw(2);e.xp6(3),e.Oqu(e.lcZ(4,4,t.t.DOMAIN[t.prefix])),e.xp6(5),e.Oqu(e.lcZ(9,6,t.t.FORM.ROW_NUMBER)),e.xp6(2),e.Q6J("ngForOf",e.xi3(11,8,null==t.responseView.items[0]?null:t.responseView.items[0].formulas,t.sort)),e.xp6(3),e.Q6J("ngForOf",t.responseView.items)}}function he(n,o){if(1&n&&(e.ynx(0),e.TgZ(1,"vw-card",1),e.ALo(2,"translate"),e.ynx(3,2),e._uU(4),e.ALo(5,"translate"),e.BQk(),e.YNc(6,me,14,11,"div",3),e.qZA(),e.BQk()),2&n){const t=e.oxw();e.xp6(1),e.s9C("ariaLabel",e.lcZ(2,3,t.t.FORM.FORMULA)),e.xp6(3),e.Oqu(e.lcZ(5,5,t.t.FORM.FORMULA)),e.xp6(2),e.Q6J("ngIf",t.responseView.items&&(null==t.responseView.items[0]?null:t.responseView.items[0].formulas))}}(0,r.Z)(w,"\u0275fac",function(o){return new(o||w)}),(0,r.Z)(w,"\u0275cmp",e.Xpm({type:w,selectors:[["app-transactions-response-amounts"]],inputs:{responseView:"responseView"},standalone:!0,features:[e.jDz],ngContentSelectors:["*"],decls:7,vars:8,consts:[[3,"ariaLabel"],["slotCardSubtitle",""],["class","table-responsive mb-3",4,"ngIf"],[1,"table-responsive","mb-3"],[1,"table","table-sm","w-auto"],[1,"caption-top"],["scope","col",1,"pe-4"],[4,"ngFor","ngForOf"],["scope","col"],[3,"class",4,"ngFor","ngForOf"],["scope","row",1,"pe-4"],[1,"text-end","pe-4"]],template:function(o,t){1&o&&(e.F$t(),e.TgZ(0,"vw-card",0),e.ALo(1,"translate"),e.ynx(2,1),e._uU(3),e.ALo(4,"translate"),e.BQk(),e.YNc(5,ie,15,11,"div",2),e.YNc(6,ce,5,4,"div",2),e.qZA()),2&o&&(e.s9C("ariaLabel",e.lcZ(1,4,t.t.FORM.AMOUNTS)),e.xp6(3),e.Oqu(e.lcZ(4,6,t.t.FORM.AMOUNTS)),e.xp6(2),e.Q6J("ngIf",t.responseView.items),e.xp6(1),e.Q6J("ngIf",t.responseView.amounts))},dependencies:[m.O5,m.ax,m.Nd,T.aw,T.X$,f.Ak,u.e8,u.Qg],encapsulation:2,changeDetection:0})),(0,Z.gn)([u.aH],w.prototype,"responseView",void 0);class _{constructor(){(0,r.Z)(this,"prefix",(0,e.f3M)(J.pv).getValue()),(0,r.Z)(this,"sort",p.qF),(0,r.Z)(this,"t",(0,e.f3M)(y.OS)),(0,r.Z)(this,"responseView",void 0)}}(0,r.Z)(_,"\u0275fac",function(o){return new(o||_)}),(0,r.Z)(_,"\u0275cmp",e.Xpm({type:_,selectors:[["app-transactions-response-formulas"]],inputs:{responseView:"responseView"},standalone:!0,features:[e.jDz],decls:1,vars:1,consts:[[4,"ngIf"],[3,"ariaLabel"],["slotCardSubtitle",""],["class","table-responsive mb-3",4,"ngIf"],[1,"table-responsive","mb-3"],[1,"table","table-sm","col-12"],[1,"caption-top"],["scope","col",1,"pe-4"],[4,"ngFor","ngForOf"],["scope","col"]],template:function(o,t){1&o&&e.YNc(0,he,7,7,"ng-container",0),2&o&&e.Q6J("ngIf",t.responseView.items&&(null==t.responseView.items[0]?null:t.responseView.items[0].formulas))},dependencies:[m.O5,m.ax,m.Nd,T.aw,T.X$,f.Ak,u.Qg],encapsulation:2,changeDetection:0})),(0,Z.gn)([u.aH],_.prototype,"responseView",void 0);var Q=d(5359);const Oe=(0,c.Po)((()=>{class n{constructor(){(0,r.Z)(this,"api",(0,e.f3M)(Q.uA))}getResult(t){return this.api.post(this.api.endpoints.donations,t)}}return(0,r.Z)(n,"\u0275fac",function(t){return new(t||n)}),(0,r.Z)(n,"\u0275prov",e.Yz7({token:n,factory:n.\u0275fac})),n})());function we(n,o){if(1&n&&e._UZ(0,"app-transactions-response-amounts",4)(1,"app-transactions-response-formulas",4),2&n){const t=o.$implicit;e.Q6J("responseView",t),e.xp6(1),e.Q6J("responseView",t)}}let _e=(()=>{class n extends D{constructor(...t){super(...t),(0,r.Z)(this,"isSales",!1)}}return(0,r.Z)(n,"\u0275fac",function(){let o;return function(a){return(o||(o=e.n5z(n)))(a||n)}}()),(0,r.Z)(n,"\u0275cmp",e.Xpm({type:n,selectors:[["app-transactions-donations-container"]],standalone:!0,features:[e._Bn([],[Oe,(0,c.N3)(q),(0,c.sj)(S),(0,c.nx)(z)]),e.qOj,e.jDz],decls:4,vars:8,consts:[[3,"formGroup","isReset"],[3,"dynMaxDate","filterOwnerOption","dynMaxDateChange","filterOwnerOptionChange"],[3,"newItemFactory","filterOwnerOption","dynMaxDate","isSales"],[3,"typeOf"],[3,"responseView"]],template:function(t,a){1&t&&(e.TgZ(0,"app-base-form-container",0),e.NdJ("isReset",function(){return a.resetForm()}),e.TgZ(1,"app-transactions-form-inline",1),e.NdJ("dynMaxDateChange",function(C){return a.dynMaxDate=C})("filterOwnerOptionChange",function(C){return a.filterOwnerOption=C}),e.qZA(),e._UZ(2,"app-transactions-form-array",2),e.YNc(3,we,2,2,"ng-template",3),e.qZA()),2&t&&(e.Q6J("formGroup",a.form),e.xp6(1),e.Q6J("dynMaxDate",a.dynMaxDate)("filterOwnerOption",a.filterOwnerOption),e.xp6(1),e.Q6J("newItemFactory",a.newItemFactory)("filterOwnerOption",a.filterOwnerOption)("dynMaxDate",a.dynMaxDate)("isSales",a.isSales),e.xp6(1),e.Q6J("typeOf",a.ResponseView))},dependencies:[i.UX,i.JL,i.sg,c.wM,g,h,w,_,u.Co],encapsulation:2,changeDetection:0})),n})(),Te=(()=>{class n{constructor(){(0,r.Z)(this,"api",(0,e.f3M)(Q.uA))}getResult(t){return this.api.post(this.api.endpoints.sales,t)}}return(0,r.Z)(n,"\u0275fac",function(t){return new(t||n)}),(0,r.Z)(n,"\u0275prov",e.Yz7({token:n,factory:n.\u0275fac})),n})();function Ze(n,o){if(1&n&&e._UZ(0,"app-transactions-response-amounts",4)(1,"app-transactions-response-formulas",4),2&n){const t=o.$implicit;e.Q6J("responseView",t),e.xp6(1),e.Q6J("responseView",t)}}let ye=(()=>{class n extends D{constructor(...t){super(...t),(0,r.Z)(this,"isSales",!0)}}return(0,r.Z)(n,"\u0275fac",function(){let o;return function(a){return(o||(o=e.n5z(n)))(a||n)}}()),(0,r.Z)(n,"\u0275cmp",e.Xpm({type:n,selectors:[["app-transactions-sales-container"]],standalone:!0,features:[e._Bn([],[(0,c.Po)(Te),(0,c.N3)(q),(0,c.sj)(S),(0,c.nx)(W)]),e.qOj,e.jDz],decls:4,vars:8,consts:[[3,"formGroup","isReset"],[3,"dynMaxDate","filterOwnerOption","dynMaxDateChange","filterOwnerOptionChange"],[3,"newItemFactory","filterOwnerOption","dynMaxDate","isSales"],[3,"typeOf"],[3,"responseView"]],template:function(t,a){1&t&&(e.TgZ(0,"app-base-form-container",0),e.NdJ("isReset",function(){return a.resetForm()}),e.TgZ(1,"app-transactions-form-inline",1),e.NdJ("dynMaxDateChange",function(C){return a.dynMaxDate=C})("filterOwnerOptionChange",function(C){return a.filterOwnerOption=C}),e.qZA(),e._UZ(2,"app-transactions-form-array",2),e.YNc(3,Ze,2,2,"ng-template",3),e.qZA()),2&t&&(e.Q6J("formGroup",a.form),e.xp6(1),e.Q6J("dynMaxDate",a.dynMaxDate)("filterOwnerOption",a.filterOwnerOption),e.xp6(1),e.Q6J("newItemFactory",a.newItemFactory)("filterOwnerOption",a.filterOwnerOption)("dynMaxDate",a.dynMaxDate)("isSales",a.isSales),e.xp6(1),e.Q6J("typeOf",a.ResponseView))},dependencies:[i.UX,i.JL,i.sg,c.wM,g,h,w,_,u.Co],encapsulation:2,changeDetection:0})),n})()}}]);