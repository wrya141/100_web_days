let ind = document.querySelector(".scroll .progress")

let scrollheight=document.documentElement.scrollHeight-document.documentElement.clientHeight
window.addEventListener('scroll',()=>{
    let scrolltop=document.documentElement.scrollTop
   
    ind.style.width=`${(scrolltop/scrollheight)*100}%`
})