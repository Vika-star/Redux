// src/reducers/index.js

import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import cuntReducer from './cuntReducer';
import themeReducer from './themeReducer';

const rootReducer = combineReducers({
  zolupa: counterReducer,
  zhopa: cuntReducer,
  theme: themeReducer
});

export default rootReducer;
