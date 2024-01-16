import BooksList from "./components/BooksList/BooksList";
import BooksForm from "./components/BooksForm/BooksForm";
import { useState } from "react";
import shortid from 'shortid';

const App = () => {
  // eslint-disable-next-line
  const [books, setBooks] = useState([
    { id: 1, title: 'of Mice and Men', author: 'John Steinbeck' },
    { id: 2, title: 'The Witcher', author: 'Andrzej Sapkowski'}
  ]);

  const removeBook = bookId => {
    setBooks(books.filter(book => book.id !== bookId))
  };

  const addBook = newBook => {
    setBooks([...books, { id: shortid(), title: newBook.title, author: newBook.author}])
    console.log(books);
  };

  return (
    <div >
      <h1>My books app</h1>
      <BooksList books = {books} removeBook = {removeBook} />
      <BooksForm addBook={addBook}/>
    </div>
  );
}

export default App;
