
const express = require('express')
const cors = require('cors')
const { MongoClient } = require('mongodb')
require('dotenv').config()
const app = express()


const PORT = process.env.PORT || 3300

// using json format on express and enabling cors from the Front-end URL

app.use(express.json())
app.use(cors({  origin: process.env.FRONTEND_URL}))

// connecting to MongoDB

const uri = process.env.MONGO_URI
const client = new MongoClient(uri)
let db, users

async function run() {
  try {
    await client.connect()
    db = client.db('buddy')
    users = db.collection('users')

    // Find the first document in the collection
    const first = await users.findOne()
    console.log(first)
  } catch(error) {
    console.log(error)
  }
}

// API endpoints

// fetching users
app.post('/getUser', (req,res) => {
    const { email, password } = req.body
    users.findOne({ email: email, password: password })
    .then(result => {
        res.status(200).json(result)
    })
    .catch(error => {
        res.status(500).json({error: error})
    })
})

// adding users
app.post('/addUser', (req, res) => {
  const user = req.body
  users.insertOne(user)
  .then(result => {
    res.status(200).json(result)
  })
  .catch(error => {
    res.status(500).json(error)
  })
})

run().then(app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`)
}))





