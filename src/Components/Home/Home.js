import React, { useRef} from 'react';
import bell from '../../images/bell.png'
import logo from '../../images/Logo.png'
import { BsSearch } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';

const Home = ({searchValue, setSearchValue}) => {
    const handleClick = (e) => {
        e.preventDefault();
        
       setSearchValue(' ')
      }
    const inputVal = useRef(null)
    return (
        
        <div className='text-2xl font-semibold sticky top-0'>
            <form>
            <div className="relative w-full">
                
                {searchValue ? <AiOutlineClose onClick={() => setSearchValue(()=>"")} className="cursor-pointer absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"></AiOutlineClose> : <BsSearch className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"></BsSearch>}
                <input
                ref={inputVal}
                
                    type="search"
                    placeholder="Search by account name or website"
                    className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-gray-400"
                    onChange={(e) => setSearchValue(e.target.value)}
                />
                <div className='flex absolute right-3 top-4'>
                    <img className='mr-2 p-2 bg-gray-300 w-7' src={bell} alt="" />
                    <img  src={logo} alt="" />
                </div>
                
            </div>
        </form>
        </div>
        
        
    );
};

export default Home;