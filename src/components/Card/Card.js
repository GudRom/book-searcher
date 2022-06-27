export default function Card(props) {
  return (
    <li className="main__list-item">
      <article className="main__card">
        <img src={props.volumeInfo?.imageLinks?.thumbnail ?? ""} alt="book" className="main__card-img" />
        <div className="main__text-block">
          <p className="main__category">{props.volumeInfo.categories || ""}</p>
          <p className="main__name">{props.volumeInfo.title || ""}</p>
          <p className="main__author">{props.volumeInfo.authors || ""}</p>
        </div>
      </article>
    </li>
  );
}
