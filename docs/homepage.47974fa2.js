parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"P1IR":[function(require,module,exports) {
var e;function t(t){if(0==(e=JSON.parse(t)).status)if(e.products.length>0){document.getElementById("allProducts").innerHTML="";for(var n=0;n<e.products.length;n++){var d=document.createElement("div"),l=document.createElement("img");l.src="../Images/Items/"+e.products[n].image,l.classList.add("full-width"),d.appendChild(l);var c=document.createElement("h6");c.innerHTML=e.products[n].name,d.appendChild(c);var o=document.createElement("div");o.classList.add("clearfix");var a=document.createElement("div");a.innerHTML=e.products[n].type,a.classList.add("float-left","half-width","item-tag"),o.append(a);var s=document.createElement("div");s.innerHTML="$"+e.products[n].amount,s.classList.add("float-right","half-width","text-right"),o.append(s),d.appendChild(o),d.classList.add("col-12","col-sm-12","col-md-6","col-lg-4","product-item"),d.addEventListener("click",function(){window.changeLink("detail")}),document.getElementById("allProducts").appendChild(d)}}else document.getElementById("serviceCallHomeMessage").innerHTML="No Results Found.";else document.getElementById("serviceCallHomeMessage").innerHTML=e.message||"Sorry, Something Went Wrong. Please try again after sometime."}window.homeInit=function(){window.doServiceCall("products.json",t),document.getElementById("filterIconID").addEventListener("click",function(){document.getElementById("filterBlock").classList.contains("d-none")?(document.getElementById("filterBlock").classList.remove("d-none"),document.getElementById("filterBlock").classList.add("d-block")):(document.getElementById("filterBlock").classList.add("d-none"),document.getElementById("filterBlock").classList.remove("d-block"))})};
},{}]},{},["P1IR"], null)
//# sourceMappingURL=/homepage.47974fa2.js.map