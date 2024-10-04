import {Link} from "react-router-dom"
import "./index.css"
import BookContext from "../../context/BookContext"

const BookCard=(props)=>{
    const {bookDetails,isButton}=props
    const {id,title,author,genre,rating,image_url,publication_year}=bookDetails

    return (
        <BookContext.Consumer>

            {
                value=>{
                    const {removeBookfromCollection}=value 

                    const onRemoveFromCollection=()=>{
                        removeBookfromCollection(id)
                    }

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
                            {
                                isButton && 
                                <button className="remove-library" onClick={onRemoveFromCollection} >
                                    
                                    Remove Book from Collection
    
                                </button>  // isAddLibrary &&
                            }
                          
                        
                            
                        </li>
                        </Link>
                    )
                                    
                 }
            }
        </BookContext.Consumer>
        
        )
}

export default BookCard;

 /* 
                               // isAddLibrary &&  
                                <button className="remove-library" onClick={onRemoveFromCollection} >
                                {isAddLibrary?"Add Book to Library":"Remove Book from Library"}
                            </button>
                                
                            */