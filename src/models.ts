
export interface IStock {
    symbol: string;
    regularMarketPrice: number;
    id: string;
    averageDailyVolume3Month: number;
    averageDailyVolume10Day: number;
    currency: string;
    currencySymbol: string;
    exchange: string;
    exchangeDataDelayedBy: number;
    exchangeName: string;
    fromCurrency: null;
    lastMarket: null;
    longName: string;
    marketCap: number;
    marketState: string;
    maxAge: 1;
    postMarketChange: number;
    postMarketChangePercent: number;
    postMarketPrice: number;
    postMarketSource: string;
    postMarketTime: string;
    preMarketChange: number;
    preMarketChangePercent: number;
    preMarketPrice: number;
    preMarketSource: string;
    preMarketTime: string;
    priceHint: 2;
    quoteSourceName: string;
    quoteType: string;
    regularMarketChange: number;
    regularMarketChangePercent: number;
    regularMarketDayHigh: number;
    regularMarketDayLow: number;
    regularMarketOpen: number;
    regularMarketPreviousClose: number;
    regularMarketSource: string;
    regularMarketTime: string;
    regularMarketVolume: number;
    shortName: string;
    toCurrency: string;
    underlyingSymbol: string;

}

export interface IStocksListModel {
    // stocks: IStock[];
    // investName: string;
    handleNewStock: (s: IStock) => any;
}
