import {combineReducers} from 'redux';
//reducers
import {resources} from './resources';
import {player} from './player';

export default combineReducers({
    resources,
    player
});