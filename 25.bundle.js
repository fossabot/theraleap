(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{180:function(t,e,a){"use strict";a.r(e);var n=a(1),r=a(6),c=function(t,e,a,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,a,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(i=(c<3?r(i):c>3?r(e,a,i):r(e,a))||i);return c>3&&i&&Object.defineProperty(e,a,i),i},i=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let s=class extends n.default{};c([Object(r.b)(),i("design:type",Object)],s.prototype,"handtrackingData",void 0);var o=s=c([r.a],s),l=a(10),f=Object(l.a)(o,function(){var t=this.$createElement;return(this._self._c||t)("pre",[this._v(this._s(JSON.stringify(this.handtrackingData.data,null,2)))])},[],!1,null,null,null).exports,u=a(13);let d=class extends n.default{constructor(){super(...arguments),this.trackingData={data:{}}}mounted(){const t=this.deviceFacade.getHandTrackingData(this.$store);t&&(this.subscription=t.subscribe(t=>{this.trackingData=t}))}beforeDestroy(){this.subscription&&this.subscription.unsubscribe()}get deviceFacade(){return u.e(this.$store)}};var p=d=function(t,e,a,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,a,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(i=(c<3?r(i):c>3?r(e,a,i):r(e,a))||i);return c>3&&i&&Object.defineProperty(e,a,i),i}([Object(r.a)({components:{RawDeviceDataPlotter:f}})],d),b=Object(l.a)(p,function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"leap-debug-interface"},[e("raw-device-data-plotter",{attrs:{"handtracking-data":this.trackingData}})],1)},[],!1,null,null,null);e.default=b.exports}}]);