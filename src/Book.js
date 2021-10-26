import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'

class Book extends Component {
  state = {
    value: '',
  };

  //Initialize value property to the shelf of the boook 
  componentDidMount() {
    console.log(this.props.book);;
    const checker = this.props.book.shelf === undefined ? 'none' : this.props.book.shelf;

    this.setState((currentState) => ({
      value: checker
    }))
  };

  //handles controlled component
  handleChange = (event) => {
    const { book } = this.props;

    //update state with new shelf
    this.setState({ value: event.target.value });

    const shelf = event.target.value;

    //update API with new shelf
    this.updateBook(book, shelf);

  };

  //update the book In the API and call updateUI to repaint getAll() and re-render books
  updateBook = (book, shelf) => {
    const { updateUI } = this.props;
    BooksAPI.update(book, shelf)
      .then(books => {
        updateUI();
      });
  }

  render() {
    const { book } = this.props;

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={
              {
                width: 128, height: 193, backgroundImage: `url(${book.imageLinks && book.imageLinks.thumbnail ? `${book.imageLinks.thumbnail}` : `http://via.placeholder.com/128x193?text=No%20Cover`})`
              }
            }>
            </div>
            <div className="book-shelf-changer">
              <select value={this.state.value} onChange={this.handleChange}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{Array.isArray(book.authors) ? book.authors.join(', ') : ''}</div>
        </div>
      </li>
    )
  }
}

export default Book