import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{i as s}from"./assets/vendor-BbbuE1sJ.js";const r=document.querySelector(".form");document.querySelector("button");const l=document.querySelector('input[name="delay"]');document.querySelector('input[value="fulfilled"]');document.querySelector('input[value="rejected"]');r.addEventListener("submit",m);r.addEventListener("change",u);let o=0,i;function u(t){t.target===l?o=l.value:t.target.value==="fulfilled"?i=!0:i=!1}function m(t){t.preventDefault(),new Promise((e,n)=>{setTimeout(()=>{i?e(`✅ Fulfilled promise in ${o}ms`):n(`❌ Rejected promise in ${o}ms`)},o),r.reset()}).then(e=>{s.show({message:e,backgroundColor:"green",messageColor:"white",position:"topRight",messageSize:"16"})}).catch(e=>{s.show({message:e,backgroundColor:"red",messageColor:"white",position:"topRight",messageSize:"16"})})}
//# sourceMappingURL=2-snackbar.js.map
