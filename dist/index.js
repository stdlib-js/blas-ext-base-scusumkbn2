"use strict";var d=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var k=d(function(K,y){
var e=require('@stdlib/number-float64-base-to-float32/dist'),q=require('@stdlib/math-base-special-abs/dist');function w(a,r,f,n,c,t,g,h){var o,l,b,s,p,v,i,u,x;if(a<=0)return t;for(l=c,b=h,o=0,s=0,x=0;x<a;x++)v=f[l],i=e(r+v),q(r)>=q(v)?u=e(e(r-i)+v):u=e(e(v-i)+r),r=i,i=e(s+u),q(s)>=q(u)?p=e(e(s-i)+u):p=e(e(u-i)+s),s=i,o=e(o+p),t[b]=e(r+e(s+o)),l+=n,b+=g;return t}y.exports=w
});var _=d(function(L,R){
var m=require('@stdlib/strided-base-stride2offset/dist'),z=k();function A(a,r,f,n,c,t){return z(a,r,f,n,m(a,n),c,t,m(a,t)),c}R.exports=A
});var O=d(function(M,F){
var B=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),E=_(),C=k();B(E,"ndarray",C);F.exports=E
});var D=require("path").join,G=require('@stdlib/utils-try-require/dist'),H=require('@stdlib/assert-is-error/dist'),I=O(),j,T=G(D(__dirname,"./native.js"));H(T)?j=I:j=T;module.exports=j;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
