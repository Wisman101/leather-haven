import { useContext } from 'react';

import { CartContext } from '../../context/cart.context';

import { CheckoutItemContainer, ImageContainer, Quantity, Span, RemoveButton } from './checkout-item.styles';

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const { clearItemFromCart, addItemToCart, removeItemToCart } =
    useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemToCart(cartItem);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <Span> {name} </Span>
      <Quantity>
        <div className='arrow' onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={addItemHandler}>
          &#10095;
        </div>
      </Quantity>
      <Span> {price}</Span>
      <RemoveButton onClick={clearItemHandler}>
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;