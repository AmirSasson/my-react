
import React from "react";
import { Component } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IStock } from "./models";
import "./StockComponent.scss";

export class StockComponent extends Component<{ stock: IStock }> {

    constructor(model: { stock: IStock }) {
        super(model);
    }

    public render() {
        return (
            <div className="stock-item">
                <div>{this.props.stock.name}</div>
                <div>{this.props.stock.val}</div>
                <Link to={`/stock/${this.props.stock.id}`}>Explore</Link>
            </div>

        );
    }

}
