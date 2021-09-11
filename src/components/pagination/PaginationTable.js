import React,{useMemo} from 'react';
import {useTable,useSortBy,useGlobalFilter,useFilters,usePagination} from 'react-table';
import {COLUMNS,GROUPED_COLUMNS} from '../columns';
import MOCK_DATA from '../../data/MOCK_DATA.json';
import GlobalFilter from '../filtering/GlobalFilter';
import '../TableStyle.css'

function PaginationTable() {
    const data = useMemo(()=>MOCK_DATA,[]);
    //const columns = useMemo(()=>COLUMNS,[]);
    const columns = useMemo(()=>GROUPED_COLUMNS,[]);

    const {getTableProps,getTableBodyProps,headerGroups,page,prepareRow,state,setGlobalFilter,previousPage,nextPage,canPreviousPage,canNextPage,pageOptions,gotoPage} = useTable({
        columns,
        data
    },useFilters,useGlobalFilter,useSortBy,usePagination);

    const {globalFilter,pageIndex} = state;

    return (
        <>
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
        <table {...getTableProps()}>
            <thead>
                {
                    headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                                headerGroup.headers.map(column => (
                                    <th{...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {column.render("Header")}
                                    <span>
                                        {column.isSorted ?
                                        (column.isSortedDesc ? 
                                        ' 🔽' : ' 🔼') : ''
                                        }
                                    </span>
                                    <div>
                                        {column.canFilter ? column.render('Filter') : null}
                                    </div>
                                    </th>
                                ))
                            }
                        </tr>
                    ))
                }
            </thead>
            <tbody {...getTableBodyProps()}>
            {
                page.map(row=>{
                    prepareRow(row);
                    return(
                        <tr{...row.getRowProps()}>
                            {
                            row.cells.map(cell=>(
                                <td {...cell.getCellProps()}>
                                    {cell.render('Cell')}
                                </td>
                            ))
                            }
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
        <div>
            <span>
                Page{' '}
                <strong>
                    {pageIndex+1} of {pageOptions.length}
                </strong>
                {' '}
            </span>
            <span>
                {' '}
                Go to Page:{' '}
                <input 
                onChange={(e)=>gotoPage(Number(e.target.value)-1)}
                defaultValue={pageIndex+1}
                style={{width:"25px"}}
                />
                {' '}
            </span>
            <button onClick={()=>gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>
            <button onClick={()=>previousPage()} disabled={!canPreviousPage}>Prev</button>
            <button onClick={()=>nextPage()} disabled={!canNextPage}>Next</button>
            <button onClick={()=>gotoPage(pageOptions.length -1)} disabled={!canNextPage}>{'>>'}</button>
        </div>
        </>
    )
}

export default PaginationTable
