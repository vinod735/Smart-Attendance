import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import ActionButtons from '../reusable/Buttons/Actions'
import PrimaryButton from '../reusable/Buttons/PrimaryButton'
import DataTable from '../reusable/DataTable'
import NACell from '../reusable/DataTable/NACell'

interface IDesignationListProps {
    data: any,
    loading: boolean,
    handleDeleteDesignation:any
}

const DesignationList: React.FC<IDesignationListProps> = (props) => {
    const { data, loading ,handleDeleteDesignation} = props

    const columns = useMemo(() => [
        {
            Header: "Title",
            accessor: "node.title",
            Cell: NACell
        },
        {
            Header: "Description",
            accessor: "node.note",
            Cell: NACell
        },
        {
            Header: "Action",
            accessor:"node.pk",
            Cell: (props: any) => {
                return (
                  <ActionButtons
                    value={props.value}
                    column={props.column}
                    row={props.row}
                    deleteFunction={handleDeleteDesignation}
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
                addButton={
                    <>
                        <Link to={"/designation/create"}>
                            <PrimaryButton text={"Add New"} />
                        </Link>
                    </>
                } />
        </div>
    )
}

export default DesignationList;
