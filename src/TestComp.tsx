
import React from "react";
import { connect } from "react-redux";


// interface IStockExplorerProps extends RouteComponentProps<{ stockId: string }> {

class TestComp extends React.Component {
    public render() {
        return <div className="stock-item">
            HI
            </div>

    }
}

export default connect()(TestComp);
