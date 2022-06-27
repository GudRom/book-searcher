import { useState } from "react";
import { useSelector } from "react-redux";
import { selectCount } from "../../store/counterSlice";

export default function Header(props) {
const [inputSearch, setInputSearch] = useState("")
const [category, setCategory] = useState("")
const [order, setOrder] = useState("relevance")
const count = useSelector(selectCount);

function handleInputChange(evt) {
    setInputSearch(evt.target.value);
}

function handleCategoryChange(evt) {
    setCategory(evt.target.value);
}

function handleOrderChange(evt) {
    setOrder(evt.target.value);
}

function handleSearchSubmit(evt) {
    evt.preventDefault();    
    props.getBooks(inputSearch, category, order, count);
}

 return (
    <header className="header">
        <h1 className="header__header">Search for book</h1>
        <form action="" className="header__form" onSubmit={handleSearchSubmit}>
            <input type="text" value={inputSearch ?? ""} className="header__input" placeholder="Find a book here..." onChange={handleInputChange} />
            <button type="submit" className="header__button"></button>
            <div className="header__select-block">
                <label className="header__label" htmlFor="categories-select">Categories
                    <select className="header__select" value={category} name="categories" id="categories-select" onChange={handleCategoryChange}>
                        <option className="header__option" value="">all</option>
                        <option className="header__option" value="art">art</option>
                        <option className="header__option" value="biography">biography</option>
                        <option className="header__option" value="computers">computers</option>
                        <option className="header__option" value="history">history</option>
                        <option className="header__option" value="medical">medical</option>
                        <option className="header__option" value="poetry">poetry</option>
                    </select>
                </label>
                <label className="header__label" htmlFor="sort-select">Sort by
                    <select className="header__select" value={order} name="sort" id="sort-select" onChange={handleOrderChange}>
                        <option className="header__option" value="relevance">relevance</option>
                        <option className="header__option" value="newest">newest</option>
                    </select>
                </label>
            </div>
        </form>
    </header>
 );
}