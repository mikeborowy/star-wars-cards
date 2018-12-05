import React from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import {initStore} from './configStore';

const propTypes = {
    children: PropTypes.object.isRequired,
    initialState: PropTypes.object.isRequired
};

const defaultProps = {
    children: {},
    initialState: {}
};

const Root = ({children, initialState}) => {
    return(
        <Provider store={initStore(initialState)}>
            {children}
        </Provider> 
    );
};

Root.propTypes = propTypes;
Root.defaultProps = defaultProps;

export default Root;