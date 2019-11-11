import React from 'react';
import './App.css';
import '@material-ui/core'
import Dashboard from './dashboard/Dashboard'
import SearchBar from "./app/youtube/SearchBar";

function App() {
  return (
    <div className="App">
        <SearchBar/>
        {/*<Dashboard/>*/}
    </div>
  );
}

export default App;
