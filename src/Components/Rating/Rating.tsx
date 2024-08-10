
import { Star } from 'lucide-react';
function Rating() {
  return (
    <div className="w-[350px]">
        <div className="w-full flex gap-2">
            <div className=' flex w-[130px] h-[130px] rounded-md'>
                <img src="/images/Caterers.jpg" className='w-[100%]' alt="" />
            </div>
            <div className='flex flex-col'>
                <p className='text-[16px] font-medium'>Vivek Provision</p>
                
                    <ul className='flex items-center gap-1 mt-2'>
                        <li className='bg-green-600 text-white p-[2px] rounded-sm'>4.3</li>
                        <li className='flex'>
                            <Star size={12} color='orange' fill='orange'/>
                            <Star size={12} color='orange' fill='orange'/>
                            <Star size={12} color='orange' fill='orange'/>
                            <Star size={12} color='orange' fill='orange'/>
                            <Star size={12} color='gray' fill='light'/>
                        </li>
                        <li className='text-[13px]'>286 Rating</li>
                    </ul>
                    <p className='text-[14px] font-semibold'>Hoskote</p>
                    <ul className='flex gap-1 mt-2'>
                        <li className='border p-1 border-gray-300 rounded-sm'><Star size={15} color='gray'/></li>
                        <li className='border p-1 border-gray-300 rounded-sm'><Star size={15} color='gray'/></li>
                        <li className='border p-1 border-gray-300 rounded-sm'><Star size={15} color='gray'/></li>
                        <li className='border p-1 border-gray-300 rounded-sm'><Star size={15} color='gray'/></li>
                        <li className='border p-1 border-gray-300 rounded-sm'><Star size={15} color='gray'/></li>
                    </ul>
               
            </div>
        </div>
        <p className='w-full text-center text-blue-500'>Tap to rate</p>
    </div>
  )
}

export default Rating