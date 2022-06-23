

export default function Header() {

 return (
    <header className="header">
        <h1 className="header__header">Search for book</h1>
        <form action="" className="header__form">
            <input type="text" className="header__input" placeholder="Find a book here..." />
            <button type="submit" className="header__button"></button>
            <div className="header__select-block">
                <label className="header__label" for="categories-select">Categories
                    <select className="header__select" name="categories" id="categories-select">
                        <option className="header__option" value="all">all</option>
                        <option className="header__option" value="art">art</option>
                        <option className="header__option" value="biography">biography</option>
                        <option className="header__option" value="computers">computers</option>
                        <option className="header__option" value="history">history</option>
                        <option className="header__option" value="medical">medical</option>
                        <option className="header__option" value="poetry">poetry</option>
                    </select>
                </label>
                <label className="header__label" for="sort-select">Sort by
                    <select className="header__select" name="sort" id="sort-select">
                        <option className="header__option" value="relevance">relevance</option>
                        <option className="header__option" value="newest">newest</option>
                    </select>
                </label>
            </div>
        </form>
    </header>
 );
}