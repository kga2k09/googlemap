import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from 'material-ui-search-bar';
import PlaceSuggestApp from './containers/PlaceSuggestApp';
import Search from './components/search';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div id='app'>
          <PlaceSuggestApp />
          <Search />
        </div>
      </Provider>
    );
  }
}

export default App;
