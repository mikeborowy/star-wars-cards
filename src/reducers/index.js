import {combineReducers} from 'redux';
//reducers
import {preloader} from './preloader';
import {resources} from './resources';
import {player} from './player';

export default combineReducers({
    preloader,
    resources,
    player
});