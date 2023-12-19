import React, { Component } from "react";
import { choice } from "./helper";
import Coin from "./Coin";

class CoinContainer extends Component {
  static defaultProps = {
    coins: [
      { side: "heads", imgSrc: "https://tinyurl.com/react-coin-heads-jpg" },
      { side: "tails", imgSrc: "https://tinyurl.com/react-coin-tails-jpg" },
    ],
  };
  constructor(props) {
    super(props);
    this.state = { curCoin: null, nFlips: 0, nHeads: 0, nTails: 0 };
    this.handleClick = this.handleClick.bind(this);
  }
  flibCoin() {
    const newCoin = choice(this.props.coins);
    this.setState((st) => {
      return {
        curCoin: newCoin,
        nFlips: st.nFlips + 1,
        nHeads: st.nHeads + (newCoin.side === "heads" ? 1 : 0),
        nTails: st.nTails + (newCoin.side === "tails" ? 1 : 0),
      };
    });
  }
  handleClick(e) {
    this.flibCoin();
  }
  render() {
    return (
      <div className="CoinContainer">
        <h1>let's Flip the coin</h1>
        <button onClick={this.handleClick}>Flip me</button>
        {/* 1st option */}
        {/* <Coin
          side={this.state.curCoin.side}
          imgSrc={this.state.curCoin.imgSrc} */}
        {/* /> */}
        {this.state.curCoin && <Coin info={this.state.curCoin} />}
        {/* and pass the props to img in coin component */}
        <p>
          Out of {this.state.nFlips}flips, ther have been {this.state.nHeads}
          heads and{this.state.nTails}tails
        </p>
      </div>
    );
  }
}
export default CoinContainer;
