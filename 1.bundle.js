(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{100:function(e,t,a){var o=a(99);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,a(22).default)("0e35fab3",o,!0,{})},170:function(e,t,a){"use strict";a.r(t);var o=a(1),r=a(6),n=a(158),s=a(161),i=function(e,t,a,o){var r,n=arguments.length,s=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,a):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(s=(n<3?r(s):n>3?r(t,a,s):r(t,a))||s);return n>3&&s&&Object.defineProperty(t,a,s),s},c=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let d=class extends o.default{};i([Object(r.b)({type:String,required:!0}),c("design:type",String)],d.prototype,"gameIdentifier",void 0),i([Object(r.b)({type:Number,required:!1}),c("design:type",Object)],d.prototype,"score",void 0),i([Object(r.b)({type:Array,required:!1}),c("design:type",Object)],d.prototype,"statistics",void 0);var f=d=i([Object(r.a)({components:{PlayButton:n.a,"s-code":s.a}})],d),p=a(10);var v=function(e){a(100)},l=Object(p.a)(f,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{attrs:{id:"GameOver"}},[a("section",{staticClass:"game-over-message"},[a("h1",[e._v("You Lose!")]),e._v(" "),a("h2",[e._v("Better Luck next time!")]),e._v(" "),a("span",[a("play-button",{attrs:{name:"Retry"},on:{click:function(t){e.$router.push("/games/play/"+e.gameIdentifier)}}})],1)]),e._v(" "),a("md-divider"),e._v(" "),void 0!==e.score?a("section",{staticClass:"highscore"},[e._v("\n        Your final Score: "),a("s-code",[e._v(e._s(e.score.toString().padStart(5,"0")))]),e._v(" points.\n    ")],1):e._e(),e._v(" "),void 0!==e.statistics?a("section",[e._v("\n        len of statistics: "+e._s(e.statistics.length)+"\n    ")]):e._e()],1)},[],!1,v,"data-v-4fab2ebd",null);t.default=l.exports},99:function(e,t,a){(e.exports=a(23)(!1)).push([e.i,".game-over-message[data-v-4fab2ebd]{text-align:center}.game-over-message h1[data-v-4fab2ebd]{font-size:2em;margin:15px 0 0}.game-over-message h2[data-v-4fab2ebd]{font-size:1em}.md-divider[data-v-4fab2ebd]{margin-top:25px}.highscore[data-v-4fab2ebd]{margin:25px;font-size:larger}",""])}}]);