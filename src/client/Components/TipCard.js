{/*
  Functionality of TipCard.js :

  Using this.props.modalData from the array and state that's been defined
  in Reference, we can access the title and each object in the array that's
  been passed in through props with the <Data> element.

  */}


// - - - React & Styles  - - - - - - - - //

import React, { Component } from 'react';
import '../App.scss';

// - - - - Material Imports - - - - - - - //

import Card, {
  CardPrimaryContent,
  CardActions,
  CardActionIcons
} from '@material/react-card';
import { Headline3, Headline5, Body1, Body2} from '@material/react-typography';
import {Cell} from '@material/react-layout-grid';
import MaterialIcon from '@material/react-material-icon';

// - - - - Components  - - - - - - //
import '../Pages/Examples';

// - - - - - - - - - - - - - - - - - - - - - //

class TipCard extends Component {
  render() {
    return (
      <Cell columns = {12}>
        {/* - - - - */}

        <Card className="typeContentCard">
          <CardPrimaryContent className = "typeContentCard">
            <Headline3>
              {this.props.modalData.title}
            </Headline3>

            <Headline5>{this.props.modalData.overview} </Headline5>
            <Body2> {this.props.modalData.info}  </Body2>
            <Body1> {this.props.modalData.summary} </Body1>



          </CardPrimaryContent>

          <CardActions>


            <CardActionIcons>

              <MaterialIcon className = "codeicon" icon="code" onClick = {console.log('clicked')}/>
              <MaterialIcon className = "codeicon" icon="arrow_drop_down" link = {this.props.modalData.link} />


            </CardActionIcons>
          </CardActions>
        </Card>

        {/* - - - - */}
      </Cell>

    );
  }
}
export default TipCard;
