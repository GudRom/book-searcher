// import Card from "../Card/Card";

export default function Main(props) {
  return (
    <main className="main">
      <p className="main__amount-text">found 345 results</p>
      <ul className="main__list">
        {/* {props.map((book) => {
          <Card 
          key={book.id}
          {...book} 
          />;
        })} */}
      </ul>
      <button className="main__button-more">More</button>
    </main>
  );
}
