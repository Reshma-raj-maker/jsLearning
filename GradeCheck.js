function checkGrade() {
   var mark = parseFloat(document.getElementById('grade').value);
   var h1 = document.createElement("h1")
   if (mark>=90) {
      h1.innerHTML = "A+"
      document.body.appendChild(h1)

   }
   else if(mark>=80&&mark<90){
       h1.innerHTML = "B+"
      document.body.appendChild(h1)

   }
     else if(mark>=70 &&mark<80){
       h1.innerHTML = "B"
      document.body.appendChild(h1)

   }
     else if(mark>=60 && mark<70){
       h1.innerHTML = "c+"
      document.body.appendChild(h1)

   }
     else if(mark>=50 && mark<60){
       h1.innerHTML = "c"
      document.body.appendChild(h1)

   }
   else{
      h1.innerHTML = "Fail"
      document.body.appendChild(h1) 
   }
}
