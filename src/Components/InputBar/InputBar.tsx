import { MapPin ,Mic ,Search } from 'lucide-react';

function InputBar() {
  return (
    <div className="w-full flex flex-col">
        <p className="text-[23px] font-medium">Search across ‘5.6 Crore+’ <span className="text-blue-500">Products & Services</span></p>
        <div className=" flex sm:flex-wrap w-[50%] relative ">
            <MapPin color='gray' size={18} className='absolute left-3 top-[15px]'/>
            <span className='absolute right-[62px] bg-black w-[32px] h-[33px] rounded-md flex justify-center items-center top-[8px]'>
                <Search color='white' size={19}/>
            </span>
            <Mic className='absolute right-[100px] top-[12px]'/>
            <input type="text" className=" border-gray-400 h-12 border-2 w-[35%]  outline-none text-[15px] ps-8 rounded-md placeholder-black" placeholder="kochi,Ernakulam"/>
            <input type="text" className="border-gray-400 h-12 border-2 w-[60%]  outline-none ms-4 rounded-md ps-2"/>
        </div>
    </div>
  )
}

export default InputBar