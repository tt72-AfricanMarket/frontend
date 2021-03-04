import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components';

const ItemCard = styled.div`
    padding:20px;
    box-sizing:border-box;
    margin-top:10px;
    margin-bottom:10px;
    transition:all .2s ease-out;

        :hover {
            
            margin-left:3%;
            transform:scale(1.04);
            box-shadow:5px 5px 5px black;
            width:300px;
            
        }
`

const ItemName=styled.h2`
        font-family:roboto;
        font-size:1.6rem;
`
const PriceH3=styled.h3`
        font-family:roboto;
        font-size:1.6rem;
`
const QuantityH3=styled.h3`
    font-family:roboto;
    font-size:1.6rem;
`

const Cart = props => {




return (
    <div className="content">
     {props.products.map(item =>{

         return item.quantity !== 0 ?<ItemCard>
             <ItemName>Name:{item.name}</ItemName>
             <PriceH3>Price: ${item.price}</PriceH3>
             <QuantityH3>Quantity: {item.quantity}</QuantityH3>
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
