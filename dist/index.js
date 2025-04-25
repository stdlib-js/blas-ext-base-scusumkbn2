"use strict";var x=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var j=x(function(K,R){
var e=require('@stdlib/number-float64-base-to-float32/dist'),k=require('@stdlib/math-base-special-abs/dist');function w(a,r,q,c,l,t,y,m){var b,o,f,u,p,i,v,s,n;if(a<=0)return t;if(o=l,f=m,r===0)for(n=0;n<a&&(i=q[o],i===0);n++)t[f]=e(r+i),o+=c,f+=y;else n=0;for(b=0,u=0;n<a;n++)i=q[o],v=e(r+i),k(r)>=k(i)?s=e(e(r-v)+i):s=e(e(i-v)+r),r=v,v=e(u+s),k(u)>=k(s)?p=e(e(u-v)+s):p=e(e(s-v)+u),u=v,b=e(b+p),t[f]=e(r+e(u+b)),o+=c,f+=y;return t}R.exports=w
});var F=x(function(L,E){
var _=require('@stdlib/strided-base-stride2offset/dist'),z=j();function A(a,r,q,c,l,t){return z(a,r,q,c,_(a,c),l,t,_(a,t)),l}E.exports=A
});var g=x(function(M,T){
var B=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),O=F(),C=j();B(O,"ndarray",C);T.exports=O
});var D=require("path").join,G=require('@stdlib/utils-try-require/dist'),H=require('@stdlib/assert-is-error/dist'),I=g(),d,h=G(D(__dirname,"./native.js"));H(h)?d=I:d=h;module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
