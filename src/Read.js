import React, { Component } from 'react'
import ReadBookList from './ReadBookList'

class Read extends Component {

    render() {
        const { read } = this.props.books;
        console.log('read', read)
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                    <ReadBookList read={read}/>
                </div>
            </div>
        )
    }
}

export default Read