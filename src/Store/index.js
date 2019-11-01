import { createStore, applyMiddleware } from "redux";
import Rootreducer from '../Reducers/Rootreducer';
import thunk from "redux-thunk";


console.log("11");

const store = createStore(Rootreducer, applyMiddleware(thunk));

export default store;