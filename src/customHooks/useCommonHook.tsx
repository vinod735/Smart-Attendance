import React, {useState} from 'react';

interface IConfirmDialogProps {
  isOpen: boolean,
  title?: string,
  subTitle: string
}

const UseCommonStateHook = () => {
  const [openAddPopup, setOpenAddPopup] = useState<boolean>(false);
  const [openEditPopup, setOpenEditPopup] = useState<boolean>(false);
  const [successSnackbar, setSuccessSnackbar] = useState<boolean>(false);
  const [errorSnackBar, setErrorSnackBar,] = useState<boolean>(false);
  const [confirmDialog, setConfirmDialog] = useState<IConfirmDialogProps>({
    isOpen: false,
    title: '',
    subTitle: ''
  })
  const [removeSuccessSnackBar, setRemoveSuccessSnackBar] = useState<boolean>(false)
  const [updateSuccessSnackBar, setUpdateSuccessSnackBar] = useState<boolean>(false)
  return {
    openAddPopup, setOpenAddPopup,
    openEditPopup, setOpenEditPopup,
    successSnackbar, setSuccessSnackbar,
    errorSnackBar, setErrorSnackBar,
    confirmDialog, setConfirmDialog,
    removeSuccessSnackBar, setRemoveSuccessSnackBar,
    updateSuccessSnackBar, setUpdateSuccessSnackBar
  };
};

export default UseCommonStateHook;
