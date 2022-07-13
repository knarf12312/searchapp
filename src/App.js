import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';
import ProductList from './components/product-list';
import Search from './components/search';

const base_url = 'https://fakestoreapi.com/products';

const getAllProducts = async () => {
  try {
    const response = await axios.get(base_url);
    if (response?.status === 200) {
      return response;
    }
    /* you can add more condition for other statuses */
  } catch (error) {
    console.log("error >>>>>", error);
  }
}

function App() {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");

  const loadData = async () => {
    const response = await getAllProducts();
    setData(response.data)
  }

  const handleSearch = async () => {
    if (searchText !== "") {
      const filteredData = data.filter((product) => 
        product.title.toLowerCase() === searchText.toLowerCase()
      );
      setData(filteredData);
    }
  }

  useEffect(() => {
    loadData();
  }, [])
  

  return (
    <>
      <div
        style={{
          display: 'flex', 
          justifyContent: 'center'
        }}
      >

        <div 
          className='container' 
        >
          <Search 
            searchText={(text) => setSearchText(text)} 
            onSubmit={() => handleSearch()}  
          />
          <div className='row'>
            <ProductList data={data} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
