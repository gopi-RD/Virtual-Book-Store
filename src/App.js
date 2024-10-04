
import { useState} from "react"
import {BrowserRouter, Route,Switch} from "react-router-dom"
import BookContext from "./context/BookContext"
import HomePage from "./components/HomePage"
import "./App.css"
import BookDetailsPage from "./components/BookDetailsPage"
import MyLibraryPage from "./components/MyLibraryPage"
const list=[
       {
        id: 1,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Classic",
        rating: 4.7,
        description: "A novel set in the Jazz Age that explores themes of wealth, love, and the American Dream.",
        publication_year: 1925,
        image_url:"https://res.cloudinary.com/dzcpsxjuv/image/upload/v1727961154/hlafphtvr9jklbpt3ccf.jpg",
        isAddLibrary:false
        },
        {
        id: 2,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Fiction",
        rating: 4.8,
        description: "A timeless novel of a child's moral awakening and a poignant tale of race and justice in the American South.",
        publication_year: 1960,
        image_url:"https://res.cloudinary.com/dzcpsxjuv/image/upload/v1727961488/o857dvyhgktbqrjxfi93.webp",
        isAddLibrary:false
        },
        {
        id: 3,
        title: "1984",
        author: "George Orwell",
        genre: "Dystopian",
        rating: 4.6,
        description: "A dystopian social science fiction novel and cautionary tale about the dangers of totalitarianism.",
        publication_year: 1949,
        image_url:"https://res.cloudinary.com/dzcpsxjuv/image/upload/v1727962092/wonnz2esozutkcwfz8z5.webp",
        isAddLibrary:false
        },
        {
        id: 4,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        genre: "Romance",
        rating: 4.9,
        description: "A romantic novel that also serves as a social commentary on the British landed gentry of the early 19th century.",
        publication_year: 1813,
        image_url:"https://res.cloudinary.com/dzcpsxjuv/image/upload/v1727960701/smve5qosnhqjn2jrhysz.jpg",
        isAddLibrary:false
        },
        {
        id: 5,
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        genre: "Fiction",
        rating: 4.3,
        description: "A story about a young boy’s journey through the challenges of adolescence.",
        publication_year: 1951,
        image_url:"https://res.cloudinary.com/dzcpsxjuv/image/upload/v1727962333/m9eucvskq8zgn9vd9xif.jpg",
        isAddLibrary:false
        }
]

const App=()=>{ 
    const [bookList, setBookList] = useState(list)
    const [addCollections, setCollections]=useState([])
    const [isShownButton,setShownButton] = useState(false)

    const updateCollections=(data)=>{
        setCollections(prevCollections=> [...prevCollections, data])
    }
    
    const removeBookfromCollection=(bookId)=>{
        setCollections(prevCollections=>prevCollections.filter(book=>book.id!==bookId))
        setShownButton(prevState=>!prevState)
    }

    const isToggleBook=(id)=>{
        setBookList(prevState=>prevState.map(eachItem=>{
            if (parseInt(id)===eachItem.id){
                //console.log(eachItem)
                return {...eachItem, isAddLibrary:!eachItem.isAddLibrary} 
            }
            return eachItem
        }))
        setShownButton(prevState=>!prevState)
    }
   



    return (
        <BookContext.Provider value={{bookList,addCollections,updateCollections,removeBookfromCollection,isToggleBook,isShownButton}}>
           <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/book/:id" component={BookDetailsPage}/> 
                <Route exact path="/my-library" component={MyLibraryPage}/>   
            </Switch>
        </BrowserRouter>
        </BookContext.Provider>
    )

   

}

export default App;