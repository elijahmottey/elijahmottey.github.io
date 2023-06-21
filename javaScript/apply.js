const myHeader=document.querySelector("header");
const myMain=document.querySelector("main");

fetch("./data.json")
.then(respond=>respond.json())
.then(data=>{
    for(let i=0;i<data.length;i++){
        if(data[i].id===1){
    const myDiv1=document.createElement("div")
    const myDiv2=document.createElement("div")

      myDiv1.innerHTML=`
      <div class="head-background-content background">
            <div class="head-content ">
              <img src="./assets/desktop/logo.svg" alt="">
          </div >
          <div class="head-images">
         <img class="image-size" src="./assets/desktop/icon-sun.svg" alt="">
         <div class="head-outter"><div class="head-inner"></div></div>
         <img class="image-size" src="./assets/desktop/icon-moon.svg" alt="">
         
          </div>
  
      </div>
      <div class="outter-container" >
          <div class="job" >
            <h3>Developer's Job Application Forms</h3>
     
          </div>

          <div class="back">
           
              <a href="${data[i].website}" class="button "   target="_blank"><button class="button " id="b-expand">Back</button> </a>
               
      
   
          </div>
      </div>
      
      `
      myHeader.append(myDiv1)

      

      myDiv2.innerHTML=`
              
       
      <form action="">

      <label for="text" >First Name</label>
      <input type="text" class="text">
       

       <label for="text">Last Name</label>
      <input type="text" class="text">

      <label for="text">Nationality</label>
      <input type="text" class="text">

      <label for="text">Job Portfolio</label>
      <input type="text" class="text">

      

      <label for="text">Age</label>
      <input type="number" class="text">

      <label for="text">Contact</label>
      <input type="number" class="text">

      <label for="text">Email</label>
      <input type="email" class="text">
      

      <label for="text">Upload Your CV</label>
      <input type="file" class="text">

      <label for="text">Upload Your National ID</label>
      <input type="file" class="text">

      <label for="text" >choose the company you are applying to</label>
      <select name="text" id="">
          <option value="text">1</option>
          <option value="text">1</option>
          <option value="text">1</option>


      </select><br>
    <br> <div>
      <label for="text">Describe the reason why you want to join our company</label>
      <textarea  placeholder="type with precision" name="" id="textarea"  cols="28" rows="10"></textarea><br>


     </div>

     <button class="button " >Submit</button>

      
      `
      myMain.append(myDiv2)

        }
    }
})
.catch(error=>console.log(error))