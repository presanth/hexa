
function EnquiryCard({imagesName} : {imagesName : string[]}) {
  return (
    <>
    {imagesName?.map((items)=>(
    <div className="w-[240px] h-[330px] rounded-lg overflow-hidden ">
        <img src={`/images/${items}.jpg`} className="w-[100%] h-[70%]" alt="" />
        <div className="bg-blue-500 h-[30%] px-3 py-1 ">
            <p className="text-white capitalize font-medium">{items}</p>
            <button onClick={()=>{alert('Thankyou')}} className="bg-white py-1 px-2 rounded-md mt-6 text-[15px] text-blue-500 font-semibold">Enquire Now</button>
        </div>
    </div>
    ))}
    </>

  )
}

export default EnquiryCard