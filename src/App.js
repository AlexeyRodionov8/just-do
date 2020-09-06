import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import SignIn from './StartPage/SignIn';
import SignUp from './StartPage/SignUp';
import ForgetPassword from './StartPage/ForgetPassword';
import EditPassword from './StartPage/EditPassword';
import PrivacyPolicy from './StartPage/PrivacyPolicy';
import TermsCondition from './StartPage/TermsCondition';
import './App.css';
import CircleSpinner from './common/CircleSpinner/CircleSpinner';
import MainPage from './MainPage/MainPage';

class App extends Component {
  render() {
    const show = false;

    return (
      <Router>
        {show && <CircleSpinner />}
        <Switch>
          <Route path='/' exact component={SignIn} />
          <Route path='/signin' exact component={SignIn} />
          <Route path='/signup' exact component={SignUp} />
          <Route path='/password/forget' exact component={ForgetPassword} />
          <Route path='/password/edit' exact component={EditPassword} />
          <Route path='/policy' exact component={PrivacyPolicy} />
          <Route path='/terms' exact component={TermsCondition} />
          <Route path='/main' component={MainPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
