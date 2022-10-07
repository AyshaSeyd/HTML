const express = require("express");


const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use((req, res, next) => {
    console.log("Request received at", new Date());
    return next();
})

app.use((req, res, next) => {
    console.log("I am done with express");
    return next();
})

app.get("/Hi", (req, res) => {
    res.send("Hi, my name is Aysha");
});


let names = ['Saleena', 'Haseeba', 'Naseema'];

app.get("/getAll", (req, res) => {
    res.send(names)
});

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

app.post("/create", (req, res) => {
    const name = req.body.name;
    names.push(name);
    res.status(201).send(`${name} added successfully`)
});

app.put("/replace/:id", (req, res) => {
    console.log = ("Query", req.query);
    const name = req.query.name;
    const index = req.params.index;
    const old = names[index];
    names[index] = name;
    res.status(202).send(`${old} successfully replaced with ${name}`);
});

app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status).send(err.message);
}
)

const server = app.listen(4420, () => {
    console.log(`server successfully started on port ${server.address().port}`);
})
