import { useDispatch } from "react-redux";
import { increment } from "../../store/counterSlice";
import Card from "../Card/Card";

export default function Main(props) {
  const dispatch = useDispatch();
  return (
    <main className="main">
      {props.totalItems && <p className="main__amount-text">found {props.totalItems} results</p>}
      <ul className="main__list">
        {props.books.map((book) => {
          return <Card 
          key={book.id}
          {...book} 
          />;
        })}
      </ul>
      <button className="main__button-more" onClick={()=> dispatch(increment())}>More</button>
    </main>
  );
}
