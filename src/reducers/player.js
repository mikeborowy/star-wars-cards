import axios from 'axios';
import {playerConst} from '../constants/index';

/** TYPES START */
export const types = {
    SET_CARD_DATA: 'SET_CARD_DATA',
    GET_CARD_DATA: 'GET_CARD_DATA',
    SET_PLAYER_SCORE: 'SET_PLAYER_SCORE',
    SET_PLAYER_STATUS: 'SET_PLAYER_STATUS'
};
/** TYPES END */

/** ACTIONS START */
export const onSetCard = (player) => ({type: types.SET_CARD_DATA, player});
export const onSetPlayerStatus = (player) => ({type: types.SET_PLAYER_STATUS, player});
export const onSetPlayerScore = (player) => ({type: types.SET_PLAYER_SCORE, player});
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
                            playerId: playerId,
                            status: 1   
                        };
                })
                .catch( error => {

                    return { 
                        playerId: playerId,
                        status: 0   
                    };
                    
                    // if(error.response.status === 404) {
                    //     return { [playerId]: 0 };
                    // }      
                });
    };
};

/** HELPERS START */
const player1 = playerConst.PLAYER_ONE.playerId; 
const player2 = playerConst.PLAYER_TWO.playerId; 
const initialState = {};
initialState[player1]= {
    card: {},
    score: 0,
    status: 0
};
initialState[player2] = {
    card: {},
    score: 0,
    status: 0
};
/** HELPERS END */

/** REDUCER START */
export const player = (state = initialState, action = {}) => {

    let player = null;

    switch (action.type) {
        case types.SET_CARD_DATA:
      
            player = Object.assign({}, { ...state[action.player.playerId] }, { card: action.player.card} );
            return { ...state, [action.player.playerId]: {...player} };

        case types.SET_PLAYER_STATUS:

            player = Object.assign({}, { ...state[action.player.playerId] }, { status: action.player.status} );
            return { ...state, [action.player.playerId]: {...player} };

        // case types.SET_PLAYER_SCORE:
            // console.log('SET_PLAYER_SCORE',action.player.playerId);
            // player = Object.assign({}, { ...state[action.player.playerId] }, { score: action.player.score} );
            // return { ...state, [action.playerStatus.playerId]: {...player} };

        default:
            return state || {};
    }
};
/** REDUCER END */