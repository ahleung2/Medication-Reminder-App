import express from "express"

const router = express.Router()

// GETs

router.get("/", (req, res) => {
    res.redirect("/index.html")
})

router.get("/sign-in", (req, res) => {
    res.redirect("/sign-in.html")
})

router.get("/register", (req, res) => {
    res.redirect("/register.html")
})

// POSTs

export default router