import React from 'react'

function ColumnFilter({column}) {
    const {filterValue,setFilter} = column;
    return (
        <span>
          Search:{''}
          <input onChange={(e)=>setFilter(e.target.value)}/>  
        </span>
    )
}

export default ColumnFilter
