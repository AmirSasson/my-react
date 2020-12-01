import { Action } from "redux";
import { IStock } from "../models";
import { FinanceService } from "./finance.service";

export enum StockAction {
    Add = "AddAction",
    Delete = "DeleteAction",
    FetchSuccess = "FetchSuccessAction",
    Fetching = "FetchingAction",
}

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
