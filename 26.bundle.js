(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{163:function(e,t,s){"use strict";s.r(t);var i=s(200);const h=e=>{e.background(0),e.fill(255)},a=(e,t,s)=>{s.triangle(e,t-40,e-15,t,e+15,t)},n=(e,t)=>{e.forEach(e=>{t.ellipse(e.x,e.y-15,5)})},c=(e,t)=>{e.forEach(e=>{((e,t,s,i,h)=>{const a=2*Math.PI/i;h.beginShape();for(let i=0;i<2*Math.PI;i+=a){const a=e+h.cos(i)*s,n=t+h.sin(i)*s;h.vertex(a,n)}h.endShape(h.CLOSE)})(e.x,e.y,50,e.edges,t)})},o=(e,t)=>{t.textFont("Courier New",40),t.text(e.toString().padStart(5,"0"),20,50)},r=(e,t)=>{const s=[];return e.forEach(e=>{if(e.x<t.width&&e.x>0&&e.y<t.height&&e.y>0){const t={speed:e.speed,x:e.x,y:e.y-e.speed};s.push(t)}}),s},d=(e,t,s,i)=>{e.push({x:t,y:s,speed:i})},l=(e,t)=>(e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e))+e),p=(e,t)=>{const s=[];if(Math.random()>.985){const e=(e=>({edges:l(3,10),speedX:l(-2,2),speedY:l(2,6),x:l(0,e.width),y:-50}))(t);s.push(e)}return e.forEach(e=>{e.x>-50&&e.x<t.width+50&&e.y>-100&&e.y<t.height+100&&s.push({edges:e.edges,speedX:e.speedX,speedY:e.speedY+l(0,1),x:e.x+e.speedX,y:e.y+e.speedY})}),s},u=(e,t,s)=>{let i=[],h=!1;return e.forEach((e,s)=>{t.forEach((t,h)=>{Math.abs(e.x-t.x)<50&&Math.abs(e.y-t.y)<30&&(i=[s,h])})}),0!==i.length&&(e.splice(i[0],1),t.splice(i[1],1),h=!0),h},g=(e,t,s)=>{let i=!1;return s.forEach(s=>{Math.abs(s.x-e)<35&&Math.abs(s.y-t)<35&&(i=!0)}),i},x=e=>e+20;s.d(t,"default",function(){return m});const y=s(107);class m{constructor(){this.x=0,this.y=0,this.score=0,this.gameOver=!1,this.paused=!1,this.bullets=[],this.spaceRocks=[]}async onStart(e,t){this.width=e.element.clientWidth,this.height=e.element.clientHeight,this.x=e.element.clientWidth/2,this.y=e.element.clientHeight-50,this.iP5=new y(s=>{s.setup=(()=>{s.createCanvas(e.element.clientWidth,e.element.clientHeight)}),s.draw=(()=>{if(this.paused)return;this.bullets=r(this.bullets,s),this.spaceRocks=p(this.spaceRocks,s),u(this.bullets,this.spaceRocks,s)&&(this.score=x(this.score)),this.gameOver=g(this.x,this.y,this.spaceRocks),this.gameOver?(t(),s.remove()):(h(s),o(this.score,s),a(this.x,this.y,s),c(this.spaceRocks,s),n(this.bullets,s))})},e.element)}async onStop(e){e.$router.push({name:"game-over",params:{gameIdentifier:"space-shooter",score:this.score,statistics:[12,23,23]}})}async onPause(){this.paused=!0}async onResume(){this.paused=!1}onClassificationReceived(e){d(this.bullets,this.x,this.y,5)}onMotionTrackingDataReceived(e){const t=e.data,s=t.interactionBox;t.hands&&t.hands.length>=1&&(this.x=Object(i.a)(t.hands[0].palmPosition[0],s.center[0]-s.size[0]/2,s.center[0]+s.size[0]/2,0,this.width),this.y=Object(i.a)(t.hands[0].palmPosition[2],s.center[2]-s.size[2]/2,s.center[2]+s.size[2]/2,this.height-this.height/4,this.height-100))}}}}]);