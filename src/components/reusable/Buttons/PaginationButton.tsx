import classNames from "../../../utils/classNames";
import React from "react";

interface IPaginationButtonProps {
  children: React.ReactNode,
  className?: string,
  [rest: string]: unknown;
}

const PaginationButton: React.FC<IPaginationButtonProps> = (props) => {
  const {children, className, ...rest} = props
  return (
    <button
      type="button"
      className={
        classNames(
          "relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50",
          className
        )}
      {...rest}
    >
      {children}
    </button>
  )
}

export default PaginationButton