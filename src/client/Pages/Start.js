import React, { Component } from 'react';
import {Cell, Grid, Row} from '@material/react-layout-grid';
import { Headline4, Headline2, Caption, Headline5, Body1, Headline3} from '@material/react-typography';
import Button from '@material/react-button';
import MaterialIcon from '@material/react-material-icon';
// - - - - - - - - - - - - - - - - - - - - - //
import '../App.scss';
import { HashRouter, Route } from 'react-router-dom';
import CreateUser from '../Components/CreateUser';
import UserList from '../Components/UserList';
import EditUser from '../Components/EditUser';

// - - - - - - - - - - - - - - - - - - - - - //
// import { Headline4 } from '@material/react-typography';
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

       <HashRouter>
         <Grid>
           <Row>

             <Cell className = "welcomeText" columns ={12}>
               <Headline2> What is Accessible Design? </Headline2>
             </Cell>
           </Row>
           <Row>
             <Cell  columns ={12} >
               <Body1 className = "ColorT">
         “Accessible design requires empathy: it is the product of putting yourself in other people’s shoes.”  (Pickering, 2014)
               </Body1>
             </Cell>
             <Cell className = "type" columns ={12} >
               <Headline3>
Frequently confused with Universal Design, <b className = "color">Accessible Design</b> is the idea of a Design for all
</Headline3>
<Headline3>
Accommodating those who are limited in performance, with the needs of the <b className = "color"> users </b> specifically taken into account.
               </Headline3>

             </Cell>
           </Row>
           <Row>
             <Cell className = "commentSection" columns = {12}>
               <Headline2 className = "commentTitle"> Here's what others are saying </Headline2>
               <Route exact path="/" component={UserList}/>
               <Route path="/edit-user/:id" component={EditUser}/>
               <Route path="/create-user" component={CreateUser}/>
             </Cell>
           </Row>
         </Grid>
       </HashRouter>
     );
   }
}

export default Start;
