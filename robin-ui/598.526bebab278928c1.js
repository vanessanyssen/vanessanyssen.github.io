"use strict";(self.webpackChunkrobin=self.webpackChunkrobin||[]).push([[598],{9303:(E,I,a)=>{a.d(I,{x:()=>y});var l=a(4650),n=a(8723),e=a(4006),c=a(7402),s=a(1004),f=a(9329);const _={invalidCombination:!0},T=(o,p)=>i=>{if(i instanceof e.cw){const t=i.controls,r=o.map(m=>t[m].value);return(0,n.AD)(r,n.UE)&&((0,f.S)(r,p)||(0,f.S)(r.reverse(),p))?_:null}throw new Error("formGroup is not an instance of FormGroup")};let y=(()=>{class o{constructor(){this.injector=(0,l.f3M)(l.lqb),this.form=function O(){const o=(0,l.f3M)(e.qu);return o.group({startMonth:o.nonNullable.control("",{validators:[e.kI.required,s.D0.min(c.pw),s.D0.max((0,n.nD)())],updateOn:"blur"}),householdCategory:o.control(null,e.kI.required),beneficiaryInss:o.nonNullable.control("",{validators:[e.kI.required,s.$i],updateOn:"blur"}),beneficiaryGender:o.nonNullable.control(c.Y0.Female,e.kI.required),partnerInss:o.nonNullable.control("",{validators:[s.$i],updateOn:"blur"}),partnerGender:o.nonNullable.control(c.Y0.Male,e.kI.required),items:o.nonNullable.array([])})}(),this.newItemFactory=()=>this.injector.runInContext(()=>function M(o){const p=(0,l.f3M)(e.qu);return p.group({transferDate:p.nonNullable.control("",{validators:e.kI.required,updateOn:"blur"}),transferValue:p.nonNullable.control("",e.kI.required),fractionOne:p.nonNullable.control("",{validators:[e.kI.required,s.nk],updateOn:"blur"}),ownershipOne:p.control(null,e.kI.required),ownerOne:p.control(null,e.kI.required),fractionTwo:p.nonNullable.control("",{validators:s.nk,updateOn:"blur"}),ownershipTwo:p.control(null),ownerTwo:p.control(null),reduction:p.nonNullable.control({value:"",disabled:!o})},{validators:[(0,s.h5)(["ownerOne","ownerTwo"],c.Ff.Common),T(["ownershipOne","ownershipTwo"],[c.nE.Usufruct,c.nE.BareOwnership]),(0,s.dP)([["ownerOne","ownershipOne"],["ownerTwo","ownershipTwo"]]),(0,s.oD)(["fractionTwo","ownershipTwo","ownerTwo"]),(0,s.eI)("fractionOne","fractionTwo")]})}(this.isSales)),this.dynMaxDate=(0,n.Lg)(),this.filterOwnerOption=null}ngOnInit(){this.ctrls=this.form.controls,this.formArray=this.ctrls.items,this.formArray.push(this.newItemFactory()),function A(o){const p=()=>o.householdCategory.value===c.XH.Duo;o.beneficiaryInss.addValidators(i=>p()?(0,s.HN)(o.partnerInss,"INSS_DIFFERENT")(i):null),o.partnerInss.addValidators([i=>p()?e.kI.required(i):null,i=>p()?(0,s.HN)(o.beneficiaryInss,"INSS_DIFFERENT")(i):null])}(this.ctrls)}resetForm(){this.dynMaxDate=(0,n.Lg)(),this.filterOwnerOption=null,this.formArray.clear(),this.formArray.push(this.newItemFactory())}}return o.\u0275fac=function(i){return new(i||o)},o.\u0275cmp=l.Xpm({type:o,selectors:[["ng-component"]],decls:0,vars:0,template:function(i,t){},encapsulation:2,changeDetection:0}),o})()},6656:(E,I,a)=>{a.d(I,{ad:()=>e,gF:()=>o,aU:()=>g,d0:()=>y});var l=a(7402),n=a(8723);const e=t=>({startDate:(0,n.Vn)(t.startMonth),householdCategory:t.householdCategory,beneficiary:{inss:(0,n.bI)(t.beneficiaryInss),gender:t.beneficiaryGender},...t.partnerInss&&{partner:{inss:(0,n.bI)(t.partnerInss),gender:t.partnerGender}},transfers:t.items.map(r=>({transferDate:(0,n.Vn)(r.transferDate),transferValue:Math.round(100*(0,n.W_)(r.transferValue)),ownership:r.ownerTwo&&r.ownerTwo!==r.ownerOne?"F+M":`${r.ownerOne}`,...T(r),...O(r),...M(r),...r.reduction&&{reimboursmt:Math.round(100*(0,n.W_)(r.reduction))}}))}),c=(t,r)=>t.ownershipOne===r&&t?.ownershipTwo!==r,s=(t,r)=>t.ownershipOne!==r&&t?.ownershipTwo===r,f=(t,r)=>t.ownershipOne===r&&t?.ownershipTwo===r,_=t=>`${Number(t.fractionOne.split("/")[0])*Number(t.fractionTwo?.split("/")[1])+Number(t.fractionTwo?.split("/")[0])*Number(t.fractionOne.split("/")[1])}/${Number(t.fractionOne.split("/")[1])*Number(t.fractionTwo?.split("/")[1])} `,T=t=>f(t,l.nE.Freehold)?{freehold:_(t)}:c(t,l.nE.Freehold)?{freehold:t.fractionOne}:s(t,l.nE.Freehold)&&{freehold:t.fractionTwo},O=t=>f(t,l.nE.Usufruct)?{usufruct:_(t)}:c(t,l.nE.Usufruct)?{usufruct:t.fractionOne}:s(t,l.nE.Usufruct)&&{usufruct:t.fractionTwo},M=t=>f(t,l.nE.BareOwnership)?{bareOwnership:_(t)}:c(t,l.nE.BareOwnership)?{bareOwnership:t.fractionOne}:s(t,l.nE.BareOwnership)&&{bareOwnership:t.fractionTwo},g=t=>({form:{startMonth:{data:t.startMonth},householdCategory:{data:t.householdCategory,pipe:"enum"},beneficiaryInss:{data:t.beneficiaryInss},beneficiaryGender:{data:t.beneficiaryGender},partnerInss:{data:t.partnerInss,class:t.partnerInss?"text-end pe-4":"d-none"},partnerGender:{data:t.partnerGender,class:t.partnerInss?"text-end pe-4":"d-none"}},array:t.items.map(r=>({transferDate:{data:r.transferDate},transferValue:{data:(0,n.R3)(r.transferValue," \u20ac")},fractionOne:{data:r.fractionOne,class:"text-end pe-0"},ownershipOne:{data:r.ownershipOne,pipe:"enum",class:"text-end pe-0"},ownerOne:{data:r.ownerOne,class:"text-end pe-0"},fractionTwo:{data:r.fractionTwo,class:"text-end pe-0"},ownershipTwo:{data:r.ownershipTwo,pipe:"enum",class:"text-end pe-0"},ownerTwo:{data:r.ownerTwo},reduction:{data:(0,n.R3)(r.reduction," \u20ac"),class:r.reduction?"text-end pe-4":"d-none"}}))}),A=t=>({amounts:{accountedAmount:{data:t.deductibleAmount/100,class:"result",pipe:"currency"}}}),y=t=>{const r=A(t);return{items:t.transfers.map(m=>i(m)),amounts:{abated:{data:t.abatedAmount/1e4,pipe:"currency",args:"4"},...r.amounts}}},o=t=>{const r=A(t);return{items:t.transfers.map(m=>i(m)),amounts:{sum:{data:t.sumAccountedAmounts/1e4,pipe:"currency",args:"4"},...r.amounts}}},i=t=>{const r=(t=>({index:t.transferNr,amounts:{recent:{data:t.isRecentTransfer,pipe:"enum"},owner:{data:t.isRecentTransfer&&t.ownerAge?Object.keys(t.ownerAge)[0]:"",pipe:"enum"},ownerAge:{data:t.isRecentTransfer&&t.ownerAge?Object.values(t.ownerAge)[0]:"",pipe:"number",args:"0"},allocated:{data:t.isRecentTransfer&&t.accountedAmount?t.accountedAmount.result/1e4:"",pipe:"currency",args:"4"}},formulas:{allocated:t.isRecentTransfer&&t.accountedAmount?t.accountedAmount.formula:""}}))(t);return{index:r.index,amounts:{...r.amounts,...t.isRecentTransfer&&t.reductedAmount&&t.abatement&&{reducted:{data:t.reductedAmount.result/1e4,pipe:"currency",args:"4"},abatement:{data:t.abatement.result/1e4,pipe:"currency",args:"4"}}},formulas:{...r.formulas,...t.isRecentTransfer&&t.reductedAmount&&t.abatement&&{reducted:t.reductedAmount.formula,abatement:t.abatement.formula}}}}},4738:(E,I,a)=>{a.d(I,{t:()=>r});var l=a(655),n=a(6895),e=a(4650),c=a(4006),s=a(8453),f=a(797),_=a(7402),T=a(4370),O=a(4290),M=a(167),g=a(8723),A=a(3416),y=a(5158);function o(m,h){if(1&m&&(e.ynx(0),e.TgZ(1,"th",3)(2,"label",13),e._uU(3),e.ALo(4,"translate"),e.qZA()(),e.BQk()),2&m){const u=e.oxw();e.xp6(3),e.Oqu(e.lcZ(4,1,u.t.TRANSACTIONS.reduction))}}function p(m,h){if(1&m&&(e.TgZ(0,"td",16)(1,"vw-form-field")(2,"div",17),e._UZ(3,"input",35),e.TgZ(4,"span",19),e._UZ(5,"i",22),e.qZA()()()()),2&m){const u=e.oxw(2);e.xp6(3),e.s9C("placeholder",u.currencyMask.placeholder),e.Q6J("inputMask",u.currencyMask.options)}}function i(m,h){if(1&m&&(e.TgZ(0,"tr",14)(1,"th",15),e._uU(2),e.qZA(),e.TgZ(3,"td",16)(4,"vw-form-field")(5,"div",17),e._UZ(6,"input",18),e.ALo(7,"translate"),e.TgZ(8,"span",19),e._UZ(9,"i",20),e.qZA()()()(),e.TgZ(10,"td",16)(11,"vw-form-field")(12,"div",17),e._UZ(13,"input",21),e.TgZ(14,"span",19),e._UZ(15,"i",22),e.qZA()()()(),e.TgZ(16,"td",23)(17,"vw-form-field"),e._UZ(18,"input",24),e.qZA()(),e.TgZ(19,"td",25)(20,"vw-form-field"),e._UZ(21,"select",26),e.ALo(22,"translate"),e.qZA()(),e.TgZ(23,"td",27)(24,"vw-form-field"),e._UZ(25,"select",28),e.ALo(26,"translate"),e.qZA()(),e.TgZ(27,"td",23)(28,"vw-form-field"),e._UZ(29,"input",29),e.qZA()(),e.TgZ(30,"td",25)(31,"vw-form-field"),e._UZ(32,"select",30),e.ALo(33,"translate"),e.qZA()(),e.TgZ(34,"td",27)(35,"vw-form-field"),e._UZ(36,"select",31),e.ALo(37,"translate"),e.qZA()(),e.YNc(38,p,6,2,"td",32),e.TgZ(39,"td",33),e._UZ(40,"app-form-array-remove-row",34),e.qZA()()),2&m){const u=h.$implicit,w=h.index,d=e.oxw();e.Q6J("formGroupName",w),e.xp6(2),e.Oqu(w+1),e.xp6(4),e.s9C("placeholder",e.lcZ(7,29,d.t.FORM.DATE_FORMAT)),e.Q6J("inputMask",d.dateMask.options)("overriddenMessages",d.dateMask.errorMessage)("dynMaxDate",d.dynMaxDate),e.xp6(7),e.s9C("placeholder",d.currencyMask.placeholder),e.Q6J("inputMask",d.currencyMask.options),e.xp6(5),e.s9C("placeholder",d.fractionMask.placeholder),e.Q6J("inputMask",d.fractionMask.options)("overriddenMessages",d.fractionMask.errorMessage),e.xp6(3),e.s9C("placeholder",e.lcZ(22,31,d.t.FORM.CHOOSE)),e.Q6J("options",d.ownershipOptions)("ariaSelected",u.value.ownershipOne),e.xp6(4),e.s9C("placeholder",e.lcZ(26,33,d.t.FORM.CHOOSE)),e.Q6J("options",d.filteredOwnerOptions)("ariaSelected",u.value.ownerOne),e.xp6(4),e.s9C("placeholder",d.fractionMask.placeholder),e.Q6J("inputMask",d.fractionMask.options)("overriddenMessages",d.fractionMask.errorMessage),e.xp6(3),e.s9C("placeholder",e.lcZ(33,35,d.t.FORM.CHOOSE)),e.Q6J("options",d.ownershipOptions)("ariaSelected",u.value.ownershipTwo),e.xp6(4),e.s9C("placeholder",e.lcZ(37,37,d.t.FORM.CHOOSE)),e.Q6J("options",d.filteredOwnerOptions)("ariaSelected",u.value.ownerTwo),e.xp6(2),e.Q6J("ngIf",d.isSales),e.xp6(2),e.Q6J("vwVisibleIf",d.arrayFormRows.length>1)("rowIndex",w)}}class r{constructor(){this.formGroupDirective=(0,e.f3M)(c.sg),this.currencyMask=f.Pu,this.dateMask=f.X8,this.fractionMask=f.WS,this.genderOptions=_.uz,this.overriddenMessages={exlusiveValue:h=>({key:"COMMUNITY"}),distinctCombination:h=>({key:"COMBINATION_RIGHTS"}),invalidCombination:h=>({key:"INVALID_COMBINATION"})},this.ownershipOptions=(0,g._Y)((0,g.s0)(_.nE),(0,g.s0)(_.nE).map(h=>(0,T.pg)(h))),this.t=(0,e.f3M)(T.$z),this.filteredOwnerOptions=(0,g._Y)((0,g.s0)(_.Ff)),this.isSales=!1}set filterOwnerOption(h){this.filteredOwnerOptions=(0,g._Y)((0,g.s0)(h?(0,_.$X)(h):_.Ff)),h&&this.arrayFormRows.map(u=>{const w=u.controls;[w.ownerOne,w.ownerTwo].forEach(d=>{d.value&&h===d.value&&d.setValue(null)})})}ngOnInit(){this.arrayFormRows=this.formGroupDirective.form.controls.items.controls}}r.\u0275fac=function(h){return new(h||r)},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-transactions-form-array"]],inputs:{dynMaxDate:"dynMaxDate",isSales:"isSales",newItemFactory:"newItemFactory",filterOwnerOption:"filterOwnerOption"},standalone:!0,features:[e._Bn([],[{provide:c.gN,useExisting:c.sg}]),e.jDz],decls:33,vars:25,consts:[["appFormArrayErrorsContainer","",1,"table-responsive","mb-3"],["formArrayName","items",1,"table",3,"overriddenMessages"],[1,"caption-top"],["scope","col"],[1,"none"],["id","date",1,"required"],["id","value",1,"required"],["scope","colgroup","colspan","3"],["id","realRights_Share_1",1,"required"],["id","realRights_Share_2"],[4,"ngIf"],[3,"newItemFactory"],[3,"formGroupName",4,"ngFor","ngForOf"],["id","reduction"],[3,"formGroupName"],["scope","row",1,"mw-xs"],[1,"mw-lg"],["appFormControlErrorsContainer","",1,"input-group"],["formControlName","transferDate","type","text","aria-labelledby","date",1,"form-control",3,"inputMask","placeholder","overriddenMessages","dynMaxDate"],[1,"input-group-text"],[1,"fa-regular","fa-calendar-check"],["vwResetValueIfEmpty","","formControlName","transferValue","type","text","aria-labelledby","transferValue",1,"form-control",3,"inputMask","placeholder"],[1,"fa-solid","fa-euro-sign"],[1,"pe-0","mw-sm"],["formControlName","fractionOne","type","text","aria-labelledby","realRights_Share_1",1,"form-control",3,"inputMask","placeholder","overriddenMessages"],[1,"px-0","mw-md"],["formControlName","ownershipOne","aria-labelledby","realRights_Share_1","vw-form-select-options","",1,"form-select",3,"placeholder","options","ariaSelected"],[1,"ps-0","mw-md"],["formControlName","ownerOne","aria-labelledby","realRights_Share_1","vw-form-select-options","",1,"form-select",3,"placeholder","options","ariaSelected"],["formControlName","fractionTwo","type","text","aria-labelledby","realRights_Share_1",1,"form-control",3,"inputMask","placeholder","overriddenMessages"],["formControlName","ownershipTwo","aria-labelledby","realRights_Share_2","vw-form-select-options","",1,"form-select",3,"placeholder","options","ariaSelected"],["formControlName","ownerTwo","aria-labelledby","realRights_Share_2","vw-form-select-options","",1,"form-select",3,"placeholder","options","ariaSelected"],["class","mw-lg",4,"ngIf"],[1,"mw-xs"],[3,"vwVisibleIf","rowIndex"],["vwResetValueIfEmpty","","formControlName","reduction","type","text","aria-labelledby","reduction",1,"form-control",3,"inputMask","placeholder"]],template:function(h,u){1&h&&(e.TgZ(0,"div",0)(1,"table",1)(2,"caption",2),e._uU(3),e.ALo(4,"translate"),e.qZA(),e.TgZ(5,"thead")(6,"tr")(7,"th",3)(8,"label",4),e.ALo(9,"translate"),e._uU(10),e.ALo(11,"translate"),e.qZA()(),e.TgZ(12,"th",3)(13,"label",5),e._uU(14),e.ALo(15,"translate"),e.qZA()(),e.TgZ(16,"th",3)(17,"label",6),e._uU(18),e.ALo(19,"translate"),e.qZA()(),e.TgZ(20,"th",7)(21,"label",8),e._uU(22),e.ALo(23,"translate"),e.qZA()(),e.TgZ(24,"th",7)(25,"label",9),e._uU(26),e.ALo(27,"translate"),e.qZA()(),e.YNc(28,o,5,3,"ng-container",10),e.TgZ(29,"th",3),e._UZ(30,"app-form-array-add-row",11),e.qZA()()(),e.TgZ(31,"tbody"),e.YNc(32,i,41,39,"tr",12),e.qZA()()()),2&h&&(e.xp6(1),e.Q6J("overriddenMessages",u.overriddenMessages),e.xp6(2),e.Oqu(e.lcZ(4,11,u.t.DOMAIN.TRANSACTIONS)),e.xp6(5),e.uIk("aria-label",e.lcZ(9,13,u.t.ARIA_LABEL.ROW_NUMBER)),e.xp6(2),e.Oqu(e.lcZ(11,15,u.t.FORM.ROW_NUMBER)),e.xp6(4),e.Oqu(e.lcZ(15,17,u.t.TRANSACTIONS.date)),e.xp6(4),e.Oqu(e.lcZ(19,19,u.t.TRANSACTIONS.value)),e.xp6(4),e.hij("",e.lcZ(23,21,u.t.TRANSACTIONS.REALRIGHTS_SHARE)," 1"),e.xp6(4),e.hij("",e.lcZ(27,23,u.t.TRANSACTIONS.REALRIGHTS_SHARE)," 2"),e.xp6(2),e.Q6J("ngIf",u.isSales),e.xp6(2),e.Q6J("newItemFactory",u.newItemFactory),e.xp6(2),e.Q6J("ngForOf",u.arrayFormRows))},dependencies:[n.ax,n.O5,c.UX,c.Fj,c.EJ,c.JJ,c.JL,c.u,c.x0,c.CE,A.aw,A.X$,s.Zg,s.tS,s.wh,s.tJ,M.hg,M.LW,M.vA,M.IQ,y.zz,y.J6,M.OY,f.t4,O.zm,s.$9,s.Uw],encapsulation:2,changeDetection:0}),(0,l.gn)([O.aH],r.prototype,"newItemFactory",void 0)},7384:(E,I,a)=>{a.d(I,{g:()=>o});var l=a(655),n=a(4650),e=a(4006),c=a(8453),s=a(797),f=a(7402),_=a(7508),T=a(4290),O=a(167),M=a(8723),g=a(3416),A=a(5158);class o{constructor(){this.formGroupDirective=(0,n.f3M)(e.sg),this.genderOptions=f.uz,this.householdCategory=f.XH,this.householdCategoryOptions=f.k0,this.inssMask=s.kn,this.monthMask=s.Cy,this.t=(0,n.f3M)(_.$z),this.dynMaxDateChange=new n.vpe,this.filterOwnerOptionChange=new n.vpe}ngOnInit(){this.ctrls=this.formGroupDirective.form.controls}emitMaxDateChange(i){const t=i?i.value:"";this.dynMaxDateChange.emit(t?(0,M.t3)(t):(0,M.Lg)())}resetOwnerListAndInss(){this.ctrls.householdCategory.value===this.householdCategory.Mono&&(this.ctrls.partnerInss.reset(),this.ctrls.partnerInss.updateValueAndValidity(),this.ctrls.beneficiaryInss.updateValueAndValidity()),this.filterOwnerOptionChange.emit(this.ctrls.householdCategory.value===f.XH.Mono?this.ctrls.partnerGender.value:null)}setBeneficiaryGender(i){this.ctrls.beneficiaryGender.setValue(i),this.ctrls.partnerGender.setValue((0,f.pO)(i)),this.ctrls.householdCategory.value===f.XH.Mono&&this.filterOwnerOptionChange.emit((0,f.pO)(i))}}o.\u0275fac=function(i){return new(i||o)},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-transactions-form-inline"]],inputs:{dynMaxDate:"dynMaxDate",filterOwnerOption:"filterOwnerOption"},outputs:{dynMaxDateChange:"dynMaxDateChange",filterOwnerOptionChange:"filterOwnerOptionChange"},standalone:!0,features:[n._Bn([],[{provide:e.gN,useExisting:e.sg}]),n.jDz],decls:41,vars:32,consts:[[1,"row","g-2"],[1,"col-xl-3","col-md-6","mb-3"],["labelClass","form-label",3,"label"],["appFormControlErrorsContainer","",1,"input-group"],["formControlName","startMonth","type","text",1,"form-control",3,"inputMask","placeholder","overriddenMessages","blur"],[1,"input-group-text"],[1,"fa-regular","fa-calendar-check"],["formControlName","householdCategory","vw-form-select-options","",1,"form-select",3,"placeholder","options","ariaSelected","change"],["for","beneficiary-inss",1,"form-label","required"],["appFormControlErrorsContainer","",1,"row"],[1,"col-8"],["formControlName","beneficiaryInss","type","text",1,"form-control",3,"inputMask","placeholder","overriddenMessages","change"],[1,"fa-solid","fa-id-card"],[1,"col-4"],["color","outline-primary",3,"options","selectedOption","selectOption"],[1,"col-xl-3","col-md-6","mb-3",3,"vwVisibleIf"],["for","partner-inss",1,"form-label","required"],["formControlName","partnerInss","type","text",1,"form-control",3,"inputMask","placeholder","overriddenMessages","change"],[1,"btn","btn-outline-secondary","disabled"]],template:function(i,t){1&i&&(n.TgZ(0,"div",0)(1,"div",1)(2,"vw-form-field",2),n.ALo(3,"translate"),n.TgZ(4,"div",3)(5,"input",4),n.NdJ("blur",function(m){return t.emitMaxDateChange(m.target)}),n.ALo(6,"translate"),n.qZA(),n.TgZ(7,"span",5),n._UZ(8,"i",6),n.qZA()()()(),n.TgZ(9,"div",1)(10,"vw-form-field",2),n.ALo(11,"translate"),n.TgZ(12,"select",7),n.NdJ("change",function(){return t.resetOwnerListAndInss()}),n.ALo(13,"translate"),n.qZA()()(),n.TgZ(14,"div",1)(15,"label",8),n._uU(16),n.ALo(17,"translate"),n.qZA(),n.TgZ(18,"div",9)(19,"div",10)(20,"vw-form-field")(21,"div",3)(22,"input",11),n.NdJ("change",function(){return t.ctrls.partnerInss.updateValueAndValidity()}),n.qZA(),n.TgZ(23,"span",5),n._UZ(24,"i",12),n.qZA()()()(),n.TgZ(25,"div",13)(26,"vw-button-group",14),n.NdJ("selectOption",function(m){return t.setBeneficiaryGender(m)}),n.qZA()()()(),n.TgZ(27,"div",15)(28,"label",16),n._uU(29),n.ALo(30,"translate"),n.qZA(),n.TgZ(31,"div",9)(32,"div",10)(33,"vw-form-field")(34,"div",3)(35,"input",17),n.NdJ("change",function(){return t.ctrls.beneficiaryInss.updateValueAndValidity()}),n.qZA(),n.TgZ(36,"span",5),n._UZ(37,"i",12),n.qZA()()()(),n.TgZ(38,"div",13)(39,"div",18),n._uU(40),n.qZA()()()()()),2&i&&(n.xp6(2),n.s9C("label",n.lcZ(3,20,t.t.TRANSACTIONS.startMonth)),n.xp6(3),n.s9C("placeholder",n.lcZ(6,22,t.t.FORM.MONTH_FORMAT)),n.Q6J("inputMask",t.monthMask.options)("overriddenMessages",t.monthMask.errorMessage),n.xp6(5),n.Q6J("label",n.lcZ(11,24,t.t.TRANSACTIONS.householdCategory)),n.xp6(2),n.s9C("placeholder",n.lcZ(13,26,t.t.FORM.CHOOSE)),n.Q6J("options",t.householdCategoryOptions)("ariaSelected",t.ctrls.householdCategory.value),n.xp6(4),n.Oqu(n.lcZ(17,28,t.t.TRANSACTIONS.BENEFICIARYINSSGENDER)),n.xp6(6),n.s9C("placeholder",t.inssMask.placeholder),n.Q6J("inputMask",t.inssMask.options)("overriddenMessages",t.inssMask.errorMessage),n.xp6(4),n.Q6J("options",t.genderOptions)("selectedOption",t.ctrls.beneficiaryGender.value),n.xp6(1),n.Q6J("vwVisibleIf","DUO"===t.ctrls.householdCategory.value),n.xp6(2),n.Oqu(n.lcZ(30,30,t.t.TRANSACTIONS.partnerInss)),n.xp6(6),n.s9C("placeholder",t.inssMask.placeholder),n.Q6J("inputMask",t.inssMask.options)("overriddenMessages",t.inssMask.errorMessage),n.xp6(5),n.Oqu(t.ctrls.partnerGender.value))},dependencies:[e.UX,e.Fj,e.EJ,e.JJ,e.u,g.aw,g.X$,c.Zg,c.tS,O.hg,O.LW,O.vA,O.IQ,A.zz,A.J6,T.zm,O.Kb],encapsulation:2,changeDetection:0}),(0,l.gn)([T.aH],o.prototype,"dynMaxDate",void 0),(0,l.gn)([T.aH],o.prototype,"filterOwnerOption",void 0)},797:(E,I,a)=>{a.d(I,{dU:()=>N,t4:()=>D,Ox:()=>m,Pu:()=>r,X8:()=>h,WS:()=>i,kn:()=>p,jH:()=>t,Cy:()=>u});var l=a(5158);const n={showMaskOnFocus:!1,showMaskOnHover:!1,undoOnEscape:!1},e={groupSeparator:" ",allowMinus:!1,shortcuts:{k:"",m:""}},c=(0,l.Xf)({...n,mask:"99.99.99-999.99"}),s=(0,l.Xf)({...n,regex:"^[1-9]\\d*/[1-9]\\d*$"}),f=(0,l.Xf)({...n,alias:"integer",...e}),_=(0,l.Xf)({...n,alias:"currency",...e,radixPoint:","}),T=(0,l.Xf)({..._,digits:4}),O=(0,l.Xf)({...n,inputmode:"text",alias:"datetime",inputFormat:"dd/mm/yyyy",placeholder:"_"}),M=(0,l.Xf)({...O,inputFormat:"mm/yyyy"}),g={inputMask:C=>({key:"INVALID_MONTH_FORMAT",interpolateParams:{requiredMask:M.inputFormat?.toUpperCase()}})},A={inputMask:C=>({key:"INVALID_DATE_FORMAT",interpolateParams:{requiredMask:O.inputFormat?.toUpperCase()}})},p={options:c,placeholder:"00.00.00-000.00",errorMessage:{inputMask:C=>({key:"INVALID_FORMAT",interpolateParams:{requiredMask:"00.00.00-000.00"}})}},i={options:s,placeholder:"1/1",errorMessage:{inputMask:C=>({key:"INVALID_FRACTION"})}},t={options:f,placeholder:"0"},r={options:_,placeholder:"0,00"},m={options:T,placeholder:"0,0000"},h={options:O,errorMessage:A},u={options:M,errorMessage:g};var w=a(4650),d=a(4006);let D=(()=>{class C{constructor(){this.elRef=(0,w.f3M)(w.SBq,{self:!0}),this.formControlNameDirective=(0,w.f3M)(d.u,{self:!0})}onBlur(){""!==this.formControlNameDirective.control.value&&""===this.elRef.nativeElement.value&&this.formControlNameDirective.control.setValue("")}}return C.\u0275fac=function(v){return new(v||C)},C.\u0275dir=w.lG2({type:C,selectors:[["input","formControlName","","vwResetValueIfEmpty",""]],hostBindings:function(v,Z){1&v&&w.NdJ("blur",function(){return Z.onBlur()})},standalone:!0}),C})();const N=[l.zz,D]}}]);