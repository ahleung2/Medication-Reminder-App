import express from "express"
//import router from "./routes/index.mjs"

import loginRoute from "./routes/loginRoute.mjs";
import registerRoute from "./routes/registerRoute.mjs";
import bodyParser from "body-parser";

const PORT = 3000
const app = express()

// app.use(router) 

// serve static page
app.use(express.static("./public"))

// parse incoming form data
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// app.use(bodyParser.urlencoded({ extended: true }));
//app.use(express.json())

// middleware
app.use("/sign-in", loginRoute);
app.use("/register", registerRoute);
// with help of body parser, we can use req.body

app.listen(PORT, () => console.log(`Running on port ${PORT}...`))