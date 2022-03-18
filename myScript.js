window.onscroll = function() {myFunction()};
var imeges= document.querySelectorAll('.move');
var observer= new IntersectionObserver((sliderImegs)=> {
  sliderImegs.forEach(sliderImeg => {
   if (sliderImeg.intersectionRatio>0){
    sliderImeg.target.style.opacity="1";
    sliderImeg.target.style.transform="translateX(0%)"
}else{
  sliderImeg.target.style.opacity="0";
  sliderImeg.target.style.transform="translateX(-50%)"

}

});
  
  })
  imeges.forEach(image=>{
    observer.observe(image);
  })
  // ...

  var ButtonRed = document.getElementById("red")
  var defultBack = document.getElementById("defult");
  var blueButton = document.getElementById("blue");
  var grisButton = document.getElementById("gris");
  var informaSection = document.getElementById("information");
    function makeBackRed (){
      document.body.style.backgroundColor= "rgb(126, 80, 80)";
      informaSection.style.background="rgb(139, 102, 102)";
      }
      ButtonRed.addEventListener("click",makeBackRed);

      function defult(){
        document.body.style.backgroundColor="rgb(204, 192, 172)";
        informaSection.style.backgroundColor="rgb(216, 207, 190)";
      }
      defultBack.addEventListener("click",defult);

      function MakItBlue(){
        document.body.style.backgroundColor="rgb(112, 85, 199)";
        informaSection.style.backgroundColor="rgb(167, 154, 209)";
      }
      blueButton.addEventListener("click",MakItBlue);

      function MakeItGris(){
        document.body.style.backgroundColor="rgb(107, 114, 112)";
        informaSection.style.backgroundColor="rgb(146, 150, 149)";
      }
      grisButton.addEventListener("click",MakeItGris);

      //.. picture moving
      let pic = document.getElementById("flip-card")
      function movepic(){
     
        pic.classList.toggle("pigPic")
      }
      let interval =setInterval(movepic, 1000)
      window.onload=interval
        pic.addEventListener("mouseover",function(){
          window.onload=clearInterval(interval)
          console.log("is over")
        })
        
        
      
    
 
