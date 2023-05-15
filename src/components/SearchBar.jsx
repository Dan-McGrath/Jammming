import React, { useState } from "react";


const SearchBar = () => {
    const [input, setInput] = useState('')
    return (
        <input type="search" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Search for a Song!"/>
    )
}

export default SearchBar;