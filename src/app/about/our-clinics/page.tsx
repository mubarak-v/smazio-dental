import Card from "@/app/components/Card";
import Clinics from "../../data/clinics";

function About() {
   
    
    
    const clinicCards = Clinics.map(clinic => (
                   

                   
        <Card
            key={clinic.id}
            id = {clinic.id}
            imgSrc = {clinic.image[0]} // Use a unique key, typically the ID
            title={clinic.name} // Pass the name as the title
            
        />
    ));

    return (
        
        <>
        
            <div style={{display:"flex", flexWrap:"wrap", marginTop:"50px"}} className="container">
            {clinicCards} {/* Render all the Card components */}
            </div>
        </>
    );
}

export default About;
