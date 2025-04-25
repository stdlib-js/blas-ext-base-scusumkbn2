"use strict";var x=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var j=x(function(L,R){
var e=require('@stdlib/number-float64-base-to-float32/dist'),k=require('@stdlib/math-base-special-abs/dist');function z(a,r,q,c,l,t,y,w){var b,o,f,n,p,i,v,u,s;if(a<=0)return t;if(o=l,f=w,r===0)for(s=0;s<a&&(i=q[o],i===0);s++)r=e(r+i),t[f]=r,o+=c,f+=y;else s=0;for(b=0,n=0;s<a;s++)i=q[o],v=e(r+i),k(r)>=k(i)?u=e(e(r-v)+i):u=e(e(i-v)+r),r=v,v=e(n+u),k(n)>=k(u)?p=e(e(n-v)+u):p=e(e(u-v)+n),n=v,b=e(b+p),t[f]=e(r+e(n+b)),o+=c,f+=y;return t}R.exports=z
});var F=x(function(M,E){
var _=require('@stdlib/strided-base-stride2offset/dist'),A=j();function B(a,r,q,c,l,t){return A(a,r,q,c,_(a,c),l,t,_(a,t)),l}E.exports=B
});var g=x(function(P,T){
var C=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),O=F(),D=j();C(O,"ndarray",D);T.exports=O
});var G=require("path").join,H=require('@stdlib/utils-try-require/dist'),I=require('@stdlib/assert-is-error/dist'),J=g(),d,h=H(G(__dirname,"./native.js"));I(h)?d=J:d=h;module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
