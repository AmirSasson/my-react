
import React from "react";
import { Component } from "react";
import { Button } from "react-bootstrap";
import { RouteComponentProps } from "react-router";
import { BrowserRouter as Router, useParams, withRouter } from "react-router-dom";
import { IStock } from "./models";
import "./StockComponent.scss";
import { stockStore } from "./stores/stock-store";

// interface IStockExplorerProps extends RouteComponentProps<{ stockId: string }> {
//     stocks: any;
// }

// export function StockExplorer(props: { stocks: IStock[] }) {
//     const { stockId } = useParams<{ stockId: string; }>();
//     const stock = props.stocks.find((s: IStock) => s.id === stockId)!;
//     return (

//         <div className="stock-item">
//             {stock && <>
//                 <div>{stock.name}</div>
//                 <div>{stock.val}</div>
//             </>}

//         </div>

//     );
// }

export class StockExplorer extends React.Component<{ stocks: IStock[], stockSymbol: string }> {

    public stock?: IStock;

    public render() {
        const stockSymbol = this.props.stockSymbol;
        this.stock = stockStore.getState().stocksActions.stocks.find((s: IStock) => s.symbol === stockSymbol)!;
        return (

            <div className="stock-item">
                { this.stock && <>
                    <div>{this.stock.longName}</div>
                    <div>{this.stock.symbol}</div>
                    <div>{this.stock.regularMarketChange}</div>
                    <div>{this.stock.regularMarketPrice}</div>
                </>
                }
            </div>

        );
    }

}
