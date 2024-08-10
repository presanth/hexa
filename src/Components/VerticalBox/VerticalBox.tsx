import { useState } from "react";
import { X } from 'lucide-react';
function VerticalBox({Head,imageNames}:{Head : string,imageNames : string[]}) {
  
  // const [word, setWord] = useState<string >('hi');
  // const handleClick = () => {
  //   setWord('Hello, World!');
  // };

    const [word, setWord] = useState<boolean >(false);

  return (

    <div  className="flex flex-col  py-[15px] px-[20px] border border-gray-300 rounded-md w-[50%]">
        <h3 className="text-[17px] font-medium mb-1">{Head}</h3>
        <div className="flex  justify-between">
        {imageNames?.map((itemName)=>(
            <div  onClick={()=>setWord(true)} className="w-[calc(90%/3)] flex flex-col items-center">
                <img src={`/images/${itemName}.jpg`} className="w-full rounded-lg h-[100px]" alt="" />
                <p className=" mt-1 text-[16px] font-medium">{itemName}</p>
            </div>
        ))}
        </div>

        {word?(        <div className="w-[300px] h-[200px] flex justify-center items-center bg-gray-200 border border-black  absolute">
          <div className="w-full h-full flex justify-center items-center">
          <button className="absolute right-5 top-0" onClick={()=>setWord(false)}><X/></button>
          <p className="text-md text-red-500">Thanku For visit</p>
          </div>

        </div>) : " "}
    </div>  )
}

export default VerticalBox