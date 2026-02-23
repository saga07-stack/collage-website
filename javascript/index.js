const navLoginBtn = document.getElementById("navLoginBtn");
  const loginPage = document.getElementById("loginPage");
  const homePage = document.getElementById("homePage");


navLoginBtn.addEventListener("click", function(){
  navLoginBtn.style.color="red";
    homePage.style.filter ="blur(5px)"
    loginPage.style.display= "flex";
loginPage.classList.add("loginPage");
 

});
document.addEventListener("click",(e)=>{
  if(
    loginPage.style.display = "flex" && 
    !loginPage.contains(e.target) &&
    e.target !== navLoginBtn
  ) {
    loginPage.style.display ="none"
    homePage.style.filter ="blur(0px)"
    navLoginBtn.style.color ="black";
    
  }
});
const createAccountBtn = document.querySelector(".create-btn");
const createAccountPage = document.getElementById("createAccountPage");
createAccountBtn.addEventListener("click", function(){
    createAccountPage.style.display ="flex";
    loginPage.style.display = "none";
createAccountPage.classList.add("loginPage");

});

const googleBtn = document.querySelector(".social-login");
const loginFromGoogle = document.getElementById("loginFromGoogle");
const loginFromX = document.getElementById("loginFromX");
const loginFromFacebook = document.getElementById("loginFromFacebook");
googleBtn.addEventListener("click",function(e){
  if(e.target.innerText === "g"){
    loginPage.style.display = "none";
    loginFromGoogle.style.display="flex";
    loginFromGoogle.classList.add("loginPage");


  }else if(e.target.innerText === "f"){
    loginPage.style.display = "none";
   loginFromFacebook.style.display ="flex";
   loginFromFacebook.classList.add("loginPage");
  }else{
    loginPage.style.display = "none";
  loginFromX.style.display ="flex";
  loginFromX.classList.add("loginPage")
  }

 });
const closeBtn = document.getElementById("closeBtn");
closeBtn.addEventListener("click",function(){
  window.location.href = "../index.html";
});


const fullName = document.getElementById("fullname");
const email = document.getElementById("email");
const userName = document.getElementById("usernamed");
const password = document.getElementById("passwords");
const confirmPassword = document.getElementById("confirmPassword");
const signupBtn = document.querySelector(".signup-btn");
const signupForm = document.querySelector(".input-group");
let historys = JSON.parse(localStorage.getItem("userData"))|| [];

confirmPassword.addEventListener("input", function(e){
  if(password.value !== e.target.value){
    confirmPassword.style.color = "red";
  }else{
        confirmPassword.style.color ="white";
  };
});

signupBtn.addEventListener("click",function(){
  
    if(email.value === historys.email){
      alert("email already exists");
      return;
    }
  
const details = {
  fullName : fullName.value,
  email: email.value,
  username : userName.value,
  password : confirmPassword.value,

}
historys.push(details);
localStorage.setItem("userData",JSON.stringify(historys));
 alert("create Account Successfully");
    window.location.href="../index.html";

});
 
 const loginBtn = document.querySelector(".login-btn");
 const logInUserName = document.getElementById("username");
 const logInPassword = document.getElementById("password");
 loginBtn.addEventListener("click",function(){
  historys.filter(element=>{
    if(element.username === logInUserName.value && 
    element.password ===logInPassword.value){
      alert("welcome"+ element.username);

    }else{
      alert("incorrect id  password");
    }
  });
 });

const programmeBar = document.getElementById("programmeBar");
const programme = document.getElementById("programme");
const academicProgramme = document.getElementById("academicProgramme");
const culturalProgramme = document.getElementById("culturalProgramme");
const sportProgramme = document.getElementById("sportProgramme");
programmeBar.addEventListener("click", function(e){
 
 if(e.target.value == "old"){
  programme.style.display ="block"
  academicProgramme.style.display ="none"
  sportProgramme.style.display ="none";
  culturalProgramme.style.display= "none";



   window.scrollTo ({
    top: 7000,
    left : 0 ,
    behavior : "smooth",
     });

 }else if(e.target.value == "academic"){
  academicProgramme.style.display ="block"
  programme.style.display = "none"
  sportProgramme.style.display ="none";
  culturalProgramme.style.display= "none";
  window.scrollTo ({
    left : 0 ,
    top: 7000,
    behavior : "smooth",
     });


 }else if(e.target.value == "cultural"){
  culturalProgramme.style.display= "block";
  academicProgramme.style.display ="none"
  sportProgramme.style.display ="none";
  programme.style.display ="none"

 window.scrollTo ({
    top: 7000,
    left : 0 ,
    behavior : "smooth",
     });

 }else if (e.target.value == "sport"){
sportProgramme.style.display ="block";
  academicProgramme.style.display ="none"
  programme.style.display ="none"
  culturalProgramme.style.display= "none";

 window.scrollTo ({
    top: 7000,
    left : 0 ,
    behavior : "smooth",
     });


 }

});

const examBtn = document.getElementById("examBtn");
const exam = document.getElementById("exam");
// exam.style.display = "none";
examBtn.addEventListener("click",function(){
 exam.style.display = "block";

  window.scrollTo ({
    top : 7000,
    left : 0,
    behavior : "smooth",
  })
})
  
  const darkToggle = document.querySelector(".darkToggle");
  const on = document.getElementById("on");
  const off = document.getElementById("off");
  on.style.display ="none"
  let isLight = true;
  darkToggle.addEventListener("click",function(e){
  
  if(isLight){
  on.style.display ="block";
  off.style.display ="none";
  
  isLight = false;
  
  }else{
  on.style.display ="none";
  off.style.display ="block";
  isLight = true;
  
  }
  });
 
 const levels = ["nursary", "lkg","ukg","class1", "class2",
 "class3","class4", "class5","class6","class7",
"class8","class9", "class10"
 ];
const sectionLevel = document.querySelector(".sectionLevel");
const optionFaculties = document.getElementById("optionFaculties");
const section = document.getElementById("section");
const lectures = document.getElementById("lecture");
let  classes ;
let sections ;
let lecture;
let faculties;
 const level = sectionLevel.addEventListener("change",function(e){
if( levels.includes (e.target.value)){
  optionFaculties.style.display = "none";
}else{
  optionFaculties.style.display = "block";

}
classes = e.target.value;
});
 faculties =  optionFaculties.addEventListener("change",function(e){
 faculties =  e.target.value
});
sections  = section.addEventListener("change",function(e){
  sections = e.target.value;
});
lecture = lectures.addEventListener("change", function(e){
  lecture = e.target.value;
}) 
const searchBtn = document.getElementById("searchBtn");
 searchBtn.addEventListener("click",function(){

 });
