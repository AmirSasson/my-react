
import { faCoffee, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Component } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IStock } from "./models";
import "./StockComponent.scss";
import { StockActions } from "./stores/Stock-actions";
import { stockStore } from "./stores/stock-store";

export class StockComponent extends Component<{ stock: IStock }> {

    constructor(model: { stock: IStock }) {
        super(model);
    }

    public render() {
        return (
            <div className="stock-item">
                <div>{this.props.stock.longName}</div>
                <div>{this.props.stock.symbol}</div>
                <div>{this.props.stock.regularMarketPrice}</div>
                <Link to={`/stock/${this.props.stock.symbol}`}>Explore</Link>

                <FontAwesomeIcon className="action-icon" onClick={(e) => stockStore.dispatch(StockActions.deleteStock(this.props.stock))} icon={faTrash} />

            </div>

        );
    }

}
