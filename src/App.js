import React from 'react';
import './App.css';
import Header from './Header';
import UserList from './UserList';

class App extends React.Component {
  render() {
    const users = [
      { id: 1, name: 'Lucas', age: 23 },
      { id: 2, name: 'Pepe', age: 54 },
      { id: 3, name: 'Jon', age: 34 }
    ];
    return (
      <div className="App">
        <Header title="Introducción a React!" color="red" />
        <UserList users={users} />
      </div>
    );
  }
}

export default App;
