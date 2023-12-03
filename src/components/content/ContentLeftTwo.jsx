import {BsCollection} from 'react-icons/bs'
import {FaPlus} from 'react-icons/fa6'

const ContentLeftTwo = () =>{
    return(
        <div className="bg-zinc-900 row-span-2 rounded-md">
            <div className="flex flex-row gap-3 text-white mt-2 ml-5">
                <div className="basis-14 mt-1">
                    <BsCollection className='text-xl'/>
                </div>
                <div className="basis-28">
                    <p className="text-base font-bold">Koleksi Kamu</p>
                </div>
                <div className="basis-28 mt-0.5 flex justify-end">
                    <p className="text-xl font-bold"> <FaPlus/> </p>
                </div>
            </div>
        </div>
    )
}

export default ContentLeftTwo