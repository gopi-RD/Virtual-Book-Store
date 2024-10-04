
import BookContext from "../../context/BookContext";
import Header from "../Header";

import "./index.css"
const BookDetailsPage=(props)=>{
    const {match}=props 
    const {params}=match 
    const {id}=params
    console.log(id)
   

    return(
        <BookContext.Consumer>
            {
                value=>{
                    const {bookList,addCollections,updateCollections,isToggleBook}=value ;
                    console.log(addCollections)
                    let book=bookList.find(book=>(book.id===parseInt(id)))
                    //console.log(book)

                    const onAddLibrary=()=>{
                       const searchBook=addCollections.find(eachItem=>(eachItem.id===parseInt(id)))
                       if(searchBook===undefined){
                        updateCollections(book)
                        isToggleBook(id)
                       }else{
                        alert("This book is already in your library!")
                        return;
                       }

                      
                          
                    }

                    return (
                        <>
                        <Header/>
                        <div className="book-details-container">
                            <div className="book-data-container">
                                <img src={book.image_url} className="book-img" alt={book.title}/>
                                <div className="description">
                                    <h1 className="title">{book.title}</h1>
                                    <p className="content-text">{book.description}</p>
                                    <div className="author-and-genre-container">
                                        <h2 className="book-author">{book.author}</h2>
                                        <p className="book-genre">{book.genre}</p>
                                    </div>
                                    <div className="rating-container">
                                            <span className="book-rating">
                                                Rating: {book.rating}
                                            </span>
                                            <span className="book-publication">
                                                 Publicated: {book.publication_year}
 
                                            </span>
                                    </div>
                                    <button type="button" className="add-library" onClick={onAddLibrary}>
                                             {book.isAddLibrary? "Added Library":"Add Library"}
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