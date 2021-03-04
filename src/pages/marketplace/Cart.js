import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components';

const ItemCard = styled.div`
    background:white;
    border:1px solid black;
    padding:20px;
    box-sizing:border-box;
    margin-top:10px;
    margin-bottom:10px;
`

const Cart = props => {




return (
    <div className="content">
     {props.products.map(item =>{

         return item.quantity !== 0 ?<ItemCard>
             <h2>Name:{item.name}</h2>
             <h3>Price: ${item.price}</h3>
             <h3>Quantity: {item.quantity}</h3>
         </ItemCard> : null   
     })}
    </div>
  );
};

const mapStateToProps = ( state ) => {
//   console.log(state);
  return {
      products:state.marketReducer.products,
      price: state.marketReducer.price,
      quantity: state.marketReducer.quantity
  }
}
export default connect(mapStateToProps,{})(Cart);
