import React from 'react'
import CategoryItem from './CategoryItem';
import './Category.css';
import ButtonTop from './ButtonTop';

function Category() {
    return (
        <div className="category">
            <div className="category__header">
                <ButtonTop name="asd"/>

            </div>
            <div className="category__list">
                <div className="category__list__left">
                    <CategoryItem/>
                    <CategoryItem/>
                    <CategoryItem/>
                    <CategoryItem/>
                </div>
                <div className="category__list__right">
                </div>
            </div>
        </div>
    )
}

export default Category
