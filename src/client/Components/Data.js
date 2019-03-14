{/*

    Functionality of Data.js :

    Get required data from Database with Axios

*/}

// - - - React, Router and Styles  - - - - - - - - //


import React, { Component } from 'react';
import axios from 'axios';

// - - - Material Imports - - -  - - - - - - - - //
import { Cell, Grid, Row } from '@material/react-layout-grid';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

// - - - - - - - - Components  - - - - - - - - //
import Tips from './Tips';

// - - - - - - - - - - - - - - - - - - - - //


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tips: [],
      searchTerm: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    axios .get('api/tips/')
      .then(response => {
        this.setState({
          tips : response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }


  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    let filteredTips = this.state.tips;

    if (this.state.searchTerm) filteredTips = this.state.tips.filter(u => u.title.toLowerCase().startsWith(this.state.searchTerm.toLowerCase()));

    const tipNames = filteredTips.map(u => <Tips title={u.title} tip={u} key={u.id} show={this.props.show} />);
    return (

      <Grid>
        <Row>
          <Cell columns={12}>

            <TextField
              className="Search"
              trailingIcon={<MaterialIcon className="Searchicon" icon="search" />}
              outlined
            >
              <Input
                className="Search"
                type="text"
                name="searchTerm"
                placeholder="e.g. Color"
                value={this.state.searchTerm}
                onChange={this.handleChange}
              />

            </TextField>

          </Cell>
        </Row>
        <Row>
          <Cell>
            {tipNames}
          </Cell>
        </Row>
      </Grid>
    );
  }
}

export default App;
