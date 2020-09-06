import React from 'react';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import MainPage from "./pages/MainPage/MainPage";
import ShowToDo from "./pages/ShowToDo/ShowToDo";
import {Provider} from "react-redux";
import configureStore from "./redux";
import {applyMiddleware} from "redux";
import thunk from "redux-thunk";

const store = configureStore(applyMiddleware(thunk));

function App() {
  return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Switch>
              <Route exact path='/'>
                <MainPage/>
              </Route>
              <Route exact path='/showToDo'>
                <ShowToDo/>
              </Route>
            </Switch>
          </div>
        </Router>
      </Provider>
  );
}

export default App;
