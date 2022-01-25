import React from 'react';
import {INACellProps} from "../reusable/DataTable/NACell";


const CheckIn: React.FC<INACellProps> = (props) => {
  const {value} = props
  return (
    <>
      {value ? value[0].split('-')[0] : "-"}
    </>
  );
};

export default CheckIn;