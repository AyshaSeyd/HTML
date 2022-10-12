const chai = require("chai"); // assertions

const chaiHttp = require("chai-http"); // http requests

chai.use(chaiHttp); // adds the http plugin

const server = require("./people.js"); // imports the server so I can send requests to it

describe("name tests", () => {
    it("should create a name", (done) => {
        const newName = {
            "name": "Saleena",
            "disposition": "Mother"
        }
        chai.request(server).post("/create").send(newName).end((err, res) => {
            chai.expect(err).to.be.null;
            chai.expect(res.status).to.equal(201);
            chai.expect(res.body).to.include(newName);
            done(); // tells mocha the test has finished
        })
    })
})