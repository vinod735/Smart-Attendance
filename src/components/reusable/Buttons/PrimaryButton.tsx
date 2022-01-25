import React from "react";
import classNames from "../../../utils/classNames";

interface IButtonProps {
  text: string | React.ReactNode
  type?: any
  buttonType?: string

  [other: string]: unknown;
}

const PrimaryButton: React.FC<IButtonProps> = (props) => {
  const {text, type = "submit", buttonType = "primary", ...other} = props
  return (
    <button
      className={classNames(
        buttonType === "primary" ? 'bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-2 rounded shadow-lg hover:shadow-xl transition duration-200 text-center' : 'bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-2 rounded shadow-lg hover:shadow-xl transition duration-200 text-center'
      )}
      style={{minWidth: "100px"}}
      type={type}
      {...other}
    >{text}
    </button>
  )
}
export default PrimaryButton
