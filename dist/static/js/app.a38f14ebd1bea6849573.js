webpackJsonp([1],{"06Yv":function(t,e,s){t.exports=s.p+"static/img/bucked-clipart-transparent-background-6.bc1789a.png"},"7zck":function(t,e){},"8e8l":function(t,e){},FqXj:function(t,e){},LaT6:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),i={data:function(){return{sideNav:null}},computed:{menuItems:function(){var t=[{icon:"face",title:"Sign up",link:"/signup"},{icon:"lock_open",title:"Sign in",link:"/signin"}];return this.userIsAuthenticated&&(t=[{icon:"event_available",title:"Goals bucket",link:"/goals"},{icon:"add",title:"Add new",link:"/goal/new"},{icon:"person",title:"Your profile",link:"/profile"}]),t},userIsAuthenticated:function(){return null!==this.$store.getters.user&&void 0!==this.$store.getters.user}},methods:{onLogout:function(){this.$store.dispatch("logout")}},name:"App"},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"app"}},[a("v-navigation-drawer",{attrs:{temporary:"",fixed:""},model:{value:t.sideNav,callback:function(e){t.sideNav=e},expression:"sideNav"}},[a("v-list",[t._l(t.menuItems,function(e){return a("v-list-tile",{key:e.title,attrs:{to:e.link}},[a("v-list-tile-action",[a("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),a("v-list-tile-content",[t._v(t._s(e.title))])],1)}),t._v(" "),t.userIsAuthenticated?a("v-list-tile",{on:{click:t.onLogout}},[a("v-list-tile-action",[a("v-icon",[t._v("exit_to_app")])],1),t._v(" "),a("v-list-tile-content",[t._v("Logout")])],1):t._e()],2)],1),t._v(" "),a("v-toolbar",{staticClass:"primary",attrs:{dark:""}},[a("v-toolbar-side-icon",{staticClass:"hidden-sm-and-up",on:{click:function(e){t.sideNav=!t.sideNav}}}),t._v(" "),a("v-toolbar-title",[a("router-link",{staticStyle:{cursor:"pointer"},attrs:{tag:"span",to:"/"}},[t._v("MagBucket")]),t._v(" "),a("img",{staticClass:"logo",attrs:{src:s("06Yv"),alt:"bucket"}})],1),t._v(" "),a("v-spacer"),t._v(" "),a("v-toolbar-items",{staticClass:"hidden-xs-only"},[t._l(t.menuItems,function(e){return a("v-btn",{key:e.title,attrs:{flat:"",to:e.link}},[a("v-icon",{attrs:{left:""}},[t._v(t._s(e.icon))]),t._v(t._s(e.title)+"\n      ")],1)}),t._v(" "),t.userIsAuthenticated?a("v-btn",{attrs:{flat:""},on:{click:t.onLogout}},[a("v-icon",{attrs:{left:""}},[t._v("exit_to_app")]),t._v(" Logout")],1):t._e()],2)],1),t._v(" "),a("main",[a("router-view")],1),t._v(" "),a("v-footer",{staticClass:"strong pt-3 pb-3 mt-4",attrs:{height:"55",fixed:""}},[a("div",{staticClass:"warning--text"},[t._v("\n    Coded with ❤ by Agata Magier. © 2018 All rights reserved.\n  ")])])],1)},staticRenderFns:[]};var o=s("VU/8")(i,r,!1,function(t){s("FqXj")},null,null).exports,n=s("kxiW"),l=s("/ocq"),c={computed:{goals:function(){return this.$store.getters.latestGoals},userIsAuthenticated:function(){return null!==this.$store.getters.user&&void 0!==this.$store.getters.user},loading:function(){return this.$store.getters.loading}},methods:{onLoadGoal:function(t){this.$router.push("/goals/"+t)}}},d={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[s("v-layout",{staticClass:"mb-4",attrs:{row:"",wrap:""}},[s("v-flex",{staticClass:"text-xs-center text-sm-right",attrs:{xs12:"",sm6:""}},[s("v-btn",{staticClass:"accent",attrs:{router:"",to:"/goals",large:"",round:""}},[t._v("Explore Goals")])],1),t._v(" "),s("v-flex",{staticClass:"text-xs-center text-sm-left",attrs:{xs12:"",sm6:""}},[s("v-btn",{staticClass:"accent",attrs:{router:"",to:"/goal/new",large:"",round:""}},[t._v("Add new goal")])],1)],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{staticClass:"mt-4 pt-4 text-xs-center"},[t.loading?s("v-progress-circular",{attrs:{indeterminate:"",color:"primary",width:10,size:100}}):t._e()],1)],1),t._v(" "),t.loading?t._e():s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:"",sm8:"","offset-sm2":""}},[s("v-carousel",{staticStyle:{cursor:"pointer"}},t._l(t.goals,function(e){return s("v-carousel-item",{key:e.id,attrs:{src:e.imageUrl},on:{click:function(s){t.onLoadGoal(e.id)}}},[s("div",{staticClass:"title"},[t._v(" "+t._s(e.title)+"\n                        "),s("v-icon",{staticClass:"icon"},[t._v("check")])],1)])}))],1),t._v(" "),s("v-flex",{staticClass:"text-xs-center mt-4 pt-4",attrs:{xs12:""}},[s("h1",{staticClass:"strong--text display-3 font-weight-thin"},[t._v(" Create your future.")]),t._v(" "),s("h2",{staticClass:"strong--text font-weight-medium font-italic"},[t._v("Die with memories, not dreams.")])])],1)],1)},staticRenderFns:[]};var u=s("VU/8")(c,d,!1,function(t){s("dOtU")},"data-v-5bc3c82a",null).exports,v={computed:{goals:function(){return this.$store.getters.loadedGoals}},methods:{goalAchieved:function(){this.achieved_info="You did it!",event.target.style}}},f={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[s("v-layout",{attrs:{row:"",wrap:""}},t._l(t.goals,function(e){return s("v-flex",{key:e.id,staticClass:"mb-4",attrs:{xs12:"",sm10:"",md8:"","offset-sm1":"","offset-md2":""}},[s("v-card",{staticClass:"secondary",attrs:{hover:""}},[s("v-container",{attrs:{fluid:""}},[s("v-layout",{attrs:{column:""}},[s("v-flex",{attrs:{xs4:"",sm5:""}},[s("v-img",{attrs:{src:e.imageUrl,height:"260px"}})],1),t._v(" "),s("v-flex",{attrs:{xs7:"",sm7:""}},[s("v-card-title",{staticClass:"ml-3",attrs:{"primary-title":""}},[s("div",[s("h2",{staticClass:"strong--text mb-3 "},[t._v(t._s(e.title))]),t._v(" "),s("div",{staticClass:"goal-info"},[s("v-icon",{staticClass:"icon",attrs:{left:""}},[t._v("hourglass_empty")]),t._v(" Start: "+t._s(e.added))],1),t._v(" "),s("div",{staticClass:"goal-info"},[s("v-icon",{staticClass:"icon",attrs:{left:""}},[t._v("alarm")]),t._v(" By when: "+t._s(e.when))],1)])]),t._v(" "),s("v-card-actions",{staticClass:"ml-2"},[s("v-btn",{staticClass:"info",attrs:{large:"",round:"",to:/goals/+e.id}},[s("v-icon",{attrs:{left:""}},[t._v("search")]),t._v("\n                                    View goal\n                                ")],1)],1)],1)],1)],1)],1)],1)}))],1)},staticRenderFns:[]};var m=s("VU/8")(v,f,!1,function(t){s("cCL0")},"data-v-2cf1fca4",null).exports,p=s("KS/y"),g=s.n(p),h={data:function(){return{title:"",when:"",imageUrl:"",description:"",image:null}},components:{"upload-btn":g.a},computed:{formIsValid:function(){return""!==this.title&&""!==this.when&&""!==this.imageUrl&&""!==this.description}},methods:{onAddGoal:function(){if(this.formIsValid&&this.image){var t={title:this.title,when:this.when,description:this.description,image:this.image,added:(new Date).toLocaleDateString(["en-US"],{day:"2-digit",month:"long",year:"numeric"})};console.log("goal data: "+t),this.$store.dispatch("addGoal",t),this.$router.push("/goals")}},onUploadImageClicked:function(){this.$refs.fileInput.click(),console.log(event)},onImgPick:function(t){var e=this;console.log(t);var s=t.target.files;if(s[0].name.lastIndexOf(".")<=0)return alert("please add valid image type");var a=new FileReader;a.addEventListener("load",function(){e.imageUrl=a.result,console.log(a.result),console.log("url:"+e.imageUrl)}),a.readAsDataURL(s[0]),this.image=s[0]}}},_={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[s("v-layout",{staticClass:"mb-4",attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("h1",{staticClass:"accent--text"},[t._v("Add new goal to your bucket")])])],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:""}},[s("form",{attrs:{enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),t.onAddGoal(e)}}},[s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("v-text-field",{attrs:{name:"title",label:"Title",id:"title",required:""},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1)],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("v-text-field",{attrs:{name:"when",label:"By when",id:"when",required:""},model:{value:t.when,callback:function(e){t.when=e},expression:"when"}})],1)],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("v-textarea",{attrs:{name:"description",label:"Description",id:"description",required:""},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}}),t._v(" "),s("p",[t._v(t._s(t.description))])],1)],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("v-text-field",{attrs:{name:"imageUrl",label:"Image URL",id:"image-url"},model:{value:t.imageUrl,callback:function(e){t.imageUrl=e},expression:"imageUrl"}})],1)],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("v-btn",{staticClass:"accent",attrs:{raised:"",round:"",large:""},on:{click:t.onUploadImageClicked}},[t._v("Upload image"),s("v-icon",{attrs:{right:""}},[t._v("add_a_photo")])],1),t._v(" "),s("input",{ref:"fileInput",staticStyle:{display:"none"},attrs:{type:"file",accept:"image/*"},on:{change:t.onImgPick}})],1)],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{staticClass:"mb-4 pb-4",attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("img",{attrs:{src:t.imageUrl,width:"100%"}})])],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{staticClass:"info--text mb-4",attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("h3",[t._v("Pick a deadline date for your goal")])])],1),t._v(" "),s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{staticClass:"mb-4",attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("v-date-picker",{attrs:{type:"month","show-current":""},model:{value:t.when,callback:function(e){t.when=e},expression:"when"}}),t._v(" "),s("p",[t._v(" "+t._s(t.when)+" ")])],1)],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("v-btn",{staticClass:"primary",attrs:{type:"submit",disabled:!t.formIsValid,round:""}},[t._v("Add goal")])],1)],1)],1)])],1)],1)},staticRenderFns:[]},w=s("VU/8")(h,_,!1,null,null,null).exports,x={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("p",[this._v("profile")])])}]},b=s("VU/8")(null,x,!1,null,null,null).exports,y={data:function(){return{email:"",password:""}},computed:{user:function(){return this.$store.getters.user},error:function(){return this.$store.getters.error},loading:function(){return this.$store.getters.loading}},watch:{user:function(t){null!==t&&void 0!==t&&this.$router.push("/")}},methods:{onSignIn:function(){this.$store.dispatch("signInUser",{email:this.email,password:this.password}),console.log({email:this.email,password:this.password,confirmPassword:this.confirmPassword})},onDismissed:function(){console.log("dismissed"),this.$store.dispatch("clearError")}}},C={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[t.error?s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("app-alert",{domProps:{textContent:t._s(t.error.message)},on:{dismissed:t.onDismissed}})],1)],1):t._e(),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("v-card",[s("v-card-text",[s("v-container",[s("form",{on:{submit:function(e){return e.preventDefault(),t.onSignIn(e)}}},[s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-text-field",{attrs:{name:"email",label:"e-mail",id:"email",type:"email",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1)],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-text-field",{attrs:{name:"password",label:"password",id:"password",type:"password",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-btn",{staticClass:"success",attrs:{large:"",round:"",type:"submit",disabled:t.loading,loading:t.loading}},[t._v("Sign Up\n                                        "),s("span",{staticClass:"custom-loader",attrs:{slot:"loader"},slot:"loader"},[s("v-icon",{attrs:{light:""}},[t._v("cached")])],1)])],1)],1)],1)])],1)],1)],1)],1)],1)},staticRenderFns:[]};var k=s("VU/8")(y,C,!1,function(t){s("LaT6")},"data-v-75d0d06c",null).exports,D={data:function(){return{email:"",password:"",confirmPassword:""}},computed:{comparePasswords:function(){return this.password!==this.confirmPassword?"Passwords do not match":""},user:function(){return this.$store.getters.user},error:function(){return this.$store.getters.error},loading:function(){return this.$store.getters.loading}},watch:{user:function(t){null!==t&&void 0!==t&&this.$router.push("/")}},methods:{onSignUp:function(){this.$store.dispatch("signUpUser",{email:this.email,password:this.password}),console.log({email:this.email,password:this.password,confirmPassword:this.confirmPassword})},onDismissed:function(){console.log("dismissed"),this.$store.dispatch("clearError")}}},U={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[t.error?s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("app-alert",{domProps:{textContent:t._s(t.error.message)},on:{dismissed:t.onDismissed}})],1)],1):t._e(),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("v-card",[s("v-card-text",[s("v-container",[s("form",{on:{submit:function(e){return e.preventDefault(),t.onSignUp(e)}}},[s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-text-field",{attrs:{name:"email",label:"e-mail",id:"email",type:"email",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1)],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-text-field",{attrs:{name:"password",label:"password",id:"password",type:"password",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-text-field",{attrs:{name:"confirmPassword",label:"confirm password",id:"confirmPassword",type:"password",rules:[t.comparePasswords]},model:{value:t.confirmPassword,callback:function(e){t.confirmPassword=e},expression:"confirmPassword"}})],1)],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-btn",{staticClass:"success",attrs:{large:"",round:"",type:"submit",disabled:t.loading,loading:t.loading}},[t._v("Sign Up\n                                        "),s("span",{staticClass:"custom-loader",attrs:{slot:"loader"},slot:"loader"},[s("v-icon",{attrs:{light:""}},[t._v("cached")])],1)])],1)],1)],1)])],1)],1)],1)],1)],1)},staticRenderFns:[]};var I=s("VU/8")(D,U,!1,function(t){s("8e8l")},"data-v-45878662",null).exports,$={props:["id"],computed:{goal:function(){return this.$store.getters.loadedGoal(this.id)},userIsAuthenticated:function(){return null!==this.$store.getters.user&&void 0!==this.$store.getters.user},userIsCreator:function(){return!!this.userIsAuthenticated&&this.$store.getters.user.id===this.goal.creatorId},loading:function(){return this.$store.getters.loading}}},S={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[t.loading?s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{staticClass:"mt-4 pt-4 text-xs-center"},[s("v-progress-circular",{attrs:{indeterminate:"",color:"primary",width:10,size:100}})],1)],1):s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:"",sm8:"","offset-sm2":""}},[s("v-card",[s("v-card-title",[s("h1",{staticClass:"strong--text"},[t._v(t._s(t.goal.title))]),t._v(" "),t.userIsCreator?[s("v-spacer"),t._v(" "),s("app-edit-goal",{attrs:{goal:t.goal}})]:t._e()],2),t._v(" "),s("v-img",{attrs:{src:t.goal.imageUrl,height:"500px"}}),t._v(" "),s("v-card-text",[s("div",{staticClass:"accent--text"},[s("v-icon",{staticClass:"icon",attrs:{left:""}},[t._v("hourglass_empty")]),t._v(" Added: "+t._s(t.goal.added))],1),t._v(" "),s("div",{staticClass:"info--text due-date"},[s("v-icon",{staticClass:"icon",attrs:{left:""}},[t._v("schedule")]),s("span",[t._v(" By when: "+t._s(t.goal.when))])],1),t._v(" "),s("div",[t._v("Description: "),s("strong",[t._v(t._s(t.goal.description))])])]),t._v(" "),s("v-card-actions",[s("v-spacer"),t._v(" "),s("v-btn",{staticClass:"accent mb-3 mr-3",attrs:{large:"",round:""}},[t._v("\n                        register\n                    ")])],1)],1)],1)],1)],1)},staticRenderFns:[]};var E=s("VU/8")($,S,!1,function(t){s("X+9y")},"data-v-18f0e450",null).exports,G=s("NYxO"),A=s("Dd8w"),L=s.n(A),P={state:{goals:[{imageUrl:"https://www.funktionevents.co.uk/images/pictures/new/uk/activities/pizza-making/pizza-making-(1600x1200-crop).jpg?v=43cfbd5d",id:"qwerty",title:"Make my own Pizza",added:"2018-06-10",when:"October 2018",description:"gsgsgsfdg"},{imageUrl:"https://www.rei.com/adventures/assets/adventures/images/trip/core/africa/kil_hero",id:"qwerty2",title:"Climb Kilimanjaro",added:"2018-10-10",when:"Anytime this lifetime!",description:"gsgsgsfdg"},{imageUrl:"http://musicboxy.net/wp-content/uploads/2018/09/1537784259_maxresdefault.jpg",id:"qwerty432342",title:"Learn shuffle dance",added:"2018-09-10",when:"Ongoing",description:"gsgsgsfdg"}]},mutations:{addGoal:function(t,e){t.goals.push(e)},udpateGoalData:function(t,e){var s=t.goals.find(function(t){return t.id===e.id});e.title&&(s.title=e.title),e.description&&(s.description=e.description),e.when&&(s.when=e.when)},setGoals:function(t,e){t.goals=e}},actions:{loadGoals:function(t){var e=t.commit;e("setLoading",!0),n.database().ref("goals").once("value").then(function(t){var s=[],a=t.val();for(var i in a)s.push({id:i,title:a[i].title,description:a[i].description,imageUrl:a[i].imageUrl,added:a[i].added,when:a[i].when,creatorId:a[i].creatorId});e("setGoals",s),e("setLoading",!1)}).catch(function(t){console.log(t),e("setLoading",!0)})},addGoal:function(t,e){var s=t.commit,a=t.getters,i={title:e.title,when:e.when,description:e.description,added:e.added,creatorId:a.user.id},r=void 0,o=void 0;n.database().ref("goals").push(i).then(function(t){return console.log(t),o=t.key}).then(function(t){var s=e.image.name,a=s.slice(s.lastIndexOf("."));return console.log("filename:"+s),n.storage().ref("goals/"+t+"."+a).put(e.image)}).then(function(t){console.log("file upload data: "+t.getMetadata);var e=t.metadata.fullPath;return console.log("image path: "+e),n.storage().ref().child(e).getDownloadURL()}).then(function(t){return r=t,console.log("image url: "+r),n.database().ref("goals").child(o).update({imageUrl:r})}).then(function(){s("addGoal",L()({},i,{imageUrl:r,id:o}))}).catch(function(t){console.log(t)})},editGoaldata:function(t,e){var s=t.commit;s("setLoading",!0);var a={};e.title&&(a.title=e.title),e.description&&(a.description=e.description),e.when&&(a.when=e.when),n.database().ref("goals").child(e.id).update(a).then(function(){s("setLoading",!1),s("udpateGoalData",e)}).catch(function(t){console.log(t),s("setLoading",!1)})}},getters:{loadedGoals:function(t){return t.goals.sort(function(t,e){return t.added<e.added})},latestGoals:function(t,e){return e.loadedGoals.slice(0,5)},loadedGoal:function(t){return function(e){return t.goals.find(function(t){return t.id===e})}}}},F={state:{user:null},mutations:{setUser:function(t,e){t.user=e}},actions:{signUpUser:function(t,e){var s=t.commit;s("setLoading",!0),s("clearError"),n.auth().createUserWithEmailAndPassword(e.email,e.password).then(function(t){s("setLoading",!1),s("clearError");var e={id:t.user.uid,registeredGoals:[]};s("setUser",e),console.log(e)}).catch(function(t){s("setLoading",!1),s("setError",t),console.log(t)})},signInUser:function(t,e){var s=t.commit;s("setLoading",!0),s("clearError"),n.auth().signInWithEmailAndPassword(e.email,e.password).then(function(t){s("setLoading",!1);var e={id:t.user.uid,registeredGoals:[]};s("setUser",e)}).catch(function(t){s("setLoading",!1),s("setError",t),console.log(t)})},autoSignIn:function(t,e){(0,t.commit)("setUser",{id:e.uid,registeredGoals:[]})},logout:function(t){var e=t.commit;n.auth().signOut(),e("setUser",null)}},getters:{user:function(t){return t.user}}};a.default.use(G.a);var T=new G.a.Store({modules:{goal:P,user:F,shared:{state:{loading:!1,error:null},mutations:{setLoading:function(t,e){t.loading=e},setError:function(t,e){t.error=e},clearError:function(t){t.error=null}},actions:{clearError:function(t){(0,t.commit)("clearError")}},getters:{loading:function(t){return t.loading},error:function(t){return t.error}}}}}),O=function(t,e,s){T.getters.user?s():s("/signin")};a.default.use(l.a);var V=new l.a({routes:[{path:"/",name:"Home",component:u},{path:"/goals",name:"Goals",component:m},{path:"/goal/new",name:"AddGoal",component:w,beforeEnter:O},{path:"/goals/:id",name:"Goal",props:!0,component:E},{path:"/profile",name:"Profile",component:b,beforeEnter:O},{path:"/signin",name:"Signin",component:k},{path:"/signup",name:"Signup",component:I}]}),R=s("3EgV"),q=s.n(R),z=(s("7zck"),{render:function(){var t=this.$createElement;return(this._self._c||t)("v-alert",{attrs:{error:"",dismissible:"",value:!0},on:{input:this.onClose}},[this._v("\n  "+this._s(this.text))])},staticRenderFns:[]}),N=s("VU/8")({propr:["text"],methods:{onClose:function(){this.$emit("dismissed")}}},z,!1,null,null,null).exports,Y={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-dialog",{attrs:{width:"350px",persistent:""},model:{value:t.editDialog,callback:function(e){t.editDialog=e},expression:"editDialog"}},[s("v-btn",{staticClass:"error",attrs:{slot:"activator",fab:""},slot:"activator"},[s("v-icon",[t._v("edit")])],1),t._v(" "),s("v-card",[s("v-container",[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-card-title",[t._v("EDIT GOAL")])],1)],1),t._v(" "),s("v-divider"),t._v(" "),s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-card-text",[s("v-text-field",{attrs:{name:"title",label:"Title",id:"title",required:""},model:{value:t.editedTitle,callback:function(e){t.editedTitle=e},expression:"editedTitle"}}),t._v(" "),s("v-textarea",{attrs:{name:"description",label:"Description",id:"description",required:""},model:{value:t.editedDescription,callback:function(e){t.editedDescription=e},expression:"editedDescription"}})],1)],1)],1),t._v(" "),s("v-divider"),t._v(" "),s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-card-actions",[s("v-btn",{staticClass:"accent",attrs:{light:"",round:""},on:{click:function(e){t.editDialog=!1}}},[t._v("Cancel")]),t._v(" "),s("v-btn",{staticClass:"success",attrs:{light:"",round:""},on:{click:t.onSaveEdit}},[t._v("Save")])],1)],1)],1)],1)],1)],1)},staticRenderFns:[]},j=s("VU/8")({props:["goal"],data:function(){return{editDialog:!1,editedTitle:this.goal.title,editedDescription:this.goal.description}},methods:{onSaveEdit:function(){""!==this.editedTitle.trim()&&""!==this.editedDescription.trim()&&(this.editDialog=!1,this.$store.dispatch("editGoaldata",{id:this.goal.id,title:this.editedTitle,description:this.editedDescription}))}}},Y,!1,null,null,null).exports,M={props:["goal"],data:function(){return{editDialog:!1,editableDueDate:null}},methods:{onSaveChanges:function(){var t=new Date(this.goal.when).toISOString(),e=new Date(this.editableDueDate).getUTCMonth().toISOString(),s=new Date(this.editableDueDate).getUTCFullYear().toISOString();t.setUTCMonth(e),t.setUTCFullYear(s),this.$store.dispatch("editGoaldata",{id:this.goal.id,when:t})}},created:function(){this.editableDueDate=new Date(this.goal.when).toISOString()}},B={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-dialog",{attrs:{width:"350px",persistent:""},model:{value:t.editDialog,callback:function(e){t.editDialog=e},expression:"editDialog"}},[s("v-btn",{staticClass:"error",attrs:{slot:"activator",round:""},slot:"activator"},[t._v("\n       edit date\n    ")]),t._v(" "),s("v-card",[s("v-container",[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-card-title",[t._v("EDIT GOAL DUE DATE")])],1)],1),t._v(" "),s("v-divider"),t._v(" "),s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-date-picker",{staticStyle:{width:"100%"},attrs:{type:"month",actions:""},scopedSlots:t._u([{key:"default",fn:function(e){return e.save,e.cancel,[s("v-btn",{staticClass:"accent",attrs:{round:""},nativeOn:{click:function(e){t.editDialog=!1}}},[t._v("Close")]),t._v(" "),s("v-btn",{staticClass:"success",attrs:{round:""},nativeOn:{click:function(e){return t.onSaveChanges(e)}}},[t._v("Save")])]}}]),model:{value:t.editableDueDate,callback:function(e){t.editableDueDate=e},expression:"editableDueDate"}})],1)],1)],1)],1)],1)},staticRenderFns:[]},K=s("VU/8")(M,B,!1,null,null,null).exports;a.default.component("app-alert",N),a.default.component("app-edit-goal",j),a.default.component("app-edit-goal-date",K),a.default.use(q.a,{theme:{primary:"#4DD0E1",secondary:"#FFF59D",accent:"#FBC02D",strong:"00838F",error:"#f44336",warning:"#ffeb3b",info:"#00ACC1",success:"#43A047"}}),a.default.use(g.a),a.default.config.productionTip=!1,new a.default({el:"#app",router:V,store:T,components:{App:o},template:"<App/>",created:function(){var t=this;n.initializeApp({apiKey:"AIzaSyCKTPbIc8QN3TTgCntaztOIF35yUIi0cVY",authDomain:"magbucket-794c7.firebaseapp.com",databaseURL:"https://magbucket-794c7.firebaseio.com",projectId:"magbucket-794c7",storageBucket:"magbucket-794c7.appspot.com"}),n.auth().onAuthStateChanged(function(e){e&&t.$store.dispatch("autoSignIn",e)}),this.$store.dispatch("loadGoals")}})},"X+9y":function(t,e){},cCL0:function(t,e){},dOtU:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.a38f14ebd1bea6849573.js.map