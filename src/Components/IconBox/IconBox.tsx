
function IconBox() {
    let iconName : string[] = ['restaurant','hotels','beauty spa','home decor','restaurant','hotels','beauty spa','home decor','restaurant','hotels','beauty spa','home decor','restaurant','hotels','beauty spa','restaurant','hotels','beauty spa','home decor','restaurant']
  return (
        <div className="flex flex-wrap mt-5">
                {iconName?.map((itemName)=>(
                    <div className="w-[100px] flex flex-col items-center text-center mr-5 mt-5  p-[3px]">
                        <img src={`/icon/${itemName}.png`} className="border p-2 w-[70px] rounded-md" alt="" />
                        <p className="text-[12px] capitalize">{itemName}</p>
                    </div>
                ))}
        </div>

       

  )
}

export default IconBox