import React from 'react'

function ColumnFilter({column}) {
    const {filterValue,setFilter} = column;

    const debounceFunction =(fn,delay)=>{
        let timer;
        return (e)=>{
            clearTimeout(timer);
            timer = setTimeout(()=>{
                fn(e.target.value);
            },delay)
        }
    }

    return (
        <span>
          Search:{''}
          <input onChange={debounceFunction(setFilter,400)}/>  
        </span>
    )
}

export default ColumnFilter
