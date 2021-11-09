import React from 'react';
import {render} from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-image-gallery/styles/css/image-gallery.css';
import App from './layouts/App';

render(
    <App/>,
    document.querySelector('#app'),
);