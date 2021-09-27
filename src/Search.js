import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ShelfBookList from './ShelfBookList'
import * as BooksAPI from './BooksAPI'

class Search extends Component {

    state = {
        query: '',
        books: [],
    };

    handleChange = (event) => {
        this.setState({ query: event.target.value })
    }

    updateBooks = (books) => {
        console.log('books', books)
        if(books !== undefined ) {
            this.setState(currentState => ({
                books,
            }));
        }
        
    };

    updateUI = () => {

    }

    render() {
        const { query, books } = this.state;

        const showingBooks = query === '' ? 
        '' :
        BooksAPI.search(query)
        .then(booksResult => {
            this.updateBooks(booksResult);
        });

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
                    <ShelfBookList shelfBooks={books} updateUI={this.updateUI}/>
                </div>
            </div>
        )
    }
}

export default Search