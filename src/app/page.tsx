import Footer from "../app/components/Footer";
import Carousel from  "../app/components/CardCarousel";
import clinic from "../app/data/clinics";
import Image from "next/image";




function Home() {
  return (
    <>
    <Carousel/>
    
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">
          <span className="text-green-600">Our Clinics</span>
        </h1>
   
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
    


  <div className="container mx-auto px-4 py-8">
   <div className="flex flex-col lg:flex-row items-center">
    <div className="lg:w-1/2">
     <h1 className="text-4xl font-bold mb-4">
      Why choose
      <span className="text-green-500">
       Smazio
      </span>
      Smile Designers
     </h1>
     <p className="text-gray-600 mb-8">
      We design your smile using the latest technologies
     </p>
     <div className="bg-white shadow-lg rounded-lg p-6 mb-4">
      <div className="flex items-center mb-2">
       <i className="fas fa-users text-green-500 text-2xl mr-4">
       </i>
       <h3 className="text-xl font-bold">
        Our Team
       </h3>
      </div>
      <p className="text-gray-600">
       The team members have over 10 years combined experience so are able to build a bespoke treatment plan from start-to-finish- to transform your mouth.
      </p>
     </div>
     <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
      <div className="flex items-center mb-2">
       <i className="fas fa-user-md text-green-500 text-2xl mr-4">
       </i>
       <h3 className="text-xl font-bold">
        Expert Team Member
       </h3>
      </div>
      <p className="text-gray-600">
       Our team of facilitators includes experts in Dental implants, Smile designing, gum disease treatment, oral surgery, pediatric dentistry, orthodontics, prosthodontics, and more.
      </p>
     </div>
    </div>
    <div className="lg:w-1/2 mt-8 lg:mt-0 lg:pl-8 relative">
     <div className="absolute top-0 right-0 bg-green-500 text-white text-center rounded-full py-2 px-4 transform translate-x-1/2 -translate-y-1/2">
      <span className="block text-sm">
       SINCE
      </span>
      <span className="block text-2xl font-bold">
       2013
      </span>
     </div>
     <Image
                  className="card-img-top"
                  src="/images/img.jpg"
                  alt="Card image cap"
                  width={1500}
                  height={1500} // Adjusted height to a more reasonable value
                />
    </div>
   </div>
  </div>
<Footer/>
    </>
  );
}

export default Home;
