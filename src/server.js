const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const PORT = process.env.PORT || 8080;

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded( { extended:true }));

const setupLoginRoute = require("./routes/login");
const setupAddRoute = require("./routes/add");

setupLoginRoute(app);
setupAddRoute(app);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.get("/welcome", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/welcome.html"));
});

app.listen(PORT, () => {
  console.log('Running server on port ', PORT);
})