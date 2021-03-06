import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyProfile from "./MyProfile";

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<MyProfile />, document.getElementById('myProfile'));
registerServiceWorker();
