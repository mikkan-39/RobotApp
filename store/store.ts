import {configureStore} from '@reduxjs/toolkit'
import rootReducer from './reducers'
import {useDispatch} from 'react-redux'
import reactotron from '../ReactotronConfig'

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  enhancers: (getDefaultEnhancers) =>
    getDefaultEnhancers().concat([
      ...(__DEV__ ? [reactotron.createEnhancer()] : []),
    ]),
})

export type StoreType = typeof store
export type AppDispatch = StoreType['dispatch']
export type RootState = ReturnType<typeof store.getState>

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()

export default store
