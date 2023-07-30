import {useContext} from "react";
import {FeaturedContext} from "@/store/featured-context";
import MyEvent from "@/models/MyEvent";
import Link from "next/link";

export default function EventItem(props) {

    const onImageError = (e) => {
        e.target.src = "https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg"
    }

    const featuredCtx = useContext(FeaturedContext);
    const isEventFeatured = featuredCtx.isEventFeatured(props.id);

    function toggleFavouriteStatus() {
        if (isEventFeatured) {
            featuredCtx.removeFeaturedEvent(props.id)
        } else {
            featuredCtx.addFeaturedEvent(new MyEvent(
                props.id,
                props.title,
                props.date,
                props.address,
                props.description,
                props.imagePath,
                props.isFeatured,
            ));
        }
    }

    const date = new Date(props.date).toLocaleDateString();

    return (
        <>
            <div className="col">
                <div className="card" style={{width: 18 + 'rem'}}>
                    <Link href={"events/"+props.id}>
                        <img
                            src={props.imagePath ? props.imagePath : ""}
                            className="card-img-top"
                            alt="..."
                            onError={onImageError}
                        />
                    </Link>
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.description}</p>
                        <p className="card-text">{date}</p>
                        <p className="card-text">
                            <small className="text-muted">{props.address}</small>
                        </p>
                        <button className="btn btn-light btn-outline-dark"
                                onClick={toggleFavouriteStatus}>{isEventFeatured ? "Remove from featured" : "Add to featured"} </button>
                        <Link href={"/events/" + props.id}><button className="btn btn-light btn-outline-dark">Explore Event</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}
