import React, { useRef } from 'react'
import {Link} from 'react-router-dom';
import { setUserId } from '../redux/resultReducer';
import { useDispatch } from 'react-redux';
const Home = () => {
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  function startQuiz (){
    if(inputRef.current?.value){
      dispatch(setUserId(inputRef.current?.value));
    }
  }
  return (
    <div className='flex flex-col ml-96 gap-2 relative top-28 '>

    <h1 className='text-4xl font-semibold text-white border-solid border-4 border-green-600  p-5 w-2/4 relative bottom-10'>
      Quiz Aplication</h1>
      <p className='text-white'>1. You will be asked 10 questions one after another.</p>
      <p className='text-white'>2. 10 points is awarded for correct answer  </p>
      <p className='text-white'>3. Each question has three options You can choose only one options</p>
      <p className='text-white'>4. You can review and change answers before the quiz finish</p>
      <p className='text-white'>5. The result will be declared at the end of the quiz</p>
      <div className='flex flex-col gap-5 mt-5 ml-24 '>
      <form id = "form">
        <input ref={inputRef} type = 'text' placeholder='username*' className=' w-80 relative right-16 p-1'/>
      </form>

      <Link to = '/quiz'>
      <button className=' ml-12 bg-yellow-300  p-2 w-28 hover:opacity-90 rounded' onClick={startQuiz}> <p className='text-black'>Start Quiz</p></button>
      </Link>
      </div>

     </div>
  )
}

export default Home; 