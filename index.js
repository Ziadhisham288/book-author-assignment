import express from 'express'
import connection from './db/connectionDB.js';
import bookRouter from './src/modules/books/books.routes.js';
import authorRouter from './src/modules/authors/authors.router.js';


const app = express()
const PORT = 3000;
connection()

app.use(express.json())

app.use("/books", bookRouter)
app.use("/authors", authorRouter)

app.get('*', (req, res) => {
  res.json({message : "404 not found!"})
})

app.listen(PORT, () => {
  console.log(`App is connected on port ${PORT}`)
})