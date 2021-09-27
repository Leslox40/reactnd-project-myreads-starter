import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'

class Book extends Component {
    state = {
        value: '',
    };

    //Initialize value property to the shelf of the boook 
    componentDidMount() {
        this.setState((currentState) => ({
             value: this.props.book.shelf
         }))
    };

    //handles controlled component
    handleChange = (event) => {
        this.setState({ value: event.target.value });

    };

    render() {
        const { book, updateUI } = this.props;
        const shelf = this.state.value;

        shelf !== '' && shelf !== 'none' && (BooksAPI.update(book, shelf)
        .then(books => {
            updateUI();
        })); 
        
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
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
                    <div className="book-authors">{book.authors[0]}</div>
                </div>
            </li>
        )
    }
}

export default Book