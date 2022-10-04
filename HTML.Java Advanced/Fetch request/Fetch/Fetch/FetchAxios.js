"use strict";

//GET REQUEST

function getUsers() {
    axios.get("https://reqres.in/api/users")
            .then(res => console.log(res))
            .catch(err => console.error(err));
}
console.log("YO!");

//CREATE REQUEST

function createUser() {
    const name = document.getElementById("userName").value;
    console.log("NAME:", name);
    axios.post("https://reqres.in/api/users", {
        name,
        "job": "leader"
    }).then(res => console.log(res))
        .catch(err => console.error(err));
}

// axios.get(URL)
// .then(response => console.log(response.data))
// .catch(err => console.error(err));

/*axios.get('https://reqres.in/api/users')
.then(function(response) {
if (response.status!== 200) {
    console.log (`Looks like there was a problem.Status Code: ${response.status}`);
} 
console.log(response.data)
})
.catch(err => console.error (`Fetch error : -S ${err}`))*/


