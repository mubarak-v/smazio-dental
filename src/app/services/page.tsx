import Image from "next/image";
import Service from "../data/treatment";

 function Services() {
  const serviceData = Service; // Access the data directly
  console.log(serviceData); // Log the data to the console

  return (
    <main className="container mx-auto p-4">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {serviceData.map((service) => (
          <div
            key={service.title}
            style={{ background: "#43ac34" }}
            className="service-card p-4 rounded-lg shadow-lg text-white"
          >
            {/* Uncomment the line below if you want to use images */}
            {/* <Image 
                alt={service.imageAlt} 
                className="w-full h-40 object-cover rounded-t-lg" 
                src={service.imageUrl} 
                width={600} 
                height={400} 
              /> */}
              <div style={{width:"500px", height:"400px", marginLeft:"0px"}}>

             
<Image style={{width:"400px", margin:"15px", height:"400px"}}
       // Ensure each child in a list has a unique key
      className="card-img-top"
      src={service.image}
      alt={service.image} // Provide a descriptive alt text
      width={600} 
                height={400} 
    />
 </div>

            <h2 className="text-xl font-bold mt-4">{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </section>
    </main>
  // <> <h1>this is services  page </h1>
  // </>
  );

}

export default Services;
