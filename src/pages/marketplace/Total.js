import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components'

const Total = props => {

const TotalAmount=styled.h3`
    font-size:1.6rem;
`


const calcTotals = () => {
  let totals = 0;
  for( let i = 0; i < props.products.length; i++){
    totals = totals + props.products[i].price * props.products[i].quantity
  }
  return totals;
}


console.log("PRODUCTS: ",props.products)
console.log("price: ",props.products.price)
return (
    <div className="content">
      <TotalAmount>Total Cost: ${calcTotals()}</TotalAmount>
    </div>
  );
};

const mapStateToProps = ( state ) => {
  console.log(state);
  return {
      products:state.marketReducer.products,
      price: state.marketReducer.price,
      quantity: state.marketReducer.quantity
  }
}
export default connect(mapStateToProps,{})(Total);
