import React from 'react';
import {ProductCard, ProductButtons, ProductImage, ProductTitle} from "../components";

const product = {
    id: '1',
    title: 'Coffee Mug cup',
    img: './coffee-mug.png',
}
const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping Page</h1>
            <hr/>
            <div style={{display: "flex", flexWrap: "wrap", flexDirection: "row"}}>
                <ProductCard product={product}>
                    <ProductCard.Image/>
                    <ProductCard.Title/>
                    <ProductCard.Buttons/>
                </ProductCard>
                <ProductCard product={product}>
                    <ProductImage/>
                    <ProductTitle/>
                    <ProductButtons/>
                </ProductCard>
            </div>
        </div>
    );
};

export default ShoppingPage;