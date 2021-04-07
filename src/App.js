import React, { Component } from 'react';
import './App.css';
import Person from './components/Person';
import Book from './components/Book';

class App extends Component {
  state = {
    persons: [
      { name: "Asad Mujumder", age: "26" },
      { name: "Omar Chowdhury", age: "15" },
      { name: "Galib Chowdhury", age: "10" }
    ],
    books: [
      { name: "The whispering of silence", author: "Asad Mujumder" },
      { name: "Javascript MasterClass", author: "Asad Mujumder" }
    ]
  }

  chnageBook = bookName => {
    this.setState({
      books: [
        { name: bookName, author: "Asad Mujumder" },
        { name: "Javascript MasterClass", author: "Asad Mujumder" }
      ]
    });
  }

  chnageBook2 = event => {
    this.setState({
      books: [
        { name: "The whispering of silence", author: "Asad Mujumder" },
        { name: event.target.value, author: "Asad Mujumder" }
      ]
    });
  }

  changePerson = (name) => {
    this.setState({
      persons: [
        { name: name, age: "26" },
        { name: "Omar Chowdhury", age: "15" },
        { name: "Galib Chowdhury", age: "10" }
      ]
    });
  }

  render() {
    const style = {
      backgroundColor: "#8697A6",
      padding: "25px"
    }
    return (
      <div className="App">
        <h1 id="header" style={style}>Fourth React App</h1>
        <div className="persons" style={{ textAlign: "center", padding: "15px" }}>
          <Person {...this.state.persons[0]} change={this.changePerson} />
          <Person {...this.state.persons[1]} />
          <Person {...this.state.persons[2]} />
        </div>
        <div style={{ textAlign: "center", backgroundColor: "rgba(140, 78, 43, 1)", padding: "20px" }}>
          <button onClick={() => this.chnageBook('Programming for Kids')}>Change Book</button>
          <Book {...this.state.books[0]} change={this.chnageBook} />
          <Book {...this.state.books[1]} />
          <input type="text" onChange={this.chnageBook2} value={this.state.books[1].name} />
        </div>
      </div>
    );
  }
}

export default App;
