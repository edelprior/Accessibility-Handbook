{/*

    Functionality of Tip.js :

    Using this.props.tips this component holds the map function, taking
    props from Data.js through props, and putting it into (tip) to display
    the 'Reference' list

*/}

// - - -React, Router and Styles  - - - - - - - - //
import React, { Component } from 'react';
import '../App.scss';

// - - - - Material Imports - - - - - - - - - - //

import List, {ListItem, ListItemGraphic} from '@material/react-list';
import {Headline6} from '@material/react-typography';
import MaterialIcon from '@material/react-material-icon';
import {Cell, Grid, Row} from '@material/react-layout-grid';

// - - - - - - - - - - - - - - - - - - - - - //



class Tips extends Component {

  render() {
    return(
      <Grid>
        <Row>
          <Cell className = "Referencelist" columns = {12}>
            <List>
              <ListItem  className= "Referencelist" onClick = {()=> this.props.show(this.props.tip)}> <Headline6>
                {this.props.title}</Headline6>
              <ListItemGraphic className = "iconOpen" graphic={<MaterialIcon icon="open_in_new"/>} />

              </ListItem>
            </List>
          </Cell>
        </Row>
      </Grid>
    );}
}




export default Tips;
