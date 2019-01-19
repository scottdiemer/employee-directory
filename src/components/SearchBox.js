import React from 'react'

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className='pa2'>
      <input
        className='pa3 ba b--white-70 bg-washed-blue'
        type='search'
        placeholder='search employees'
        onChange={searchChange}
      />
    </div>

  )
}

export default SearchBox
