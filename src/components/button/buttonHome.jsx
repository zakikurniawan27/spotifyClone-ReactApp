import {GoHome} from 'react-icons/go'
import { useNavigate } from 'react-router-dom'

const ButtonHome = () =>{
    const navigate = useNavigate()

    return(
        <div className="grid grid-cols-1.5 text-white ml-5 mt-2" onClick={() => navigate('/')}>
            <GoHome className='text-2xl cursor-pointer'/>
            <p className='text-base font-bold cursor-pointer'>Home</p>
        </div>
    )
}

export default ButtonHome