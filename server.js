const express = require("express");
const app = express();
const cors = require("cors");

const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Last test!");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
