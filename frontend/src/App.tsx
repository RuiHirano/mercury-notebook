import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './views/main';
import configureStore from './redux';
import { Provider as ReduxProvider} from "react-redux";

const App = () => {

  const { store } = configureStore();
  
  return (
    <div className="App">
    <ReduxProvider store={store}>
      <Main/>
    </ReduxProvider>
    </div>
  );
}

export default App;
