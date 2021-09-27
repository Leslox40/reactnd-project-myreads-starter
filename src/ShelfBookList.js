import React, { Component } from 'react'
import Book from './Book'

class ShelfBookList extends Component {

    render() {
        // Rendering the different shelves
        const { shelfBooks, updateUI } = this.props;
        //console.log(shelfBooks)
        return (
            <ol className="books-grid">
               { shelfBooks.map(book => (
                   <Book key={book.id} book={book} updateUI={updateUI}/>
               ))}

            </ol>
        )
    }
}

export default ShelfBookList