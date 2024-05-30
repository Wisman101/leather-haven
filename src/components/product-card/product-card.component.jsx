import { useContext } from 'react';

import './product-card.styles.jsx'

import { CartContext } from '../../context/cart.context';
import Button from '../button/button.component';
import { ProductCardContainer, ProductFooter, ProductImage, ProductName, ProductPrice } from './product-card.styles.jsx';

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    const { addItemToCart } = useContext(CartContext)
    
    const addProductToCart = () => addItemToCart(product)

    return (
    <ProductCardContainer>
        <ProductImage src={imageUrl} alt={`${name}`} />
        <ProductFooter>
            <ProductName>{name}</ProductName>
            <ProductPrice>{price}</ProductPrice>
        </ProductFooter>

        <Button buttonType='inverted' onClick={addProductToCart}>Add to Cart</Button>

    </ProductCardContainer>
    )
}

export default ProductCard;