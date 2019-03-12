import React, { Component } from 'react';
import {Cell, Grid, Row} from '@material/react-layout-grid';
import { Headline2 } from '@material/react-typography';
import Button from '@material/react-button';
import MaterialIcon from '@material/react-material-icon';
// - - - - - - - - - - - - - - - - - - - - - //
import '../App.scss';
// - - - - - - - - - - - - - - - - - - - - - //
//import { Headline4 } from '@material/react-typography';
// eslint-disable-next-line
{/* Link to Stylesheet and React Library..

    Whats Going in this Component?

    Funcitonality?
 
    Overview:
*/}


class Start extends Component {

   state = { show: false };

   showModal = () => {
     this.setState({ show: true });
   }

   hideModal = () => {
     this.setState({ show: false });
   }

    render() {
      return (
        <Grid>
        <Row>

        <Cell className = "welcomeText" columns ={12}>
        <Headline2> What is Accessible Design? </Headline2>
        </Cell>
        </Row>

        <Row>
        <Cell columns = {6}>

        <Button
          raised
          className='button-alternate'
          onClick={this.showModal}
        > Log In
        </Button
        >
        </Cell>
        <Cell columns = {6}>
        <Button
          outlined
          className='signupbutton'
          onClick= {this.showModal}
        > Sign Up
        </Button>
        </Cell>
        </Row>
        <SignUpModal show={this.state.show} handleClose={this.hideModal} >
         <p>Modal</p>
         <p>Data</p>
       </SignUpModal>
        </Grid>
      )
    }
  }


  const SignUpModal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';

    return (
      <Grid>
      <Row className = {showHideClassName}>
      <Cell className = "CardModal" columns = {12}>
              <MaterialIcon className = "closeIcon" icon="close" onClick={handleClose}/>
              <h1> Sign up </h1>
        </Cell>
      </Row>
      </Grid>
    );
  };

export default Start;
