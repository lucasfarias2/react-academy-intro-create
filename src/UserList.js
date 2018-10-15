import React from 'react';

class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: '' };
  }

  handleOnChange = event => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    return (
      <div>
        <form>
          <input
            placeholder="Busca entre los usuarios"
            onChange={this.handleOnChange}
          />
        </form>
        {this.props.users &&
          this.props.users
            .filter(user =>
              user.name
                .toLowerCase()
                .includes(this.state.searchTerm.toLowerCase())
            )
            .map(user => <h4 key={user.id}>{user.name}</h4>)}
      </div>
    );
  }
}

export default UserList;
