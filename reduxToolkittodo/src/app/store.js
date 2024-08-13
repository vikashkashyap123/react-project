import {configureStore} from '@reduxjs/toolkit';
import todoRuducer from '../features/todo/todoSlice';

export const store = configureStore({
    reducer: todoRuducer
})