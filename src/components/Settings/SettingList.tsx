import React from 'react';
import DataTable from "../reusable/DataTable";
import {Link} from "react-router-dom";
import PrimaryButton from "../reusable/Buttons/PrimaryButton";
import NACell from "../reusable/DataTable/NACell";
import ActionButtons from "../reusable/Buttons/Actions";

interface ISettingListProps {
  data: any,
  loading: boolean,
  handleDeleteSetting:any
}


const SettingList: React.FC<ISettingListProps> = (props) => {
  const {data, loading, handleDeleteSetting} = props

  const columns = React.useMemo(() => [
    {
      Header: "Company",
      accessor: 'node.company.parent.parent.title',
      Cell: NACell
    },
    {
      Header: "Department",
      accessor: 'node.company.parent.title',
      Cell: NACell
    },
    {
      Header: "Shift",
      accessor: 'node.company.title',
      Cell: NACell
    },
    {
      Header: "Action",
      accessor: 'node.pk',
      Cell: (props: any) => {
        return (
          <ActionButtons
            column={props.column}
            value={props.value}
            row={props.row}
            deleteFunction={handleDeleteSetting}
            detailPageLink={`detail/${props.value}`}
            editPageLink={`edit/${props.row.original.node.id}`}
          />
        );
      }
    }
  ], [])


  return (
    <>
      <DataTable
        loading={loading}
        columns={columns}
        data={data}
        addButton={<>
          <Link to={"/setting/create"}>
            <PrimaryButton text={"Add New"}/>
          </Link>
        </>}
      />
    </>
  );
};

export default SettingList;