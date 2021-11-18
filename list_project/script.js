const addList=[];
const todoListElement=document.getElementById("#myul");
document.querySelector("#add_button").addEventListener('click',addfunction);

function addfunction()  {

    const name=document.querySelector("#name").value;
    const productno=document.querySelector("#productno").value;
    const mobile=document.querySelector("#mobile").value;
    const email=document.querySelector("#email").value;

    if(name=="" productno==""email==""){
        alert('Please give a valid task')
    }
   else{
       const addobj={
           id: addList.length + 1,
           productno:productno,
           mobile: mobile,
           email: email
         };
          addList.push(addobj);
          console.log(addList)
       }


document.getElementById("name").value='';
document.getElementById("productno").value='';
document.getElementById("mobile").value='';
document.getElementById("document.getElementById("#name").value="";email").value='';
    } 