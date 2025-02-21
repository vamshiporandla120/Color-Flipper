const red=document.getElementById("red")
.addEventListener("click",()=>{
    document.body.style.backgroundColor="red";
    let heading=document.getElementById("myh2");
    heading.style.color="yellow";
})

const orange=document.getElementById("orange")
.addEventListener("click",()=>{
    document.body.style.backgroundColor="orange";
    let heading=document.getElementById("myh2");
    heading.style.color="red";
})

const green=document.getElementById("green")
.addEventListener("click",()=>{
    document.body.style.backgroundColor="green";
    let heading=document.getElementById("myh2");
    heading.style.color="orange";
})

const yellow=document.getElementById("yellow")
.addEventListener("click",()=>{
    document.body.style.backgroundColor="yellow";
    let heading=document.getElementById("myh2");
    heading.style.color="green";
})


const random=document.getElementById("random");
random.onclick=function(){
    let red=Math.round(Math.random()*255);
    let green=Math.round(Math.random()*255);
    let blue=Math.round(Math.random()*255);
    let colors=`rgb(${red},${green},${blue})`;
document.body.style.backgroundColor=colors;    
}


