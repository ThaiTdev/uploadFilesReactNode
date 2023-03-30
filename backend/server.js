const express = require("express");
require("dotenv").config();
const fileUpload = require("express-fileupload");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 6000;
app
  .use(express.json())
  .use(morgan("dev"))
  .use(bodyParser.json())
  .use(cors())
  .use(fileUpload());

require("./src/routes/Uploads")(app);

app.use("/uploads", express.static("uploads"));

app.listen(PORT, () => {
  console.log(`vous-ètes connecté sur le PORT:${PORT}`);
});
