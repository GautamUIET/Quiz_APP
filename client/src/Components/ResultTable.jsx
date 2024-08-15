import React from 'react';
import { earnPoints_Number, flagResult } from '../helpers/helper';
import { attempts_number } from '../helpers/helper';
import { useSelector } from 'react-redux';

export default function ResultTable() {
  const { questions: { queue, answers }, result: { result, userId } } = useSelector(state => state);
  
  const totalPoints = queue.length * 10;
  const attempt = attempts_number(result);
  const earnPoints = earnPoints_Number(result, answers, 10);
  const flag = flagResult(totalPoints, earnPoints);

  return (
    <div>
      <table>
        <thead className='table-header'>
          <tr className='table-row'>
            <td>Name</td>
            <td>Attempts</td>
            <td>Earn Points</td>
            <td>Result</td>
          </tr>
        </thead>
        <tbody>
          <tr className='table-body'>
            <td>{userId}</td> {/* Displaying the username */}
            <td>{attempt}</td>
            <td>{earnPoints}</td>
            <td>{flag ? "Pass" : "Fail"}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
