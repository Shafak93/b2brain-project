import React, { useEffect, useState } from 'react';
import {v4 as uuid} from 'uuid'

const Dashboard = ({searchValue}) => {
    
    const [products, setProducts] = useState([])
    useEffect(()=>{
        const fetchData = async ()=>{
            try {
                const res = await fetch('https://tva.staging.b2brain.com/search/autocomplete_org_all/');
                const jsonres = await res.json();
                const items = jsonres.map(item=>({...item, rowId:uuid()}))
                setProducts(items)
            } catch (err) {
                console.log(err.message)
            }
        }
        fetchData()
    },[])
    return (
        <div className='grid lg:grid-cols-3 p-6'>
           {
            
            products.filter(product => product.company.toLowerCase().includes(searchValue)).map(product => 
                <div key={product.rowId} className='flex justify-between p-4'>
                <div className='flex my-5'>
                    <div className=' mr-4 '>
                        {
                            product.logo === '' ? <p className='flex justify-center items-center text-5xl text-white 
                            bg-red-600 border rounded-lg hover:border-red-600 hover:bg-white hover:text-red-600 w-20 h-20'>{Array.from(product.company)[0]}</p> : <img className='w-full' src={product.logo} alt="" />
                        }
                    
                    </div>
                    <div>
                    <p className='font-bold text-sm'>{product.company}</p>
                        <p className='text-sm'>{product.slug}</p>
                        
                        <p className='text-xs text-gray-400'>{product.website}</p>
                    </div>
                    
                </div>
                <div className='my-auto ml-2'>
                <button className='border border-red-600 px-4 py-1 text-red-600 rounded-md font-semibold hover:bg-red-600 hover:text-white'>Track</button>
                </div>
            </div>
                )
           }
        </div>
    );
};

export default Dashboard;

