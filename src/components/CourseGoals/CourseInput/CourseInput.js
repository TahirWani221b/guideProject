import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [correctSubmission, setCorrectSubmission] = useState(true);
  const [valueEntered, setValueEntered] = useState(false);

  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);
    if (event.target.value.length) setValueEntered(true);
    else setValueEntered(false);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setCorrectSubmission(false);
      return;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue('');
    setValueEntered(false);
  };

  return (
    <form onSubmit={formSubmitHandler} className={`${!valueEntered && 'invalid'}`}>
      <div className={`form-control ${!correctSubmission && 'invalid'}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} value={enteredValue} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
