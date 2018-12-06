export const resourcesTypesConst = {
    PEOPLE: 'people',
    STARSHIPS: 'starships'
};

export const playerConst = {
    PLAYER_ONE: {
        playerName: 'P1',
        playerId: 'player_one'
    },
    PLAYER_TWO: {
        playerName: 'P2',
        playerId: 'player_two'
    },
};

const player1 = playerConst.PLAYER_ONE.playerId; 
const player2 = playerConst.PLAYER_TWO.playerId; 

export const initialState = {
    player: {
        [player1]: {
            card: {
                birth_year: '',
                crew: '',
                gender: '',
                height: '',
                hyperdrive_rating: '',
                mass: '',
                model: '',
                name: '',
                length: ''
            },
            score: 0,
            status: -1
        },
        [player2]: {
            card: {
                birth_year: '',
                crew: '',
                gender: '',
                height: '',
                hyperdrive_rating: '',
                mass: '',
                model: '',
                name: '',
                length: ''
            },
            score: 0,
            status: -1
        }
    }
};
   