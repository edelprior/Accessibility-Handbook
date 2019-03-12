import React, { Component } from 'react';
import '../Styles/App.scss';
import Data from '../Components/Data';
import TipCard from '../Components/TipCard'
// - - - - - - - - - - - - - - - - - - - - - //


import {Cell, Grid, Row} from '@material/react-layout-grid';
// import Button from '@material/react-button';
import { Headline3 } from '@material/react-typography';
// import {TopAppBarFixedAdjust} from '@material/react-top-app-bar';

import MaterialIcon from '@material/react-material-icon';


// - - - - - - - - - - - - - - - - - - - - - //

// eslint-disable-next-line
{/* Link to Stylesheet, React Library, and Layout Grid..
    - - - - -
    Whats Going in this Component?
    - - - - -

    - - - - -
    Funcitonality?
    - - - - -
    Searching through the library (API) List components organised
    alphabetically with a button directing to a card component that
    will explain more about the module and have a button going to
    the codepen
*/}


class Reference extends Component {
  constructor() {
    super();
    this.state = { show: false,
                   modalData: []
                 }
               }
    show = (data) => {
    this.setState({ show: true,
                    modalData: data});
    }
    hide = () => {
    this.setState({ show: false });
    }

  render() {
    return(
      <Grid>
        <Row>
          <Cell className = "title">
          <Headline3> Reference </Headline3>

  </Cell>
  </Row>


<Row>
<Cell columns = {6}>
<Data  show = {this.show} modalData = {this.modalData} tips = {this.props.tips}/>

              </Cell>
              <Row>


        <CardModal className = "modalTest" show={this.state.show} modalData = {this.state.modalData} handleClose={this.hide} >
        </CardModal>


    </Row>
    </Row>

      </Grid>

  );
}
}
// eslint-disable-next-line
{/*
    - Trying to get the Material Icon button to be Menu when the drawer
      is closed, and when open close icon
*/}

const CardModal = (props) => {
  const showHideClassName = props.show ? 'modal display-block' : 'modal display-none';

  return (
    <Grid>
    <Row className = {showHideClassName}>
    <Cell className = "CardModal" columns = {12}>
            <MaterialIcon className = "closeIcon" icon="close" onClick={props.handleClose}/>
            <TipCard modalData = {props.modalData} />
      </Cell>
    </Row>
    </Grid>
  );
};



export default Reference;
