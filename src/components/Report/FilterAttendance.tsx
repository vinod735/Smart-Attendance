import React, {useEffect, useState} from 'react';
import Card from "../reusable/Card";
import DateCell from './DateCell';

interface IFilterAttendanceProps {
  rangeDateAttendanceData: any
}

const FilterAttendance: React.FC<IFilterAttendanceProps> = (props) => {
  const {rangeDateAttendanceData} = props
  const [filterAttendanceFormat, setFilterAttendanceFormat] = useState<any>()

  useEffect(() => {
    setFilterAttendanceFormat(rangeDateAttendanceData?.body?.map((item: any) => JSON.parse(item)))
  }, [rangeDateAttendanceData])

  return (
    <>
      {rangeDateAttendanceData && <>
        <Card title={"Filter Attendance"}>
          <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Name
                      </th>
                      {rangeDateAttendanceData?.headers?.map((item: string, index: number) => (
                        <th
                          key={index}
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          {item}
                        </th>
                      ))}
                    </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                    {filterAttendanceFormat?.map((item: any, index: number) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.user_full_name}</td>
                        {item.attendance?.map((value: string, index: number) => (
                          <td key={index} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">{value? <DateCell value={value}/> :<p>A</p>}</td>
                        ))}
                      </tr>
                    ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </>}

    </>
  );
};

export default FilterAttendance;