import React, { Component, Dispatch, SetStateAction, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from "react-router-dom";
import { AboutComponent } from "./AboutComponent";
import "./App.scss";
import logo from "./logo.svg";
import { IStock, IStocksListModel } from "./models";
import { StockExplorer } from "./StockExplorer";
import StocksListComponent from "./StocksListComponent";
import { stockStore } from "./stores/stock-store";
import TestComp from "./TestComp";
import { uuidv4 } from "./utils";

// tslint:disable:max-line-length
export class App extends React.Component<any, { stocks: IStock[] }> {

  public state = {
    stocks: [] as IStock[],
  };

  constructor(props: any) {
    super(props);

  }
  // public componentDidMount() {
  //   stockStore.subscribe(() => {
  //     this.state.stocks = stockStore.getState().stocks;
  //   });
  // }

  // public handleNewStock = async (s: IStock) => {
  //   stockStore.dispatch({ data: s } as IStockAddAction);
  //   // this.setState((prev: { stocks: IStock[] }) => {
  //   //   return { stocks: [...prev.stocks, s] } as IStocksListModel;
  //   // });
  // }

  public render() {
    return (
      <div className="App" >

        <Provider store={stockStore} >
          <TestComp></TestComp>
          <Router>
            <Container>
              <div className="top-menu">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
              </div>
              <hr />

              <Switch>
                <Route exact path="/">
                  <StocksListComponent></StocksListComponent>

                </Route>
                <Route exact path="/about">
                  <Button onClick={(e) => window.history.back()}>Back</Button>
                  <AboutComponent ></AboutComponent>
                </Route>
                <Route path="/stock/:stockId" render={(props) =>
                  <>
                    <Button onClick={(e) => window.history.back()}>Back</Button>
                    <StockExplorer {...props.match.params} />
                  </>} />
              </Switch>
            </Container>
          </Router>
        </Provider>

        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </div>
    );
  }
}

export default App;
