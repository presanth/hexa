import Nav from "../Components/Navbar/Nav"
import ServiceCad from "../Components/ServiceCard/ServiceCad"
import IconBox from "../Components/IconBox/IconBox"
import VerticalBox from "../Components/VerticalBox/VerticalBox"
import EnquiryCard from "../Components/EnquiryCard/EnquiryCard"

function Home() {
  return (
    <div className="w-[100%] flex flex-col items-center">
        <Nav/>
        <div className=" w-[90%] flex justify-end gap-1">
          <ServiceCad cardHead="B2B" subTxt={['quick','quotes']}  color='blue'/>
          <ServiceCad cardHead="B2B" subTxt={['quick','quotes']}  color='yellow'/>
          <ServiceCad cardHead="B2B" subTxt={['quick','quotes']}  color='red'/>
          <ServiceCad cardHead="B2B" subTxt={['quick','quotes']}  color='green'/>
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
          <div className="flex gap-4">
            <EnquiryCard imagesName={['AC sepair & service','Carpenters','estate agents','packers & movers']}/>
          </div>
        </div>

    </div>
  )
}

export default Home
