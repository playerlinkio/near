import React from 'react'
import {useAtom} from "jotai";
import { NearAccount, PeopleEmail, PeopleName, PublicKey, SecretKey, SeedPhrase} from "../../../jotai";
import Link from 'next/link';
import axios from "axios";


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Phrase = () =>{
    const  [description,setName] = useAtom(PeopleName)
    const  [email,setEmail] = useAtom(PeopleEmail)
    const  [publicKey,setPublicKey] = useAtom(PublicKey)
    const  [secretKey,setSecretKey] = useAtom(SecretKey)
    const  [seedPhrase,setSeedPhrase] = useAtom(SeedPhrase)
    const  [near_address,setNear_hex_account] =useAtom(NearAccount)
    const phrase = seedPhrase.trim().split(" ")
    console.log(phrase)
    const verify =async ()=>{
        const word = (document.getElementById("#7") as HTMLInputElement).value
       if ( word == phrase[6]){
           console.log()
        const data =  await axios.post("https://api.burylove.org/api/near/generate/near_user",{
              description,email,publicKey,secretKey
           })
           setNear_hex_account(data.data)

           setPublicKey('')
           setSecretKey('')
           setSeedPhrase('')
           window.location.replace('/main')
       }else {
           alert("请重新检查助器词")
       }

    }
    return (
        <div className="relative">
            <div className="absolute inset-x-0 bottom-0"/>
            <div className=" mx-auto  ">
                <div className="max-w-7xl relative px-8 py-10   mx-auto ">
                    <div>
                        <div className="flex justify-center text-2xl font-semibold">  Verify Phrase</div>
                        <div className="flex mt-10 ">
                            <div className="border py-8 px-4 rounded-2xl border-black    mx-auto">
                                <div className="my-2   font-semibold">
                                    Enter the following word from your recovery phrase to complete the setup process.
                                </div>
                                <div className="mt-10">
                                    <div className="font-semibold mb-2">
                                        Word #7
                                    </div>
                                    <div className="flex">
                                        <input type="text"
                                               className="text-xs md:text-sm   rounded-lg p-2 py-3 w-full border-gray-700 border-2 border-r-4 border-b-4  transition duration-300  outline-none"
                                               id="#7"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center mt-10 ">
                            <button  onClick={verify} className="w-10/12 flex mt-10  justify-center rounded-full border border-transparent shadow-sm px-4 py-2 bg-blue-300 text-base font-medium text-white ">
                               Verify & Complete
                            </button>
                        </div>
                        <div className="flex justify-center  ">
                            <Link href="/phrase">
                            <a className="w-10/12 flex mt-10  justify-center rounded-full border border-transparent shadow-sm px-4 py-2 bg-blue-300 text-base font-medium text-white ">
                                restart
                            </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Phrase
