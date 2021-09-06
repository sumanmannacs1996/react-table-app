import React,{useMemo} from 'react';
import {useTable} from 'react-table';
import {COLUMNS} from './columns';
import MOCK_DATA from '../data/MOCK_DATA.json';
import './TableStyle.css'

function BasicTable() {
    const data = useMemo(()=>MOCK_DATA,[]);
    const columns = useMemo(()=>COLUMNS,[]);

    const {getTableProps,getTableBodyProps,headerGroups,rows,prepareRow} = useTable({
        columns,
        data
    })

    return (
        <table {...getTableProps()}>
            <thead>
                {
                    headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                                headerGroup.headers.map(column => (
                                    <th{...column.getHeaderProps()}>{column.render("Header")}</th>
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
    )
}

export default BasicTable
