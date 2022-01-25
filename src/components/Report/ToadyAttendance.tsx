import React, {useEffect, useMemo, useState} from "react";
import DataTable from '../reusable/DataTable'
import NACell from '../reusable/DataTable/NACell'
import CheckIn from "./CheckIn";
import CheckOut from "./CheckOut";

interface ITodayAttendance {
  attendances: any
}

const TodayAttendance: React.FC<ITodayAttendance> = (props) => {
  const {attendances} = props
  const [todayAttendanceFormat, setTodayAttendanceFormat] = useState<any>()

  useEffect(() => {
    setTodayAttendanceFormat(attendances?.body?.map((item: any) => JSON.parse(item)))
  }, [attendances])


  const columns = useMemo(() => [
    {
      Header: "Name of Employee",
      accessor: "user_full_name",
      Cell: NACell
    },
    {
      Header: "Company",
      accessor: "company",
      Cell: NACell
    },
    {
      Header: "Department",
      accessor: "department",
      Cell: NACell
    },
    {
      Header: "shift",
      accessor: "shift",
      Cell: NACell

    },
    {
      Header: "Designation",
      accessor: "designation",
      Cell: NACell
    },
    {
      Header: "IN",
      accessor: "attendance",
      Cell: CheckIn
    },
    {
      Header: "OUT",
      accessor: "user_id",
      Cell: CheckOut
    },
  ], [])

  return (
    <>
      {todayAttendanceFormat && <DataTable
        columns={columns}
        data={todayAttendanceFormat}
        loading={false}
        addButton={null}
      />}

    </>
  )
}
export default TodayAttendance;