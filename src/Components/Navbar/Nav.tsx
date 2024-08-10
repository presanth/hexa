import { Megaphone,MessagesSquare,ChartLine,BellRing, ChevronDown } from 'lucide-react';
import './Nav.css'
import { useState } from 'react';
import SignUp from '../SignUP/SignUp';
function Nav() {
  const [toogle ,setToogle] = useState<boolean>(false)
  const handleChildData = (data: boolean) => {
    setToogle(data);
  };
  return (
    <div className="flex flex-row justify-center w-full border pt-10 pb-7 relative">
        <div className='flex w-[90%]'>
            <ul className='flex flex-row items-center ml-auto cursor-pointer'>
                <li className='nav-list text-blue-500'><MessagesSquare/>EN< ChevronDown/></li>
                <li className='nav-list'>we are Hiring</li>
                <li className='nav-list'>Investor Relations</li>
                <li className='nav-list'><Megaphone />Advertise</li>
                <li className='nav-list flex flex-col items-center -mt-5'><span className='border bg-red-600 pt-[1px] pb-[1px] ps-[3px] pe-[3px]  text-white  text-[10px]'>BUSINESS</span><span className='flex gap-1'><ChartLine size={17}/>Free Listing</span></li>
                <li className='nav-list'><BellRing size={24} strokeWidth={1.5} /></li>
            </ul>
            <button onClick={()=>{toogle === true ? setToogle(false) : setToogle(true)}} className='p-1 rounded-md bg-black text-white'>Login / Sign Up</button>
        </div>
        {toogle? (<SignUp onSendData={handleChildData}/>) : " "}
    </div>
  )
}

export default Nav