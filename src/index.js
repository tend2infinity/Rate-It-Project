import React from 'react';
import {render} from 'react-dom';
import './index.css';
import {App} from './app';
import {GlobalStyles} from './GlobalStyles';
import 'normalize.css';
import { firebase } from './firebase/firebase.prod'
import { firebaseContext } from './context/firebase'

render(
<>
  <firebaseContext.Provider value={{ firebase }}>
    <GlobalStyles />
    <App />
  </firebaseContext.Provider>
  
    </>,
  document.getElementById('root')
);


