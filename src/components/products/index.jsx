import React from 'react'

const Products = (props) => {
    const {title, price, description} = props;
  return (
    <>
        PRODUCT ITEM
        <br />
        {title}
        <br />
        {price}
        <br />
        {description}
    </>
  )
}

export default Products