
import React, { ChangeEvent } from "react";
import { Component } from "react";
import { Button, Container, Form, ListGroup } from "react-bootstrap";
import { IStock, IStocksListModel } from "./models";
import { StockComponent } from "./StockComponent";
import { uuidv4 } from "./utils";

export class StocksListComponent extends Component<IStocksListModel, { stockName: string }> {
    constructor(props: IStocksListModel) {
        super(props);
        this.state = { stockName: "fsdf" };
        this.handleNewStockEvent = this.handleNewStockEvent.bind(this);
    }

    public async handleNewStockEvent(event: any) {
        event.preventDefault();
        await this.props.handleNewStock({ name: this.state.stockName, val: 1.1, id: uuidv4() });
        this.setState({ stockName: "" });
    }

    public async onStockChange(event: ChangeEvent<any>) {
        this.setState({ stockName: event.target.value });
    }

    public render() {

        return (
            <Container>
                <Form.Control name="stockName" plaintext placeholder="Enter Stock name" value={this.state.stockName} onChange={(e) => this.onStockChange(e)} />
                {/* <FormText inputMode="search" onInput={(e) => this.state.}></FormText> */}
                <Button disabled={!this.state.stockName} onClick={(e) => this.handleNewStockEvent(e)}>Add new Stock</Button>
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
