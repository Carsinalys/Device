function getXmlHttp(){var e;try{e=new ActiveXObject("Msxml2.XMLHTTP")}catch(t){try{e=new ActiveXObject("Microsoft.XMLHTTP")}catch(t){e=!1}}return e||"undefined"==typeof XMLHttpRequest||(e=new XMLHttpRequest),e}document.addEventListener("DOMContentLoaded",function(){let e=document.querySelector(".search_input"),t=document.querySelector(".search_form"),n=document.querySelector(".search_submit");e.addEventListener("focus",function(){t.classList.add("search_form_focus"),n.classList.add("search_submit_focus")}),e.addEventListener("blur",function(){setTimeout(function(){t.classList.remove("search_form_focus"),n.classList.remove("search_submit_focus")},1500)})}),window.onload=function(){let e=document.querySelectorAll(".action_signin_object"),t=document.querySelectorAll(".action_compare_object"),n=document.querySelectorAll(".action_cart_object"),o=document.querySelector(".action_plus_object"),c=document.querySelector(".logo_object"),l=document.querySelector(".footer_logo_object"),r=document.querySelectorAll(".social_object"),s=document.querySelector(".action_signin_link"),i=document.querySelectorAll(".footer_nav_link"),d=document.querySelectorAll(".social_link"),u=document.querySelector(".catalog_link"),a=document.querySelectorAll(".list_link"),f=document.querySelector(".logo_link"),m=document.querySelector(".footer_logo_link");e[1].contentDocument.getElementById("user").setAttribute("fill","#ffe27f"),t[1].contentDocument.getElementById("compare").setAttribute("fill","#ffe27f"),n[1].contentDocument.getElementById("cart").setAttribute("fill","#ffe27f"),l.contentDocument.getElementById("logo").setAttribute("fill","#ffe27f"),r[0].contentDocument.getElementById("facebook").setAttribute("fill","#7c7c7c"),r[1].contentDocument.getElementById("instagram").setAttribute("fill","#7c7c7c"),r[2].contentDocument.getElementById("twitter").setAttribute("fill","#7c7c7c");const h=new g("#000000","#7b6e46","#bda762"),y=new g("#000000","#444444","#666666"),p=new g("#ffe27f","#ffc700","#8d7534"),b=new g("#7c7c7c","#b4b4b4","#575757");function g(e,t,n){this.color1=e,this.color2=t,this.color3=n}function v(e,t,n){e.contentDocument.getElementById(t).setAttribute("fill",n)}function L(e,t,n,o){e.addEventListener("mouseover",function(){v(t,n,o.color2)}),e.addEventListener("mouseout",function(){v(t,n,o.color1)}),e.addEventListener("mousedown",function(){v(t,n,o.color3)}),e.addEventListener("mouseup",function(){v(t,n,o.color2)})}L(s,e[0],"user",h),L(f,c,"logo",y),L(i[0],e[1],"user",p),L(a[0],t[0],"compare",h),L(i[1],t[1],"compare",p),L(a[1],n[0],"cart",h),L(i[2],n[1],"cart",p),L(u,o,"plus",h),L(m,l,"logo",p),L(d[0],r[0],"facebook",b),L(d[1],r[1],"instagram",b),L(d[2],r[2],"twitter",b)},document.addEventListener("DOMContentLoaded",function(){let e=document.querySelector(".header_bottom");document.querySelector(".action_plus_cover").addEventListener("click",function(){e.classList.toggle("header_bottom_active")})}),document.addEventListener("DOMContentLoaded",function(){let e=document.querySelector(".range1"),t=document.querySelector(".range2"),n=document.querySelector(".value1"),o=document.querySelector(".value2"),c=document.querySelectorAll(".form_range_thumb");e.oninput=function(){this.value=Math.min(this.value,this.parentNode.childNodes[5].value-1);var e=100/(parseInt(this.max)-parseInt(this.min))*parseInt(this.value)-100/(parseInt(this.max)-parseInt(this.min))*parseInt(this.min),t=this.parentNode.childNodes[1].childNodes;t[1].style.width=e+"%",t[5].style.left=e+"%",t[7].style.left=e+"%",n.innerHTML=this.value},t.oninput=function(){this.value=Math.max(this.value,this.parentNode.childNodes[3].value- -1);var e=100/(parseInt(this.max)-parseInt(this.min))*parseInt(this.value)-100/(parseInt(this.max)-parseInt(this.min))*parseInt(this.min),t=this.parentNode.childNodes[1].childNodes;t[3].style.width=100-e+"%",t[5].style.right=100-e+"%",t[9].style.left=e+"%",o.innerHTML=this.value,c[1].style.background="#63b000",c[1].style.border="2px #fff solid"},e.addEventListener("mousedown",function(){c[0].style.background="#63b000",c[0].style.border="2px #fff solid"}),e.addEventListener("mouseup",function(){c[0].style.background="#fff",c[0].style.border="2px #000 solid"}),e.addEventListener("touchstart",function(){c[0].style.background="#63b000",c[0].style.border="2px #fff solid"}),e.addEventListener("touchend",function(){c[0].style.background="#fff",c[0].style.border="2px #000 solid"}),t.addEventListener("mousedown",function(){c[1].style.background="#63b000",c[1].style.border="2px #fff solid"}),t.addEventListener("mouseup",function(){c[1].style.background="#fff",c[1].style.border="2px #000 solid"}),t.addEventListener("touchstart",function(){c[1].style.background="#63b000",c[1].style.border="2px #fff solid"}),t.addEventListener("touchend",function(){c[1].style.background="#fff",c[1].style.border="2px #000 solid"})}),document.addEventListener("DOMContentLoaded",function(){let e=document.querySelectorAll(".goods_item"),t=document.querySelectorAll(".goods_container"),n=document.querySelectorAll(".hidden");t[1].addEventListener("touchenter",function(t){for(let o=0;o<e.length;o++)t.target===e[o]&&n[o].classList.add("hidden_active")}),t[1].addEventListener("touchleave",function(e){for(let e=0;e<n.length;e++)n[e].classList.remove("hidden_active")})}),document.addEventListener("DOMContentLoaded",function(){let e=document.querySelector(".goods");var t=getXmlHttp();t.open("GET","test.html",!0),t.onreadystatechange=function(){if(4==t.readyState&&200==t.status){t.responseText.split("split");for(let n=0;n<t.responseText.split("split").length;n++){let o=document.createElement("div");o.setAttribute("class","goods_item"),o.innerHTML=t.responseText.split("split")[n],e.appendChild(o)}}},t.send(null),t.addEventListener("loadend",function(){let e=document.querySelector(".value1"),t=document.querySelector(".value2"),n=document.querySelectorAll(".goods_item"),o=[],c=new Object;for(let e=0;e<n.length;e++){let t=parseFloat(n[e].children[1].children[1].innerHTML);o.push(t),c[e]=t}console.log(o),console.log(c),console.log(n[0].children[1].children[1].innerHTML),console.log(parseFloat(n[0].children[1].children[1].innerHTML)),console.log(e.innerHTML),console.log(t.innerHTML)})});