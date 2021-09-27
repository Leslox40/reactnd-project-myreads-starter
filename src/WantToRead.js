import React, { Component } from 'react'
import BookList from './BookList'

class WantToRead extends Component {

    render() {
       const wantToReadBooks = this.props.books;
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
                    <BookList wantToRead={wantToReadBooks}/>
                </div>
            </div>
        )
    }
}

export default WantToRead