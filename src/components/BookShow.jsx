import { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow({ book, onEdit, onDelete }) {
  const [showEdit, setShowEdit] = useState(false);

  const handleDelete = () => onDelete(book.id);
  const handleEditClick = () => setShowEdit(true);
  const handleSubmit = (id, newTitle) => {
    onEdit(id, newTitle);
    setShowEdit(false);
  };

  return (
    <div className="book-item">
      <img src={`https://picsum.photos/seed/${book.id}/200`} alt="book" />
      {showEdit ? (
        <BookEdit book={book} onSubmit={handleSubmit} />
      ) : (
        <>
          <h3>{book.title}</h3>
          <button onClick={handleEditClick}>✏️</button>
          <button onClick={handleDelete}>❌</button>
        </>
      )}
    </div>
  );
}

export default BookShow;
