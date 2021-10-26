import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Shelf from './Shelf'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Search from './Search'

class BooksApp extends React.Component {
  state = {
    books: [],
    currentlyReadingBooks: [],
    wantToReadBooks: [],
    read: [],
  }

  // Fetch books from API and add to state
  componentDidMount() {
    this.updateUI();
  };

  //Function to move updateUI when shelves changes
  updateUI = () => {
    BooksAPI.getAll()
      .then(books => {

        // Filter each bookshelf and set state
        const currentlyReadingBooks = books.filter((book) => (
          book.shelf === 'currentlyReading'
        ));
        const wantToReadBooks = books.filter((book) => (
          book.shelf === 'wantToRead'
        ));
        const read = books.filter((book) => (
          book.shelf === 'read'
        ))


        this.setState((currentState) => ({
          books,
          currentlyReadingBooks,
          wantToReadBooks,
          read,
        }));
      });
  };

  render() {

    const shelves = [
      {
        stateKey: 'currentlyReadingBooks',
        shelf: 'Currently Reading',
      },
      {
        stateKey: 'wantToReadBooks',
        shelf: 'Want To Read',
      },
      {
        stateKey: 'read',
        shelf: 'Read',
      }
    ]

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {
              shelves.map((shelf) => (
                <Shelf books={this.state[shelf.stateKey]} shelf={shelf.shelf} updateUI={this.updateUI} key={shelf.stateKey} />
              ))
            }
          </div>
        </div>
        <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Route exact path='/' render={(() => (
          <BooksApp />
        ))}
        />

        <Route exact path='/search' render={(() => (
          <Search />
        ))}
        />
      </div>
    )
  }
}

export default App
