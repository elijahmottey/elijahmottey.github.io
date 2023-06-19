




// select the tag ,class or id

const toggles=document.querySelector(".head-outter");
const body=document.querySelector("body");
const form=document.querySelector(".outter-container");
const employees=document.querySelector(".employee-description");
const footer=document.querySelector("footer");
const color=document.querySelectorAll(".color")
const li=document.querySelectorAll("li")
const pa=document.querySelectorAll("p")
const button1=document.querySelector("#b-expand");
const country=document.querySelector(".country");
const apply=document.querySelectorAll(".apply-1")






// change to dark blue when clicked on 
toggles.addEventListener("click",()=>{
    toggles.classList.toggle("active");
    body.classList.toggle("active");
    form.classList.toggle("active");
    // employees.classList.toggle("active");
    footer.classList.toggle("active");
    button1.classList.toggle("active");
    
    country.classList.toggle("active1");
     liall();
    colorall();
    
     pall();
 
   
})
const colorall=()=>{
    for (let i of color){
      i.classList.toggle("active1")
    }
}

const liall=()=>{
    for (let j of li){
      j.classList.toggle("active1")
    }
}

const pall=()=>{
    for (let k of pa){
      k.classList.toggle("active1")
    }
}

apply.addEventListener(
  "click",()=>{
    for (let i of apply){
   
      console.log("alert")
     }
     alert("OOPS \n APPLICATION CLOSED!!")
   
  }
)


