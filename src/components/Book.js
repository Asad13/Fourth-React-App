import React from 'react';
import '../styles/Book.css';

class Book extends React.Component {
    render() {
        return (
            <div className="book" onClick={() => this.props.change('React MasterClass')}>
                <h3>Book: {this.props.name}</h3>
                <p>Author: {this.props.author}</p>
            </div>
        );
    }
}

export default Book;