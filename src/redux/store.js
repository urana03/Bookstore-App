import {combineReducers, createStore} from 'redux';
import  BadgeReducer  from './badgeReducer';


const reducer = combineReducers({
        BadgeReducer,
})

const store = createStore(reducer);

export default store 