import React from 'react';

const BookContext=React.createContext({
    bookList:()=>{},
    addCollections:()=>{},
    updateCollections:()=>{},
})

export default BookContext;