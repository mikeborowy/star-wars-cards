//React
import React from 'react';
import PropTypes from 'prop-types';
//MDL
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';

const propTypes = {
    margin: PropTypes.string,
    playerId: PropTypes.string.isRequired,
    playerName: PropTypes.string,
    playerScore: PropTypes.number,
    playerClick: PropTypes.func
};
  
const defaultProps = {
    margin: '',
    playerId: '',
    playerName: '',
    playerScore: 0,
    playerClick: () => {}
};

export const PlayerBtn = (props) => {
    const {
        margin,
        playerId,
        playerName,
        playerScore,
        playerClick,
    } = props;

    return(
        <Badge 
            className = {margin} 
            color = "primary" 
            badgeContent={playerScore}>
                <Button 
                    variant="contained" 
                    onClick={() => playerClick(playerId)}>
                    {`START ${playerName}`}
                </Button>
        </Badge>
    );   
};

PlayerBtn.propTypes = propTypes;
PlayerBtn.defaultProps = defaultProps;