import React, { Component } from 'react'
import Book from './Book'

class ReadBookList extends Component {

    render() {
        // Rendering the different shelves
        const { read } = this.props;
        return (
            <ol className="books-grid">
               { read.map(book => (
                   <Book key={book.id} book={book}/>
               ))}

            </ol>
        )
    }
}

export default ReadBookList