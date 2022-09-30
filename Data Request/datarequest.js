"use strict";

const URL = "trainers.json";
const URL2 = "https://reqres.in/api/users";

/*fetch(URL2)
.then(function(response){
    return response.json();
})
.then(function (data){
    console.log(data);
})
.catch(function (err){
    console.error(err);
})*/

axios.get(URL)
.then(response => appendData(response.data))
.catch(err => console.error(err));

function appendData(data){
    let dataList = document.getElementById("myData");
    for(let i = 0; i<data.length; i++){
        let trainer = document.createElement("div");
        let id = document.createElement("card");
        id.innerText = "ID: " + data[i].userId;
        trainer.appendChild(id);
        let name = document.createElement("p");
        name.innerText = "Name: " + data[i].name;
        trainer.appendChild(name);
        dataList.appendChild(trainer);
    }
}

fetch("https://reqres/api/users, {
       method: 'post'
       headers: 
       {
       "contenttype": "application/json"
    },
    body: JSONstringify(
        {ID: 8,
        name: Saleena,
        ID 9,
        name: Maryam
        })
    
})