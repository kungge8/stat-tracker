import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import {
  Header,
  Sidebar,
  FightScene,
  HeroesContainer,
  LaborContainer,
  ScienceContainer,
} from './Components';
import {
  Box,
} from '@material-ui/core';

import './Styling/general.css';
import { Container } from '@material-ui/core';


class App extends Component {
  render () {
    return (
      <Router>
        <Provider store = { store }>
          <Container className = 'mainBody' maxWidth = {'xl'} disableGutters = {false}>
            <Header />
            <Box className = 'screen'>
              <Sidebar />
              <Box className = "mainScreen">
                <FightScene />
                <Switch>
                  <Route path = '/science'>
                    <ScienceContainer />
                  </Route>
                  <Route path = '/labor'>
                    <LaborContainer />
                  </Route>
                  <Route path = '/'>
                    <HeroesContainer />
                  </Route>
                </Switch>
              </Box>
            </Box>
          </Container>
        </Provider>
      </Router>
    );
  }
}

export default App;

