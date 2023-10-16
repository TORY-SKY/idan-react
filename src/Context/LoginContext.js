import {createContext, useContext, useReduce} from 'react'

const CounterContext = createContext();
export function useCounter(){
   return useContext(CounterContext);
}
export function CounterProvider({children}){
    const InitialState = {count: 0};
}