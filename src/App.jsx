import BookList from "./components/BookList";
import BookCreate from "./components/BookCreate";
import useBooks from "./hooks";
import './App.css';

function App() {
  const {
    books,
    handleCreateBook,
    handleDeleteBook,
    handleEditBook
  } = useBooks();

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList books={books} onEdit={handleEditBook} onDelete={handleDeleteBook} />
      <BookCreate onCreate={handleCreateBook} />
    </div>
  );
}

export default App;
