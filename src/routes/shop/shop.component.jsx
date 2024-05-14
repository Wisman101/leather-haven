import { useContext } from 'react';

import { ProductContext } from '../../context/products.context';
import ProductCard from '../../components/product-card/product-card.component';

import './shop.styles.scss';


const Shop = () => {
    const { Products } = useContext(ProductContext)

    return (
        <div className='products-container'>
            {Products.map((product) => (
                <ProductCard key={product.id} product={product}></ProductCard>
            ))}
        </div>
    )
}

export default Shop;