import { useNavigate } from "react-router-dom";
import imageBook from "../../images/no-image-book.png";
import { foundBooks } from "../../store/bookSlicer";
import { useSelector } from "react-redux/es/exports";

export default function BookPage() {
    const navigate = useNavigate();
    const { currentBook } = useSelector(foundBooks);

    function handleBackClick() {
        navigate("/");
    }

    return (
        <div className="bookpage">
            <img className="bookpage__image" src={currentBook.volumeInfo?.imageLinks?.thumbnail ?? imageBook} alt="book"/>
            <div className="bookpage__textblock">
                <p className="bookpage__category">{currentBook.volumeInfo.categories ?? "Unknown"}</p>
                <h2 className="bookpage__title">{currentBook.volumeInfo.title ?? "Unknown"}</h2>
                <p className="bookpage__author">{currentBook.volumeInfo.authors ?? "Unknown"}</p>
                <p className="bookpage__description">{currentBook.volumeInfo.description ?? "No description"}</p>
                <button className="bookpage__back-button" onClick={handleBackClick}>back</button>
            </div>
        </div>
    )
}