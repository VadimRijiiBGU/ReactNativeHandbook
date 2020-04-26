import { combineReducers } from 'redux';

import { signReducer } from './signReducer';
import { componentReducer } from "./componentReducer";

export default combineReducers({
    sign: signReducer,
    components: componentReducer
})
