import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"

function IconBox() {
    const [category,setCategory] = useState([]);
    const categoryList = async ()=>{
        const data = await axios.get('http://localhost:8000/clone/getCategory')
        console.log(data.data);
        const result = data.data;
        setCategory(result);
    }
    useEffect(()=>{
        categoryList()
    },[])
        // let iconName : string[] = ['restaurant','hotels','beauty spa','home decor','restaurant','hotels','beauty spa','home decor','restaurant','hotels','beauty spa','home decor','restaurant','hotels','beauty spa','restaurant','hotels','beauty spa','home decor','restaurant']
  return (
<>
            {category?.map((itemName)=>(
                <Link to={`/product/${itemName.categoryid}`} className="flex flex-wrap  mt-2 mr-2 rounded-md bg-gray-200">
                    <div className="w-[100px] flex flex-col items-center text-center   p-[3px]">
                        <img src={`/icon/${itemName.categoryimage}`} className="p-2  rounded-md" alt="" />
                        <p className="text-[12px] capitalize">{itemName.categoryname}</p>
                    </div>
                </Link>
            ))}

</>
    
       

  )
}

export default IconBox