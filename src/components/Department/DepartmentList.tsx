import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import ActionButtons from '../reusable/Buttons/Actions'
import PrimaryButton from '../reusable/Buttons/PrimaryButton'
import DataTable from '../reusable/DataTable'
import NACell from '../reusable/DataTable/NACell'

interface IDepartmentListProps {
    data: any,
    loading: boolean,
    handleDeleteDepartment:any
}

const DepartmentList: React.FC<IDepartmentListProps> = (props) => {
    const { data, loading,handleDeleteDepartment } = props

    console.log(data)
    const columns = useMemo(() => [
        {
            Header: "Department Name",
            accessor: "node.title",
            Cell: NACell
        },
        {
            Header: "Company Name",
            accessor: "node.parent.title",
            Cell: NACell
        },
        {
            Header: "Location",
            accessor: "node.address",
            Cell: NACell
        },
        {
            Header: "HOD",
            accessor: "",
            Cell: NACell
        },
        {
            Header: "Number of Employees",
            accessor: "node.noOfEmployees",
            Cell: NACell
        },
        {
            Header: "Action",
            accessor: "node.pk",
            Cell: (props: any) => {
                return (
                  <ActionButtons
                    value={props.value}
                    column={props.column}
                    row={props.row}
                    deleteFunction={handleDeleteDepartment}
                    detailPageLink={`detail/${props.value}`}
                    editPageLink={`edit/${props.row.original.node.id}`}
                  />
                )
        }}
    ], [])
    return (
        <div>
            <DataTable
                columns={columns}
                data={data}
                loading={loading}
                addButton=
                {<>
                    <Link to={"/department/create"}>
                        <PrimaryButton text="Add New" />
                    </Link>
                </>}
            />
        </div>
    )
}

export default DepartmentList
