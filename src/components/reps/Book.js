import React from 'react';
import '../../styles/Book.css';

class Book extends React.Component {
    //() => this.props.change('React MasterClass')
    render() {
        return (
            <div className="book">
                <div onClick={this.props.delete}>
                    <h3>Book: {this.props.name}</h3>
                    <p>Author: {this.props.author}</p>
                </div>
                <input type="text" onChange={this.props.change} value={this.props.name} />
            </div>
        );
    }
}

export default Book;