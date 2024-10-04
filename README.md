# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `install packages` 
    1. react-router-dom => It is used for to navigating  in an application with different components 
    2. react-loader-spinner => It is used for loading in the component to fetch data from the server

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### Structure of Project :

    myapp/
│
├── public/
│   ├── index.html           # The main HTML file
│   └── favicon.ico          # Default favicon
│
├── src/
│   ├── components/                  # Component inside multiple components 

│   │   └── Header (folder)          # Header Component Contain the website logo and Router Components
                └── index.js         # index.js file has code that align the structure of the components
                └── index.css        # index.css file contain the style of the index.js file 

        └── HomePage                 # Home Component Contain the List of Books 
                └── index.js         # index.js file has code that align the structure of the components
                └── index.css        # index.css file contain the style of the index.js file 

        └── BookCard                 # BookCard Component Contain the single book component
                └── index.js         # index.js file has code that align the structure of the components
                └── index.css        # index.css file contain the style of the index.js file 

        └── BookDetailsPage          # BookDetailsPage Component Contain the book details
                └── index.js         # index.js file has code that align the structure of the components
                └── index.css        # index.css file contain the style of the index.js file 

        └── MyLibraryPage            # MyLibraryPage Component Contain the interesting books to store your library
                └── index.js         # index.js file has code that align the structure of the components
                └── index.css        # index.css file contain the style of the index.js file 
    ├── context                      # context Component used to pass the data across the components 
        └── BookContext.js           # BookContext.js file container the code of initialization of all functions and methods

│   ├── App.js                       # Main App component
│   ├── App.css                      # index.css file contain the style of the index.js file 
│   ├── index.js                     
│
├── package.json             # Project metadata and dependencies
└── README.md                # Documentation for the project


