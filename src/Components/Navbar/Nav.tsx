import { Megaphone,MessagesSquare,ChartLine,BellRing, ChevronDown } from 'lucide-react';
import './Nav.css'
function Nav() {
  return (
    <div className="flex flex-row justify-center w-full border pt-14 pb-7">
        <div className='flex w-[90%]'>
            <ul className='flex flex-row items-center ml-auto cursor-pointer'>
                <li className='nav-list text-blue-500'><MessagesSquare/>EN< ChevronDown/></li>
                <li className='nav-list'>we are Hiring</li>
                <li className='nav-list'>Investor Relations</li>
                <li className='nav-list'><Megaphone />Advertise</li>
                <li className='nav-list flex flex-col items-center -mt-5'><span className='border bg-red-600 pt-[1px] pb-[1px] ps-[3px] pe-[3px]  text-white  text-[10px]'>BUSINESS</span><span className='flex gap-1'><ChartLine size={17}/>Free Listing</span></li>
                <li className='nav-list'><BellRing size={24} strokeWidth={1.5} /></li>
            </ul>
            <button className='p-1 rounded-md bg-black text-white'>Login / Sign Up</button>
        </div>
    </div>
  )
}

export default Nav