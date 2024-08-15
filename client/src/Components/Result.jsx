import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/result.css';
import ResultTable from './ResultTable';
import { useDispatch, useSelector } from 'react-redux';
import { resetAllAction } from '../redux/question_reducer';
import { resetResultAction } from '../redux/resultReducer';
import { attempts_number, earnPoints_Number } from '../helpers/helper';
import { flagResult } from '../helpers/helper';
const Result = () => {
  const dispatch = useDispatch();
  const { questions: { queue, answers }, result: { result, userId } } = useSelector(state => state);

  useEffect(() => {
    console.log(flag);
  }, [result]); // Ensure this useEffect runs only when result changes

  const totalPoints = queue.length *10;
  const attempt = attempts_number(result);
  const earnPoints = earnPoints_Number(result,answers,10)
  const flag = flagResult(totalPoints,earnPoints);
  function onRestart() {
    dispatch(resetAllAction());
    dispatch(resetResultAction());
  }

  return (
    <div className='relative top-10'>
      <div className='container'>
        <h1 className='text-4xl font-semibold text-white border-4 border-green-600 p-4 text-center w-2/4 relative bottom-8 left-60'>
          Quiz Application
        </h1>
        <div className='ml-40'>
          <div className='result flex-center'>
            <div className='flex'>
              <span>Username</span>
              <span className='bold'>Gautam Jain</span>
            </div>
            <div className='flex'>
              <span>Total Quiz Points :</span>
              <span className='bold'>{totalPoints}</span>
            </div>
            <div className='flex'>
              <span>Total Questions :</span>
              <span className='bold'>{queue.length}</span>
            </div>
            <div className='flex'>
              <span>Total Attempts :</span>
              <span className='bold'>{attempt}</span>
            </div>
            <div className='flex'>
              <span>Total Earn Points :</span>
              <span className='bold'>{earnPoints}</span>
            </div>
            <div className='flex'>
              <span>Quiz Result</span>
              <span style = {{color : `${flag ? "#2aff95" : "#ff2a66"}`}} className='bold'>{flag ? "Passed" : "Failed"}</span>
            </div>
          </div>
          <div>
            <Link to='/'>
              <button className='ml-96 relative top-5 bg-yellow-300 p-2 w-36 hover:opacity-90 rounded' onClick={onRestart}>
                <p className='text-black'>Restart</p>
              </button>
            </Link>
          </div>
          <div className='relative top-10'>
            <div className='container'>
              <ResultTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;
