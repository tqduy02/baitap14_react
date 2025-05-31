import { useEffect, useState } from "react";
import BookList from "./components/BookList";
import BookCreate from "./components/BookCreate";
import {
  fetchBooks,
  createBook,
  deleteBookById,
  editBookById
} from "./Api";
import './App.css';

function App() {
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
    setBooks([...books, newBook]);
  };

  const handleDeleteBook = async (id) => {
    await deleteBookById(id);
    setBooks(books.filter((book) => book.id !== id));
  };

  const handleEditBook = async (id, newTitle) => {
    const updatedBook = await editBookById(id, newTitle);
    const updatedBooks = books.map((book) =>
      book.id === id ? { ...book, ...updatedBook } : book
    );
    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList books={books} onEdit={handleEditBook} onDelete={handleDeleteBook} />
      <BookCreate onCreate={handleCreateBook} />
    </div>
  );
}

export default App;
