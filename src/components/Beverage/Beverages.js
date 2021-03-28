import React from 'react';
import Footer from '../Footer';

import {
    ProductsContainer,
    ProductWrapper,
    ProductsHeading,
    ProductTitle,
    ProductCard,
    ProductImg,
    ProductInfo,
    ProductDesc,
    ProductPrice,
    ProductButton
} from './BeverageElements';
import { productData } from './AllBeverages';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

const Beverages = () => {
    return (
        <>
        <ProductsContainer>
            <ProductsHeading>Choose your favourite
</ProductsHeading>
            <ProductWrapper>
                {productData.map((product, index) => {
                    return (
                        <ProductCard key={index}>
                            <ProductImg src={product.img} alt={product.alt} />
                            <ProductInfo>
                                <ProductTitle>{product.name}</ProductTitle>
                                <ProductDesc>{product.desc}</ProductDesc>
                                <ProductPrice>{product.price}</ProductPrice>
                                        <ProductButton>{product.button}</ProductButton>
                            </ProductInfo>
                        </ProductCard>
                    );
                })}
            </ProductWrapper>
            

        </ProductsContainer>
        <Footer />

        </>
    );
};

export default Beverages;