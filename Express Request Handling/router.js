
const router = require ('express').Router();

let names = ['Saleena', 'Haseeba', 'Naseema'];

router.get("/getAll", (req, res) => {
    res.send(names)
});

router.get("/get/:id", (req, res) =>
    res.send(names[req.params.id]));

router.delete("/remove/:id", (req, res) => {
    const id = req.params.id;
    console.log("ID", id);
    res.send(names.splice(id, 1))
});

router.post("/create", (req, res) => {
    const name = req.body.name;
    names.push(name);
    res.status(201).send(`${name} added successfully`)
});

router.put("/replace/:id", (req, res) => {
    console.log = ("Query", req.query);
    const name = req.query.name;
    const index = req.params.index;
    const old = names[index];
    names[index] = name;
    res.status(202).send(`${old} successfully replaced with ${name}`);
});

module.exports = router;