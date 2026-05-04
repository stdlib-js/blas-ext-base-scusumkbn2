"use strict";var x=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var j=x(function(M,R){
var e=require('@stdlib/number-float64-base-to-float32/dist'),l=require('@stdlib/math-base-special-abs/dist');function B(a,r,q,c,b,n,y,A){var k,f,o,t,p,i,v,u,s;if(a<=0)return n;if(f=b,o=A,r===0)for(s=0;s<a&&(i=q[f],i===0);s++)r=e(r+i),n[o]=r,f+=c,o+=y;else s=0;for(k=0,t=0;s<a;s++)i=q[f],v=e(r+i),l(r)>=l(i)?u=e(e(r-v)+i):u=e(e(i-v)+r),r=v,v=e(t+u),l(t)>=l(u)?p=e(e(t-v)+u):p=e(e(u-v)+t),t=v,k=e(k+p),n[o]=e(r+e(t+k)),f+=c,o+=y;return n}R.exports=B
});var O=x(function(P,E){
var _=require('@stdlib/strided-base-stride2offset/dist'),C=j();function D(a,r,q,c,b,n){return C(a,r,q,c,_(a,c),b,n,_(a,n)),b}E.exports=D
});var w=x(function(Q,h){
var F=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),g=O(),G=j();F(g,"ndarray",G);h.exports=g
});var H=require("path").join,I=require('@stdlib/utils-try-require/dist'),J=require('@stdlib/assert-is-error/dist'),K=w(),d,z=I(H(__dirname,"./native.js"));J(z)?d=K:d=z;module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
