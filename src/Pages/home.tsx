import Nav from "../Components/Navbar/Nav"
import ServiceCad from "../Components/ServiceCard/ServiceCad"
import IconBox from "../Components/IconBox/IconBox"
import VerticalBox from "../Components/VerticalBox/VerticalBox"
import EnquiryCard from "../Components/EnquiryCard/EnquiryCard"
import InputBar from "../Components/InputBar/InputBar"
import Review from "../Components/Review/Review"
import Rating from "../Components/Rating/Rating"

function Home() {
  return (
    <div className="w-[100%] h-[100vh] flex flex-col items-center pb-4 relative overflow-scroll">
        <Nav/>
        <div className="w-[90%]">
          <InputBar/>
        </div>
        <div className=" w-[90%] flex justify-end gap-6 mt-4 md:flex-wrap">
          <ServiceCad cardHead="B2B" subTxt={['quick','quotes']}  color='#a4a4a9'/>
          <ServiceCad cardHead="B2B" subTxt={['quick','quotes']}  color='#529d99'/>
          <ServiceCad cardHead="B2B" subTxt={['quick','quotes']}  color='#5e6085'/>
          <ServiceCad cardHead="B2B" subTxt={['quick','quotes']}  color='#2b739b'/>
        </div>
        <div className="w-[90%] flex justify-center">
          <IconBox/>
        </div>
        <div  className="w-[90%] flex justify-between mt-10  gap-6">
          <VerticalBox Head="Wedding Requisites" imageNames={['Banquet Halls','Bridal Requisite','Caterers']}/>
          <VerticalBox Head="Wedding Requisites" imageNames={['Banquet Halls','Bridal Requisite','Caterers']}/>
        </div>
        <div  className="w-[90%] flex justify-between mt-10  gap-6">
          <VerticalBox Head="Wedding Requisites" imageNames={['Banquet Halls','Bridal Requisite','Caterers']}/>
          <VerticalBox Head="Wedding Requisites" imageNames={['Banquet Halls','Bridal Requisite','Caterers']}/>
        </div>
        <div className="w-[90%] flex flex-col mt-5">
          <p className="text-black text-[20px] font-medium">Popular Searches</p>
          <div className="flex gap-4 mt-3">
            <EnquiryCard imagesName={['AC sepair & service','Carpenters','estate agents','packers & movers']}/>
          </div>
        </div>
        <div className="w-[90%] flex flex-col mt-5">
          <p className="text-[22px] font-bold">Recent Activity</p>
          <div className="flex gap-4 mt-3 flex-1">
            <Review />
            <Review/>
            <div className="border border-gray-300 rounded-md  flex flex-col justify-between p-5">
              <p className="text-[16px] font-bold">How would you rate your experience?</p>
              <Rating/>
              <Rating/>
          </div>
          </div>
          <div className="flex gap-4 mt-3 flex-1">
            <Review hide={true}/>
            <Review hide={true}/>
            <Review hide={true}/>
          </div>

        </div>

      <div className="w-[90%] flex justify-center ">
        <p className="w-[390px] border border-gray-300 mt-5 text-[16px] font-semibold text-blue-500 text-center rounded-md py-2">Load More</p>
      </div>

    </div>
  )
}

export default Home
