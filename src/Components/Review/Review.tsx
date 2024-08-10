import { Star } from 'lucide-react';
function Review({hide} : {hide:boolean}) {
    

  return (
    <div className="w-[400px] border border-gray-300 rounded-md flex flex-col items-center py-5">
        <div className="w-[90%] relative ">
            <h2 className='text-[20px] font-medium'>Dk Fitness Centre Chellanam</h2>
            <h5 className='text-[15px] '>Chellanam Ernakulam</h5>
                {hide? (
                    <p className=' flex gap-1 border absolute right-0 top-0 text-[17px] font-medium px-2 py-1 rounded-sm'> 
                <img src="/icon/download.jpg" className='w-[26px]' alt="" />
                chat
            </p>
                ) : " "}
            
        </div>
        <div className='w-[100%] h-[175px] mt-2 review-bg relative overflow-hidden'>
            <img src="/images/review.jpg" className='W-full' alt="" />
        </div>
        <div className="flex items-center mt-2 w-[90%]">
            <div className='w-10 h-10 rounded-full overflow-hidden'>
                <img src="/icon/hotels.png" className='w-[100] h-[100]' alt="" />
            </div>
            <div className='ml-2'>
                <p className='text-[16px] font-medium'>iya Brigit</p>
                <p  className='text-[12px]'>wrote a review</p>
            </div>
            
        </div>
        <p className='flex w-[90%] mt-3'>
                <Star size={15} color='orange' fill='orange'/>
                <Star size={15} color='orange' fill='orange'/>
                <Star size={15} color='orange' fill='orange'/>
                <Star size={15} color='orange' fill='orange'/>
                <Star size={15} color='orange' fill='orange'/>
        </p>
        <p className='w-[90%] mt-3 p-0 text-[14px] text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus vitae excepturi 
            accusantium, distinctio veritatis maxime libero natus quo 
        </p>

    </div>
  )
}

export default Review