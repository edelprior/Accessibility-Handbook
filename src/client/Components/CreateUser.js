import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import TextField, {HelperText, Input} from '@material/react-text-field';
import {Cell, Grid, Row} from '@material/react-layout-grid';
import Button from '@material/react-button';
class CreateUser extends Component {
  constructor(props) {
    super(props);
    // store form fields in state
    this.state = {name: '', picture: '', comment: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

    // send a POST request to the server
    // the request includes the state, which is the info. for the new user to be created
    axios.post('/api/users', this.state)
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
            <form onSubmit={this.handleSubmit}>
              <TextField fullwidth label = 'What is your name?'>
                <Input type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange} />
              </TextField>
              <TextField label = "Give us a look at your face!">
                <Input type="text"
                  name="picture"
                  value={this.state.picture}
                  onChange={this.handleChange} />
              </TextField>
              <TextField label = "Tell us what you think!">
                <Input type="text"
                  name="comment"
                  value={this.state.comment}
                  onChange={this.handleChange} />
              </TextField>

              <Button type="submit" value="Submit">Upload Comment</Button>
            </form>
          </Cell>
        </Row>
      </Grid>
    );
  }
}

export default CreateUser;
