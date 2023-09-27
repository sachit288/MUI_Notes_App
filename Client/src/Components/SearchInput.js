import { InputBase, styled } from '@mui/material';
import React from 'react'

const SearchInput = ({ search, setSearch }) => {
  return (

    <InputBase
      placeholder="search....."
      onChange={(e) => {
        setSearch(e.target.value);
      }}
      value={search}
      autoFocus
    />

  )
}

export default SearchInput
