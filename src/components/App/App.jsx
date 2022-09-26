import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { foundBooks } from "../../store/bookSlicer";
import { selectCount } from "../../store/counterSlice";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import BookPage from "../BookPage/BookPage";

function App() {
  const [inputSearch, setInputSearch] = useState("");
  const [category, setCategory] = useState("");
  const [order, setOrder] = useState("relevance");
  const [isButtonDisable, setIsButtonDisable] = useState(true);
  const count = useSelector(selectCount);
  const { totalBooks } = useSelector(foundBooks);

  useEffect(() => {
    count < totalBooks ? setIsButtonDisable(false) : setIsButtonDisable(true);
  }, [count, totalBooks]);

  return (
    <>
      <Header
        inputSearch={inputSearch}
        category={category}
        order={order}
        setInputSearch={setInputSearch}
        setCategory={setCategory}
        setOrder={setOrder}
        setIsButtonDisable={setIsButtonDisable}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Main
              inputSearch={inputSearch}
              category={category}
              order={order}
              isButtonDisable={isButtonDisable}
              setIsButtonDisable={setIsButtonDisable}
            />
          }
        />
        <Route path=":id" element={<BookPage />} />
      </Routes>
    </>
  );
}

export default App;
