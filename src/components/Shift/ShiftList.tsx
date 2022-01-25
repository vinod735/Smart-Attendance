import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import ActionButtons from '../reusable/Buttons/Actions'
import PrimaryButton from '../reusable/Buttons/PrimaryButton'
import DataTable from '../reusable/DataTable'
import NACell from '../reusable/DataTable/NACell'

interface IShiftListProps {
    data: any,
    loading: boolean,
    handleDeleteShift:any
}


const ShiftList: React.FC<IShiftListProps> = (props) => {

    const { data, loading,handleDeleteShift } = props

    const columns = useMemo(() => [
        {
            Header: "Shift Name",
            accessor: "node.title",
            Cell: NACell
        },
        {
            Header: "Company",
            accessor: "node.parent.parent.title",
            Cell: NACell
        },
      {
            Header: "Department",
            accessor: "node.parent.title",
            Cell: NACell
        },
        {
            Header: "Starting Time",
            accessor: "node.startTime",
            Cell: NACell
        }, 
        {
            Header: "Ending Time",
            accessor: "node.endTime",
            Cell: NACell
        },
        {
            Header:"Action",
            accessor:"node.pk",
            Cell: (props: any) => {
                return (
                  <ActionButtons
                    value={props.value}
                    column={props.column}
                    row={props.row}
                    deleteFunction={handleDeleteShift}
                    detailPageLink={`detail/${props.value}`}
                    editPageLink={`edit/${props.row.original.node.id}`}
                  />
                )
            }
        }
    ], [])

    return (
        <>
            <DataTable
                columns={columns}
                data={data}
                loading={loading}
                addButton=
                {<>
                    <Link to={"/shift/create"}>
                        <PrimaryButton text="Add New" />
                    </Link>
                </>}
            />
        </>
    )
}

export default ShiftList

