import React from 'react';

const BookContext=React.createContext({
    bookList:()=>{},
    addCollections:()=>{},
    updateCollections:()=>{},
    removeBookfromCollection:()=>{},
    isToggleBook:()=>{},
})

export default BookContext;