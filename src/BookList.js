import React, { Component } from 'react'
import Book from './Book'

class BookList extends Component {

    render() {
        const { wantToRead } = this.props;
        console.log(wantToRead);

        return (
            <ol className="books-grid">
               { wantToRead.map(book => (
                   <Book key={book.id} book={book}/>
               ))}
            </ol>
        )
    }
}

export default BookList