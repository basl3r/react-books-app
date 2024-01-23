import BooksList from "./components/BooksList/BooksList";
import BooksForm from "./components/BooksForm/BooksForm";

const App = () => {
  return (
    <div >
      <h1>My books app</h1>
      <BooksList />
      <BooksForm />
    </div>
  );
}

export default App;
