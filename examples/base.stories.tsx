import { createSlice } from '@reduxjs/toolkit';
import {createSliceManager} from '../src';

export type State = {counter: number, short: boolean}

export const simpleSlice = createSlice({
  name: 'slice',
  initialState: {
    value: '',
  },
  reducers: {
    setCustomValue: (state, action) => {
      state.value = action.payload;
    }
  }
})

export const manager = createSliceManager<State>({
  name: 'manager', 
  initialState: {
      counter: 1,
      short: false
  },
  watchers: [
    {
      handler: (state) => (dispatch, getState) => {
          // After changing the property short - counter increases by 10
          dispatch(manager.actions.changeCounter(state.counter + 10));
      },
      fields: ['short']
    },
    {
      handler: (state) => (dispatch, getState) => {
        // any action
        // Be careful not to allow circular dependencies
        // Do not change "short" here, because a cycle will appear
        
        // __DEV__ //
        console.log('request api', state)
        ////////////
      },
      isSubscriber: true,
      fields: ['counter', 'short']
    },
  ],
})

export type NestedState = {
  counter: number,
  short: boolean,
  modal: {
      create: {
          open: boolean
      }
  }
}

export const nestedManager = createSliceManager<NestedState>({
  name: 'nestedManager', 
  initialState: {
      counter: 1,
      short: false,
      modal: {
          create: {
              open: false
          }
      }
  },
})