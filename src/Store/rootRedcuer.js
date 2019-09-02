import {combineReducers} from 'redux'
import studentReducer from '../reducers/studentReducer/studentReducer';
import postReducer from '../reducers/postReducer/postReducer';

const rootReducer=combineReducers({
 studentReducer,
 postReducer
})
export default rootReducer;


