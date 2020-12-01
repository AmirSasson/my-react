
import yahooFinance from "yahoo-finance";
import { IStock } from "../models";

export class FinanceService {

    /**
     *
     */
    constructor() {

        // This replaces the deprecated snapshot() API

    }

    public async getStockBySymbol(symbol: string): Promise<IStock> {

        const rsp = await fetch(`http://localhost:8080/stock-snapshot/${symbol}`);
        const stock = await rsp.json();
        return stock.price as IStock;
    }

}
