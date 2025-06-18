let scroolContainer=document.querySelector(".galary");
scroolContainer.addEventListener("wheel",(evt)=>{
    evt.preventDefault();
    scroolContainer.scrollLeft+=evt.deltaY;
    scroolContainer.style.scrolBehavior="smooth";
})