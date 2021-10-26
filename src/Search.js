import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ShelfBookList from './ShelfBookList'
import * as BooksAPI from './BooksAPI'

class Search extends Component {

  state = {
    books: [],
  };

  handleChange = (event) => {
    const userQuery = event.target.value;

    userQuery === '' ? this.updateBooks([]) :
      BooksAPI.search(userQuery)
        .then(booksResult => {
          booksResult.error ? this.updateBooks([]) : this.updateBooks(booksResult);
        }).catch((error) => {
          console.log('Something went wrong', error);
        });
  }

  updateBooks = (books) => {
    if (books !== undefined) {
      this.setState(currentState => ({
        books,
      }));
    }

  };

  updateUI = () => {

  }

  render() {
    const { books } = this.state;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/'
            className="close-search"
          >
            Close
          </Link>

          <div className="search-books-input-wrapper">

            <input type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={this.handleChange}
            />

          </div>
        </div>
        <div className="search-books-results">
          <ShelfBookList shelfBooks={books} updateUI={this.updateUI} />
        </div>
      </div>
    )
  }
}

export default Search