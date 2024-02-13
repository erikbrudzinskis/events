import MyEvent from "@/models/MyEvent";
import Image from "next/image";
import CommentList from "@/components/comment/CommentList";

export default function EventDetails(props) {

    if (!props.event) {
        return <p>Event not found!</p>;
    }

    const event: MyEvent = JSON.parse(props.event);

    const date = new Date(event.date).toLocaleDateString('en-GB');

    return (
        <>
            <div className="container d-flex flex-column col-3 justify-content-center">
                <h2>{event.title}</h2>
                <Image src={event.imagePath} alt="{event.title}" width={320} height={220}/>
                <p>{event.description}</p>
                <p>{date}</p>
                <p>{event.address}</p>
            </div>
            <CommentList
                eventId={event.id}
                comments={props.comments}
            />
        </>
    )
}
