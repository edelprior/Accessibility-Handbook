{/*
  Functionality of Start.js :

  - Introduces the application, is the first page the user sees
  - Holds a router that renders the '/' of the server, the commentList
  - Has the routes that will be accessed in the other components for CRUD
  */}


// - - -React, Router and Styles  - - - - - - - - //

import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import '../App.scss';

// - - - - - Material Imports - - - - - - - - - - //
import {Cell, Grid, Row} from '@material/react-layout-grid';
import { Headline2, Headline4,Headline5, Body1} from '@material/react-typography';
import Button from '@material/react-button';
import MaterialIcon from '@material/react-material-icon';
// - - - - - - - - - - - - - - - - - - - - - //

// - - - - - Components  - - - - - - - - - - //
import CreateComment from '../Components/CreateComment';
import CommentList from '../Components/CommentList';
import EditComment from '../Components/EditComment';

// - - - - - - - - - - - - - - - - - - - - - //



class Start extends Component {

  render() {
    return (
      <HashRouter>
        <Grid>
          {/* - - - - - - - - - - - - -*/}
          <Row>
            <Cell className = "welcomeText" columns ={12}>
              <Headline2> What is Accessible Design? </Headline2>
            </Cell>
          </Row>
          {/* - - - - - - - - - - - - -*/}
          {/* - - - - - - - - - - - - -*/}
          <Row>
            <Cell  columns ={12} >
              <Headline5 className = "welcomeQuote">
               “Accessible design requires empathy:
               it is the product of putting yourself in other people’s shoes.”
               (Pickering, 2014)
              </Headline5>
            </Cell>
            {/* - - - - - - - - - - - - -*/}
            <Cell className = "type" columns ={12} >
              <Headline4>
               Frequently confused with Universal Design, <b className = "color">Accessible Design</b> is the idea of a Design for all
              </Headline4>
              <Headline5>
               Accommodating those who are limited in performance, with the needs of the <b className = "color"> users </b>
               specifically taken into account.
              </Headline5>
            </Cell>
          </Row>
          {/* - - - - - - - - - - - - -*/}
          <Row>
            <Cell className = "commentSection" columns = {12}>
              <Headline2 className = "commentTitle"> Comments </Headline2>
              <Route exact path="/" component={CommentList}/>
              <Route path="/edit-user/:id" component={EditComment}/>
              <Route path="/create-user" component={CreateComment}/>
            </Cell>
          </Row>
        </Grid>
      </HashRouter>
    );
  }
}

export default Start;
