import React, {Fragment, useState} from 'react'
import Link from "next/link";
import Wallet from "../../components/wallet";
import {PetStyle} from "../../constant";
import {Dialog, Transition} from "@headlessui/react";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const Detail = () =>{
    const [openLevel,setOpenLevel] = useState(false)
    const [openRepair,setOpenRepair] = useState(false)
    const [openSell,setOpenSell] = useState(false)
    const [openSellPrice,setOpenSellPrice] = useState(false)
    const [openTransfer,setOpenTransfer] = useState(false)
    const Attributes = [
        {
            name:"智力值"
        },
        {
            name:"魅力值"
        },
        {
            name:"健康值"
        },
        {
            name:"幸运值"
        },

    ]
    const minted = [
        {
            type:"Uncommon",
            img:"/1.png",
            index:"123123",

        },
        {
            type:"Rare",
            img:"/1.png",
            index:"1233",

        },

    ]
    const mints = [
        {
            type:"Uncommon",
            img:"/1.png",
            index:"123123",

        },
        {
            type:"Rare",
            img:"/1.png",
            index:"12123",
        },

    ]
    return (
        <div className="relative">
            <div className="absolute inset-x-0 bottom-0    " />
            <div className=" mx-auto  ">
                <div className="fixed z-20 inset-x-0 flex justify-between px-5 mx-auto ">
                    <Link href="/main">
                        <div className="text-2xl text-gray-600 ">
                            <i className="fa fa-reply" aria-hidden="true"></i>
                        </div>
                    </Link>
                    <Wallet/>
                </div>
                <div className="max-w-7xl relative px-8 pt-20 py-10   mx-auto ">
                    <div className="border border-gray-500 rounded-2xl">
                        <div className="mt-20 mx-14 border border-gray-500 rounded-2xl p-5">
                            <img className="w-36 mx-auto" src="/1.png" alt=""/>
                        </div>
                        <div className="flex justify-between my-10 items-center px-4 text-sm">
                            <div className="border rounded-full px-2 py-1 bg-gray-200">
                                Common
                            </div>
                            <div className="border rounded-full px-2 py-1 bg-gray-200">
                                # 12345567
                            </div>
                            <div className="w-24 bg-gray-200 h-4 rounded-full">
                                <div className="bg-green-500 h-4 rounded-full" style={{width:'50%'}}></div>
                            </div>

                        </div>
                        <div className="mx-4 mb-10" >
                            <div className="flex justify-center text-xl font-semibold">
                                Attributes
                            </div>
                            <div className="grid grid-cols-1 gap-4 text-center mt-10">
                                {Attributes.map((item=>(
                                    <div key={item.name} className="">
                                        <div className="flex items-center text-xs">
                                            <div>
                                                {item.name}
                                            </div>
                                            <div className="ml-6 border h-2 w-8/12 rounded-full">

                                            </div>
                                        </div>
                                    </div>
                                )))}

                            </div>
                        </div>
                    </div>

                </div>
                <div className="px-8 pb-32">
                    <div>
                        <div className="text-black text-2xl font-semibold">
                            Minted form
                        </div>
                        <div className="flex grid grid-cols-2 gap-10 mt-5">
                            {minted.map((item=>(
                                <div key={item.index} className=" rounded-2xl   text-center border border-gray-500 border-2 border-b-4 border-r-4">
                                    <div className=" px-4  border-gray-500">
                                        <div className="flex justify-center items-center">
                                            <div className={classNames(PetStyle[item.type],'rounded-b-xl w-5/6 ')}>
                                                #{item.index}
                                            </div>
                                        </div>
                                        <img className="mx-auto py-6   w-24" src={item.img} alt=""/>
                                    </div>
                                </div>
                            )))}
                        </div>
                    </div>
                    <div className="mt-10">
                        <div className="text-black text-2xl font-semibold">
                            Mints
                        </div>
                        <div className="flex grid grid-cols-2 gap-10 mt-5">
                            {mints.map((item=>(
                                <div key={item.index} className=" rounded-2xl   text-center border border-gray-500 border-2 border-b-4 border-r-4">
                                    <div className=" px-4  border-gray-500">
                                        <div className="flex justify-center items-center">
                                            <div className={classNames(PetStyle[item.type],'rounded-b-xl w-5/6 ')}>
                                                #{item.index}
                                            </div>
                                        </div>
                                        <img className="mx-auto py-2 py-6  w-24" src={item.img} alt=""/>
                                    </div>
                                </div>
                            )))}
                        </div>
                    </div>

                </div>

                <div className=" fixed z-20 bottom-0 w-full mx-auto">
                    <div className="flex justify-between w-full bg-white px-4 pb-4 p-2 border-t-2 border-blue-300 rounded-t-3xl">
                        <button className="" onClick={()=>{setOpenLevel(true)}}>
                            <div className="text-2xl text-blue-300">
                                <i className="fa fa-level-up " aria-hidden="true"></i>
                            </div>
                            <div className="text-xs">Level up</div>
                        </button>

                        <button className="" onClick={()=>{setOpenRepair(true)}}>
                            <div className="text-2xl text-blue-300">
                                <i className="fa fa-wrench" aria-hidden="true"></i>
                            </div>
                            <div className="text-xs">Repair</div>
                        </button>

                        <Link href="/mint">
                            <a>
                                <div className="text-2xl text-blue-300">
                                    <i className="fa fa-heart" aria-hidden="true"></i>
                                </div>
                                <div className="text-xs">Mint</div>
                            </a>
                        </Link>

                        <button className="" onClick={()=>{setOpenSell(true)}}>
                            <div className="text-2xl text-blue-300">
                                <i className="fa fa-tags" aria-hidden="true"></i>
                            </div>
                            <div className="text-xs">Sell</div>
                        </button>

                        <button className="">
                            <div className="text-2xl text-blue-300">
                                <i className="fa fa-calendar-check-o" aria-hidden="true"></i>
                            </div>
                            <div className="text-xs">Lease</div>
                        </button>

                        <button className=""onClick={()=>{setOpenTransfer(true)}} >
                            <div className="text-2xl  text-blue-300">
                                <i className="fa fa-refresh" aria-hidden="true"></i>
                            </div>
                            <div className="text-xs">Transfer</div>
                        </button>


                    </div>
                </div>
            </div>
            <Transition.Root show={openLevel} as={Fragment}>
                <Dialog as="div" className="fixed z-20 inset-0 overflow-y-auto "  onClose={setOpenLevel}>
                    <div className="flex items-center justify-center min-h-screen -mt-20  px-4  text-center ">
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
                                    <div className="flex justify-end text-xl w-72"><button onClick={()=>{setOpenLevel(false)}} >
                                        <i className="fa fa-times" aria-hidden="true"></i>
                                    </button></div>
                                    <div className=" text-center ">
                                        <div className="font-semibold">
                                            LEVEL UP
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-5 ">
                                    <div className="flex justify-center">
                                        <img className="w-36 " src="/1.png" alt=""/>
                                    </div>
                                    <div className="flex justify-center mt-2 font-semibold text-md">
                                        Lv 9
                                    </div>
                                    <div className="flex text-gray-500 text-md mt-4">
                                        Level up to
                                        <div className="ml-1 text-black font-semibold text-md">
                                            Lv 10
                                        </div>
                                    </div>
                                    <div className="flex mt-2 justify-between border border-gray-500 bg-gray-100 rounded-full px-2 py-1">
                                        <div className=" text-gray-500"> Cost</div>
                                        <div className="font-semibold">
                                            30GST+30GMT

                                        </div>
                                    </div>
                                    <div className="flex mt-2 justify-between border border-gray-500 bg-gray-100 rounded-full px-2 py-1">
                                        <div className=" text-gray-500"> Time</div>
                                        <div className="font-semibold">
                                            600 mins
                                        </div>
                                    </div>

                                    <div className="flex justify-between">
                                        <button
                                            onClick={()=>{setOpenLevel(false)}}
                                            type="button"
                                            className="w-36 flex mt-5 mr-2  justify-center rounded-full border border-gray-500 border-b-4 border-r-4 shadow-sm px-4 py-2  text-base font-medium text-black  "
                                        >
                                            CANCEL
                                        </button>
                                        <button
                                            type="button"
                                            className="w-36 flex mt-5  justify-center rounded-full border border-gray-600 border-b-4 border-r-4  shadow-sm px-4 py-2 bg-blue-300 text-base font-medium text-white "
                                        >
                                            CONFIRM
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
            <Transition.Root show={openRepair} as={Fragment}>
                <Dialog as="div" className="fixed z-20 inset-0 overflow-y-auto "  onClose={setOpenRepair}>
                    <div className="flex items-center justify-center min-h-screen -mt-20  px-4  text-center ">
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
                                    <div className="flex justify-end text-xl w-72"><button onClick={()=>{setOpenRepair(false)}} >
                                        <i className="fa fa-times" aria-hidden="true"></i>
                                    </button></div>
                                    <div className=" text-center ">
                                        <div className="font-semibold">
                                            REPAIR
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-5 ">
                                    <div className="flex justify-center">
                                        <img className="w-36 " src="/1.png" alt=""/>
                                    </div>
                                    <div className="flex justify-center mt-2 font-semibold text-md">
                                        Durability:100/100
                                    </div>
                                    <div className="relative pt-1">
                                        <div className="range">
                                            <input type="range" className="form-range w-full" min="40" max="100" step="1" id="customRange2"/>
                                        </div>
                                    </div>
                                    <div className="flex mt-2 justify-between border border-gray-500 bg-gray-100 rounded-full px-2 py-1">
                                        <div className=" text-gray-500"> Cost</div>
                                        <div className="font-semibold">
                                            0 GST
                                        </div>
                                    </div>

                                    <div className="flex justify-between">
                                        <button
                                            onClick={()=>{setOpenRepair(false)}}
                                            type="button"
                                            className="w-36 flex mt-5 mr-2  justify-center rounded-full border border-gray-500 border-b-4 border-r-4 shadow-sm px-4 py-2  text-base font-medium text-black  "
                                        >
                                            CANCEL
                                        </button>
                                        <button
                                            type="button"
                                            className="w-36 flex mt-5  justify-center rounded-full border border-gray-600 border-b-4 border-r-4  shadow-sm px-4 py-2 bg-blue-300 text-base font-medium text-white "
                                        >
                                            CONFIRM
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
            <Transition.Root show={openSell} as={Fragment}>
                <Dialog as="div" className="fixed z-20 inset-0 overflow-y-auto "  onClose={setOpenSell}>
                    <div className="flex items-center justify-center min-h-screen -mt-20  px-4  text-center ">
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
                                    <div className="flex justify-end text-xl w-72"><button onClick={()=>{setOpenSell(false)}} >
                                        <i className="fa fa-times" aria-hidden="true"></i>
                                    </button></div>
                                    <div className=" text-center ">
                                        <div className="font-semibold">
                                            SELL
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-5 ">
                                    <div className="flex justify-center">
                                        <img className="w-28 " src="/1.png" alt=""/>
                                    </div>
                                    <div className="text-sm  mt-2 flex justify-center  items-center">
                                        <div className={classNames(PetStyle.Uncommon,"rounded-full px-1.5 py-0.5")}>
                                            #1234
                                        </div>
                                    </div>
                                    <div className="border border-gray-500 rounded-xl mt-6 text-gray-400 text-xs px-4 py-4 grid grid-cols-2 ">
                                        <div className="mb-6">
                                            Class
                                            <div className="text-black font-semibold text-sm">
                                                Uncommon
                                            </div>
                                        </div>
                                        <div className="pl-10">
                                            Level
                                            <div className="text-black font-semibold text-sm">
                                                9
                                            </div>
                                        </div>
                                        <div>
                                            Durability
                                            <div className="text-black font-semibold text-sm">
                                                60/100
                                            </div>
                                        </div>
                                        <div className="pl-10">
                                            Shoe mint
                                            <div className="text-black font-semibold text-sm">
                                                2/7
                                            </div>
                                        </div>

                                    </div>


                                    <div className="flex justify-between">
                                        <button
                                            onClick={()=>{setOpenSell(false)}}
                                            type="button"
                                            className="w-36 flex mt-5 mr-2  justify-center rounded-full border border-gray-500 border-b-4 border-r-4 shadow-sm px-4 py-2  text-base font-medium text-black  "
                                        >
                                            CANCEL
                                        </button>
                                        <button
                                            type="button"
                                            onClick={()=>{setOpenSellPrice(true);setOpenSell(false)}}
                                            className="w-36 flex mt-5  justify-center rounded-full border border-gray-600 border-b-4 border-r-4  shadow-sm px-4 py-2 bg-blue-300 text-base font-medium text-white "
                                        >
                                            NEXT
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
            <Transition.Root show={openSellPrice} as={Fragment}>
                <Dialog as="div" className="fixed z-20 inset-0 overflow-y-auto "  onClose={setOpenSellPrice}>
                    <div className="flex items-center justify-center min-h-screen -mt-20  px-4  text-center ">
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
                                    <div className="flex justify-end text-xl w-72"><button onClick={()=>{setOpenSellPrice(false)}} >
                                        <i className="fa fa-times" aria-hidden="true"></i>
                                    </button></div>
                                    <div className=" text-center ">
                                        <div className="font-semibold">
                                            SELL
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-5 ">
                                    <div className="flex justify-center">
                                        <img className="w-28 " src="/1.png" alt=""/>
                                    </div>
                                    <div className="text-sm  mt-2 flex justify-center  items-center">
                                        <div className={classNames(PetStyle.Uncommon,"rounded-full px-1.5 py-0.5")}>
                                            #1234
                                        </div>
                                    </div>
                                    <div className="block text-sm font-medium text-gray-700 mt-5 mb-2 ">Selling price</div>
                                    <div className="flex">
                                        <input type="text"
                                               className="text-xs md:text-sm   rounded-lg p-2 py-3 w-full border-gray-700 border border-2 border-b-4 border-r-4  focus:border-blue-500 transition duration-300  outline-none"
                                               id="amount"
                                        />
                                        <div  className="-ml-12 text-sm flex items-center ">
                                            NEAR
                                        </div></div>

                                    <div className="flex justify-between">
                                        <button
                                            onClick={()=>{setOpenSellPrice(false)}}
                                            type="button"
                                            className="w-36 flex mt-5 mr-2  justify-center rounded-full border border-gray-500 border-b-4 border-r-4 shadow-sm px-4 py-2  text-base font-medium text-black  "
                                        >
                                            CANCEL
                                        </button>
                                        <button
                                            type="button"
                                            className="w-36 flex mt-5  justify-center rounded-full border border-gray-600 border-b-4 border-r-4  shadow-sm px-4 py-2 bg-blue-300 text-base font-medium text-white "
                                        >
                                            CONFIRM
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
            <Transition.Root show={openTransfer} as={Fragment}>
                <Dialog as="div" className="fixed z-20 inset-0 overflow-y-auto "  onClose={setOpenTransfer}>
                    <div className="flex items-center justify-center min-h-screen -mt-20  px-4  text-center ">
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
                                    <div className="flex justify-end text-xl w-72"><button onClick={()=>{setOpenTransfer(false)}} >
                                        <i className="fa fa-times" aria-hidden="true"></i>
                                    </button></div>
                                    <div className="  flex items-center justify-center font">
                                        <div className="text-yellow-400 ">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas"
                                                 data-icon="exclamation-triangle" className="w-4 h-4 mr-2 fill-current"
                                                 role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                <path fill="currentColor"
                                                      d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"></path>
                                            </svg>
                                        </div>
                                        <div className="font-semibold">
                                            WARNING
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-5 px-3 text-sm text-gray-800 text-center">
                                    <div>
                                        This transaction will lower your Energy
                                        Cap, proceed and your unopened Mystery
                                        Box will be purged. Continue?
                                    </div>

                                    <div className="flex justify-between">
                                        <button
                                            onClick={()=>{setOpenTransfer(false)}}
                                            type="button"
                                            className="w-36 flex mt-5 mr-2  justify-center rounded-full border border-gray-500 border-b-4 border-r-4 shadow-sm px-4 py-2  text-base font-medium text-black  "
                                        >
                                            CANCEL
                                        </button>
                                        <button
                                            type="button"
                                            className="w-36 flex mt-5  justify-center rounded-full border border-gray-600 border-b-4 border-r-4  shadow-sm px-4 py-2 bg-blue-300 text-base font-medium text-white "
                                        >
                                            CONFIRM
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
        </div>
    )
}

export default Detail
