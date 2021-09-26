import React, { Component } from 'react'
import BookList from './BookList'

class wantToRead extends Component {


    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
                    <BookList />
                </div>
            </div>
        )
    }
}

export default wantToRead