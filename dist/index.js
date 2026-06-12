"use strict";var x=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(u){throw (r=0, u)}};};var j=x(function(M,R){
var e=require('@stdlib/number-float64-base-to-float32/dist'),l=require('@stdlib/math-base-special-abs/dist');function B(a,r,u,f,b,n,y,A){var k,o,q,t,p,i,v,s,c;if(a<=0)return n;if(o=b,q=A,r===0)for(c=0;c<a&&(i=u[o],i===0);c++)r=e(r+i),n[q]=r,o+=f,q+=y;else c=0;for(k=0,t=0;c<a;c++)i=u[o],v=e(r+i),l(r)>=l(i)?s=e(e(r-v)+i):s=e(e(i-v)+r),r=v,v=e(t+s),l(t)>=l(s)?p=e(e(t-v)+s):p=e(e(s-v)+t),t=v,k=e(k+p),n[q]=e(r+e(t+k)),o+=f,q+=y;return n}R.exports=B
});var O=x(function(P,E){
var _=require('@stdlib/strided-base-stride2offset/dist'),C=j();function D(a,r,u,f,b,n){return C(a,r,u,f,_(a,f),b,n,_(a,n)),b}E.exports=D
});var w=x(function(Q,h){
var F=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),g=O(),G=j();F(g,"ndarray",G);h.exports=g
});var H=require("path").join,I=require('@stdlib/utils-try-require/dist'),J=require('@stdlib/assert-is-error/dist'),K=w(),d,z=I(H(__dirname,"./native.js"));J(z)?d=K:d=z;module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
