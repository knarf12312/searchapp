import React, { useState } from 'react'

const Search = (props) => {
    const { searchText, onSubmit } = props;
    const [search, setSearch] = useState("")

    const handleChange = (event) => {
        setSearch(event.target.value);
    }

    const handleBlur = () => {
        searchText(search);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit();
    }


  return (
    <>
        <form 
            style={{
                display: 'flex', 
                justifyContent: 'center'
            }}
            onSubmit={(event) => handleSubmit(event)}
        >
            <input 
                style={{display: 'block'}}
                type='text' 
                onBlur={() => handleBlur()}
                onChange={(event) => handleChange(event)}
                value={search} 
            />
            <button type='submit'>Search</button>
        </form>
    </>
  )
}

export default Search