import React, { useEffect, useState } from 'react';
import '../App.css';
import data from '../Database/data';
import { useFetchQuestion } from '../hooks/FetchQuestion';
import { useDispatch, useSelector } from 'react-redux';
import { updateResultAction } from '../redux/resultReducer';
  import { updateResult } from '../hooks/SetResult';
const Question = ( {onChecked}) => {
  const [check, setCheck] = useState(undefined);
  const [{ isLoading, apiData, serverError }] = useFetchQuestion();
  const result = useSelector(state =>state.result.result );
  const {trace} = useSelector(state => state.questions);
  const dispatch = useDispatch();

  const questions = useSelector(state => state.questions.queue[state.questions.trace]);

  // useEffect(() => {
    
  //   console.log(questions); 
  // },);

  useEffect(() => {
    console.log({trace,check})
    dispatch(updateResult({trace,check}));
  },[check]);

  function onSelect (i) {
    // console.log(i);
    onChecked(i);
    setCheck(i);
    dispatch(updateResult({trace,check}));
  };

  if (isLoading) {
    return <h2 className='text-light'>Loading...</h2>;
  }
  if (serverError) {
    return <h2 className='text-light'>{serverError || 'Unknown Error'}</h2>;
  }

  return (
    <div>
      <h2 className='text-2xl text-white relative bottom-4'>{questions?.question}</h2>
      <ul key={questions?.id}>
        {
          questions?.options.map((q, i) => (
            <li key={i}>
              <input
                type='radio'
                value={true}
                name='options'
                id={`q${i}-option`}
                onChange={ () =>onSelect(i)} 
              />
              <label htmlFor={`q${i}-option`} className='relative bottom-2'>
                {q}
              </label>
              <div className= {`check ${result[trace] == i ? 'checked' : ''}`}></div>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default Question;
