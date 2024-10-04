import {Link} from "react-router-dom"
import "./index.css"

const BookCard=(props)=>{
    const {bookDetails}=props
    const {id,title,author,genre,rating,image_url,publication_year}=bookDetails

    return (
        <Link className="book-link-item" to={`/book/${id}`}>
        <li className="book-card">
            <img src={image_url} className="image-url" alt={title} />
            <h2 className="book-title">{title}</h2>
            <div className="book-container">
                <span className="author">
                    {author}
                </span>
                <span className="genre">
                   {genre}
                </span>
            </div>
            <div className="book-container">
                <span className="rating">
                    Rating:
                    {rating}
                </span>
                <span className="publication-year">
                    Published: 
                    {publication_year}
                </span>
            </div>
            
        </li>
        </Link>
    )

}

export default BookCard;