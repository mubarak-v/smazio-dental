import Image from "next/image";
import Service from "../data/treatment";

 function Services() {
  const serviceData = Service; 

  return (
    <main className="container mx-auto p-4">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {serviceData.map((service) => (
          <div
            key={service.title}
            style={{ background: "#43ac34" }}
            className="service-card p-4 rounded-lg shadow-lg text-white"
          >
           
              <div style={{width:"500px", height:"400px", marginLeft:"0px"}}>

             
<Image style={{width:"350px", height:"400px"}}
      className="card-img-top"
      src={service.image}
      alt={service.image} 
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

  );

}

export default Services;
