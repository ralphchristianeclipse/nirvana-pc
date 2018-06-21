webpackJsonp([14],{400:function(n,t,e){"use strict";function a(n){s||e(908)}Object.defineProperty(t,"__esModule",{value:!0});var i=e(529),o=e(832),r=e(4),s=!1,l=a,d=e.i(r.a)(i.a,o.a,o.b,!1,l,"data-v-b3e9d34e",null);d.options.__file="src/views/Task/Lottery.vue",t.default=d.exports},408:function(n,t,e){"use strict";function a(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=null,a=[];return function(){for(var i=arguments.length,r=Array(i),s=0;s<i;s++)r[s]=arguments[s];return clearTimeout(e),e=setTimeout(function(){var t=n.apply(void 0,r);a.forEach(function(n){return n(t)}),a=[]},t),new o.a(function(n){return a.push(n)})}}e.d(t,"b",function(){return r}),e.d(t,"a",function(){return s}),e.d(t,"c",function(){return l}),t.d=a;var i=e(51),o=e.n(i),r=function(n){return/^[1-9]+[0-9]*]*$/.test(n)},s=function(n,t){if("email"===n){return/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/.test(t)}if("mobile"===n){return/^1\d{10}$/.test(t)}if("name"===n){var e=t.toString().length;return e>=7&&e<=12}if("password"===n){var a=t.toString().length;return a>=6&&a<=12}if("bank"===n){return/^\d{16}|\d{19}$/.test(t)}},l=function(){var n=document.createElement("demo"),t={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(var e in t)if(void 0!==n.style[e])return t[e]}},468:function(n,t,e){"use strict";t.a={props:["awards"],methods:{closed:function(){this.awards.flag=!1}}}},491:function(n,t,e){"use strict";var a=e(408),i=e(730);t.a={data:function(){return{tempPlayTime:0,playTimes:0,lock:"",lockCount:0,getAwardsFlag:"",awards:{txt:"",flag:!1},wheel:{count:0,endCount:"",copies:"",runFlag:!1,noIntegral:!1,awards:[]}}},mounted:function(){this.fetchData()},components:{Award:i.a},methods:{coin:function(){this.$router.push("coin")},coupon:function(){this.$router.push("coupon")},fetchData:function(){var n=this;this.api.getLotteries().then(function(t){t.data&&t.data.items.length>0&&(n.wheel.awards=t.data.items,n.wheel.copies=1/t.data.items.length,n.playTimes=t.data.play_times||0,t.data.play_times?n.wheel.noIntegral=!0:n.wheel.noIntegral=!1)})},getAwards:function(){var n=this;this.getAwardsFlag=!1,this.api.postLotteries().then(function(t){if(t.data&&n.wheel.awards&&n.wheel.awards.length>0){for(var e=n.wheel.awards.length,a=0;a<e;a++)if(n.wheel.awards[a].id===t.data.id){n.wheel.endCount=a/n.wheel.awards.length;break}n.awards.txt=t.data.name,n.tempPlayTime=t.data.play_times,n.wheel.count=n.wheel.count+2,n.getAwardsFlag=!0}})},handleLottery:function(){var n=this;1===++this.lockCount&&(this.lock=!0);var t=e.i(a.c)(),i=document.getElementsByClassName("lottery_js")[0];if(t&&i.addEventListener(t,function(){n.getAwardsFlag&&(n.lockCount=0,n.lock=!1,n.playTimes=n.tempPlayTime,n.awards.flag=!0)}),!(this.lockCount>1&&this.lock)){if(!this.wheel.awards)return void this.$message({message:"无奖品，不能转",type:"info"});if(!this.wheel.noIntegral)return void this.$message({message:"您的积分不足，不能参与抽奖",type:"info"});if(this.wheel.awards){if(0===this.playTimes)return void this.$message({message:"您已无抽奖机会",type:"info"});this.playTimes--,this.wheel.runFlag=!0,this.getAwards()}}}}}},529:function(n,t,e){"use strict";var a=e(21),i=e.n(a),o=e(753),r=e(27);t.a={data:function(){return{question:this.$fontawesome("question-circle"),refresh:this.$fontawesome("refresh"),shopping:this.$fontawesome("shopping-cart"),userAvatar:this.$store.state.user.aws_url,points:0}},components:{LotteryWheel:o.a},mounted:function(){this.fetchData()},methods:{fetchData:function(n){var t=this;this.api.getPoints().then(function(e){t.points=e.data&&e.data.points,"fresh"===n&&t.$message({message:"已刷新到最新亚太币数据，请不要频繁刷新",type:"warning"})})}},computed:i()({},e.i(r.a)(["auth"]))}},556:function(n,t,e){var a=e(22);t=n.exports=e(2)(!1),t.push([n.i,"\n.overflow[data-v-33e4b94f] {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.break-word[data-v-33e4b94f] {\n  word-wrap: break-word;\n  word-break: break-all;\n}\n.sr-only[data-v-33e4b94f] {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n}\n.red[data-v-33e4b94f] {\n  color: #CF1031;\n}\n.yellow[data-v-33e4b94f] {\n  color: #fcd667;\n}\n.lottery[data-v-33e4b94f] {\n  background-color: #122151;\n  margin-left: 20px;\n}\n.lottery .lottery-wheel[data-v-33e4b94f] {\n    width: 100%;\n    padding: 20px;\n    padding-bottom: 50px;\n}\n.lottery .lottery-wheel .wheel[data-v-33e4b94f] {\n      background: rgba(69, 166, 255, 0.1);\n      background-size: 100% 100%;\n      padding: 10px 20px;\n}\n.lottery .lottery-wheel .runner[data-v-33e4b94f] {\n      width: 98%;\n      height: 450px;\n      margin: 0 auto;\n      background: url("+a(e(673))+") no-repeat;\n      background-size: 100% 100%;\n}\n.lottery .lottery-wheel .runner .info[data-v-33e4b94f] {\n        text-align: center;\n        color: #ffffff;\n        font-size: 20px;\n        margin: 10px auto;\n        margin-top: 20px;\n}\n.lottery .lottery-wheel .runner .info .red[data-v-33e4b94f], .lottery .lottery-wheel .runner .info .yellow[data-v-33e4b94f] {\n          font-size: 20px;\n}\n.rule[data-v-33e4b94f] {\n  text-align: left;\n  padding-top: 20px;\n}\n.rule .h1[data-v-33e4b94f] {\n    color: #ffffff;\n    font-size: 14px;\n    font-weight: bold;\n    vertical-align: top;\n}\n.rule .text[data-v-33e4b94f] {\n    padding-left: 10px;\n    vertical-align: middle;\n    max-width: 90%;\n}\n.rule .text .red[data-v-33e4b94f] {\n      color: #D9534F;\n}\n.rule p[data-v-33e4b94f] {\n    color: #ffffff;\n    height: 20px;\n    line-height: 20px;\n}\n.gb-wheel[data-v-33e4b94f] {\n  margin: 0 auto;\n  width: 380px;\n  height: 380px;\n  border-radius: 50%;\n  border: 27px solid #ffffff;\n}\n.gb-wheel-container[data-v-33e4b94f] {\n  position: relative;\n  top: 0px;\n  left: 0px;\n}\n.gb-wheel-container ul[data-v-33e4b94f],\n.gb-wheel-container li[data-v-33e4b94f],\n.gb-wheel-container p[data-v-33e4b94f] {\n  margin: 0;\n  padding: 0;\n}\n.gb-wheel-container ul[data-v-33e4b94f],\n.gb-wheel-container li[data-v-33e4b94f] {\n  list-style: none;\n}\n.gb-wheel-container[data-v-33e4b94f] {\n  margin: 0 auto;\n  position: relative;\n  width: 325px;\n  height: 325px;\n  border-radius: 50%;\n  overflow: hidden;\n  border: 5px solid #AD1000;\n}\n.gb-wheel-content[data-v-33e4b94f] {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  z-index: 2;\n  width: 315px;\n  height: 315px;\n  border-radius: inherit;\n  border: 6px solid #FFE56D;\n  background-color: #FFF0A6;\n}\n.gb-wheel-content[data-v-33e4b94f]:before {\n  content: ' ';\n  position: absolute;\n  left: -1px;\n  top: -1px;\n  z-index: -1;\n  width: 305px;\n  height: 305px;\n  border-radius: inherit;\n  border: 1px solid #AD1000;\n}\n.gb-wheel-list[data-v-33e4b94f] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: inherit;\n  height: inherit;\n  z-index: 30;\n}\n.gb-wheel-line[data-v-33e4b94f] {\n  position: absolute;\n  left: 8px;\n  top: 0;\n  width: inherit;\n  height: inherit;\n  z-index: 28;\n}\n.gb-wheel-litem[data-v-33e4b94f] {\n  position: absolute;\n  left: 144px;\n  top: 0px;\n  width: 1px;\n  height: 134px;\n  background-color: #E88905;\n  overflow: hidden;\n  -webkit-transform-origin: 50% 165px;\n  transform-origin: 50% 153px;\n}\n.btn[data-v-33e4b94f] {\n  width: 100px;\n  height: 96px;\n  border-radius: 50%;\n  background-color: #E51F25;\n  z-index: 29;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  margin-left: -50px;\n  margin-top: -48px;\n}\n.gb-wheel-btn[data-v-33e4b94f] {\n  position: absolute;\n  left: 50%;\n  top: 42%;\n  z-index: 29;\n  width: 90px;\n  height: 100px;\n  margin-left: -45px;\n  margin-top: -50px;\n  background: url("+a(e(672))+");\n  background-size: 100% 100%;\n}\n.gb-wheel-run[data-v-33e4b94f] {\n  -webkit-transition: -webkit-transform 6s ease-in-out;\n  transition: -webkit-transform 6s ease-in-out;\n  transition: transform 6s ease-in-out;\n  transition: transform 6s ease-in-out, -webkit-transform 6s ease-in-out;\n}\n.gb-wheel-item[data-v-33e4b94f] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  color: #D2754D;\n  font-weight: bold;\n}\n.gb-wheel-item p[data-v-33e4b94f] {\n    font-size: 16px;\n}\n.gb-wheel-icontent[data-v-33e4b94f] {\n  position: relative;\n  display: block;\n  padding-top: 11px;\n  margin: 0 auto;\n  text-align: center;\n  -webkit-transform-origin: 49% 149px;\n          transform-origin: 49% 149px;\n}\n.gb-wheel-itext[data-v-33e4b94f] {\n  font-weight: lighter;\n  -webkit-transform: scale(0.8);\n          transform: scale(0.8);\n}\n.gb-wheel-iicon i[data-v-33e4b94f] {\n  margin-top: 5px;\n  width: 30px;\n  height: 30px;\n  display: inline-block;\n}\n.gb-wheel-iicon i img[data-v-33e4b94f] {\n    border-radius: 5px;\n}\n",""])},606:function(n,t,e){t=n.exports=e(2)(!1),t.push([n.i,"\n.overflow[data-v-b3e9d34e] {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.break-word[data-v-b3e9d34e] {\n  word-wrap: break-word;\n  word-break: break-all;\n}\n.sr-only[data-v-b3e9d34e] {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n}\n.width[data-v-b3e9d34e] {\n  width: 78%;\n  vertical-align: top;\n}\n.lottery-block[data-v-b3e9d34e] {\n  width: 250px;\n  min-height: 680px;\n  background-color: #122151;\n  padding: 10px;\n}\n.lottery-block .hr[data-v-b3e9d34e] {\n    width: 210px;\n    height: 1.7px;\n    background-color: #0b0e31;\n    margin: 0 auto;\n    -webkit-box-shadow: inset 0px 1px rgba(0, 0, 0, 0.6);\n            box-shadow: inset 0px 1px rgba(0, 0, 0, 0.6);\n}\n.lottery-block .img[data-v-b3e9d34e] {\n    margin: 10px auto;\n    text-align: center;\n    padding-bottom: 10px;\n}\n.lottery-block .img img[data-v-b3e9d34e] {\n      border: 5px solid #ffffff;\n      border-radius: 50%;\n}\n.lottery-block .coin-store[data-v-b3e9d34e] {\n    color: rgba(255, 255, 255, 0.5);\n    padding: 15px 10px;\n}\n.lottery-block .coin-store .fa[data-v-b3e9d34e] {\n      font-size: 36px;\n      vertical-align: middle;\n}\n.lottery-block .coin-store .store[data-v-b3e9d34e] {\n      padding-left: 10px;\n      vertical-align: middle;\n}\n.lottery-block .coin-store .store p[data-v-b3e9d34e]:first-of-type {\n        font-size: 14px;\n        font-weight: bold;\n}\n.lottery-block .current-coin[data-v-b3e9d34e] {\n    padding: 15px 10px;\n}\n.lottery-block .current-coin .number[data-v-b3e9d34e] {\n      font-size: 48px;\n      color: #fcd667;\n}\n.lottery-block .current-coin .h5[data-v-b3e9d34e] {\n      color: #ffffff;\n      margin-top: 10px;\n}\n.lottery-block .current-coin .h5 .fa[data-v-b3e9d34e] {\n        color: #fcd667;\n        padding: 5px;\n        border-radius: 50%;\n        background-color: rgba(0, 0, 0, 0.5);\n}\n.lottery-block .current-coin .super[data-v-b3e9d34e] {\n      vertical-align: super;\n      font-size: 24px;\n}\n",""])},609:function(n,t,e){t=n.exports=e(2)(!1),t.push([n.i,"\n.overflow[data-v-ddc55284] {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.break-word[data-v-ddc55284] {\n  word-wrap: break-word;\n  word-break: break-all;\n}\n.sr-only[data-v-ddc55284] {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n}\n.privileges[data-v-ddc55284] {\n  position: fixed;\n  top: 40%;\n  left: 45%;\n  z-index: 3000;\n  background-color: #122151;\n  border-radius: 5px;\n  min-width: 400px;\n}\n.privileges .title[data-v-ddc55284] {\n    height: 36px;\n    background-color: #0b0e31;\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px;\n}\n.privileges .content p[data-v-ddc55284] {\n    font-size: 14px;\n    color: #ffffff;\n}\n.fill-in[data-v-ddc55284] {\n  position: relative;\n  z-index: 2;\n  text-align: center;\n  padding: 20px 10px;\n}\n.fill-in .img[data-v-ddc55284] {\n    position: absolute;\n    top: -194px;\n    z-index: 1;\n    left: 40px;\n    max-width: 400px;\n    max-height: 300px;\n}\n.fill-in .ok[data-v-ddc55284] {\n    background-color: #fcd667;\n    color: #122151;\n    padding: 8px;\n    width: 60%;\n    margin: 0px auto;\n    margin-top: 20px;\n    border-radius: 10px;\n}\n.mask-layer[data-v-ddc55284] {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: #000000;\n  opacity: 0.5;\n  z-index: 2001;\n}\n",""])},656:function(n,t,e){n.exports=e.p+"static/img/congra-image.9560cac.png"},672:function(n,t,e){n.exports=e.p+"static/img/lotspin.d061783.png"},673:function(n,t,e){n.exports=e.p+"static/img/lottry-bg.fe44b5f.png"},730:function(n,t,e){"use strict";function a(n){s||e(911)}var i=e(468),o=e(835),r=e(4),s=!1,l=a,d=e.i(r.a)(i.a,o.a,o.b,!1,l,"data-v-ddc55284",null);d.options.__file="src/components/Setting/Award.vue",t.a=d.exports},753:function(n,t,e){"use strict";function a(n){s||e(858)}var i=e(491),o=e(779),r=e(4),s=!1,l=a,d=e.i(r.a)(i.a,o.a,o.b,!1,l,"data-v-33e4b94f",null);d.options.__file="src/components/Task/Lottery.vue",t.a=d.exports},779:function(n,t,e){"use strict";e.d(t,"a",function(){return a}),e.d(t,"b",function(){return i});var a=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"lottery"},[e("div",{staticClass:"lottery-wheel"},[e("div",{staticClass:"wheel"},[e("div",{staticClass:"runner"},[e("div",{staticClass:"gb-wheel"},[e("section",{staticClass:"gb-wheel-container lottery_js",attrs:{id:"container"}},[e("div",{staticClass:"gb-wheel-content",class:{"gb-wheel-run":n.wheel.runFlag},style:{transform:"rotate("+(3600*n.wheel.count-360*n.wheel.endCount)+"deg)"}},[e("ul",{staticClass:"gb-wheel-line"},n._l(n.wheel.awards,function(t,a){return e("li",{staticClass:"gb-wheel-litem",style:{transform:"rotate("+(a*n.wheel.copies+n.wheel.copies/2)+"turn)"}})})),n._v(" "),e("div",{staticClass:"gb-wheel-list"},n._l(n.wheel.awards,function(t,a){return e("div",{staticClass:"gb-wheel-item"},[e("div",{staticClass:"gb-wheel-icontent",style:{transform:"rotate("+a*n.wheel.copies+"turn)"}},[e("p",{staticClass:"gb-wheel-itext"},[n._v("\n                      "+n._s(t.name)+"\n                    ")]),n._v(" "),e("p",{staticClass:"gb-wheel-iicon"},[e("i",[e("img",{attrs:{src:t.aws_url,width:"100%",height:"100%"}})])])])])}))]),n._v(" "),e("div",{staticClass:"btn"},[e("a",{staticClass:"gb-wheel-btn",attrs:{href:"javascript:;"},on:{click:function(t){n.handleLottery()}}})])])]),n._v(" "),e("p",{staticClass:"info"},[n._v("您还有"),e("span",{staticClass:"yellow"},[n._v(n._s(n.playTimes))]),n._v("次抽奖机会")])])]),n._v(" "),n._m(0),n._v(" "),e("div",{staticClass:"rule"},[e("span",{staticClass:"h1 dl"},[n._v("奖励规则: ")]),n._v(" "),e("span",{staticClass:"text dl"},[e("p",[n._v("1.【现金】奖励由系统自动派发，请在主账户中查收或交易记录中查询详情。")]),n._v(" "),e("p",[n._v("2.【现金】奖励提款需要完成5倍投注流水（所有平台通用，不限制游戏）。")]),n._v(" "),e("p",[n._v("3.【亚太币】奖励由系统自动派发，请在"),e("span",{staticClass:"yellow hand",on:{click:function(t){n.coin()}}},[n._v("【我的亚太币】")]),n._v("中查收或亚太币记录中查询详情。")]),n._v(" "),e("p",[n._v("4.【优惠券】奖励将以优惠券形式由系统自动派发到"),e("span",{staticClass:"yellow hand",on:{click:function(t){n.coupon()}}},[n._v("【我的优惠券】")]),n._v("中，您可以在游戏平台转账时选择并使用。如有疑问，请联系在线客服。")])])])]),n._v(" "),e("award",{directives:[{name:"show",rawName:"v-show",value:n.awards.flag,expression:"awards.flag"}],attrs:{awards:n.awards}})],1)},i=[function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"rule"},[e("span",{staticClass:"h1 dl"},[n._v("活动规则: ")]),n._v(" "),e("span",{staticClass:"text dl"},[e("p",[n._v("1. 每次抽奖需消耗50亚太币。")])])])}];a._withStripped=!0},832:function(n,t,e){"use strict";e.d(t,"a",function(){return a}),e.d(t,"b",function(){return i});var a=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("div",{staticClass:"lottery-block dl"},[e("div",{staticClass:"img"},[e("img",{attrs:{src:n.auth.aws_url,width:"112px",height:"112px"}})]),n._v(" "),e("p",{staticClass:"hr"}),n._v(" "),e("div",{staticClass:"current-coin"},[e("p",{staticClass:"h5"},[n._v("当前亚太币"),e("span",{staticClass:"fa fr hand",on:{click:function(t){n.fetchData("fresh")}}},[n._v(n._s(n.refresh))])]),n._v(" "),n.points<999999?e("p",{staticClass:"number"},[n._v(n._s(n.points||"0"))]):e("p",{staticClass:"number"},[n._v("999999"),e("span",{staticClass:"super"},[n._v("+")])])]),n._v(" "),e("p",{staticClass:"hr"}),n._v(" "),e("div",{staticClass:"coin-store"},[e("span",{staticClass:"fa dl"},[n._v(n._s(n.shopping))]),n._v(" "),n._m(0)]),n._v(" "),e("p",{staticClass:"hr"})]),n._v(" "),e("lottery-wheel",{staticClass:"width dl"})],1)},i=[function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("span",{staticClass:"store dl"},[e("p",[n._v("亚太商城")]),n._v(" "),e("p",[n._v("即将上线，敬请期待！")])])}];a._withStripped=!0},835:function(n,t,e){"use strict";e.d(t,"a",function(){return a}),e.d(t,"b",function(){return i});var a=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("div",{staticClass:"privileges"},[e("p",{staticClass:"title"}),n._v(" "),e("div",{staticClass:"fill-in"},[n.awards&&n.awards.txt?e("div",[n._m(0),n._v(" "),e("div",{staticClass:"content"},[e("p",[n._v("恭喜您获得"+n._s(n.awards.txt))])])]):e("div",{staticClass:"no-data"},[n._v("无数据")]),n._v(" "),e("p",{staticClass:"ok hand",on:{click:function(t){n.closed()}}},[n._v("OK")])])]),n._v(" "),e("div",{staticClass:"mask-layer"})])},i=[function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("span",{staticClass:"img"},[a("img",{attrs:{src:e(656),width:"100%",height:"100%"}})])}];a._withStripped=!0},858:function(n,t,e){var a=e(556);"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);var i=e(3).default;i("c62c33c4",a,!1,{})},908:function(n,t,e){var a=e(606);"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);var i=e(3).default;i("49708652",a,!1,{})},911:function(n,t,e){var a=e(609);"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);var i=e(3).default;i("90041424",a,!1,{})}});
//# sourceMappingURL=14.64e48730fbc5713c4882.js.map