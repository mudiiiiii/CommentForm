import './App.css';
import Login from './Login';
import CommentsForm from './CommentsForm';
import ThankYouForm from './ThankYouForm';
import { Route, BrowserRouter, Navigate, Routes, Switch, Redirect } from 'react-router-dom';
import React, { useState } from "react";
import auth from "./auth";

function App() {
  const [comments, setComments] = useState(); //store the comments
  //routing the application to three pages: A Login page, A Comments form, and Thank you form
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route exact path="/commentsForm" render={(studentEmail) => 
            auth.getLogInStatus() ?
            (<CommentsForm onCommentUpdate={setComments}/>) :
            (<Redirect to={{pathname:'/'}}></Redirect>)}></Route>
          <Route exact path="/thankYouForm" render={(studentEmail) => 
            auth.getLogInStatus() ?
            (<ThankYouForm studentComment={comments} />) :
            (<Redirect to={{pathname:'/'}}></Redirect>)}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
