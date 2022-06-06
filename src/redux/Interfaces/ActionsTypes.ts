import { TakeableChannel } from 'redux-saga';
import { IForm } from '../../pages/User';
import { IUser } from './Users';



export type LOAD_USER_START     = {type: 'LOAD_USERS_START'};
export type LOAD_USER_SUCCESS   = {type: 'LOAD_USERS_SUCCESS', payload: IUser[]};
export type LOAD_USERS_ERROR    = {type: 'LOAD_USERS_ERROR', payload: unknown};

export type CREATE_USER_START   = {type: 'CREATE_USER_START', payload: IForm};
export type CREATE_USER_SUCCESS = {type: 'CREATE_USER_SUCCESS'};
export type CREATE_USER_ERROR   = {type: 'CREATE_USER_ERROR', payload: string};

export type DELETE_USER_START   = {type: 'DELETE_USER_START', payload: number} ;
export type DELETE_USER_SUCCESS = {type: 'DELETE_USERS_SUCCESS'};
export type DELETE_USER_ERROR   = {type: 'DELETE_USERS_ERROR', payload: unknown};

export type UPDATE_USER_START   = {type: 'UPDATE_USER_START', payload: {id: number, upUser:IForm}} ;
export type UPDATE_USER_SUCCESS = {type: 'UPDATE_USERS_SUCCESS'};
export type UPDATE_USER_ERROR   = {type: 'UPDATE_USERS_ERROR', payload: unknown};

export type TActions = 
                        | LOAD_USER_START 
                        | LOAD_USER_SUCCESS 
                        | LOAD_USERS_ERROR
                        | CREATE_USER_START
                        | CREATE_USER_SUCCESS
                        | CREATE_USER_ERROR
                        | DELETE_USER_START
                        | DELETE_USER_SUCCESS
                        | DELETE_USER_ERROR
                        | UPDATE_USER_START
                        | UPDATE_USER_SUCCESS
                        | UPDATE_USER_ERROR