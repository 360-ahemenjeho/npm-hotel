(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const c of e.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function o(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function s(t){if(t.ep)return;t.ep=!0;const e=o(t);fetch(t.href,e)}})();function a(){return`
    <h1>Contact Our Restaurant</h1>
    <p>Please reach out to us!</p>
    <img src="http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRvC27D9KlxeEham1w-Wpd_pu3hd4A-OywxRbdnx9JFLpcTD7dfL0bD_WI6Ro8QkzrPLkBMzA9osrMpi4JSP5Y" alt="Our cozy restaurant contact" />
  `}function d(){return`
    <h1>Welcome to Our Restaurant</h1>
    <p>Come try the best meals in town!</p>
    <img src="http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcRdtRLRVCwp7bBfNGbnVwED553WpvsUpONV-O_Fw_mXOT9BUsxvhI8nttQj-wR4HP_XPACmaF1uehVGVwK2PtM" alt="Our cozy restaurant" />
  `}function l(){return`
    <h1>Our Restaurant Menus</h1>
    <p>You can't resist this meals!</p>
    <img src="http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQ5mYimhB-E4MQcgwmIdV3Ng1EOPNjd82JMlpjD92nOGm2DKJjXQgr42BlDVWDXFHJBGeG5amIULY3W6WS6NG4" alt="Our cozy restaurant" />
  `}const i={home:d,contact:a,menu:l};function m(){return`
    <h1>Tabs not found!</h1>
  `}function u(n){const r=document.querySelector("#root");r.innerHTML=i[n]?i[n]():m()}function f(){document.querySelectorAll("nav button").forEach(r=>{r.addEventListener("click",()=>{const o=r.dataset.tab;u(o)})})}window.addEventListener("load",()=>{f(),u("home")});
