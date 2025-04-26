function BookFullDisplay({ book }) {
    const listItems = [
        { property: "title", className: "full-info-book-title" },
        { property: "author" },
        { property: "description" }
    ]

    const infoItems = listItems.map(item => {
        const info = book[item.property]
        return <li className={"full-info-item " + (item.className || "")}>{info}</li>
    });


    return <div className="full-info">
        <div className="full-info-image">
            <img className="image" src={book.coverImgLocal} />
        </div>
        <div className="full-info-details">
            <ul className="full-info-list">
                {infoItems}
            </ul>
        </div>
    </div>;
}

export default BookFullDisplay;
