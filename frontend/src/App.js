import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Login";
import BookList from "./BookList";
import CreateUser from "./CreateUser"
import EmailLogin from "./EmailLogin"

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path={"/login"}>
            <div>
            <Login />
            </div>
            <div>
            <EmailLogin />
            </div>
          </Route>
          <Route path={"/book-list"}>
            <BookList />
          </Route>
          <Route path={"/createUser"}>
            <CreateUser />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}