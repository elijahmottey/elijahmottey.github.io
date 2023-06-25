

// selecting #myUL from index.html
const myUl=document.querySelector("#myUL");

//fetching data from json file named data.json
fetch("./data.json")
.then(respond=>respond.json())
.then(data=>{
  for(let i=0;i<12;i++){
    //creating an li to contain the items
    console.log(`location = ${data[i].location} and position = ${data[i].position}`)
    const myLi=document.createElement("li");

    myLi.innerHTML=`
      
      
    <div class="move-image" 
    style="background-color:${data[i].logoBackground}; 
    height: 50px; width: 
    50px; border-radius: 15px;
     display:flex; justify-content: 
     center; align-items: center">
    <img src=".${data[i].logo}" />
  </div>  

    <p class="color">${data[i].postedAt} <span>${data[i].contract}</span></p>
               <a style="font-weight: bolder;
               font-size: 1.2rem;" class="work-des" href=".${data[i].website}"> ${data[i].position}</a>
              <p class="color">${data[i].company}</p><br>
  
              <span class="country">${data[i].location}</span>
    `
     myUl.append(myLi)

     

  }

  //------------------------------------------load button--------------------------
  const load=document.querySelector(".button-load-more")

  load.addEventListener("click",()=>{
    for(let i=0;i<data.length;i++){
      //creating an li to contain the items
      if(data[i].id>12){
      console.log(`location = ${data[i].location} and position = ${data[i].position}`)
      const myLi=document.createElement("li");
  
      myLi.innerHTML=`
        
        
      <div class="move-image" 
      style="background-color:${data[i].logoBackground}; 
      height: 50px; width: 
      50px; border-radius: 15px;
       display:flex; justify-content: 
       center; align-items: center">
      <img src=".${data[i].logo}" />
    </div>  
  
      <p class="color">${data[i].postedAt} <span>${data[i].contract}</span></p>
                 <a style="font-weight: bolder;
                 font-size: 1.2rem;" class="work-des" href=".${data[i].website}"> ${data[i].position}</a>
                <p class="color">${data[i].company}</p><br>
    
                <span class="country">${data[i].location}</span>
      `
       
        myUl.append(myLi)
        
       
        
    
    }
      load.style.display="none";
      
      
      
    
  }
  
// --------------------dark mode-------------------------------

    
})


// --------------------dark mode-------------------------------

const toggle1=document.querySelector(".head-outter");
  const li_2=document.querySelectorAll("li");
   const changeH2=document.querySelectorAll(".work-des");
const darkMode=()=>{
   toggle1.addEventListener("click",function(){
    changeH2Color();
    liall();

   })

   //looping through all li  to apply dark background effect
    function liall(){
      for(let a of li_2){
        a.classList.toggle("active");
      }
    }

          //looping through all H2 to apply dark background effect
    function changeH2Color(){
      for(let b of changeH2){
       b.classList.toggle("active")
      }
    }
  }
       darkMode()
    }
)
.catch(error=>console.log(`Error ${error}`))














// from the header tag  the  changeBColor means change Background color of the background
const toggles=document.querySelector(".head-outter");
const body=document.querySelector("body");
const form=document.querySelector(".form");
const search=document.querySelectorAll(".input-rb");


const imageFilter=document.querySelector(".image-hidden");
const searchBoarder=document.querySelectorAll(".search-boarder")

// popup
const popup=document.querySelector(".filter");
const menuPopup=document.querySelector(".popup");

// change to dark blue when clicked on 
toggles.addEventListener("click",function(){
    toggles.classList.toggle("active");
    body.classList.toggle("active");
    form.classList.toggle("active");
    imageFilter.classList.toggle("active");
    menuPopup.classList.toggle("active1")
    searchall();
    searchBorderall();
   
})



//looping through all  search to apply dark background effect
function searchall(){
  for(let i of search){
    i.classList.toggle("active");
  }
}


function searchBorderall(){
  for(let i of searchBoarder){
    i.classList.toggle("active");
  }
}



// popup

popup.addEventListener("click",function(){
  
   menuPopup.classList.toggle("active")
  
})






// filter section

function myFunction() {
  
  // Declare variables
 

  const search_constraint = document.querySelectorAll("#myInput")
  const search_title = search_constraint[0].value
  const search_location = search_constraint[1].value
  const search_contract = document.querySelector("[type=checkbox]").checked

  
 
  myUl.innerHTML = ""
  fetch("./data.json")
           .then(respond => respond.json())
           .then(data => {
              if(search_title && !search_location && !search_contract){  // search only by title
                result = data.filter((entry)=>{
                  return search_title == entry.position  && entry.contract == "Part Time"                
            })
              } else if (!search_title && search_location && !search_contract){ // search only by location
                result = data.filter((entry)=>{
                  return  search_location == entry.location  && entry.contract == "Part Time"                 
            })
              }else if (!search_title && !search_location){ // search by contract
                if(search_contract){
                  result = data.filter((entry)=>{
                   return entry.contract == "Full Time"
               }              
           )
             }  else {
               result = data.filter((entry)=>{
                 return entry.contract == "Part Time"
             }              
         )
             }
           }
               else if (search_title && search_location && !search_contract){ // search by both location and title
                result = data.filter((entry)=>{
                  return search_title == entry.position  && search_location == entry.location && search_contract == "Part Time"                 
            })
            
              } else if (search_title && search_contract && !search_location){ // search by title and contract
                result = data.filter((entry)=>{
                   return search_title == entry.position &&  entry.contract == "Full Time"
                })

              }
              else if (!search_title && search_contract && search_location){ // search by location and contract
                result = data.filter((entry)=>{
                   return search_location == entry.location && entry.contract == "Full Time"
                })

              } else if (search_title && search_contract && search_location){
                result = data.filter((entry)=>{
                  return search_title == entry.position && search_location == entry.location &&
                  entry.contract == "Full Time"
                })
              }

              else {  // when there is nothing to search
                result = data
              }
             

              // console.log(`the result is ${result}`)
              for(let i=0; i<result.length; i++){
                let card = document.createElement("li")
                card.innerHTML = `<div class="move-image" 
                style="background-color:${result[i].logoBackground}; 
                height: 50px; width: 
                50px; border-radius: 15px;
                 display:flex; justify-content: 
                 center; align-items: center">
                <img src=".${result[i].logo}" />
              </div>  
            
                <p class="color">${result[i].postedAt} <span>${result[i].contract}</span></p>
                           <a style="font-weight: bolder;
                           font-size: 1.2rem;" class="work-des" href="${result[i].website}"> ${result[i].position}</a>
                          <p class="color">${result[i].company}</p><br>
              
                          <span class="country">${result[i].location}</span>`
                myUl.append(card)
            }
                    
            
// --------------------dark mode-------------------------------

const toggle1=document.querySelector(".head-outter");
const li_2=document.querySelectorAll("li");
 const changeH2=document.querySelectorAll(".work-des");
const darkMode=()=>{
 toggle1.addEventListener("click",function(){
  changeH2Color();
  liall();

 })

 //looping through all fieldset  to apply dark background effect
  function liall(){
    for(let a of li_2){
      a.classList.toggle("active");
    }
  }

        //looping through all H2 to apply dark background effect
  function changeH2Color(){
    for(let b of changeH2){
     b.classList.toggle("active")
    }
  }
}
     darkMode()

           })
           .catch(error=>{
            console.log(error)
           })
           



}








