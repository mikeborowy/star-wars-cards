/** APP START */
//React
import React from 'react';
import PropTypes from 'prop-types';
//Constants
import {playerConst} from '../../constants/index';
//Redux
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
//Components
import PlayerMenu from '../playerMenu/PlayerMenu';
import {PlayerCard} from '../playerCard/PlayerCard';
/** APP END */

/** 3RD PARTY START */
import _ from 'lodash';
//MDL
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import {mdlStyles} from '../common/mdlSyles';
/** 3RD PARTY END */

const propTypes = {
  classes: PropTypes.object.isRequired,
  preloader: PropTypes.object,
  loaders: PropTypes.number
};

const defaultProps = {
  classes: {},
  preloader: {},
  loaders: 0
};

class _Stage extends React.PureComponent{

  constructor(props) {
    super(props);
  }

  renderPlayer1() {
    return (
      <React.Fragment>
          <PlayerCard classes={this.props.classes} 
                      resources = {this.props.resources}
                      {...playerConst.PLAYER_ONE} 
                      {...this.props.player[playerConst.PLAYER_ONE.playerId]}/>
      </React.Fragment>
    );
  }

  renderPlayer2() {
    return (
      <React.Fragment>
          <PlayerCard classes={this.props.classes} 
                      resources = {this.props.resources}
                      {...playerConst.PLAYER_TWO} 
                      {...this.props.player[playerConst.PLAYER_TWO.playerId]}/>
      </React.Fragment>
    );
  }
  
  render() {
    const {
      classes,
      classes:{
        layout,
        paper
      }
    } = this.props;

    return(
        <main className={layout}>
          <Paper className={paper}>
            <Grid container spacing={24} justify="center">
                <PlayerMenu {...classes}/>
                <Grid item xs={6} container justify="center">
                  {this.renderPlayer1()}
                </Grid>
                <Grid item xs={6} container justify="center">
                  {this.renderPlayer2()} 
              </Grid>
            </Grid>
          </Paper>
        </main>
    );
  }
} 

_Stage.propTypes = propTypes;
_Stage.defaultProps = defaultProps;

const Stage = withStyles(mdlStyles)(_Stage);

function mapStateToProps(state) {
  return {
    player: state.player,
    resources: state.resources
  };
}

export default ReactRedux.connect(
  mapStateToProps
)(Stage);