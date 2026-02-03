import React from 'react';
import {ProductCard, ProductButtons, ProductImage, ProductTitle} from "../components";
import '../styles/custom-styles.css';

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
                <ProductCard product={product} className="bg-dark text-white">
                    <ProductCard.Image className="custom-image"/>
                    <ProductCard.Title className="text-bold"/>
                    <ProductCard.Buttons className="custom-buttons"/>
                </ProductCard>
                <ProductCard product={product} className="bg-dark text-white">
                    <ProductImage className="custom-image"/>
                    <ProductTitle className="text-bold"/>
                    <ProductButtons className="custom-buttons"/>
                </ProductCard>
                <ProductCard product={product} style={{backgroundColor: '#70D1F8'}}>
                    <ProductCard.Image style={{padding: '10px', boxShadow: '10px 10px 10px rgba(0,0,0,0.5)', width: 'calc(100% - 20px)', borderRadius: '20px'}}/>
                    <ProductCard.Title style={{fontWeight: "bold"}}/>
                    <ProductCard.Buttons style={{display: 'flex', justifyContent: 'end'} }/>
                </ProductCard>
            </div>
        </div>
    );
};

export default ShoppingPage;