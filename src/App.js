import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './store';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
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
  Container,
} from '@material-ui/core';

import './Styling/general.css';

class App extends Component {
  render () {
    return (
      <Router>
        <Provider store = {store}>
          <PersistGate loading = {null} persistor = {persistor}>
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
          </PersistGate>
        </Provider>
      </Router>
    );
  }
}

export default App;

