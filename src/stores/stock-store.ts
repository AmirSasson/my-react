import { ReactReduxContext } from "react-redux";
import { Action, createStore, Store } from "redux";
import { IStock } from "../models";
import { uuidv4 } from "../utils";

export enum StockAction {
    Add,
}

const INITIAL_STATE: { stocks: IStock[] } = {
    stocks: [
        { name: "Stock 111", val: 1.2, id: uuidv4() },
        { name: "Stock 222", val: 1.3, id: uuidv4() },
        { name: "Stock 333", val: 1.4, id: uuidv4() },
    ],
};

export interface IStockAddAction extends Action<StockAction> {
    data: IStock;
}

export const stockStore: Store<{ stocks: IStock[] }, IStockAddAction> = createStore<{ stocks: IStock[] }, IStockAddAction, any, any>(
    (state, action) => {
        if (action.type === StockAction.Add) {
            return { stocks: [...(state?.stocks || []), action.data] };
        }
        return INITIAL_STATE;
    },
    INITIAL_STATE,
);
