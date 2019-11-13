import React from 'react';
import './App.css';
import '@material-ui/core'
import YggRss from "./app/ygg/YggRss";
import YoutubeReader from "./app/youtube/readerComponent/YoutubeReader";

function App() {
    return (
        <div className="App">
            <YoutubeReader/>
            <YggRss/>
        </div>
    );
}

export default App;
