import {combineReducers} from 'redux'
import {createSlice} from '@reduxjs/toolkit'

const initialState = {}

const mainSlice = createSlice({
  name: 'mainSlice',
  initialState,
  reducers: {},
})

const rootReducer = combineReducers({
  mainSlice: mainSlice.reducer,
})

export default rootReducer
