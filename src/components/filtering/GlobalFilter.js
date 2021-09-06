import React from 'react'

function GlobalFilter({filter,setFilter}) {

    const debounceFunction =(fn,delay)=>{
        let timer;
        return(e)=>{
            clearTimeout(timer);
            timer= setTimeout(()=>{
                fn(e.target.value); 
            },delay)
        }
    }

    return (
        <span>
           Search:{''}
           <input onChange={debounceFunction(setFilter,1000)}/> 
        </span>
    )
}

export default GlobalFilter
