import user from './user';
import admins from './admins';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    user,
    admins
});

export default rootReducer;

