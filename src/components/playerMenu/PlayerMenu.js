//React
import React from 'react';
import PropTypes from 'prop-types';
//Constatns
import {resourcesTypesConst, playerConst} from '../../constants';
//Redux
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
//Store
import {onResourcesSwitch} from '../../reducers/resources';
import {onGetCardAjax, onSetPlayerStatus, onSetPlayerScore} from '../../reducers/player';
//MDL
import Grid from '@material-ui/core/Grid';
//Components
import {PlayerBtn} from './PlayerBtn';
import {PlayerResBtn} from './PlayerResBtn';


const playerOne = {...playerConst.PLAYER_ONE};
const playerTwo = {...playerConst.PLAYER_TWO};

const propTypes = {
    resources: PropTypes.string.isRequired,
    onResourcesSwitch: PropTypes.func.isRequired
};
  
const defaultProps = {
    resources: ''
};

class PlayerMenu extends React.Component {

    constructor(props){
        super(props);
        this.switchResourcesHandler = this.switchResourcesHandler.bind(this);
        this.playerBtnClick = this.playerBtnClick.bind(this);
    }

    generateRandom(min, max, exception = -1) {
        const num = Math.floor(Math.random() * (max - min + 1)) + min;
        return (num === exception ) ? this.generateRandom(min, max) : num;
    }

    switchResourcesHandler() {
        const resources = this.props.resources === resourcesTypesConst.PEOPLE 
                ? resourcesTypesConst.STARSHIPS 
                : resourcesTypesConst.PEOPLE;

        this.props.onResourcesSwitch(resources);
    }

    playerBtnClick(playerId) {

        const p1 = this.props.player[playerOne.playerId];
        const p2 = this.props.player[playerTwo.playerId];

        this.props
            .onSetPlayerStatus({playerId, status: 0});

        this.props
            .onGetCardAjax(playerId, this.props.resources, this.generateRandom(0, 9))
            .then( playerStatus => {

                // this.props
                //     .onSetPlayerStatus(playerStatus);
                
                if(this.props.resources === resourcesTypesConst.PEOPLE)
                {
                    const player = p1.card.mass > p2.card.mass 
                        ? {playerId, score: p1.score++}
                        : {playerId, score: p2.score++};

                    this.props.onSetPlayerScore(player);
                }
            
            });
    }

    render(){
        const playerResBtnProps = {
            resources: this.props.resources,
            switchResourcesHandler: this.switchResourcesHandler,
            margin: ''
        };

        const playerBtnCommonProps = {
            playerScore: 0,
            playerClick: this.playerBtnClick,
            margin: ''
        };

        return(
            <React.Fragment>
                 <Grid item xs={3} container justify="center">
                    <PlayerBtn  {...playerOne}
                                {...playerBtnCommonProps}/>
                </Grid>  
                <Grid item xs={6} container justify="center"> 
                    <PlayerResBtn {...playerResBtnProps}/>
                </Grid> 
                <Grid item xs={3} container justify="center"> 
                    <PlayerBtn  {...playerTwo}
                                {...playerBtnCommonProps}/>
                </Grid>  
            </React.Fragment>
        ); 
    }   
}

PlayerMenu.propTypes = propTypes;
PlayerMenu.defaultProps = defaultProps;

function mapStateToProps(state) {
  return {
    resources: state.resources,
    player: state.player
  };
}

function mapDispatchToProps(dispatch) {
  return Redux.bindActionCreators({  
    onResourcesSwitch,
    onGetCardAjax,
    onSetPlayerStatus,
    onSetPlayerScore
  }, dispatch);
}

export default ReactRedux.connect(
  mapStateToProps, 
  mapDispatchToProps
)(PlayerMenu);