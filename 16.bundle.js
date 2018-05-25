(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{124:function(e,t,i){(e.exports=i(23)(!1)).push([e.i,".md-card[data-v-7410ac92]{max-width:800px}.md-card-media[data-v-7410ac92]{height:400px}.md-field[data-v-7410ac92]{margin-bottom:60px}.loading[data-v-7410ac92]{background:#000;height:400px;display:flex}.loading .md-progress-spinner[data-v-7410ac92]{margin:auto}",""])},125:function(e,t,i){var a=i(124);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,i(22).default)("4ea0657b",a,!0,{})},126:function(e,t,i){(e.exports=i(23)(!1)).push([e.i,".md-card[data-v-cd74dccc]{max-width:800px}.md-card-media[data-v-cd74dccc]{height:400px}.md-field[data-v-cd74dccc]{margin-bottom:60px}.loading[data-v-cd74dccc]{background:#000;height:400px;display:flex}.loading .md-progress-spinner[data-v-cd74dccc]{margin:auto}",""])},127:function(e,t,i){var a=i(126);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,i(22).default)("177f271e",a,!0,{})},181:function(e,t,i){"use strict";i.r(t);var a=i(1),s=i(6),r=i(83);const n={[r.b]:r.a};var o=i(28),d=i(199),l=i(161),c=i(193),h=function(e,t,i,a){var s,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var o=e.length-1;o>=0;o--)(s=e[o])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n},m=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let f=class extends a.default{classifierSelectionUpdated(){this.$emit("classifierSelectionUpdated","ThumbSpreadClassifier")}get thumbThreshhold(){return this.config.threshhold}set thumbThreshhold(e){Object(c.e)(this.$store,{name:"ThumbSpreadClassifier",newState:{threshhold:parseInt(e)}}),this.classifierSelectionUpdated()}get thumbWindowSize(){return this.config.windowSize}set thumbWindowSize(e){Object(c.e)(this.$store,{name:"ThumbSpreadClassifier",newState:{windowSize:parseInt(e)}}),this.classifierSelectionUpdated()}get thumbWindowInterval(){return this.config.windowInterval}set thumbWindowInterval(e){Object(c.e)(this.$store,{name:"ThumbSpreadClassifier",newState:{windowInterval:parseInt(e)}}),this.classifierSelectionUpdated()}get thumbSymmetryTolerance(){return this.config.symmetryTolerance}set thumbSymmetryTolerance(e){Object(c.e)(this.$store,{name:"ThumbSpreadClassifier",newState:{symmetryTolerance:parseInt(e)}}),this.classifierSelectionUpdated()}get thumbThrottleTime(){return this.config.throttleTime}set thumbThrottleTime(e){Object(c.e)(this.$store,{name:"ThumbSpreadClassifier",newState:{throttleTime:parseInt(e)}}),this.classifierSelectionUpdated()}get leapPointableIdentifier(){return this.config.leapPointableIdentifier}set leapPointableIdentifier(e){Object(c.e)(this.$store,{name:"ThumbSpreadClassifier",newState:{leapPointableIdentifier:parseInt(e)}}),this.classifierSelectionUpdated()}get thumbSpreadClassifierEnabled(){return this.config.enabled}};h([Object(s.b)(),m("design:type",o.a)],f.prototype,"stream",void 0),h([Object(s.b)(),m("design:type",Object)],f.prototype,"config",void 0);var u=f=h([Object(s.a)({components:{GraphicalHandLogger:d.a,"s-code":l.a}})],f),p=i(10);var b=function(e){i(125)},v=Object(p.a)(u,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("md-card",[i("md-card-media",[void 0!==e.stream?i("graphical-hand-logger",{attrs:{"camera-position":[10,10,10],rotate:!0,source:e.stream}}):i("div",{staticClass:"loading"},[i("md-progress-spinner",{attrs:{"md-diameter":100,"md-stroke":10,"md-mode":"indeterminate"}})],1)],1),e._v(" "),i("md-card-header",[i("div",{staticClass:"md-title"},[e._v("Thumb Spread Classifier")]),e._v(" "),i("div",{staticClass:"md-subhead"},[e._v("Naive Spread detection soley based on virtualized Thumb position")]),e._v(" "),i("div",{staticClass:"enabled"},[i("md-switch",{staticClass:"md-accent",attrs:{value:!e.thumbSpreadClassifierEnabled},on:{change:e.classifierSelectionUpdated}},[e._v("Enable")])],1)]),e._v(" "),i("md-card-content",[i("md-subheader",[e._v("Classifier Description")]),e._v(" "),i("section",[i("h1",[e._v("General")]),e._v("\n      Example Classifier initially provided with Theraleap. It does a naive classification of whether the User is spreading the Thumb. This classifier is intentionally very crude, as not much time was invested in its conception (development of classifiers is no integral part of the Theraleap student research project). Instead, this classifier is supposed to give a proof of concept of how classifiers are integrated and configured in Theraleap.\n      "),i("h1",[e._v("Algorithm")]),e._v("\n      This classifier detects the extension of the thumb. It does so naively simply by looking at the thumb position in a configurable timeframe ("),i("s-code",[e._v("window")]),e._v("). It first computes the difference between the maximum and minimum thumb positions in the timeframe. If (and only if) a significant decisive factor is determined (as configured by "),i("s-code",[e._v("detectionThreshhold")]),e._v("), the first derivative of the historic thumb positions is taken, and the first zero intersection is searched. Zero intersections of the first derivatives denote a change of direction. If a zero intersection is found in the first derivative, it is fuzzily (as configurable through "),i("s-code",[e._v("symmetryTolerance")]),e._v(") determined if the intersection is centered in the dataset. Finally, the detection may be throttled ("),i("s-code",[e._v("detectionThrottle")]),e._v(") in order to prevent duplicate detections.\n      "),i("h1",[e._v("Performance Metric")]),e._v("\n      This classifier includes no Performance Metric. Metrics based on a configurable maximum Spread distance are thinkable as a possible next step.\n      "),i("h1",[e._v("Cheat Metric")]),e._v("\n      This classifier includes no Cheat Metric.\n      "),i("h1",[e._v("Room for Improvement")]),e._v("\n      This classifier should be replaced with something more robust in the future. The most fundamental flaw currently is that the classification is done based on thumb position alone, now something that makes more sense like thumb / index angle. Also, it only works for the left hand, but making the classifier independent of handedness is trivial.\n    ")],1),e._v(" "),i("md-subheader",[e._v("Classifier Settings")]),e._v(" "),i("md-divider"),e._v(" "),i("md-field",[i("label",[e._v("Window size")]),e._v(" "),i("md-input",{attrs:{type:"number"},model:{value:e.thumbWindowSize,callback:function(t){e.thumbWindowSize=t},expression:"thumbWindowSize"}}),e._v(" "),i("span",{staticClass:"md-helper-text"},[e._v("How large the detection window should be. The bigger this number, the slower the thumb has to be spread.")])],1),e._v(" "),i("md-field",[i("label",[e._v("Interval")]),e._v(" "),i("md-input",{attrs:{type:"number"},model:{value:e.thumbWindowInterval,callback:function(t){e.thumbWindowInterval=t},expression:"thumbWindowInterval"}}),e._v(" "),i("span",{staticClass:"md-helper-text"},[e._v("How often to slice a window from historic thumb positions and run the detection. For example, a number of 50 for Interval, and 200 for Window size will run the classifier every 50 frames, always with the last 200 Frames.")])],1),e._v(" "),i("md-field",[i("label",[e._v("Detection Threshhold")]),e._v(" "),i("md-input",{attrs:{type:"number"},model:{value:e.thumbThreshhold,callback:function(t){e.thumbThreshhold=t},expression:"thumbThreshhold"}}),e._v(" "),i("span",{staticClass:"md-helper-text"},[e._v("How generously to move forward with the detection. The bigger this number, the further the thumb has to be spread.")])],1),e._v(" "),i("md-field",[i("label",[e._v("Symmetry Tolerance")]),e._v(" "),i("md-input",{attrs:{type:"number"},model:{value:e.thumbSymmetryTolerance,callback:function(t){e.thumbSymmetryTolerance=t},expression:"thumbSymmetryTolerance"}}),e._v(" "),i("span",{staticClass:"md-helper-text"},[e._v("How far centered the thumb direction change should be. The bigger this number, the further the direction change may be off center (and thus, more false positives are detected).")])],1),e._v(" "),i("md-field",[i("label",[e._v("Throttle time")]),e._v(" "),i("md-input",{attrs:{type:"number"},model:{value:e.thumbThrottleTime,callback:function(t){e.thumbThrottleTime=t},expression:"thumbThrottleTime"}}),e._v(" "),i("span",{staticClass:"md-helper-text"},[e._v("Timeframe which should be considered a single thumb spread. For example, if 4 actual classifications are made in this window, it will be only considered to be a single classification.")])],1),e._v(" "),i("md-field",[i("label",[e._v("Pointable Identifier")]),e._v(" "),i("md-input",{attrs:{type:"number"},model:{value:e.leapPointableIdentifier,callback:function(t){e.leapPointableIdentifier=t},expression:"leapPointableIdentifier"}}),e._v(" "),i("span",{staticClass:"md-helper-text"},[e._v("You can also use this classifier for other extremities. 0 is Thumb, 1 is Index, and so on.")])],1)],1)],1)},[],!1,b,"data-v-7410ac92",null).exports,g=i(194),w=i(13);let y=class extends a.default{constructor(){super(...arguments),this.examples={ThumbSpreadClassifier:{path:"/theraleap/json/thera-rec-slow-thumb-spread.json"}}}async created(){await Object.entries(this.examples).forEach(async([e,t])=>{const i=await fetch(t.path),s=await i.json();a.default.set(this.examples,e,Object.assign({},this.examples.key,{stream:Object(g.b)(s)}))})}classifierSelectionUpdated(e){const t=this.classifierConfigState[e].enabled;Object(c.b)(this.$store),Object(c.e)(this.$store,{name:e,newState:{enabled:!t}}),this.facade.updateClassifier(Object(c.c)(this.$store))}get facade(){return Object(w.e)(this.$store)}get classifiers(){return Object.entries(n)}get classifierConfigState(){return Object(c.d)(this.$store)}};var _=y=function(e,t,i,a){var s,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var o=e.length-1;o>=0;o--)(s=e[o])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n}([Object(s.a)({components:{ThumbSpreadClassifier:v}})],y);var T=function(e){i(127)},S=Object(p.a)(_,function(){var e=this.$createElement,t=this._self._c||e;return t("section",[t("thumb-spread-classifier",{attrs:{stream:this.examples.ThumbSpreadClassifier.stream,config:this.classifierConfigState.ThumbSpreadClassifier},on:{classifierSelectionUpdated:this.classifierSelectionUpdated}})],1)},[],!1,T,"data-v-cd74dccc",null);t.default=S.exports}}]);