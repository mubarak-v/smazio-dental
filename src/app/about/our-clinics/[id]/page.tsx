import ClinicDetails from "../../../data/clinics"
async function   Details(props) {
    const clinicId = await (props.params).id
    console.log(clinicId)
    const clinicDetails = ClinicDetails.find(p=>
        
         p.id == clinicId

    )
    console.log(clinicDetails)
  
    console.log(clinicDetails.name)
   

    return ( <>
    <h1 style={{color:"black"}}>this is details page</h1>
    <h1 style={{color:"red"}}>
        {clinicDetails.name}
    </h1>

    </> );
}

export default Details; 