import React, {useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import MainPage from "./pages/MainPage/MainPage";
import ShowToDo from "./pages/ShowToDo/ShowToDo";
import {Provider, useDispatch} from "react-redux";
import configureStore from "./redux";
import {applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {saveToDoList} from "./redux/actions/todos";

const store = configureStore(applyMiddleware(thunk));


const Loader = ({children}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch('https://test.megapolis-it.ru/api/list', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
    })
        .then(response => response.json())
        .then(result => {dispatch(saveToDoList(result.data))})

  }, [dispatch]);
  return children;
};


function App() {
  return (
      <Provider store={store}>
        <Loader>
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
        </Loader>
      </Provider>
  );
}

export default App;
