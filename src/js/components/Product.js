var React = require('react');
var AppActions = require('../actions/AppActions');
var AddToCart = require('./AddToCart');

var Product = React.createClass({
  updateSelected: function(evt){
    AppActions.selectProduct(evt.target.value);
  },
  render: function(){
    var product = this.props.product;
    var variants = this.props.product.variants;
    console.log("product");
    console.log(product.variants);
    var selected = this.props.selected;
    var options = product.variants.map(function (variant, index) {
      return (
        <option key={index} value={index}>{variant.type}</option>
      )
    });
    return (

     <div className="col-sm-6 product">
        <div className="product-image">
          <img src={"/src/img/" + selected.image}/>
        </div>
        <div className="product-details">
          <h2>{selected.name}</h2>
          <p>{selected.description}</p>
          <h3>Price: ${selected.price}</h3>
          <h4>Inventory: {selected.inventory}</h4>
          <select onChange={this.updateSelected}>
            {options}
          </select>
          <AddToCart selected={selected} product={product}/>
        </div>
      </div>


    );
  }
});

module.exports = Product ;