import React from 'react';
import './App.css';
import UserList from './UserList';
import componentWithLayout from './Layout';
import './UserList.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fetchedUsers: null };
  }

  render() {
    return (
      <div className="App">
        <UserList users={this.state.fetchedUsers} />
      </div>
    );
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => this.setState({ fetchedUsers: json }));
  }
}

export default componentWithLayout(App);
