import {BsCollection} from 'react-icons/bs'
import {FaPlus} from 'react-icons/fa6'

const SectionLeftTwo = () =>{
    return(
        <div className="bg-zinc-900 row-span-4 h-full rounded-md">
            <div className="flex flex-row gap-3 text-white mt-2 ml-5">
                <div className="basis-11 mt-1">
                    <BsCollection className='text-xl'/>
                </div>
                <div>
                    <p className="text-base font-bold w-[109px]">Koleksi Kamu</p>
                </div>
                <div className="basis-20 mt-0.5 flex justify-end">
                    <p className="text-xl font-bold"> <FaPlus/> </p>
                </div>
            </div>
        </div>
    )
}

export default SectionLeftTwo