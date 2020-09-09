import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import SignIn from './StartPage/SignIn';
import SignUp from './StartPage/SignUp';
import ForgetPassword from './StartPage/ForgetPassword';
import EditPassword from './StartPage/EditPassword';
import PrivacyPolicy from './StartPage/PrivacyPolicy';
import TermsCondition from './StartPage/TermsCondition';
import './App.css';
import MainPage from './MainPage/MainPage';
import ChangePasswordPage from './MainPage/ChangePasswordPage/ChangePasswordPage';

class App extends Component {
  render() {

    return (
      <Router>
        <Switch>
          <Route path='/' exact component={SignIn} />
          <Route path='/signin' exact component={SignIn} />
          <Route path='/signup' exact component={SignUp} />
          <Route path='/password/forget' exact component={ForgetPassword} />
          <Route path='/password/edit' exact component={EditPassword} />
          <Route path='/policy' exact component={PrivacyPolicy} />
          <Route path='/terms' exact component={TermsCondition} />
          <Route path='/main' exact component={MainPage} />
          <Route path='/main/password' component={ChangePasswordPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
