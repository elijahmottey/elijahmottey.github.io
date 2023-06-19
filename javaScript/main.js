

// selecting #myUL from index.html
const myUl=document.querySelector("#myUL");

//fetching data from json file named data.json
fetch("data.json")
.then(respond=>respond .json())
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
               font-size: 1.2rem;" class="work-des" href="${data[i].website}"> ${data[i].position}</a>
              <p class="color">${data[i].company}</p><br>
  
              <span class="country">${data[i].location}</span>
    `
     myUl.append(myLi)

     



  }

  const toggles=document.querySelector(".head-outter");
     const li_1=document.querySelectorAll("li");
     const changeH2=document.querySelectorAll(".work-des");

     toggles.addEventListener("click",function(){
      toggles.classList.toggle("active");
      changeH2Color();
      liall();

     })

      //looping through all fieldset  to apply dark background effect
      function liall(){
        for(let a of li_1){
          a.classList.toggle("active");
        }
      }

            //looping through all H2 to apply dark background effect
      function changeH2Color(){
        for(let b of changeH2){
          b.classList.toggle("active")
        }
      }

})
.catch(error=>console.log(error))





//------------------------------------------load button--------------------------
const load=document.querySelector(".button-load-more")
fetch("./data.json")
.then(respond=>respond.json())
.then(data=>{
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
                 font-size: 1.2rem;" class="work-des" href="${data[i].website}"> ${data[i].position}</a>
                <p class="color">${data[i].company}</p><br>
    
                <span class="country">${data[i].location}</span>
      `
       
        myUl.append(myLi)
       
        
    
    }
      load.style.display="none"

  
   
  }
  const toggle1=document.querySelector(".head-outter");
  const li_2=document.querySelectorAll("li");
  const changeH2=document.querySelectorAll(".work-des");

  toggle1.addEventListener("click",function(){
   toggle1.classList.toggle("active");
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
  


  })

})
.catch(error=>console.log(error))






// from the header tag  the  changeBColor means change Background color of the background
const toggles=document.querySelector(".head-outter");
const body=document.querySelector("body");
const form=document.querySelector("form");
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
  // menupopup.style.color="yellow"
   menuPopup.classList.toggle("active")
  
})






// filter section

function myFunction() {
  // Declare variables
  var input,input1, filter,filter1 , ul, li, a,b, i,txtValue1, txtValue;
  input = document.getElementById('myInput');
  input1 =document.getElementById('myInput');
  filter = input.value.toUpperCase();
  filter1 = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    b = li[i].getElementsByTagName("p")[0];
    txtValue1 = b.textContent || b.innerText;
    if ((txtValue.toUpperCase().indexOf(filter) > -1) || (txtValue1.toUpperCase().indexOf(filter1) > -1) ){
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}







