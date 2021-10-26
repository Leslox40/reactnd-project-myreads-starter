import React, { Component } from 'react'
import Book from './Book'

class SearchBookList extends Component {

  render() {
    // Rendering the different shelves
    const { searchBooks, updateUI } = this.props;
    //console.log(shelfBooks)
    return (
      <ol className="books-grid">
        {searchBooks.map(book => {
          const apiBooks = this.props.state.books;
          console.log('API books', apiBooks)

          const checkedBook = apiBooks.filter((apiBook) => (
            book.id === apiBook.id
          ));
    
          if(checkedBook.length === 1) {
            return <Book key={book.id} book={checkedBook[0]} updateUI={updateUI} />
          }

          return <Book key={book.id} book={book} updateUI={updateUI} />
        })}

      </ol>
    )
  }
}

export default SearchBookList