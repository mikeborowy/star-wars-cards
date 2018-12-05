//React
import React from 'react';
import PropTypes from 'prop-types';
//MDL
import Button from '@material-ui/core/Button';

const propTypes = {
    resources: PropTypes.string.isRequired,
    switchResourcesHandler: PropTypes.func.isRequired
};
  
const defaultProps = {
    resources: '',
    switchResourcesHandler: () => {}
};

export const PlayerResBtn = (props) => {

    const {
        resources,
        switchResourcesHandler
    } = props;

    return(
        <React.Fragment> 
                <Button onClick={switchResourcesHandler}>Resources: {resources}</Button>
        </React.Fragment>
    );
};