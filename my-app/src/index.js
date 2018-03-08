import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppRoutes from './AppRoutes';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<div><AppRoutes /></div>, document.getElementById('root'));
registerServiceWorker();
