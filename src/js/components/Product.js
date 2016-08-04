var React = require('react');
var AppActions = require('../actions/AppActions');
var AddToCart = require('./AddToCart');

var Product = React.createClass({
  updateSelected: function(evt){
    AppActions.selectProduct(evt.target.value);
  },
  render: function(){
    var product = this.props.product;
    var selected = this.props.selected;
    var variants = this.props.product.variants;
    console.log("product js...");
    console.log(variants);
    var options = product.variants.map(function (variant, index) {
      return (
        <option key={index} value={index}>{variant.type}</option>
      )
    });
    return (

     <div>
                {
                    variants.map(function (variant) {
                        return (
                       <div className="col-sm-6 product">
                        <div className="product-image">
                          <img src={"/src/img/" + variant.image}/>
                        </div>
                        <div className="product-details">
                          <h2>{variant.name}</h2>
                          <p>{variant.description}</p>
                          <h3>Price: ${variant.price}</h3>
                          <h4>Inventory: {variant.inventory}</h4>
                         
                          <AddToCart selected={variant} product={product}/>
                        </div>
                      </div>
                        );
                    })
                }
            </div>
    );
  }
});

module.exports = Product ;