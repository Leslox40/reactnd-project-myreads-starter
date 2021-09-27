import React, { Component } from 'react'
import Book from './Book'

class ShelfBookList extends Component {

    render() {
        // Rendering the different shelves
        const { shelfBooks } = this.props;
        console.log(shelfBooks)
        return (
            <ol className="books-grid">
               { shelfBooks.map(book => (
                   <Book key={book.id} book={book}/>
               ))}

            </ol>
        )
    }
}

export default ShelfBookList