import React, { Component } from 'react';
import axios from 'axios';
import {  Headline5 } from '@material/react-typography';

import {Cell, Grid, Row} from '@material/react-layout-grid';
import Button from '@material/react-button';
import TextField, {HelperText, Input} from '@material/react-text-field';
class EditUser extends Component {
  constructor(props) {
    super(props);
    // store information relating to the user in state
    // should match the user object from the API
    this.state = {_id: '', name: '', picture: '', comment: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // when this Component mounts, fetch data relating to the user to be edited
    // the user's ID is passed in via the URL and accessed via props
    axios.get('/api/users/' + this.id)
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

  handleChange(event) {
    // one of the input boxes changed, update the state to match
    // note: name of the input boxes must match the property names in state
    const name = event.target.name;
    const value = event.target.value;

    this.setState({[name]: value});
  }

  handleSubmit(event) {
    event.preventDefault();

    // send a PUT request to the server
    // the request includes the state, which is the updated user information
    axios.put('/api/users', this.state)
      .then(res => this.props.history.push('/')) // if successful go to home
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    // note: name of the inputs must match the property names in state
    return (
      <Grid>
        <Row>
          <Cell columns = {12}>
          <Headline5> Edit a Comment </Headline5>
            <form onSubmit={this.handleSubmit}>
              <TextField textarea className = "Form" label = "What would you like to change?">
                <Input type="text"
                  name="comment"
                  value={this.state.comment}
                  onChange={this.handleChange} />
              </TextField>
              <Button type="button" onClick={() => {this.props.handleDelete(this.props.comment);}}>
                Delete Comment
              </Button>

              <Button type="submit" value="Submit">Re - Upload Comment</Button>
            </form>
          </Cell>
        </Row>

      </Grid>
    );
  }
}

export default EditUser;
