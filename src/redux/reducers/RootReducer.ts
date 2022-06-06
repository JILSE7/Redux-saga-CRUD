import {combineReducers} from 'redux';
import { UserReduce } from './UserReducer';

const rootReducer = combineReducers({
    data: UserReduce
})


export default rootReducer;