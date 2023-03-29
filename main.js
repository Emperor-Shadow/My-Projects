const nextBtn1 = document.querySelector('.firstBody .next'),

nextBtn2 = document.querySelector('.secondBody .next2'),

backBtn2 = document.querySelector('.secondContainer .skip2:first-of-type'),

backBtn3 = document.querySelector('.thirdContainer .skip3:first-of-type'),

container1 = document.querySelector('.firstContainer'),

container2 = document.querySelector('.secondContainer'),

container3 = document.querySelector('.thirdContainer'),

container4 = document.querySelector('.signUp'),

signUpBtn = document.querySelector('.thirdBody .next3'),
logInBtn = document.querySelector('.signUp .login')
signInBtn = document.querySelector('#sign'),
input = document.getElementById('email'),

showBtn = document.querySelector('.signUp img'),
skipBtn = document.getElementById('skip');


nextBtn1.addEventListener("click" , ()=>{
  container1.style.left = -40 + "px";
  container2.style.left = 230 + "px"
  container1.style.transition = "0.3s ease"
  container2.style.transition = "0.3s ease"
})

nextBtn2.addEventListener("click" , ()=> {
  container1.style.left = -100 + "px";
  container2.style.left = -500 + "px";
  container3.style.left =  -220 + "px";
  container2.style.transition = "0.3s ease"
  container3.style.transition = "0.3s ease"
})

backBtn2.addEventListener("click" , ()=> {
  container1.style.left = 680 + "px";
  container2.style.left = 700 + "px"
  container1.style.transition = "0.3s ease"
  container2.style.transition = "0.3s ease"
})

backBtn3.addEventListener("click" , ()=>{
  container1.style.left = 0 + "px";
  container2.style.left = 230 + "px"
  container3.style.left = 700 + "px"
  container1.style.transition = "0.3s ease"
  container2.style.transition = "0.3s ease"
})

signUpBtn.addEventListener("click" , ()=>{
  container1.style.left = -200 + "px";
  container2.style.left = -700 + "px";
  container3.style.left =   -850 + "px";
  container4.style.left = -680 + "px"
  container2.style.transition = "0.3s ease"
  container3.style.transition = "0.3s ease"
  container4.style.transition = "0.3s ease"
})
signInBtn.addEventListener("click" , ()=> {
  alert("Signing in site is still in construction. But you will be added to the waitlist")
})
logInBtn.addEventListener("click" , ()=> {
  alert(`Account does not exist. But ${input.value} will be added to the wait-list`)
})
showBtn.addEventListener("click" , ()=> {
  showBtn.classList.toggle("active");
  
   if(showBtn.classList.contains("active")) {
     document.querySelector('#password').setAttribute("type" , "text"),
 showBtn.setAttribute("src" , "/eye-slash.png")
   }else {
     document.querySelector('#password').setAttribute("type" , "password"),
  showBtn.setAttribute("src" , "/eye.png")
   }
})

skipBtn.addEventListener("click" , ()=>{
  container1.style.left = -200 + "px";
  container2.style.left = -700 + "px";
  container3.style.left =   -850 + "px";
  container4.style.left = -680 + "px"
})
