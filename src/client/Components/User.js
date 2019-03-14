{/*
  Functionality of User.js :

  - Represents a single 'user' and its props
  - Holds a router that renders the edit user through the <Link>
  - Delete function accessed through props via the parent component
  - Has Avatar CSS styles from material - ui
  */}


// - - - React, Router and Styles  - - - - - - - - //
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

// - - - - - Material Imports - - - - - - - - - - //

import { Cell, Grid, Row } from '@material/react-layout-grid';
import TextField, { HelperText, Input } from '@material/react-text-field';
import List, { ListItem } from '@material/react-list';
import { Headline5, Body1 } from '@material/react-typography';
import Button from '@material/react-button';
import Avatar from '@material-ui/core/Avatar';
import MaterialIcon from '@material/react-material-icon';

// (No imported Components as it is a standalone for export)
// - - - - - - - - - - - - - - - - - - - - - //

class User extends Component {

  render() {
    return (
      <Grid>
        <Row>
          <Cell columns = {12}>

            {/* - - - - - - - - - - - - -*/}
            <List>
              <ListItem>
                <Avatar alt="Profile" src={this.props.image} />
                <Headline5 className = "ProfileName"> {this.props.name}</Headline5>
              </ListItem>
              <ListItem>
                <Body1>   {this.props.comment} </Body1>
              </ListItem>
            </List>
            {/* - - - - - - - - - - - - -*/}
          </Cell>

          {/* - - - - - - - - - - - - -*/}

          <Button type="button"
            onClick={() => {this.props.handleDelete(this.props.id);}}>
            Delete
          </Button>

          {/* - - - - - - - - - - - - -*/}

          <Link to={`/edit-user/${this.props.id}`}>
            <Button type="button">
             Edit
            </Button>
          </Link>

          {/* - - - - - - - - - - - - -*/}
        </Row>
      </Grid>
    );
  }
}

export default User;
