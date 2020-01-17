// React Resources
import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app/App'

// External Resources
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// Stylesheet
require('./styles/style.scss');



ReactDom.render(<App />, document.getElementById('app'));