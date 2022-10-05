const express = require("express");

const app = express();
const server = app.listen(4494, () => console.log(`server successfully started on port ${server.address().port}`));
