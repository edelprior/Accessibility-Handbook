import {Cell, Grid, Row} from '@material/react-layout-grid';
import Button from '@material/react-button';
import Avatar from '@material-ui/core/Avatar';
import TextField, {HelperText, Input} from '@material/react-text-field';import React from 'react';
import ReactDOM from 'react-dom';
import List, {ListItem, ListItemGraphic} from '@material/react-list';
import { Body1, Headline5 } from '@material/react-typography';
import { Link } from 'react-router-dom';
import MaterialIcon from '@material/react-material-icon';
// Component to represent a single User 'Card'
// note that the edit button navigates to a new URL (which will load a new Component via React Router)
// whereas the delete button invokes a function in the parent Component
class User extends React.Component {

  // define what happens when this componet gets drawn on the UI
  render() {
    return (
      <Grid>
        <Row>
          <Cell columns = {12}>
            <List>
              <ListItem>
                <Avatar alt="Profile" src={this.props.image} />
                <Headline5 className = "ProfileName"> {this.props.name}</Headline5>
              </ListItem>
              <ListItem>
                <Body1>   {this.props.comment} </Body1>
              </ListItem>
            </List>
          </Cell>
          <Button type="button" onClick={() => {this.props.handleDelete(this.props.id);}}>
                      Delete
          </Button>
          <Link to={`/edit-user/${this.props.id}`}>
            <Button type="button">
                      Edit
            </Button>
          </Link>
        </Row>
      </Grid>
    );
  }
}

export default User;
