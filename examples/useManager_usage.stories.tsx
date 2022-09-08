import React, { useEffect } from 'react';
import {manager, simpleSlice, State} from './base.stories';
import {useManager} from '../src/useManager';
import { useDispatch } from 'react-redux';

export const App = () => {
  const [{counter, short}, {changeCounter, changeShort}] = useManager<State>(manager)

  // __DEV__ //
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: 'randomAction'})
    dispatch(simpleSlice.actions.setCustomValue('init'))
  }, [])
  /////////////

  return (
      <div>
      <h1>{counter}</h1>
      <h1>{`${short}`}</h1>
      <button onClick={() => changeCounter(counter + 1)}>
        change name
      </button>
      <input type="checkbox" onChange={(e) => changeShort(e.target.checked)} />
    </div>
  )
}

export default {
  title: 'UseManager',
  component: App,
};