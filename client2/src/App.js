import React, { Component } from 'react';
import Home from './components/QuestionUpload/QuestionUpload';
import ExamPage from './components/Exam/ExamPage';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Login from './components/Auth/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Result from './components/Dashboard/Result';
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Switch>
        <Route path="/add-ques" component={Home}/>
        <Route path="/test-page" component={ExamPage}/>
        <Route path="/" component={Login} exact/>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/result" component={Result}/>
      </Switch>
      </BrowserRouter>
    )
  }
}
