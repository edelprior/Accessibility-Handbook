{/*
  Functionality of EditComment.js :

  - Interacts with the Database for the Update function of CRUD
  - Uses Axios to get users and place in state
  - State object matches that of the object in MongoDB
  */}


// - - - - - React & Axios - - - - - - - - //

import React, { Component } from 'react';
import axios from 'axios';

// - - - - - Material Imports - - - - - - - - //
import { Cell, Grid, Row } from '@material/react-layout-grid';
import {  Headline5 } from '@material/react-typography';
import TextField, { HelperText, Input } from '@material/react-text-field';
import Button from '@material/react-button';

// Stand alone Component (No imports needed)
// - - - - - - - - - - - - - - - - - - - - - //

class EditUser extends Component {
  constructor(props) {
    super(props);

    // User object identical to that of the MongoDB

    this.state = {
      _id: '',
      name: '',
      picture: '',
      comment: ''
    };

    // handleChange for when user updates comment,
    // & handleSubmit for when they push it.

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // - - - - - - - - - - - - - - - - - - - - - //

  componentDidMount() {
    // Fetch data relating to the user to be edited
    // ID passed by the URL and accessed via props
    // Will need all this info for the 'new' comment

    axios.get('/api/users/' + this.props.match.params.id)
      .then(response => {
        this.setState({
          _id: response.data._id,
          name: response.data.name,
          picture: response.data.picture,
          comment: response.data.comment
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  // - - - - - - - - - - - - - - - - - - - - - //

  handleChange(event) {
    // one of the input boxes changed, update the state to match
    // When comment box clicked, shows the old comment in the state
    const name = event.target.name;
    const value = event.target.value;

    // Sets state to 'new' comment

    this.setState({[name]: value});
  }

  // - - - - - - - - - - - - - - - - - - - - - //

  handleSubmit(event) {
    event.preventDefault();

    // Puts 'new' comment back into the DB
    // Last interaction with the DB for this component
    axios.put('/api/users', this.state)
      .then(res => this.props.history.push('/'))
      .catch(error => {
        console.log(error);
      });
  }

  // - - - - - - - - - - - - - - - - - - - - - //

  render() {
    // note: name of the inputs must match the property names in state
    return (
      <Grid>
        <Row>
          <Cell columns = {12}>
            <Headline5> Edit a Comment </Headline5>
            {/* - - - - - - - - - - - - - - - - - */}
            <form onSubmit={this.handleSubmit}>

              <TextField textarea className = "Form" label = "What would you like to change?">
                <Input type="text"
                  name="comment"
                  value={this.state.comment}
                  onChange={this.handleChange} />
              </TextField>

              {/* - - - - - - - - - - - - - - - - - */}

              <Button type="button"
                onClick={() => {this.props.handleDelete(this.props.comment);}}>
                Delete Comment
              </Button>

              <Button type="submit"
                value="Submit">
                Re - Upload Comment
              </Button>

              {/* - - - - - - - - - - - - - - - - - */}

            </form>
          </Cell>
        </Row>

      </Grid>
    );
  }
}

export default EditUser;
