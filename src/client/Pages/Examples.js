{/*
  Functionality of Examples.js :

Renders an iFrame component that embeds the sandbox example,
along with explainations of each.

  */}


// - - - React & iFrame  & Styles - - - - - - - - - //

import React, { Component } from 'react';
import Iframe from 'react-iframe';
import '../App.scss';

// - - - Material Imports - - - - - - - - - //
import {Cell, Grid, Row} from '@material/react-layout-grid';
import { Headline3, Headline5, Body1, Body2} from '@material/react-typography';

// - - - - - - - - - - - - - - - - - - - - - //

class Examples extends Component {


  render() {

    return(
      <Grid>
        {/* - - - - - - - - - - - - - - - - - - - - - - - */}
        <Row>
          <Cell columns = {6} className = "sandboxCard">
            <Iframe
              title = "Clarity"
              url="https://codesandbox.io/embed/nwpozo7mlm?fontsize=10"
              height = "600"
              width = "470"
            >  </Iframe>

          </Cell>
          <Cell columns = {6} className = "explaination">
            <Headline3 className = "explainationText"> Clarity </Headline3>
            <Headline5 className = "explainationText"> Here the importance of consistency and naming convention is stressed. On first glance the page causes immediate confusion,
                    with no aid of tooltip, labelling or appropriate icons, this interface is deemed unaccessible to the masses. </Headline5>
          </Cell>
        </Row>
        <br/>
        <br/>
        {/* - - - - - - - - - - - - - - - - - - - - - - - */}
        <Row>
          <Cell columns = {6} className = "sandboxCard">

            <Iframe
              title = "Color"
              url="https://codesandbox.io/embed/31101p0lnp?fontsize=10"
              height = "600"
              width = "470"
            >  </Iframe>

          </Cell>
          <Cell columns = {6} className = "explaination">
            <Headline3 className = "explainationText"> Color </Headline3>
            <Headline5 className = "explainationText" > In this example, the functionality of the page depends solely on Color. The app communicates with the user through the use of a very thin, subtle red line to indicate that they've entered incorrect data in the form.</Headline5>
            <Headline5 className = "explainationText"> For information so important, the developers and designers need to convey their information with more components, such as a tooltip explaining the issue underneath. </Headline5>

          </Cell>
        </Row>
        <br/>
        <br/>
        {/* - - - - - - - - - - - - - - - - - - - - - - - */}
        <Row>
          <Cell columns = {6} className = "sandboxCard">
            <Iframe
              title = "Contrast"
              url="https://codesandbox.io/embed/2zmnk2rlrr?fontsize=10"
              height = "600"
              width = "470"
            >  </Iframe>

          </Cell>
          <Cell columns = {6} className = "explaination">
            <Headline3 className = "explainationText" > Contrast </Headline3>
            <Headline5 className = "explainationText"> Adhering to the guidelines, a font color must have enough contrast with its background relative to its size to be seen clearly on a screen.</Headline5>
            <Headline5 className = "explainationText" > As can be seen in the example, each size of the white text can be viewed clearly. However the same cannot be said for the black, as there isn't enoough contrast between the two colors used in the design. </Headline5>

          </Cell>
        </Row>
        <br />
        <br />
        {/* - - - - - - - - - - - - - - - - - - - - - - - */}
        <Row>
          <Cell columns = {6} className = "sandboxCard">
            <Iframe
              title = "Focus Order"
              url="https://codesandbox.io/embed/l2wp7q6219?fontsize=10"
              height = "600"
              width = "470"
            >  </Iframe>

          </Cell>
          <Cell columns = {6} className = "explaination">
            <Headline3 className = "explainationText" > Focus Order </Headline3>
            <Headline5 className = "explainationText"> Whilst trying to explain focus order, it is best to think of the user that doesn't have access to the mouse. Although many developers believe there is a 'natural' order to a system, oftentimes it's not in accordance with what the user deems most important.</Headline5>
            <Headline5 className = "explainationText" > In this example, obeying the predictability of forms is the right thing to do, especially with form building. In the first, poorer example, the users email (the most important element) is the last field to fill out. </Headline5>

          </Cell>
        </Row>
        <br />
        <br />
        {/* - - - - - - - - - - - - - - - - - - - - - - - */}
        <Row>
          <Cell columns = {6} className = "sandboxCard">


            <Iframe
              title = "Language"
              url="https://codesandbox.io/embed/rm7m9kvj7o?fontsize=10"
              height = "600"
              width = "470"
            >  </Iframe>

          </Cell>

          <Cell columns = {6} className = "explaination">
            <Headline3 className = "explainationText" > Language </Headline3>
            <Headline5 className = "explainationText"> With this example, it is integral to look at the code. Adhering to coding principles laid out by W3 Schools, appropriate measures can be taken for the interface to be translated.</Headline5>
            <Headline5 className = "explainationText" > However it is still something to be aware of. </Headline5>

          </Cell>
        </Row>
        <br />
        <br />
        {/* - - - - - - - - - - - - - - - - - - - - - - - */}
        <Row>
          <Cell columns = {6} className = "sandboxCard">
            <Iframe
              title = "Scalable Text"
              url="https://codesandbox.io/embed/61pqzyjq4w?fontsize=10"
              height = "600"
              width = "470"
            >  </Iframe>
          </Cell>
          <Cell columns = {6} className = "explaination">
            <Headline3 className = "explainationText" > Scalable Typography </Headline3>
            <Headline5 className = "explainationText"> Material Design implementation can aid the developer greatly when it comes to typography elements. These elements must be scalable to 200% without distorting the design of the interface, to adhere to accesibility guidelines.</Headline5>
            <Headline5 className = "explainationText" > It is important to note that the typography must be scalable in relativity with one another, as can be seen in this instance. </Headline5>

          </Cell>
        </Row>
        <br/>
        <br/>
      </Grid>
    );
  }
}
export default Examples;
