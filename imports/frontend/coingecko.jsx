import React, { Component } from "react";

export default class coingecko extends Component {
  render() {
    return (
      <div>
        <div id="coin-data">
          <script
            type="application/javascript"
            src="https://widgets.coingecko.com/coingecko-coin-price-marquee-widget.js"
            defer
          ></script>
          <coingecko-coin-price-marquee-widget
            coin-ids="bitcoin,ethereum,litecoin"
            currency="usd"
            background-color="#ffffff"
            locale="en"
            v-pre
          ></coingecko-coin-price-marquee-widget>
        </div>
      </div>
    );
  }
}
