import {toast} from "react-toastify";
import {notificationTimeOut} from "./reactTostifyNotificationTime";

export const backendErrorDisplay = (errors: any) => {
  const errorList: any = {}
  for (const error in errors) {
    errorList[error] = errors[error]?.map((item:any)=>item.message)
  }
  toast.error("Invalid form", {autoClose: notificationTimeOut})
  return errorList
}