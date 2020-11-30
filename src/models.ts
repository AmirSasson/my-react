
export interface IStock {
    name: string;
    val: number;
    id: string;

}

export interface IStocksListModel {
    // stocks: IStock[];
    // investName: string;
    handleNewStock: (s: IStock) => any;
}
