import usersApi, { deleteUser, getUsers } from '../../api';
import { LOAD_USER_SUCCESS, LOAD_USER_START, LOAD_USERS_ERROR, CREATE_USER_SUCCESS, CREATE_USER_ERROR, CREATE_USER_START, DELETE_USER_START, DELETE_USER_SUCCESS, DELETE_USER_ERROR, UPDATE_USER_START, UPDATE_USER_ERROR } from '../Interfaces/ActionsTypes';
import {
    all,
    call,
    delay,
    fork,
    put,
    take, 
    takeEvery, 
    takeLatest,
} from 'redux-saga/effects';
import { IUser } from '../Interfaces/Users';
import { AxiosResponse } from 'axios';
import { loadUsersSuccess, loadUsersError, createUserSuccess, createUserError, deleteUserSuccess, deleteUserError, updateUserStart, loadUserStart, updateUserError } from '../actions/index';
import { createUser, updateUser } from '../../api/index';



function* onLoadUsersStartAsync(){
    try {
        const response: AxiosResponse<IUser[]> = yield call(getUsers)
        console.log(response);
        if(response.status === 200){
            yield delay(1000)
            yield put<LOAD_USER_SUCCESS>(loadUsersSuccess(response.data));
        }
        
    } catch (error) {
        yield put<LOAD_USERS_ERROR>(loadUsersError(error))
    }
}



function* onCreateUserStartAsync({payload}:CREATE_USER_START){
    try {
        const response:AxiosResponse =  yield call(createUser,payload);

        if(response.status === 200){
            yield delay(1000)
            yield put<CREATE_USER_SUCCESS>(createUserSuccess());
        }
    } catch (error) {
        yield put<CREATE_USER_ERROR>(createUserError('ha ocurrido un error al intentar crear a un usuario'))
    }
}


function* onDeleteUserStartAsync({payload}:DELETE_USER_START){
    try {
        const response:AxiosResponse = yield call(deleteUser, payload);

        if(response.status === 200){
            yield delay(1000)
            yield put<DELETE_USER_SUCCESS>(deleteUserSuccess());
        }
    } catch (error) {
        yield put<DELETE_USER_ERROR>(deleteUserError(error));
    }
}

function* onUpdateUserStartAsync({payload}:UPDATE_USER_START){
    try {
        const response:AxiosResponse = yield updateUser(payload.id, payload.upUser);

        if(response.status === 200){
            yield delay(1000)
            yield put<DELETE_USER_SUCCESS>(deleteUserSuccess());
            yield put<LOAD_USER_START>(loadUserStart());
        }
    } catch (error) {
        yield put<UPDATE_USER_ERROR>(updateUserError(error));
    }
}

export function* rootSaga(){
    
    yield takeEvery('LOAD_USERS_START', onLoadUsersStartAsync);
    yield takeEvery('CREATE_USER_START', onCreateUserStartAsync);
    yield takeEvery('DELETE_USER_START', onDeleteUserStartAsync);
    yield takeEvery('UPDATE_USER_START', onUpdateUserStartAsync);
}

