import express from "express"

const router = express.Router()

// GETs

router.get("/", (req, res) => {
    res.send("Homepage")
})


// POSTs

export default router