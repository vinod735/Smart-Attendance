import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import ActionButtons from '../reusable/Buttons/Actions'
import PrimaryButton from '../reusable/Buttons/PrimaryButton'
import DataTable from '../reusable/DataTable'
import NACell from '../reusable/DataTable/NACell'

interface IEmployeeListProps {
  data: any,
  loading: boolean
}

const EmployeeList: React.FC<IEmployeeListProps> = (props) => {
  const { data, loading } = props
  console.log(data)

  const columns = useMemo(() => [
    {
      Header: "Full Name",
      accessor: "node.user.profile.firstName",
      Cell: NACell
    },
    {
      Header: "Company",
      accessor: "node.company.parent.parent.title",
      Cell: NACell
    },
    {
      Header: "Department",
      accessor: "node.company.parent.title",
      Cell: NACell

    },
    {
      Header: "Shift",
      accessor: "node.company.title",
      Cell: NACell
    },
    {
      Header: "Designation",
      accessor: "node.jobTitle.title",
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
            detailPageLink={`detail/${props.row.original.node.id}`}
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
        addButton={
          <>
            <Link to={"/employee/create"}>
              <PrimaryButton text={"Add New"} />
            </Link>
          </>
        } />
    </>
  )
}

export default EmployeeList
