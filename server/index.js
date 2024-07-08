const express = require("express");
const PORT = 3000;

const app = express();
const bodyParser = require("body-parser");

require("./db");
require("./models/User");
require("./models/PostBlog")
// require("./models/userData");
const authRoutes = require("./routes/authRoutes");
const requireToken = require("./Middleware/AuthTokenRequired");
app.use(bodyParser.json());
app.use(authRoutes);

app.get("/", requireToken, (req, res) => {
  console.log(req.user);
  res.send(req.user);
});

app.listen(PORT, () => {
  console.log(`Server is runnung on port : ${PORT}`);
});
