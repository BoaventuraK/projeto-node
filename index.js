import express from "express"

const app = express()
const port = 8081

app.use(express.json())

const users = []

const buscarIndex=(id)=>{
    return users.findIndex(user => user.id == id)
}

app.get("/users", (req, res) => {
    return res.status(200).json(users)
})

app.post("/users", (req, res) => {
    const user = req.body
    users.push(user)
    res.json({ user })
})

app.put("/users/:id", (req, res) => {
    const index = buscarIndex(req.params.id)
    users[index].userName=req.body.userName
    users[index].age=req.body.age
    res.json(users[index])
})

app.delete("/users/:id", (req, res) => {
    const index = buscarIndex(req.params.id)
    res.json({ mensagem: `${index}` })
    users.splice(index, 1)
})

app.listen(port, () => {
    console.log(`Server rungin at url: http://localhost:${port}/users`)
})
