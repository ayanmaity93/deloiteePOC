parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"epB2":[function(require,module,exports) {
var init;function loadExtTemplate(responseHtml){document.getElementById("loadTemplate").innerHTML=responseHtml;for(var allScripts=document.getElementById("loadTemplate").getElementsByTagName("script"),n=0;n<allScripts.length;n++)eval(allScripts[n].innerHTML);init()}function getTemplate(){var e;switch(location.hash){case"#detail":e="./assets/Templates/detailedItem.html",init=window.detailedInit;break;case"#home":e="./assets/Templates/homepage.html",init=window.homeInit;break;default:e="./assets/Templates/comingSoon.html",init=window.homeInit}return e}location.hash="home",window.doServiceCall=function(e,t){document.getElementById("loader").classList.remove("d-none"),document.getElementById("loader").classList.add("d-block");var n=new XMLHttpRequest;n.onreadystatechange=function(){4==this.readyState&&(document.getElementById("loader").classList.add("d-none"),document.getElementById("loader").classList.remove("d-block"),200==this.status?t(this.responseText):document.getElementById("mainFailure").innerHTML="Sorry, something went wrong. Please try again later.")},n.open("GET",e,!0),n.send()},window.onhashchange=function(){window.doServiceCall(getTemplate(),loadExtTemplate)},window.changeLink=function(e){location.hash=e},window.doServiceCall(getTemplate(),loadExtTemplate);
},{}]},{},["epB2"], null)
//# sourceMappingURL=/main.af6dfeaf.js.map