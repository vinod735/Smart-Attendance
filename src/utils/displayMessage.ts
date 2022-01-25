import {toast} from "react-toastify";
import {notificationTimeOut} from "./reactTostifyNotificationTime";

interface IDisplayErrorMessageProps {
  code: string
  message: string
}

const displaySuccessMessage = (data: string) => {
  toast.success(data ? data : "Item deleted successfully",
    {autoClose: notificationTimeOut})
  return ''
}

const displayErrorMessage = (data: [IDisplayErrorMessageProps]) => {
  if (data.length){
    data.map((item:IDisplayErrorMessageProps, index:number)=>{
      toast.error(item.message, {autoClose: notificationTimeOut})
    })
  }
  return ''
}

export {displaySuccessMessage, displayErrorMessage}