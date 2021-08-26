import { combineReducers } from '@reduxjs/toolkit';
import isEntryReducer from './isEntry';
import isAuthorReducer from './isAuthor';

const rootReducer = combineReducers({
  isEntry: isEntryReducer,
  isAuthor: isAuthorReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
