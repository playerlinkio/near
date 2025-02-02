import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';
import { useAtom } from 'jotai';
import { LoadingState } from '../../jotai';


const Loading =()=>{
  const [openload,setOpenload]=useAtom(LoadingState)
  function alwaystrue(){
    return false
  }
  return(
    <div>
      <Transition.Root show={openload} as={Fragment}>
        <Dialog as="div" className="fixed z-20 inset-0 overflow-y-auto "  onClose={alwaystrue}>
          <div className="flex items-center justify-center min-h-screen     text-center ">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;
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
              <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                <div>
                  <div className="mx-auto flex items-center justify-center h-12 animate-spin w-12 text-5xl ">
                    <i className="fa fa-spinner" aria-hidden="true"></i>

                  </div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title as="h3" className=" text-lg leading-6 font-medium text-gray-900">
                      Loading.......
                    </Dialog.Title>
                    <div className="mt-2">
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6">
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  )
}
export default Loading
