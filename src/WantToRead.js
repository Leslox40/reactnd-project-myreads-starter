import React, { Component } from 'react'
import BookList from './BookList'

class wantToRead extends Component {
    state = {
        wantToReadBooks: [],
    }

    // Function filter's Books array passed as props and updates state
    filterWantToReadBooks = () => {
        const  { books } = this.props;
        const wantToReadBooks = books.filter((book) => (
         book.shelf === 'currentlyReading'
        ));
        this.setState((currentState) => ({
            wantToReadBooks
        }))
     }

    render() {
       const { wantToReadBooks } = this.state
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

export default wantToRead