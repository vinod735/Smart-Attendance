import React, {useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker.css";


// const DateField: React.FC<any> = () => {
//   const [startDate, setStartDate] = useState(new Date());
//   return (
//     <div>
//       <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
//     </div>
//   )
// }

// export default DateField;

const DateField = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker className="bg-sky-600 text-white w-28 h-8 text-center" selected={startDate} onChange={(date:any) => setStartDate(date)} />
    
  );
  
}
export default DateField;