import CarouselPage from "../components/Carousel";
import clinic from "../data/clinics";
import Image from "next/image";

function Home() {
  console.log(CarouselPage)   
  return (
    <>
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">
          <span className="text-green-600">Our Clinics</span>
        </h1>
        {/* <img src="" alt=""/> */}
           <Image
                  className="card-img-top"
                  src="/images/clinic images/AL SHIFA OTHUKKUNGAL.jpg"
                  alt="Card image cap"
                  width={200}
                  height={100} // Adjusted height to a more reasonable value
                />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {clinic.map((clinic) => (
            <div
              key={clinic.id}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <h2 className="text-xl font-bold mb-4" style={{color:"black"}}>{clinic.name}</h2>
              <button className="bg-green-600 text-white py-2 px-4 rounded">
                Read More
              </button>
            </div>
          ))}
        </div>
    
      </div>
      
    </div>
{/* <CarouselPage/> */}
 
    </>
  );
}

export default Home;
