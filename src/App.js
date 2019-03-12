import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import './Styles/App.scss';
// Linking React Library, React-Dom, and Stylesheet
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
// Import material.io modules for styling the application
import TopAppBar, {TopAppBarFixedAdjust} from '@material/react-top-app-bar';
import Drawer, {DrawerAppContent, DrawerContent, DrawerHeader} from '@material/react-drawer';
import MaterialIcon from '@material/react-material-icon';
import List, {ListItem, ListItemGraphic, ListItemText} from '@material/react-list';
import { Headline3} from '@material/react-typography';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
// Importing Components that act as 'pages' within the Router-dom
import Start from './Pages/Start';
import Reference from './Pages/Reference';
import Examples from './Pages/Examples';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

// eslint-disable-next-line
{/* - - - - -
    What's going in this Component?
    - - - - -
    Main Page (Top page that is full of static
    Components, Drawer, Top App Bar and Router)
    These components will stay on every page, with only
    <DrawerAppContent> being altered.
    - - - - -
    What is the Functionality?
    - - - - -
    Serves as the Beginning page of the application, is the
    first thing the users sees, needs to have decent nav points
    explain what the app is and catch the users attention.
*/}

class App extends Component {
   state = {open: true,
   };
    render() {


      return (

        <BrowserRouter>
        <div className="drawer-container">
        {/* - - - - - - - - - - - - - - - - - - - - - - - */}
        <Drawer
          className = "drawer"
          dismissible
          open={this.state.open}
          onClose={() => this.setState({open: false})}
        >
         <DrawerContent>
           <DrawerHeader>
           <Link className = "link" to="/">
           <ListItemGraphic className="logo" link = "/" graphic = {<MaterialIcon icon="accessibility"/>}>
           </ListItemGraphic>
           </Link>
           <Headline3>
              Accessibilty Design Handbook
           </Headline3>

           </DrawerHeader>
              {/* - - - - - - - - - - */}
           <List className = "NavList">
              <ListItem>
                  <Link className = "link" to="/">
                      <ListItemGraphic className = "icon" graphic={<MaterialIcon icon="home"/>} />
                      <ListItemText className = "NavText" primaryText="Home" />
                  </Link>
              </ListItem>

              {/* * * * */}

              <ListItem>
                   <Link className = "link" to = "/reference">
                         <ListItemGraphic className = "icon" graphic={<MaterialIcon icon="folder"/>} />
                         <ListItemText className = "NavText" primaryText="Reference" />


                  </Link>
              </ListItem>

              {/* * * * */}

                <ListItem>
                  <Link className = "link" to="/examples">
                  <ListItemGraphic className = "icon" graphic={<MaterialIcon icon="code"/>} />
                  <ListItemText className = "NavText" primaryText ="Examples" />
                  </Link>
                  </ListItem>
                      {/* * * * */}

                        <ListItem>
                          <Link className = "link" to="/github">
                          <ListItemGraphic className = "icon" graphic={<MaterialIcon icon="device_hub"/>} />
                          <ListItemText  className = "NavText" primaryText ="GitHub" />
                          </Link>
                          </ListItem>
            </List>
          </DrawerContent>
        </Drawer>

        {/* - - - - - - - - - - - - - - - - - - - - - - - */}

        <DrawerAppContent className="drawer-app-content">
            <TopAppBar className = "TopAppBar"
              navigationIcon={
                <MaterialIcon className  = "menuicon" icon="menu"onClick={() =>
                 this.setState({open: !this.state.open})}>

                                </MaterialIcon>
            }
        >



          </TopAppBar>
            {/* Trying to get the Material Icon button to be Menu when the drawer is closed, and when open close icon */ }

            <TopAppBarFixedAdjust>

                      <Route exact path  = "/" component={Start}/>
                      <Route path = "/reference" component={Reference}/>
                      <Route path = "/examples" component = {Examples}/>
                      <Route path='/github' component={() => {
                       window.location = 'https://github.com/edelprior/finalyearproject';
                       return null;} }/>
                      </TopAppBarFixedAdjust>


            {/* Path so the Router knows which component to show */ }
          </DrawerAppContent>
         {/* - - - - - - - - - - - - - - - - - - - - - - - */}

         {/* Closing Divs for Container and BrowserRouter (BrowserRouter can only return one div)*/}
         </div>
        </BrowserRouter>

      );
    }
  }

  // eslint-disable-next-line
  {/*

      - Declaring the state for the drawer as open when page is loaded.
      - Everything must be wrapped in the BrowserRouter.
      - Doesn't work with GH pages, will have to change
        variable to HashRouter.
      - Trying to get the Material Icon button to be Menu when the drawer
        is closed, and when open close icon
  */}



export default App;
