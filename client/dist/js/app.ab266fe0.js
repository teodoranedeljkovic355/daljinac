(function(e){function t(t){for(var o,s,c=t[0],i=t[1],l=t[2],d=0,v=[];d<c.length;d++)s=c[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&v.push(r[s][0]),r[s]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);u&&u(t);while(v.length)v.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],o=!0,c=1;c<a.length;c++){var i=a[c];0!==r[i]&&(o=!1)}o&&(n.splice(t--,1),e=s(s.s=a[0]))}return e}var o={},r={app:0},n=[];function s(t){if(o[t])return o[t].exports;var a=o[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=o,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(a,o,function(t){return e[t]}.bind(null,o));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=i;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"05f5":function(e,t,a){e.exports=a.p+"img/404.6695af99.svg"},"0809":function(e,t,a){"use strict";var o=a("9bcd"),r=a.n(o);r.a},1:function(e,t){},2:function(e,t){},3:function(e,t){},"325b":function(e,t,a){"use strict";var o=a("53f7"),r=a.n(o);r.a},3500:function(e,t,a){var o={"./bedroom.jpeg":"b68d","./kidsroom.jpeg":"5d12","./kitchen.jpeg":"62fb","./livingroom.jpeg":"9158","./pexels-plavadevojka.jpeg":"47cb"};function r(e){var t=n(e);return a(t)}function n(e){if(!a.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=n,e.exports=r,r.id="3500"},3607:function(e,t,a){"use strict";var o=a("b3f4"),r=a.n(o);r.a},4:function(e,t){},"47cb":function(e,t,a){e.exports=a.p+"img/pexels-plavadevojka.b2af4594.jpeg"},"53f7":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-content",[a("router-view")],1)],1)},n=[],s=a("ecee"),c=a("c074"),i=a("ad3d");s["c"].add(c["a"]),o["default"].component("font-awesome-icon",i["a"]);var l={name:"App",components:{},data:function(){return{}},methods:{loggedIn:function(){return!!localStorage.getItem("token")},logOut:function(){localStorage.removeItem("token")}}},u=l,d=(a("82a6"),a("2877")),v=a("6544"),m=a.n(v),p=a("7496"),f=a("a75b"),g=Object(d["a"])(u,r,n,!1,null,"1d02b810",null),h=g.exports;m()(g,{VApp:p["a"],VContent:f["a"]});var b=a("f309");o["default"].use(b["a"]);var w=new b["a"]({icons:{iconfont:"mdi"}}),_=(a("d1e78"),a("8c4f")),x=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-dialog",{attrs:{"overlay-opacity":"0.75",width:"400px"},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on;return[a("v-btn",e._g({staticClass:"ma-4",attrs:{color:"blue accent-3",dark:""}},o),[e._v("Register")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-form",{ref:"form",attrs:{"lazy-validation":e.lazy},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-card",[a("v-card-title",{staticClass:"justify-center"},[a("v-row",[a("v-col",{attrs:{cols:"10"}},[a("span",{staticClass:"headline"},[e._v("Make user profile")])]),a("v-col",{attrs:{cols:"2"}},[a("v-btn",{attrs:{icon:"",color:"blue darken-1"},on:{click:e.close}},[a("v-icon",{attrs:{medium:""}},[e._v("mdi-close")])],1)],1)],1)],1),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:"Email*",rules:e.emailRules,filled:"",rounded:"",dense:"",required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:"Username*",filled:"",rounded:"",dense:"",required:""},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}})],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:"Password*",required:"",filled:"",rounded:"",dense:"","append-icon":e.show1?"mdi-eye":"mdi-eye-off",rules:[e.rules.required,e.rules.min],type:e.show1?"text":"password",hint:"At least 5 characters",counter:""},on:{"click:append":function(t){e.show1=!e.show1}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1)],1)],1),a("small",[e._v("*indicates required field")])],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:[e.registerUser,function(t){e.alert=!e.alert}]}},[e._v(" Register")])],1)],1)],1),a("v-alert",{attrs:{value:e.alert,color:"green",icon:"mdi-check-circle-outline",transition:"scale-transition"},model:{value:e.alertReg,callback:function(t){e.alertReg=t},expression:"alertReg"}},[e._v(" You are registred now! ")]),a("v-alert",{attrs:{value:e.alert,color:"red",icon:"mdi-check-circle-outline",transition:"scale-transition"},model:{value:e.alertLos,callback:function(t){e.alertLos=t},expression:"alertLos"}},[e._v(" There is already a user with this credentials! ")])],1)},V=[],k=(a("96cf"),a("1da1")),E=a("bc3a"),C=a.n(E),R=a("b05c"),y="".concat(R.DB_HOST);y="https://daljinac-api.herokuapp.com/api",console.log(y);var O={name:"Register",data:function(){return{username:"",password:"",dialog:!1,valid:!0,show1:!1,rules:{required:function(e){return!!e||"Required."},min:function(e){return e.length>=5||"Min 5 characters"}},email:"",emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/.+@.+\..+/.test(e)||"E-mail must be valid"}],lazy:!1}},methods:{registerUser:function(){var e=Object(k["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(y),e.next=3,C.a.post("./api/users",{username:this.username,password:this.password,email:this.email});case 3:t=e.sent,console.log(t);case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),reset:function(){this.$refs.form.reset()},close:function(){this.$refs.form.reset(),this.dialog=!1,this.alertReg=!1,this.alertLos=!1}}},j=O,S=(a("6051"),a("0798")),T=a("8336"),P=a("b0af"),I=a("99d9"),D=a("62ad"),N=a("a523"),B=a("169a"),A=a("4bd4"),U=a("132d"),L=a("0fd9"),$=a("2fa4"),F=a("8654"),H=Object(d["a"])(j,x,V,!1,null,"00387080",null),q=H.exports;m()(H,{VAlert:S["a"],VBtn:T["a"],VCard:P["a"],VCardActions:I["a"],VCardText:I["b"],VCardTitle:I["c"],VCol:D["a"],VContainer:N["a"],VDialog:B["a"],VForm:A["a"],VIcon:U["a"],VRow:L["a"],VSpacer:$["a"],VTextField:F["a"]});var M=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-app",{staticStyle:{background:"rgba(0,0,0,0)"}},[o("div",{attrs:{id:"bod"}},[o("v-container",[o("v-row",[o("v-col",{attrs:{cols:"8"}},[o("router-link",{attrs:{to:"/Homepage"}},[o("v-img",{attrs:{src:a("9b47"),"max-width":"240px","max-height":"70px"}})],1)],1),o("v-col",{attrs:{cols:"4","padding-top":"20px",align:"right"}},[o("Register"),o("Login")],1)],1)],1),o("v-spacer"),o("v-card-text"),o("v-content",[o("router-view")],1)],1)])},K=[],Y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-dialog",{attrs:{"overlay-opacity":"0.75",width:"400px"},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on;return[a("v-btn",e._g({staticClass:"ma-4",attrs:{color:"blue accent-3",dark:""}},o),[e._v("Log in")])]}}]),model:{value:e.dialog2,callback:function(t){e.dialog2=t},expression:"dialog2"}},[a("v-form",{ref:"form",attrs:{"lazy-validation":e.lazy},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-card",[a("v-card-title",{staticClass:"justify-center"},[a("v-row",[a("v-col",{attrs:{cols:"10"}},[a("span",{staticClass:"headline"},[e._v("Log in")])]),a("v-col",{attrs:{cols:"2"}},[a("v-btn",{attrs:{icon:"",color:"blue darken-1"},on:{click:e.close}},[a("v-icon",{attrs:{medium:""}},[e._v("mdi-close")])],1)],1)],1)],1),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:"Username*",filled:"",rounded:"",dense:"",required:""},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:"Password*",filled:"",rounded:"",dense:"",required:"","append-icon":e.show1?"mdi-eye":"mdi-eye-off",type:e.show1?"text":"password",counter:""},on:{"click:append":function(t){e.show1=!e.show1}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),a("v-row",[a("v-col",{staticClass:"text-center"},[a("router-link",{attrs:{to:"/forgotPass"}},[e._v("Forgot your password?")])],1)],1)],1)],1),a("small",[e._v("*indicates required field")])],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.loginUser}},[e._v("Log in")])],1)],1)],1)],1)},z=[],G=a("b05c"),J="".concat(G.DB_HOST,"/users/login");J="https://daljinac-api.herokuapp.com/api/users/login";var Q={name:"Login",data:function(){return{username:"",password:"",dialog2:!1,show1:!1,valid:!0}},methods:{loginUser:function(){var e=this;return Object(k["a"])(regeneratorRuntime.mark((function t(){var a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,console.log(J),t.next=4,C.a.post("./api/users/login",{username:e.username,password:e.password});case 4:a=t.sent,o=a.data,localStorage.setItem("token",o),localStorage.setItem("username",e.username),e.$router.push("/user"),t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))()},reset:function(){this.$refs.form.reset()},close:function(){this.$refs.form.reset(),this.dialog2=!1}}},W=Q,X=Object(d["a"])(W,Y,z,!1,null,"64efac72",null),Z=X.exports;m()(X,{VBtn:T["a"],VCard:P["a"],VCardActions:I["a"],VCardText:I["b"],VCardTitle:I["c"],VCol:D["a"],VContainer:N["a"],VDialog:B["a"],VForm:A["a"],VIcon:U["a"],VRow:L["a"],VSpacer:$["a"],VTextField:F["a"]}),s["c"].add(c["a"]),o["default"].component("font-awesome-icon",i["a"]);var ee={name:"Homepage",components:{Login:Z,Register:q},data:function(){return{dialog:!1}}},te=ee,ae=(a("0809"),a("adda")),oe=Object(d["a"])(te,M,K,!1,null,"5a072144",null),re=oe.exports;m()(oe,{VApp:p["a"],VCardText:I["b"],VCol:D["a"],VContainer:N["a"],VContent:f["a"],VImg:ae["a"],VRow:L["a"],VSpacer:$["a"]});var ne=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("NavigationBar"),o("h1",[e._v("Oops... that doesn't seem to exist")]),o("img",{attrs:{src:a("05f5"),alt:""}})],1)},se=[],ce=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-card",[o("v-toolbar",{staticClass:"header",attrs:{color:"#546E7A",dark:"",flat:""}},[o("v-container",[o("router-link",{attrs:{to:"/Homepage"}},[o("v-row",[o("v-col",{attrs:{cols:"4"}},[o("v-img",{attrs:{src:a("9b47"),"max-width":"240px","max-height":"70px"}})],1)],1)],1)],1),o("v-spacer"),o("v-card-text",[o("div",{attrs:{align:"right"}},[o("v-btn",{staticClass:"ma-4",attrs:{icon:""}},[o("v-icon",{attrs:{large:""}},[e._v("mdi-magnify")])],1),e.loggedIn()?o("v-btn",{staticClass:"ma-4",attrs:{color:"blue accent-3"},on:{click:e.logOut}},[e._v("Log out")]):o("v-btn",{staticClass:"ma-4",attrs:{color:"blue accent-3"}},[e._v("Login")]),o("v-btn",{staticClass:"ma-4",attrs:{color:"blue accent-3"}},[e._v("Contact us ")])],1)])],1),o("v-content",[o("router-view")],1)],1)},ie=[];s["c"].add(c["a"]),o["default"].component("font-awesome-icon",i["a"]);var le={name:"NavigationBar",components:{},data:function(){return{}},methods:{loggedIn:function(){return!!localStorage.getItem("token")},logOut:function(){localStorage.removeItem("token"),null==localStorage.getItem("token")&&(this.$router.push("Homepage"),localStorage.removeItem("username"))}}},ue=le,de=(a("325b"),a("71d9")),ve=Object(d["a"])(ue,ce,ie,!1,null,null,null),me=ve.exports;m()(ve,{VBtn:T["a"],VCard:P["a"],VCardText:I["b"],VCol:D["a"],VContainer:N["a"],VContent:f["a"],VIcon:U["a"],VImg:ae["a"],VRow:L["a"],VSpacer:$["a"],VToolbar:de["a"]});var pe={name:"NotFound",components:{NavigationBar:me}},fe=pe,ge=Object(d["a"])(fe,ne,se,!1,null,null,null),he=ge.exports,be=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("NavigationBar"),a("v-container",[a("br"),a("br"),a("v-row",[a("v-col",{attrs:{cols:"4",align:"center"}},[a("h1",[e._v(e._s(e.username)+" 's home")])])],1),a("v-row",[a("v-col",{attrs:{cols:"4",align:"center"}},[a("v-btn",{on:{click:function(t){e.dialog=!e.dialog}}},[e._v("New room")])],1)],1),a("v-row",e._l(e.user.rooms,(function(e){return a("Card",{key:e._id,attrs:{hover:"","max-width":"100px",title:e.name,deviceID:e.deviceID,"room-type":e.type}})})),1),a("v-row"),a("v-row",[a("v-dialog",{attrs:{"max-width":"400px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-card-title",[e._v("New Room")]),a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"1"}}),a("v-col",{attrs:{cols:"5"}},[a("v-text-field",{attrs:{label:"Room name"},model:{value:e.newRoomName,callback:function(t){e.newRoomName=t},expression:"newRoomName"}})],1),a("v-col",{attrs:{cols:"5"}},[a("v-text-field",{attrs:{label:"Device ID"},model:{value:e.newDeviceID,callback:function(t){e.newDeviceID=t},expression:"newDeviceID"}})],1)],1),a("v-row",[a("v-col",{attrs:{cols:"4"}}),a("v-col",[a("v-radio-group",{attrs:{column:"",label:"Room type"},model:{value:e.dialogm1,callback:function(t){e.dialogm1=t},expression:"dialogm1"}},[a("v-radio",{attrs:{label:"Living room",value:"livingroom"}}),a("v-radio",{attrs:{label:"Bedrooom",value:"bedroom"}}),a("v-radio",{attrs:{label:"Kitchen",value:"kitchen"}}),a("v-radio",{attrs:{label:"Kids room",value:"kidsroom"}})],1)],1)],1),a("v-row",[a("v-col",{attrs:{cols:"4"}}),a("v-col",[a("v-btn",{on:{click:e.newRoom}},[e._v("Add Room")])],1)],1)],1)],1)],1)],1)],1)],1)},we=[],_e=(a("9ed4"),function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-hover",{scopedSlots:e._u([{key:"default",fn:function(t){var r=t.hover;return[o("v-card",{staticClass:"mx-auto my-12",attrs:{elevation:r?24:6,loading:e.loading,"max-width":"300"}},[o("v-img",{attrs:{height:"150",src:a("3500")("./"+e.roomType+".jpeg")}}),o("v-card-title",[e._v(e._s(e.$props.title))]),o("v-card-text",[o("v-row",{attrs:{align:"center"}},[o("v-col",{staticClass:"display-2",attrs:{cols:"6"}},[e._v("23°C")])],1)],1),o("v-divider",{staticClass:"mx-4"}),o("v-card-text",[o("div",{attrs:{align:"center"}},[o("v-btn",{staticClass:"ma-4",attrs:{icon:"",color:"green"}},[o("v-icon",{attrs:{large:""}},[e._v("mdi-power-standby")])],1),o("v-btn",{staticClass:"ma-4",attrs:{icon:"",color:"blue"}},[o("v-icon",{attrs:{large:""}},[e._v("mdi-chevron-up-circle-outline")])],1),o("v-btn",{staticClass:"ma-4",attrs:{icon:"",color:"blue"}},[o("v-icon",{attrs:{large:""}},[e._v("mdi-chevron-down-circle-outline")])],1)],1)])],1)]}}])})}),xe=[],Ve=(a("a9e3"),{name:"Card",data:function(){return{}},props:{title:String,deviceID:Number,roomType:String}}),ke=Ve,Ee=a("ce7e"),Ce=a("ce87"),Re=Object(d["a"])(ke,_e,xe,!1,null,"2e8aa878",null),ye=Re.exports;m()(Re,{VBtn:T["a"],VCard:P["a"],VCardText:I["b"],VCardTitle:I["c"],VCol:D["a"],VDivider:Ee["a"],VHover:Ce["a"],VIcon:U["a"],VImg:ae["a"],VRow:L["a"]});var Oe=a("b05c"),je=Oe,Se="".concat(je.DB_HOST,"/users/"),Te=("".concat(Se,"/room/"),{name:"User",data:function(){return{user:null,username:"",rooms:[],dataReady:!1,dialog:!1,newRoomName:"",newDeviceID:"",type:"",dialogm1:null}},components:{Card:ye,NavigationBar:me},methods:{newRoom:function(){var e=this,t=localStorage.getItem("token");C.a.put("./api/users/room/".concat(this.username),{name:this.newRoomName,deviceID:this.newDeviceID,type:this.dialogm1},{headers:{authorization:"Bearer ".concat(t)}}).then((function(a){console.log(a),C.a.get("./api/users/".concat(e.username),{headers:{Authorization:"Bearer ".concat(t)}}).then((function(t){e.user=t.data,e.dataReady=!0,console.log(t.data.rooms)}))}))},loggedIn:function(){return!!localStorage.getItem("token")},logOut:function(){localStorage.removeItem("token")}},mounted:function(){var e=this;this.username=localStorage.getItem("username"),C.a.get("./api/users/".concat(this.username)).then((function(t){e.user=t.data,e.dataReady=!0}))}}),Pe=Te,Ie=(a("3607"),a("67b6")),De=a("43a6"),Ne=Object(d["a"])(Pe,be,we,!1,null,null,null),Be=Ne.exports;m()(Ne,{VBtn:T["a"],VCard:P["a"],VCardTitle:I["c"],VCol:D["a"],VContainer:N["a"],VDialog:B["a"],VRadio:Ie["a"],VRadioGroup:De["a"],VRow:L["a"],VTextField:F["a"]});var Ae=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("NavigationBar"),a("v-container",[a("br"),a("br"),a("br"),a("v-form",[a("v-row",[a("v-col",{attrs:{cols:"4"}},[a("v-text-field",{attrs:{label:"Enter your e-mail address",filled:"",rounded:"",dense:"",required:""},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}})],1)],1),a("div",[a("v-row",[a("v-col",{attrs:{cols:"4",align:"center"}},[a("v-btn",{attrs:{color:"blue accent-3",dark:""},on:{click:e.sendEmail}},[e._v("Send E-mail")])],1)],1)],1)],1)],1)],1)},Ue=[],Le={name:"ForgotPass",data:function(){return{username:""}},components:{NavigationBar:me},methods:{sendEmail:function(){var e=Object(k["a"])(regeneratorRuntime.mark((function e(){var t,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t="http://localhost:3000/users/forgotPass/",e.prev=1,e.next=4,C.a.get(t+this.username);case 4:a=e.sent,console.log(a),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,this,[[1,8]])})));function t(){return e.apply(this,arguments)}return t}()}},$e=Le,Fe=Object(d["a"])($e,Ae,Ue,!1,null,null,null),He=Fe.exports;m()(Fe,{VBtn:T["a"],VCol:D["a"],VContainer:N["a"],VForm:A["a"],VRow:L["a"],VTextField:F["a"]});var qe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-container",[a("v-row",[a("h1",[e._v("Change Pass")])]),a("v-row",[a("v-col",{attrs:{cols:"3"}},[a("v-text-field",{attrs:{outlined:"",label:"New Password"},model:{value:e.newPass,callback:function(t){e.newPass=t},expression:"newPass"}})],1)],1),a("v-row",[a("v-col",{attrs:{cols:"1"}}),a("v-col",[a("v-btn",{on:{click:e.changePass}},[e._v("Change password")])],1)],1)],1)],1)},Me=[],Ke=a("b05c");"".concat(Ke.DB_HOST,"/users/changePass");var Ye={name:"ChangePass",data:function(){return{newPass:""}},methods:{changePass:function(){var e=Object(k["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(this.$route.params.token),e.prev=1,e.next=4,C.a.put("./api/users/changePass",{token:this.$route.params.token,newPass:this.newPass});case 4:e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](1),console.log(e.t0);case 9:case"end":return e.stop()}}),e,this,[[1,6]])})));function t(){return e.apply(this,arguments)}return t}()}},ze=Ye,Ge=Object(d["a"])(ze,qe,Me,!1,null,null,null),Je=Ge.exports;m()(Ge,{VBtn:T["a"],VCol:D["a"],VContainer:N["a"],VRow:L["a"],VTextField:F["a"]});var Qe=a("ce5b"),We=a.n(Qe);o["default"].config.productionTip=!1,o["default"].use(We.a),o["default"].use(_["a"]);var Xe=[{path:"/",component:re},{path:"/homepage",component:re},{path:"/register",component:q},{path:"/login",component:Z},{path:"/user",component:Be},{path:"/forgotPass",component:He},{path:"/changePass/:token",component:Je},{path:"*",component:he}],Ze=new _["a"]({routes:Xe,mode:"history"});new o["default"]({vuetify:w,router:Ze,render:function(e){return e(h)}}).$mount("#app")},"5d12":function(e,t,a){e.exports=a.p+"img/kidsroom.dd787eba.jpeg"},6051:function(e,t,a){"use strict";var o=a("9cee"),r=a.n(o);r.a},"62fb":function(e,t,a){e.exports=a.p+"img/kitchen.73d4aa9a.jpeg"},"82a6":function(e,t,a){"use strict";var o=a("fe33"),r=a.n(o);r.a},9158:function(e,t,a){e.exports=a.p+"img/livingroom.2d0dc385.jpeg"},"9b47":function(e,t,a){e.exports=a.p+"img/e.b00e6803.svg"},"9bcd":function(e,t,a){},"9cee":function(e,t,a){},b05c:function(e,t,a){a("ed17").config();var o={};o.PORT=Object({NODE_ENV:"production",VUE_APP_SECRET_KEY:"tajnica",BASE_URL:"/"}).PORT||3e3,o.SECRET_KEY=Object({NODE_ENV:"production",VUE_APP_SECRET_KEY:"tajnica",BASE_URL:"/"}).SECRET_KEY||"secret_key",o.EMAIL_SECRET=Object({NODE_ENV:"production",VUE_APP_SECRET_KEY:"tajnica",BASE_URL:"/"}).EMAIL_SECRET||"secret_email",o.DB_HOST=Object({NODE_ENV:"production",VUE_APP_SECRET_KEY:"tajnica",BASE_URL:"/"}).DB_HOST||"http://localhost:3000/api",o.FRONT_HOST=Object({NODE_ENV:"production",VUE_APP_SECRET_KEY:"tajnica",BASE_URL:"/"}).FRONT_HOST||"http://localhost:8080",o.MONGODB_URI=Object({NODE_ENV:"production",VUE_APP_SECRET_KEY:"tajnica",BASE_URL:"/"}).MONGODB_URI,console.log("hi from config"),e.exports=o},b3f4:function(e,t,a){},b68d:function(e,t,a){e.exports=a.p+"img/bedroom.055a1afb.jpeg"},fe33:function(e,t,a){}});
//# sourceMappingURL=app.ab266fe0.js.map