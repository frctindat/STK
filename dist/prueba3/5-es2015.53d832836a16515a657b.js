(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{bj8i:function(o,t,e){"use strict";e.r(t),e.d(t,"EquipoModule",(function(){return g}));var i=e("tyNb"),n=e("3Pt+"),r=e("fXoL");let b=(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=r.Db({type:o,selectors:[["app-sin-equipo"]],decls:2,vars:0,template:function(o,t){1&o&&(r.Mb(0,"h3"),r.fc(1,"Seleccione un Equipo"),r.Lb())},styles:[""]}),o})();var c=e("f/BU"),a=e("ofXK");function s(o,t){if(1&o){const o=r.Nb();r.Mb(0,"div",20),r.Mb(1,"div",21),r.Kb(2,"input",22),r.Lb(),r.Mb(3,"div",23),r.Kb(4,"input",24),r.Lb(),r.Mb(5,"div",23),r.Mb(6,"button",25),r.Ub("click",(function(){r.bc(o);const e=t.index;return r.Wb().onBorrarComponenteDelEquipo(e)})),r.fc(7,"X"),r.Lb(),r.Lb(),r.Lb()}2&o&&r.Xb("formGroupName",t.index)}let u=(()=>{class o{constructor(o,t,e){this.RutaActiva=o,this.ServicioEquipos=t,this.Ruteo=e,this.bEdita=!0}get controls(){return this.FormEquipo.get("Componentes").controls}ngOnInit(){this.RutaActiva.params.subscribe(o=>{this.id=+o.id,this.bEdita=null!=o.id,this.InitForm()})}InitForm(){let o=0,t="",e="",i="",r=0,b="",c=new n.b([]);if(this.bEdita){const a=this.ServicioEquipos.getUnEquipo(this.id);if(o=a.Id,t=a.Proveedor,e=a.Categ,i=a.Descripcion,r=a.PVenta,b=a.Foto,console.log(a),a.Componentes)for(let o of a.Componentes)c.push(new n.f({detalle:new n.d(o.detalle,n.r.required),cantidad:new n.d(o.cantidad,[n.r.required])}))}this.FormEquipo=new n.f({Id:new n.d(o),Proveedor:new n.d(t,n.r.required),Categ:new n.d(e,n.r.required),Descripcion:new n.d(i,n.r.required),PVenta:new n.d(r),Foto:new n.d(b,n.r.required),Componentes:c}),console.log(this.FormEquipo.value)}onSubmit(){console.log("onsumite"),this.bEdita?this.ServicioEquipos.ActualizaEquipo(this.id,this.FormEquipo.value):this.ServicioEquipos.AgregaEquipo(this.FormEquipo.value),this.Ruteo.navigate(["/equipos"])}onAgregarComponente(){console.log("llega"),this.FormEquipo.get("Componentes").push(new n.f({detalle:new n.d(null,n.r.required),cantidad:new n.d(null,[n.r.required,n.r.pattern(/^[1-9]+[0-9]*$/)])}))}onCancelarEdicion(){this.Ruteo.navigate(["/equipos"])}onBorrarComponenteDelEquipo(o){this.FormEquipo.get("Componentes").removeAt(o)}}return o.\u0275fac=function(t){return new(t||o)(r.Jb(i.a),r.Jb(c.a),r.Jb(i.c))},o.\u0275cmp=r.Db({type:o,selectors:[["app-equipo-edit"]],decls:40,vars:4,consts:[[1,"row"],[1,"col-xs-12"],[3,"formGroup","ngSubmit"],["type","submit",1,"btn","btn-success",3,"disabled"],["type","button",1,"btn","btn-danger",3,"click"],[1,"form-group"],["for","Provee"],["type","text","id","Provee","formControlName","Proveedor",1,"form-control"],["for","Categ"],["type","text","id","Categ","formControlName","Categ",1,"form-control"],["for","Foto"],["type","text","id","Foto","formControlName","Foto",1,"form-control"],["imagen",""],[1,"div"],[1,"img-responsive",3,"src"],["for","Descrip"],["type","text","id","Descrip","rows","6","formControlName","Descripcion",1,"form-control"],["formArrayName","Componentes",1,"col-xs-12"],["class","row","style","margin-top: 10px;",3,"formGroupName",4,"ngFor","ngForOf"],["type","button",1,"btn","btn-success",3,"click"],[1,"row",2,"margin-top","10px",3,"formGroupName"],[1,"col-xs-8"],["type","text","formControlName","detalle",1,"form-control"],[1,"col-xs-2"],["type","number","formControlName","cantidad",1,"form-control"],[1,"btn","btn-danger",3,"click"]],template:function(o,t){if(1&o&&(r.Mb(0,"div",0),r.Mb(1,"div",1),r.Mb(2,"form",2),r.Ub("ngSubmit",(function(){return t.onSubmit()})),r.Mb(3,"div",0),r.Mb(4,"div",1),r.Mb(5,"button",3),r.fc(6," Guardar "),r.Lb(),r.Mb(7,"button",4),r.Ub("click",(function(){return t.onCancelarEdicion()})),r.fc(8," Cancelar "),r.Lb(),r.Lb(),r.Lb(),r.Kb(9,"br"),r.Mb(10,"div",0),r.Mb(11,"div",1),r.Mb(12,"div",5),r.Mb(13,"label",6),r.fc(14,"Proveedor"),r.Lb(),r.Kb(15,"input",7),r.Mb(16,"label",8),r.fc(17,"Categor\xeda"),r.Lb(),r.Kb(18,"input",9),r.Mb(19,"label",10),r.fc(20,"Im\xe1gen"),r.Lb(),r.Kb(21,"input",11,12),r.Lb(),r.Lb(),r.Mb(23,"div",13),r.Mb(24,"div",1),r.Kb(25,"img",14),r.Lb(),r.Lb(),r.Mb(26,"div",13),r.Mb(27,"div",1),r.Mb(28,"label",15),r.fc(29,"Descripci\xf3n"),r.Lb(),r.Mb(30,"textarea",16),r.fc(31,"                        "),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Mb(32,"div",0),r.Mb(33,"div",17),r.ec(34,s,8,1,"div",18),r.Kb(35,"hr"),r.Mb(36,"div",0),r.Mb(37,"div",1),r.Mb(38,"button",19),r.Ub("click",(function(){return t.onAgregarComponente()})),r.fc(39," Agregar "),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb()),2&o){const o=r.ac(22);r.zb(2),r.Xb("formGroup",t.FormEquipo),r.zb(3),r.Xb("disabled",!t.FormEquipo.valid),r.zb(20),r.Xb("src",o.value,r.cc),r.zb(9),r.Xb("ngForOf",t.controls)}},directives:[n.s,n.k,n.g,n.a,n.j,n.e,n.c,a.h,n.h,n.n],styles:["input.ng-invalid.ng-touched[_ngcontent-%COMP%], textarea.ng-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}"]}),o})();var p=e("bLb/"),l=e("kI2M");function d(o,t){if(1&o&&(r.Mb(0,"li",10),r.fc(1),r.Lb()),2&o){const o=t.$implicit;r.zb(1),r.ic(" ",o.detalle,": ",o.cantidad," ")}}const m=[{path:"",component:b},{path:"nuevo",component:u},{path:":id",component:(()=>{class o{constructor(o,t,e,i){this.SrvComponente=o,this.SrvEquipo=t,this.RutaActiva=e,this.RutaDestino=i}ngOnInit(){this.RutaActiva.params.subscribe(o=>{this.oEquipoDetalle=this.SrvEquipo.getUnEquipo(+o.id)})}onAgregarComponentesALista(){this.SrvComponente.addComponentesDeEquipo(this.oEquipoDetalle.Componentes)}onEditar(){this.RutaDestino.navigate(["editar"],{relativeTo:this.RutaActiva})}onBorrarEquipo(){this.SrvEquipo.BorrarEquipo(this.id)}}return o.\u0275fac=function(t){return new(t||o)(r.Jb(p.a),r.Jb(c.a),r.Jb(i.a),r.Jb(i.c))},o.\u0275cmp=r.Db({type:o,selectors:[["app-equipos-detalle"]],decls:30,vars:4,consts:[[1,"row"],[1,"col-xs-12"],["alt","",1,"img-responsive",3,"src"],["appActivarMenu","",1,"btn-group"],["type","button",1,"btn","btn-primary","dropdown-toggle"],[1,"caret"],[1,"dropdown-menu"],[2,"cursor","pointer",3,"click"],[1,"list-group"],["class","list-group-item",4,"ngFor","ngForOf"],[1,"list-group-item"]],template:function(o,t){1&o&&(r.Mb(0,"div",0),r.Mb(1,"div",1),r.Kb(2,"img",2),r.Lb(),r.Lb(),r.Mb(3,"div",0),r.Mb(4,"div",1),r.Mb(5,"h1"),r.fc(6,"Detalle de equipo"),r.Lb(),r.Lb(),r.Lb(),r.Mb(7,"div",0),r.Mb(8,"div",1),r.Mb(9,"div",3),r.Mb(10,"button",4),r.fc(11," Gestionar "),r.Kb(12,"span",5),r.Lb(),r.Mb(13,"ul",6),r.Mb(14,"li"),r.Mb(15,"a",7),r.Ub("click",(function(){return t.onAgregarComponentesALista()})),r.fc(16,"Agregar componentes"),r.Lb(),r.Lb(),r.Mb(17,"li"),r.Mb(18,"a",7),r.Ub("click",(function(){return t.onEditar()})),r.fc(19,"Editar"),r.Lb(),r.Lb(),r.Mb(20,"li"),r.Mb(21,"a",7),r.Ub("click",(function(){return t.onBorrarEquipo()})),r.fc(22,"Eliminar"),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Mb(23,"div",0),r.Mb(24,"div",1),r.fc(25),r.Lb(),r.Lb(),r.Mb(26,"div",0),r.Mb(27,"div",1),r.Mb(28,"ul",8),r.ec(29,d,2,2,"li",9),r.Lb(),r.Lb(),r.Lb()),2&o&&(r.zb(2),r.Yb("src",t.oEquipoDetalle.Foto,r.cc),r.zb(23),r.ic(" ",t.oEquipoDetalle.Categ," / ",t.oEquipoDetalle.Descripcion," "),r.zb(4),r.Xb("ngForOf",t.oEquipoDetalle.Componentes))},directives:[l.a,a.h],styles:[""]}),o})()},{path:":id/editar",component:u}];let f=(()=>{class o{}return o.\u0275mod=r.Hb({type:o}),o.\u0275inj=r.Gb({factory:function(t){return new(t||o)},imports:[[i.f.forChild(m)],i.f]}),o})();var v=e("VGdt");let g=(()=>{class o{}return o.\u0275mod=r.Hb({type:o}),o.\u0275inj=r.Gb({factory:function(t){return new(t||o)},imports:[[i.f,v.a,n.p,f]]}),o})()}}]);