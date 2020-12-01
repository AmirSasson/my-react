import { Reducer } from "react";
import { ReactReduxContext } from "react-redux";
import { Action, applyMiddleware, CombinedState, combineReducers, createStore, Store } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { IStock } from "../models";
import { IStockAction, StockAction } from "./Stock-actions";
import { stockReducer } from "./stockReducer";

export const stockStore: Store<CombinedState<{ stocksActions: { stocks: IStock[]; }; }>, Action<StockAction>> & { dispatch: {}; } =
    createStore(combineReducers({ stocksActions: stockReducer }), undefined, applyMiddleware(thunk, logger));
