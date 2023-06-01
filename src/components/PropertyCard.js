export default function PropertyCard({title, label, image}){
    return(
        <div className="property-card">
            <img src={image} alt="Image" />
            <h2>{title} <span>{label}</span></h2>
            <button>Learn more</button>
        </div>
    );
}