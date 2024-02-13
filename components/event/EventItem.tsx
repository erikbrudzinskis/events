import {useContext} from "react";
import {FeaturedContext} from "@/store/featured-context";
import MyEvent from "@/models/MyEvent";
import Link from "next/link";
import Image from "next/image";

export default function EventItem(props) {

    const onImageError = (e) => {
        e.target.src = "https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg"
    }

    const featuredCtx = useContext(FeaturedContext);
    const isEventFeatured = featuredCtx.isEventFeatured(props.id);

    // TODO: Remove this
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

    const date = new Date(props.date).toLocaleDateString('en-GB');

    return (
        <>
            <Link className='post-link link' href={"events/"+props.id}>
                <div className='post-wrap'>
                    <div className='post-image'>
                        <Image
                            src={props.imagePath ? props.imagePath : ""}
                            alt="..."
                            onError={onImageError}
                            className='post-image-nextjs'

                            fill={true}
                        />
                    </div>
                    <div className='post-body'>
                        <div className='post-body-primary'>
                            <div className='post-meta'>
                                <p>at <b>{props.address}</b> on {props.date}</p>
                            </div>
                            <div className='post-title'>
                                <h2>{props.title}</h2>
                            </div>
                            <div className='post-text'>
                                <p>{props.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
            {/*<div className="col">*/}
            {/*    <div className="card" style={{width: 18 + 'rem'}}>*/}
            {/*        <Link href={"events/"+props.id}>*/}
            {/*            <Image*/}
            {/*                src={props.imagePath ? props.imagePath : ""}*/}
            {/*                className="card-img-top"*/}
            {/*                alt="..."*/}
            {/*                onError={onImageError}*/}

            {/*                width={340}*/}
            {/*                height={160}*/}
            {/*            />*/}
            {/*        </Link>*/}
            {/*        <div className="card-body">*/}
            {/*            <h5 className="card-title">{props.title}</h5>*/}
            {/*            <p className="card-text">{props.description}</p>*/}
            {/*            <p className="card-text">{date}</p>*/}
            {/*            <p className="card-text">*/}
            {/*                <small className="text-muted">{props.address}</small>*/}
            {/*            </p>*/}
            {/*            <button className="btn btn-light btn-outline-dark"*/}
            {/*                    onClick={toggleFavouriteStatus}>{isEventFeatured ? "Remove from featured" : "Add to featured"} </button>*/}
            {/*            <Link href={"/events/" + props.id}><button className="btn btn-light btn-outline-dark">Explore Event</button></Link>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </>
    )
}
