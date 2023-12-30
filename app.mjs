import express from "express"
import router from "./routes/index.mjs"

const PORT = 3000
const app = express()

app.use(router)

// serve static page
app.use(express.static("./public"))


app.listen(PORT, () => console.log(`Running on port ${PORT}...`))