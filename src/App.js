import React from 'react';
import { Provider } from "react-redux";
import store from './store';
import './App.scss';
import './App.sass';



import Players from './components/Players';
import Squad from './components/Squad';



const App = () => (
  <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <h1 className="title is-1">Squad Manager</h1>
      </header>
      <Players />
      <Squad />
    </div>
  </Provider>
)

export default App;
