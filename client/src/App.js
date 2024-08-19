import React, { Component } from 'react';
import Home from './Components/QuestionUpload/QuestionUpload';
import ExamPage from './Components/Exam/ExamPage';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Login from './Components/Auth/Login';
import Dashboard from './Components/Dashboard/Dashboard';
import Result from './Components/Dashboard/Result';
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
