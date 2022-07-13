import React from 'react'
import Products from '../products'

const ProductList = (props) => {
    const { data } = props;
  return (
    <>
        {data?.map((item) => (
            <div 
                className='col-3' 
                style={{
                    border: '1px solid black',
                    marginBottom: '5px',
                }} 
                key={item?.id}
            >
                <Products 
                    title={item.title} 
                    price={item.price} 
                    description={item.description} 
                />
            </div>
        ))}
    </>
  )
}

export default ProductList