

function VerticalBox({Head,imageNames}:{Head : string,imageNames : string[]}) {
  return (
    <div className="flex flex-col  py-[15px] px-[20px] border border-gray-300 rounded-md w-[50%]">
        <h3 className="text-[17px] font-medium mb-1">{Head}</h3>
        <div className="flex  justify-between">
        {imageNames?.map((itemName)=>(
                <div className="w-[calc(90%/3)] flex flex-col items-center">
                    <img src={`/images/${itemName}.jpg`} className="w-full rounded-lg h-[100px]" alt="" />
                    <p className=" mt-1 text-[16px] font-medium">{itemName}</p>
                </div>
            
        ))}
        </div>
        
    </div>
  )
}

export default VerticalBox