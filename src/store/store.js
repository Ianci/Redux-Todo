import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist';
import { authReducer } from "../reducer/authReducer";
import storage from 'redux-persist/lib/storage'
import { todosReducer } from '../reducer/todoReducer'


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['auth', 'todos']
}

const rootReducer = combineReducers({
  auth: authReducer,
  todos: todosReducer  
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, composeEnhancer(applyMiddleware(thunk)));

export const persistor = persistStore(store)