/** APP START */
//React
import React from 'react';
import PropTypes from 'prop-types';
//Constants
import {playerConst} from '../../constants/index';
//Redux
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
//Store
import {
  onLoadingStart,
  onLoadingEnd
} from '../../reducers/preloader';
//Components
import Preloader from '../preloader/Preloader';
import PlayerMenu from '../playerMenu/PlayerMenu';
import {PlayerCard} from './PlayerCard';
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

class MainScreen extends React.PureComponent{

  constructor(props) {
    super(props);
  }

  renderPreloader() {
    return this.props.loaders > 0 
            ? <Preloader data={this.props.preloader}/>
            : null;
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

  renderMenu() {
    const props = {
      classes: this.props.classes
    };
    return <PlayerMenu {...props}/>;
  }

  render() {
    const {
      classes:{
        layout,
        paper,
        paperAtNight
      }
    } = this.props;

    const hours = new Date().getHours();
    const theme = hours > 6 && hours < 20 ? paper : paperAtNight;

    return(
        <main className={layout}>
          <Paper className={`${theme}`}>
            <Grid container spacing={24} justify="center">
                  {this.renderMenu()}
                <Grid item xs={5}>
                  {this.renderPlayer1()}
                </Grid>
                <Grid item xs={2}/>
                <Grid item xs={5}>
                  {this.renderPlayer2()} 
              </Grid>
            </Grid>
          </Paper>
        </main>
    );
  }
} 

MainScreen.propTypes = propTypes;
MainScreen.defaultProps = defaultProps;

const MainScreenWithMDL = withStyles(mdlStyles)(MainScreen);

function mapStateToProps(state) {
  return {
    loaders: state.preloader.loaders,
    player: state.player,
    resources: state.resources
  };
}

function mapDispatchToProps(dispatch) {
  return Redux.bindActionCreators({   
    onLoadingStart,
    onLoadingEnd
  }, dispatch);
}

export default ReactRedux.connect(
  mapStateToProps, 
  mapDispatchToProps
)(MainScreenWithMDL);