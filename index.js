require("dotenv/config");
const express = require("express");

const client = require("./client");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

/*    app.get("/users", async (req, res) => {
  try {
    const result = await client.query("SELECT * FROM Router_Config");
    res.json(result.rows);
  } catch (err) {
    console.log(err);
  }
});   */

app.get("/users/:id", async (req, res) => {
  try {
    console.log(req.params.id);
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
