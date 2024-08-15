import React, { useEffect, useState } from 'react';
import Question from './Question';
import {useDispatch, useSelector} from 'react-redux';
import { MoveNextQuestion, MovePrevQuestion } from '../hooks/FetchQuestion';
import { PushAnswer } from '../hooks/SetResult';
import {Navigate} from 'react-router-dom'
const Quiz = () => {
  const state = useSelector(state => state)
  const [check, setCheck] = useState(undefined);
  const {trace,queue} = useSelector(state => state.questions);
  const dispatch = useDispatch();
  const result = useSelector(state => state.result.result);
  
  const onPrev = () => {
    if(trace > 0){
      dispatch(MovePrevQuestion());
    }
      
  };
  const onChecked = (check) =>{
    console.log(check);
    setCheck(check);
  }
  const onNext = () => {
    if(trace < queue.length){
     dispatch(MoveNextQuestion());
      if(result.length <= trace){
        dispatch(PushAnswer(check));
      }
    }
    setCheck(undefined);
  };
  
  if(result.length && result.length >= queue.length){
    return <Navigate to='/result' replace = "true"></Navigate>
  }
  
  
  return (
    <div className='flex flex-col items-center justify-center relative top-9 gap-4'>
      <h1 className='text-4xl font-semibold text-white border-4 border-green-600 p-5 text-center w-2/4'>
        Quiz Application
      </h1>
      <div className = ' relative top-8'>
      <Question onChecked={onChecked} />
      </div>

      <div className='flex justify-between w-full max-w-lg relative top-14 px-8'>
        
        {trace > 0 ?
        <button 
          className='bg-yellow-300 px-4 py-2 w-20 rounded shadow-md hover:bg-yellow-400 transition-colors duration-200'
          onClick={onPrev}
        >
          Prev
        </button>: <div></div>}
        
        <button
          className='bg-green-400 px-4 py-2 w-20 rounded shadow-md hover:bg-green-500 transition-colors duration-200'
          onClick={onNext}
        >
          Next
        </button>

      
      </div>
    </div>
  );
};

export default Quiz;
