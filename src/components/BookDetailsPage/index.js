
import BookContext from "../../context/BookContext";
import Header from "../Header";

import "./index.css"
const BookDetailsPage=(props)=>{
    const {match}=props 
    const {params}=match 
    const {id}=params
   

    return(
        <BookContext.Consumer>
            {
                value=>{
                    const {bookList,addCollections,updateCollections,isToggleBook}=value ;

                    let book=bookList.filter(book=>(book.id===parseInt(id)))
                    const onAddLibrary=()=>{
                        const searchBook=addCollections.find(book=>book[0].id===parseInt(id))
                        if (searchBook===undefined){
                            isToggleBook(id)
                            updateCollections(book)
                        }else{
                          
                            alert("Book already added to your library")
                            return ;
                        }
                        
                    }
                    return (
                        <>
                        <Header/>
                        <div className="book-details-container">
                            <div className="book-data-container">
                                <img src={book[0].image_url} className="book-img" alt={book[0].title}/>
                                <div className="description">
                                    <h1 className="title">{book[0].title}</h1>
                                    <p className="content-text">{book[0].description}</p>
                                    <div className="author-and-genre-container">
                                        <h2 className="book-author">{book[0].author}</h2>
                                        <p className="book-genre">{book[0].genre}</p>
                                    </div>
                                    <div className="rating-container">
                                            <span className="book-rating">
                                                Rating: {book[0].rating}
                                            </span>
                                            <span className="book-publication">
                                                 Publicated: {book[0].publication_year}
 
                                            </span>
                                    </div>
                                    <button type="button" className="add-library" onClick={onAddLibrary}>
                                             {book[0].isAddLibrary? "Added Library":"Add Library"}
                                    </button>
                                </div>

                            </div>

                        </div>
                        
                        </>
                    )

                }
            }
        </BookContext.Consumer>
    )



}

export default BookDetailsPage;