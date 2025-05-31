import BookShow from "./BookShow";

function BookList({ books, onEdit, onDelete }) {
  return (
    <div className="book-list">
      {books.map((book) => (
        <BookShow key={book.id} book={book} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default BookList;
    