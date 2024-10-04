
import {useState} from "react";
import BookContext from "../../context/BookContext";
import Header from "../Header";
import BookCard from "../BookCard";
import "./index.css"


const MyLibraryPage =()=>{
    const [searchBook,setSearchBook]=useState("")
   
    return (
        <BookContext.Consumer>
            {
                value=>{
                    const {addCollections} = value; 
                    console.log(addCollections);
                    
                   
                    let filteredBooks = addCollections.filter(book => book.title.toLowerCase().includes(searchBook.toLowerCase()) || book.author.toLowerCase().includes(searchBook.toLowerCase()) || book.genre.toLowerCase().includes(searchBook.toLowerCase())); 
               
                    const onSearchBook = (event) => {
                        setSearchBook(event.target.value);
                    }

                    return (
                        <>
                        <Header/>
                        <div className="bg-container">
                            <div className="search-card-container">
                            <div className="search-container"> 
                                <input className="search-input" type="search" value={searchBook} placeholder="Enter the book title or author or genre name" onChange={onSearchBook} />
                                <button className="search-button" type="button"  >Search</button>
                            </div>
                            </div>
                            <ul className="book-list-items">
                                
                                    
                                { 
                                        (
                                        filteredBooks.map(eachItem=>(
                                            <BookCard bookDetails={eachItem} key={eachItem.id} />
                                        )) )
                                }
                                
                            </ul>    
                           
                        </div>
                        
                        </>
                        
                    )

                }
            }
        </BookContext.Consumer>
    )
}

export default MyLibraryPage;
