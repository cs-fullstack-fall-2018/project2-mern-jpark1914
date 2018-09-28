import React, { Component } from 'react';
import './App.css';
import BlogInput from "./BlogInput";
import Navi from "./Navi";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Enter Journal Entries</h1>
                </header>

                <BlogInput/>
            </div>
        );
    }
}

export default App;
