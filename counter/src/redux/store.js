import{createStore} from 'redux';
import { counterReducer } from './counter/counterReducer';

export const store =createStore(counterReducer);