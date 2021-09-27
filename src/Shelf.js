import React, { Component } from 'react'
import ShelfBookList from './ShelfBookList'

class Shelf extends Component {

    render() {
       const { books, shelf, updateUI }= this.props;

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{ shelf }</h2>
                <div className="bookshelf-books">
                    <ShelfBookList shelfBooks={books} updateUI={updateUI}/>
                </div>
            </div>
        )
    }
}

export default Shelf