import React, { Component } from 'react';
import './App.css';
import Person from './components/Person';
import Book from './components/Book';

class App extends Component {
  state = {
    persons: [
      { key: 1, name: "Asad Mujumder", age: "26" },
      { key: 2, name: "Omar Chowdhury", age: "15" },
      { key: 3, name: "Galib Chowdhury", age: "10" }
    ],
    books: [
      { key: 1, name: "The whispering of silence", author: "Asad Mujumder" },
      { key: 2, name: "Javascript MasterClass", author: "Asad Mujumder" }
    ]
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

  render() {
    const style = {
      backgroundColor: "#8697A6",
      padding: "25px"
    }
    const books = this.state.books.map((book, index) => {
      return (
        <Book {...book}
          delete={() => this.deleteBook(index)}
          change={event => this.changeBook(index, event)} />
      );
    });

    const persons = this.state.persons.map((person, index) => {
      return (
        <Person {...person}
          delete={() => this.deletePerson(index)}
          change={event => this.changePerson(event, index)} />
      );
    });
    //<Person {...this.state.persons[0]} change={() => this.changePerson("Anik Mujumder")} />
    return (
      <div className="App">
        <h1 id="header" style={style}>Fourth React App</h1>
        <div className="persons" style={{ textAlign: "center", padding: "15px" }}>
          {persons}
        </div>
        <div style={{ textAlign: "center", backgroundColor: "rgba(140, 78, 43, 1)", padding: "20px" }}>
          {books}
        </div>
      </div>
    );
  }
}

export default App;
