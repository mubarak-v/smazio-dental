import Card from "@/app/components/Card";
import Clinics from "../../data/clinics";

function About() {
    // Map through the Clinics data to create clinic cards
    // console.log()
    const ima  = Clinics.map(p=>{
        console.log(p.image)
    })
    const clinicCards = Clinics.map(clinic => (
                   

                   
        <Card
            key={clinic.id}
            id = {clinic.id}
            imgSrc = {clinic.image} // Use a unique key, typically the ID
            title={clinic.name} // Pass the name as the title
            text={clinic.description || "No description available"} // Provide a fallback text if description is empty
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
