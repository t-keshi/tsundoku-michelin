/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useContext, createElement, useReducer } from 'react';

type UseReducerContextReturnType<R extends React.Reducer<any, any>> = () => [
  React.ReducerState<R>,
  React.Dispatch<React.ReducerAction<R>>,
];
type ReducerProviderReturnType<R extends React.Reducer<any, any>> = React.FC<{
  initialState?: React.ReducerState<R>;
  children: React.ReactNode;
}>;
type ContextReturnType<R extends React.Reducer<any, any>> = React.Context<
  [React.ReducerState<R>, React.Dispatch<React.ReducerAction<R>>] | undefined
>;

export const createReducerContext = <R extends React.Reducer<any, any>>(
  reducer: R,
  defaultInitialState: React.ReducerState<R>,
): Readonly<
  [UseReducerContextReturnType<R>, ReducerProviderReturnType<R>, ContextReturnType<R>]
> => {
  const context = createContext<
    [React.ReducerState<R>, React.Dispatch<React.ReducerAction<R>>] | undefined
  >(undefined);
  const providerFactory = (
    props: {
      value: [React.ReducerState<R>, React.Dispatch<React.ReducerAction<R>>];
    },
    children: React.ReactNode,
  ) => createElement(context.Provider, props, children);
  const ReducerProvider: React.FC<{
    initialState?: React.ReducerState<R>;
    children: React.ReactNode;
  }> = ({ children, initialState }) => {
    const state = useReducer<R>(
      reducer,
      initialState !== undefined ? initialState : defaultInitialState,
    );

    return providerFactory({ value: state }, children);
  };
  const useReducerContext = () => {
    const state = useContext(context);
    if (state == null) {
      throw new Error('useReducerContext must be used inside a ReducerProvider');
    }

    return state;
  };

  return [useReducerContext, ReducerProvider, context] as const;
};
