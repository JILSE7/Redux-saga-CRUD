import { legacy_createStore, compose, applyMiddleware, Middleware, Dispatch, AnyAction } from "redux";
import createSagaMiddleware from 'redux-saga';
import {logger} from 'redux-logger';
import rootReducer from '../reducers/RootReducer';
import { rootSaga } from "./userSagas";

declare global {
    interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
  }

  
  const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const sagaMiddleware = createSagaMiddleware();

//const middlewares = [sagaMiddleware];

//process.env.NODE_ENV === "development" && middlewares.push(logger);

export const store = legacy_createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(sagaMiddleware)
    )
)


export default store;
sagaMiddleware.run(rootSaga);