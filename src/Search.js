import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SearchBookList from './SearchBookList'
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

  checkIfBookHasShelf = (book) => {
      const apiBooks = this.props.books;

      const checkedBook = apiBooks.filter((apiBook) => (
        book.id === apiBook.id
      ));

      if(checkedBook.length === 1) {
        const shelf = checkedBook[0].shelf;
        console.log(shelf);
      }

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
          <SearchBookList searchBooks={books} updateUI={this.props.updateUI} state={this.props.state} />
        </div>
      </div>
    )
  }
}

export default Search