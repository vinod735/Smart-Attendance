import React from 'react';

export interface INACellProps {
  value: any,
  column: any,
  row: any
}


const NACell: React.FC<INACellProps> = (props) => {
  const {value, column, row} = props
  return (
    <>
      {value ? value : "N/A"}
    </>
  );
};

export default NACell;