import { useDispatch, useSelector } from "react-redux";
import { foundBooks, fetchBooks } from "../../store/bookSlicer";
import { increment } from "../../store/counterSlice";
import Card from "../Card/Card";
import { selectCount } from "../../store/counterSlice";
import Loader from "../Loader/Loader"

export default function Main(props) {
  const dispatch = useDispatch();
  const { books, totalBooks, status, error } = useSelector(foundBooks)
  const count = useSelector(selectCount);

  function getMoreBooks() {
    if (count <= totalBooks) {
      dispatch(increment());    
      dispatch(fetchBooks({inputSearch: props.inputSearch, category: props.category, order: props.order, count}));
    }
  }

  return (
    <main className="main">
       {(totalBooks >= 0 && totalBooks !== null) && <p className="main__amount-text">found {totalBooks} results</p>}
      <ul className="main__list">
        {books.map((book) => {
          return <Card 
          key={book.etag}
          {...book}
          card={book}
          />;
        })}
      </ul>
      {status === "loading" && <Loader />}
      {error && <p className="main__amount-text">An error occurred: {error}</p> }
      {!props.isButtonDisable && <button className="main__button-more" onClick={getMoreBooks}>More</button>}
    </main>
  );
}
