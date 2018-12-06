/** APP START */
//React
import React from 'react';
import PropTypes from 'prop-types';
import {resourcesTypesConst} from '../../constants/index';
import {gfx} from '../../assets/images/gfx';
import Preloader from '../preloader/Preloader';
/** APP END */

/** 3RD PARTY START */
//MDL
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Card } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
/** 3RD PARTY END */

const propTypes = {
    card: PropTypes.shape({
        birth_year: PropTypes.string,
        crew: PropTypes.string,
        gender: PropTypes.string,
        height: PropTypes.string,
        hyperdrive_rating: PropTypes.string,
        mass: PropTypes.string,
        model: PropTypes.string,
        name: PropTypes.string,
        length: PropTypes.string
    }).isRequired,
    classes: PropTypes.object,
    playerName: PropTypes.string.isRequired,
    resources: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    status: PropTypes.number.isRequired
};
  
const defaultProps = {
    card: {},
    classes: {},
    playerName: '',
    resources: '',
    score: 0,
    status: 0
};

export const PlayerCard = (props) => {  
    const { classes, resources} = props;
    return(
        <Card className={classes.card}> 
            {props.status === 0
            ?   <Grid container className={classes.root} spacing={16} justify="center">
                    <Grid item>
                        <Preloader/>
                    </Grid>
                </Grid>           
            : <React.Fragment>
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
                {resourcesTypesConst.PEOPLE === resources 
                    ? `Card of ${props.playerName}` : null 
                }
            </Typography>
            <Typography variant="headline" component="h2">
                {`Name: ${props.card.name}`} 
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
                {resourcesTypesConst.PEOPLE === resources
                     ? `Birth Year: ${props.card.birth_year}` : `Hyperdrive Rating: ${props.card.hyperdrive_rating}`}
                <br/>
                {resourcesTypesConst.PEOPLE === resources
                     ? `Mass: ${props.card.mass}` : `Crew: ${props.card.crew}` 
                     } 
                <br/>   
                {resourcesTypesConst.PEOPLE === resources
                     ? `Height: ${props.card.height}` : `Length: ${props.card.length}`
                     } 
                <br/>   
                {resourcesTypesConst.PEOPLE === resources 
                    ? `Gender: ${props.card.gender}` : `Model: ${props.card.model}`
                    }
            </Typography>
        </CardContent>     
            </React.Fragment>
            }
        </Card>
    );
};

PlayerCard.propTypes = propTypes;
PlayerCard.defaultProps = defaultProps;