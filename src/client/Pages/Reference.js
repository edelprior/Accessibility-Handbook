{/*
  Functionality of Reference.js :
  takes the data as props {this.modalData}, and puts it into
  a modal called <CardModal>

  */}


// - - - React & Styles - - - - - - - - - //
import React, { Component } from 'react';
import '../App.scss';

// - - - - Material Imports - - - - - - - //
import {Cell, Grid, Row} from '@material/react-layout-grid';
import { Headline3 } from '@material/react-typography';
import MaterialIcon from '@material/react-material-icon';

// - - - - Components  - - - - - - - - //
import Data from '../Components/Data';
import TipCard from '../Components/TipCard';

// - - - - - - - - - - - - - - - - - //

class Reference extends Component {
  constructor() {
    super();
    this.state = { show: false,
      modalData: []
    };
  }

    show = (data) => {
      this.setState({ show: true,
        modalData: data});
    };
    hide = () => {
      this.setState({ show: false });
    };


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
