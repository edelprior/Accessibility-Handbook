{/*
  Functionality of CommentList.js :

  - Gets a list of users from the DB and returns them
  - returns in a User Component, and offers Delete and
  - Edit functions of each, including re-rendering so the
  - List gets updated with each interaction.
  */}


// - - - - - React & Axios & Link - - - - - - //

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.scss';

// - - - - - Material Imports - - - - - - - - //
import Button from '@material/react-button';

// - - - - - Components - - - - - - - - - - //
import User from './User';

// - - - - - - - - - - - - - - - - - - - - - //

class CommentList extends Component {
  constructor(props) {
    super(props);
    {/*  store the array that will be gotten from the DB
         in an  array in the state & updateUsers to fetch
         the data from the DB, aswell as handleDelete to give
         delete function part of the CRUD */}

    this.state = { users: [] };
    this.updateUsers = this.updateUsers.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  // - - - - - - - - - - - - - - - - - - - - - //

  componentDidMount() {
    // Gives the 'list' of users from the DB at the time of mounting
    this.updateUsers();
  }

  // - - - - - - - - - - - - - - - - - - - - - //

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

  // - - - - - - - - - - - - - - - - - - - - - //

  handleDelete(userId) {
    // make a DELETE request to the server to remove the user with this userId
    axios
      .delete('api/users', {
        data: {
          id: userId
        }
      })
      .then(response => {
        // if delete was successful,
        // re-fetch the list of users,
        // will trigger a re-render
        this.updateUsers();
      })
      .catch(error => {
        console.log(error);
      });
  }


  // - - - - - - - - - - - - - - - - - - - - - //

  render() {
    // maps through the CommentList and gives a <User> component
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

    // Gives a create function at the top of the CommentList, redirecting
    // the user to /create-user through <Link>

    return (
      <div className = "commentTitle">
        <Link to={'/create-user'}>
          <Button> Add a Comment </Button>
        </Link>
        <div>{userList}</div>
      </div>

    // - - - - - - - - - - - - - - - - - - - - - //

    );
  }
}

export default CommentList;
