export const COLUMNS =[
    {
        Header:'Id',
        accessor:'id'
    },
    {
        Header:'First Name',
        accessor:'first_name'
    },
    {
        Header:'Last Name',
        accessor:'last_name'
    },
    {
        Header:'Date Of Birth',
        accessor:'date_of_birth',
    },
    {
        Header:'Country',
        accessor:'country'
    },
    {
        Header:'Phone',
    }
]

export const GROUPED_COLUMNS =[
    {
        Header:'ID',
        columns:[
            {
                Header:'ID',
                accessor:'id',
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
            },
            {
                Header:'Last Name',
                accessor:'last_name',
            },
        ]
    },
    {
       Header: "Info",
       columns:[
        {
            Header:'Date Of Birth',
            accessor:'date_of_birth',
        },
        {
            Header:'Country',
            accessor:'country',
        },
        {
            Header:'Phone',
            accessor:'phone',
        }
       ] 
    }
]