import {resourcesTypesConst} from '../constants';

/** TYPES START */
export const types = {
    SWITCH_RESOURCES: 'SWITCH_RESOURCES',
};
/** TYPES END */

/** ACTIONS START */
export const onResourcesSwitch = (resources) => ({type: types.SWITCH_RESOURCES, resources});
/** ACTIONS END */

/** REDUCERS START */
export const resources = (state = resourcesTypesConst.PEOPLE, action = {}) => {
    switch (action.type) {
        case types.SWITCH_RESOURCES:
            return action.resources;
        default:
            return state;
    }
};
/** REDUCERS END */
