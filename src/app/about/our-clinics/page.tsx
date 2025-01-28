import Card from "@/app/components/Card";
import Clinics from "../../data/clinics";

function About() {
   
    
    
    const clinicCards = Clinics.map(clinic => (
                   

                   
        <Card
            key={clinic.id}
            id = {clinic.id}
            imgSrc = {clinic.image[0]}
            title={clinic.name} 
            
        />
    ));

    return (
        
        <>
        
            <div style={{display:"flex", flexWrap:"wrap", marginTop:"50px"}} className="container">
            {clinicCards}
            </div>
        </>
    );
}

export default About;
