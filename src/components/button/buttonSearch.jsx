import { CiSearch } from 'react-icons/ci'
import { useNavigate } from 'react-router-dom'

const ButtonSearch = () => {

    const navigate = useNavigate()
    return (
        <div className="grid grid-cols-1.5 text-white ml-5" onClick={() => navigate('/search')}>
            <CiSearch className='text-2xl font-black cursor-pointer'/>
            <p className="text-base font-bold cursor-pointer">Search</p>
        </div>
    )
}

export default ButtonSearch