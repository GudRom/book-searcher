import { Link } from "react-router-dom";
import { addCurrentBook } from "../../store/bookSlicer";
import imageBook from "../../images/no-image-book.png" 
import { useDispatch } from "react-redux/es/exports";
export default function Card(props) {
  const dispatch = useDispatch();

  function onClickCard() {
    dispatch(addCurrentBook(props.card));
  }

  return (
    <li className="main__list-item" onClick={onClickCard}>
      <Link className="main__link" to={props.id}>
      <article className="main__card">
        <img src={props.volumeInfo?.imageLinks?.thumbnail ?? imageBook} alt="book" className="main__card-img" />
        <div className="main__text-block">
          <p className="main__category">{props.volumeInfo.categories ?? "Unknown"}</p>
          <p className="main__name">{props.volumeInfo.title ?? "Unknown"}</p>
          <p className="main__author">{props.volumeInfo.authors ?? "Unknown"}</p>
        </div>
      </article>
      </Link>
    </li>
  );
}
