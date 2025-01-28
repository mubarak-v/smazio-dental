import ClinicDetails from "../../../data/clinics"
import Image from "next/image";

type clinicParams ={
  params: Promise<{ id: string }>

}
async function   Details({params}:clinicParams) {
  

    const clinicId = await(params)
    
    
    
    const clinicDetails = ClinicDetails.find(p=>
        
         p.id == (clinicId.id)

    )
  
 

    return ( <>
    <div  className="bg-gray-100">
    <div style={{width:"100%"}}  className="container bg-gray-100 mx-auto p-6   rounded-lg mt-10">
     <div className="flex flex-col md:flex-row">
      <div className="md:w-full">
       <h2 className="text-2xl font-bold text-gray-800">
        Welcome to Our Dental Clinic
       </h2>
       <p className="mt-4 text-gray-600">
       {clinicDetails?.description}       </p>
       <p className="mt-4 text-gray-600">
        Our state-of-the-art facility is equipped with the latest technology to provide you with the best possible care. We prioritize patient comfort and strive to create a welcoming and relaxing environment for all our patients.
       </p>
      </div>
     </div>
    </div>
</div>
    <div style={{display:"flex",flexWrap:"wrap", }} className="container">
  {clinicDetails && clinicDetails.image.map((img, index) => (
    <Image style={{width:"300px", margin:"15px", height:"300px"}}
      key={index} 
      className="card-img-top"
      src={img}
      alt={`Smazio Dental Image ${index + 1}`} 
      width={1500}
    />
  ))}
</div>

    </> );
}

export default Details; 