(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{153:function(e,t,a){(e.exports=a(23)(!1)).push([e.i,"section.device-status[data-v-900822b4]{margin-top:20px}section.device-status .md-card[data-v-900822b4]{margin:20px auto;max-width:500px}",""])},154:function(e,t,a){var d=a(153);"string"==typeof d&&(d=[[e.i,d,""]]),d.locals&&(e.exports=d.locals);(0,a(22).default)("0296e4c8",d,!0,{})},178:function(e,t,a){"use strict";a.r(t);var d=a(1),i=a(6),n=a(13);let r=class extends d.default{get connectionState(){return n.c(this.$store)}};var c=r=function(e,t,a,d){var i,n=arguments.length,r=n<3?t:null===d?d=Object.getOwnPropertyDescriptor(t,a):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,a,d);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(r=(n<3?i(r):n>3?i(t,a,r):i(t,a))||r);return n>3&&r&&Object.defineProperty(t,a,r),r}([Object(i.a)({components:{}})],r),v=a(10);var s=function(e){a(154)},o=Object(v.a)(c,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"device-status"},[void 0===e.connectionState.connectedToNativeDeviceDriver?a("md-card",{attrs:{"md-theme":"card-unknown","md-with-hover":""}},[a("md-card-header",[a("md-card-header-text",[a("div",{staticClass:"md-title"},[e._v("Connection to Native Device Driver")]),e._v(" "),a("div",{staticClass:"md-subhead"},[e._v("\n            Could not determine if we are connected to the native device driver.\n          ")]),e._v(" "),a("md-card-content")],1)],1)],1):e.connectionState.connectedToNativeDeviceDriver?a("md-card",{attrs:{"md-theme":"card-success","md-with-hover":""}},[a("md-card-header",[a("md-card-header-text",[a("div",{staticClass:"md-title"},[e._v("Connection to Native Device Driver")]),e._v(" "),a("div",{staticClass:"md-subhead"},[e._v("\n            We are connected the the native device driver.\n          ")]),e._v(" "),a("md-card-content",[e._v("\n            We have a streaming connection to the native device driver. Everything works as expected.\n          ")])],1)],1)],1):a("md-card",{attrs:{"md-theme":"card-failure","md-with-hover":""}},[a("md-card-header",[a("md-card-header-text",[a("div",{staticClass:"md-title"},[e._v("Connection to Native Device Driver")]),e._v(" "),a("div",{staticClass:"md-subhead"},[e._v("\n            We are not connected to the native device driver.\n          ")]),e._v(" "),a("md-card-content",[e._v("\n            We are currently trying to connect to the native device driver, but we aren't connected yet.\n          ")])],1)],1)],1),e._v(" "),void 0===e.connectionState.nativeDeviceDriverOnline?a("md-card",{attrs:{"md-theme":"card-unknown","md-with-hover":""}},[a("md-card-header",[a("md-card-header-text",[a("div",{staticClass:"md-title"},[e._v("State of the Native Device Driver")]),e._v(" "),a("div",{staticClass:"md-subhead"},[e._v("\n            Unknown.\n          ")]),e._v(" "),a("md-card-content",[e._v("\n            It could not be determined if the native device driver is online. Please make sure your device driver is installed and running on this machine.\n          ")])],1)],1)],1):e.connectionState.connectedToNativeDeviceDriver?a("md-card",{attrs:{"md-theme":"card-success","md-with-hover":""}},[a("md-card-header",[a("md-card-header-text",[a("div",{staticClass:"md-title"},[e._v("State of the Native Device Driver")]),e._v(" "),a("div",{staticClass:"md-subhead"},[e._v("\n            The native device driver is Online.\n          ")]),e._v(" "),a("md-card-content",[e._v("\n            We determined that the native device  driver is online.\n          ")])],1)],1)],1):a("md-card",{attrs:{"md-theme":"card-failure","md-with-hover":""}},[a("md-card-header",[a("md-card-header-text",[a("div",{staticClass:"md-title"},[e._v("State of the Native Device Driver")]),e._v(" "),a("div",{staticClass:"md-subhead"},[e._v("\n            The native device driver is offline.\n          ")]),e._v(" "),a("md-card-content",[e._v('\n            We determined that the native device driver is not running. Please make sure the device driver software is installed, running, and has the "Give access to Web Applications" option enabled.\n          ')])],1)],1)],1),e._v(" "),void 0===e.connectionState.deviceHardwareConnected?a("md-card",{attrs:{"md-theme":"card-unknown","md-with-hover":""}},[a("md-card-header",[a("md-card-header-text",[a("div",{staticClass:"md-title"},[e._v("Physical availability of hardware device")]),e._v(" "),a("div",{staticClass:"md-subhead"},[e._v("\n            Could not determine if the Hardware device is Connected. \n          ")]),e._v(" "),a("md-card-content",[e._v("\n            Usually this means that the Hardware device driver is offline, so we can't determine whether the device is connected. Please make sure your device driver is installed and running. We'll automatically attempt to reconnect.\n          ")])],1)],1)],1):e.connectionState.deviceHardwareConnected?a("md-card",{attrs:{"md-theme":"card-success","md-with-hover":""}},[a("md-card-header",[a("md-card-header-text",[a("div",{staticClass:"md-title"},[e._v("Physical availability of hardware device")]),e._v(" "),a("div",{staticClass:"md-subhead"},[e._v("\n            The Hardware Device is connected.\n          ")]),e._v(" "),a("md-card-content",[e._v("\n            We are connected to the Hardware Device and it is sending data properly. Let's play some games!\n          ")])],1)],1)],1):a("md-card",{attrs:{"md-theme":"card-failure","md-with-hover":""}},[a("md-card-header",[a("md-card-header-text",[a("div",{staticClass:"md-title"},[e._v("Physical availability of hardware device")]),e._v(" "),a("div",{staticClass:"md-subhead"},[e._v("\n            The Hardware Device seems not connected.\n          ")]),e._v(" "),a("md-card-content",[e._v("\n            We are not getting any data from the native device driver, which usually means that the device is not attached to the computer. Please Plug your device into the Computer if it isn't already. We'll automatically attempt to reconnect.\n          ")])],1)],1)],1)],1)},[],!1,s,"data-v-900822b4",null);t.default=o.exports}}]);