import React, { Component } from "react";
import { choice } from "./helper";

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
      return { curCoin: newCoin, nFlips: st.nFlips + 1 };
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
        <p>
          Out of {this.state.nFlips}flips, ther have been {this.state.nHeads}
          heads and{this.state.nTails}tails
        </p>
      </div>
    );
  }
}
export default CoinContainer;
