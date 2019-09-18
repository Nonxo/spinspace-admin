import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import Store from './middleware/Store';
import {BrowserRouter as Router} from "react-router-dom";
import {createBrowserHistory as history} from 'history';

ReactDOM.render(
<Provider store={Store}>
<Router>
<App history={history}/>
</Router>
</Provider>, document.getElementById('root'));


serviceWorker.unregister();
