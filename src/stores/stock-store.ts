import { ReactReduxContext } from "react-redux";
import { Action, applyMiddleware, createStore, Store } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { IStock } from "../models";
import { FinanceService } from "./finance.service";

export enum StockAction {
    Add = "AddAction",
    Delete = "DeleteAction",
    FetchSuccess = "FetchSuccessAction",
    Fetching = "FetchingAction",
}

const INITIAL_STATE: { stocks: IStock[] } = {
    stocks: [],
};

export interface IStockAction extends Action<StockAction> {
    type: StockAction;
    data: IStock;
}

export class StockActions {
    public static addStock(stock: IStock) {
        return { data: stock, type: StockAction.Add };
    }
    public static fetchStock(stockSymbol: string): any {
        return async (dispatch: (action: any) => Promise<IStockAction>) => {
            dispatch({ type: StockAction.Fetching, stock: null });
            const stock = await new FinanceService().getStockBySymbol(stockSymbol);
            dispatch(StockActions.addStock(stock));
        };
    }
    public static deleteStock(stock: IStock) {
        return { data: stock, type: StockAction.Delete };
    }
}

export const stockStore: Store<{ stocks: IStock[] }, Action<StockAction | ((action: any) => Promise<IStockAction>)>> = createStore<{ stocks: IStock[] }, Action<StockAction>, any, any>(
    (state, action) => {
        if (action.type === StockAction.FetchSuccess) {
            return { stocks: [...(state?.stocks || []), (action as IStockAction).data] };
        }
        if (action.type === StockAction.Add) {
            return { stocks: [...(state?.stocks || []), (action as IStockAction).data] };
        } else if (action.type === StockAction.Delete) {
            return { stocks: (state?.stocks || []).filter((s) => s.symbol !== (action as IStockAction).data.symbol) };
        }
        return state || INITIAL_STATE;
    }, INITIAL_STATE, applyMiddleware(thunk, logger),
);
