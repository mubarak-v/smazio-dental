import Image from "next/image";

type CardProps = {
  imgSrc: string;
  title: string;
  id: string;
};

function Card(props: CardProps) {
  return (
    <>
   

   
      <div className="card" style={{ width: "18rem", margin: "8px" }}>
        <Image
          className="card-img-top"
          src={props.imgSrc}
          alt="Card image cap"
          width={200}
          height={100} // Adjusted height to a more reasonable value
        />
        <div className="card-body">
          <h5 style={{ color: "black" }} className="card-title">
            {props.title}
          </h5>
          <a
            style={{ color: "white", backgroundColor: "#43ac34" }}
            className="btn"
            href={`/about/our-clinics/${props.id || "#"}`}
          >
            Read More
          </a>
        </div>
      </div>

    </>
  );
}

export default Card;
