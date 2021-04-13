import React, { Component } from 'react';
import { persons, books } from '../assets/stateinfos';
import PersonList from './lists/PersonList'
import BookList from './lists/BookList';

class Main extends Component {
    state = {
        persons: persons,
        showPersons: true,
        books: books,
        showBooks: true
    }

    deleteBook = index => {
        //Making a copy of an array either by slice() , map() or spread operator
        //let books = this.state.books.slice();
        //let books = this.state.books.map(item => item);
        let books = [...this.state.books];
        books.splice(index, 1);
        this.setState({
            books: books
        });
    };

    changeBook = (index, event) => {
        let books = [...this.state.books];
        books[index].name = event.target.value;
        this.setState({
            books: books
        });
    };

    deletePerson = index => {
        const persons = [...this.state.persons];
        persons.splice(index, 1);
        this.setState({
            persons: persons
        });
    }

    changePerson = (event, index) => {
        const persons = [...this.state.persons];
        persons[index].name = event.target.value;

        this.setState({
            persons: persons
        });
    }

    toggleBookList = () => {
        this.setState({
            showBooks: !this.state.showBooks
        })
    }

    togglePersonList = () => {
        this.setState({
            showPersons: !this.state.showPersons
        })
    }

    render() {
        const style = {
            backgroundColor: "#8697A6",
            padding: "25px"
        }
        let books = null;
        if (this.state.showBooks) {
            books = <BookList books={this.state.books}
                delete={this.deleteBook}
                change={this.changeBook} />;
        }

        let persons = null;
        if (this.state.showPersons) {
            persons = <PersonList persons={this.state.persons}
                delete={this.deletePerson}
                change={this.changePerson} />
        }

        return (
            <div className="App">
                <h1 id="header" style={style}>Fourth React App</h1>
                <div className="persons" style={{ textAlign: "center", padding: "15px" }}>
                    <button onClick={this.togglePersonList}>Toggle Person List</button>
                    {persons}
                </div>
                <div style={{ textAlign: "center", backgroundColor: "rgba(140, 78, 43, 1)", padding: "20px" }}>
                    <button onClick={this.toggleBookList}>Toggle Book List</button>
                    {books}
                </div>
            </div>
        );
    }
}

export default Main;