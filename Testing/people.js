const express = require("express");

//const app = require("express").app();

const { personModel } = require("./db");

const app = express();

const server = app.listen(4420);

app.get("/Hi", (req, res) => {
    res.send("Hi, my name is Aysha");
});


let names = ['Saleena', 'Haseeba', 'Naseema'];

app.get("/getAll", (req, res) =>
    personModel.find({})
        .then(people => res.send(people))
        .catch(err => next(err))
);

app.get("/get/:id", (req, res) =>
    res.send(names[req.params.id]));

const deleteMiddleware = ((req, res, next) => {
    console.log("I am not doing express again");
    next();
})

app.delete("/remove/:id", deleteMiddleware, (req, res, next) => {
    const id = req.params.id;
    console.log("ID", id);
    if (id > names.length)
        return next({ status: 404, message: `No name found with ${id}` });
    res.send(names.splice(id, 1))
});

app.post("/create", (req, res, next) => {
    personModel.create(req.body)
        .then(newPerson => res.status(201).send(newPerson))
        .catch(err => next(err))
});

//app.use(app);

module.exports = server;