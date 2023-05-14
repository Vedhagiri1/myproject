const express = require("express")
const req = require("express/lib/request")
const app = express()
const path = require("path")
const hbs = require("hbs")
const async = require("hbs/lib/async")
const collection = require("./mongodb")
const { Connection } = require("mongoose")

const tempelatePath = path.join(__dirname, '../tempelates')

app.use(express.json())
app.set("view engine", "hbs")
app.set("views", tempelatePath)
app.use(express.urlencoded({ extended: false }))
app.use(express.static("public"));
app.get("/", (req, res) => {
    res.render("login")
})

app.get("/signup", (req, res) => {
    res.render("signup")
})

app.post("/signup", async(req, res) => {
    const data = {
        name: req.body.name,
        password: req.body.password
    }

    await collection.insertMany([data])
    res.render("home")
})

app.get("/signup", (req, res) => {
    res.render("signup")
})

app.post("/login", async(req, res) => {
    try {
        const check = await collection.findOne({ name: req.body.name })

        if (check.password === req.body.password) {
            res.render("home")
        } else {
            res.send("wrong password")
        }
    } catch {
        res.send("wrong details")
    }
})

app.listen(3000, () => {
    console.log("port connected")
})
