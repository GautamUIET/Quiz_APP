import {configureStore,combineReducers} from '@reduxjs/toolkit';
import  questionReducer  from './question_reducer';
import  resultReducer  from './resultReducer';

const rootReducer = combineReducers({
    questions: questionReducer,
    result: resultReducer
})


export default configureStore({reducer:rootReducer})