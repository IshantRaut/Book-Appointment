 window.addEventListener("DOMContentLoaded",onStart());
 var submit = document.getElementById('submit');
 submit.addEventListener('click', addData);

function addData(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    let obj = {
        name: name,
        email: email,
        phone: phone
    };

    axios.post('http://localhost:3000/addData', obj)
    .then((res)=>displayOnScreen(res.id,name));
}


function onStart(){
    axios.get('http://localhost:3000/getusers')
    .then((res) => {
      for (let i = 0; i < res.data.length; i++) {
        dataName = res.data[i].name;
        dataEmail = res.data[i].email;
        id = res.data[i].id;
        displayOnScreen(id,dataName);
        }
    })
}


function displayOnScreen(id, name) {
    let li = `<li id="${id}">${name} 
                <button onClick="deleteuser('${id}')">delete</button>
                <button onClick="editUser('${id}')">edit</button>
              </li>`;
    let target = document.querySelector('.usersList');
    target.innerHTML = target.innerHTML + li;
}


function deleteuser(id) {
    let element = document.getElementById(id);
    axios.post(`http://localhost:3000/delete/${id}`)
    .then(element.remove())
}


function editUser(id) {
    let name;
    let email;
    let phone;

    axios.post(`http://localhost:3000/getUserById/${id}`)
    .then((res) => {
        name = res.data.name
        email = res.data.email
        phone = res.data.phone
        document.getElementById("name").value = name;
        document.getElementById("email").value = email
        document.getElementById("phone").value = phone
    })
    .then(deleteuser(id));

}

