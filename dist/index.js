"use strict";var R=function(n,r){return function(){return r||n((r={exports:{}}).exports,r),r.exports}};var E=R(function(L,_){
var a=require('@stdlib/number-float64-base-to-float32/dist'),k=require('@stdlib/math-base-special-abs/dist');function A(n,r,y,x,p,o){var l,q,u,s,f,e,v,t,c;if(n<=0)return p;for(x<0?q=(1-n)*x:q=0,o<0?u=(1-n)*o:u=0,l=0,s=0,c=0;c<n;c++)e=y[q],v=a(r+e),k(r)>=k(e)?t=a(a(r-v)+e):t=a(a(e-v)+r),r=v,v=a(s+t),k(s)>=k(t)?f=a(a(s-v)+t):f=a(a(t-v)+s),s=v,l=a(l+f),p[u]=a(r+a(s+l)),q+=x,u+=o;return p}_.exports=A
});var d=R(function(M,O){
var i=require('@stdlib/number-float64-base-to-float32/dist'),j=require('@stdlib/math-base-special-abs/dist');function B(n,r,y,x,p,o,l,q){var u,s,f,e,v,t,c,b,F;if(n<=0)return o;for(s=p,f=q,u=0,e=0,F=0;F<n;F++)t=y[s],c=i(r+t),j(r)>=j(t)?b=i(i(r-c)+t):b=i(i(t-c)+r),r=c,c=i(e+b),j(e)>=j(b)?v=i(i(e-c)+b):v=i(i(b-c)+e),e=c,u=i(u+v),o[f]=i(r+i(e+u)),s+=x,f+=l;return o}O.exports=B
});var w=R(function(P,h){
var C=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),g=E(),D=d();C(g,"ndarray",D);h.exports=g
});var G=require("path").join,H=require('@stdlib/utils-try-require/dist'),I=require('@stdlib/assert-is-error/dist'),J=w(),T,z=H(G(__dirname,"./native.js"));I(z)?T=J:T=z;module.exports=T;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
