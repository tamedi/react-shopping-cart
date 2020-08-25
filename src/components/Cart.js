import React, { Component } from "react";

export default class Cart extends Component {
  render() {
    const { cartItems } = this.props;
    return (
      <div>
        {cartItems.lenght === 0 ? (
          <div className="cart cart-header">Cart is empty</div>
        ) : (
          <div className="cart cart-header">
            You have {cartItems.lenght} in the cart{" "}
          </div>
        )}
      </div>
    );
  }
}
