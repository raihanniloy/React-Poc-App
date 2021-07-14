import itemReducer from './itemReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    itemAdder: itemReducer
});

export default rootReducer;