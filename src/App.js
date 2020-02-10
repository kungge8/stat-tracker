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

import './Styling/general.css';
import { Container } from '@material-ui/core';


class App extends Component {
  render () {
    return (
      <Router>
        <Provider store = { store }>
          <Container maxWidth = {false} disableGutters = {true}>
            <Header />
            <div className = 'screen'>
              <Sidebar />
              <div className = "mainScreen">
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
              </div>
            </div>
          </Container>
        </Provider>
      </Router>
    );
  }
}

export default App;

