const userDetails = []
const todoListElement = document.getElementById("myUL")
document.querySelector("#add_button").addEventListener("click",addTodo)


function addTodo() {
  //Click event-handler of add button
   const name = document.querySelector("#myInput").value;
   const email = document.querySelector("#myInput1").value;
   const mobile = document.querySelector("#myInput2").value;
   const city = document.querySelector("#myInput3").value;
   const country = document.querySelector("#myInput4").value;
   if(name == ""){
       alert('Please give a valid user name')
   }
   else{
       const todoObject = {
         id: userDetails.length + 1,

         name: name,
         email: email,
         mobile: mobile,
         city: city,
         country: country
       };
        userDetails.push(todoObject);
        console.log(userDetails)
   }
}