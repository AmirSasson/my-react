
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

export class StockExplorer extends React.Component<{ stocks: IStock[], stockId: string }> {

    public stock?: IStock;

    public render() {
        const id = this.props.stockId;
        this.stock = stockStore.getState().stocks.find((s: IStock) => s.id === id)!;
        return (

            <div className="stock-item">
                { this.stock && <>
                    <div>{this.stock.name}</div>
                    <div>{this.stock.val}</div>
                </>
                }
            </div>

        );
    }

}
