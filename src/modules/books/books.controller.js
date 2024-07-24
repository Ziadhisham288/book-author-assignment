import Author from "../../../db/models/author.model.js";
import Book from "../../../db/models/book.model.js";

export const createBook = async (req, res) => {
  const {title , content , author} = req.body;  

  const book = await Book.create({title , content , author})

  res.json({message : "Book created", book:  book })
}

export const getBooks = async (req, res) => {
  const book = await Book.find()
  res.json({message : "All books" , book})
}

export const getBookById = async (req, res) => {
  const {id} = req.params
  const book = await Book.findById(id) 
  if (book == null) {
    return res.json({message : "Book not found"})
  } 
  
 res.json({message : "Book found!", book : book })
}

export const updateBook = async (req, res) => {
  const {id} = req.params 
  const {title, content} = req.body
  const book = await Book.findByIdAndUpdate(id, {
    $set : {
      title,
      content
    }
  })

  if (book == null) {
    return res.json({message : "Book not found"})
  } 

  res.json({message : "Book updated" , book : book})
}


export const deleteBook = async (req, res) => {
  const {id} = req.params
  
  const book = await Book.findByIdAndDelete(id)

  if (book == null) {
    return res.json({message : "Book not found"})
  }
  
  res.json({message : "book deleted", book : book})
}