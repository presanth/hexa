
import { Star, MapPin, Phone, ThumbsUp, Heart } from 'lucide-react';
import './page.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link,useParams } from 'react-router-dom';

function ProductDisplay() {
    let params = useParams();
    const [collection,setCollection] = useState([])
    const fetchData = async ()=>{
        const data = await axios.get('http://localhost:8000/clone/findData/'+params.cid)
        console.log(data.data);
        const result = data.data;
        setCollection(result)
        // console.log(collection);
        
        
    }
    useEffect(()=>{
        fetchData()
    },[])
  return (
    <div className='w-[100%] flex flex-col'>
        <div className='w-full bg-gray-400 h-36 text-center text-lg font-bold'>ADS</div>
        <div className='w-full flex  pl-3 mt-2 gap-2'>
            <Link to={'/private'} className='product-card w-[70%] flex flex-col gap-3'>
                {collection?.map((data,key)=>(
                    <div className=' flex px-[1.5rem] py-[1.5rem] border border-gray-300 rounded-lg gap-3 '>
                        <div className='w-[200px] h-[200px]  '>
                            <img src={`/images/${data.image}`} className='h-full w-full rounded-md'  alt="" />
                        </div>
                        <div className='flex flex-col w-[80%]'>
                            <ul>
                                <li className=' w- font-medium text-[22px] flex items-center gap-2' key={key}><span className='bg-gray-600 p-1  rounded-md'><ThumbsUp size={21} color='black'/></span>{data.name} <Heart size={24} color='gray' className='ml-auto'/></li>
                                <li className='flex items-center mt-4'> 
                                    <p className='py-[1px] px-[10px] mr-1 text-white rounded-md text-[17px] font-bold bg-green-600'>{data.rating}</p>
                                    <Star size={18} color='orange' fill='orange'/>
                                    <Star size={18} color='orange' fill='orange'/>
                                    <Star size={18} color='orange' fill='orange'/>
                                    <Star size={18} color='orange' fill='orange'/>
                                    <Star size={18} color='orange' fill='orange'/>
                                </li>
                                <li className='flex gap-2 items-center mt-3 text-[16px] capitalize'><MapPin size={18}/>{data.Address}</li>
                                <li className='flex gap-3 items-center mt-4'>
                                    <button className='dummy-trans px-[10px] py-[6px] h-8 text-center w-auto bg-green-600 flex items-center gap-2 text-white text-[15px] font-medium border-none outline-none rounded-md'> <Phone size={18} fill='white' color='white' className='phoen'/>{data.mobilenumber}</button>
                                    <button className='px-[10px] py-[6px] h-8  min-w-[100px] bg-blue-500 flex items-center justify-center capitalize  text-white text-[15px] font-medium border-none outline-none rounded-md'>Get best deal</button>
                                    <button className=' flex items-center h-8 overflow-hidden py-1 px-2 gap-2 border border-gray-300 rounded-sm text-[18px] font-medium font-sans'> <img src="/icon/download.jpg" className='w-7 h-7' alt="" />Chat</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                ))}
            </Link>
            <div className='w-1/2'>
                <div className='sticky top-0 bg-gray-400 w-full  text-center text-lg font-bold'>
                    ADS
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default ProductDisplay