import {Fragment, useRef} from 'react'
import {Dialog, Transition} from '@headlessui/react'
import {TrashIcon} from '@heroicons/react/outline'

import React from 'react';
import PrimaryButton from "../Buttons/PrimaryButton";

interface IConfirmDialogProps {
  open: boolean | undefined,
  setOpen: any,
  children: React.ReactNode,
  handleDelete?: () => void
}


const ConfirmDialog: React.FC<IConfirmDialogProps> = (props) => {
  const {open, setOpen, children, handleDelete} = props

  const cancelButtonRef = useRef(null)
  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          static
          className="fixed z-10 inset-0 overflow-y-auto"
          initialFocus={cancelButtonRef}
          open={open}
          onClose={setOpen}
        >
          <div
            className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay
                className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"/>
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"
                  aria-hidden="true">
            &#8203;
          </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div
                className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                <div>
                  <div
                    className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
                    <TrashIcon className="h-6 w-6 text-red-600"
                               aria-hidden="true"/>
                  </div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title as="h3"
                                  className="text-lg leading-6 font-medium text-gray-900">

                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        {children}
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="flex mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                  <PrimaryButton text={"Yes"} type={"button"} onClick={handleDelete}/>
                  <PrimaryButton buttonType={"danger"} text={"Cancel"} type={"button"} onClick={() => setOpen(false)}/>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default ConfirmDialog;
