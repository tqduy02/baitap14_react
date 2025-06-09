import { useEffect, useState } from "react";
import {
  fetchBooks,
  createBook,
  deleteBookById,
  editBookById
} from "./Api";

function useBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const loadBooks = async () => {
      const books = await fetchBooks();
      setBooks(books);
    };
    loadBooks();
  }, []);

  const handleCreateBook = async (title) => {
    const newBook = await createBook(title);
    setBooks((prevBooks) => [...prevBooks, newBook]);
  };

  const handleDeleteBook = async (id) => {
    await deleteBookById(id);
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
  };

  const handleEditBook = async (id, newTitle) => {
    const updatedBook = await editBookById(id, newTitle);
    setBooks((prevBooks) =>
      prevBooks.map((book) =>
        book.id === id ? { ...book, ...updatedBook } : book
      )
    );
  };

  return {
    books,
    handleCreateBook,
    handleDeleteBook,
    handleEditBook
  };
}

export default useBooks;
