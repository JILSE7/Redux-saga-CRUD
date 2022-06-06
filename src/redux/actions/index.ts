import { IForm } from '../../pages/User';
import { LOAD_USER_START, LOAD_USER_SUCCESS, LOAD_USERS_ERROR, CREATE_USER_START, CREATE_USER_SUCCESS, CREATE_USER_ERROR, DELETE_USER_START, DELETE_USER_SUCCESS, DELETE_USER_ERROR, UPDATE_USER_START, UPDATE_USER_ERROR, UPDATE_USER_SUCCESS } from '../Interfaces/ActionsTypes';
import { IUser } from '../Interfaces/Users';


export const loadUserStart = ():LOAD_USER_START => ({
    type: 'LOAD_USERS_START'
});

export const loadUsersSuccess = (users: IUser[]):LOAD_USER_SUCCESS => ({
    type: 'LOAD_USERS_SUCCESS',
    payload: users
});

export const loadUsersError = (error:unknown):LOAD_USERS_ERROR => ({
    type: 'LOAD_USERS_ERROR',
    payload: error
});

export const createUserStart = (newUser:IForm):CREATE_USER_START => ({
    type: 'CREATE_USER_START',
    payload: newUser
});

export const createUserSuccess = ():CREATE_USER_SUCCESS => ({
    type: 'CREATE_USER_SUCCESS'
    
});

export const createUserError = (error:string):CREATE_USER_ERROR => ({
    type: 'CREATE_USER_ERROR',
    payload: error
});

export const updateUserStart = (id: number, upUser: IForm):UPDATE_USER_START => ({
    type: 'UPDATE_USER_START',
    payload: {id, upUser}
});

export const updateUserSuccess = ():UPDATE_USER_SUCCESS => ({
    type: 'UPDATE_USERS_SUCCESS'
});

export const updateUserError = (error:unknown):UPDATE_USER_ERROR => ({
    type: 'UPDATE_USERS_ERROR',
    payload: error
})

export const deleteUserStart = (id: number):DELETE_USER_START => ({
    type: 'DELETE_USER_START',
    payload: id
});

export const deleteUserSuccess = ():DELETE_USER_SUCCESS => ({
    type: 'DELETE_USERS_SUCCESS'
});

export const deleteUserError = (error:unknown):DELETE_USER_ERROR => ({
    type: 'DELETE_USERS_ERROR',
    payload: error
})