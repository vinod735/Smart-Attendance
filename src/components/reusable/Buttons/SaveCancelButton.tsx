import React from 'react';
import PrimaryButton from "./PrimaryButton";
import Spinner from "../Spinner";

interface ISaveCancelButtonProps {
  isSaveLoading: boolean,
  isCancelLoading?: boolean,
  saveOnClick: () => void,
  cancelOnClick: () => void,
}


const SaveCancelButton: React.FC<ISaveCancelButtonProps> = (props) => {
  const {isSaveLoading, isCancelLoading, saveOnClick, cancelOnClick} = props
  return (
    <div className="absolute bottom-0 w-full pl-16 -left-8">
      <div
        className={"w-full drop-shadow-md h-13 items-center justify-end flex gap-x-4 rounded-t-md px-2 py-2"}
        style={{boxShadow: "0px 1px 14px 7px rgb(114 114 114 / 64%)"}}>
        <PrimaryButton
          text={isCancelLoading ? <Spinner/> : "Cancel"}
          onClick={() => cancelOnClick()}
        />
        <PrimaryButton
          text={isSaveLoading ? <Spinner/> : "Save"}
          onClick={() => saveOnClick()}/>
      </div>
    </div>
  );
};

export default SaveCancelButton;
