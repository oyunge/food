import React from 'react';
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
        <ProductsContainer>
            <ProductsHeading>Choose your favourite
</ProductsHeading>
            <ProductWrapper>
                {productData.map((product, index) => {
                    return (
                        <ProductCard key={index}>
                            <ProductImg src={product.img} alt={product.alt} />
                            <ProductInfo>
                                <a href="/Beverages">
                                <ProductTitle>{product.name}</ProductTitle>
                                </a>
                                <ProductDesc>{product.desc}</ProductDesc>
                                <ProductPrice>{product.price}</ProductPrice>
                               <a href="/Beverages"> 
                                        <ProductButton>{product.button}</ProductButton>
                                        </a>
                            </ProductInfo>
                        </ProductCard>
                    );
                })}
            </ProductWrapper>
        </ProductsContainer>
    );
};

export default Beverages;