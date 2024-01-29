
var submit = document.getElementById('submit');
submit.addEventListener('click', addData);

function addData() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    if(localStorage.getItem(email)!==null){
        alert("This email id already registered !");
        return;
    }

    let obj ={
        name : name,
        email : email,
        phone : phone
    };
    
    let myObj_serialized = JSON.stringify(obj);
    localStorage.setItem(email,myObj_serialized);
    // localStorage.setItem('Nam', name);
    // localStorage.setItem('Email', email);
    // localStorage.setItem('Phone', phone);
}

 
 for(let i=0;i<localStorage.length;i++){
    let key=localStorage.key(i);//it gives the key
    let data = localStorage.getItem(key);
    let dataName = JSON.parse(data).name;
    let dataEmail = JSON.parse(data).email;

 
    var li = `<li id="${dataEmail}">${dataName} <button  onClick="deleteuser('${dataEmail}')">delete</button>
    <button onClick="updateUser('${dataEmail}')">edit</button></li>`;
    let target = document.querySelector('.usersList');
    target.innerHTML = target.innerHTML + li;
    console.log(li);
 }

 function deleteuser(em){
    localStorage.removeItem(em);
    deleteUserFromScreen(em);

 }
 function deleteUserFromScreen(em){
    let parentNode = document.querySelector('.usersList');
    let childNode = document.getElementById(em);
    parentNode.removeChild(childNode);
 }


 function updateUser(em){
    let nam = JSON.parse(localStorage.getItem(em)).name;
    let emai = JSON.parse(localStorage.getItem(em)).email;
    let ph = JSON.parse(localStorage.getItem(em)).phone;
    
    document.getElementById('name').value = nam;
    document.getElementById('email').value = emai;
    document.getElementById('phone').value = ph;
    
    deleteUserFromScreen(em);
 }



  
  




