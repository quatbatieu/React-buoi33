import React from "react";
import data from "./data.json";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";

class ShoesShop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectProduct: null,
      isOpen: false,
    };
  }
  handleSelect = (product) => {
    console.log(product);
    this.setState({ selectProduct: product });
    this.setState({ isOpen: true });
  };
  handleClose = () => {
    this.setState({ isOpen: false });
  };
  render() {
    const { selectProduct, isOpen } = this.state;
    return (
      <div className="container">
        <h1 className="text-center text-danger">Shoes Shop</h1>
        <ProductList products={data} onSelect={this.handleSelect} />

        <ProductDetails
          product={selectProduct}
          isOpen={isOpen}
          onClose={this.handleClose}
        />
      </div>
    );
  }
}

export default ShoesShop;
