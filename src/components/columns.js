import {format} from 'date-fns';
import ColumnFilter from './filtering/ColumnFilter';
export const COLUMNS =[
    {
        Header:'Id',
        accessor:'id',
        Filter:ColumnFilter
    },
    {
        Header:'First Name',
        accessor:'first_name',
        Filter:ColumnFilter
    },
    {
        Header:'Last Name',
        accessor:'last_name',
        Filter:ColumnFilter
    },
    {
        Header:'Date Of Birth',
        accessor:'date_of_birth',
        Cell: ({value})=>format(new Date(value),'dd/MM/yyyy'),
        Filter:ColumnFilter
    },
    {
        Header:'Country',
        accessor:'country',
        Filter:ColumnFilter
    },
    {
        Header:'Phone',
        accessor:'phone',
    }
]

export const GROUPED_COLUMNS =[
    {
        Header:'ID',
        columns:[
            {
                Header:'ID',
                accessor:'id',
                Filter:ColumnFilter,
                disableFilters:true
            }
        ]
    },
    {
        Header:"Name",
        columns:[
            {
                Header:'First Name',
                accessor:'first_name',
                Filter:ColumnFilter
            },
            {
                Header:'Last Name',
                accessor:'last_name',
                Filter:ColumnFilter
            },
        ]
    },
    {
       Header: "Info",
       columns:[
         {
             Header: 'Email',
             accessor:'email',
             Filter:ColumnFilter,

         },  
        {
            Header:'Date Of Birth',
            accessor:'date_of_birth',
            Cell: ({value})=>format(new Date(value),'dd/MM/yyyy'),
            Filter:ColumnFilter
        },
        {
            Header:'Country',
            accessor:'country',
            Filter:ColumnFilter
        },
        {
            Header:'Phone',
            accessor:'phone',
            Filter:ColumnFilter
        }
       ] 
    }
]