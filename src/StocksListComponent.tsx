
import React, { ChangeEvent } from "react";
import { Component } from "react";
import { Button, Container, Form, ListGroup } from "react-bootstrap";
import { connect, ConnectedComponent } from "react-redux";
import { IStock, IStocksListModel } from "./models";
import { StockComponent } from "./StockComponent";
import { IStockAction, StockAction, stockStore } from "./stores/stock-store";
import { uuidv4 } from "./utils";

interface IStocksListState { stockName?: string; stocks?: IStock[]; }

class StocksListComponent extends Component<any, IStocksListState> {
    constructor(props: any) {
        super(props);
        this.state = { stockName: "fsdf" };
        this.handleNewStockEvent = this.handleNewStockEvent.bind(this);
    }
    // public componentDidMount() {
    //     console.log("stocks", stockStore.getState().stocks);
    //     stockStore.subscribe(() => {
    //         console.log("stocks", stockStore.getState().stocks);
    //         this.setState({ stocksa: stockStore.getState().stocks });
    //     });
    // }

    public async handleNewStockEvent(event: any) {
        event.preventDefault();
        stockStore.dispatch({ data: { name: this.state.stockName, val: Math.round(Math.random() * 10 * 100) / 100, id: uuidv4() }, type: StockAction.Add });
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
                    {this.props.stocks.map((s: any, i: any) => (
                        <ListGroup.Item key={i} >
                            <StockComponent stock={s} ></StockComponent>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Container>
        );
    }

}

function mapStateToProps(state: any): IStocksListState {
    return { stocks: state.stocks };
}

// function mapDispatchToProps(dispatch: Dispatch<any>): any {
//     return bindActionCreators({ someAction: actionCreators.someAction }, dispatch)
// }

export default connect(mapStateToProps)(StocksListComponent);
