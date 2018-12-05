/** APP START */
//React
import React from 'react';
import PropTypes from 'prop-types';
import {resourcesTypesConst} from '../../constants/index';
import {gfx} from '../../assets/images/gfx';
/** APP END */

/** 3RD PARTY START */
//MDL
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Card } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
/** 3RD PARTY END */

const propTypes = {
    playerName: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired
};
  
const defaultProps = {
    playerName: '',
    score: 0
};

export const PlayerCard = (props) => {
    const { classes, resources, card } = props;
    return(
        <Card className={classes.card}> 
            <CardMedia
                component="img"
                alt="Star Wars"
                className={classes.media}
                height="140"
                image={gfx.logo}
                title="Contemplative Reptile"
                />
            <CardContent>
                <Typography className={classes.title} color="textSecondary">
                    {resourcesTypesConst.PEOPLE === resources ? `Card of ${props.playerName}` : null }
                </Typography>
                <Typography variant="headline" component="h2">
                    {resourcesTypesConst.PEOPLE === resources ? `Name: ${props.card.name}` : null} 
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {resourcesTypesConst.PEOPLE === resources ? `Birth Year: ${props.card.birth_year}` : null}
                    <br/>
                    {resourcesTypesConst.PEOPLE === resources ? `Mass: ${props.card.mass}` : null} 
                    <br/>   
                    {resourcesTypesConst.PEOPLE === resources ? `Height: ${props.card.height}` : null} 
                    <br/>   
                    {resourcesTypesConst.PEOPLE === resources ? `Gender: ${props.card.gender}` : null}
                </Typography>
            </CardContent>
        </Card>
    );
};

PlayerCard.propTypes = propTypes;
PlayerCard.defaultProps = defaultProps;