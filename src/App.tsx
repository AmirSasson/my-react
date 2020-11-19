import React, { Component, Dispatch, SetStateAction, useState } from "react";
import { Button, Container } from "react-bootstrap";
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
import { StocksListComponent } from "./StocksListComponent";
import { uuidv4 } from "./utils";

// tslint:disable:max-line-length
export class App extends React.Component {

  public state = {
    stocks: [
      { name: "Stock 1", val: 1.2, id: uuidv4() },
      { name: "Stock 2", val: 1.3, id: uuidv4() },
      { name: "Stock 3", val: 1.4, id: uuidv4() },
    ],
  };

  constructor(props: any) {
    super(props);

  }

  public handleNewStock = async (s: IStock) => {
    this.setState((prev: { stocks: IStock[] }) => {
      return { stocks: [...prev.stocks, s] } as IStocksListModel;
    });
  }

  public render() {
    return (
      <div className="App" >

        <Router>
          <Container>
            <div className="top-menu">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
            </div>
            <hr />

            <Switch>
              <Route exact path="/">
                <StocksListComponent stocks={this.state.stocks} investName="amir" handleNewStock={this.handleNewStock}></StocksListComponent>

              </Route>
              <Route exact path="/about">
                <Button onClick={(e) => window.history.back()}>Back</Button>
                <AboutComponent ></AboutComponent>
              </Route>
              <Route path="/stock/:stockId" render={(props) =>
                <>
                  <Button onClick={(e) => window.history.back()}>Back</Button>
                  <StockExplorer {...props.match.params} stocks={this.state.stocks} />
                </>} />
            </Switch>
          </Container>
        </Router>

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
