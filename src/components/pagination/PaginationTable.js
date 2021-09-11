import React,{useMemo} from 'react';
import {useTable,useSortBy,useGlobalFilter,useFilters} from 'react-table';
import {COLUMNS,GROUPED_COLUMNS} from '../columns';
import MOCK_DATA from '../../data/MOCK_DATA.json';
import GlobalFilter from '../filtering/GlobalFilter';
import '../TableStyle.css'

function PaginationTable() {
    const data = useMemo(()=>MOCK_DATA,[]);
    //const columns = useMemo(()=>COLUMNS,[]);
    const columns = useMemo(()=>GROUPED_COLUMNS,[]);

    const {getTableProps,getTableBodyProps,headerGroups,rows,prepareRow,state,setGlobalFilter} = useTable({
        columns,
        data
    },useFilters,useGlobalFilter,useSortBy);

    const {globalFilter} = state;

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
                rows.map(row=>{
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
        </>
    )
}

export default PaginationTable
