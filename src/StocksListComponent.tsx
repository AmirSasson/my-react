
import React, { ChangeEvent } from "react";
import { Component } from "react";
import { Button, Container, Form, ListGroup } from "react-bootstrap";
import { connect, ConnectedComponent } from "react-redux";
import { IStock, IStocksListModel } from "./models";
import { StockComponent } from "./StockComponent";
import { stockStore } from "./stores/stock-store";
import { uuidv4 } from "./utils";

export class StocksListComponent extends Component<IStocksListModel, { stocks: any[], stockName: string }> {
    constructor(props: IStocksListModel) {
        super(props);
        this.state = { stockName: "fsdf", stocks: [] };
        this.handleNewStockEvent = this.handleNewStockEvent.bind(this);
    }
    public componentDidMount() {
        console.log("stocks", stockStore.getState().stocks);
        stockStore.subscribe(() => {
            console.log("stocks", stockStore.getState().stocks);
            this.setState({ stocks: stockStore.getState().stocks });
        });
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
                    {this.state.stocks.map((s, i) => (
                        <ListGroup.Item key={i} >
                            <StockComponent stock={s} ></StockComponent>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Container>
        );
    }

}
// export default connect()(StocksListComponent);
