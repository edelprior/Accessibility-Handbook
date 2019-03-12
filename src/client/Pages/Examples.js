import React, { Component } from 'react';
import Iframe from 'react-iframe';
import {Cell, Grid, Row} from '@material/react-layout-grid';
// - - - - - - - - - - - - - - - - - - - - - //

import '../App.scss';

// eslint-disable-next-line
{/* Link to Stylesheet, React Library, i-Frame package and Grid..

    Whats Going in this Component?

    Funcitonality?

    Overview:
*/}

class Examples extends Component {

  render() {

    return(
      <Grid>
        {/* - - - - - - - - - - - - - - - - - - - - - - - */}
        <Row>
          <Cell columns = {6} className = "sandboxCard">


            <h1> Clarity </h1>
            <Iframe
              title = "Clarity"
              url="https://codesandbox.io/embed/nwpozo7mlm?fontsize=10"
              height = "400"
              width = "500"
            >  </Iframe>

          </Cell>
        </Row>
        <br/>
        <br/>
        {/* - - - - - - - - - - - - - - - - - - - - - - - */}
        <Row>
          <Cell columns = {6} className = "sandboxCard">


            <h1> Color </h1>
            <Iframe
              title = "Color"
              url="https://codesandbox.io/embed/31101p0lnp?fontsize=10"
              height = "400"
              width = "500"
            >  </Iframe>

          </Cell>
        </Row>
        <br/>
        <br/>
        {/* - - - - - - - - - - - - - - - - - - - - - - - */}
        <Row>
          <Cell columns = {6} className = "sandboxCard">


            <h1> Contrast </h1>
            <Iframe
              title = "Contrast"
              url="https://codesandbox.io/embed/2zmnk2rlrr?fontsize=10"
              height = "400"
              width = "500"
            >  </Iframe>

          </Cell>
        </Row>
        <br />
        <br />
        {/* - - - - - - - - - - - - - - - - - - - - - - - */}
        <Row>
          <Cell columns = {6} className = "sandboxCard">

            <h1> Focus Order </h1>
            <Iframe
              title = "Focus Order"
              url="https://codesandbox.io/embed/l2wp7q6219?fontsize=10"
              height = "400"
              width = "500"
            >  </Iframe>

          </Cell>
        </Row>
        {/* - - - - - - - - - - - - - - - - - - - - - - - */}
        <Row>
          <Cell columns = {6} className = "sandboxCard">

            <h1> Language </h1>
            <Iframe
              title = "Focus Order"
              url="https://codesandbox.io/embed/rm7m9kvj7o?fontsize=10"
              height = "400"
              width = "500"
            >  </Iframe>

          </Cell>
        </Row>
        {/* - - - - - - - - - - - - - - - - - - - - - - - */}
        <Row>
          <Cell columns = {6} className = "sandboxCard">

            <h1> Scalable Typography </h1>
            <Iframe
              title = "Scalable Text"
              url="https://codesandbox.io/embed/61pqzyjq4w?fontsize=10"
              height = "400"
              width = "500"
            >  </Iframe>

          </Cell>
        </Row>
        <br/>
        <br/>
      </Grid>
    );
  }
}
export default Examples;
