import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Shelf from './Shelf'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Search from './Search'

class BooksApp extends React.Component {

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
                <Shelf books={this.props.state[shelf.stateKey]} shelf={shelf.shelf} updateUI={this.updateUI} key={shelf.stateKey} />
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


        this.updateState(books, currentlyReadingBooks, wantToReadBooks, read);
      });
  };

  updateState = (books, currentlyReadingBooks, wantToReadBooks, read) => {
    this.setState((currentState) => ({
      books,
      currentlyReadingBooks,
      wantToReadBooks,
      read,
    }));
  }

  render() {
    return (
      <div className='app'>
        <Route exact path='/' render={(() => (
          <BooksApp updateUI={this.updateUI} state={this.state} />
        ))}
        />

        <Route exact path='/search' render={(() => (
          <Search updateUI={this.updateUI} state={this.state}/>
        ))}
        />
      </div>
    )
  }
}

export default App
