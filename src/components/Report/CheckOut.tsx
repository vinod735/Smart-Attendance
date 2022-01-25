import React from 'react';
import {INACellProps} from "../reusable/DataTable/NACell";


const CheckOut: React.FC<INACellProps> = (props) => {
  const {row} = props
  console.log()
  return (
    <>
      {row?.original?.attendance[0]?.split('-')[1] ? row?.original?.attendance[0]?.split('-')[1] : "-"}
    </>
  );
};

export default CheckOut;