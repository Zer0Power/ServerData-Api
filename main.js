//---------------------------đđŦ 'Zer0Power đđŦ---------------------------//
//Packages
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");

const Routes = require("./routes/index");

const app = express();
//---------------------------đđŦ 'Zer0Power đđŦ---------------------------//

app.use(bodyParser.json());
app.use(cors({ origin: "*" }));

app.listen(2010, () => {
  console.log("[đļ]Server Is Running Properly ....\n[âšī¸]Port : 2010");
});

app.use("/", Routes);
//---------------------------đđŦ 'Zer0Power đđŦ---------------------------//
