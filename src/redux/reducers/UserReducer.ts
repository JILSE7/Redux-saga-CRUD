import { UsersState } from "../Interfaces/Users";
import { TActions } from '../Interfaces/ActionsTypes';

const INITIAL_STATE = {
    users: [],
    loading: false,
    error: undefined 
}



export const UserReduce = (state:UsersState = INITIAL_STATE, action:TActions) => {
    switch (action.type) {
        case 'LOAD_USERS_START'     :
        case 'CREATE_USER_START'    :
            return {
                ...state,
                loading:true
            };
        case 'DELETE_USER_START'    :
            return{
                ...state,
                loading: true,
                users: state.users.filter(user => user.id !== action.payload)
            }
        case 'LOAD_USERS_SUCCESS'   :
            return {
                ...state,
                users: action.payload,
                loading:false
            };

        case 'CREATE_USER_SUCCESS'  : 
        case 'DELETE_USERS_SUCCESS' :
            return {
                ...state,
                loading: false
            }

        case 'LOAD_USERS_ERROR'     :
        case 'CREATE_USER_ERROR'    :
        case 'DELETE_USERS_ERROR'   :
        return {
            ...state,
            users: undefined,
            error: action.payload,
            loading: false
            
        };
        default:
            return state;
    }
}