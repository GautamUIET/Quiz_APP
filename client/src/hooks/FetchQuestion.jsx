import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import data ,{answers} from "../Database/data";

import {moveNextAction, movePrevAction, startExamAction} from '../redux/question_reducer'


export const useFetchQuestion = () => {
    const dispatch = useDispatch();   
    const [getData, setGetData] = useState({ isLoading : false, apiData : [], serverError: null});
    
    useEffect(()=>{
        setGetData( prev => ({...prev , isLoading : true}));
      (  async()=>{ 
      try{
        let question = await data;
        if(question.length > 0 ){
            setGetData( prev => ({...prev , isLoading : false}));
                setGetData(prev => ({...prev , apiData: {question ,answers}}));

            dispatch(startExamAction({question,answers}));

        }
        else{
            throw new Error("No data ");
        }
    }
    
    catch(error)
    {
         setGetData(prev => ({...prev , isLoading : false}));
         setGetData(prev => ({...prev, serverError : error}));


    }
}
)();
},[dispatch])

    return [getData, setGetData];
}


export const MoveNextQuestion = () => async (dispatch) =>{
    try{
       dispatch(moveNextAction());
    }

    catch(error){
        console.log(error);
    }
}


export const MovePrevQuestion = () => async (dispatch) =>{
    try{
       dispatch(movePrevAction());
    }

    catch(error){
        console.log(error);
    }
}


