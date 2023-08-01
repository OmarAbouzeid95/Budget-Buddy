
const express = require('express')
const cors = require('cors')
const { MongoClient } = require('mongodb')
const dotenv = require('dotenv')
const app = express()
dotenv.config()

const PORT = process.env.PORT || 6969

app.use(express.json())


const uri = "<Your Connection String>"
const client = new MongoClient(uri)

async function run() {
  try {
    await client.connect()
    const db = client.db('sample_mflix')
    const collection = db.collection('movies')

    // Find the first document in the collection
    const first = await collection.findOne()
    console.log(first)
  } catch(error) {
    console.log(error)
  }
}
run().then(app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`)
}))
