// get the tags from html content
const header=document.querySelector("header");
const main=document.querySelector("main");
const footer1=document.querySelector("footer")

fetch("../data.json")
.then(respond=>respond.json())
.then(data=>{
  for(let i=0;i<data.length;i++){
  const mydiv=document.createElement("div");
  const myDiv=document.createElement("div");
  const div=document.createElement("div");

  if (data[i].id===12){
    // header
    mydiv.innerHTML=`
  
    <div class="head-background-content background">
             <div class="head-content ">
               <img src="/assets/desktop/logo.svg" alt="">
           </div >
           <div class="head-images">
          <img class="image-size" src="/assets/desktop/icon-sun.svg" alt="">
          <div class="head-outter"><div class="head-inner"></div></div>
          <img class="image-size" src="/assets/desktop/icon-moon.svg" alt="">
          
           </div>
   
       </div>
       <div class="outter-container" >
           <div class="inner-container-1" style="background-color:${data[i].logoBackground}">
               <!-- <h2>Blogr</h2> -->
               <img src="${data[i].logo}" class="move-image" alt="Blogr">
   
           </div>
           <div class="inner-container-2">
              <div class="container-2-1">
                 <h2>Blogr</h2>
                 <a class="color" href="#">${data[i].company}</a>
              </div>
           
               <a href="/index.html" target="_blank"><button class="button " id="b-expand">Company Site</button> </a>
                
       
    
           </div>
       </div>
       
 
 `
    
// main
    
        myDiv.innerHTML=`
      
      
      <div class="employee-description">
              <div class="employee-data">
                  <div class="data">
                          <p class="color">${data[i].postedAt} <span>${data[i].contract}</span></p>
                          <h2>${data[i].position}</h2>
                          <p class="country">${data[i].location}</p>
              
      
                  </div>
                  <div class="apply">
                  <a href="/apply/html/applyID_12.html" target="_blank" >  <button class="button apply-1" >Apply Now</button></a>
                  </div>
      
              </div><br>
              <article>
                  <p>${data[i].description}</p>
                      <br> <h4>Requirement</h4>
                        <p>
                          ${data[i].requirements.content}

                        </p>

                        <ul>
                         <li>${data[i].requirements.items[0]}</li>
                         <li>${data[i].requirements.items[1]}</li>
                         <li>${data[i].requirements.items[2]}</li>
                         <li>${data[i].requirements.items[3]}</li>

                        </ul><br> 
                        <h4>What You Will Do</h4>
                        <p>${data[i].role.content}</p>
                        <ol>
                         <li> ${data[i].role.items[0]}</li>
                         <li> ${data[i].role.items[1]}</li>
                         <li> ${data[i].role.items[2]}</li>
                         <li> ${data[i].role.items[3]}</li>
                        </ol>
              </article>
            
      
          </div>
      
      
       `



      //  footer
      div.innerHTML=` 
          <div class="footer">
          <div .footer>
              <h4>${data[i].position}</h4>
              <p class="color">So Digital Inc.</p>
          </div>
          <div class="apply">
              <button class="button   footer-button">Apply Now</button>
          </div>
        </div>
          
      
      
      
      
      
      `


      header.append(mydiv);    
      main.append(myDiv);
      footer1.append(div);




      
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
    employees.classList.toggle("active");
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


      
      
    
    
 }

  }
 
})
.catch(error=>console.log(error));












