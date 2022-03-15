const express = require("express");
const app = express();

app.listen(8080, () => {
  console.log("Web Application Currency Converter started and Listening on port 8080");
});

// serve css as static
app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "http://localhost:8080/dashboard.html");
});
