import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import BookList from "./BookList";
import CreateUser from "./CreateUser"
import SuperLogin from "./SuperLogin"

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path={"/login"}>
            <SuperLogin />
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