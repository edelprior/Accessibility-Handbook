import React, { Component } from 'react';
import {Cell, Grid, Row} from '@material/react-layout-grid';
import { Headline4, Headline2, Caption, Headline5, Body1} from '@material/react-typography';
import Button from '@material/react-button';
import MaterialIcon from '@material/react-material-icon';
// - - - - - - - - - - - - - - - - - - - - - //
import '../App.scss';
import CreateUser from '../Components/CreateUser';
import EditUser from '../Components/EditUser';
import UserList from '../Components/UserList';

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
           <Cell  columns ={12} >
             <Headline4>
Frequently confused with Universal Design, <b>Accessible Design</b> is the idea of a Design for all, accommodating those who are limited in performance, with the needs of the users specifically taken into account.
             </Headline4>
             <Headline5 className = "ColorT">
Whereas Universal Design incorporates the notion of design without need for adaptation or specialization.</Headline5>

           </Cell>
         </Row>
         <Row>
           <Cell className = "commentSection" columns = {12}>
             <Headline4> Comments </Headline4>
             <UserList/>
           </Cell>
         </Row>
         <Row>
           <Cell columns = {12}>
             <Headline4> Leave a comment </Headline4>
             <CreateUser/>
           </Cell>
         </Row>
       </Grid>
     );
   }
}


const SignUpModal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <Grid>
      <Row className = {showHideClassName}>
        <Cell className = "CardModal" columns = {12}>
          <MaterialIcon className = "closeIcon" icon="close" onClick={handleClose}/>



        </Cell>
      </Row>
    </Grid>
  );
};

export default Start;
