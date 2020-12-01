import { ReactReduxContext } from "react-redux";
import { Action, createStore, Store } from "redux";
import { IStock } from "../models";
import { uuidv4 } from "../utils";
import { FinanceService } from "./finance.service";

export enum StockAction {
    Add,
    Delete,
}

const INITIAL_STATE: { stocks: IStock[] } = {
    stocks: [],
};

export interface IStockAction extends Action<StockAction> {
    type: StockAction;
    data: IStock;
}

export const stockStore: Store<{ stocks: IStock[] }, Action<StockAction>> = createStore<{ stocks: IStock[] }, Action<StockAction>, any, any>(
    (state, action) => {
        if (action.type === StockAction.Add) {
            return { stocks: [...(state?.stocks || []), (action as IStockAction).data] };
        } else if (action.type === StockAction.Delete) {
            return { stocks: (state?.stocks || []).filter((s) => s.id !== (action as IStockAction).data.id) };
        }
        return INITIAL_STATE;
    }, INITIAL_STATE,
);

// tslint:disable-next-line:no-unused-expression
new FinanceService();
