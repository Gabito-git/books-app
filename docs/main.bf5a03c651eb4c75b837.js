(()=>{"use strict";function a(d){if(c[d])return c[d].exports;var e=c[d]={exports:{}};return b[d](e,e.exports,a),e.exports}var b={377:(a,b,c)=>{function g(c,a){return i(c)||h(c,a)||e(c,a)||d()}function d(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function e(d,e){if(d){if("string"==typeof d)return f(d,e);var b=Object.prototype.toString.call(d).slice(8,-1);return"Object"===b&&d.constructor&&(b=d.constructor.name),"Map"===b||"Set"===b?Array.from(d):"Arguments"===b||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b)?f(d,e):void 0}}function f(e,a){(null==a||a>e.length)&&(a=e.length);for(var b=0,c=Array(a);b<a;b++)c[b]=e[b];return c}function h(i,a){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(i)){var b,f=[],c=!0,d=!1;try{for(var e,g=i[Symbol.iterator]();!(c=(e=g.next()).done)&&(f.push(e.value),!(a&&f.length===a));c=!0);}catch(c){d=!0,b=c}finally{try{c||null==g["return"]||g["return"]()}finally{if(d)throw b}}return f}}function i(b){if(Array.isArray(b))return b}function j(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function k(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function l(e,a){for(var b,c=0;c<a.length;c++)b=a[c],b.enumerable=b.enumerable||!1,b.configurable=!0,"value"in b&&(b.writable=!0),Object.defineProperty(e,b.key,b)}function m(d,a,b){return a&&l(d.prototype,a),b&&l(d,b),d}c.d(b,{r:()=>v});var n=function h(a){var b=g(a,3),c=b[0],d=b[1],e=b[2];j(this,h),this.name=c,this.price=d,this.year=e,this.id=new Date().getTime()};var o=function(){function b(){k(this,b),this.cargarLocalStorage()}return m(b,[{key:"agregarLibro",value:function(b){this.bookList.push(b),this.guardarLocalBooks()}},{key:"eliminarLibro",value:function(c){this.bookList=this.bookList.filter(function(a){return a.id!=c}),this.guardarLocalBooks()}},{key:"guardarLocalBooks",value:function(){localStorage.setItem("books",JSON.stringify(this.bookList))}},{key:"cargarLocalStorage",value:function(){localStorage.getItem("books")?this.bookList=JSON.parse(localStorage.getItem("books")):[]}}]),b}();var p=document.querySelector(".btn"),q=document.querySelectorAll("input"),r=document.querySelector(".content"),s=document.querySelector(".prod-change"),t=function(i){var a=i.name,b=i.price,c=i.year,d=i.id,e=!(1<arguments.length&&void 0!==arguments[1])||arguments[1],f="<div class=\"prod-content\" id=".concat(d,">\n                    <p><strong>Product Name: </strong>").concat(a," <strong>Product Price: </strong>$").concat(b," <strong>Product Year: </strong>").concat(c,"</p>\n                    <button class=\"btn-prod\">Delete</button>\n                 </div> "),g=document.createElement("div");g.innerHTML=f,r.appendChild(g.firstChild),e&&u(!0)},u=function(c){var a=function(c,a){s.classList.add(c),s.childNodes[1].innerText=a,s.classList.toggle("hide"),setTimeout(function(){s.classList.toggle("hide"),s.classList.remove(c)},1500)};c?a("blue","Product Added Succesfully"):a("green","Product Deleted Succesfully")};p.addEventListener("click",function(d){d.preventDefault();var a=Array.from(q).map(function(b){return b.value});if(""!==a.find(function(b){return""===b})){q.forEach(function(b){return b.value=""});var b=new n(a);v.agregarLibro(b),t(b)}}),r.addEventListener("click",function(c){if("Delete"===c.target.innerText){var a=c.target.parentNode;r.removeChild(a),v.eliminarLibro(c.target.parentNode.id),u(!1)}});var v=new o;v.bookList.forEach(function(b){t(b,!1)})}},c={};(()=>{a.d=(b,c)=>{for(var d in c)a.o(c,d)&&!a.o(b,d)&&Object.defineProperty(b,d,{enumerable:!0,get:c[d]})}})(),(()=>{a.o=(a,b)=>Object.prototype.hasOwnProperty.call(a,b)})(),a(377)})();