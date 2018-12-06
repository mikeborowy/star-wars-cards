import axios from 'axios';
import {initialState} from '../constants/index';

/** TYPES START */
export const types = {
    SET_CARD_DATA: 'SET_CARD_DATA',
    GET_CARD_DATA: 'GET_CARD_DATA',
    SET_PLAYER_SCORE: 'SET_PLAYER_SCORE',
    SET_PLAYER_STATUS: 'SET_PLAYER_STATUS',
    RESET_PLAYERS: 'RESET_PLAYERS',
};
/** TYPES END */

/** ACTIONS START */
export const onSetCard = (player) => ({type: types.SET_CARD_DATA, player});
export const onSetPlayerStatus = (player) => ({type: types.SET_PLAYER_STATUS, player});
export const onSetPlayerScore = (playerId) => ({type: types.SET_PLAYER_SCORE, playerId});
export const onResetPlayers = () => ({type: types.RESET_PLAYERS});
export const onGetCardAjax = (playerId, resources, id) => {
    return (dispatch) => {

        const options = {
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        };

        const url = `https://swapi.co/api/${resources}/${id}/`;

        return axios
                .get(url, options)
                .then(response => {

                    const player = {
                        playerId,
                        card: {...response.data}
                    };

                    dispatch(onSetCard(player));

                    return { 
                            playerId,
                            status: 1   
                        };
                })
                .catch( error => {
                    alert(error.message);
                });
    };
};

/** REDUCER START */
export const player = (state = initialState.player, action = {}) => {

    switch (action.type) {
        case types.SET_CARD_DATA:
      
            return { 
                ...state, 
                [action.player.playerId]: {
                    ...state[action.player.playerId],
                    card: action.player.card
                }
            };

        case types.SET_PLAYER_STATUS:

            return { 
                ...state, 
                [action.player.playerId]: {
                    ...state[action.player.playerId], 
                    status: action.player.status
                }
            };

        case types.SET_PLAYER_SCORE:

            return { 
                ...state, 
                [action.playerId]: { 
                    ...state[action.playerId], 
                    score: state[action.playerId].score + 1 
                } 
            };

        case types.RESET_PLAYERS: 

            return initialState.player;

        default:
            return state || {};
    }
};
/** REDUCER END */