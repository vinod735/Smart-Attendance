import React from 'react';
import randomString from "../../../../utils/randomString";

interface IIndexProps {
  rows?: number
  name: string
  label: string
  initialValues: any
  touched: any
  errors: any
  setFieldValue: any
}


const Index: React.FC<IIndexProps> = (props) => {
  const {name, label, initialValues, touched, errors, setFieldValue} = props
  const id = randomString(10, "-email-field")
  const handleOnChange = (value: string) => {
    setFieldValue(name, value)
  }
  return (
    <div className="mb-6 rounded  relative">
      <input
        id={id}
        type="email" name={name}
        className="peer bg-gray-200 p-2 rounded w-full text-gray-700 focus: outline-none border-b-2 border-gray-300 focus:border-purple-600 transition duration-500"
        placeholder=" "
        value={initialValues[name]}
        onChange={(e: any) => handleOnChange(e.target.value)}
      />
      <label
        htmlFor={id}
        className="absolute left-2 -top-2.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-2.5 peer-focus:text-gray-600 peer-focus:text-sm"
      >
        {label}
      </label>
    </div>
  );
};

export default Index;
