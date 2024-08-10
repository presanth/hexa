import { ChevronRight } from 'lucide-react';

function ServiceCad({cardHead , subTxt,color}: {cardHead : string ,subTxt: string[],color:string}) {
  return (
    <div className="min-w-[150px] min-h-[300px] rounded-lg ps-2 pt-3 text-[20px] font-semibold relative" 
    style={{
        backgroundColor : color
    }}
    
    >
        <h3 className="text-white text-[22px]">
            {cardHead}
        </h3>
        {subTxt ?.map((text)=>(
            <p className="text-[14px] text-white mt-1 font-normal">{text}</p>
        ))}
        <div className='absolute bottom-10 left-0  shadow-md shadow-gray-900 rounded-e-md p-2 flex items-center'
            style={{
                backgroundColor : color
            }}
        >
            <ChevronRight color="white" size={22}/>
        </div>
    </div>
  )
}

export default ServiceCad