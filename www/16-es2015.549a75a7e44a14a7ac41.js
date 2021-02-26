(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"9m8Z":function(e,t,n){"use strict";n.r(t),n.d(t,"AddDeviceTemplatePageModule",function(){return h});var o=n("ofXK"),i=n("3Pt+"),r=n("TEn/"),l=n("tyNb"),c=n("fXoL"),b=n("9AFS");function a(e,t){1&e&&(c.Pb(0,"div",16),c.nc(1," To add Device template please fill out this field "),c.Ob())}function d(e,t){1&e&&(c.Pb(0,"div",16),c.nc(1," Please fill out this field "),c.Ob())}function s(e,t){if(1&e&&(c.Pb(0,"div",17),c.Pb(1,"ion-item-group"),c.Pb(2,"ion-list"),c.Pb(3,"ion-item"),c.Pb(4,"ion-label"),c.nc(5),c.Ob(),c.Ob(),c.Pb(6,"ion-item"),c.Pb(7,"ion-label"),c.nc(8),c.Ob(),c.Ob(),c.Pb(9,"ion-item"),c.Pb(10,"ion-label"),c.nc(11),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Ob()),2&e){const e=t.$implicit;c.Cb(5),c.oc(e.value.frecuency),c.Cb(3),c.oc(e.value.unit),c.Cb(3),c.oc(e.value.schema)}}const m=function(){return["add-telemetry"]},u=function(){return["add-property"]},p=function(){return["add-command"]};let f=(()=>{class e{constructor(e){this.deviceTemplateService=e,this.telemetries=[],this.deviceTemplateForm=new i.c({name:new i.a("",[i.l.required]),isEdge:new i.a(!0),type:new i.a("",[i.l.required])})}ngOnInit(){this.telemetries=this.deviceTemplateService.getArrayTelemetries(),console.log("Here I Am Inside add: "),console.log(this.telemetries)}onSubmit(){console.log(this.deviceTemplateForm.value)}}return e.\u0275fac=function(t){return new(t||e)(c.Mb(b.a))},e.\u0275cmp=c.Gb({type:e,selectors:[["app-add-device-template"]],decls:43,vars:13,consts:[["slot","start"],[1,"ion-text-center"],["slot","end","size","large","src","assets/icon/deviceTemplate.svg"],[3,"formGroup","ngSubmit"],["position","stacked"],["type","text","formControlName","name",1,"form-control"],["class","error",4,"ngIf"],["formControlName","isEdge","checked","true",1,"form-control"],["lines","full"],["value","sensor","okText","Okay","cancelText","Dismiss","formControlName","type"],["value","sensor"],["value","actuator"],["detail","",3,"routerLink"],["expand","block ","type","submit ","shape","round ","fill","solid ","type","submit",1,"btn","btn-success",3,"disabled"],[1,"telemetries"],["class","telemetry",4,"ngFor","ngForOf"],[1,"error"],[1,"telemetry"]],template:function(e,t){1&e&&(c.Pb(0,"ion-header"),c.Pb(1,"ion-toolbar"),c.Nb(2,"ion-back-button",0),c.Pb(3,"ion-title",1),c.nc(4,"Add device template"),c.Ob(),c.Nb(5,"ion-icon",2),c.Ob(),c.Ob(),c.Pb(6,"ion-content"),c.Pb(7,"form",3),c.Xb("ngSubmit",function(){return t.onSubmit()}),c.Pb(8,"ion-item"),c.Pb(9,"ion-label",4),c.nc(10,"Device template name"),c.Ob(),c.Nb(11,"ion-input",5),c.mc(12,a,2,0,"div",6),c.Ob(),c.Pb(13,"ion-item"),c.Pb(14,"ion-label"),c.nc(15,"isEdge"),c.Ob(),c.Nb(16,"ion-toggle",7),c.Ob(),c.Pb(17,"ion-item",8),c.Pb(18,"ion-label"),c.nc(19,"Device type"),c.Ob(),c.Pb(20,"ion-select",9),c.mc(21,d,2,0,"div",6),c.Pb(22,"ion-select-option",10),c.nc(23,"Sensor"),c.Ob(),c.Pb(24,"ion-select-option",11),c.nc(25,"Actuator"),c.Ob(),c.Ob(),c.Ob(),c.Pb(26,"ion-item",12),c.Pb(27,"ion-label"),c.nc(28,"Telemetries"),c.Ob(),c.Ob(),c.Pb(29,"ion-item",12),c.Pb(30,"ion-label"),c.nc(31,"Properties"),c.Ob(),c.Ob(),c.Pb(32,"ion-item",12),c.Pb(33,"ion-label"),c.nc(34,"Commands"),c.Ob(),c.Ob(),c.Nb(35,"br"),c.Nb(36,"br"),c.Pb(37,"ion-button",13),c.nc(38,"Add Device template"),c.Ob(),c.Ob(),c.Pb(39,"div",14),c.mc(40,s,12,3,"div",15),c.ac(41,"keyvalue"),c.Ob(),c.Nb(42,"br"),c.Ob()),2&e&&(c.Cb(7),c.ec("formGroup",t.deviceTemplateForm),c.Cb(5),c.ec("ngIf",t.deviceTemplateForm.controls.name.errors&&t.deviceTemplateForm.controls.name.touched),c.Cb(9),c.ec("ngIf",t.deviceTemplateForm.controls.type.errors&&t.deviceTemplateForm.controls.type.touched),c.Cb(5),c.ec("routerLink",c.fc(10,m)),c.Cb(3),c.ec("routerLink",c.fc(11,u)),c.Cb(3),c.ec("routerLink",c.fc(12,p)),c.Cb(5),c.ec("disabled",!t.deviceTemplateForm.valid),c.Cb(3),c.ec("ngForOf",c.bc(41,8,t.telemetries)))},directives:[r.o,r.Q,r.e,r.f,r.O,r.p,r.m,i.m,i.i,i.d,r.s,r.y,r.r,r.X,i.h,i.b,o.j,r.P,r.b,r.F,r.W,r.G,r.V,l.h,r.h,o.i,r.u,r.z],pipes:[o.e],styles:[".error[_ngcontent-%COMP%]{font-size:small;color:tomato}"]}),e})();const v=[{path:"",component:f},{path:"add-device-template",component:f},{path:"add-property",loadChildren:()=>n.e(4).then(n.bind(null,"Tep1")).then(e=>e.AddPropertyPageModule)},{path:"add-telemetry",loadChildren:()=>n.e(5).then(n.bind(null,"Dv+b")).then(e=>e.AddTelemetryPageModule)},{path:"add-command",loadChildren:()=>n.e(3).then(n.bind(null,"aOUF")).then(e=>e.AddCommandPageModule)}];let P=(()=>{class e{}return e.\u0275mod=c.Kb({type:e}),e.\u0275inj=c.Jb({factory:function(t){return new(t||e)},imports:[[l.i.forChild(v)],l.i]}),e})();var O=n("7EHt");let h=(()=>{class e{}return e.\u0275mod=c.Kb({type:e}),e.\u0275inj=c.Jb({factory:function(t){return new(t||e)},imports:[[o.b,i.e,r.R,P,i.k,O.a]]}),e})()}}]);