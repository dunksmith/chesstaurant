webpackJsonp([0],{"5s8Z":function(t,n){},"7Otq":function(t,n,e){t.exports=e.p+"static/img/logo.408e002.png"},CaCj:function(t,n){},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s=e("7+uW"),o={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]};var a=e("VU/8")({name:"App"},o,!1,function(t){e("ZjPa")},null,null).exports,i=e("/ocq"),r={data:function(){return{password:null}},methods:{checkPassword:function(){return"smithlist"===this.password?this.$router.push("/main-options"):(alert("wrong password"),this.password=null),!1}}},u={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"main"}},[e("form",{on:{submit:function(n){return t.checkPassword()}}},[e("label",[t._v("Please enter password:")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",name:"password",autofocus:""},domProps:{value:t.password},on:{input:function(n){n.target.composing||(t.password=n.target.value)}}})])])},staticRenderFns:[]};var c=e("VU/8")(r,u,!1,function(t){e("5s8Z")},"data-v-1b261e08",null).exports,l={render:function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{attrs:{id:"main"}},[s("img",{attrs:{src:e("7Otq"),height:"300"}}),t._v(" "),s("div",{staticClass:"parent"},[s("input",{staticClass:"food-btn",attrs:{type:"button",value:"Order food"},on:{click:function(n){return t.goToFood()}}}),t._v(" "),s("input",{staticClass:"food-btn",attrs:{type:"button",value:"Order board game"},on:{click:function(n){return t.goToGames()}}}),t._v(" "),s("input",{staticClass:"food-btn",attrs:{type:"button",value:"Order music",onclick:"window.open('https://open.spotify.com/playlist/6XvC7Yej0sNWsF0YRrEAf5?si=25d86c61f05447c0', '_blank')"}}),t._v(" "),s("input",{staticClass:"logout",attrs:{type:"button",value:"Log out"},on:{click:function(n){return t.logout()}}})])])},staticRenderFns:[]};var p=e("VU/8")({data:function(){return{}},methods:{goToGames:function(){this.$router.push("/games-list")},goToFood:function(){this.$router.push("/food-list")},logout:function(){this.$router.push("/")}}},l,!1,function(t){e("CaCj")},"data-v-43683a08",null).exports,d={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"main"}},[n("ul",[n("li",[this._v("chess")]),this._v(" "),n("li",[this._v("fustration")]),this._v(" "),n("li",[this._v("draughts/turkish")]),this._v(" "),n("li",[this._v("go")])])])}]};var h=e("VU/8")({data:function(){return{}}},d,!1,function(t){e("rHwd")},"data-v-a74ecc0c",null).exports,v={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"main"}},[n("ul",[n("li",[this._v("pesto pasta")]),this._v(" "),n("li",[this._v("lasagna")]),this._v(" "),n("li",[this._v("ice cream")])]),this._v(" "),n("img",{attrs:{src:e("7Otq"),height:"300"}})])}]};var f=e("VU/8")({data:function(){return{}}},v,!1,function(t){e("cMvJ")},"data-v-b7ad19da",null).exports;s.a.use(i.a);var m=new i.a({routes:[{path:"/",name:"home",component:c},{path:"/main-options",name:"main-options",component:p},{path:"/games-list",name:"games",component:h},{path:"/food-list",name:"food",component:f}]});s.a.config.productionTip=!1,new s.a({el:"#app",router:m,components:{App:a},template:"<App/>"})},ZjPa:function(t,n){},cMvJ:function(t,n){},rHwd:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.86ac5681a22a2c0e84eb.js.map