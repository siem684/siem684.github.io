import{S as c,i as s,s as u}from"../chunks/index-77ba4487.js";function p(n,e,a,o){var t={x:n,y:e},h={x:a,y:o},M=Math.atan2(h.y-t.y,h.x-t.x)*180/Math.PI;return console.log(M),M}function b(n,e,a,o){n=r(n),a=r(a),e=r(e),o=r(o);let t=Math.cos(a)*Math.sin(o-e),h=Math.cos(n)*Math.sin(a)-Math.sin(n)*Math.cos(a)*Math.cos(o-e),M=Math.atan2(t,h);return(i(M)+360)%360}function r(n){return n*Math.PI/180}function i(n){return n*180/Math.PI}function l(n,e,a,o){return n=r(n),e=r(e),a=r(a),o=r(o),y=Math.sin(o-e)*Math.cos(a),x=Math.cos(n)*Math.sin(a)-Math.sin(n)*Math.cos(a)*Math.cos(o-e),brng=Math.atan2(y,x),brng=i(brng),(brng+360)%360}class m extends c{constructor(e){super(),s(this,e,null,null,u,{})}}export{p as angleFromCoordinate,b as angleJust,l as bearing,m as default};
