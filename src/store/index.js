import { createStore , combineReducers , applyMiddleware } from "redux";
import { isValidName } from "./middleware";
import categoryReducer from './reducers/category'
import userReducer from './reducers/user'


//Giống như chia module trong vuex
const initialReducer = combineReducers({
    category: categoryReducer,
    user: userReducer
})

const store = createStore(initialReducer, applyMiddleware(isValidName));

export default store;
