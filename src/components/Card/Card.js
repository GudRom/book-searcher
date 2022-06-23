export default function Card(props) {
  return (
    <li className="main__list-item">
      <article className="main__card">
        <img src="" alt="" className="main__card-img" />
        <div className="main__text-block">
          <p className="main__category">biography</p>
          <p className="main__name">Rock under Volga</p>
          <p className="main__author">Vladimir Kipelyi</p>
        </div>
      </article>
    </li>
  );
}
