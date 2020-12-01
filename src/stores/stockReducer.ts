import { Action } from "redux";
import { IStock } from "../models";
import { IStockAction, StockAction } from "./Stock-actions";

export const INITIAL_STATE: { stocks: IStock[] } = {
    stocks: [],
};

export function stockReducer(state: { stocks: IStock[]; } = INITIAL_STATE, action: Action<StockAction>) {
    if (action.type === StockAction.FetchSuccess) {
        return { stocks: [...(state?.stocks || []), (action as IStockAction).data] };
    }
    if (action.type === StockAction.Add) {
        return { stocks: [...(state?.stocks || []), (action as IStockAction).data] };
    } else if (action.type === StockAction.Delete) {
        return { stocks: (state?.stocks || []).filter((s) => s.symbol !== (action as IStockAction).data.symbol) };
    }
    return state;
}
