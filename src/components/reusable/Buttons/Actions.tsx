import React, {useState} from 'react';
import {TrashIcon, PencilAltIcon, EyeIcon} from '@heroicons/react/solid'
import {Link} from "react-router-dom";
import ConfirmDialog from "../ConfirmDialog";
import {toast} from "react-toastify";

interface IActionButtonsProps {
  editPageLink?: string,
  detailPageLink?: string,
  value: any,
  column: any,
  row: any,
  deleteFunction?: any
}


const ActionButtons: React.FC<IActionButtonsProps> = (props) => {
  const {detailPageLink, editPageLink, deleteFunction, value} = props
  const [openConfirmDialog, setOpenConfirmDialog] = useState<boolean>(false)

  const handleDelete = () => {
    deleteFunction && deleteFunction(value)
    setOpenConfirmDialog(false)
  }


  return (
    <>
      <div className={"flex justify-around"}>
        <TrashIcon className={"h-6 w-6 text-red-700 cursor-pointer"} onClick={() => setOpenConfirmDialog(true)}/>
        <Link to={editPageLink ? editPageLink : "#"}>
          <PencilAltIcon className={"h-6 w-6 text-yellow-700 cursor-pointer"}/>
        </Link>
        <Link to={detailPageLink ? detailPageLink : "#"}>
          <EyeIcon className={"h-6 w-6 text-green-700 cursor-pointer"}/>
        </Link>
      </div>
      <ConfirmDialog
        open={openConfirmDialog}
        setOpen={setOpenConfirmDialog}
        handleDelete={handleDelete}
      >
        Are you sure you want to delete this item?
      </ConfirmDialog>
    </>

  );
};

export default ActionButtons;