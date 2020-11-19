
import React from "react";
import { Component } from "react";
import { Button, Container, ListGroup } from "react-bootstrap";
import { IStock, IStocksListModel } from "./models";
import { StockComponent } from "./StockComponent";
import { uuidv4 } from "./utils";

export class StocksListComponent extends Component<IStocksListModel> {
    constructor(props: IStocksListModel) {
        super(props);
    }
    public async handleNewStockEvent(event: any) {
        event.preventDefault();
        await this.props.handleNewStock({ name: "amir", val: 1.1, id: uuidv4() });
    }

    public render() {
        return (
            <Container>
                <Button onClick={(e) => this.handleNewStockEvent(e)}>Add new Stock</Button>
                <ListGroup>
                    {this.props.stocks.map((s, i) => (
                        <ListGroup.Item key={i} >
                            <StockComponent stock={s} ></StockComponent>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Container>
        );
    }

}
