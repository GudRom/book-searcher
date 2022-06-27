import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import * as api from "../../utils/Api";
import { useState } from "react";

function App() {
  const [books, setBooks] = useState([]);
  const [totalItems, setTotalItems] = useState("");

  function getBooks(inputSearch, category, order) {
    api
      .getBooks(inputSearch, category, order)
      .then((book) => {
        setTotalItems(book.totalItems);
        setBooks(...book.items);
      })
      .catch(err => console.log(err))
  }

  return (
    <>
      <Header getBooks={getBooks}/>
      <Main books={books}
      totalItems={totalItems} />
    </>
  );
}

export default App;
