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
import {onGetCardAjax, onSetPlayerStatus, onSetPlayerScore, onResetPlayers} from '../../reducers/player';
//MDL
import Grid from '@material-ui/core/Grid';
//Components
import {PlayerBtn} from './PlayerBtn';
import { Button } from '@material-ui/core';
import _ from 'lodash';

/** HELPSERS START */
const playerOne = {...playerConst.PLAYER_ONE};
const playerTwo = {...playerConst.PLAYER_TWO};
/** HELPSERS END */

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
        this.playerBtnClick = _.debounce(this.playerBtnClick.bind(this), 1000);
        this.resetGameHandler = this.resetGameHandler.bind(this);
    } 

    generateRandom(min, max, exception = -1) {
        const num = Math.floor(Math.random() * (max - min + 1)) + min;
        return (num === exception ) ? this.generateRandom(min, max) : num;
    }
 
    scorePeople(player, onSetPlayerScore) {

        if(player[playerOne.playerId].card.mass *1 > player[playerTwo.playerId].card.mass *1 ) 
        {
            onSetPlayerScore(playerOne.playerId); 
        }   
        if(player[playerOne.playerId].card.mass * 1 < player[playerTwo.playerId].card.mass *1 ) 
        {
            onSetPlayerScore(playerTwo.playerId);
        }   
    }

    scoreStarships(player, onSetPlayerScore) {
        if(player[playerOne.playerId].card.crew *1 > player[playerTwo.playerId].card.crew *1 ) 
        {
            onSetPlayerScore(playerOne.playerId); 
        }   
        if(player[playerOne.playerId].card.crew * 1 < player[playerTwo.playerId].card.crew *1 ) 
        {
            onSetPlayerScore(playerTwo.playerId);
        }   
    }

    /** HANDLESRS START */
    resetGameHandler() {
        this.props.onResetPlayers();
    }

    switchResourcesHandler() {
        const resources = this.props.resources === resourcesTypesConst.PEOPLE 
                ? resourcesTypesConst.STARSHIPS 
                : resourcesTypesConst.PEOPLE;

        this.props.onResourcesSwitch(resources);
        this.props.onResetPlayers();
    }

    playerBtnClick(playerId) {
            this.props.onSetPlayerStatus({playerId, status: 0});
            this.props
                .onGetCardAjax(playerId, this.props.resources, this.generateRandom(0, 9))
                .then( playerStatus => {
                    this.props.onSetPlayerStatus(playerStatus);
                    this.props.resources === resourcesTypesConst.PEOPLE 
                        ? this.scorePeople.call(this, this.props.player,this.props.onSetPlayerScore)
                        : this.scoreStarships.call(this, this.props.player,this.props.onSetPlayerScore);          
                });
    }
    /** HANDLESRS END */

    render(){
        return(
            <React.Fragment>
                <Grid item xs={12} container justify="center">
                    <Grid item xs={3} container justify="center"> 
                        <Button variant = "contained" 
                                onClick={this.switchResourcesHandler}>Resources: {this.props.resources}</Button>
                    </Grid> 
                    <Grid item xs={3} container justify="center"> 
                        <Button variant = "contained" 
                                onClick={this.resetGameHandler}>Reset Game</Button>
                    </Grid> 
                </Grid>
                <Grid item xs={12} container justify="center">
                    <Grid item xs={4} container justify="center">
                        <PlayerBtn  playerScore={this.props.player[playerOne.playerId].score} 
                                    playerClick={this.playerBtnClick}
                                    {...playerOne}
                                    />
                    </Grid>  
                    <Grid item xs={2}/>
                    <Grid item xs={4} container justify="center"> 
                        <PlayerBtn  playerScore={this.props.player[playerTwo.playerId].score} 
                                    playerClick={this.playerBtnClick}
                                    {...playerTwo}
                                    />
                    </Grid> 
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
    onSetPlayerScore,
    onResetPlayers
  }, dispatch);
}

export default ReactRedux.connect(
  mapStateToProps, 
  mapDispatchToProps
)(PlayerMenu);