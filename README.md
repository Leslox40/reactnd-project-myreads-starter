# MyReads Project

MyReads is a Library web app built with React which permits a user to categorize books
in different shelves namely;

* Currently Reading
* Want To Read
* Read

Users can move books from one shelf to another by simply clicking on the 
little caret and selecting the new shelf.

New books can be added to the book library by navigating to the search page
which can be done by clicking the + icon on the interface. 

A list of books matching your query will be displayed from which you can select a
shelf in your library you would want to add a book to


## TL;DR

To get started developing right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## What You're Getting
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── 📦src
    ┣ 📂icons # Helpful images for your app. Use at your discretion.
    ┃ ┣ 📜add.svg
    ┃ ┣ 📜arrow-back.svg
    ┃ ┗ 📜arrow-drop-down.svg
    ┣ 📜App.css # Styles for your app. Feel free to customize this as you desire.
    ┣ 📜App.js # This is the root of your app. Contains static HTML right now.
    ┣ 📜App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ┣ 📜Book.js # Book Component used to render books
    ┣ 📜BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ┣ 📜index.css # Global styles. You probably won't need to change anything here.
    ┣ 📜index.js # You should not need to modify this file. It is used for DOM rendering only.
    ┣ 📜Read.js # Read Shelf component which renders books in the Read shelf
    ┣ 📜ReadBookList.js # ReadBookList component which renders Read shelf book list
    ┣ 📜Search.js
    ┣ 📜Shelf.js
    ┗ 📜ShelfBookList.js


```

## Backend Server

The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
