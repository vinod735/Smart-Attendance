import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import ActionButtons from '../reusable/Buttons/Actions'
import PrimaryButton from '../reusable/Buttons/PrimaryButton'
import DataTable from '../reusable/DataTable'
import NACell from '../reusable/DataTable/NACell'

interface ICompanyListProps {
  data: any,
  loading: boolean,
  handleDeleteCompany:any
}

const CompanyList: React.FC<ICompanyListProps> = (props) => {
  const { data, loading,handleDeleteCompany} = props

  const columns = useMemo(() => [
    {
      Header: "Company Name",
      accessor: "node.title",
      Cell: NACell
    },
    {
      Header: "Address",
      accessor: "node.address",
      Cell: NACell
    },
    {
      Header: "Country",
      accessor: "node.country",
      Cell: NACell
    },
    {
      Header: "City",
      accessor: "node.city",
      Cell: NACell

    },
    {
      Header: "Postal Code",
      accessor: "node.postalCode",
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
            deleteFunction={handleDeleteCompany}
            detailPageLink={`detail/${props.value}`}
            editPageLink={`edit/${props.row?.original?.node?.id}`}
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
            <Link to={"/company/create"}>
              <PrimaryButton text={"Add New"} />
            </Link>
          </>
        } />
    </>
  )
}

export default CompanyList