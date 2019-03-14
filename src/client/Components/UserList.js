import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import User from './User';
import axios from 'axios';
import Button from '@material/react-button';
import '../App.scss';
class UserList extends Component {
  constructor(props) {
    super(props);
    // store the array of users in state
    this.state = { users: [] };

    this.updateUsers = this.updateUsers.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    // when the component mounts, fetch the user data from the server
    this.updateUsers();
  }

  updateUsers() {
    // make a GET request to the server for the user data, store it in state
    axios.get('api/users')
      .then(response => {
        this.setState({ users: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleDelete(userId) {
    // make a DELETE request to the server to remove the user with this userId
    axios
      .delete('api/users', {
        data: {
          id: userId
        }
      })
      .then(response => {
        // if delete was successful, re-fetch the list of users, will trigger a re-render
        this.updateUsers();
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    // for each user object, produce a User Component
    const userList = this.state.users.map(u => (
      <User
        key={u._id}
        id={u._id}
        name={u.name}
        image={u.picture}
        comment ={u.comment}
        handleDelete={this.handleDelete}
      />
    ));

    return (
      <div className = "commentTitle">
        <Link to={'/create-user'}>
          <Button>
      Add a Comment
          </Button>
        </Link>
        <div>{userList}</div>
      </div>

    );
  }
}

export default UserList;
