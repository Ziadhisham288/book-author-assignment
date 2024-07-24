import Author from "../../../db/models/author.model.js";

export const createAuthor = async (req, res) => {
  const { name, bio, birthDate, books } = req.body;

  try {
    const author = await Author.create({
      name,
      bio,
      birthDate : new Date(birthDate).getFullYear(),
      books,
    });

    res.json({ message: "Author added", author: author });
  } catch (error) {
    console.log({ err: error });
  }
};

export const getAuthors = async (req, res) => {
  const author = await Author.find()
  res.json({message : "All authors" , author})
}

export const getAuthorById = async (req, res) => {
  const {id} = req.params
  const author = await Author.findById(id) 
  if (Author == null) {
    return res.json({message : "Author not found"})
  } 
  
 res.json({message : "Author found!", author : author })
}

export const updateAuthor = async (req, res) => {
  const {id} = req.params 
  const {name, bio, birthDate, books} = req.body
  try {
    const author  = await Author.findByIdAndUpdate(id , {
      $set : {
        name,
        bio,
        birthDate,
        books
      }
    })
  
    if (author == null) {
      return res.json({message : "Author not found"})
    } 
  
    res.json({message : "Author info updated" , author : author})
  } catch (error) {
    console.log({message : "Failed to update author info", error})
  }
}


export const deleteAuthor= async (req, res) => {
  const {id} = req.params

  const author = await Author.findByIdAndDelete(id)

  if (author == null) {
    return res.json({message : "Author not found"})
  }
  
  res.json({message : "Author deleted", author : author})
}


