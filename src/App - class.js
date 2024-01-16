import BooksList from "./components/BooksList/BooksList";
import BooksForm from "./components/BooksForm/BooksForm";
import React from 'react';
import shortid from 'shortid';

class App extends React.Component {
  // eslint-disable-next-line
  state = {
    books: [
      { id: 1, title: 'of Mice and Men', author: 'John Steinbeck' },
      { id: 2, title: 'The Witcher', author: 'Andrzej Sapkowski'}
    ]
  };

  removeBook = bookId => {
    this.setState({ books: this.state.books.filter(book => book.id !== bookId)})
  };

  addBook = newBook => {
    this.setState({ books: [...this.state.books, { id: shortid(), title: newBook.title, author: newBook.author}] })
  };

 render() {
  return (
    <div >
      <h1>My books app</h1>
      <BooksList books = {this.state.books} removeBook = {this.removeBook} />
      <BooksForm addBook={this.addBook}/>
    </div>
  );
 };
  
}

export default App;
