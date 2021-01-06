import React from 'react';
import {render} from 'react-dom';
import './index.css';
import {App} from './app';
import {GlobalStyles} from './GlobalStyles';
import 'normalize.css';
import { Firebase } from './firebase/firebase.prod'
import { firebaseContext } from './context/firebase'

render(
<>
    <GlobalStyles />
    <App />
    </>,
  document.getElementById('root')
);


